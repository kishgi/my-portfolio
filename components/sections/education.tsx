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
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
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
