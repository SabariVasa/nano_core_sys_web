import { Button } from "@/src/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export function ForClients() {
  const benefits = [
    "Eliminate recruitment delays",
    "Reduce HR overhead",
    "Scale teams on demand",
    "Access specialized talent",
    "Simplify compliance",
  ]

  return (
    <section id="clients" className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Partner With Nanocore</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to eliminate hiring delays and focus on delivery? We'll bring the right talent to your team, backed by
            structure, speed, and support.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-nanocoreBlue flex-shrink-0 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="w-full bg-gradient-to-r from-mint to-blue md:w-auto">
            <Link href="#contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
