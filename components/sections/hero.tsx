"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="text-primary">Your Name</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          Full Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          I build modern web applications with a focus on user experience and
          performance. Currently working with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Projects
            <ArrowDown size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          Scroll Down
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
} 