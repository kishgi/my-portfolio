"use client";

import { motion } from "framer-motion";
import { TechMarquee } from "../tech_marquee";





export function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* <h2 className="text-2xl font-bold mb-8">About</h2> */}
        <div className="space-y-4 text-muted-foreground">
        <p>
            I'm an aspiring Software engineering undergraduate with a strong foundation in full-stack web
            development and a passion for automation, scalability, and cloud-native
            solutions. I enjoy bridging the gap between development and operations by
            building robust CI/CD pipelines and containerized environments.
          </p>
          <p>
            My journey started with frontend development using React and TypeScript, and
            has grown into building full-stack applications backed by Docker, Kubernetes,
            and GitHub Actions. I’ve worked on deploying scalable applications using
            cloud-native tools and open-source technologies, always striving for
            production-readiness.
          </p>
          <p>
            I'm continuously learning and experimenting—whether it's exploring AWS
            services, managing Kubernetes clusters, or improving deployment pipelines. I
            also enjoy creating tech content and working on hands-on projects that
            showcase my growing DevOps skill set.
          </p>
        </div>

        <div className="">
          <TechMarquee />
        </div>
      </motion.div>
    </section>
  );
}
