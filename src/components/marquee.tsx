"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

export function Marquee() {
  const reduce = useReducedMotion();
  const items = [...site.skills, ...site.skills];

  return (
    <section aria-label="Skills" className="overflow-hidden border-y border-border bg-primary py-5 text-on-primary">
      <motion.ul
        className="flex w-max gap-10 whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {items.map((skill, i) => (
          <li key={i} className="flex items-center gap-10" aria-hidden={i >= site.skills.length}>
            {skill}
            <span className="text-accent">✦</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
