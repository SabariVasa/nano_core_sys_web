import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AnimatedBackground } from "@/src/components/animated-background"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Define the training programs data
const trainingPrograms = {
  "vlsi-design-verification": {
    title: "VLSI Design and Verification",
    description: "The VLSI and Design Verification program is meticulously crafted to equip engineers with the skills and knowledge required for the semiconductor industry's dynamic landscape. This intensive course blends theoretical foundations with hands-on experience, ensuring participants are well-prepared to tackle real-world challenges in chip design and verification.",
    features : [
        "Advanced Digital Design: Delve into the principles of digital circuits, understanding complex design methodologies and logic implementations.",
        "System Architecture: Gain insights into the structural design of computer systems, focusing on the integration and functionality of various components.",
        "Linux Shell Scripting & Python: Develop proficiency in scripting languages essential for automation and tool development in VLSI workflows.",
        "Verilog HDL: Master the hardware description language used extensively for modeling electronic systems.",
        "HDL Simulation and Synthesis: Learn to simulate and synthesize hardware designs, bridging the gap between conceptual models and physical implementations.",
        "Programming Fundamentals for Design and Verification: Strengthen programming skills crucial for developing testbenches and verification environments.",
        "SystemVerilog: Explore advanced features of SystemVerilog for efficient hardware modeling and verification.",
        "Verification using UVM: Understand the Universal Verification Methodology to create reusable and scalable verification environments.",
        "CMOS VLSI and Aspects of ASIC Design: Study the intricacies of CMOS technology and the design considerations for Application-Specific Integrated Circuits.",
        "Project Work: Apply learned concepts to real-world projects, fostering practical experience and industry readiness.",
    ],
    programStructure: {
        duration: "24 weeks",
        totalHours: "Comprehensive coverage encompassing theory, lab sessions, and project work",
    },
    image: "/vlsi-design-training.jpg",
    longDescription: `Our VLSI Design & Verification program provides comprehensive training in all aspects of chip design, from RTL development to verification methodologies. This program is designed for engineers looking to build or enhance their skills in digital design, verification, and implementation.

    The curriculum covers digital design fundamentals, RTL coding with Verilog/VHDL, advanced verification techniques, and industry-standard EDA tools. Participants will gain hands-on experience with real-world projects and industry-standard tools used in professional environments.
    
    Our expert instructors bring years of industry experience to the classroom, ensuring that participants learn not just the theory but also practical applications and best practices used in the semiconductor industry.`,
  },
  "embedded-systems": {
        title: "Embedded Systems",
        description:
          "The Advanced Embedded Systems program is meticulously crafted to equip engineers with the skills and knowledge required for the dynamic landscape of embedded systems. This intensive course blends theoretical foundations with hands-on experience, ensuring participants are well-prepared to tackle real-world challenges in embedded system design and development.",
        features: [
          "C and C++ Programming: Master the foundations of system-level programming and object-oriented design using C and C++.",
          "Linux Internals: Understand the core of Linux including system calls, memory management, and inter-process communication.",
          "Networking and TCP/IP: Learn the essentials of network structures, OSI layers, and protocol-level communication.",
          "Real-Time Operating Systems (RTOS): Get hands-on with RT-Linux, task scheduling, and synchronization techniques.",
          "Microcontrollers and Hardware Interfacing: Work with Intel 8051 and ARM9 microcontrollers, and interface peripherals like UART, SPI, and I2C.",
          "Embedded Linux: Set up cross-development environments, build custom kernels, and develop applications on ARM9 boards.",
          "Projects: Apply knowledge through real-world embedded systems projects and case studies."
        ],
        programStructure: {
          duration: "24 weeks",
          totalHours: "Comprehensive coverage encompassing theory, lab sessions, and project work"
        },
        image: "/embedded-systems-training.png",
        longDescription: `Our Embedded Systems program covers everything from low-level programming in C and C++ to real-time operating systems and embedded Linux development. Participants gain expertise in designing efficient and reliable embedded solutions for industries ranging from automotive to consumer electronics.

        The course dives deep into Linux internals, networking protocols, and microcontroller interfacing, providing a solid foundation for hardware-software integration. With a strong project-oriented approach, learners will build functional embedded systems and gain confidence to excel in industry roles.
        
        Designed by experts and supported with practical lab sessions, this program ensures engineers graduate with job-ready skills and a comprehensive understanding of modern embedded platforms.`,
  },

  "physical-design": {
    title: "Physical Design",
    description: "The VLSI Physical Design program is meticulously crafted to equip engineers with the skills and knowledge required for the semiconductor industry's dynamic landscape. This intensive course blends theoretical foundations with hands-on experience, ensuring participants are well-prepared to tackle real-world challenges in chip design and verification.",
    features: [
        "Advanced Digital Design: Delve into the principles of digital circuits, understanding complex design methodologies and logic implementations.",
        "System Architecture: Gain insights into the structural design of computer systems, focusing on the integration and functionality of various components.",
        "Linux Shell Scripting & Python: Develop proficiency in scripting languages essential for automation and tool development in VLSI workflows.",
        "Verilog HDL: Master the hardware description language used extensively for modeling electronic systems.",
        "HDL Simulation and Synthesis: Learn to simulate and synthesize hardware designs, bridging the gap between conceptual models and physical implementations.",
        "Programming Fundamentals for Design and Verification: Strengthen programming skills crucial for developing testbenches and verification environments.",
        "SystemVerilog: Explore advanced features of SystemVerilog for efficient hardware modeling and verification.",
        "Verification using UVM: Understand the Universal Verification Methodology to create reusable and scalable verification environments.",
        "CMOS VLSI and Aspects of ASIC Design: Study the intricacies of CMOS technology and the design considerations for Application-Specific Integrated Circuits.",
        "Project Work: Apply learned concepts to real-world projects, fostering practical experience and industry readiness.",
      ],   
      programStructure: {
        duration: "24 weeks",
        totalHours: "Comprehensive coverage encompassing theory, lab sessions, and project work",
    },   
    image: "/physical-design-training.png",
    longDescription: `Our Physical Design program provides comprehensive training in IC layout, timing analysis, and physical implementation techniques. This program is designed for engineers who want to specialize in the physical implementation of integrated circuits.

    The curriculum covers floor planning and power planning, placement and routing, static timing analysis, and DFT and DFM techniques. Participants will gain hands-on experience with industry-standard EDA tools and work on real-world physical design projects.
    
    Our expert instructors bring years of industry experience to the classroom, ensuring that participants learn not just the theory but also practical applications and best practices used in the semiconductor industry.`,
  },
  "design-for-testability-dft": {
  "title": "Design for Testability (DFT)",
  "description": "The Design for Testability (DFT) program is meticulously crafted to equip engineers with the skills and knowledge required for the semiconductor industry's dynamic landscape. This intensive course blends theoretical foundations with hands-on experience, ensuring participants are well-prepared to tackle real-world challenges in chip design and verification.",
  "features": [
    "Advanced Digital Design: Delve into the principles of digital circuits, understanding complex design methodologies and logic implementations.",
    "System Architecture: Gain insights into the structural design of computer systems, focusing on the integration and functionality of various components.",
    "Linux Shell Scripting & Python: Develop proficiency in scripting languages essential for automation and tool development in VLSI workflows.",
    "Verilog HDL: Master the hardware description language used extensively for modeling electronic systems.",
    "HDL Simulation and Synthesis: Learn to simulate and synthesize hardware designs, bridging the gap between conceptual models and physical implementations.",
    "Programming Fundamentals for Design and Verification: Strengthen programming skills crucial for developing testbenches and verification environments.",
    "SystemVerilog: Explore advanced features of SystemVerilog for efficient hardware modeling and verification.",
    "Verification using UVM: Understand the Universal Verification Methodology to create reusable and scalable verification environments.",
    "CMOS VLSI and Aspects of ASIC Design: Study the intricacies of CMOS technology and the design considerations for Application-Specific Integrated Circuits.",
    "Project Work: Apply learned concepts to real-world projects, fostering practical experience and industry readiness."
  ],
  "programStructure": {
    "duration": "24 weeks",
    "totalHours": "Comprehensive coverage encompassing theory, lab sessions, and project work"
  },
  "image": "/corporate-training-program.jpg",
  "longDescription": "Our DFT training program provides in-depth knowledge in design for testability, fault modeling, scan insertion, and ATPG techniques. Participants gain practical expertise through real-world projects and hands-on experience with industry tools, preparing them for roles in chip design and verification."
  }
}

