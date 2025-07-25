"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

// Type definition for better safety
type Project = {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  github: string;
  demo?: string;
  img?: string;
};

const projects: Project[] = [
  {
    title: "Cloud Native E-commerce Platform",
    description:
      "A full-stack e-commerce platform with DevOps tooling using React, Node.js, Redis, Docker, Kubernetes, and GitHub Actions.",
    fullDescription:
      "A full-stack e-commerce web application deployed with a complete DevOps toolchain. Built with React (Vite) and Tailwind CSS on the frontend, and Node.js + Express backend. Integrated Redis for caching, NGINX for reverse proxying, and Dockerized all components. Orchestrated with Kubernetes using Kustomize for environment-specific customization and Helm-readiness for future scalability. CI/CD implemented via GitHub Actions with Kubernetes Ingress routing for production-grade deployments.",
    tags: [
      "MERN",
      "Tailwind CSS",
      "Redis",
      "NGINX",
      "Docker",
      "Kubernetes",
      "Kustomize",
    ],
    github: "https://github.com/kishgi/chocolate-bravo",
    img: "/images/MERN.png",
  },
  {
    title: "CI/CD Enabled Java Application on Kubernetes",
    description:
      "Java web app with full CI/CD pipeline, containerized and deployed to Kubernetes.",
    fullDescription:
      "A Java-based web application integrated with Jenkins for continuous integration and delivery, SonarQube for static code analysis, and Docker/Kubernetes for scalable container orchestration. The project demonstrates DevOps automation from code commit to deployment using GitHub, Jenkins pipelines, Docker images, and Kubernetes manifests.",
    tags: ["Java", "Docker", "Kubernetes", "Jenkins", "SonarQube", "DevOps"],
    github: "https://github.com/kishgi/java-app",
    img: "/images/java.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek, animated portfolio built with Next.js and Tailwind CSS.",
    fullDescription:
      "A modern portfolio website showcasing projects and skills, built with Next.js, Tailwind CSS, TypeScript, and Framer Motion for smooth animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Icons at the bottom right */}
                <div className="flex justify-end gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-lg p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>

            {selectedProject.img && (
              <div className="w-full mb-4">
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto max-h-[400px]"
                />
              </div>
            )}

            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              {selectedProject.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
