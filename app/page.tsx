import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-slate-200 font-sans min-h-screen">
      <Sidebar />
      <main className="ml-[344px] px-6 py-20 flex justify-center">
        <div className="max-w-xl w-full space-y-32 ml-36">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}


