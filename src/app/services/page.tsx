import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { ThreeBackground } from "@/src/components/three-background"
import { AnimatedIcon } from "@/src/components/animated-icon"
import { Users, CreditCard, Calendar, FileText, BarChart, Shield, Clock } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { TrainingSkilling } from "@/src/components/training-skilling-services"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-mint to-blue text-white py-20 md:py-28">
        <ThreeBackground type="bubbles" primaryColor="#4ade80" secondaryColor="#3b82f6" />
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="w-max mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
              Comprehensive staffing solutions <br/>tailored for the semiconductor industry
            </h1>
          </div>
        </div>
      </section>



      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Core Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              The semiconductor industry is at the core of technological innovation, powering everything from consumer electronics to industrial automation and advanced computing. As the demand for high-performance chips and cutting-edge design increases, so does the need for skilled professionals who can drive innovation and deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg card-hover border-t-4 border-mint">
              <div className="mb-6">
                <AnimatedIcon>
                  <Users className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Resource Deployment</h3>
              <p className="text-gray-600 mb-4">
                Professionals for every phase of semiconductor development—design, verification, testing, and more.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-mint mr-2">•</span>
                  <span>Skilled engineers ready to deploy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint mr-2">•</span>
                  <span>Project-specific expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mint mr-2">•</span>
                  <span>Seamless team integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover border-t-4 border-blue">
              <div className="mb-6">
                <AnimatedIcon bgClassName="bg-gradient-to-r from-blue to-mint">
                  <CreditCard className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Payroll Staffing</h3>
              <p className="text-gray-600 mb-4">
                We employ the talent, manage their benefits, and ensure compliance—so you don't have to.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue mr-2">•</span>
                  <span>Complete HR management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue mr-2">•</span>
                  <span>Benefits administration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue mr-2">•</span>
                  <span>Compliance and legal handling</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover border-t-4 border-gradient-mint-blue">
              <div className="mb-6">
                <AnimatedIcon>
                  <Calendar className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Date Card Allocation System</h3>
              <p className="text-gray-600 mb-4">
                We deploy candidates based on agreed timelines and availability, ensuring no disruption in your project
                flow.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gradient-mint-blue mr-2">•</span>
                  <span>Predictable resource planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient-mint-blue mr-2">•</span>
                  <span>Scheduled talent deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient-mint-blue mr-2">•</span>
                  <span>Milestone-based allocation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Skilling Section */}
      <TrainingSkilling />

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Our Service Process</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              How we ensure a seamless experience from initial consultation to ongoing support
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-mint to-blue transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-16">
                  <h3 className="text-xl font-bold text-mint mb-3">1. Initial Consultation</h3>
                  <p className="text-gray-600">
                    We begin by understanding your specific needs, project requirements, and company culture to ensure
                    perfect alignment.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-mint rounded-full transform -translate-x-1/2 border-4 border-white"></div>
                <div></div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div></div>
                <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-gradient-to-r from-mint to-blue rounded-full transform -translate-x-1/2 border-4 border-white"></div>
                <div className="md:pl-16">
                  <h3 className="text-xl font-bold text-blue mb-3">2. Talent Matching</h3>
                  <p className="text-gray-600">
                    Our specialized recruiters identify and screen candidates with the precise technical skills and
                    experience your project demands.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-16">
                  <h3 className="text-xl font-bold text-mint mb-3">3. Candidate Presentation</h3>
                  <p className="text-gray-600">
                    We present a shortlist of pre-vetted candidates for your review and approval, ensuring they meet
                    your technical and cultural requirements.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-mint rounded-full transform -translate-x-1/2 border-4 border-white"></div>
                <div></div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div></div>
                <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-blue rounded-full transform -translate-x-1/2 border-4 border-white"></div>
                <div className="md:pl-16">
                  <h3 className="text-xl font-bold text-blue mb-3">4. Onboarding & Deployment</h3>
                  <p className="text-gray-600">
                    We handle all employment logistics, from contracts to compliance, ensuring a smooth transition onto
                    your project.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-16">
                  <h3 className="text-xl font-bold text-gradient-mint-blue mb-3">5. Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our team provides continuous management and support throughout the engagement, ensuring both client
                    and professional satisfaction.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-gradient-to-r from-mint to-blue rounded-full transform -translate-x-1/2 border-4 border-white"></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-mint to-blue text-white relative overflow-hidden">
        <ThreeBackground type="particles" primaryColor="#ffffff" secondaryColor="#ffffff" density={30} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              Complementary offerings to enhance your workforce strategy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg card-hover">
              <div className="mb-4">
                <AnimatedIcon bgClassName="bg-white/20">
                  <FileText className="h-6 w-6 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-lg font-bold mb-2">Workforce Consulting</h3>
              <p className="text-gray-200">
                Strategic advice on optimizing your semiconductor talent acquisition and management.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg card-hover">
              <div className="mb-4">
                <AnimatedIcon bgClassName="bg-white/20">
                  <BarChart className="h-6 w-6 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-lg font-bold mb-2">Skills Assessment</h3>
              <p className="text-gray-200">
                Technical evaluation services to validate candidate capabilities for specialized roles.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg card-hover">
              <div className="mb-4">
                <AnimatedIcon bgClassName="bg-white/20">
                  <BarChart className="h-6 w-6 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-lg font-bold mb-2">Compliance & Documentation</h3>
              <p className="text-gray-200">
                We handle background checks, documentation, and onboarding with precision and speed.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-gradient-to-r from-mint to-blue hover:bg-white/10"
            >
              <Link href="/contact">Request Custom Services</Link>
            </Button>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
