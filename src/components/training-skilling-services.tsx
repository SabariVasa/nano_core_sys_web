"use client"

import { Code, Cpu, Server, BookOpen } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function TrainingSkilling() {
  const router = useRouter()

  const trainingPrograms = [
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "VLSI Design & Verification",
      description: "Comprehensive training in chip design, RTL development, and verification methodologies.",
      image: "/vlsi-design-training.jpg",
      slug: "vlsi-design-verification",
    },
    {
      icon: <Server className="h-10 w-10 text-white" />,
      title: "Embedded Systems",
      description: "Hands-on training in embedded programming, firmware development, and system integration.",
      image: "/embedded-systems-training.png",
      slug: "embedded-systems",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Physical Design",
      description: "Training in IC layout, timing analysis, and physical implementation techniques.",
      image: "/physical-design-training.png",
      slug: "physical-design",
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "Design for Testability (DFT)",
      description:
        "This intensive program blends theory with hands-on experience to prepare engineers for real-world challenges in chip design and verification.",
      image: "/corporate-training-program.jpg",
      slug: "design-for-testability-dft",
    }
  ]

  const handleProgramClick = (slug: string) => {
    router.push(`/training-details/${slug}`)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Our Learning Pack</h2>
          {/* <p className="text-lg max-w-3xl mx-auto text-gray-700">
            We offer industry-relevant training programs to build job-ready talent in VLSI and Embedded Systems. Our
            specialized courses ensure your workforce is aligned with the latest semiconductor technologies.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleProgramClick(program.slug)}
            >
              <div className="relative h-80">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2">{program.icon}</div>
                    <h3 className="text-xl font-bold text-gradient-mint-blue">{program.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-mint to-blue hover:opacity-90 transition-opacity">
            <Link href="/training-details">
              <span className="text-white">Explore All Training Programs</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
