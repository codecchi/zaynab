import { experience } from "@/data/experience";
import { visible, visibleStrings } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

/** E — Professional experience. */
export function ExperienceSection() {
  const items = visible(experience);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="experience-title" className="bg-white">
      <Container className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Professional Experience"
          title={<span id="experience-title">Career Timeline.</span>}
          description="Roles, responsibilities and contributions across the client's professional career."
        />
        <RevealGroup as="ol" className="border-line mt-14 border-t">
          {items.map((x, i) => {
            const resp = visibleStrings(x.responsibilities ?? []);
            const contrib = visibleStrings(x.contributions ?? []);
            return (
              <RevealItem as="li" key={i} className="border-line grid gap-6 border-b py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="text-gold-deep text-sm font-semibold">{x.duration}</p>
                  <h3 className="text-navy mt-2 font-serif text-[1.7rem] leading-snug">{x.title}</h3>
                  <p className="text-slate mt-1">{x.organization}</p>
                  <SampleBadge show={x.sample} className="mt-4" />
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
                  {resp.length > 0 && (
                    <div>
                      <h4 className="text-slate text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                        Responsibilities
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {resp.map((r, j) => (
                          <li key={j} className="text-navy flex gap-3 leading-relaxed">
                            <span aria-hidden className="bg-gold-deep mt-[0.7em] h-px w-3 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {contrib.length > 0 && (
                    <div>
                      <h4 className="text-slate text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                        Key Contributions
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {contrib.map((c, j) => (
                          <li key={j} className="text-navy flex gap-3 leading-relaxed">
                            <span aria-hidden className="bg-gold-deep mt-[0.7em] h-px w-3 shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
