import { Lock } from "lucide-react";
import { work } from "@/data/work";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/image-placeholder";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

export function Work() {
  const items = visible(work);
  if (items.length === 0) return null;
  const [featured, ...rest] = items;

  return (
    <section aria-labelledby="work-title" className="bg-white">
      <Container className="py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Work & Accomplishments"
            title={<span id="work-title">Selected Professional Work.</span>}
            description="A selection of assignments, registrations and milestones that reflect the breadth of the practice."
          />
          <p className="text-slate flex max-w-xs items-start gap-3 text-sm leading-relaxed">
            <Lock className="text-gold-deep mt-0.5 size-4 shrink-0" aria-hidden />
            Client details are shared only with consent. Confidential information is never published.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="group lg:col-span-7">
            <article>
              <MediaFrame
                src={featured.image}
                alt={featured.imageAlt ?? featured.title}
                className="aspect-[16/11] w-full"
              />
              <div className="text-gold-deep mt-7 flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                {featured.category}
                {display(featured.year) && <span className="text-slate">· {featured.year}</span>}
                <SampleBadge show={featured.sample} />
              </div>
              <h3 className="text-navy mt-4 font-serif text-3xl leading-tight sm:text-4xl">{featured.title}</h3>
              {display(featured.summary) && (
                <p className="text-slate mt-4 max-w-xl text-lg leading-relaxed">{featured.summary}</p>
              )}
            </article>
          </Reveal>

          {rest.length > 0 && (
            <div className="lg:col-span-5">
              <RevealGroup as="ul" className="border-line border-t">
                {rest.map((w, i) => (
                  <RevealItem
                    as="li"
                    key={i}
                    className="group border-line grid grid-cols-[96px_1fr] gap-5 border-b py-7 sm:grid-cols-[120px_1fr]"
                  >
                    <MediaFrame
                      src={w.image}
                      alt={w.imageAlt ?? w.title}
                      label="Image"
                      sizes="120px"
                      className="aspect-square"
                    />
                    <div>
                      <div className="text-gold-deep flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                        {w.category}
                        {display(w.year) && <span className="text-slate">· {w.year}</span>}
                      </div>
                      <h3 className="text-navy mt-2 font-serif text-xl leading-snug">{w.title}</h3>
                      {display(w.summary) && <p className="text-slate mt-2 text-sm leading-relaxed">{w.summary}</p>}
                      <SampleBadge show={w.sample} className="mt-3" />
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
