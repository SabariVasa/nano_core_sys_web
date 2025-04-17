"use client"

import { GraduationCap, Code, ComponentIcon as ChipIcon, Server, CheckCircle, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { AnimatedIcon } from "@/src/components/animated-icon"
import Link from "next/link"
import { motion } from "framer-motion"

export function TrainingSkilling() {
  const trainingPrograms = [
    {
      icon: <ChipIcon className="h-10 w-10 text-white" />,
      title: "VLSI Design & Verification",
      description: "Comprehensive training in chip design, RTL development, and verification methodologies.",
      features: [
        "Digital design fundamentals",
        "RTL coding with Verilog/VHDL",
        "Advanced verification techniques",
        "Industry-standard EDA tools",
      ],
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
    },
  ]

  return (
    <section id="training" className="section-padding bg-gradient-to-br from-mint-light/20 to-blue-light/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Training & Skilling</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Building the next generation of semiconductor professionals through industry-relevant training programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-none">
                <CardHeader>
                  <div className="mb-4">
                    <AnimatedIcon bgClassName="bg-gradient-to-r from-mint to-nanocoreBlue">{program.icon}</AnimatedIcon>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-mint shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Training Highlights</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-mint" />
                <span>Instructor-led and hybrid models</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-mint" />
                <span>Real-time project exposure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <ChipIcon className="h-5 w-5 text-mint" />
                <span>Industry-standard tools & tech stack</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Code className="h-5 w-5 text-mint" />
                <span>Customized corporate modules</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Server className="h-5 w-5 text-mint" />
                <span>Deployment-ready graduates</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-mint to-nanocoreBlue text-white hover:opacity-90 transition-opacity"
            >
              <Link href="/contact">Inquire About Training Programs</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
