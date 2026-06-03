import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Separator } from "@/components/ui/separator"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-[1]">
        <HeroSection />
        <div className="mx-auto max-w-[1100px] px-5 pt-24">
          <Separator />
        </div>
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
