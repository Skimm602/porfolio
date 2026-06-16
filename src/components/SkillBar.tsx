"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SkillBar({
  name,
  level,
  index = 0,
}: {
  name: string;
  level: number;
  index?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="border-t border-line py-4">
      <div className="flex items-baseline justify-between">
        <span className="font-body text-lg text-ink">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="mt-3 h-px w-full bg-line">
        <motion.div
          className="h-px bg-ink"
          initial={{ scaleX: reduce ? level / 100 : 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </div>
  );
}
