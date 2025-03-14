import nodemailer from "nodemailer"
import { google } from "googleapis"

// Email templates remain the same
export const emailTemplates = {
  contactForm: {
    toAdmin: (data: { name: string; email: string; subject: string; message: string }) => ({
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        
        Message:
        ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #8b5cf6;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${data.message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
            This email was sent from the contact form on audemation.com
          </p>
        </div>
      `,
    }),

    autoReply: (data: { name: string; email: string; subject: string; message: string }) => ({
      subject: "Thank you for contacting Audemation",
      text: `
        Dear ${data.name},
        
        Thank you for contacting Audemation. We have received your message and will get back to you as soon as possible.
        
        For your reference, here is a copy of your message:
        
        Subject: ${data.subject}
        Message:
        ${data.message}
        
        Best regards,
        The Audemation Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thank You for Contacting Audemation</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for contacting Audemation. We have received your message and will get back to you as soon as possible.</p>
          <p>For your reference, here is a copy of your message:</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #8b5cf6;">
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p style="white-space: pre-line;"><strong>Message:</strong><br>${data.message}</p>
          </div>
          <p style="margin-top: 20px;">Best regards,<br>The Audemation Team</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>Audemation | Woolwich House, 147 High Street, London, SE18 6BY<br>
            <a href="https://audemation.com" style="color: #8b5cf6;">audemation.com</a></p>
          </div>
        </div>
      `,
    }),
  },
}

// Simplified email sending function using App Password approach
export async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
}: {
  to: string | { email: string; name?: string }
  from: string | { email: string; name?: string }
  subject: string
  text: string
  html: string
}) {
  try {
    // Format recipients
    const toEmail = typeof to === "string" ? to : to.email
    const toName = typeof to === "string" ? undefined : to.name
    const formattedTo = toName ? `${toName} <${toEmail}>` : toEmail

    const fromEmail = typeof from === "string" ? from : from.email
    const fromName = typeof from === "string" ? "Audemation" : from.name
    const formattedFrom = fromName ? `${fromName} <${fromEmail}>` : fromEmail

    console.log(`Sending email to: ${formattedTo}`)
    console.log(`From: ${formattedFrom}`)

    // Check for required environment variables
    if (
      !process.env.GOOGLE_CLIENT_ID ||
      !process.env.GOOGLE_CLIENT_SECRET ||
      !process.env.GOOGLE_REFRESH_TOKEN ||
      !process.env.FROM_EMAIL
    ) {
      throw new Error("Missing required environment variables for email configuration")
    }

    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground",
    )

    // Set credentials
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    })

    // Get access token
    const { token } = await oauth2Client.getAccessToken()

    if (!token) {
      throw new Error("Failed to obtain access token")
    }

    // Create transporter with access token
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.FROM_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: token,
      },
    })

    // Send email
    const info = await transporter.sendMail({
      from: formattedFrom,
      to: formattedTo,
      subject,
      text,
      html,
    })

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error.message || "Unknown error occurred while sending email",
    }
  }
}

