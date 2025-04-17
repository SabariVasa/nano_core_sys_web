import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AnimatedBackground } from "@/src/components/animated-background"
import { ContactUs } from "@/src/components/contact-us"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 md:py-28">
        <AnimatedBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Let's build the future together. Reach out to discuss how Nanocore can support your semiconductor staffing
              needs.
            </p>
          </div>
        </div>
      </section>

      <ContactUs />

      <Footer />
    </main>
  )
}
