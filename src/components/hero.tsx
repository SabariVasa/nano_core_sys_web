"use client"

import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 to-transparent pointer-events-none"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#5EEAD4]/60 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          ></div>
        ))}
      </div>


      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Highlight glow effect */}
          <div className="absolute -inset-1 rounded-lg blur-xl"></div>

          <div style={{ backgroundImage: "url('/bg.jpg')" }} className="relative bg-gradient-to-br from-white p-8 md:p-12 rounded-lg border border-mint/20">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue to-mint-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Powering Innovation with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-blue relative">
                Precision Staffing
              </span>
            </motion.h1>

            <motion.p
              className="text-center w-full text-lg md:text-xl mb-10 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At Nanocore Systems, we provide skilled semiconductor professionals on our payroll, ready to support your projects when and where you need them.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-mint to-blue text-white hover:opacity-90 relative overflow-hidden group shadow-lg shadow-mint/20"
              >
                <Link href="/clients">
                  <span className="relative z-10">Partner With Us</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-0 group-hover:opacity-20"></span>
                </Link>
              </Button> */}

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-mint to-blue text-white border-mint bg-mint/10 hover:bg-mint/10 relative overflow-hidden group shadow-lg shadow-blue/20"
              >
                <Link href="/candidates">
                  <span className="relative text-black z-10">Join Our Talent Network</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-0 group-hover:opacity-20"></span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Animated corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-mint animate-pulse-soft"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue animate-pulse-soft"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue animate-pulse-soft"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-mint animate-pulse-soft"></div>
        </motion.div>
      </div>
    </section>
  )
}
