import { ArrowUpRight, Lock } from "lucide-react";
import { work } from "@/data/work";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { MediaFrame } from "@/components/ui/image-placeholder";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

export function Work() {
  const items = visible(work);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="work-title" className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="work-title"
            eyebrow="Work & Accomplishments"
            title={
              <>
                Selected <Accent>professional work.</Accent>
              </>
            }
            description="A selection of assignments, registrations and milestones that reflect the breadth of the practice."
          />
          <p className="text-muted glass flex max-w-xs items-start gap-3 rounded-2xl p-4 text-sm leading-relaxed">
            <Lock className="text-accent-2 mt-0.5 size-4 shrink-0" aria-hidden />
            Client details are shared only with consent. Confidential information is never published.
          </p>
        </div>

        <SpotlightGroup className="mt-14">
          <RevealGroup as="ul" className="grid gap-3 md:grid-cols-2 lg:grid-cols-12">
            {items.map((w, i) => (
              <RevealItem
                as="li"
                key={i}
                className={`glass spotlight group rounded-3xl p-2.5 ${i === 0 ? "lg:col-span-7 lg:row-span-3" : "lg:col-span-5"}`}
              >
                <article className={`flex h-full gap-5 ${i === 0 ? "flex-col" : "flex-col sm:flex-row lg:flex-row"}`}>
                  <MediaFrame
                    src={w.image}
                    alt={w.imageAlt ?? w.title}
                    label={i === 0 ? "Image placeholder" : "Image"}
                    sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "200px"}
                    className={`rounded-[1.25rem] ${i === 0 ? "aspect-[16/10] w-full lg:aspect-auto lg:flex-1" : "aspect-[16/10] w-full sm:aspect-square sm:w-40 sm:shrink-0"}`}
                  />
                  <div className={`flex flex-col ${i === 0 ? "px-4 pb-5" : "px-4 pb-4 sm:py-3 sm:pr-4 sm:pl-0"}`}>
                    <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                      <span className="text-accent-2">{w.category}</span>
                      {display(w.year) && <span className="text-subtle">· {w.year}</span>}
                      <SampleBadge show={w.sample} />
                    </div>
                    <h3
                      className={`text-fg mt-3 leading-snug font-semibold tracking-tight ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg"}`}
                    >
                      {w.title}
                    </h3>
                    {display(w.summary) && (
                      <p className={`text-muted mt-2 leading-relaxed ${i === 0 ? "text-base" : "text-sm"}`}>
                        {w.summary}
                      </p>
                    )}
                    {i === 0 && (
                      <ArrowUpRight
                        className="text-subtle group-hover:text-accent-2 mt-5 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    )}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </SpotlightGroup>
      </Container>
    </section>
  );
}
