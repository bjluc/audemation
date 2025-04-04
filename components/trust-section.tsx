export default function TrustSection() {
  return (
    <section id="trust" className="py-16 relative bg-primary/5" aria-labelledby="trust-heading">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 id="trust-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Built for Property Managers by Property Tech Experts
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Enterprise-Grade</h3>
            <p className="text-foreground/80">Security & Reliability</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">GDPR</h3>
            <p className="text-foreground/80">Compliant</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">24/7</h3>
            <p className="text-foreground/80">Support Available</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">UK-Based</h3>
            <p className="text-foreground/80">Development Team</p>
          </div>
        </div>
      </div>
    </section>
  )
} 