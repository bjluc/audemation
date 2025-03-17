"use client"

import { useState, useRef, useEffect } from "react"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact-form"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { emailConfig } from "@/app/config"
import { useToast } from "@/components/ui/use-toast"
import Script from "next/script"

// Add reCAPTCHA type
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    onRecaptchaLoad?: () => void;
  }
}

export default function ContactForm() {
  // Use useState instead of useActionState
  const [formState, setFormState] = useState<ContactFormState>({
    errors: {},
    success: false,
  });
  
  // Add loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Track reCAPTCHA loading state
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  // reCAPTCHA site key from environment variable - using the name set in Vercel
  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY || "";
  
  // Use toast for notifications
  const { toast } = useToast();

  // Initialize reCAPTCHA
  useEffect(() => {
    // Log whether we have a site key
    console.log(`reCAPTCHA site key available: ${Boolean(recaptchaSiteKey)}`);
    
    // Define callback for when reCAPTCHA script loads
    window.onRecaptchaLoad = () => {
      console.log("onRecaptchaLoad callback triggered");
      if (window.grecaptcha) {
        console.log("reCAPTCHA is ready");
        setRecaptchaLoaded(true);
      } else {
        console.log("grecaptcha object not available in onRecaptchaLoad callback");
      }
    };
    
    // Set a timeout to handle cases where reCAPTCHA doesn't load properly
    const timeoutId = setTimeout(() => {
      if (!recaptchaLoaded && window.grecaptcha) {
        console.log("reCAPTCHA loaded but callback wasn't triggered, forcing ready state");
        setRecaptchaLoaded(true);
      } else if (!recaptchaLoaded) {
        console.log("reCAPTCHA failed to load after timeout, allowing form submission anyway");
        setRecaptchaLoaded(true); // Allow form submission even if reCAPTCHA fails to load
      }
    }, 5000); // 5 second timeout
    
    return () => {
      // Clean up
      delete window.onRecaptchaLoad;
      clearTimeout(timeoutId);
    };
  }, [recaptchaLoaded]);

  // Reset form after successful submission
  const [resetKey, setResetKey] = useState(0)
  const formRef = useRef<HTMLFormElement>(null);

  // Create a client-side form submission handler
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Set loading state
    setIsSubmitting(true);
    
    try {
      // Execute reCAPTCHA and get token
      let recaptchaToken = "";
      
      if (!window.grecaptcha) {
        console.warn("reCAPTCHA not loaded, proceeding with form submission anyway");
        // Continue with form submission even if reCAPTCHA is not available
        // The server will handle submissions without tokens appropriately
      } else {
        try {
          // Make sure grecaptcha is ready with a timeout
          const grecaptchaReady = await Promise.race([
            new Promise<boolean>((resolve) => {
              window.grecaptcha!.ready(() => {
                resolve(true);
              });
            }),
            new Promise<boolean>((resolve) => {
              setTimeout(() => resolve(false), 2000); // 2 second timeout
            })
          ]);
          
          if (grecaptchaReady) {
            // Execute reCAPTCHA
            recaptchaToken = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit' });
            console.log("reCAPTCHA token obtained successfully");
          } else {
            console.warn("reCAPTCHA ready timed out, proceeding without token");
          }
        } catch (e) {
          // Explicitly ignore the error variable
          void e;
          console.warn("reCAPTCHA execution failed, proceeding without token");
        }
      }
      
      // Make sure we have a valid form reference
      if (!formRef.current) {
        toast({
          title: "Error",
          description: "There was a problem with the form. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Get form values directly from the form elements
      const nameInput = formRef.current.querySelector<HTMLInputElement>('input[name="name"]');
      const emailInput = formRef.current.querySelector<HTMLInputElement>('input[name="email"]');
      const subjectInput = formRef.current.querySelector<HTMLInputElement>('input[name="subject"]');
      const messageInput = formRef.current.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
      
      if (!nameInput || !emailInput || !subjectInput || !messageInput) {
        toast({
          title: "Error",
          description: "There was a problem with the form fields. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Create FormData manually
      const formData = new FormData();
      formData.append("name", nameInput.value);
      formData.append("email", emailInput.value);
      formData.append("subject", subjectInput.value);
      formData.append("message", messageInput.value);
      
      // Add reCAPTCHA token to form data
      formData.append("recaptchaToken", recaptchaToken);
      
      const result = await submitContactForm(formState, formData);
      
      setFormState(result);
      
      if (result.success && formRef.current) {
        formRef.current.reset();
        
        // Show success toast
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
          variant: "default",
        });
      }
    } catch (e) {
      // Explicitly ignore the error variable
      void e;
      
      // Show error toast if something goes wrong
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      // Reset loading state
      setIsSubmitting(false);
    }
  }

  // If form was successfully submitted, show success message
  if (formState.success) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-foreground/80 mb-6">{formState.message}</p>
        <Button 
          onClick={() => {
            setResetKey((prev) => prev + 1);
            setFormState({ errors: {}, success: false });
          }} 
          className="bg-primary hover:bg-primary/90"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  // If there's a server error that might be related to email service configuration
  const hasServerError = formState.errors?._form && formState.errors._form[0]?.includes("problem submitting")
  const errorMessage = formState.errors?._form?.[0] || ""
  const isOAuthError =
    errorMessage.includes("OAuth2") || errorMessage.includes("token") || errorMessage.includes("credentials")
  const isAuthError =
    errorMessage.includes("auth") || errorMessage.includes("login") || errorMessage.includes("Username and Password")

  return (
    <>
      {/* Load reCAPTCHA script */}
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}&onload=onRecaptchaLoad`}
          strategy="beforeInteractive"
          onError={() => {
            console.error("Failed to load reCAPTCHA script");
            // Allow form submission even if script fails to load
            setRecaptchaLoaded(true);
          }}
        />
      )}
      
      {!recaptchaLoaded && (
        <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-md flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
          <div className="text-yellow-500 text-sm">
            <p>Loading security verification... Please wait.</p>
          </div>
        </div>
      )}
      
      <form key={resetKey} ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative">
        {/* Loading overlay */}
        {isSubmitting && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-md">
            <div className="flex flex-col items-center p-4 bg-card rounded-lg shadow-lg border border-border">
              <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
              <p className="text-sm font-medium">Sending your message...</p>
            </div>
          </div>
        )}
        
        {/* Form-level error message */}
        {formState.errors?._form && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <div className="text-red-500 text-sm">
              <p>{formState.errors._form}</p>
              {hasServerError && (
                <div className="mt-2 p-2 bg-red-500/5 rounded border border-red-500/20 text-xs">
                  <p className="font-semibold mb-1">Troubleshooting steps:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    {isOAuthError && (
                      <>
                        <li>Your Google OAuth credentials may be invalid or expired</li>
                        <li>Generate a new refresh token using the OAuth Playground</li>
                        <li>Make sure you&apos;ve enabled the Gmail API in your Google Cloud Console</li>
                      </>
                    )}
                    {isAuthError && (
                      <>
                        <li>Check that your FROM_EMAIL matches the email used to generate the OAuth tokens</li>
                        <li>Verify that your Google account doesn&apos;t have security restrictions</li>
                        <li>Make sure 2-factor authentication is properly set up</li>
                      </>
                    )}
                    <li>Verify all environment variables are correctly set</li>
                    <li>Check server logs for more detailed error information</li>
                  </ul>
                  <p className="mt-2">
                    Please contact us directly at{" "}
                    <a href={`mailto:${emailConfig.contactEmail}`} className="underline hover:text-red-400">
                      {emailConfig.contactEmail}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 bg-background/50 border ${
                formState.errors?.name ? "border-red-500" : "border-white/10"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Your name"
              aria-required="true"
              disabled={isSubmitting}
            />
            {formState.errors?.name && <p className="mt-1 text-sm text-red-500">{formState.errors.name[0]}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 bg-background/50 border ${
                formState.errors?.email ? "border-red-500" : "border-white/10"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Your email"
              aria-required="true"
              disabled={isSubmitting}
            />
            {formState.errors?.email && <p className="mt-1 text-sm text-red-500">{formState.errors.email[0]}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`w-full px-4 py-2 bg-background/50 border ${
              formState.errors?.subject ? "border-red-500" : "border-white/10"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
            placeholder="Subject"
            aria-required="true"
            disabled={isSubmitting}
          />
          {formState.errors?.subject && <p className="mt-1 text-sm text-red-500">{formState.errors.subject[0]}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`w-full px-4 py-2 bg-background/50 border ${
              formState.errors?.message ? "border-red-500" : "border-white/10"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
            placeholder="Your message"
            aria-required="true"
            disabled={isSubmitting}
          ></textarea>
          {formState.errors?.message && <p className="mt-1 text-sm text-red-500">{formState.errors.message[0]}</p>}
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90" 
          disabled={isSubmitting || !recaptchaLoaded}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : !recaptchaLoaded ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading security verification...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </>
  )
}

