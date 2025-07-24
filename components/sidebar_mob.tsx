"use client";

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
    href: "https://instagram.com/kishgi.yml",
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
    <aside className="fixed top-5 left-4 z-50 h-screen w-[60px] flex flex-col items-center justify-evenly bg-[#0f172a] backdrop-blur-lg px-8 overflow-hidden rounded-xl shadow-lg lg:hidden">
      <div className="transform -rotate-90 text-3xl font-bold tracking-widest text-slate-300 whitespace-nowrap">
        Kishgintharaam <br /> Sathananthan
      </div>

      <div className="flex flex-col items-center gap-4 pb-4">
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
