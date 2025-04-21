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
        description: "Hands-on training in embedded programming, firmware development, and system integration.",
        features: [
            "Microcontroller programming (ARM, AVR, PIC)",
            "Real-time operating systems (RTOS) concepts and usage",
            "Hardware-software interfacing and device drivers",
            "IoT protocols and implementation (MQTT, CoAP, BLE)",
            "Embedded Linux (Yocto, Buildroot, device trees)",
            "Firmware development using C/C++ and assembly",
            "Sensor integration and peripheral interfacing (SPI, I2C, UART)",
            "Power optimization techniques for embedded devices",
            "Bootloader development and secure firmware updates",
            "Debugging and testing using JTAG, oscilloscopes, and logic analyzers",
            "ARM Cortex-M architecture and programming",
            "System-level design and embedded project workflows",
            "Hands-on projects using development boards (STM32, ESP32, Raspberry Pi)",
            "CAN, LIN, and Modbus communication protocols",
            "Integration with cloud platforms (AWS IoT, Azure IoT Hub)",
        ],
        image: "/embedded-systems-training.png",
        programStructure: {
            duration: "24 weeks",
            totalHours: "Comprehensive coverage encompassing theory, lab sessions, and project work",
        },
        longDescription: `Our Embedded Systems program offers hands-on training in embedded programming, firmware development, and system integration. This comprehensive course is designed for engineers who want to specialize in developing software for embedded devices and systems.

        The curriculum covers microcontroller programming, real-time operating systems, hardware-software interfacing, and IoT protocols and implementation. Participants will work on real embedded systems and develop practical skills that are immediately applicable in the workplace.
        
        The program emphasizes practical, project-based learning with industry-standard tools and technologies used in professional environments. Our instructors are experienced embedded systems engineers who bring real-world expertise to the classroom.`,
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

//   "corporate-programs": {
//     title: "Custom Corporate Programs",
//     description:
//       "Tailored training solutions aligned with your organization's specific technology stack and project requirements.",
//     features: [
//       "Needs assessment and curriculum design",
//       "Flexible delivery models",
//       "Project-based learning",
//       "Performance tracking and analysis",
//       "Customized content",
//       "On-site or remote options",
//     ],
//     programStructure: {
//         duration: "24 weeks",
//         totalHours: "Comprehensive coverage encompassing theory, lab sessions, and project work",
//     },
//     image: "/corporate-training-program.jpg",
//     longDescription: `Our Custom Corporate Programs offer tailored training solutions aligned with your organization's specific technology stack and project requirements. We work closely with your team to understand your unique needs and develop a customized training program that addresses your specific challenges.

//     Our approach includes needs assessment and curriculum design, flexible delivery models, project-based learning, and performance tracking and analysis. We can deliver training on-site at your location or remotely, depending on your preference.
    
//     Our corporate programs are designed to maximize the return on your training investment by focusing on the specific skills and knowledge that your team needs to succeed. We use real-world examples and projects from your industry to ensure that the training is immediately applicable to your work.`,
//   },
//   "power-electronics": {
//   title: "Power Electronics Design",
//   description: "Comprehensive training in power conversion technologies, control techniques, and design of efficient power electronic systems.",
//   features: [
//     "Fundamentals of power electronics and energy conversion",
//     "Semiconductor devices used in power systems (MOSFETs, IGBTs, SiC, GaN)",
//     "DC-DC converter topologies (Buck, Boost, Buck-Boost, Cuk)",
//     "AC-DC and DC-AC conversion (Rectifiers, Inverters, PFC circuits)",
//     "PWM techniques and modulation strategies",
//     "Closed-loop control using analog and digital controllers",
//     "Design and analysis of magnetics (transformers, inductors, cores)",
//     "Thermal design and heat dissipation techniques",
//     "Gate driver design and protection circuitry",
//     "PCB layout considerations for power electronics",
//     "Simulation using LTspice, PSIM, MATLAB/Simulink",
//     "Hardware prototyping and testing with oscilloscopes, current probes",
//     "Battery management systems and EV powertrains",
//     "Power supply design for embedded and industrial systems",
//     "Mini projects: SMPS, motor controllers, inverter circuits",
//   ],
//   programStructure: {
//     duration: "24 weeks",
//     totalHours: "Extensive program including theoretical concepts, simulations, and real-time hardware implementation",
//   },
//   image: "/power-electronics-training.jpeg",
//   longDescription: `The Power Electronics Design program equips engineers with the essential knowledge and hands-on skills required to design efficient, reliable, and compact power conversion systems. The course covers modern power semiconductor devices, converter topologies, control techniques, and practical design considerations.

