import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { initials, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote, SampleBadge } from "@/components/ui/sample-badge";

export function Testimonials() {
  const items = visible(testimonials);
  if (items.length === 0) return null;
  const anySample = items.some((t) => t.sample);

  return (
    <section aria-labelledby="testimonials-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="testimonials-title"
          align="center"
          eyebrow="Client Perspectives"
          title={
            <>
              In our clients&apos; <Accent>own words.</Accent>
            </>
          }
        />
        {anySample && (
          <PlaceholderNote className="mx-auto mt-8 max-w-xl text-center">
            Sample content. These entries are layout placeholders, not real reviews — replace them with genuine
            testimonials shared with the client&apos;s permission.
          </PlaceholderNote>
        )}

        <SpotlightGroup className="mt-14">
          <RevealGroup as="ul" className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <RevealItem as="li" key={i} className="glass spotlight h-full rounded-3xl">
                <figure className="flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span aria-hidden className="text-accent-gradient font-display text-6xl leading-[0.7] font-bold">
                      &ldquo;
                    </span>
                    <SampleBadge show={t.sample} />
                  </div>
                  <blockquote className="text-fg mt-6 flex-1 text-[1.05rem] leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="border-line mt-8 flex items-center gap-4 border-t pt-6">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={44}
                        height={44}
                        className="size-11 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="bg-accent-gradient text-on-accent grid size-11 shrink-0 place-items-center rounded-full text-xs font-bold"
                      >
                        {initials(t.name)}
                      </span>
                    )}
                    <span>
                      <span className="text-fg block text-sm font-semibold">{t.name}</span>
                      <span className="text-subtle block text-xs">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </SpotlightGroup>
      </Container>
    </section>
  );
}
