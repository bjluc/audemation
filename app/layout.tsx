import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import AnimatedGradientBackground from "@/components/animated-gradient-background"
import FloatingShapes from "@/components/floating-shapes"
import MobileNav from "@/components/mobile-nav"
import SmoothScroll from "@/components/smooth-scroll"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import ReCaptchaProvider from "@/components/recaptcha-provider"

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Audemation - Intelligent Automation for Service Accommodation | AirbnbBot",
  description:
    "Audemation provides cutting-edge automation solutions for service accommodation businesses. Our flagship AirbnbBot helps hosts streamline operations, reduce costs, and enhance guest experiences with 24/7 automated communications.",
  keywords:
    "automation, service accommodation, AirbnbBot, Airbnb automation, property management, chatbot, AI, guest communication, hospitality technology, UK automation service",
  authors: [{ name: "Audemation" }],
  creator: "Audemation",
  publisher: "Audemation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://audemation.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Audemation - Intelligent Automation for Service Accommodation",
    description:
      "Transform your service accommodation business with our cutting-edge automation solutions including AirbnbBot for seamless guest communications.",
    url: "https://audemation.com",
    siteName: "Audemation",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Audemation - Intelligent Automation for Service Accommodation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audemation - Intelligent Automation for Service Accommodation",
    description:
      "Transform your service accommodation business with our cutting-edge automation solutions including AirbnbBot for seamless guest communications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${lora.className} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ReCaptchaProvider>
            <SmoothScroll />
            <AnimatedGradientBackground />
            <FloatingShapes />
            <div className="bg-grid">
              <header className="sticky top-0 z-[100] backdrop-blur-md bg-background/70 border-b border-white/10">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-3xl font-bold text-gradient relative z-10" aria-label="Audemation - Home">
                      Audemation
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex space-x-8 relative z-10" aria-label="Main Navigation">
                      <Link href="/#home" className="text-foreground/80 hover-gradient-text transition-colors nav-link">
                        Home
                      </Link>
                      <Link href="/#about" className="text-foreground/80 hover-gradient-text transition-colors nav-link">
                        About
                      </Link>
                      <Link
                        href="/#services"
                        className="text-foreground/80 hover-gradient-text transition-colors nav-link"
                      >
                        Services
                      </Link>
                      <Link
                        href="/#benefits"
                        className="text-foreground/80 hover-gradient-text transition-colors nav-link"
                      >
                        Benefits
                      </Link>
                      <Link
                        href="/#tech-stack"
                        className="text-foreground/80 hover-gradient-text transition-colors nav-link"
                      >
                        Technology
                      </Link>
                      <Link
                        href="/#airbnb-bot"
                        className="text-foreground/80 hover-gradient-text transition-colors nav-link"
                      >
                        AirbnbBot
                      </Link>
                      <Link href="/#contact" className="text-foreground/80 hover-gradient-text transition-colors nav-link">
                        Contact
                      </Link>
                    </nav>

                    <div className="hidden md:block relative z-10">
                      <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
                    </div>

                    {/* Mobile menu button */}
                    <MobileNav />
                  </div>
                </div>
              </header>

              <main>{children}</main>
            </div>
            <Toaster />
          </ReCaptchaProvider>
        </ThemeProvider>

        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Audemation",
              url: "https://audemation.com",
              logo: "https://audemation.com/logo.png",
              description:
                "Audemation provides cutting-edge automation solutions for service accommodation businesses. Our flagship AirbnbBot helps hosts streamline operations, reduce costs, and enhance guest experiences with 24/7 automated communications.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Woolwich House, 147 High Street",
                addressLocality: "London",
                postalCode: "SE18 6BY",
                addressCountry: "GB",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-7123-4567",
                contactType: "customer service",
                email: "info@audemation.com",
              },
              sameAs: [
                "https://twitter.com/audemation",
                "https://www.linkedin.com/company/audemation",
                "https://www.facebook.com/audemation",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}