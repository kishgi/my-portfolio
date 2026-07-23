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
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground font-mono">
          Experience
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.a
              key={index}
              href="https://vinasai.ca"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 border border-transparent lg:hover:bg-white/[0.06] lg:hover:backdrop-blur-[2px] p-0 lg:p-6 rounded-md transition-all duration-300 cursor-pointer block"
            >
              {/* Date column */}
              <div className="w-full sm:w-32 shrink-0 text-xs font-semibold tracking-wider text-muted-foreground uppercase pt-1 font-mono">
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
                      className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground font-mono font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View Full Résumé */}
        <div className="mt-8 lg:px-6">
          <a
            href="/Kishgintharaam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
          >
            View My Résumé
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
