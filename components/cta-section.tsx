import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-16 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 animate-gradient-x"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Transform Your Airbnb Business with AirbnbBot Today
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Experience the power of automation and take your customer service to the next level with our innovative
            chatbot solutions. Join hundreds of successful UK property managers already using our platform.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 group">
            Get Started Today! <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
} 