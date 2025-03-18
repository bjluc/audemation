import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BackgroundAnimation from "@/utils/animations/background_animation"

export default function Hero() {
  return (
    <section id="home" className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="hero-heading">
      <BackgroundAnimation />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4 mx-auto md:mx-0">
              <span className="text-sm font-medium section-title">Automation for Service Accommodation</span>
            </div>
            <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient">
              Transform Your Business with Intelligent Automation
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mx-auto md:mx-0 max-w-xl">
              Streamline operations, reduce costs, and enhance guest experiences with our cutting-edge automation
              solutions, featuring our revolutionary AirbnbBot. Designed specifically for UK-based service
              accommodation providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0 mx-auto">
            <div className="max-w-md mx-auto relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20"></div>
              <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-indigo-900/30 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <Image
                  src="/images/man-with-chatbot.jpeg"
                  alt="Professional property manager using Audemation's AI chatbot interface to automate guest communications and property management tasks"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg"
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