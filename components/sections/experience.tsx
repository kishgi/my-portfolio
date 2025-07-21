"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Led frontend development for enterprise applications using React, TypeScript, and modern web technologies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with designers to implement pixel-perfect UIs.",
    tags: ["JavaScript", "React", "CSS", "HTML"],
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2019 - 2020",
    description: "Built and maintained client websites, implemented new features, and fixed bugs.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* <h2 className="text-2xl font-bold mb-8">Experience</h2> */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
              <div className="space-y-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 