import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { AnimatedBackground } from "@/src/components/animated-background";
import { AnimatedIcon } from "@/src/components/animated-icon";
import {
  Cpu, Server, Activity, Factory, CircuitBoard, Layers, Smartphone, Database
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

// Reusable card component
const IndustryCard = ({ icon: Icon, title, description, roles = [] }: any) => (
  <div className="bg-gray-50 p-8 rounded-lg card-hover">
    <div className="mb-6">
      <AnimatedIcon>
        <Icon className="h-8 w-8 text-white" />
      </AnimatedIcon>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {roles.length > 0 && (
      <ul className="text-gray-600 space-y-2">
        {roles.map((role: string) => (
          <li key={role} className="flex items-start">
            <span className="text-nanocoreBlue mr-2">•</span>
            <span>{role}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// Industry data
const coreIndustries = [
  {
    icon: Cpu,
    title: "VLSI & SoC Design",
    description: "Staffing solutions for complex integrated circuit design and system-on-chip development teams.",
    roles: ["RTL Design Engineers", "Verification Engineers", "Physical Design Specialists"],
  },
  {
    icon: Server,
    title: "Embedded Systems",
    description: "Talent for developing specialized computing systems designed for dedicated functions.",
    roles: ["Firmware Engineers", "Embedded Software Developers", "RTOS Specialists"],
  },
  {
    icon: Activity,
    title: "Semiconductor Testing & Validation",
    description: "Professionals who ensure semiconductor products meet quality and performance standards.",
    roles: ["Test Engineers", "Validation Engineers", "Quality Assurance Specialists"],
  },
  {
    icon: CircuitBoard,
    title: "PCB Design & Simulation",
    description: "Experts in printed circuit board design, layout, and simulation for electronic systems.",
    roles: ["PCB Design Engineers", "Signal Integrity Engineers", "Thermal Analysis Specialists"],
  },
  {
    icon: Layers,
    title: "Analog & Mixed-Signal",
    description: "Specialists in designing circuits that work with real-world signals and digital interfaces.",
    roles: ["Analog Design Engineers", "Mixed-Signal Verification Engineers", "RF Engineers"],
  },
];

const emergingTech = [
  {
    icon: Smartphone,
    title: "AI & Machine Learning Hardware",
    description: "Specialists in designing and optimizing semiconductor solutions for AI and ML applications.",
  },
  {
    icon: Database,
    title: "Quantum Computing",
    description: "Experts in the emerging field of quantum computing hardware and related semiconductor technologies.",
  },
  {
    icon: Cpu,
    title: "Automotive Semiconductors",
    description: "Professionals specializing in semiconductor solutions for advanced automotive and autonomous vehicles.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 md:py-28">
        {/* <AnimatedBackground /> */}
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-200">
            Specialized staffing solutions for the entire semiconductor ecosystem
          </p>
        </div>
      </section>

      {/* Core Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Industries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Our specialized focus on semiconductor and related technologies
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreIndustries.map((industry, idx) => (
              <IndustryCard key={idx} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emerging Technologies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We also provide specialized staffing for cutting-edge semiconductor applications
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {emergingTech.map((tech, idx) => (
              <IndustryCard key={idx} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg text-white relative overflow-hidden">
        {/* <AnimatedBackground density={30} color="rgba(255, 255, 255, 0.1)" /> */}
        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specialized Semiconductor Talent?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Whether you're working in established or emerging semiconductor technologies, we have the expertise to
            support your staffing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-mint to-blue text-white hover:bg-gray-100">
              <Link href="/contact">Discuss Your Requirements</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-gradient-to-r from-mint to-blue hover:bg-white/10">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
