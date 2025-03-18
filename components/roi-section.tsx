import ROICalculator from "./roi-calculator"

export default function ROISection() {
  return (
    <section id="roi" className="py-16 relative" aria-labelledby="roi-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="text-sm font-medium section-title">ROI Calculator</span>
            </div>
          </div>
          <h2 id="roi-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            See how much time and money your property management business could save with our automation solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <ROICalculator 
            buttonText="Calculate Your Savings" 
            className="bg-primary hover:bg-primary/90 group text-white py-6 px-8 text-lg"
            size="lg"
            calendlyUrl="https://calendly.com/audemation/demo"
          />
        </div>
      </div>
    </section>
  )
} 