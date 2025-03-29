import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Zap, BarChart, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechStack from "@/components/tech-stack"
import BackgroundAnimation from "@/components/background_animation"
import ContactForm from "@/components/contact-form"
import ROISection from "@/components/roi-section"
import CTA from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative py-10 md:py-16 overflow-hidden" aria-labelledby="hero-heading">
        <BackgroundAnimation />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <span className="text-sm font-medium section-title">Automation for Service Accommodation</span>
                </div>
              </div>
              <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient">
                Transform Your Business with Intelligent Automation
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mx-auto md:mx-0 max-w-xl">
                Streamline operations, reduce costs, and enhance guest experiences with our cutting-edge automation
                solutions, featuring our revolutionary AirbnbBot. Designed specifically for UK-based service
                accommodation providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Link 
                  href="https://calendly.com/bernard-audemation/30min"
                  target="_blank"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-4
                    text-lg font-medium text-white
                    bg-primary hover:bg-primary/90
                    rounded-xl
                    transition-all
                    cursor-pointer
                    shadow-lg hover:shadow-xl
                    active:scale-95
                    w-full sm:w-auto
                  "
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#services"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-4
                    text-lg font-medium
                    border border-white/10
                    hover:bg-white/5
                    rounded-xl
                    transition-all
                    cursor-pointer
                    w-full sm:w-auto
                  "
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative mt-8 md:mt-0 mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20"></div>
                <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-indigo-900/30 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <Image
                    src="/images/chatbot-dashboard.jpg"
                    alt="Professional business dashboard showing chatbot analytics, lead generation metrics, and data analysis interface with a $20,000 revenue indicator"
                    width={1640}
                    height={924}
                    className="object-cover rounded-lg w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-10 md:py-16 relative" aria-labelledby="about-heading">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex justify-center mb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">About Us</span>
              </div>
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

      {/* Services Section */}
      <section id="services" className="py-16 relative" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex justify-center mb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">Our Services</span>
              </div>
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

      {/* AirbnbBot Showcase Section */}
      <section id="airbnb-bot" className="py-10 md:py-16 relative" aria-labelledby="airbnb-bot-heading">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <div className="mb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">Featured Product</span>
              </div>
            </div>
            <h2 id="airbnb-bot-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Introducing AirbnbBot
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              The ultimate automation solution designed specifically for Airbnb hosts and service accommodation
              businesses in the UK and Europe.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="relative mx-auto max-w-4xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Telegram Chatbot Image */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20 animate-pulse-slow"></div>
                  <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-indigo-900/20 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                    <Image
                      src="/images/Telegram-chatbbot.webp"
                      alt="Telegram chatbot interface for AirbnbBot showing automated messaging capabilities"
                      width={400}
                      height={400}
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
                
                {/* WhatsApp Chatbot Image */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-md opacity-20 animate-pulse-slow"></div>
                  <div className="relative glass-card rounded-2xl p-4 md:p-6 animate-float overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-indigo-900/20 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                    <Image
                      src="/images/WhatsApp-chatbot.webp"
                      alt="WhatsApp chatbot interface for AirbnbBot showing automated guest communications"
                      width={400}
                      height={400}
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-gradient mb-4">Features</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Feature 1 */}
                <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Automated Guest Messaging</h3>
                  <p className="text-sm md:text-base text-foreground/80">
                    Instantly respond to guest enquiries with personalised messages tailored to your property and brand
                    voice.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Check-in Assistance</h3>
                  <p className="text-sm md:text-base text-foreground/80">
                    Guide guests through the check-in process with automated instructions, including UK-specific
                    information about the property and local area.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Local Recommendations</h3>
                  <p className="text-sm md:text-base text-foreground/80">
                    Provide guests with personalised local recommendations for restaurants, attractions, and activities
                    in your property's neighbourhood.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="glass-card p-4 md:p-5 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Issue Resolution</h3>
                  <p className="text-sm md:text-base text-foreground/80">
                    Handle common guest issues and escalate to you only when necessary, ensuring prompt resolution and
                    guest satisfaction.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Learn More About AirbnbBot</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 relative" aria-labelledby="benefits-heading">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex justify-center mb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <span className="text-sm font-medium section-title">Benefits</span>
              </div>
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

      {/* ROI Calculator Section */}
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

          {/* Tech Stack Component */}
          <TechStack />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16">
        {/* Background gradient with animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 animate-gradient-x pointer-events-none"></div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Transform Your Airbnb Business with AirbnbBot Today
            </h2>
            <p className="text-xl mb-8 text-foreground/80">
              Experience the power of automation and take your customer service to the next level with our innovative
              chatbot solutions. Join hundreds of successful UK property managers already using our platform.
            </p>

            <div className="space-y-4">
              {/* Main CTA Button */}
              <div>
                <Link 
                  href="https://calendly.com/bernard-audemation/30min"
                  target="_blank"
                  className="
                    inline-flex items-center justify-center
                    px-8 py-4
                    text-lg font-medium text-white
                    bg-primary hover:bg-primary/90
                    rounded-xl
                    transition-all
                    cursor-pointer
                    shadow-lg hover:shadow-xl
                    active:scale-95
                  "
                >
                  Get Started Today! <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

