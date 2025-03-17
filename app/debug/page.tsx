"use client";

import { useEffect, useState } from "react";

export default function DebugPage() {
  const [clientEnv, setClientEnv] = useState<Record<string, string | undefined>>({});
  
  useEffect(() => {
    // Collect client-side environment variables
    setClientEnv({
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      NODE_ENV: process.env.NODE_ENV,
    });
  }, []);
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Environment Variables Debug</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Client-Side Environment Variables</h2>
        <div className="bg-gray-800 p-4 rounded-md">
          <pre className="text-green-400 whitespace-pre-wrap">
            {JSON.stringify(clientEnv, null, 2)}
          </pre>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Note: Make sure your environment variables are correctly set in Vercel with the NEXT_PUBLIC_ prefix for client-side access.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            For reCAPTCHA to work on the client side, you need to set <code className="bg-gray-700 px-1 rounded">NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> in your Vercel environment variables.
          </li>
          <li>
            For server-side verification, you need to set <code className="bg-gray-700 px-1 rounded">RECAPTCHA_SECRET_KEY</code> in your Vercel environment variables.
          </li>
          <li className="font-bold text-yellow-400">
            IMPORTANT: In Next.js, any environment variable used on the client side MUST be prefixed with NEXT_PUBLIC_ in both your code AND in Vercel.
          </li>
          <li>
            Make sure to redeploy your application after updating environment variables.
          </li>
        </ul>
      </div>
    </div>
  );
} 