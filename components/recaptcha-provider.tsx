"use client";

import { ReactNode } from "react";

interface ReCaptchaProviderProps {
  children: ReactNode;
}

/**
 * Simple ReCaptchaProvider component that serves as a wrapper
 * The actual reCAPTCHA script is loaded directly in the contact form component
 */
export default function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  return <>{children}</>;
} 