import { Clock, BarChart, Zap, Bot, Shield } from "lucide-react"

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 relative" aria-labelledby="benefits-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <span className="text-sm font-medium section-title">Benefits</span>
          </div>
          <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Why Choose Automation
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Discover how our automation solutions can transform your service accommodation business and give you a
            competitive edge in the UK market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Benefit 1 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Save Time</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Automate repetitive tasks and free up your staff to focus on providing exceptional guest experiences.
              Our clients save an average of 15 hours per week on administrative tasks.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Reduce Costs</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Lower operational costs by automating customer service and administrative tasks. Typical cost savings
              for UK property managers range from £1,500 to £3,000 per month.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Increase Efficiency</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Streamline your operations and eliminate bottlenecks with intelligent workflow automation. Manage more
              properties with the same team size.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">24/7 Availability</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Provide instant responses to guest enquiries at any time of day or night, even during UK bank holidays
              and weekends when staffing is typically reduced.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Reduce Errors</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Minimise human error in booking processes and guest communications. Our automation tools ensure
              consistent, accurate information is provided to every guest.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
              <BarChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Data-Driven Decisions</h3>
            <p className="text-sm md:text-base text-foreground/80">
              Gain valuable insights from guest interactions to improve your services and optimise your property
              management strategy for the UK market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 