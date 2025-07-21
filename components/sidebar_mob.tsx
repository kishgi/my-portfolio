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
    <aside className="fixed top-0 left-0 md:left-3/20  z-50 h-screen w-[60px] flex flex-col justify-between items-center bg-slate-900/80 backdrop-blur-lg px-10 py-6 lg:hidden">

      {/* Rotated Name */}
      <div className="transform -rotate-90 text-4xl font-bold tracking-widest text-slate-300 whitespace-nowrap">
        Kishgintharaam <br/> Sathananthan
      </div>

      {/* Active Section Name */}
      <div className="flex-1 flex items-center justify-center">
        {activeSection && (
          <div className="writing-vertical text-sm font-medium text-slate-200">
            {activeSection.toUpperCase()}
          </div>
        )}
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center gap-5">
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
