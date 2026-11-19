"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/** Slow-moving aurora glow. Pure CSS animation; stops under reduced motion. */
export function Aurora({ className, intensity = "normal" }: { className?: string; intensity?: "normal" | "soft" }) {
  const soft = intensity === "soft";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "animate-aurora bg-glow-2 absolute -top-[35%] left-[5%] h-[70vh] w-[55vw] rounded-full blur-[120px]",
          soft ? "opacity-50" : "opacity-80",
        )}
      />
      <div
        className={cn(
          "animate-aurora-slow bg-glow-1 absolute -top-[20%] right-[0%] h-[55vh] w-[42vw] rounded-full blur-[150px]",
          soft ? "opacity-50" : "opacity-75",
        )}
      />
      <div
        className={cn(
          "animate-aurora bg-glow-3 absolute top-[25%] left-[35%] h-[45vh] w-[35vw] rounded-full blur-[140px]",
          soft ? "opacity-40" : "opacity-60",
        )}
      />
    </div>
  );
}

/**
 * Tracks the pointer and feeds --x / --y to every `.spotlight` child, so
 * cards light up under the cursor and neighbouring borders glow.
 */
export function SpotlightGroup({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.querySelectorAll<HTMLElement>(".spotlight").forEach((card) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--x", `${e.clientX - r.left}px`);
          card.style.setProperty("--y", `${e.clientY - r.top}px`);
        });
      });
    };
    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- polymorphic ref
    <Tag ref={ref as any} className={cn("spotlight-group", className)}>
      {children}
    </Tag>
  );
}

/** Infinite horizontal marquee with faded edges. Items are duplicated for a seamless loop. */
export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <ul className="animate-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="text-muted flex items-center gap-10 text-sm font-medium tracking-wide whitespace-nowrap sm:text-base"
          >
            {item}
            <span aria-hidden className="bg-highlight/70 size-1.5 rotate-45" />
          </li>
        ))}
      </ul>
    </div>
  );
}
