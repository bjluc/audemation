# Automation - Next.js Web Application

A modern web application built with Next.js, featuring a contact form with Google Workspace email integration.

## Features

- **Modern UI/UX**: Clean, responsive design with animations
- **Contact Form**: Integrated with Google Workspace for email functionality
- **Toast Notifications**: User feedback for form submissions
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Email Integration**: Google Workspace API
- **UI Components**: Shadcn UI
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm (Node Package Manager)
- Google Workspace account (for email functionality)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/automation.git
   cd automation
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_CLIENT_ID=your-client-id
   GMAIL_CLIENT_SECRET=your-client-secret
   GMAIL_REFRESH_TOKEN=your-refresh-token
   GMAIL_REDIRECT_URI=https://developers.google.com/oauthplayground
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Testing Email Functionality

To test the email functionality:
```bash
npm run test-email
```

## Google Workspace Email Setup

For detailed instructions on setting up Google Workspace email integration, refer to the [GOOGLE_EMAIL_SETUP.md](GOOGLE_EMAIL_SETUP.md) file.

## Project Structure

```
automation/
├── app/                  # Next.js app directory
│   ├── actions/          # Server actions
│   ├── api/              # API routes
│   └── ...               # Page components
├── components/           # Reusable components
│   ├── ui/               # UI components
│   └── ...               # Other components
├── lib/                  # Utility functions
├── public/               # Static assets
├── scripts/              # Utility scripts
└── styles/               # Global styles
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/) 