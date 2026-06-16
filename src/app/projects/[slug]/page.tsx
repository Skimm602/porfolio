import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject, getAdjacent } from "@/lib/projects";
import ParallaxImage from "@/components/ParallaxImage";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — ${project.type}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.summary,
      images: [{ url: project.hero }],
    },
  };
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <dt className="label">{label}</dt>
      <dd className="mt-2 font-body text-ink">{value}</dd>
    </div>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { next } = getAdjacent(slug);

  return (
    <article className="pb-24 pt-28 md:pt-32">
      {/* Header */}
      <header className="shell">
        <Link
          href="/projects"
          className="link-underline font-mono text-[11px] uppercase tracking-widest2 text-muted hover:text-ink"
        >
          ← Back to Work
        </Link>
        <Reveal className="mt-8 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
          <div>
            <p className="label">{project.index} · {project.type}</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.98] tracking-tightest text-ink sm:text-6xl md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-3 font-display text-2xl italic text-muted">{project.subtitle}</p>
          </div>
          <p className="font-mono text-sm text-muted">{project.year}</p>
        </Reveal>
      </header>

      {/* Hero */}
      <div className="mt-8 md:mt-12">
        <ParallaxImage
          src={project.hero}
          alt={`${project.title} — hero render`}
          className="h-[56vh] w-full md:h-[86vh]"
          priority
          sizes="100vw"
          amount={0.1}
        />
      </div>

      {/* Facts + overview */}
      <section className="shell grid gap-12 pt-16 md:grid-cols-12 md:pt-24">
        <Reveal className="md:col-span-4">
          <dl className="space-y-5">
            <Fact label="Type" value={project.type} />
            <Fact label="Area" value={project.area} />
            <Fact label="Location" value={project.location} />
            <Fact label="Year" value={project.year} />
            <Fact label="Workflow" value={project.software} />
          </dl>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.1}>
          <p className="label">Overview</p>
          <div className="mt-5 space-y-6">
            {project.description.map((para, i) => (
              <p
                key={i}
                className={`font-body leading-relaxed text-ink/80 ${
                  i === 0 ? "text-xl text-ink md:text-2xl md:leading-[1.5]" : "text-lg"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Narrative sections */}
      <section className="shell mt-20 space-y-px md:mt-28">
        {project.sections.map((sec, i) => (
          <Reveal key={i} className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:py-14">
            <div className="md:col-span-1">
              <span className="font-mono text-sm text-muted">0{i + 1}</span>
            </div>
            <h2 className="font-display text-3xl leading-tight tracking-tightest text-ink md:col-span-5 md:text-4xl">
              {sec.heading}
            </h2>
            <p className="font-body text-lg leading-relaxed text-ink/75 md:col-span-6">
              {sec.body}
            </p>
          </Reveal>
        ))}
      </section>

      {/* Gallery */}
      <section className="shell mt-20 md:mt-28">
        <Reveal className="mb-8 flex items-end justify-between border-b border-line pb-5">
          <h2 className="font-display text-3xl tracking-tightest text-ink sm:text-4xl">Visualisations</h2>
          <span className="font-mono text-xs text-muted">
            {String(project.gallery.length).padStart(2, "0")} Images
          </span>
        </Reveal>
        <Gallery images={project.gallery} columns={3} />
      </section>

      {/* Drawings */}
      <section className="shell mt-20 md:mt-28">
        <Reveal className="mb-8 flex items-end justify-between border-b border-line pb-5">
          <h2 className="font-display text-3xl tracking-tightest text-ink sm:text-4xl">Drawings & Process</h2>
          <span className="font-mono text-xs text-muted">Plans</span>
        </Reveal>
        <Gallery images={project.drawings} columns={2} />
      </section>

      {/* Next project */}
      <section className="mt-24 border-t border-line md:mt-32">
        <Link href={`/projects/${next.slug}`} className="group block">
          <div className="shell py-14 md:py-20">
            <div className="flex items-center justify-between">
              <p className="label">Next Project</p>
              <span className="font-mono text-xs text-muted">{next.index}</span>
            </div>
            <div className="mt-6 grid items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 className="font-display text-5xl leading-[0.98] tracking-tightest text-ink transition-colors group-hover:text-muted sm:text-6xl md:text-7xl">
                  {next.title}
                </h2>
                <p className="mt-3 font-display text-xl italic text-muted">{next.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-ink">
                  View Project
                  <span className="inline-block h-px w-10 bg-ink transition-all duration-500 ease-editorial group-hover:w-20" />
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-stone md:col-span-5">
                <Image
                  src={next.cover}
                  alt={next.subtitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.1s] ease-editorial group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </article>
  );
}
