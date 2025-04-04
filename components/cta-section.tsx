"use client";

import Link from "next/link"
import { ArrowRight, Calendar, Mail, Zap, Users, Map, Cloud, BarChart, FileText, MessageSquare, Globe, MessagesSquare } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-16">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 animate-gradient-x pointer-events-none"></div>
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="text-sm font-medium">🔥 Only 4 Beta User Spots Remaining</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Complete Access Across All Channels!
          </h2>
          <p className="text-xl mb-4 text-foreground/80">
            Get premium features on every platform - WhatsApp, Telegram, and Website Widget. One property, all channels unlocked.
          </p>
          
          {/* Communication Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center gap-2 p-4 glass-card rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary mb-1" />
              <span className="text-base font-medium">WhatsApp</span>
              <span className="text-xs text-foreground/70">Direct guest messaging</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 glass-card rounded-lg">
              <MessagesSquare className="h-6 w-6 text-primary mb-1" />
              <span className="text-base font-medium">Telegram</span>
              <span className="text-xs text-foreground/70">Instant notifications</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 glass-card rounded-lg">
              <Globe className="h-6 w-6 text-primary mb-1" />
              <span className="text-base font-medium">Website Widget</span>
              <span className="text-xs text-foreground/70">Seamless integration</span>
            </div>
          </div>
          
          {/* Premium Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center gap-2 p-3 glass-card rounded-lg">
              <Map className="h-5 w-5 text-primary" />
              <span className="text-sm">Local Knowledge</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 glass-card rounded-lg">
              <Cloud className="h-5 w-5 text-primary" />
              <span className="text-sm">Weather Updates</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 glass-card rounded-lg">
              <BarChart className="h-5 w-5 text-primary" />
              <span className="text-sm">Full KPI Access</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 glass-card rounded-lg">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm">Unlimited Updates</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <p className="text-sm text-primary font-medium">4 out of 5 beta user spots remaining</p>
            </div>
            <div className="w-full max-w-xs bg-primary/10 rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: '20%' }}></div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <p className="text-sm text-primary font-medium">All channels • All features • No credit card</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Demo Booking Option */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">See All Channels Live</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Experience WhatsApp, Telegram, and Widget integration in action.
              </p>
              <Link 
                href="https://calendly.com/bernard-audemation/30min"
                target="_blank"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3
                  text-base font-medium text-white
                  bg-primary hover:bg-primary/90
                  rounded-xl
                  transition-all
                  cursor-pointer
                  shadow-lg hover:shadow-xl
                  active:scale-95
                  w-full
                "
              >
                Book Free Demo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Registration Option */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Access All Channels</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Start using WhatsApp, Telegram, and Website Widget today.
              </p>
              <Link 
                href="#contact"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3
                  text-base font-medium
                  border border-primary
                  hover:bg-primary/10
                  rounded-xl
                  transition-all
                  cursor-pointer
                  w-full
                "
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-primary">⚡ All Communication Channels Included!</p>
            <p className="text-sm text-foreground/80 mt-2">
              Get complete access to WhatsApp, Telegram, and Website Widget, plus all premium features like local insights, weather updates, and KPIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 