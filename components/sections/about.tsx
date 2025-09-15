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
        {/* <h2 className=" text-3xl  font-bold text-right">About</h2> */}
        <div className="space-y-4 text-muted-foreground">
          <p>
            I’m an undergraduate in <b>Software Engineering</b> with a strong
            focus on <b>DevOps</b> and <b>DevSecOps</b>. I build scalable,
            reliable, and secure systems by automating deployment pipelines and
            integrating security practices into development.
          </p>
          <p>
            I have worked on projects like a <b>Netflix Clone</b> with full
            CI/CD automation, security scans, and Kubernetes deployment, as well
            as a <b>MERN stack project</b> containerized with Docker and
            deployed using Helm charts. These projects strengthened my expertise
            in{" "}
            <b>
              Docker, Kubernetes, Helm, Ansible, Terraform, Jenkins, GitHub
              Actions
            </b>
            , and <b>AWS</b>.
          </p>
          <p>
            My goal is to leverage DevOps and DevSecOps principles to deliver
            high-quality, secure, and automated solutions for real-world
            applications.
          </p>
        </div>

        <div className="">
          <TechMarquee />
        </div>
      </motion.div>
    </section>
  );
}
