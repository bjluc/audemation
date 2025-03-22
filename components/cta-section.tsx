"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-16">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 animate-gradient-x pointer-events-none"></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Transform Your Airbnb Business with AirbnbBot Today
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Experience the power of automation and take your customer service to the next level with our innovative
            chatbot solutions. Join hundreds of successful UK property managers already using our platform.
          </p>

          <div className="space-y-4">
            {/* Main CTA Button */}
            <div>
              <Link 
                href="https://calendly.com/bernard-audemation/30min"
                target="_blank"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  text-lg font-medium text-white
                  bg-primary hover:bg-primary/90
                  rounded-xl
                  transition-all
                  cursor-pointer
                  shadow-lg hover:shadow-xl
                  active:scale-95
                "
              >
                Get Started Today! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Alternative CTA Button */}
            <div>
              <Link 
                href="https://calendly.com/bernard-audemation/30min"
                target="_blank"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  text-lg font-medium text-white
                  bg-blue-600 hover:bg-blue-700
                  rounded-xl
                  transition-all
                  cursor-pointer
                  shadow-lg hover:shadow-xl
                  active:scale-95
                "
              >
                Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 