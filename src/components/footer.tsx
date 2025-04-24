import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-dark text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-mint blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 rounded-full bg-blue blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-mint-light blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/nanocore-logo.png"
                alt="Nanocore Systems Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Powering innovation with precision staffing solutions for the semiconductor industry.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-mint hover:to-blue"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-mint hover:to-blue"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-mint hover:to-blue"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-mint hover:to-blue"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-mint rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-mint opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue rounded-full mr-2"></span>
              For You
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/clients"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  For Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/candidates"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  For Candidates
                </Link>
              </li>
              <li>
                <Link
                  href="/#training"
                  className="text-gray-300 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 text-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-mint to-blue rounded-full mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-mint mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:info@nanocoresystems.in" className="text-white hover:text-mint transition-colors">
                  info@nanocoresystems.in
                  </a>
                </div>
              </li>
              {/* <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+91XXXXXXXXXX" className="text-white hover:text-blue transition-colors">
                    +91-XXXXXXXXXX
                  </a>
                </div>
              </li> */}
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-mint mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Location</p>
                  <p className="text-white">[Bangalore, Karnatake]</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nanocore Systems LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
