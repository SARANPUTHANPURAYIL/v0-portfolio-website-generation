import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-12 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <HeroSection />
          <div className="lg:w-1/2 lg:py-24">
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  )
}
