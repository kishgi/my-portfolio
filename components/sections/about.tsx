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
        {/* <h2 className=" text-xl sm:text-2xl font-bold mb-8 text-right lg:hidden">
          About
        </h2> */}
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm an aspiring Software engineering undergraduate with a strong
            foundation in full-stack web development and expertising in{" "}
            <b>DevOps and DevSecOps </b> practices. My passion lies in building
            robust, scalable applications and automating deployment processes to
            ensure reliability and security.
          </p>
          <p>
            My journey started with frontend development using <b> MERN </b>{" "}
            stack and then <b> Next.js and Tailwind CSS </b>, where I honed my
            skills in creating responsive and user-friendly interfaces. As I
            progressed, I delved into backend technologies like <b> Node.js </b>{" "}
            and <b> Express </b>, gaining a solid understanding of server-side
            development and RESTful APIs.
          </p>
          <p>
            But my interests didn't stop there. I ventured into the world of
            DevOps, mastering tools like <b> Docker </b> and <b> Kubernetes </b>{" "}
            to containerize applications and orchestrate their deployment. I
            also embraced DevSecOps principles, integrating security practices
            into the development lifecycle to ensure that applications are not
            only functional but also secure.
          </p>
        </div>

        <div className="">
          <TechMarquee />
        </div>
      </motion.div>
    </section>
  );
}
