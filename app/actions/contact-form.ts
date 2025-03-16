"use server"

import { z } from "zod"
import { sendEmail, emailTemplates } from "@/lib/email"
import { emailConfig } from "@/app/config"

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
  if (!token) return false;
  
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.warn("reCAPTCHA secret key not configured");
      return true; // Allow submission if not configured
    }
    
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();
    
    // Check if the score is above threshold (0.5 is a good balance)
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
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
    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      
      if (!isHuman) {
        return {
          errors: {
            _form: ["Bot activity detected. Please try again."],
          },
          success: false,
        };
      }
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

    // Get email templates
    const adminTemplate = emailTemplates.contactForm.toAdmin({ name, email, subject, message })

    // Send email to admin
    const adminEmailResult = await sendEmail({
      to: emailConfig.contactEmail,
      from: {
        email: process.env.FROM_EMAIL,
        name: "Audemation Contact Form",
      },
      subject: adminTemplate.subject,
      text: adminTemplate.text,
      html: adminTemplate.html,
    })

    if (!adminEmailResult.success) {
      console.error("Failed to send admin email:", adminEmailResult.error)
      throw new Error(`Failed to send email: ${adminEmailResult.error}`)
    }

    // Send auto-reply to user
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

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error: any) {
    // Handle any errors that occur during submission
    console.error("Contact form error:", error)
    return {
      errors: {
        _form: [
          `There was a problem submitting your message: ${error.message || "Unknown error"}. Please try again later.`,
        ],
      },
      success: false,
    }
  }
}

