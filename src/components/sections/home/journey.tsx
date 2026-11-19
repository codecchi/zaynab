"use client";

import { useRef } from "react";
import { journey } from "@/data/experience";
import { display, visible } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

/** Career timeline; the gold rail fills as you scroll (GSAP ScrollTrigger). */
export function Journey() {
  const scope = useRef<HTMLElement>(null);
  const stages = visible(journey);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".journey-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: ".journey-list", start: "top 70%", end: "bottom 65%", scrub: 0.6 },
          },
        );
        gsap.utils.toArray<HTMLElement>(".journey-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
          });
        });
      });
    },
    { scope },
  );

  if (stages.length === 0) return null;

  return (
    <section ref={scope} aria-labelledby="journey-title" className="bg-ivory">
      <Container className="grid gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <SectionHeading
            eyebrow="Professional Journey"
            title={<span id="journey-title">A Career Shaped by Practice.</span>}
            description="The milestones, roles and learning that have shaped a disciplined, client-first approach."
          />
        </div>

        <div className="journey-list relative lg:col-span-8">
          <div aria-hidden className="bg-line absolute top-2 bottom-2 left-[7px] w-px sm:left-[calc(9rem+7px)]">
            <div className="journey-fill bg-gold-deep h-full w-full origin-top" />
          </div>
          <ol className="space-y-12 sm:space-y-14">
            {stages.map((s, i) => (
              <li key={i} className="journey-item relative grid gap-2 pl-10 sm:grid-cols-[9rem_1fr] sm:gap-10 sm:pl-0">
                <p className="text-gold-deep text-sm font-semibold sm:pt-1 sm:pr-4 sm:text-right">{s.period}</p>
                <span
                  aria-hidden
                  className="border-gold-deep bg-ivory absolute top-1.5 left-0 size-[15px] border-2 sm:left-[9rem]"
                />
                <div className="sm:pl-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-slate text-[0.7rem] font-semibold tracking-[0.22em] uppercase">{s.stage}</p>
                    <SampleBadge show={s.sample} />
                  </div>
                  <h3 className="text-navy mt-3 font-serif text-2xl leading-snug sm:text-[1.75rem]">{s.title}</h3>
                  {display(s.description) && (
                    <p className="text-slate mt-3 max-w-xl leading-relaxed">{s.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
