import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-6">
          <Image
            src="/images/saran2.jpeg"
            alt="Saran P P"
            width={150}
            height={150}
            className="rounded-full border-2 border-primary object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Saran P P</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">Aspiring Data Scientist</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          I enjoy finding insights from data and creating solutions based on it. Looking for opportunities to work on
          new and exciting projects.
        </p>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
        <li>
          <a
            href="mailto:saranmeppayur@gmail.com"
            className="block text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="tel:+916282999143"
            className="block text-muted-foreground transition-colors hover:text-primary"
            aria-label="Phone"
          >
            <Phone className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/saranpp"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/saranpp"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  )
}
