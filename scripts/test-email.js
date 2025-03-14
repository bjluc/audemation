// Test script to verify email configuration
// Run with: node scripts/test-email.js

require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

async function testEmailConfig() {
  console.log('Testing email configuration...');
  
  // Check for required environment variables
  const requiredVars = [
    'FROM_EMAIL',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'GOOGLE_REFRESH_TOKEN',
    'CONTACT_EMAIL'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    console.error('\nPlease add these to your .env.local file and try again.');
    process.exit(1);
  }
  
  console.log('✅ All required environment variables are set');
  
  try {
    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );
    
    // Set credentials
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });
    
    console.log('🔄 Getting access token...');
    
    // Get access token
    const { token } = await oauth2Client.getAccessToken();
    
    if (!token) {
      throw new Error('Failed to obtain access token');
    }
    
    console.log('✅ Access token obtained successfully');
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.FROM_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: token
      }
    });
    
    console.log('🔄 Sending test email...');
    
    // Send test email
    const info = await transporter.sendMail({
      from: `"Email Test" <${process.env.FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'Test Email from Audemation Contact Form',
      text: 'This is a test email to verify your email configuration is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Email Configuration Test</h2>
          <p>This is a test email to verify your email configuration is working correctly.</p>
          <p>If you're seeing this, your email setup is working! 🎉</p>
          <hr>
          <p style="color: #6b7280; font-size: 12px;">
            Sent from: ${process.env.FROM_EMAIL}<br>
            To: ${process.env.CONTACT_EMAIL}
          </p>
        </div>
      `
    });
    
    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    
  } catch (error) {
    console.error('❌ Error testing email configuration:');
    console.error(error);
    
    if (error.message.includes('invalid_grant')) {
      console.error('\n🔑 Your refresh token may be invalid or expired.');
      console.error('   Please generate a new refresh token using the OAuth 2.0 Playground.');
    } else if (error.message.includes('invalid_client')) {
      console.error('\n🔑 Your client ID or client secret may be incorrect.');
      console.error('   Please check your Google Cloud Console credentials.');
    }
    
    process.exit(1);
  }
}

testEmailConfig(); 