import Link from "next/link"
import AnimatedGradientBackground from "@/components/animated-gradient-background"
import FloatingShapes from "@/components/floating-shapes"
import BackgroundAnimation from "@/components/background_animation"

export const metadata = {
  title: "Terms and Conditions | Audemation",
  description: "Terms and conditions for using Audemation's services and website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 relative">
      <AnimatedGradientBackground />
      <FloatingShapes />
      <BackgroundAnimation />
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gradient">Terms and Conditions</h1>
            <p className="text-foreground/60 mt-2">Last updated: 14/03/2025</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to Audemation. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
              <p>
                Our services are provided for business use related to service accommodation management. You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Account Responsibilities</h2>
              <p>
                If you create an account with us, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by Audemation and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>
                Audemation shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
              <p>
                We may revise these Terms at any time by updating this page. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:info@audemation.com" className="text-primary hover:text-primary/80">info@audemation.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 