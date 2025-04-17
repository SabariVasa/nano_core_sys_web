import { Users, CreditCard, Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import Link from "next/link"

export function OurServices() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Resource Deployment",
      description:
        "Professionals for every phase of semiconductor development—design, verification, testing, and more.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-white" />,
      title: "Payroll Staffing",
      description: "We employ the talent, manage their benefits, and ensure compliance—so you don't have to.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-white" />,
      title: "Date Card Allocation System",
      description:
        "We deploy candidates based on agreed timelines and availability, ensuring no disruption in your project flow.",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "Training & Skilling",
      description: "Industry-relevant training programs to build job-ready talent in VLSI and Embedded Systems.",
      link: "/services#training",
    },
  ]

  return (
    <section id="services" className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Comprehensive staffing solutions tailored for the semiconductor industry
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white card-hover">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 bg-gradient-to-r from-mint to-blue rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-200 text-base">{service.description}</CardDescription>
                {service.link && (
                  <Link href={service.link} className="inline-block mt-4 text-mint hover:text-blue transition-colors">
                    Learn more →
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
