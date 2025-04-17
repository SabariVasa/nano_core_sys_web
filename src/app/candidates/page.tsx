import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AnimatedBackground } from "@/src/components/animated-background"
import { AnimatedIcon } from "@/src/components/animated-icon"
import { CheckCircle, Briefcase, GraduationCap, Heart, Award, Users } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

export default function CandidatesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 md:py-28">
        <AnimatedBackground />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Build a Career in Semiconductors</h1>
            <p className="text-xl text-gray-200">
              Join a team that puts your growth and job stability first. Work on leading-edge projects with top-tier
              companies while being part of Nanocore's growing network.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Nanocore</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Discover the advantages of building your semiconductor career with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader>
                <div className="mb-4">
                  <AnimatedIcon>
                    <Briefcase className="h-8 w-8 text-white" />
                  </AnimatedIcon>
                </div>
                <CardTitle>Exciting Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Work on cutting-edge semiconductor technologies with industry-leading companies.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Diverse project exposure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Latest technology stacks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Innovation-focused environments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader>
                <div className="mb-4">
                  <AnimatedIcon>
                    <Heart className="h-8 w-8 text-white" />
                  </AnimatedIcon>
                </div>
                <CardTitle>Stability & Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enjoy continuous employment with comprehensive benefits between project assignments.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Competitive compensation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Health and retirement benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Paid time between projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader>
                <div className="mb-4">
                  <AnimatedIcon>
                    <GraduationCap className="h-8 w-8 text-white" />
                  </AnimatedIcon>
                </div>
                <CardTitle>Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Accelerate your professional development with our training and advancement opportunities.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Skill development programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Mentorship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Clear advancement paths</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader>
                <div className="mb-4">
                  <AnimatedIcon>
                    <Award className="h-8 w-8 text-white" />
                  </AnimatedIcon>
                </div>
                <CardTitle>Industry Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Build your reputation by working with recognized leaders in the semiconductor industry.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Portfolio-building projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Industry networking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Professional certifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader>
                <div className="mb-4">
                  <AnimatedIcon>
                    <Users className="h-8 w-8 text-white" />
                  </AnimatedIcon>
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Join a network of semiconductor professionals who share knowledge and support each other.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Peer collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Knowledge sharing events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Professional community</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover border-t-4 border-t-nanocoreBlue">
              <CardHeader>
                <div className="mb-4">
                  <AnimatedIcon>
                    <Briefcase className="h-8 w-8 text-white" />
                  </AnimatedIcon>
                </div>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enjoy flexible arrangements that respect your personal time while delivering professional results.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Remote work possibilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-nanocoreBlue flex-shrink-0 mr-2" />
                    <span>Supportive management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roles We Hire For */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles We Hire For</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              We're constantly seeking talented professionals across the semiconductor industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-nanocoreBlue">Design & Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>VLSI Design Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>RTL Design Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Physical Design Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Analog Design Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Mixed-Signal Engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-nanocoreBlue">Verification & Validation</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Verification Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>DFT Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Validation Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Test Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Quality Assurance Engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-nanocoreBlue">Embedded Systems</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Firmware Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Embedded Software Developers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>FPGA Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>SoC Integration Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>RTOS Specialists</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-nanocoreBlue">Manufacturing & Process</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Process Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Yield Enhancement Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Fabrication Specialists</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Equipment Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Quality Control Engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-nanocoreBlue">PCB & Hardware</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>PCB Design Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Hardware Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Signal Integrity Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Power Electronics Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>RF Engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-nanocoreBlue">Emerging Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>AI Hardware Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Quantum Computing Engineers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>Automotive Semiconductor Specialists</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>IoT Hardware Developers</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nanocoreBlue rounded-full mr-2"></span>
                  <span>5G/6G Hardware Engineers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Professionals</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              What semiconductor experts say about their experience with Nanocore
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Raj Patel</h3>
                  <p className="text-nanocoreBlue">VLSI Design Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with Nanocore has given me access to cutting-edge projects while maintaining job security. I've
                grown more in two years here than in my previous five years of employment."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Lisa Chen</h3>
                  <p className="text-nanocoreBlue">Verification Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The variety of projects I've worked on through Nanocore has expanded my skill set tremendously. Plus, I
                never have to worry about downtime between assignments."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">James Wilson</h3>
                  <p className="text-nanocoreBlue">Embedded Systems Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Nanocore's professional development program has helped me stay current with emerging technologies. I've
                been able to transition into AI hardware design while maintaining employment stability."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Join Our Team</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Our streamlined application process makes it easy to start your journey with Nanocore
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-[40px] top-0 bottom-0 w-1 bg-nanocoreBlue/20"></div>

              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex gap-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-nanocoreBlue flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                    <div className="hidden md:block absolute top-20 left-1/2 h-[calc(100%+3rem)] w-1 bg-nanocoreBlue/20 -translate-x-1/2"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-nanocoreBlue mb-2">Submit Your Profile</h3>
                    <p className="text-gray-600 mb-4">
                      Complete our online application with your resume, skills, and experience in the semiconductor
                      industry.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Pro Tip:</strong> Highlight specific semiconductor technologies and tools you're
                        proficient with to help us match you with the right opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-nanocoreBlue flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                    <div className="hidden md:block absolute top-20 left-1/2 h-[calc(100%+3rem)] w-1 bg-nanocoreBlue/20 -translate-x-1/2"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-nanocoreBlue mb-2">Technical Assessment</h3>
                    <p className="text-gray-600 mb-4">
                      Participate in a technical evaluation tailored to your specialty to validate your expertise.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Pro Tip:</strong> Our assessments focus on practical skills rather than theoretical
                        knowledge, so be prepared to demonstrate how you've applied your expertise.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-nanocoreBlue flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                    <div className="hidden md:block absolute top-20 left-1/2 h-[calc(100%+3rem)] w-1 bg-nanocoreBlue/20 -translate-x-1/2"></div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-nanocoreBlue mb-2">Interview Process</h3>
                    <p className="text-gray-600 mb-4">
                      Meet with our technical team and staffing specialists to discuss your career goals and project
                      preferences.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Pro Tip:</strong> Be specific about the types of projects and technologies you're most
                        interested in working with to help us find your ideal match.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-nanocoreBlue flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-nanocoreBlue mb-2">Onboarding & Project Matching</h3>
                    <p className="text-gray-600 mb-4">
                      Join the Nanocore team and get matched with projects that align with your skills and career goals.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Pro Tip:</strong> Our onboarding process includes orientation to our systems and
                        benefits, as well as introductions to your project team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg text-white relative overflow-hidden">
        <AnimatedBackground density={30} color="rgba(255, 255, 255, 0.1)" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Semiconductor Career?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join our talent network today and discover exciting opportunities with leading semiconductor companies.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-mint to-blue text-nanocoreBlue hover:bg-gray-100">
              <Link href="/contact">Join Our Talent Network</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
