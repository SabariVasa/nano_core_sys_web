import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AnimatedBackground } from "@/src/components/animated-background"
import {
  GraduationCap,
  Code,
  Cpu,
  Server,
  CheckCircle,
  BookOpen,
  Layers,
  Lightbulb,
  Database,
  Smartphone,
  MicroscopeIcon as Microchip,
  Network,
  Workflow,
  Zap,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function TrainingDetailsPage() {
  const trainingPrograms = [
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "VLSI Design & Verification",
      description: "Comprehensive training in chip design, RTL development, and verification methodologies.",
      features: [
        "Digital design fundamentals",
        "RTL coding with Verilog/VHDL",
        "Advanced verification techniques",
        "Industry-standard EDA tools",
      ],
      image: "/vlsi-design-training.jpg",
      slug: "vlsi-design-verification",
    },
    {
      icon: <Server className="h-10 w-10 text-white" />,
      title: "Embedded Systems",
      description: "Hands-on training in embedded programming, firmware development, and system integration.",
      features: [
        "Microcontroller programming",
        "Real-time operating systems",
        "Hardware-software interfacing",
        "IoT protocols and implementation",
      ],
      image: "/embedded-systems-training.png",
      slug: "embedded-systems",
    },
    {
      icon: <Code className="h-10 w-10 text-white" />,
      title: "Physical Design",
      description: "Training in IC layout, timing analysis, and physical implementation techniques.",
      features: [
        "Floor planning and power planning",
        "Placement and routing",
        "Static timing analysis",
        "DFT and DFM techniques",
      ],
      image: "/physical-design-training.png",
      slug: "physical-design",
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "Design for Testability (DFT)",
      description:
        "This intensive program blends theory with hands-on experience to prepare engineers for real-world challenges in chip design and verification.",
      features: [
          "Core DFT Techniques",
          "Hands-on with Industry Tools",
          "Fault Modeling & Test Optimization",
          "System-on-Chip (SoC) Integration",
      ],
      image: "/corporate-training-program.jpg",
      slug: "design-for-testability-dft",
    }
  ]

  const keyframes =[
            {
            title: "Expert Instructors",
            description:
                "Learn from the best in the business. Our instructors bring real-world experience and deep industry insights to the table.",
            icon: <GraduationCap className="h-6 w-6 text-white" />,
            },
            {
            title: "Practice-Oriented Programs",
            description:
                "We believe in learning by doing. Each course is loaded with hands-on projects, real-world simulations, and practical exercises.",
            icon: <Workflow className="h-6 w-6 text-white" />,
            },
            {
            title: "Personalized Learning",
            description:
                "Our adaptive learning paths cater to individual learning styles and paces, ensuring an engaging and effective learning experience.",
            icon: <Lightbulb className="h-6 w-6 text-white" />,
            },
            {
            title: "Community Support",
            description:
                "Join a vibrant community of learners and mentors. Collaborate, share, and grow together.",
            icon: <Network className="h-6 w-6 text-white" />,
            },
            {
            title: "Global Workforce Needs",
            description:
                "We understand the pulse of the global market. Our programs are designed to meet the exacting standards of today’s tech giants and innovators.",
            icon: <Server className="h-6 w-6 text-white" />,
            },
            {
            title: "Industry-Recognized Certifications",
            description:
                "Our certifications are not just pieces of paper. They are badges of honor, recognized and valued by industry leaders globally.",
            icon: <CheckCircle className="h-6 w-6 text-white" />,
            },
        ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-r from-mint to-blue text-white py-20 md:py-28">
        {/* <AnimatedBackground /> */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Train & Develop
            </h1>
            <p className="text-xl text-gray-100">
            We offer a practice-oriented, globally recognized training platform with personalized learning paths and expert guidance to upskill for the most trending job roles.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
        <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-mint-blue mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Empowering your teams with the most relevant, practical, and recognized training in the semiconductor space.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {keyframes.map((feature, index) => (
                <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-mint to-blue p-3 rounded-full">
                    {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gradient-mint-blue">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>


      {/* Training Programs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Our Learning Pack</h2>
            {/* <p className="text-lg max-w-3xl mx-auto text-gray-600">
                We offer a practice-oriented, globally recognized training platform with personalized learning paths and expert guidance to upskill for the most trending job roles.
            </p> */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-mint/20 to-blue/20"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-2">{program.icon}</div>
                    <h3 className="text-xl font-bold text-gradient-mint-blue">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-mint flex-shrink-0 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-mint to-blue hover:opacity-90">
                    <Link href={`/training-details/${program.slug}`}>
                      <span className="text-white">View Program Details</span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Highlights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Our Training Approach</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              What makes our training programs stand out in the semiconductor industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gradient-mint-blue">Industry-Aligned Curriculum</h3>
                    <p className="text-gray-600">
                      Our curriculum is developed in collaboration with industry experts to ensure relevance and
                      practical application.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gradient-mint-blue">Hands-On Learning</h3>
                    <p className="text-gray-600">
                      Practical, project-based learning with industry-standard tools and technologies used in
                      professional environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-gradient-to-r from-mint to-blue rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gradient-mint-blue">Flexible Delivery Models</h3>
                    <p className="text-gray-600">
                      Choose from instructor-led, online, hybrid, or custom delivery models to suit your organization's
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Our Training Approach.png"
                alt="Training Approach"
                fill
                className="object-cover"
                sizes="(max-width: 668px) 90vw, 15vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-mint/20 to-blue/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-mint to-blue text-white relative overflow-hidden">
        {/* <AnimatedBackground type="particles" primaryColor="#ffffff" secondaryColor="#ffffff" density={30} /> */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Expertise in Semiconductor Technologies?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact us to discuss your training needs and how we can help develop your semiconductor talent.
            </p>
            {/* <Button asChild size="lg" className="bg-white hover:bg-gray-100">
              <Link href="/contact">
                <span className="text-blue font-semibold">Get in Touch</span>
              </Link>
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
