"use client"

import {
  GraduationCap,
  Code,
  Cpu,
  Server,
  CheckCircle,
  BookOpen,
  Layers,
  Lightbulb,
  Database,
  Smartphone,
  MicroscopeIcon as Microchip,
  Network,
  Workflow,
  Zap,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function TrainingSkilling() {
  const trainingPrograms = [
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "VLSI Design & Verification",
      description: "Comprehensive training in chip design, RTL development, and verification methodologies.",
      features: [
        "Digital design fundamentals",
        "RTL coding with Verilog/VHDL",
        "Advanced verification techniques",
        "Industry-standard EDA tools",
      ],
      image: "/vlsi-design-training.jpg",
    },
    {
      icon: <Server className="h-10 w-10 text-white" />,
      title: "Embedded Systems",
      description: "Hands-on training in embedded programming, firmware development, and system integration.",
      features: [
        "Microcontroller programming",
        "Real-time operating systems",
        "Hardware-software interfacing",
        "IoT protocols and implementation",
      ],
      image: "/embedded-systems-training.jpeg",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Physical Design",
      description: "Training in IC layout, timing analysis, and physical implementation techniques.",
      features: [
        "Floor planning and power planning",
        "Placement and routing",
        "Static timing analysis",
        "DFT and DFM techniques",
      ],
      image: "/physical-design-training.webp",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-white" />,
      title: "Custom Corporate Programs",
      description:
        "Tailored training solutions aligned with your organization's specific technology stack and project requirements.",
      features: [
        "Needs assessment and curriculum design",
        "Flexible delivery models",
        "Project-based learning",
        "Performance tracking and analysis",
      ],
      image: "/corporate-training-program.jpg",
    },
    {
      icon: <Microchip className="h-10 w-10 text-white" />,
      title: "RTL Design & Verification Engineers",
      description: "Expert RTL engineers for fast, reliable ASIC and SoC design and verification.",
      features: [
        "Verilog/SystemVerilog coding",
        "UVM-based testbenches",
        "Coverage closure",
        "Assertions & debugging",
        "VCS, Questa, Xcelium tools",
      ],
      image: "/rtl-verification-training.png",
    },
    {
      icon: <Database className="h-10 w-10 text-white" />,
      title: "Analog & Mixed-Signal Design",
      description: "Specialized training in analog circuit design and mixed-signal integration techniques.",
      features: [
        "Analog circuit fundamentals",
        "Op-amp and amplifier design",
        "ADC/DAC architectures",
        "Mixed-signal verification",
        "SPICE simulation techniques",
      ],
      image: "/analog-mixed-signal-training.jpg",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" />,
      title: "AI Hardware Acceleration",
      description: "Training in designing specialized hardware for AI and machine learning applications.",
      features: [
        "Neural network architectures",
        "Hardware accelerator design",
        "Quantization techniques",
        "Power optimization",
        "AI processor architectures",
      ],
      image: "/ai-hardware-training.jpg",
    },
    {
      icon: <Network className="h-10 w-10 text-white" />,
      title: "RF & Wireless Design",
      description: "Comprehensive training in RF circuit design and wireless communication systems.",
      features: [
        "RF circuit fundamentals",
        "Antenna design principles",
        "Wireless protocols",
        "Signal integrity",
        "RF testing methodologies",
      ],
      image: "/rf-wireless-training.jpg",
    },
    {
      icon: <Workflow className="h-10 w-10 text-white" />,
      title: "Semiconductor Manufacturing",
      description: "Training in semiconductor fabrication processes and manufacturing techniques.",
      features: [
        "Wafer processing fundamentals",
        "Lithography techniques",
        "Yield optimization",
        "Process integration",
        "Quality control methods",
      ],
      image: "/semiconductor-manufacturing-training.jpg",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Power Electronics Design",
      description: "Specialized training in power management circuits and energy-efficient design.",
      features: [
        "Power converter topologies",
        "Battery management systems",
        "Thermal management",
        "Energy harvesting techniques",
        "Low-power design methodologies",
      ],
      image: "/power-electronics-training.jpeg",
    },
  ]

  return (
    <section id="training" className="py-16 md:py-24 bg-gradient-to-br from-mint-light/20 to-blue-light/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Training & Skilling</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We offer industry-relevant training programs to build job-ready talent in VLSI and Embedded Systems. Whether
            you're upskilling internal teams or preparing fresh graduates for deployment, our training services ensure
            your workforce is aligned with the latest in chip design, verification, embedded programming, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-mint/80 to-blue/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="mb-4">{program.description}</p>
                  <ul className="space-y-2 text-left mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-white text-blue hover:bg-white/90">Learn More</Button>
                </div>
              </div>
              <div className="relative h-80">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2">{program.icon}</div>
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-mint-blue">Our Training Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instructor-led and hybrid models</h4>
                    <p className="text-gray-600">Flexible learning approaches to suit different needs and schedules</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time project exposure</h4>
                    <p className="text-gray-600">Hands-on experience with industry-relevant projects and challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry-standard tools & tech stack</h4>
                    <p className="text-gray-600">
                      Training on the same tools and technologies used in professional environments
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2 w-10 h-10 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Customized modules for corporate needs</h4>
                    <p className="text-gray-600">
                      Tailored curriculum development to address specific organizational requirements
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[30rem] rounded-lg overflow-hidden">
              <Image
                src="/our_training_highlight.png"
                alt="Training Highlights"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-mint/30 to-blue/30"></div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-mint to-blue text-white hover:opacity-90 transition-opacity"
            >
              <Link href="/contact">Inquire About Training Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
