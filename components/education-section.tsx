import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    period: "2022 — Present",
    degree: "Integrated MSc Data Science",
    institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
    description:
      "Currently in 3rd year with CGPA of 5.72. Coursework includes Machine Learning, Data Visualization, Statistics, and Database Management Systems.",
  },
  {
    period: "2020 — 2022",
    degree: "Higher Secondary Education",
    institution: "Perambra Higher Secondary School",
    description: "Completed with 80% marks. Subjects: Physics, Chemistry, Mathematics, and Computer Science.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Education</h2>
      </div>
      <div className="space-y-8">
        {education.map((item, index) => (
          <Card
            key={index}
            className="group relative border-transparent bg-transparent transition-all hover:border-border hover:bg-card/50"
          >
            <CardContent className="p-4">
              <div className="grid gap-4 sm:grid-cols-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {item.period}
                </p>
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-primary/80 mt-1">{item.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
