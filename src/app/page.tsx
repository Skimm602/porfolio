import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ParallaxImage from "@/components/ParallaxImage";
import FeaturedProjects from "@/components/FeaturedProjects";
import Reveal from "@/components/Reveal";
import PdfButton from "@/components/PdfButton";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        items={["Architecture", "Urban Planning", "Civic Design", "Sustainability", "Interiors", "Landscape"]}
      />

      {/* Full-bleed featured image */}
      <section className="relative mt-2">
        <ParallaxImage
          src="/images/government-centre/hero.jpg"
          alt="Aerial masterplan render of the proposed Ormoc City Government Centre"
          className="h-[60vh] w-full md:h-[88vh]"
          priority
          sizes="100vw"
          amount={0.1}
        />
        <div className="shell pointer-events-none absolute inset-x-0 bottom-0 pb-6">
          <div className="flex items-end justify-between text-paper mix-blend-difference">
            <p className="font-mono text-[10px] uppercase tracking-widest2">
              Featured · Thesis 2025–2026
            </p>
            <p className="max-w-xs text-right font-display text-lg italic md:text-xl">
              Lamdag — a civic district for Ormoc City
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="shell py-24 md:py-36">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <p className="label md:col-span-3">Approach</p>
          <div className="md:col-span-9">
            <p className="font-display text-3xl leading-[1.15] tracking-tight text-ink text-balance sm:text-4xl md:text-5xl md:leading-[1.12]">
              Architecture rooted in place, climate, and the rhythms of everyday
              life — from a 48-hectare government centre to a single reimagined
              family home.
            </p>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink/70">
              Trained at {site.university}.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/about"
                className="link-underline font-mono text-[11px] uppercase tracking-widest2 text-ink"
              >
                More about me
              </Link>
              <PdfButton variant="outline" />
            </div>
          </div>
        </Reveal>
      </section>

      <FeaturedProjects />

      {/* About teaser */}
      <section className="border-t border-line bg-white/40">
        <div className="shell grid gap-10 py-20 md:grid-cols-12 md:items-center md:py-28">
          <Reveal className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden bg-stone grayscale">
              <Image
                src="/images/profile.png"
                alt={`Portrait of ${site.fullName}`}
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="label">The Architect</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-5xl">
              Jethia Victoria Lao
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink/75">
              {site.shortBio} I'm seeking to grow through real architectural
              practice — learning from experienced colleagues and building strong
              practical, field-based skills.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-ink"
            >
              Read full profile
              <span className="inline-block h-px w-10 bg-ink" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
