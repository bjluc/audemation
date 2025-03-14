# Setting Up Google Workspace Email for Contact Form

This guide will help you connect your Google Workspace account to the contact form in your application.

## Prerequisites

- A Google Workspace account (or a regular Gmail account)
- Access to [Google Cloud Console](https://console.cloud.google.com/)

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your project ID

## Step 2: Enable the Gmail API

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Gmail API"
3. Click on "Gmail API" and then click "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type (unless you have Google Workspace with internal users only)
3. Fill in the required information:
   - App name: "Audemation Contact Form"
   - User support email: Your email address
   - Developer contact information: Your email address
4. Click "Save and Continue"
5. Add the following scope: `https://www.googleapis.com/auth/gmail.send`
6. Click "Save and Continue"
7. Add your email address as a test user
8. Click "Save and Continue" and then "Back to Dashboard"

## Step 4: Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" and select "OAuth client ID"
3. For Application type, select "Web application"
4. Name: "Audemation Contact Form"
5. Add Authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - Your production URL (if available)
6. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - Your production redirect URL (if available)
7. Click "Create"
8. Note down your Client ID and Client Secret

## Step 5: Get a Refresh Token

1. Go to the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the gear icon (⚙️) in the top right corner
3. Check "Use your own OAuth credentials"
4. Enter your Client ID and Client Secret from Step 4
5. Close the settings
6. In the left panel, find "Gmail API v1" and select `https://www.googleapis.com/auth/gmail.send`
7. Click "Authorize APIs" and log in with your Google Workspace account
8. After authorization, click "Exchange authorization code for tokens"
9. Note down the "Refresh token" value

## Step 6: Update Environment Variables

Update your `.env.local` file with the following values:

```
FROM_EMAIL=your-workspace-email@yourdomain.com
GOOGLE_CLIENT_ID=your-client-id-from-step-4
GOOGLE_CLIENT_SECRET=your-client-secret-from-step-4
GOOGLE_REFRESH_TOKEN=your-refresh-token-from-step-5
CONTACT_EMAIL=email-to-receive-form-submissions@yourdomain.com
```

## Step 7: Test the Contact Form

1. Restart your development server
2. Fill out and submit the contact form
3. Check both the recipient email and the sender email for the messages

## Troubleshooting

If you encounter issues:

1. **Authentication Errors**:
   - Verify that your Client ID, Client Secret, and Refresh Token are correct
   - Make sure the Gmail API is enabled
   - Check that your OAuth consent screen is properly configured

2. **Email Not Sending**:
   - Verify that your FROM_EMAIL matches the email used to generate the OAuth tokens
   - Check that your Google account doesn't have security restrictions
   - Make sure 2-factor authentication is properly set up if required

3. **Invalid Tokens**:
   - Refresh tokens can expire if unused for extended periods
   - If your token is invalid, repeat Step 5 to generate a new refresh token

4. **Quota Limits**:
   - Google has limits on the number of emails you can send
   - For production use, consider upgrading your Google Cloud project

## Additional Resources

- [Gmail API Documentation](https://developers.google.com/gmail/api/guides)
- [OAuth 2.0 for Web Server Applications](https://developers.google.com/identity/protocols/oauth2/web-server)
- [Nodemailer OAuth2 Documentation](https://nodemailer.com/smtp/oauth2/) 