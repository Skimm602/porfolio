"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RevealWords } from "./Reveal";
import { site } from "@/lib/site";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92svh] flex-col justify-between pt-28 md:pt-32">
      <div className="shell w-full">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-between border-b border-line pb-5"
        >
          <span className="label">{site.role} Portfolio</span>
          <span className="label">{site.locationShort}</span>
        </motion.div>

        {/* Oversized name */}
        <h1 className="mt-8 font-display font-black text-ink md:mt-12">
          <span className="block display-xl">
            <RevealWords text="Jethia" delay={0.25} />
          </span>
          <span className="block display-xl">
            <RevealWords text="Lao" delay={0.4} />
            <span className="ml-3 align-top font-mono text-[0.16em] font-normal uppercase tracking-widest2 text-muted">
              ©{site.years.slice(-4)}
            </span>
          </span>
        </h1>

        {/* sub statement */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid gap-6 md:mt-12 md:grid-cols-12 md:items-end"
        >
          <p className="max-w-xl font-body text-lg leading-relaxed text-ink/75 text-pretty md:col-span-7 md:text-xl">
            {site.shortBio}
          </p>
          <div className="md:col-span-5 md:text-right">
            <p className="label">{site.tagline}</p>
            <p className="mt-2 font-display text-2xl italic text-ink">
              Civic · Cultural · Residential
            </p>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="shell mt-12 flex items-center justify-between pb-6 md:mt-16"
      >
        <span className="label">Scroll to explore</span>
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-ink"
        >
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 1v24M1 18l7 7 7-7" />
          </svg>
        </motion.span>
      </motion.div>
    </section>
  );
}
