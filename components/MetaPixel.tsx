'use client';

import Script from 'next/script';

// Declare Facebook Pixel types
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function MetaPixel() {
  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="lazyOnload"
        onError={(e) => {
          // Silently handle the error - likely due to ad blocker
          console.debug('Meta Pixel loading was blocked (likely due to ad blocker)');
        }}
        onLoad={() => {
          try {
            window.fbq = window.fbq || function() {
              (window.fbq.q = window.fbq.q || []).push(arguments);
            };
            window._fbq = window._fbq || window.fbq;
            window.fbq('init', '417467987345117');
            window.fbq('track', 'PageView');
          } catch (error) {
            // Silently handle any errors during initialization
            console.debug('Meta Pixel initialization failed');
          }
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=417467987345117&ev=PageView&noscript=1"
          alt=""
          loading="lazy"
        />
      </noscript>
    </>
  );
} 