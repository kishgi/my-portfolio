"use client";

import { motion } from "framer-motion";

// Type definition for better safety
type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "BoostPro",
    description:
      "A full-stack email and SMS marketing application built at VinaSai Inc. using Next.js, Amazon SES, and Twilio API.",
    tags: ["Next.js", "Typescript", "Amazon SES"],
    demo: "https://boostpro.ca",
  },
  {
    title: "Match My Stuff",
    description:
      "An AI-integrated real-time lost and found application featuring an interactive map. Built for a 24-hour Buildathon where we won 3rd place on our track.",
    tags: ["Next.js", "Typescript", "Firebase"],
    demo: "https://matchmystuff.vercel.app/",
  },
  {
    title: "Full DevSecOps Pipeline for Netflix Clone",
    description:
      "Implemented a complete DevSecOps pipeline with Jenkins, SonarQube, Trivy, OWASP Dependency Check, Docker, Kubernetes (EKS), ArgoCD, and monitoring with Prometheus & Grafana.",
    tags: ["EKS", "ArgoCD", "Prometheus", "Grafana"],
    github: "https://github.com/kishgi/netflix-clone",
  },
  {
    title: "CI/CD pipeline for Java App using Jenkins",
    description:
      "Java web app with full CI/CD pipeline, containerized and deployed to Kubernetes.",
    tags: ["Java", "Docker", "Kubernetes", "Jenkins", "SonarQube", "DevOps"],
    github: "https://github.com/kishgi/java-app",
  },
  {
    title:
      "Azure DevOps GitOps CI/CD Pipeline for a multiple microservices application",
    description:
      "Implemented an end-to-end CI/CD pipeline using Azure DevOps, AKS, and ArgoCD to deploy the Docker Voting App with GitOps practices.",
    tags: [
      "Azure Kubernetes Service (AKS)",
      "Azure Container Registry (ACR)",
      "Docker",
      "Kubernetes",
      "ArgoCD",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const targetUrl = project.demo || project.github;
            const motionProps = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.1 },
              className: `group relative flex flex-col gap-3 border border-transparent hover:bg-white/[0.06] hover:backdrop-blur-[2px] p-6 rounded-md transition-all duration-300 ${
                targetUrl ? "cursor-pointer" : ""
              }`,
            };

            const content = (
              <>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {project.title}
                    {targetUrl && (
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            if (targetUrl) {
              return (
                <motion.a
                  key={index}
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...motionProps}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div key={index} {...motionProps}>
                {content}
              </motion.div>
            );
          })}
        </div>

        {/* View Full Project Archive */}
        <div className="mt-8">
          <a
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
          >
            View Full Project Archive
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

