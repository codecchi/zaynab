"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";

/** Scroll-triggered storytelling: a progress rail fills as each chapter reveals. */
export function Process() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".process-rail-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".process-list", start: "top 60%", end: "bottom 60%", scrub: true },
          },
        );

        gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
          gsap.from(step.children, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: step, start: "top 80%", toggleActions: "play none none reverse" },
          });
        });
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="process" className="border-t border-border px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-5xl font-bold tracking-tighter sm:text-7xl">How I work</h2>
          <p className="mt-6 max-w-sm text-lg text-muted-foreground">
            A simple process, from first question to final pixel.
          </p>
        </div>

        <div className="process-list relative pl-8 sm:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden>
            <div className="process-rail-fill h-full w-full origin-top bg-accent" />
          </div>
          <ol className="space-y-24 sm:space-y-32">
            {site.story.map((s) => (
              <li key={s.kicker} className="process-step">
                <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">{s.kicker}</p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">{s.title}</h3>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
