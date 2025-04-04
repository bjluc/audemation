"use server"

import { z } from "zod"
import { sendEmail, emailTemplates } from "@/lib/email"
import { emailConfig } from "@/app/email-config"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  recaptchaToken: z.string().optional(),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

/**
 * Verifies a reCAPTCHA token with Google's API
 * @param token The reCAPTCHA token to verify
 * @returns True if verification is successful, false otherwise
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
  // If no secret key is available, log a warning and allow the submission
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not set. Skipping reCAPTCHA verification.");
    return true;
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    
    console.log("reCAPTCHA verification response:", data);
    
    if (data.success) {
      return true;
    } else {
      console.error("reCAPTCHA verification failed:", data["error-codes"]);
      return false;
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    // In case of an error with the reCAPTCHA service, we'll allow the submission
    // This prevents the form from being blocked if Google's services are down
    return true;
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    recaptchaToken: formData.get("recaptchaToken"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please correct the errors in the form.",
    }
  }

  const { name, email, subject, message, recaptchaToken } = validatedFields.data

  try {
    // Verify reCAPTCHA token if provided
    let isLikelyBot = false;
    
    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      isLikelyBot = !isHuman;
    }
    
    // Check if required environment variables are set
    if (
      !process.env.FROM_EMAIL ||
      !process.env.GOOGLE_CLIENT_ID ||
      !process.env.GOOGLE_CLIENT_SECRET ||
      !process.env.GOOGLE_REFRESH_TOKEN
    ) {
      throw new Error("Email service is not properly configured. Please contact the administrator.")
    }

    // Get email templates - use the standard parameters
    const adminTemplate = emailTemplates.contactForm.toAdmin({ 
      name, 
      email, 
      subject, 
      // If it's a bot, append a warning to the message
      message: isLikelyBot 
        ? `${message}\n\n⚠️ NOTE: This submission failed reCAPTCHA verification and might be from a bot.` 
        : message
    })

    // Send email to admin
    const adminEmailResult = await sendEmail({
      to: emailConfig.contactEmail,
      from: {
        email: process.env.FROM_EMAIL,
        name: "Audemation Contact Form",
      },
      subject: isLikelyBot ? "[POSSIBLE BOT] " + adminTemplate.subject : adminTemplate.subject,
      text: adminTemplate.text,
      html: adminTemplate.html,
    })

    if (!adminEmailResult.success) {
      console.error("Failed to send admin email:", adminEmailResult.error)
      throw new Error(`Failed to send email: ${adminEmailResult.error}`)
    }

    // Only send auto-reply to user if not likely a bot
    if (!isLikelyBot) {
      const autoReplyTemplate = emailTemplates.contactForm.autoReply({ name, email, subject, message })
      const userEmailResult = await sendEmail({
        to: { email, name },
        from: {
          email: process.env.FROM_EMAIL,
          name: "Audemation",
        },
        subject: autoReplyTemplate.subject,
        text: autoReplyTemplate.text,
        html: autoReplyTemplate.html,
      })

      if (!userEmailResult.success) {
        console.error("Failed to send auto-reply email:", userEmailResult.error)
        // We'll still return success since the admin notification was sent
        return {
          success: true,
          message: "Thank you for your message! We've received your inquiry but couldn't send you a confirmation email.",
        }
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error: unknown) {
    // Handle any errors that occur during submission
    console.error("Contact form error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return {
      errors: {
        _form: [
          `There was a problem submitting your message: ${errorMessage}. Please try again later.`,
        ],
      },
      success: false,
    }
  }
}

