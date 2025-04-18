import { Zap, ShieldCheck, TrendingUp, Cpu, Users, Repeat, Clock, Wallet, GraduationCap } from "lucide-react"

export function WhyStaffing() {
  const benefits = [
    {
      icon: <Users className="h-10 w-10 text-nanocoreBlue" />,
      title: "Access to Specialized Semiconductor Talent",
      description: "We bring you highly skilled professionals with domain expertise, ready to contribute from day one—no ramp-up time required.",
    },
    {
      icon: <Repeat className="h-10 w-10 text-nanocoreBlue" />,
      title: "Flexibility with Stability",
      description: "Scale your workforce up or down based on project needs while we handle payroll, compliance, and HR, offering agility without the hassle.",
    },
    {
      icon: <Clock className="h-10 w-10 text-nanocoreBlue" />,
      title: "Faster Hiring, Faster Delivery",
      description: "Avoid long recruitment cycles. Our ready-to-deploy talent ensures your projects stay on schedule and meet critical deadlines.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-nanocoreBlue" />,
      title: "Reduced Operational Risk",
      description: "With professionals on our payroll, you minimize legal, financial, and administrative risks while staying fully focused on core business goals.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-nanocoreBlue" />,
      title: "Cost-Effective Talent Management",
      description: "Optimize costs by reducing long-term employment overheads while still gaining access to top-tier industry talent.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-nanocoreBlue" />,
      title: "Skilling and Assessment Support",
      description: "Beyond staffing, we assess and upskill candidates to align with evolving project demands—ensuring a future-ready workforce.",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Why Staffing is the Smart Solution</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Sure! Here's a concise version with six impactful points for your website section on "Why Staffing is the Smart Solution"—tailored for Nanocore Systems and your semiconductor focus:
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
