import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AnimatedBackground } from "@/src/components/animated-background"
import { AnimatedIcon } from "@/src/components/animated-icon"
import { Cpu, Server, Activity, Factory, CircuitBoard, Layers, Smartphone, Database } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 md:py-28">
        <AnimatedBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-200">
              Specialized staffing solutions for the entire semiconductor ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Core Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Industries</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Our specialized focus on semiconductor and related technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Cpu className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">VLSI & SoC Design</h3>
              <p className="text-gray-600 mb-4">
                Staffing solutions for complex integrated circuit design and system-on-chip development teams.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>RTL Design Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Verification Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Physical Design Specialists</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Server className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Embedded Systems</h3>
              <p className="text-gray-600 mb-4">
                Talent for developing specialized computing systems designed for dedicated functions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Firmware Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Embedded Software Developers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>RTOS Specialists</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Activity className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Semiconductor Testing & Validation</h3>
              <p className="text-gray-600 mb-4">
                Professionals who ensure semiconductor products meet quality and performance standards.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Test Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Validation Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Quality Assurance Specialists</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Factory className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Foundry Support & Fabrication</h3>
              <p className="text-gray-600 mb-4">
                Specialists in semiconductor manufacturing processes and fabrication technologies.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Process Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Yield Enhancement Specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Fabrication Technicians</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <CircuitBoard className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">PCB Design & Simulation</h3>
              <p className="text-gray-600 mb-4">
                Experts in printed circuit board design, layout, and simulation for electronic systems.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>PCB Design Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Signal Integrity Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Thermal Analysis Specialists</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Layers className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Analog & Mixed-Signal</h3>
              <p className="text-gray-600 mb-4">
                Specialists in designing circuits that work with real-world signals and digital interfaces.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Analog Design Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>Mixed-Signal Verification Engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nanocoreBlue mr-2">•</span>
                  <span>RF Engineers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emerging Technologies</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              We also provide specialized staffing for cutting-edge semiconductor applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Smartphone className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Machine Learning Hardware</h3>
              <p className="text-gray-600">
                Specialists in designing and optimizing semiconductor solutions for artificial intelligence and machine
                learning applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Database className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
              <p className="text-gray-600">
                Experts in the emerging field of quantum computing hardware and related semiconductor technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Cpu className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Automotive Semiconductors</h3>
              <p className="text-gray-600">
                Professionals specializing in semiconductor solutions for advanced automotive applications and
                autonomous vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg text-white relative overflow-hidden">
        <AnimatedBackground density={30} color="rgba(255, 255, 255, 0.1)" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specialized Semiconductor Talent?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you're working in established or emerging semiconductor technologies, we have the expertise to
              support your staffing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-mint to-blue text-nanocoreBlue hover:bg-gray-100">
                <Link href="/contact">Discuss Your Requirements</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-gradient-to-r from-mint to-blue hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
