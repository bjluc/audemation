import { Bot, Zap, BarChart } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 relative" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="text-sm font-medium section-title">Our Services</span>
            </div>
          </div>
          <h2 id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Powerful Features for Property Managers
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Everything you need to automate your property management and enhance guest experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Service 1 - Property AI Assistant */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Property AI Assistant</h3>
            <p className="text-sm md:text-base text-foreground/80">
              AI-powered chatbot that handles guest inquiries 24/7, automates bookings, and provides instant support. Customised for UK property management requirements.
            </p>
          </div>

          {/* Service 2 - Multi-Channel Support */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Multi-Channel Support</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Seamlessly manage conversations across Web, WhatsApp, and Telegram. Keep all your guest communications in one place.
            </p>
          </div>

          {/* Service 3 - Smart Analytics */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Smart Analytics</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Track response times, guest satisfaction, and booking conversion rates. Make data-driven decisions to improve your property management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 