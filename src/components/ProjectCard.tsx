import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image
          src={project.cover}
          alt={project.subtitle}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 font-mono text-xs uppercase tracking-widest2 text-paper mix-blend-difference">
          {project.index}
        </span>
        <span className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-between font-mono text-[10px] uppercase tracking-widest2 text-paper opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
          View Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
        <div>
          <h3 className="font-display text-2xl tracking-tightest text-ink">{project.title}</h3>
          <p className="mt-1 font-body text-sm text-muted">{project.subtitle}</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">{project.year}</span>
      </div>
    </Link>
  );
}
