"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    year: "2026",
    title: "BoostPro - Email & SMS Marketing Platform",
    madeAt: "VinaSai Inc",
    builtWith: ["Next.js", "Typescript", "Amazon SES", "Twilio"],
    linkText: "boostpro.ca",
    url: "https://boostpro.ca",
  },
  {
    year: "2026",
    title: "Full DevSecOps Pipeline for Netflix Clone",
    madeAt: "Personal Project",
    builtWith: [
      "Jenkins",
      "SonarQube",
      "Trivy",
      "Docker",
      "EKS",
      "ArgoCD",
      "Prometheus",
      "Grafana",
    ],
    linkText: "github.com/kishgi/netflix-clone",
    url: "https://github.com/kishgi/netflix-clone",
  },
  {
    year: "2026",
    title: "Azure DevOps GitOps CI/CD Pipeline",
    madeAt: "Personal Project",
    builtWith: [
      "AKS",
      "ACR",
      "Docker",
      "Kubernetes",
      "ArgoCD"
    ],
    linkText: "",
    url: "",
  },
  {
    year: "2025",
    title: "CI/CD pipeline for Java App using Jenkins",
    madeAt: "Personal Project",
    builtWith: ["Java", "Docker", "Kubernetes", "Jenkins", "SonarQube"],
    linkText: "github.com/kishgi/java-app",
    url: "https://github.com/kishgi/java-app",
  },
];

export default function ProjectsArchive() {
  return (
    <div className="bg-[#273338] text-slate-200 min-h-screen font-poppins px-6 py-12 md:px-24 md:py-20 lg:px-32">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Navigation / Header */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:-translate-x-1 transition-all duration-300 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:translate-x-[-2px]" />
            Kishgi
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            All Projects
          </h1>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/30 text-xs font-semibold uppercase tracking-wider text-muted-foreground py-4">
                <th className="py-4 pr-4">Year</th>
                <th className="py-4 px-4">Project</th>
                <th className="py-4 px-4 hidden md:table-cell">Made at</th>
                <th className="py-4 px-4 hidden lg:table-cell">Built with</th>
                <th className="py-4 pl-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-border/10 hover:bg-card/10 group transition-colors duration-200"
                >
                  {/* Year */}
                  <td className="py-4 pr-4 text-sm text-muted-foreground font-mono align-middle">
                    {project.year}
                  </td>

                  {/* Project Name */}
                  <td className="py-4 px-4 text-sm font-semibold text-foreground align-middle group-hover:text-primary transition-colors">
                    {project.title}
                  </td>

                  {/* Made At */}
                  <td className="py-4 px-4 text-sm text-muted-foreground align-middle hidden md:table-cell">
                    {project.madeAt}
                  </td>

                  {/* Built With Tags */}
                  <td className="py-4 px-4 align-middle hidden lg:table-cell max-w-sm">
                    <div className="flex flex-wrap gap-1.5">
                      {project.builtWith.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-full bg-secondary/30 text-secondary-foreground font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Link */}
                  <td className="py-4 pl-4 text-sm align-middle">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-medium font-mono text-xs"
                      >
                        <span className="hidden sm:inline">{project.linkText}</span>
                        <ExternalLink size={12} className="inline-block" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground/30 font-mono text-xs">—</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
