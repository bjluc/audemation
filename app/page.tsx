import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ComingSoonSection from "@/components/coming-soon-section"
import TrustSection from "@/components/trust-section"
import AirbnbBotShowcase from "@/components/airbnb-bot-showcase"
import BenefitsSection from "@/components/benefits-section"
import ROISection from "@/components/roi-section"
import TechStack from "@/components/tech-stack"
import ContactForm from "@/components/contact-form"
import CTA from "@/components/cta-section"
import LocalInsightsSection from "@/components/local-insights-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocalInsightsSection />
      <ComingSoonSection />
      <TrustSection />
      <AirbnbBotShowcase />
      <BenefitsSection />
      <ROISection />

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-16 relative" aria-labelledby="tech-stack-heading">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex justify-center mb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">Technology</span>
              </div>
            </div>
            <h2 id="tech-stack-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Our Tech Stack
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              We use cutting-edge technologies to deliver reliable, scalable, and secure automation solutions for your business.
            </p>
          </div>

          <TechStack />
        </div>
      </section>

      <CTA />

      {/* Contact Section */}
      <section id="contact" className="py-16 relative" aria-labelledby="contact-heading">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">Contact</span>
              </div>
            </div>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Ready to automate your service accommodation business? Get in touch with our London-based team today for a
              personalised consultation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
              <div className="glass-card rounded-2xl p-6 md:p-8 relative">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

