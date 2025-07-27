"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  { name: "EDUCATION", href: "#education" },
  { name: "PROJECTS", href: "#projects" },
];

export function Sidebar() {
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
    <aside className="hidden lg:flex fixed top-1/2 left-2/5 -translate-x-full -translate-y-1/2 w-96 py-10 bg-[#0f172a] backdrop-blur-lg z-50 flex-col justify-between h-full">
      {/* Top */}
      <div className="flex flex-col items-start flex-1 mt-14">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight leading-tight">
          Kishgintharaam Sathananthan
        </h1>
        <h2 className="text-sm font-semibold text-slate-400 mb-6">
          Software Engineering Undergraduate
        </h2>
        <p className="mb-10 text-slate-400 max-w-xs text-md leading-relaxed">
          Expertising in <b>DevOps</b> and <b>Cloud Engineering</b>, with a
          passion for building scalable and efficient systems.
        </p>

        {/* Navigation */}
        <nav className="w-full mt-8 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
          relative flex items-center gap-3 text-sm font-medium px-1 transition-all duration-300
          ${isActive ? "text-white" : "text-slate-300 hover:text-white"}
          before:block before:h-[2px] before:bg-white before:transition-all before:duration-300
          before:rounded-full
          ${isActive ? "before:w-16" : "before:w-4"}
        `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social */}
      <div className="flex items-center gap-7 pb-2">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <link.icon className="h-7 w-7" />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
