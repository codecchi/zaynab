import { achievements, metrics } from "@/data/achievements";
import { siteConfig } from "@/data/site-config";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Aurora, SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PlaceholderNote, SampleBadge } from "@/components/ui/sample-badge";

export function Highlights() {
  // Only verified numbers are shown once placeholders are switched off.
  const shownMetrics = metrics.filter((m) => m.value !== null || siteConfig.showPlaceholders);
  const shownAchievements = visible(achievements);
  if (shownMetrics.length === 0 && shownAchievements.length === 0) return null;
  const hasPlaceholderMetric = shownMetrics.some((m) => m.value === null);

  return (
    <section aria-labelledby="highlights-title" className="theme-deep relative overflow-hidden py-24 sm:py-32">
      <Aurora intensity="soft" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="highlights-title"
            eyebrow="Professional Highlights"
            title={
              <>
                A record built on <Accent>commitment and care.</Accent>
              </>
            }
          />
          {hasPlaceholderMetric && (
            <PlaceholderNote className="max-w-xs">
              Figures marked [XX] are placeholders. Only verified figures supplied by the client will be published.
            </PlaceholderNote>
          )}
        </div>

        {shownMetrics.length > 0 && (
          <SpotlightGroup className="mt-14">
            <RevealGroup as="ul" className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {shownMetrics.map((m, i) => (
                <RevealItem
                  as="li"
                  key={m.id}
                  className={`glass spotlight rounded-3xl p-6 sm:p-7 ${i === shownMetrics.length - 1 && shownMetrics.length % 2 === 1 ? "col-span-2 md:col-span-1" : ""}`}
                >
                  <p className="font-display text-accent-gradient text-5xl leading-none font-bold tracking-[-0.04em] sm:text-6xl">
                    {m.value !== null ? <Counter value={m.value} suffix={m.suffix} /> : `[XX]${m.suffix ?? ""}`}
                  </p>
                  <p className="text-muted mt-5 text-sm leading-snug">{m.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </SpotlightGroup>
        )}

        {shownAchievements.length > 0 && (
          <div className="mt-16">
            <h3 className="text-subtle text-[0.68rem] font-semibold tracking-[0.22em] uppercase">
              Major Career Achievements
            </h3>
            <SpotlightGroup className="mt-6">
              <RevealGroup as="ul" className="grid gap-3 md:grid-cols-3">
                {shownAchievements.map((a, i) => (
                  <RevealItem as="li" key={i} className="glass spotlight rounded-3xl p-7">
                    <div className="flex items-center justify-between">
                      <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-11 place-items-center rounded-2xl border">
                        <Icon name="award" className="size-5" />
                      </span>
                      <SampleBadge show={a.sample} />
                    </div>
                    <p className="text-fg mt-6 text-xl leading-snug font-semibold tracking-tight">{a.title}</p>
                    {display(a.description) && (
                      <p className="text-muted mt-3 text-sm leading-relaxed">{a.description}</p>
                    )}
                    {display(a.year) && (
                      <p className="text-accent-2 mt-5 text-xs font-semibold tracking-[0.18em] uppercase">{a.year}</p>
                    )}
                  </RevealItem>
                ))}
              </RevealGroup>
            </SpotlightGroup>
          </div>
        )}
      </Container>
    </section>
  );
}