export async function generateStaticParams() {
  return Object.keys(trainingPrograms).map((slug) => ({ slug }));
}

export default function TrainingDetailsPage({ params }: { params: { slug: string } }) {
  const program = trainingPrograms[params.slug as keyof typeof trainingPrograms];

  if (!program) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gradient-mint-blue">Program Not Found</h1>
          <p className="mb-8">The training program you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/training-details">View All Programs</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section
        style={{
          backgroundImage: `url(${program.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative overflow-hidden text-white py-20 md:py-28"
      >
        {/* <AnimatedBackground density={30} color="rgba(255, 255, 255, 0.1)" /> */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/training-details" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Programs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{program.title}</h1>
            <p className="text-xl">{program.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient-mint-blue">Program Overview</h3>
              <div className="prose max-w-none">
                {program.longDescription.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-mint-light/20 to-blue-light/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gradient-mint-blue">Ready to Enroll?</h3>
                <p className="mb-6 text-gray-700">
                  Contact us to discuss your training needs and how we can help develop your semiconductor talent.
                </p>
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-mint to-blue hover:opacity-90">
                  <Link href="/contact">
                    <span className="text-white">Request Program Details</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gradient-mint-blue">Curriculum Highlights</h3>
          <ul className="space-y-3 mb-8">
            {program.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint flex-shrink-0 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-mint-blue">Program Structure</h3>
            <div>
              Duration: {program.programStructure.duration} <br />
              Total Hours: {program.programStructure.totalHours}
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Related Programs</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Explore other training programs that might interest you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(trainingPrograms)
              .filter(([key]) => key !== params.slug)
              .slice(0, 3)
              .map(([key, relatedProgram]) => (
                <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={relatedProgram.image || "/placeholder.svg"}
                      alt={relatedProgram.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gradient-mint-blue">{relatedProgram.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedProgram.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/training-details/${key}`}>
                        <span>Learn More</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
