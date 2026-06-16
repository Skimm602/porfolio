import Link from "next/link";
import { site } from "@/lib/site";
import PdfButton from "./PdfButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* CTA */}
          <div className="md:col-span-7">
            <p className="label">Get in touch</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] tracking-tightest text-ink sm:text-5xl md:text-6xl">
              Open to architectural practice & collaboration.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-8 inline-block font-display text-xl italic text-ink sm:text-2xl"
            >
              {site.email}
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-5">
            <div>
              <p className="label">Menu</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <Link href="/" className="link-underline font-body text-ink/80 hover:text-ink">Home</Link>
                </li>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-underline font-body text-ink/80 hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Contact</p>
              <ul className="mt-5 space-y-3 font-body text-ink/80">
                <li>
                  <a href={`tel:${site.phoneDial}`} className="link-underline hover:text-ink">{site.phone}</a>
                </li>
                <li>{site.location}</li>
                <li className="pt-2">
                  <PdfButton variant="ghost" label="Portfolio PDF" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-16 overflow-hidden md:mt-24">
          <span className="block select-none font-display text-[18vw] font-black leading-[0.8] tracking-tightest text-ink/[0.06] md:text-[15vw]">
            Jethia Lao
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-8 font-mono text-[10px] uppercase tracking-widest2 text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {site.fullName}</span>
          <span>{site.tagline} · {site.years}</span>
          <span>Cebu · Ormoc, Philippines</span>
        </div>
      </div>
    </footer>
  );
}
