"use client"

import { Cpu, Shield, Clock } from "lucide-react"
import { AnimatedIcon } from "@/src/components/animated-icon"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"

export function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding pt-[!0.5em] bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue" variants={fadeIn}>
            Who We Are
          </motion.h2>
          <motion.p className="text-lg max-w-3xl mx-auto text-gray-600" variants={fadeIn}>
          At Nanocore Systems, we are a specialized workforce solutions company dedicated exclusively to the semiconductor industry. With deep domain expertise and a strong understanding of the industry's dynamic talent needs, we deliver flexible and reliable workforce solutions that empower our clients to scale, innovate, and lead in a competitive market.
          Our core strength lies in hiring, managing, and deploying highly skilled professionals who contribute directly to your projects while being on our payroll. This unique model allows organizations to access top-tier talent with the flexibility of contract staffing and the security of long-term support, ensuring both agility and stability in your operations.
          But we are more than just a staffing company.
          We also offer:
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-gray-50 p-8 rounded-lg text-center card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6">
              <AnimatedIcon>
                <Clock className="h-8 w-8 text-white" />
              </AnimatedIcon>
            </div>
            <h3 className="text-xl font-bold mb-3">Permanent Recruitment Services</h3>
            <p className="text-gray-600 mb-4">
            Helping you build strong, future-ready in-house teams.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-lg text-center card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6">
              <AnimatedIcon>
                <Cpu className="h-8 w-8 text-white" />
              </AnimatedIcon>
            </div>
            <h3 className="text-xl font-bold mb-3">Candidate Assessment Solutions</h3>
            <p className="text-gray-600 mb-4">
              Ensuring the right fit through thorough technical and behavioral evaluations.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-8 rounded-lg text-center card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6">
              <AnimatedIcon>
                <Shield className="h-8 w-8 text-white" />
              </AnimatedIcon>
            </div>
            <h3 className="text-xl font-bold mb-3">Skilling & Upskilling Programs</h3>
            <p className="text-gray-600 mb-4">
            Bridging the talent gap with targeted training aligned to semiconductor industry demands.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="bg-nanocoreBlue hover:bg-nanocoreBlue-light">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
