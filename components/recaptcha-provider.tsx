"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

interface ReCaptchaProviderProps {
  children: ReactNode;
}

/**
 * ReCaptchaProvider component that wraps the application with Google reCAPTCHA v3
 * This provides invisible bot protection without disrupting the user experience
 */
export default function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  // Get reCAPTCHA site key from environment variable
  const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  // If no site key is provided, just render children without reCAPTCHA
  if (!reCaptchaSiteKey) {
    console.warn("No reCAPTCHA site key provided. Bot protection is disabled.");
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={reCaptchaSiteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "body",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
} 