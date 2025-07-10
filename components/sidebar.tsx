"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

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
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-screen w-96 px-14 py-20 bg-slate-900/80 backdrop-blur-lg z-20 flex-col justify-between">
      {/* Top: Centered content */}
      <div className="flex flex-col items-start justify-center flex-1">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight leading-tight">Kishgintharaam Sathananthan</h1>
        <h2 className="text-2xl font-semibold text-slate-400 mb-6">Software Engineering Undergraduate</h2>
        <p className="mb-10 text-slate-400 max-w-xs text-lg leading-relaxed">
          Expertising in <b>Full Stack Development</b>, <b>DevOps</b> and <b>Cloud Engineering</b>, with a passion for building scalable and efficient systems.
        </p>
        <nav className="w-full space-y-3 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-slate-300 hover:text-white transition-colors px-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Bottom: Social icons */}
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