//   Participants will work on simulations and hardware development for various power converter circuits, including DC-DC, AC-DC, and DC-AC systems. They’ll gain experience with tools like MATLAB, LTspice, and real-time hardware testing for control loop tuning, EMI, and thermal analysis.

//   This program is ideal for engineers aspiring to build careers in power supply design, renewable energy systems, electric vehicles, industrial automation, and consumer electronics power systems.`,
// },
// "semiconductor-manufacturing": {
//   title: "Semiconductor Manufacturing",
//   description: "End-to-end training in semiconductor fabrication processes, cleanroom practices, and process integration for front-end and back-end manufacturing.",
//   features: [
//     "Introduction to semiconductor physics and materials",
//     "Wafer fabrication process flow and cleanroom protocols",
//     "Photolithography, etching, and ion implantation techniques",
//     "Oxidation, diffusion, and thin film deposition (CVD, PVD)",
//     "Chemical Mechanical Polishing (CMP) and planarization",
//     "Process control, metrology, and yield improvement strategies",
//     "Device fabrication and process integration",
//     "Packaging, testing, and back-end processes",
//     "Design for manufacturability (DFM) and defect management",
//     "Reliability testing and failure analysis techniques",
//     "Overview of foundry processes and node scaling (180nm to 3nm)",
//     "ESD protection and latch-up prevention techniques",
//     "Automation, robotics, and equipment used in fabs",
//     "Environmental, safety, and sustainability practices in fabs",
//     "Industry case studies from fabs like TSMC, Intel, GlobalFoundries",
//   ],
//   programStructure: {
//     duration: "24 weeks",
//     totalHours: "Complete fabrication flow coverage with theory, process simulations, and cleanroom virtual labs",
//   },
//   image: "/semiconductor-manufacturing-training.jpg",
//   longDescription: `The Semiconductor Manufacturing program is designed for engineers and technicians aspiring to work in wafer fabs and semiconductor production facilities. It covers the complete IC fabrication lifecycle—from raw wafer processing to final chip packaging and testing.

//   Participants will learn the science and engineering behind core fabrication steps such as photolithography, etching, deposition, and ion implantation, along with practical insights into defect control, yield analysis, and cleanroom operations. Real-world case studies and virtual fab tours are included to bridge theory with actual manufacturing practices.

//   Ideal for those aiming to work in foundries, OSATs, or manufacturing divisions of semiconductor companies, this program prepares participants for roles in process engineering, yield enhancement, reliability, and production support.`,
// },
// "rf-wireless": {
//   title: "RF & Wireless Design",
//   description: "Comprehensive training in RF circuit design, wireless communication systems, and high-frequency signal analysis for modern wireless applications.",
//   features: [
//     "Basics of RF electronics and electromagnetic theory",
//     "Transmission line theory and Smith chart analysis",
//     "S-parameters, impedance matching, and network analysis",
//     "Design of LNAs, mixers, VCOs, PAs, and filters",
//     "RF front-end architecture for wireless systems",
//     "Antenna theory and design for IoT and mobile platforms",
//     "Wireless communication standards (Wi-Fi, Bluetooth, LTE, 5G)",
//     "RF PCB layout techniques and parasitic management",
//     "RF simulation using tools like ADS, HFSS, and Cadence AWR",
//     "Noise figure, gain, linearity, and IP3 measurements",
//     "RF testing and validation using spectrum/network analyzers",
//     "System-level simulation with MATLAB and Simulink",
//     "Design for manufacturability and compliance testing",
//     "Hands-on labs with SDR platforms and RF development kits",
//     "Mini projects focused on real-world wireless modules and applications",
//   ],
//   programStructure: {
//     duration: "24 weeks",
//     totalHours: "In-depth program with design theory, simulation labs, and hardware implementation projects",
//   },
//   image: "/rf-wireless-training.jpg",
//   longDescription: `The RF & Wireless Design program is built for engineers seeking to specialize in the development of RF circuits and wireless communication systems. This course offers a strong foundation in both theoretical and practical aspects of RF engineering, from device-level design to system integration.

