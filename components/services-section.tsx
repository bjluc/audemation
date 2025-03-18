import { Bot, Zap, BarChart } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <span className="text-sm font-medium section-title">Our Services</span>
          </div>
          <h2 id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            We offer a comprehensive suite of automation services designed specifically for service accommodation
            businesses throughout the United Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Service 1 - AirbnbBot */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">AirbnbBot</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Our flagship AI-powered chatbot designed specifically for Airbnb hosts, automating guest communications,
              bookings, and support requests 24/7 with personalised responses. Optimised for UK-based properties and
              compliant with local regulations.
            </p>
          </div>

          {/* Service 2 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Workflow Automation</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Streamline your operations by automating repetitive tasks like booking confirmations, check-in
              procedures, and follow-up communications. Our solutions integrate with popular UK property management
              systems.
            </p>
          </div>

          {/* Service 3 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Data Analytics</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Gain valuable insights from guest interactions and operational data to make informed business decisions
              and improve your services. Our analytics tools are GDPR-compliant and designed for the UK market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 