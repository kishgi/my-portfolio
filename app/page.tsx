import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-slate-200 font-sans min-h-screen w-full flex justify-center">
      <div className="flex w-full max-w-7xl">
      <Sidebar />
      <main className="px-16 py-20 flex-1">
        <div className="max-w-3xl mx-auto space-y-32">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      </div>
    </div>
  );
}

