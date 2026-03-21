"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "DevOps Engineer Intern",
    company: "VinaSai Inc, Toronto, Canada",
    period: "Mar 2026 - Present",
    description:
      "Reduced deployment time by building GitHub Actions CI/CD pipelines for automated build and deployment. Resolved SMTP delivery failures by developing a custom middleware for restricted environments. Improved system reliability through automated backups using shell scripting and cron. Ensured high availability using PM2 and optimized application delivery with NGINX reverse proxy and Cloudflare integration.",
    tags: [
      "GitHub Actions",
      "CI/CD",
      "NGINX",
      "PM2",
      "Cloudflare",
      "Linux",
      "Automation",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-end justify-end border-b border-white border-border pb-2">
          Places Where I Broke and Fixed Things
        </h3>
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
