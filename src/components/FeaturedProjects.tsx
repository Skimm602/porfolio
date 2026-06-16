import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Reveal from "./Reveal";

export default function FeaturedProjects() {
  return (
    <section id="work" className="shell py-20 md:py-32">
      <Reveal className="flex items-end justify-between border-b border-line pb-6">
        <div>
          <p className="label">Selected Works</p>
          <h2 className="mt-4 font-display text-4xl tracking-tightest text-ink sm:text-5xl md:text-6xl">
            Projects
          </h2>
        </div>
        <span className="hidden font-mono text-sm text-muted sm:block">
          {String(projects.length).padStart(2, "0")} — Index
        </span>
      </Reveal>

      <div className="mt-12 flex flex-col gap-20 md:mt-20 md:gap-32">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={project.slug} y={40}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-stone md:col-span-8 ${
                    flip ? "md:order-2 md:col-start-5" : "md:order-1"
                  }`}
                >
                  <Image
                    src={project.cover}
                    alt={project.subtitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 font-mono text-xs uppercase tracking-widest2 text-paper mix-blend-difference">
                    {project.index}
                  </span>
                </div>

                <div className={`md:col-span-4 ${flip ? "md:order-1 md:text-right" : "md:order-2"}`}>
                  <p className="label">{project.type} · {project.year}</p>
                  <h3 className="mt-4 font-display text-4xl leading-[1.02] tracking-tightest text-ink sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-display text-xl italic text-muted">{project.subtitle}</p>
                  <p className={`mt-5 max-w-md font-body leading-relaxed text-ink/70 ${flip ? "md:ml-auto" : ""}`}>
                    {project.summary}
                  </p>
                  <span className={`mt-7 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-ink ${flip ? "md:flex-row-reverse" : ""}`}>
                    View Project
                    <span className="inline-block h-px w-10 bg-ink transition-all duration-500 ease-editorial group-hover:w-16" />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
