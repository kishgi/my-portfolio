"use client";

import { motion } from "framer-motion";

const experience = {
  company: "VinaSai Inc",
  location: "Ontario, Canada",
  website: "https://vinasai.ca",
  positions: [
    {
      title: "Associate DevOps Engineer",
      period: "Nov 2026 - Present",
      type: "Full-time",
      current: true,
      description: [
        "Managed AWS infrastructure and production environments, improving resource utilization through cloud monitoring, cost optimization, and PostgreSQL and Ubuntu server administration.",
        "Improved deployment reliability by maintaining GitHub Actions CI/CD pipelines, automating backups and maintenance with Python, Shell scripting, and cron, and managing PM2, NGINX, SSL, and domain routing.",
        "Contributed to the development of the company's Intra platform by building full-stack features, integrating frontend interfaces, backend APIs, and PostgreSQL using React, Next.js, NestJS, and Node.js.",
      ],
    },
    {
      title: "DevOps Engineer Intern",
      period: "Mar 2026 - Nov 2026",
      type: "Internship",
      current: false,
      description: [
        "Resolved a critical PostgreSQL disk exhaustion incident affecting production infrastructure, recovering 975GB of storage and implementing automated cleanup to prevent recurring issues.",
        "Contributed to the company's new Intra platform by developing frontend interfaces and multi-service backend APIs, integrating PostgreSQL, and deploying the application on company VPS infrastructure using PM2 and NGINX.",
      ],
    },
  ],
};

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      {/* Mobile Section Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
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
        {/* Company */}
        <motion.a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 block"
        >
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {experience.company}
            <span className="text-sm text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {experience.location}
          </p>

          <p className="mt-1 text-xs font-mono text-muted-foreground">
            Mar 2026 - Present
          </p>
        </motion.a>

        {/* Career Timeline */}
        <div className="relative ml-1">
          {experience.positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className={`relative grid grid-cols-[20px_minmax(0,1fr)] gap-4 sm:gap-6 ${
                index !== experience.positions.length - 1 ? "pb-10" : ""
              }`}
            >
              {/* Timeline */}
              <div className="relative flex justify-center">
                {index !== experience.positions.length - 1 && (
                  <div className="absolute top-3 h-full w-px bg-border" />
                )}

                <span
                  className={`relative z-10 mt-1.5 h-3 w-3 rounded-full border-2 ${
                    position.current
                      ? "border-primary bg-primary shadow-[0_0_10px_rgba(59,130,246,0.35)]"
                      : "border-muted-foreground/50 bg-background"
                  }`}
                />
              </div>

              {/* Position Details */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h4 className="text-base font-semibold text-foreground">
                    {position.title}
                  </h4>

                  {position.current && (
                    <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs font-mono text-muted-foreground">
                  {position.period}
                  <span className="mx-2">·</span>
                  {position.type}
                </p>

                {/* STAR-based Experience */}
                <ul className="mt-4 space-y-3">
                  {position.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume */}
        <div className="mt-4 lg:ml-6">
          <a
            href="/Kishgintharaam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            View My Résumé
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
