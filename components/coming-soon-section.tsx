import { Bot, Zap, BarChart } from "lucide-react"

export default function ComingSoonSection() {
  return (
    <section id="coming-soon" className="py-16 relative" aria-labelledby="coming-soon-heading">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="text-sm font-medium section-title">Coming Soon</span>
            </div>
          </div>
          <h2 id="coming-soon-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Exciting Features on the Horizon
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            We're constantly innovating to bring you the most advanced property management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Advanced AI Property Assistant</h3>
            </div>
            <p className="text-foreground/80">Enhanced AI capabilities for more natural conversations and complex query handling.</p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Smart Document Processing</h3>
            </div>
            <p className="text-foreground/80">Automated handling of property documents, contracts, and guest information.</p>
          </div>

          <div className="glass-card p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Real-Time Analytics</h3>
            </div>
            <p className="text-foreground/80">Comprehensive dashboard with insights into guest interactions and property performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 