"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/** Sticky glass jump-nav for the seven categories; a sliding pill marks the one in view. */
export function CategoryNav() {
  const [active, setActive] = useState<string>(services[0].slug);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const shown = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (shown[0]) setActive(shown[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    services.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active pill visible on small screens (scrolls the strip only, not the page).
  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (!list || !el) return;
    list.scrollTo({ left: el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Service categories" className="sticky top-[88px] z-30 px-3 sm:top-24 sm:px-5">
      <div className="glass-strong mx-auto max-w-6xl rounded-full p-1.5">
        <ul ref={listRef} className="flex [scrollbar-width:none] gap-1 overflow-x-auto">
          {services.map((s, i) => (
            <li key={s.slug} data-slug={s.slug} className="shrink-0">
              <a
                href={`#${s.slug}`}
                aria-current={active === s.slug ? "true" : undefined}
                className={cn(
                  "relative inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-[0.82rem] font-medium whitespace-nowrap transition-colors duration-300",
                  active === s.slug ? "text-on-accent" : "text-muted hover:text-fg",
                )}
              >
                {active === s.slug && (
                  <motion.span
                    layoutId="category-pill"
                    className="bg-accent-gradient absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className={cn("relative text-xs font-bold", active === s.slug ? "" : "text-accent-2")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative">{s.title.split(" & ")[0].replace(/,.*$/, "")}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
