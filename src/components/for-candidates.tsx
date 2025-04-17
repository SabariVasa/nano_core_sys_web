
import React from "react" 
import { Button } from "@/src/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export function ForCandidates() {
  const benefits = [
    "Work on cutting-edge projects",
    "Stable employment with benefits",
    "Career growth opportunities",
    "Industry-focused development",
    "Diverse project experience",
  ]

  return (
    <section id="candidates" className="gradient-bg text-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a Career in Semiconductors</h2>
          <p className="text-lg text-gray-200 mb-8">
            Join a team that puts your growth and job stability first. Work on leading-edge projects with top-tier
            companies while being part of Nanocore's growing network.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full bg-gradient-to-r from-mint to-blue hover:opacity-90"
          >
            <Link href="#contact">Join Our Talent Pool</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
