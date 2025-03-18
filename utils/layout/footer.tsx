import Link from "next/link"

/**
 * Footer component
 * 
 * Provides consistent footer across all pages with links and copyright information.
 * Responsive design with improved mobile layout and spacing.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/20 bg-background/80 backdrop-blur-md py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {/* Company info */}
          <div className="flex flex-col items-center sm:items-start space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-gradient text-center sm:text-left">Audemation</h3>
            <p className="text-sm text-foreground/80 max-w-sm text-center sm:text-left">
              Intelligent automation solutions for service accommodation businesses.
            </p>
            <address className="text-sm text-foreground/80 not-italic text-center sm:text-left">
              Woolwich House, 147 High Street<br />
              London, SE18 6BY<br />
              United Kingdom
            </address>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h4 className="font-medium text-base text-foreground/90">Quick Links</h4>
            <ul className="space-y-3 text-sm w-full text-center sm:text-left">
              <li>
                <Link href="/#home" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h4 className="font-medium text-base text-foreground/90">Services</h4>
            <ul className="space-y-3 text-sm w-full text-center sm:text-left">
              <li>
                <Link href="/#airbnb-bot" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  AirbnbBot
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Automation Benefits
                </Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h4 className="font-medium text-base text-foreground/90">Legal</h4>
            <ul className="space-y-3 text-sm w-full text-center sm:text-left">
              <li>
                <Link href="/legal/privacy-policy" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="text-foreground/80 hover:text-primary/90 transition-colors inline-block hover:translate-x-1 duration-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-foreground/80">
          <p>© {currentYear} Audemation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 