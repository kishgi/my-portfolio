"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans relative">
      {/* Spotlight cursor effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
        }}
      />



      <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main className="pt-12 lg:w-[58%] lg:max-w-4xl lg:py-24">
            <div className="space-y-24">
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
