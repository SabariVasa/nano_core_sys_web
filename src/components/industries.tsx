import { Cpu, Server, Activity, Factory, CircuitBoard } from "lucide-react"

export function Industries() {
  const industries = [
    {
      icon: <Cpu className="h-10 w-10 text-nanocoreBlue" />,
      name: "VLSI & SoC Design",
    },
    {
      icon: <Server className="h-10 w-10 text-nanocoreBlue" />,
      name: "Embedded Systems",
    },
    {
      icon: <Activity className="h-10 w-10 text-nanocoreBlue" />,
      name: "Semiconductor Testing & Validation",
    },
    {
      icon: <Factory className="h-10 w-10 text-nanocoreBlue" />,
      name: "Foundry Support & Fabrication",
    },
    {
      icon: <CircuitBoard className="h-10 w-10 text-nanocoreBlue" />,
      name: "PCB Design & Simulation",
    },
  ]

  return (
    <section id="industries" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Specialized staffing solutions for the entire semiconductor ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center card-hover">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">{industry.icon}</div>
              <h3 className="font-semibold">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
