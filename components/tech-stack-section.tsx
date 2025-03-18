import TechStack from "@/utils/layout/tech-stack"

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 md:py-24 relative" aria-labelledby="tech-stack-heading">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <span className="text-sm font-medium section-title">Technology</span>
          </div>
          <h2 id="tech-stack-heading" className="text-3xl md:text-4xl font-bold text-gradient mb-4 leading-relaxed py-2">
            Our Technology Stack
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            We leverage cutting-edge technologies to build powerful, scalable automation solutions that are secure,
            reliable, and GDPR-compliant.
          </p>
        </div>

        <TechStack />
      </div>
    </section>
  )
} 