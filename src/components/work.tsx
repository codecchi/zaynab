"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">Selected work</h2>
          <span className="font-display text-sm text-muted-foreground">({String(site.projects.length).padStart(2, "0")})</span>
        </div>

        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {site.projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background"
            >
              <motion.a
                href={p.href}
                whileHover="hover"
                className="group flex h-full cursor-pointer flex-col p-6 sm:p-8"
              >
                <motion.div
                  variants={{ hover: { scale: 0.97 } }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mb-6 aspect-[4/3] overflow-hidden bg-muted"
                >
                  {/* Replace with <Image /> of your project */}
                  <div className="absolute inset-0 grid place-items-center font-display text-7xl font-bold text-muted-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-accent/10"
                  />
                </motion.div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">{p.description}</p>
                  </div>
                  <motion.span
                    variants={{ hover: { rotate: 45 } }}
                    className="grid size-11 shrink-0 place-items-center border border-border"
                    aria-hidden
                  >
                    <ArrowUpRight className="size-5" />
                  </motion.span>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{p.year}</span>
                  {p.tags.map((t) => (
                    <span key={t} className="border border-border px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
