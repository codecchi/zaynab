"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-border bg-primary px-4 pb-10 pt-24 text-on-primary sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-sm font-medium uppercase tracking-[0.2em] opacity-70">Have a project in mind?</p>
        <motion.a
          href={`mailto:${site.email}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 block cursor-pointer break-words font-display text-[clamp(2.5rem,9vw,8rem)] font-bold leading-[0.95] tracking-tighter underline decoration-accent decoration-4 underline-offset-[0.15em] transition-colors duration-200 hover:text-accent"
        >
          Let&apos;s talk.
        </motion.a>

        <div className="mt-24 flex flex-col gap-6 border-t border-on-primary/20 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="opacity-70">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 cursor-pointer items-center font-medium opacity-80 transition-opacity duration-200 hover:opacity-100"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
