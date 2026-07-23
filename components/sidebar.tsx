"use client";

import { Github, Linkedin, Instagram, Mail, Gitlab } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kishgi",
    icon: Github,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/kishgi",
    icon: Gitlab,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kishgi",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/kishgintharaam",
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
      { threshold: 0.6 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:max-h-screen lg:w-[38%] lg:max-w-[380px] lg:py-24 py-12 lg:h-screen bg-transparent">
      {/* Top */}
      <div className="flex flex-col items-start flex-1">
        <h1 className="text-4xl xl:text-5xl font-extrabold mb-2 tracking-tight leading-tight">
          Kishgintharaam Sathananthan
        </h1>
        <h2 className="text-sm font-semibold text-muted-foreground mb-6">
          DevOps Engineer
        </h2>
        <p className="mb-10 text-muted-foreground max-w-xs text-md leading-relaxed">
          A random who loves building and deploying scalable and efficient
          systems without any downtime.
        </p>

        {/* Navigation */}
        <nav className="hidden lg:block w-full mt-8 space-y-4 font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
          group relative flex items-center gap-3 text-xs font-bold tracking-wider px-1 transition-all duration-300
          ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
        `}
              >
                <span
                  className={`
                  h-[1px] transition-all duration-300 rounded-full
                  ${isActive ? "w-16 bg-foreground" : "w-8 bg-muted-foreground/50 group-hover:w-16 group-hover:bg-foreground"}
                `}
                />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Social */}
      <div className="flex items-center gap-7 pb-2 mt-8 lg:mt-0">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <link.icon className="h-7 w-7" />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
