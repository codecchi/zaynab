import { achievements, metrics } from "@/data/achievements";
import { siteConfig } from "@/data/site-config";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PlaceholderNote, SampleBadge } from "@/components/ui/sample-badge";

export function Highlights() {
  // Only verified numbers are shown once placeholders are switched off.
  const shownMetrics = metrics.filter((m) => m.value !== null || siteConfig.showPlaceholders);
  const shownAchievements = visible(achievements);
  if (shownMetrics.length === 0 && shownAchievements.length === 0) return null;
  const hasPlaceholderMetric = shownMetrics.some((m) => m.value === null);

  return (
    <section aria-labelledby="highlights-title" className="on-dark bg-navy text-ivory relative overflow-hidden">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <Container className="relative py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Professional Highlights"
            title={<span id="highlights-title">A Record Built on Commitment and Care.</span>}
          />
          {hasPlaceholderMetric && (
            <PlaceholderNote tone="dark" className="max-w-xs">
              Figures marked [XX] are placeholders. Only verified figures supplied by the client will be published.
            </PlaceholderNote>
          )}
        </div>

        {shownMetrics.length > 0 && (
          <RevealGroup
            as="ul"
            className="mt-16 grid grid-cols-2 border-t border-white/10 md:grid-cols-3 lg:grid-cols-5"
          >
            {shownMetrics.map((m, i) => (
              <RevealItem
                as="li"
                key={m.id}
                className={`border-b border-white/10 py-8 pr-4 md:py-10 ${i % 2 === 1 ? "pl-5 md:pl-0" : ""} md:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0`}
              >
                <p className="text-gold font-serif text-5xl leading-none sm:text-6xl">
                  {m.value !== null ? <Counter value={m.value} suffix={m.suffix} /> : `[XX]${m.suffix ?? ""}`}
                </p>
                <p className="text-slate-light mt-4 max-w-[12rem] text-sm leading-snug">{m.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        {shownAchievements.length > 0 && (
          <div className="mt-20">
            <h3 className="text-gold text-[0.72rem] font-semibold tracking-[0.24em] uppercase">
              Major Career Achievements
            </h3>
            <RevealGroup as="ul" className="mt-8 grid gap-px bg-white/10 md:grid-cols-3">
              {shownAchievements.map((a, i) => (
                <RevealItem
                  as="li"
                  key={i}
                  className="group bg-navy hover:bg-midnight p-7 transition-colors duration-500 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gold/70 font-serif text-2xl">{String(i + 1).padStart(2, "0")}</span>
                    <SampleBadge show={a.sample} tone="dark" />
                  </div>
                  <p className="mt-6 font-serif text-2xl leading-snug">{a.title}</p>
                  {display(a.description) && (
                    <p className="text-slate-light mt-3 text-sm leading-relaxed">{a.description}</p>
                  )}
                  {display(a.year) && (
                    <p className="text-gold mt-5 text-xs font-semibold tracking-[0.2em] uppercase">{a.year}</p>
                  )}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}
      </Container>
    </section>
  );
}
