import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { NavButton } from "@/components/ui/nav-button"
import AnimatedGradientBackground from "@/components/animated-gradient-background"
import FloatingShapes from "@/components/floating-shapes"
import MobileNav from "@/components/mobile-nav"
import SmoothScroll from "@/components/smooth-scroll"
import { Toaster } from "@/components/ui/toaster"
import ReCaptchaProvider from "@/components/recaptcha-provider"
import MetaPixel from "@/components/MetaPixel"
import { Button } from "@/components/ui/button"
import PhoneNumber from "@/components/PhoneNumber"
import { Phone, Mail } from "lucide-react"
import Footer from "@/components/Footer"
import { defaultMetadata, siteConfig } from "./metadata"
import JsonLd from './components/JsonLd'

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lora.className} bg-background`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MetaPixel />
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
                  <nav className="hidden lg:flex space-x-8 relative z-10" aria-label="Main Navigation">
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

                  <div className="hidden lg:block relative z-10">
                    <Link href="https://calendly.com/bernard-audemation/30min" target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 group"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>

                  {/* Mobile menu button */}
                  <div className="lg:hidden">
                    <MobileNav />
                  </div>
                </div>
              </div>
            </header>

            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  )
}