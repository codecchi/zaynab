"use client";

import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { site } from "@/content/site";

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-title", { type: "lines,words", mask: "lines" });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(split.words, { yPercent: 110, duration: 1.1, stagger: 0.05 })
          .from(".hero-fade", { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 }, "-=0.7")
          .from(".hero-rule", { scaleX: 0, transformOrigin: "left", duration: 1.2 }, "<");

        // Gentle parallax as the hero scrolls away
        gsap.to(".hero-title", {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
        });

        return () => split.revert();
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="top" className="relative flex min-h-svh flex-col justify-end px-4 pb-12 pt-28 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="hero-fade mb-6 font-display text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {site.role} · {site.location}
        </p>
        <h1 className="hero-title font-display text-[clamp(3rem,11vw,10rem)] font-bold leading-[0.9] tracking-tighter">
          Hi, I&apos;m {site.name}.
          <br />
          <span className="text-accent">I make things move.</span>
        </h1>
        <div className="hero-rule mt-10 h-px w-full bg-border" />
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="hero-fade max-w-md text-lg leading-relaxed text-muted-foreground">{site.tagline}</p>
          <a
            href="#work"
            className="hero-fade group inline-flex min-h-11 cursor-pointer items-center gap-2 self-start bg-primary px-6 py-3 font-display font-semibold text-on-primary transition-transform duration-200 hover:-translate-y-0.5"
          >
            See my work
            <ArrowDownRight className="size-4 transition-transform duration-200 group-hover:rotate-[-45deg]" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
