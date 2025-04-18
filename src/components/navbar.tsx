"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Initial checks
    checkIfMobile()
    handleScroll()

    // Add event listeners
    window.addEventListener("resize", checkIfMobile)
    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries & Challenges", href: "/industries" },
    { name: "For Clients", href: "/clients" },
    { name: "For Candidates", href: "/candidates" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent border-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/nanocore-logo.png"
              alt="Nanocore Systems Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation - Always visible on desktop */}
        {!isMobile && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium relative group overflow-hidden py-2",
                  pathname === item.href
                    ? "text-primary"
                    : scrolled
                      ? "text-gray-800 hover:text-primary light:text-gray-200 light:hover:text-primary"
                      : "text-gray-800 hover:text-primary light:text-white light:hover:text-primary",
                )}
                onClick={(e) => {
                  // For hash links (same-page navigation), handle scrolling manually
                  if (item.href.startsWith("/#")) {
                    e.preventDefault()
                    const targetId = item.href.substring(2) // Remove the '/#' part
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" })
                    }
                    // Close mobile menu if open
                    if (isMenuOpen) {
                      setIsMenuOpen(false)
                    }
                  }
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span
                  initial={{ scaleX: pathname === item.href ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-mint to-blue origin-left"
                />
              </Link>
            ))}
          </motion.nav>
        )}

        {/* Mobile Menu Button - Only visible on mobile */}
        {isMobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={cn("lg:hidden", scrolled ? "text-gray-800 dark:text-white" : "text-gray-800 dark:text-white")}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 overflow-hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container py-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col gap-4"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center py-3 text-lg font-semibold border-b border-gray-100 dark:border-gray-800",
                        pathname === item.href ? "text-primary" : "text-gray-800 dark:text-gray-200",
                      )}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="mt-6"
                >
                  <Button
                    variant="outline"
                    className="w-full mb-3 border-mint text-mint hover:bg-mint/10"
                    onClick={toggleMenu}
                  >
                    Partner With Us
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-mint to-blue hover:opacity-90" onClick={toggleMenu}>
                    Join Our Talent Network
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
