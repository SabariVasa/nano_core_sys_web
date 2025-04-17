import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AnimatedBackground } from "@/src/components/animated-background"
import { AnimatedIcon } from "@/src/components/animated-icon"
import { CheckCircle, Clock, Shield, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 md:py-28">
        <AnimatedBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner With Nanocore</h1>
            <p className="text-xl text-gray-200">
              Ready to eliminate hiring delays and focus on delivery? We'll bring the right talent to your team, backed
              by structure, speed, and support.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Companies Choose Us</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Discover how our specialized staffing solutions solve your semiconductor talent challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Clock className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduce Time-to-Hire</h3>
              <p className="text-gray-600 mb-4">
                Our pre-vetted talent pool means you can onboard skilled professionals in days, not months.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>80% faster deployment than traditional hiring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>No lengthy recruitment cycles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>Immediate project contribution</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Shield className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Minimize Risk</h3>
              <p className="text-gray-600 mb-4">
                We handle all employment responsibilities, reducing your administrative and legal burden.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>Complete employment liability coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>Simplified contractual arrangements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>Compliance with all regulations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <TrendingUp className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Scale Efficiently</h3>
              <p className="text-gray-600 mb-4">
                Adjust your team size up or down based on project demands without the overhead.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>Flexible resource allocation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>No long-term commitments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                  <span>Predictable cost management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Our streamlined process makes accessing semiconductor talent simple and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-nanocoreBlue text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="mb-6 mx-auto">
                <AnimatedIcon>
                  <Users className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Consult</h3>
              <p className="text-gray-600">
                Share your project requirements and technical needs with our semiconductor staffing experts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-nanocoreBlue text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="mb-6 mx-auto">
                <AnimatedIcon>
                  <Zap className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Match</h3>
              <p className="text-gray-600">
                We identify and present pre-vetted professionals with the exact skills your project needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-nanocoreBlue text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="mb-6 mx-auto">
                <AnimatedIcon>
                  <Users className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Deploy</h3>
              <p className="text-gray-600">
                We handle all employment logistics while professionals integrate seamlessly into your team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center card-hover relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-nanocoreBlue text-white flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div className="mb-6 mx-auto">
                <AnimatedIcon>
                  <TrendingUp className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-gray-600">
                We provide ongoing management and support throughout the engagement for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Hear from semiconductor companies that have transformed their workforce strategy with Nanocore
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img src="/placeholder.svg?height=64&width=64" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-nanocoreBlue">VP of Engineering, ChipTech Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Nanocore helped us scale our verification team in record time. Their professionals integrated
                seamlessly and delivered exceptional quality work from day one."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img src="/placeholder.svg?height=64&width=64" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-nanocoreBlue">CTO, SemiSolutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The administrative burden we eliminated by working with Nanocore was tremendous. We could focus on
                innovation while they handled all the HR complexities."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img src="/placeholder.svg?height=64&width=64" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold">David Rodriguez</h3>
                  <p className="text-nanocoreBlue">Project Manager, NextGen Semiconductors</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "When our project scope expanded unexpectedly, Nanocore provided additional VLSI designers within days.
                Their flexibility and quality of talent is unmatched."
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Client Logos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              We work with innovative semiconductor companies of all sizes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  width={120}
                  height={60}
                  alt={`Client logo ${i + 1}`}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg text-white relative overflow-hidden">
        <AnimatedBackground density={30} color="rgba(255, 255, 255, 0.1)" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Semiconductor Workforce?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how Nanocore can help you access specialized talent, reduce hiring delays, and focus on
              innovation.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-mint to-blue text-nanocoreBlue hover:bg-gray-100">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
