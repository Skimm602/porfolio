import type { Metadata } from "next";
import Image from "next/image";
import { site, aboutData } from "@/lib/site";
import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";
import PdfButton from "@/components/PdfButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jethia Victoria Lao — BS Architecture graduate of Cebu Institute of Technology – University, her education, software skills, and approach to design.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      {/* Header */}
      <header className="shell">
        <Reveal>
          <p className="label">About</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tightest text-ink sm:text-6xl md:text-7xl">
            Designing for how people gather, learn & live.
          </h1>
        </Reveal>
      </header>

      {/* Portrait + bio */}
      <section className="shell mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone grayscale">
            <Image
              src="/images/profile.jpg"
              alt={`Portrait of ${site.fullName}`}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
            <span>Born · {aboutData.born}</span>
            <span className="text-right">{site.locationShort}</span>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.1}>
          <p className="label">Profile</p>
          <p className="mt-5 font-display text-2xl leading-[1.35] text-ink text-pretty md:text-3xl md:leading-[1.3]">
            {aboutData.intro}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <p className="label">Languages</p>
              <ul className="mt-4 space-y-2 font-body text-ink/80">
                {aboutData.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Interests</p>
              <ul className="mt-4 space-y-2 font-body text-ink/80">
                {aboutData.interests.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <PdfButton variant="outline" label="Download Full CV" />
          </div>
        </Reveal>
      </section>

      {/* Education */}
      <section className="shell mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Education</p>
            <h2 className="mt-4 font-display text-4xl tracking-tightest text-ink">Academic Path</h2>
          </div>
          <ol className="md:col-span-8">
            {aboutData.education.map((ed, i) => (
              <li
                key={i}
                className="grid gap-2 border-t border-line py-7 md:grid-cols-12 md:items-baseline"
              >
                <span className="font-mono text-sm text-muted md:col-span-2">{ed.years}</span>
                <div className="md:col-span-10">
                  <p className="font-display text-2xl tracking-tight text-ink">{ed.level}</p>
                  <p className="mt-1 font-body text-ink/75">{ed.school}</p>
                  <p className="font-body text-sm text-muted">{ed.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Software skills */}
      <section className="shell mt-24 md:mt-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Toolset</p>
            <h2 className="mt-4 font-display text-4xl tracking-tightest text-ink">Software Skills</h2>
            <p className="mt-5 max-w-sm font-body text-ink/70">
              A design-to-render workflow built around Revit, real-time rendering,
              and post-production.
            </p>
          </div>
          <div className="md:col-span-8">
            {aboutData.software.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
