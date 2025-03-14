import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"
import { emailConfig } from "@/app/config"
import { google } from "googleapis"

export async function GET() {
  try {
    // Check if required environment variables are set
    const requiredEnvVars = ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_REFRESH_TOKEN", "FROM_EMAIL"]
    const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

    if (missingVars.length > 0) {
      return NextResponse.json(
        { error: `Missing required environment variables: ${missingVars.join(", ")}` },
        { status: 500 },
      )
    }

    // Test OAuth token validity first
    try {
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground",
      )

      oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      })

      const tokenInfo = await oauth2Client.getTokenInfo(process.env.GOOGLE_REFRESH_TOKEN)

      console.log("Token info:", JSON.stringify(tokenInfo, null, 2))
    } catch (tokenError: any) {
      return NextResponse.json(
        {
          error: "OAuth token validation failed",
          details: tokenError.message,
          suggestion: "Your refresh token appears to be invalid. Please generate a new one following the instructions.",
        },
        { status: 500 },
      )
    }

    // Send a test email
    const result = await sendEmail({
      to: emailConfig.contactEmail,
      from: {
        email: process.env.FROM_EMAIL!,
        name: "Audemation Test",
      },
      subject: "Test Email from Audemation",
      text: "This is a test email to verify the email configuration is working correctly.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Test Email</h2>
          <p>This is a test email to verify the email configuration is working correctly.</p>
          <p>If you're seeing this, the email system is functioning properly!</p>
          <p>Environment variables:</p>
          <ul>
            <li>GOOGLE_CLIENT_ID: ${process.env.GOOGLE_CLIENT_ID ? "✓ Set" : "✗ Missing"}</li>
            <li>GOOGLE_CLIENT_SECRET: ${process.env.GOOGLE_CLIENT_SECRET ? "✓ Set" : "✗ Missing"}</li>
            <li>GOOGLE_REFRESH_TOKEN: ${process.env.GOOGLE_REFRESH_TOKEN ? "✓ Set" : "✗ Missing"}</li>
            <li>FROM_EMAIL: ${process.env.FROM_EMAIL || "Not set"}</li>
            <li>CONTACT_EMAIL: ${emailConfig.contactEmail}</li>
          </ul>
          <p>Time of test: ${new Date().toISOString()}</p>
        </div>
      `,
    })

    if (!result.success) {
      return NextResponse.json({ error: "Failed to send test email", details: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      messageId: result.messageId,
      sentTo: emailConfig.contactEmail,
      sentFrom: process.env.FROM_EMAIL,
    })
  } catch (error: any) {
    console.error("Test email error:", error)
    return NextResponse.json({ error: "An error occurred", message: error.message }, { status: 500 })
  }
}

