import type { Metadata } from "next";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import PdfButton from "@/components/PdfButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jethia Lao for architectural practice, collaboration, or opportunities. Based in Ormoc City, Philippines.",
};

const details = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phoneDial}` },
  { label: "Location", value: site.location, href: null },
];

export default function ContactPage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      <header className="shell">
        <Reveal>
          <p className="label">Contact</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.98] tracking-tightest text-ink sm:text-6xl md:text-8xl">
            Let's work together.
          </h1>
          <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-ink/70">
            I'm open to architectural practice, internships, and collaboration.
            Send a note below or reach me directly — I'll get back to you soon.
          </p>
        </Reveal>
      </header>

      <section className="shell mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
        {/* Details */}
        <Reveal className="md:col-span-5">
          <dl className="space-y-px">
            {details.map((d) => (
              <div key={d.label} className="border-t border-line py-6">
                <dt className="label">{d.label}</dt>
                <dd className="mt-2 font-display text-xl text-ink md:text-2xl">
                  {d.href ? (
                    <a href={d.href} className="link-underline">{d.value}</a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
            <div className="border-t border-line py-6">
              <dt className="label">Availability</dt>
              <dd className="mt-2 font-body text-ink/80">
                Graduating 2026 · Cebu / Ormoc, Philippines · open to relocation
              </dd>
            </div>
          </dl>
          <div className="mt-8">
            <PdfButton variant="solid" label="Download Portfolio PDF" />
          </div>
        </Reveal>

        {/* Form */}
        <Reveal className="md:col-span-7" delay={0.1}>
          <p className="label mb-8">Send a message</p>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
