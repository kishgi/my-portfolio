"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">About</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm a passionate frontend developer with a keen eye for design and a
            love for creating seamless user experiences. With several years of
            experience in web development, I specialize in building modern,
            responsive, and performant web applications using React, TypeScript,
            and other cutting-edge technologies.
          </p>
          <p>
            My journey in web development started with a curiosity about how
            things work on the internet, which led me to dive deep into the world
            of frontend development. I enjoy the perfect blend of creativity and
            technical problem-solving that this field offers.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge through
            technical writing and mentoring.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <tech.icon className="w-6 h-6 text-primary" />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 