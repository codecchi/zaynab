import { achievements } from "@/data/achievements";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
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
    <section aria-labelledby="recognition-title" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          id="recognition-title"
          eyebrow="Achievements & Recognition"
          title={
            <>
              Milestones <Accent>along the way.</Accent>
            </>
          }
        />
        <SpotlightGroup className="mt-12">
          <RevealGroup as="ul" className="grid gap-3 md:grid-cols-3">
            {items.map((a, i) => (
              <RevealItem as="li" key={i} className="glass spotlight flex flex-col rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-12 place-items-center rounded-2xl border">
                    <Icon name="award" className="size-5" />
                  </span>
                  <SampleBadge show={a.sample} />
                </div>
                {a.kind && (
                  <p className="text-subtle mt-6 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                    {kindLabel[a.kind]}
                  </p>
                )}
                <h3 className="text-fg mt-2 text-xl font-semibold tracking-tight">{a.title}</h3>
                {display(a.description) && <p className="text-muted mt-3 text-sm leading-relaxed">{a.description}</p>}
                {display(a.year) && <p className="text-accent-2 mt-auto pt-6 text-sm font-semibold">{a.year}</p>}
              </RevealItem>
            ))}
          </RevealGroup>
        </SpotlightGroup>
      </Container>
    </section>
  );
}
