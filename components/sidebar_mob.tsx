'use client';

import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kishgi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kishgi",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:kishgi1234@gmail.com",
    icon: Mail,
  },
];

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
];

export function SidebarMobile() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed top-10 left-4 z-50 h-[90vh] w-[70px] flex flex-col justify-between items-center bg-[#0f172a] backdrop-blur-lg px-4 pt-32 md:pl-10 rounded-xl shadow-lg lg:hidden">

      
      <div className="transform -rotate-90 text-4xl font-bold tracking-widest text-slate-300 whitespace-nowrap">
        Kishgintharaam <br /> Sathananthan
      </div>

      {activeSection && (
  <div className="relative inline-block" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
    <div className="text-xs font-semibold text-white">
      {activeSection}
    </div>
    <svg
      className="absolute left-full top-0"
      width="20"
      height="64"
      viewBox="0 0 20 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <path
        d="M0 0 C5 10, 15 10, 20 0 S35 -10, 40 0"
        stroke="white"
        strokeWidth="2"
        fill="none"
      >
        <animate
          attributeName="d"
          dur="2s"
          repeatCount="indefinite"
          values="
            M0 0 C5 10, 15 10, 20 0 S35 -10, 40 0;
            M0 0 C5 0, 15 20, 20 0 S35 10, 40 0;
            M0 0 C5 10, 15 10, 20 0 S35 -10, 40 0
          "
        />
      </path>
    </svg>
  </div>
)}





      
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <link.icon className="h-5 w-5" />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
