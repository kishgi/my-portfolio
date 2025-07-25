import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { SidebarMobile } from "@/components/sidebar_mob";

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen font-poppins">
      <div className="hidden md:flex ">
        <Sidebar />
      </div>

      <div className="lg:hidden">
        <SidebarMobile />
      </div>
      <main className="lg:ml-80 px-6 lg:py-20 flex justify-center">
        <div
          className="
                    max-w-xl lg:max-w-2xl w-full space-y-32
                    mt-10
                    ml-0 sm:ml-10 lg:ml-0
                    pl-20 sm:pl-6 lg:pl-20
                    pr-4
                  "
        >
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
