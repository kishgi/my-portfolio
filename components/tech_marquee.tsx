"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiJunit5,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiAnsible,
  SiTerraform,
  SiNginx,
  SiCloudflare,
  SiGit,
  SiPycharm,
  SiPostman,
  SiMongodb,
  SiRedis,
  SiReact,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTailwindcss,
  SiFramer,
  SiUbuntu,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const techStack = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "SQL", icon: SiC },
  { name: "Shell Scripting", icon: SiGnubash },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Flask", icon: SiFlask },
  { name: "JUnit", icon: SiJunit5 },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Helm", icon: SiHelm },
  { name: "AWS", icon: FaAws },
  { name: "Jenkins", icon: SiJenkins },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "GitLab CI/CD", icon: SiGitlab },
  { name: "Ansible", icon: SiAnsible },
  { name: "Terraform", icon: SiTerraform },
  { name: "NGINX", icon: SiNginx },
  { name: "Cloudflare Tunnel", icon: SiCloudflare },
  { name: "Git", icon: SiGit },
  { name: "PyCharm", icon: SiPycharm },
  { name: "Postman", icon: SiPostman },
  { name: "MongoDB Compass", icon: SiMongodb },
  { name: "RedisInsight", icon: SiRedis },
  { name: "React", icon: SiReact },
  { name: "pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "framer-motion", icon: SiFramer },
  { name: "Ubuntu", icon: SiUbuntu },
];

// Split the tech stack
const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

const TechCard = ({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) => (
  <div
    className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-lg border w-max",
      "transition-colors"
    )}
  >
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
    <span className="text-xs sm:text-sm whitespace-nowrap text-muted-foreground">
      {name}
    </span>
  </div>
);

export function TechMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-14">
      <Marquee pauseOnHover className="[--duration:100s]">
        {firstRow.map((tech, i) => (
          <TechCard key={tech.name + i} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:100s]">
        {secondRow.map((tech, i) => (
          <TechCard key={tech.name + i} {...tech} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#0f172a] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#0f172a] to-transparent"></div>
    </div>
  );
}
