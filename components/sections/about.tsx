"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiC, SiHtml5, SiCss3, SiNextdotjs,
  SiNodedotjs, SiExpress, SiFlask, SiJunit5, SiDocker, SiKubernetes, SiHelm,
  SiJenkins, SiGithubactions, SiGitlab, SiAnsible, SiTerraform, SiNginx,
  SiCloudflare, SiGit, SiPycharm, SiPostman, SiMongodb, SiRedis, SiReact,
  SiPandas, SiNumpy, SiScikitlearn, SiTailwindcss, SiFramer, SiUbuntu,
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

function ScrollingRow({ items, speed = 30 }: { items: typeof techStack; speed?: number }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  }, [controls, speed]);

  return (
    <div
      className="relative overflow-hidden w-full py-2"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: ["0%", "-100%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          },
        })
      }
    >
      <motion.div className="flex w-max gap-4" animate={controls}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4 pr-10">
            {items.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2 px-4 py-2 rounded bg-secondary/50 hover:bg-secondary transition-all duration-300"
              >
                <tech.icon className="w-5 h-5 text-primary" />
                <span className="whitespace-nowrap text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function About() {
  // Split items into two rows
  const half = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, half);
  const row2 = techStack.slice(half);

  return (
    <section id="about" className="scroll-mt-16 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* <h2 className="text-2xl font-bold mb-8">About</h2> */}
        <div className="space-y-4 text-muted-foreground">
        <p>
            I'm an aspiring Software engineering undergraduate with a strong foundation in full-stack web
            development and a passion for automation, scalability, and cloud-native
            solutions. I enjoy bridging the gap between development and operations by
            building robust CI/CD pipelines and containerized environments.
          </p>
          <p>
            My journey started with frontend development using React and TypeScript, and
            has grown into building full-stack applications backed by Docker, Kubernetes,
            and GitHub Actions. I’ve worked on deploying scalable applications using
            cloud-native tools and open-source technologies, always striving for
            production-readiness.
          </p>
          <p>
            I'm continuously learning and experimenting—whether it's exploring AWS
            services, managing Kubernetes clusters, or improving deployment pipelines. I
            also enjoy creating tech content and working on hands-on projects that
            showcase my growing DevOps skill set.
          </p>
        </div>

        <div className="mt-12">
          {/* <h3 className="text-xl font-semibold mb-4">Tech Stack</h3> */}
          <ScrollingRow items={row1} speed={90} />
          <ScrollingRow items={row2} speed={90} />
        </div>
      </motion.div>
    </section>
  );
}
