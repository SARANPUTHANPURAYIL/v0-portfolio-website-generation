import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "MatLab", "SQL"],
  },
  {
    title: "Machine Learning & Data Science",
    skills: ["Scikit-Learn", "SciPy"],
  },
  {
    title: "Data Manipulation & Analysis",
    skills: ["NumPy", "Pandas"],
  },
  {
    title: "Data Visualization",
    skills: ["Seaborn", "Plotly"],
  },
  {
    title: "Certifications",
    skills: ["MATLAB Onramp"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Skills</h2>
      </div>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-foreground mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
