import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceCategory } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

export function CategorySection({ service, index }: { service: ServiceCategory; index: number }) {
  return (
    <section
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className="relative scroll-mt-40 py-10 sm:py-14"
    >
      <Container>
        <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-12">
          <div
            aria-hidden
            className={`pointer-events-none absolute -top-40 size-[460px] rounded-full blur-[120px] ${index % 2 ? "bg-glow-1/80 -left-40" : "bg-glow-2/70 -right-40"}`}
          />
          <span
            aria-hidden
            className="font-display text-accent/[0.05] pointer-events-none absolute -right-4 -bottom-16 text-[12rem] leading-none font-bold select-none sm:text-[16rem]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-14 place-items-center rounded-2xl border shadow-[0_0_40px_-10px_rgba(141,181,150,0.7)]">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h2
                id={`${service.slug}-title`}
                className="font-display text-gradient mt-7 pb-1 text-[1.9rem] leading-[1.1] font-bold text-balance sm:text-[2.5rem]"
              >
                {service.title}
              </h2>
              <p className="text-muted mt-5 text-base leading-relaxed text-pretty">{service.intro}</p>
              <Button href={`/contact?service=${service.slug}#inquiry`} className="mt-8">
                Request Assistance
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
            </Reveal>

            <div className="space-y-6 lg:col-span-7">
              <Reveal delay={0.1}>
                <h3 className="text-subtle text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  Services Included
                </h3>
                <SpotlightGroup as="ul" className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {service.services.map((item) => (
                    <li
                      key={item}
                      className="spotlight border-line text-fg bg-surface/70 flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium"
                    >
                      <span aria-hidden className="bg-highlight size-1.5 shrink-0 rotate-45" />
                      {item}
                    </li>
                  ))}
                </SpotlightGroup>
              </Reveal>

              <Reveal delay={0.15} className="border-accent/15 bg-accent/[0.03] rounded-3xl border p-6 sm:p-7">
                <h3 className="text-accent-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  How You Benefit
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="text-fg flex gap-3 text-sm leading-relaxed sm:text-[0.95rem]">
                      <span className="bg-accent text-on-accent mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
