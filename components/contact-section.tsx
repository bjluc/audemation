import ContactForm from "@/utils/forms/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 relative" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <span className="text-sm font-medium section-title">Contact</span>
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
  )
} 