'use client';

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import PhoneNumber from "./PhoneNumber";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-xl font-bold text-gradient mb-4">Audemation Services</h3>
                <p className="text-foreground/60 mb-4 max-w-xs mx-auto sm:mx-0">
                  Transforming service accommodation businesses with intelligent automation solutions throughout the
                  United Kingdom.
                </p>
                <div className="space-y-2">
                  <div>
                    <Link href="/legal/terms" className="text-foreground/60 hover:text-primary transition-colors">
                      Terms and Conditions
                    </Link>
                  </div>
                  <div>
                    <Link href="/legal/privacy" className="text-foreground/60 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <div>
                    <Link href="/#about" className="text-foreground/60 hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </div>
                  <div>
                    <Link href="/#services" className="text-foreground/60 hover:text-primary transition-colors">
                      Services
                    </Link>
                  </div>
                  <div>
                    <Link href="/#benefits" className="text-foreground/60 hover:text-primary transition-colors">
                      Benefits
                    </Link>
                  </div>
                  <div>
                    <Link href="/#tech-stack" className="text-foreground/60 hover:text-primary transition-colors">
                      Technology Stack
                    </Link>
                  </div>
                  <div>
                    <Link href="/#contact" className="text-foreground/60 hover:text-primary transition-colors">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-bold text-foreground mb-4">Services</h3>
                <div className="space-y-2">
                  <div>
                    <Link href="/#airbnb-bot" className="text-foreground/60 hover:text-primary transition-colors">
                      AirbnbBot
                    </Link>
                  </div>
                  <div>
                    <Link href="/#workflow" className="text-foreground/60 hover:text-primary transition-colors">
                      Workflow Automation
                    </Link>
                  </div>
                  <div>
                    <Link href="/#analytics" className="text-foreground/60 hover:text-primary transition-colors">
                      Data Analytics
                    </Link>
                  </div>
                  <div>
                    <Link href="/#custom" className="text-foreground/60 hover:text-primary transition-colors">
                      Custom Solutions
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
                <address className="not-italic space-y-2 text-foreground/60">
                  <p>Woolwich House</p>
                  <p>147 High Street</p>
                  <p>London, SE18 6BY</p>
                  <p>
                    <Link 
                      href="mailto:info@audemation.com"
                      className="hover:text-primary transition-colors"
                    >
                      info@audemation.com
                    </Link>
                  </p>
                  <div>
                    <PhoneNumber />
                  </div>
                </address>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 text-center text-foreground/60">
            <p>© {new Date().getFullYear()} Audemation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 