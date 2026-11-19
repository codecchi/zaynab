import { achievements } from "@/data/achievements";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

const kindLabel = {
  award: "Award",
  recognition: "Recognition",
  milestone: "Milestone",
  accomplishment: "Accomplishment",
} as const;

/** I — Achievements & recognition. */
export function Recognition() {
  const items = visible(achievements);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="recognition-title" className="bg-ivory">
      <Container className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Achievements & Recognition"
          title={<span id="recognition-title">Milestones Along the Way.</span>}
        />
        <RevealGroup as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((a, i) => (
            <RevealItem as="li" key={i} className="border-gold flex flex-col border-t-2 bg-white p-8">
              <div className="flex items-center justify-between">
                <Icon name="award" className="text-gold-deep size-7" />
                <SampleBadge show={a.sample} />
              </div>
              {a.kind && (
                <p className="text-slate mt-6 text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                  {kindLabel[a.kind]}
                </p>
              )}
              <h3 className="text-navy mt-2 font-serif text-2xl leading-snug">{a.title}</h3>
              {display(a.description) && <p className="text-slate mt-3 leading-relaxed">{a.description}</p>}
              {display(a.year) && <p className="text-gold-deep mt-auto pt-6 text-sm font-semibold">{a.year}</p>}
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
