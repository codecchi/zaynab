"use client";

import { useRef } from "react";
import { journey } from "@/data/experience";
import { display, visible } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { Container } from "@/components/ui/container";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

/** Career timeline; a glowing green beam fills the rail as you scroll (GSAP ScrollTrigger). */
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
            y: 30,
            filter: "blur(6px)",
            duration: 0.9,
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
    <section ref={scope} aria-labelledby="journey-title" className="relative py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            id="journey-title"
            eyebrow="Professional Journey"
            title={
              <>
                A career shaped <Accent>by practice.</Accent>
              </>
            }
            description="The milestones, roles and learning that have shaped a disciplined, client-first approach."
          />
        </div>

        <div className="journey-list relative lg:col-span-7">
          <div aria-hidden className="bg-accent/[0.08] absolute top-3 bottom-3 left-[19px] w-px">
            <div className="journey-fill bg-brand-y h-full w-full origin-top shadow-[0_0_14px_2px_rgba(141,181,150,0.5)]" />
          </div>
          <ol className="space-y-5">
            {stages.map((s, i) => (
              <li key={i} className="journey-item relative pl-14">
                <span
                  aria-hidden
                  className="glass-strong absolute top-6 left-0 grid size-10 place-items-center rounded-full"
                >
                  <span className="bg-highlight size-2 rounded-full shadow-[0_0_10px_2px_rgba(141,181,150,0.7)]" />
                </span>
                <div className="glass rounded-3xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border-accent/25 text-accent-2 bg-accent/[0.06] rounded-full border px-3 py-1 text-xs font-semibold">
                      {s.period}
                    </span>
                    <p className="text-subtle text-[0.68rem] font-semibold tracking-[0.2em] uppercase">{s.stage}</p>
                    <SampleBadge show={s.sample} />
                  </div>
                  <h3 className="text-fg mt-4 text-xl leading-snug font-semibold tracking-tight">{s.title}</h3>
                  {display(s.description) && <p className="text-muted mt-2 text-sm leading-relaxed">{s.description}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
