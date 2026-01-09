import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Electricity Bill Payment System",
    description:
      "A comprehensive system for managing and processing electricity bill payments. Built with a focus on user-friendly interface and efficient database management.",
    technologies: ["MySQL", "HTML", "CSS"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
      </div>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group relative border-transparent bg-transparent transition-all hover:border-border hover:bg-card/50 cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
