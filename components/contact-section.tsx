import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Contact</h2>
      </div>
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m currently looking for opportunities to work on exciting data science projects. Feel free to reach out
          if you&apos;d like to discuss a project or just say hello!
        </p>
        <div className="space-y-4">
          <a
            href="mailto:saranmeppayur@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="h-5 w-5" />
            <span className="group-hover:underline">saranmeppayur@gmail.com</span>
          </a>
          <a
            href="tel:+916282999143"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Phone className="h-5 w-5" />
            <span className="group-hover:underline">+91 6282999143</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Coimbatore, India</span>
          </div>
        </div>
      </div>
      <footer className="mt-16 text-sm text-muted-foreground">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Tailwind CSS
          </a>
          . Last updated February 2025.
        </p>
      </footer>
    </section>
  )
}
