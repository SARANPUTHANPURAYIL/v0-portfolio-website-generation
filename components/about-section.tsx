export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed">
        <p className="mb-4">
          I&apos;m an aspiring <span className="text-foreground font-medium">data scientist</span> with a passion for
          collecting, analyzing, and visualizing data. Currently pursuing my
          <span className="text-foreground font-medium"> Integrated MSc in Data Science</span> at Amrita Vishwa
          Vidyapeetham, Coimbatore.
        </p>
        <p className="mb-4">
          My journey in data science has equipped me with strong skills in{" "}
          <span className="text-foreground font-medium">machine learning</span>,{" "}
          <span className="text-foreground font-medium">statistical analysis</span>, and{" "}
          <span className="text-foreground font-medium">data visualization</span>. I love turning raw data into
          meaningful insights that drive decision-making.
        </p>
        <p>
          Beyond academics, I&apos;ve been actively involved in organizing tech events like Ideathon &apos;24 and have
          participated in cultural activities at the Inter University Youth Festival, showcasing my ability to
          collaborate and lead in diverse settings.
        </p>
      </div>
    </section>
  )
}
