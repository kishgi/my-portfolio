"use client";

import { motion } from "framer-motion";
import { TechMarquee } from "../tech_marquee";

export function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-4 text-muted-foreground">
          <p>
            Hi there! I’m Sathananthan, a Software Engineering undergraduate and
            DevOps Engineer Intern who enjoys building reliable systems and
            solving complex engineering problems. I’m passionate about{" "}
            <b>cloud infrastructure, automation, DevOps, and DevSecOps</b>,
            where software development meets scalable and secure engineering
            practices.
          </p>

          <p>
            Currently, I work on improving deployment workflows, automating
            operational tasks, and managing production environments using tools
            like <b>Linux, GitHub Actions, NGINX, PM2, Docker, and AWS</b>. I
            enjoy creating efficient CI/CD pipelines and building systems that
            are reliable, maintainable, and ready for real-world workloads.
          </p>

          <p>
            Alongside my professional work, my research focuses on{" "}
            <b>
              explainable machine learning approaches for Kubernetes monitoring
              and pod failure prediction
            </b>
            . I’m particularly interested in cloud-native technologies,
            platform engineering, and using automation and AI to improve system
            reliability.
          </p>

          <p>
            I have worked on various projects involving{" "}
            <b>
              Kubernetes, Docker, Terraform, Ansible, Jenkins, GitHub Actions,
              AWS, and full-stack applications
            </b>
            . These experiences have shaped how I approach engineering — not
            just making applications work, but building solutions that are
            scalable, secure, and easy to operate.
          </p>

          <p>
            Outside of engineering, I enjoy exploring new technologies,
            experimenting with infrastructure setups, and building side
            projects that turn ideas into working products.
          </p>
        </div>

        <div>
          <TechMarquee />
        </div>
      </motion.div>
    </section>
  );
}