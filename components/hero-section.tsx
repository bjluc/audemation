import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Map, Cloud } from "lucide-react"
import BackgroundAnimation from "@/components/background_animation"

export default function HeroSection() {
  return (
    <section id="home" className="relative py-10 md:py-16 overflow-hidden" aria-labelledby="hero-heading">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">Smart Local Guide & Weather Updates</span>
              </div>
            </div>
            <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient">
              Your AI Property Assistant with Local Expertise
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mx-auto md:mx-0 max-w-xl">
              Enhance guest experience with AI-powered local recommendations and live weather updates. Try free for one property during beta.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Map className="h-5 w-5 text-primary" />
                <span className="text-sm">Local Insights</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Cloud className="h-5 w-5 text-primary" />
                <span className="text-sm">Weather Updates</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">Free Beta Access</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
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
                  w-full sm:w-auto
                "
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services"
                className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  text-lg font-medium
                  border border-white/10
                  hover:bg-white/5
                  rounded-xl
                  transition-all
                  cursor-pointer
                  w-full sm:w-auto
                "
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0 mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20"></div>
              <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-indigo-900/30 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <Image
                  src="/images/chatbot-dashboard.jpg"
                  alt="Professional business dashboard showing chatbot analytics, lead generation metrics, and data analysis interface"
                  width={1640}
                  height={924}
                  className="object-cover rounded-lg w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 