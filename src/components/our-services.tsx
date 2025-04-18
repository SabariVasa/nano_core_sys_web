import { Users, CreditCard, Calendar, GraduationCap, Briefcase, UserCheck, ListChecks, BarChart3, ArrowRightCircle, SearchCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import Link from "next/link"

export function OurServices() {
  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-white" />,
      title: "Contract Hiring",
      description:
        "Deploy semiconductor experts for short-term or project-based roles. We manage payroll, compliance, and onboarding—so you get the flexibility without administrative burden.",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-white" />,
      title: "Full-Time Hiring",
      description:
        "We help you hire permanent employees who are technically sound and culturally aligned—ensuring long-term success in your semiconductor projects.",
    },
    {
      icon: <ListChecks className="h-12 w-12 text-white" />,
      title: "Candidate Assessment",
      description:
        "Our robust assessment process evaluates candidates on technical, behavioral, and job-specific competencies—helping you hire smarter and faster.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      title: "Skilling & Upskilling Programs",
      description:
        "Customized learning solutions designed to prepare new hires or reskill existing teams—keeping your workforce aligned with evolving industry demands.",
      link: "/services#training", // Add "Know more" navigation
      linkIcon: <ArrowRightCircle className="h-5 w-5 ml-2 text-white" />,
    },
    {
      icon: <SearchCheck className="h-12 w-12 text-white" />,
      title: "Background Verification",
      description:
        "We conduct thorough background checks—covering employment history, education, criminal records, and more—to ensure the authenticity and reliability of every hire.",
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

        <div className="grid md:grid-cols-3 gap-8">
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
