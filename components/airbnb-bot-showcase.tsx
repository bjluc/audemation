import Image from "next/image"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AirbnbBotShowcase() {
  return (
    <section id="airbnb-bot" className="py-10 md:py-16 relative" aria-labelledby="airbnb-bot-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <div className="mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="text-sm font-medium section-title">Featured Product</span>
            </div>
          </div>
          <h2 id="airbnb-bot-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Introducing AirbnbBot
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            The ultimate automation solution designed specifically for Airbnb hosts and service accommodation
            businesses in the UK and Europe.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="relative mx-auto max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Telegram Chatbot Image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20 animate-pulse-slow"></div>
                <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-indigo-900/20 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <Image
                    src="/images/Telegram-chatbbot.webp"
                    alt="Telegram chatbot interface for AirbnbBot showing automated messaging capabilities"
                    width={400}
                    height={400}
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
              
              {/* WhatsApp Chatbot Image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20 animate-pulse-slow"></div>
                <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-indigo-900/20 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <Image
                    src="/images/WhatsApp-chatbot.webp"
                    alt="WhatsApp chatbot interface for AirbnbBot showing automated guest communications"
                    width={400}
                    height={400}
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gradient mb-4">Features</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Feature 1 */}
              <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Automated Guest Messaging</h3>
                <p className="text-sm md:text-base text-foreground/80">
                  Instantly respond to guest enquiries with personalised messages tailored to your property and brand
                  voice.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Check-in Assistance</h3>
                <p className="text-sm md:text-base text-foreground/80">
                  Guide guests through the check-in process with automated instructions, including UK-specific
                  information about the property and local area.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Local Recommendations</h3>
                <p className="text-sm md:text-base text-foreground/80">
                  Provide guests with personalised local recommendations for restaurants, attractions, and activities
                  in your property's neighbourhood.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Issue Resolution</h3>
                <p className="text-sm md:text-base text-foreground/80">
                  Handle common guest issues and escalate to you only when necessary, ensuring prompt resolution and
                  guest satisfaction.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Learn More About AirbnbBot</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 