//   Participants will explore the design and simulation of RF front-end components, antennas, and high-frequency transmission paths. Emphasis is placed on using industry-standard tools for simulation, measurement, and layout, along with hands-on lab sessions using RF kits and SDR platforms.

//   This program is ideal for engineers targeting careers in wireless product design, RF system development, antenna engineering, or communication hardware domains across industries such as telecom, defense, IoT, and automotive.`,
// },
// "analog-mixed-signal": {
//   title: "Analog & Mixed-Signal Design",
//   description: "In-depth training in the design, simulation, and layout of analog and mixed-signal circuits for modern semiconductor applications.",
//   features: [
//     "Fundamentals of analog circuit design",
//     "Device physics and MOSFET modeling",
//     "Design of basic building blocks: amplifiers, comparators, current mirrors",
//     "Operational amplifier design and stability analysis",
//     "Noise analysis and signal integrity considerations",
//     "Analog layout techniques and matching strategies",
//     "Introduction to switched-capacitor and data converter circuits",
//     "Design of ADCs and DACs (SAR, Sigma-Delta, Flash)",
//     "CMOS analog IC design flow",
//     "Mixed-signal system design and integration",
//     "SPICE simulations using Cadence Spectre/HSPICE",
//     "Parasitic extraction and post-layout simulation",
//     "Power management circuits (LDOs, bandgap references, charge pumps)",
//     "Clock generation and PLL/DLL design fundamentals",
//     "Project work using industry-standard EDA tools (Cadence Virtuoso, Synopsys Custom Compiler)",
//   ],
//   programStructure: {
//     duration: "24 weeks",
//     totalHours: "Comprehensive training including theory, simulation labs, and hands-on layout projects",
//   },
//   image: "/analog-mixed-signal-training.jpg",
//   longDescription: `The Analog & Mixed-Signal Design program is tailored for engineers looking to specialize in designing and analyzing analog and mixed-signal circuits for applications in communications, sensors, power management, and data conversion.

//   This course covers essential circuit building blocks, layout techniques, and simulation methodologies using industry tools. Participants will gain hands-on experience with schematic entry, simulation (DC, AC, Transient, Noise), and layout in tools like Cadence Virtuoso.

//   Through project-based learning, attendees will design key analog components and integrate them into functional mixed-signal blocks. This program is ideal for engineers aiming to work in analog IC design, analog layout, or mixed-signal verification roles.`,
// },
// "rtl-verification": {
//   title: "RTL Design & Verification Engineers",
//   description: "A focused program for engineers aiming to master Register Transfer Level (RTL) design and functional verification for digital hardware systems.",
//   features: [
//     "Digital design fundamentals and logic synthesis",
//     "RTL coding using Verilog and SystemVerilog",
//     "Combinational and sequential logic implementation",
//     "Finite State Machine (FSM) design and optimization",
//     "Synchronous design and clock-domain crossing techniques",
//     "Simulation and waveform analysis with ModelSim/VCS",
//     "Assertion-based verification with SystemVerilog Assertions (SVA)",
//     "Testbench architecture and verification planning",
//     "Functional coverage and constrained-random verification",
//     "Verification methodologies using UVM (Universal Verification Methodology)",
//     "Integration of IPs and interface protocols (AXI, AHB, I2C, SPI)",
//     "Linting, CDC, and static checks using industry-standard tools",
//     "Timing analysis and synthesis flow using EDA tools",
//     "Debugging RTL and testbench environments",
//     "Mini projects and case studies on SoC components",
//   ],
//   programStructure: {
//     duration: "24 weeks",
//     totalHours: "Comprehensive training with real-time simulation labs and project-based learning",
//   },
//   image: "/rtl-verification-training.png",
//   longDescription: `This RTL Design & Verification program is designed for engineers aspiring to build a strong foundation in digital hardware design and verification. It focuses on the full development lifecycle of RTL-based IPs and subsystems, from design specification to functional verification.

