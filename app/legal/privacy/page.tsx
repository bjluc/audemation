import Link from "next/link"
import AnimatedGradientBackground from "@/components/animated-gradient-background"
import FloatingShapes from "@/components/floating-shapes"
import BackgroundAnimation from "@/components/background_animation"

export const metadata = {
  title: "Privacy Policy | Audemation",
  description: "Privacy policy for Audemation's services and website.",
}

export default function PrivacyPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gradient">Privacy Policy</h1>
            <p className="text-foreground/60 mt-2">Last updated: 14/03/2025</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when using our contact form, including:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Respond to your inquiries</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p>
                We do not sell or share your personal information with third parties except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Other parties with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@audemation.com" className="text-primary hover:text-primary/80">info@audemation.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@audemation.com" className="text-primary hover:text-primary/80">info@audemation.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 