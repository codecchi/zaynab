import { ArrowRight, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { display, visibleStrings } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Portrait } from "@/components/ui/portrait";
import { Reveal } from "@/components/ui/reveal";
import { Accent, Eyebrow } from "@/components/ui/section-heading";

export function Introduction() {
  const name = display(profile.fullName);
  const designation = display(profile.designation);
  const bio = display(profile.shortBio);
  const highlights = visibleStrings(profile.careerHighlights);

  return (
    <section aria-labelledby="intro-title" className="relative py-24 sm:py-32">
      <Container>
        <div className="glass relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div className="bg-glow-2/70 pointer-events-none absolute -right-32 -bottom-40 size-[520px] rounded-full blur-[120px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <Portrait className="aspect-[4/5] w-full rounded-[1.5rem]" />
            </Reveal>

            <Reveal delay={0.1} className="px-3 pb-8 sm:px-6 lg:col-span-7 lg:py-10 lg:pr-12 lg:pl-0">
              <Eyebrow>{name ? `Meet ${name}` : "Professional Introduction"}</Eyebrow>
              <h2
                id="intro-title"
                className="font-display text-gradient mt-6 pb-1 text-[2.1rem] leading-[1.06] font-bold text-balance sm:text-5xl"
              >
                Expertise Built on Experience. <Accent>Guidance Built on Trust.</Accent>
              </h2>
              {designation && (
                <p className="text-accent-2 mt-5 text-xs font-semibold tracking-[0.18em] uppercase">{designation}</p>
              )}
              {bio && (
                <p className="text-muted mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">{bio}</p>
              )}

              {highlights.length > 0 && (
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {highlights.map((h, i) => (
                    <li
                      key={i}
                      className="border-line text-fg bg-surface/70 flex gap-3 rounded-2xl border p-4 text-sm leading-relaxed"
                    >
                      <span className="bg-accent text-on-accent mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <Button href="/about" variant="secondary" className="mt-9">
                Read the Full Profile
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden
                />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