//   Participants will gain proficiency in Verilog and SystemVerilog for RTL development, along with practical exposure to simulation tools and debugging techniques. Through hands-on exercises and project work, the program emphasizes writing clean, synthesizable RTL, developing robust testbenches, and verifying complex digital designs using UVM.

//   Whether you're starting in digital design or transitioning from embedded or software backgrounds, this program provides the necessary skills to excel in RTL design and verification roles across semiconductor, EDA, and IP companies.`,
// },
//   "ai-hardware": {
//     title: "AI Hardware Acceleration",
//     description: "Specialized training in designing and optimizing hardware systems for accelerating AI workloads across edge and cloud platforms.",
//     features: [
//         "Fundamentals of AI and deep learning workloads",
//         "Architectures of AI accelerators (GPU, TPU, FPGA, custom ASICs)",
//         "Parallel computing and memory hierarchy for AI processing",
//         "Hardware-software co-design principles",
//         "Model compression and quantization techniques",
//         "Implementation of AI models on edge devices",
//         "Introduction to CUDA, OpenCL, and SYCL programming",
//         "Using frameworks like TensorRT, OpenVINO, and TVM",
//         "FPGA-based neural network acceleration using HLS tools",
//         "Profiling and performance optimization of AI pipelines",
//         "Custom ASIC design for AI inference",
//         "Power and thermal management in AI hardware systems",
//         "Hands-on projects with Nvidia Jetson, Coral Edge TPU, and FPGA kits",
//         "Deployment strategies across edge and cloud ecosystems",
//         "Case studies from industry applications (autonomous systems, vision, NLP)",
//     ],
//     programStructure: {
//         duration: "24 weeks",
//         totalHours: "Comprehensive coverage encompassing theory, lab sessions, and project work",
//     },
//     image: "/ai-hardware-training.jpg",
//     longDescription: `The AI Hardware Acceleration program is crafted to bridge the gap between AI models and the underlying hardware systems that power them. This course equips engineers and developers with the knowledge and practical skills required to implement and optimize AI workloads across various compute platforms.

//     Participants will explore the architecture and design of AI accelerators such as GPUs, FPGAs, TPUs, and custom ASICs. Through hands-on labs and projects, they'll gain experience with deployment tools and frameworks, understand performance bottlenecks, and apply optimization techniques for real-time AI processing.

//     This program emphasizes hardware-software integration, energy efficiency, and scalability—making it ideal for those targeting careers in edge AI, cloud inferencing, and embedded intelligence. Experienced instructors guide learners through industry-relevant challenges, providing a strong foundation in the rapidly evolving field of AI acceleration.`,
//     },

}

export default function TrainingDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const program = trainingPrograms[slug as keyof typeof trainingPrograms]

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
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section 
        style={{
                backgroundImage: `url(${program.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
              }} 
        className="relative overflow-hidden bg-gradient-to-r from-mint to-blue text-white py-20 md:py-28"
      >
        <AnimatedBackground density={30} color="rgba(255, 255, 255, 0.1)" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/training-details"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Programs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-mint-blue">{program.title}</h1>
            <p className="text-xl text-white">{program.description}</p>
          </div>
        </div>
      </section>

      {/* Program Details */}
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
                <div className="absolute inset-0 bg-gradient-to-r from-mint/20 to-blue/20"></div>
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
              .filter(([key]) => key !== slug)
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
  )
}
