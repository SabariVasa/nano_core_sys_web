import { AlertTriangle, Clock, Users, BarChart, FileWarning } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

export function IndustryChallenges() {
  const challenges = [
    {
      icon: <Users className="h-8 w-8 text-nanocoreBlue" />,
      title: "Talent Shortage",
      description: "High demand, limited availability of skilled engineers",
    },
    {
      icon: <Clock className="h-8 w-8 text-nanocoreBlue" />,
      title: "Time-to-Hire Pressure",
      description: "Lengthy recruitment cycles delay innovation",
    },
    {
      icon: <BarChart className="h-8 w-8 text-nanocoreBlue" />,
      title: "Project Uncertainty",
      description: "Fluctuating workloads require agile resourcing",
    },
    {
      icon: <FileWarning className="h-8 w-8 text-nanocoreBlue" />,
      title: "Compliance Complexity",
      description: "Hiring comes with legal and operational overhead",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-nanocoreBlue" />,
      title: "Retention Risks",
      description: "High attrition impacts project stability",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Challenges</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            The semiconductor industry is evolving faster than ever, but not without roadblocks:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader className="pb-2">
                <div className="mb-2">{challenge.icon}</div>
                <CardTitle>{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{challenge.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
