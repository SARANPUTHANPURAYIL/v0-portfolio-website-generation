"use client"

import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0% -50% 0%" },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block fixed top-0 left-0 h-screen w-1/2 max-w-xl pointer-events-none">
      <div className="flex flex-col gap-2 pt-[320px] pl-12 xl:pl-24 pointer-events-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`group flex items-center gap-4 py-2 transition-all duration-300 ${
              activeSection === item.href.slice(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span
              className={`h-px transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "w-16 bg-foreground"
                  : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              }`}
            />
            <span className="text-xs font-semibold uppercase tracking-widest">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
