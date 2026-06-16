import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected architecture projects by Jethia Lao — civic masterplanning, a public library, and a residential reimagining across the Philippines.",
};

export default function ProjectsPage() {
  return (
    <div className="shell pb-24 pt-32 md:pt-40">
      <Reveal className="border-b border-line pb-10">
        <p className="label">Index · 2023–2026</p>
        <h1 className="mt-5 font-display text-5xl tracking-tightest text-ink sm:text-6xl md:text-7xl">
          Selected Works
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/70">
          Three projects across civic, cultural, and residential scales —
          spanning masterplanning, public architecture, and the reinvention of a
          family home.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} y={36}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
