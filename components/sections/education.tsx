"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Jaffna Hindu College",
    company: "O/Ls and A/Ls",
    period: "2013 - 2022",
    description: "",
    tags: [],
  },
  {
    title: "Bachelor of Computing (Hons) in Software Engineering",
    company: "University of Sri Jayewardenepura, Sri Lanka",
    period: "2023 - Present",
    description:
      "Learnt software engineering principles, programming languages, and development methodologies. Engaged in projects that enhanced my coding skills and understanding of software architecture.",
    tags: ["Software Development", "DSA", "Project Management"],
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 border-b border-border pb-2">
          Education
        </h3>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 border border-transparent hover:bg-card/30 hover:shadow-lg p-6 rounded-xl transition-all duration-300"
            >
              {/* Date column */}
              <div className="w-full sm:w-32 shrink-0 text-xs font-bold tracking-wider text-muted-foreground uppercase pt-1">
                {exp.period}
              </div>

              {/* Content column */}
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {exp.title} • {exp.company}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground font-medium"
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
