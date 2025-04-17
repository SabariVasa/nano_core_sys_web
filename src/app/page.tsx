import { Hero } from "@/src/components/hero"
import { Navbar } from "@/src/components/navbar"
import { AboutUs } from "@/src/components/about-us"
import { IndustryChallenges } from "@/src/components/industry-challenges"
import { WhyStaffing } from "@/src/components/why-staffing"
import { OurServices } from "@/src/components/our-services"
import { Industries } from "@/src/components/industries"
import { ForClients } from "@/src/components/for-clients"
import { ForCandidates } from "@/src/components/for-candidates"
import { ContactUs } from "@/src/components/contact-us"
import { Footer } from "@/src/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <IndustryChallenges />
      <WhyStaffing />
      <OurServices />
      <Industries />
      <div className="grid md:grid-cols-2 gap-0">
        <ForClients />
        <ForCandidates />
      </div>
      <ContactUs />
      <Footer />
    </main>
  )
}
