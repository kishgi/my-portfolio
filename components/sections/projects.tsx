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
  github?: string;
  demo?: string;
  img?: string;
};

const projects: Project[] = [
  {
    title: "Full DevSecOps Pipeline for Netflix Clone",
    description:
      "Implemented a complete DevSecOps pipeline with Jenkins, SonarQube, Trivy, OWASP Dependency Check, Docker, Kubernetes (EKS), ArgoCD, and monitoring with Prometheus & Grafana.",
    fullDescription:
      "This project demonstrates a Netflix Clone deployed with a full DevSecOps toolchain. The focus is not on the frontend or backend features of the app, but on integrating automation, security, and monitoring into the software delivery lifecycle. The CI/CD pipeline is powered by Jenkins, with SonarQube for static analysis, Trivy and OWASP Dependency Check for vulnerability scanning, and Docker for containerization. The application is deployed to AWS EKS with GitOps-driven workflows using ArgoCD. Prometheus and Grafana provide real-time monitoring and observability of Jenkins, Kubernetes nodes, and the deployed app.",
    tags: [
      "Jenkins",
      "SonarQube",
      "Trivy",
      "OWASP Dependency Check",
      "Docker",
      "Kubernetes",
      "EKS",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "DevSecOps",
    ],
    github: "https://github.com/kishgi/netflix-clone",
    img: "/images/devsecops.png",
  },
  {
    title: "CI/CD pipeline for Java App using Jenkins",
    description:
      "Java web app with full CI/CD pipeline, containerized and deployed to Kubernetes.",
    fullDescription:
      "A Java-based web application integrated with Jenkins for continuous integration and delivery, SonarQube for static code analysis, and Docker/Kubernetes for scalable container orchestration. The project demonstrates DevOps automation from code commit to deployment using GitHub, Jenkins pipelines, Docker images, and Kubernetes manifests.",
    tags: ["Java", "Docker", "Kubernetes", "Jenkins", "SonarQube", "DevOps"],
    github: "https://github.com/kishgi/java-app",
    img: "/images/java.png",
  },
  {
    title:
      "Azure DevOps GitOps CI/CD Pipeline for a multiple microservices application",
    description:
      "Implemented an end-to-end CI/CD pipeline using Azure DevOps, AKS, and ArgoCD to deploy the Docker Voting App with GitOps practices.",
    fullDescription:
      "Designed and implemented a modern DevOps pipeline by migrating the Docker Voting App sample into a Kubernetes-based CI/CD workflow on Microsoft Azure. The project uses Azure DevOps Pipelines to automatically build and push Docker images to Azure Container Registry (ACR). A self-hosted Azure VM build agent was configured to run Docker builds and pipeline jobs. The application is deployed to Azure Kubernetes Service (AKS) with deployment manifests automatically updated using shell scripts to include new image tags. GitOps practices were implemented using ArgoCD to continuously synchronize the Kubernetes cluster with the repository, enabling near real-time automated deployments. Secure image pulling from ACR was configured using ImagePullSecrets. This project demonstrates practical experience with CI/CD automation, Kubernetes deployment strategies, and GitOps workflows in the Azure ecosystem.",
    tags: [
      "Azure DevOps",
      "Azure Kubernetes Service (AKS)",
      "Azure Container Registry (ACR)",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "GitOps",
      "Shell Scripting",
      "CI/CD",
    ],
    img: "/images/azure.png",
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
        <h3 className="text-xl font-semibold mb-4 flex items-end justify-end border-b border-white border-border pb-2">
          Projects I&apos;ve Worked On
        </h3>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-border bg-card p-6 cursor-pointer"
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
