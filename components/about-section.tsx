import Image from "next/image"
import { Bot, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <span className="text-sm font-medium section-title">About Us</span>
          </div>
          <h2 id="about-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            We're a team of automation experts based in London, dedicated to helping service accommodation businesses
            thrive in the digital age through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="relative order-2 md:order-1 mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20"></div>
              <div className="relative glass-card rounded-2xl p-4 md:p-6 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-indigo-900/30 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <Image
                  src="/images/who-we-are.jpeg"
                  alt="Audemation's London office showcasing our team of automation specialists working on property management solutions"
                  width={1640}
                  height={924}
                  className="object-cover rounded-lg w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gradient mb-2">Our Mission</h3>
              <p className="text-sm md:text-base text-foreground/80">
                We believe that automation is the key to unlocking business potential. Our mission is to provide
                innovative chatbot solutions that transform how service accommodation businesses interact with their
                guests. Based in London, we specialise in creating bespoke automation tools for the UK hospitality
                market.
              </p>
            </div>

            <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gradient mb-2">Our Approach</h3>
              <p className="text-sm md:text-base text-foreground/80">
                We combine cutting-edge technology with deep industry knowledge to create custom automation solutions
                that address your specific business challenges and opportunities. Our team of experts has over 15
                years of combined experience in the UK property management and hospitality sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 