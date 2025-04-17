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
    <section id="about" className="section-padding bg-white">
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
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={fadeIn}>
            Who We Are
          </motion.h2>
          <motion.p className="text-lg max-w-3xl mx-auto text-gray-600" variants={fadeIn}>
            Nanocore Systems is a workforce solutions company focused exclusively on the semiconductor industry. We
            hire, manage, and deploy skilled professionals who work on your projects while remaining on our
            payroll—combining flexibility with stability.
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
            <h3 className="text-xl font-bold mb-3">Speed</h3>
            <p className="text-gray-600 mb-4">
              Rapid deployment of qualified professionals to meet your project timelines and requirements.
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
            <h3 className="text-xl font-bold mb-3">Skill</h3>
            <p className="text-gray-600 mb-4">
              Industry-specific expertise with professionals who understand semiconductor technology and processes.
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
            <h3 className="text-xl font-bold mb-3">Scalability</h3>
            <p className="text-gray-600 mb-4">
              Flexible workforce solutions that grow or contract based on your project needs and timelines.
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
