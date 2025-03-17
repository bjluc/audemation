"use client";

import { ReactNode, useEffect } from "react";

interface ReCaptchaProviderProps {
  children: ReactNode;
}

// Global variable to store the reCAPTCHA execution function
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    executeRecaptcha?: (action: string) => Promise<string>;
  }
}

/**
 * Simple ReCaptchaProvider component that loads the reCAPTCHA script directly
 */
export default function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  const siteKey = "6Leig_YqAAAAACmNzWjqkpjKa30t-cncUfI8bxUT";

  // Initialize reCAPTCHA
  useEffect(() => {
    // Add the script tag programmatically
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Wait for grecaptcha to be available
    const checkGrecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          console.log("reCAPTCHA is ready!");
          
          // Create a global executeRecaptcha function
          window.executeRecaptcha = (action) => {
            console.log(`Executing reCAPTCHA with action: ${action}`);
            return window.grecaptcha!.execute(siteKey, { action });
          };
        });
      } else {
        // If not available yet, check again in 100ms
        setTimeout(checkGrecaptcha, 100);
      }
    };
    
    // Start checking after a short delay to allow script to load
    setTimeout(checkGrecaptcha, 500);

    // Clean up
    return () => {
      document.head.removeChild(script);
      delete window.executeRecaptcha;
    };
  }, [siteKey]);

  return <>{children}</>;
} 