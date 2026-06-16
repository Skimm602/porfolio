"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change + lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
          scrolled || open
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-baseline gap-2"
            aria-label="Jethia Lao — home"
          >
            <span className="font-display text-xl font-bold tracking-tightest text-ink md:text-2xl">
              Jethia Lao
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest2 text-muted sm:inline">
              Architecture
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-9">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`link-underline font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
                      isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={site.pdf}
              download
              className="group inline-flex items-center gap-2 border border-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest2 text-ink transition-colors duration-300 ease-editorial hover:bg-ink hover:text-paper"
            >
              CV / PDF
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">
                <path d="M12 4v12M7 11l5 5 5-5" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-7">
              <span
                className={`absolute left-0 block h-px w-7 bg-ink transition-all duration-300 ease-editorial ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-px w-7 bg-ink transition-all duration-300 ease-editorial ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-paper md:hidden"
          >
            <div className="shell flex h-full flex-col justify-between pb-12 pt-28">
              <ul className="flex flex-col gap-2">
                {[{ label: "Home", href: "/" }, ...site.nav].map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: reduce ? 0 : "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.06 * i + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-baseline gap-4 py-2 font-display text-5xl tracking-tightest text-ink"
                      >
                        <span className="font-mono text-xs text-muted">0{i + 1}</span>
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>

              <div className="space-y-6">
                <a
                  href={site.pdf}
                  download
                  className="inline-flex w-full items-center justify-between border border-ink px-5 py-4 font-mono text-[11px] uppercase tracking-widest2 text-ink"
                >
                  Download Portfolio
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 4v12M7 11l5 5 5-5" />
                  </svg>
                </a>
                <div className="font-mono text-[11px] uppercase tracking-widest2 text-muted">
                  <a href={`mailto:${site.email}`} className="block text-ink">{site.email}</a>
                  <span className="mt-1 block">{site.locationShort}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
