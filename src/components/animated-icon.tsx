"use client"

import { cn } from "@/src/lib/utils"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedIconProps {
  children: ReactNode
  className?: string
  bgClassName?: string
}

export function AnimatedIcon({ children, className, bgClassName }: AnimatedIconProps) {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center",
          bgClassName || "bg-gradient-to-r from-mint to-blue",
        )}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-mint-light to-blue-light opacity-20"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
