"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/** Sticky jump-nav for the seven service categories; highlights the one in view. */
export function CategoryNav() {
  const [active, setActive] = useState<string>(services[0].slug);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    services.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active pill visible on small screens.
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Service categories"
      className="border-line bg-ivory/95 sticky top-[72px] z-30 border-b backdrop-blur-xl"
    >
      <ul
        ref={listRef}
        className="mx-auto flex max-w-[1240px] [scrollbar-width:none] gap-1 overflow-x-auto px-5 sm:px-8 lg:px-10"
      >
        {services.map((s, i) => (
          <li key={s.slug} data-slug={s.slug} className="shrink-0">
            <a
              href={`#${s.slug}`}
              aria-current={active === s.slug ? "true" : undefined}
              className={cn(
                "relative inline-flex min-h-14 items-center gap-2 px-3 text-sm font-medium whitespace-nowrap transition-colors duration-300",
                active === s.slug ? "text-navy" : "text-slate hover:text-navy",
              )}
            >
              <span className="text-gold-deep font-serif">{String(i + 1).padStart(2, "0")}</span>
              {s.title.split(" & ")[0].replace(/,.*$/, "")}
              <span
                aria-hidden
                className={cn(
                  "bg-gold-deep ease-premium absolute inset-x-3 bottom-0 h-0.5 origin-left transition-transform duration-500",
                  active === s.slug ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
