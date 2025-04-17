import { Zap, ShieldCheck, TrendingUp, Cpu } from "lucide-react"

export function WhyStaffing() {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-nanocoreBlue" />,
      title: "On-Demand Talent",
      description: "Get project-ready professionals exactly when you need them.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-nanocoreBlue" />,
      title: "Risk-Free Hiring",
      description: "We handle payroll, compliance, and HR—reducing your operational load.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-nanocoreBlue" />,
      title: "Quick Scalability",
      description: "Ramp up or down without the long-term liabilities of full-time hiring.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-nanocoreBlue" />,
      title: "Industry Expertise",
      description: "Our exclusive focus on semiconductors means we understand your world—and your needs.",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Staffing is the Smart Solution</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Outsourcing your workforce through Nanocore ensures:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
