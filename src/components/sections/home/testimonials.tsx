import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { initials, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaceholderNote, SampleBadge } from "@/components/ui/sample-badge";

export function Testimonials() {
  const items = visible(testimonials);
  if (items.length === 0) return null;
  const anySample = items.some((t) => t.sample);

  return (
    <section aria-labelledby="testimonials-title" className="bg-ivory">
      <Container className="py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Client Perspectives"
            title={<span id="testimonials-title">In Our Clients&apos; Words.</span>}
          />
          {anySample && (
            <PlaceholderNote className="max-w-sm">
              Sample content. These entries are layout placeholders, not real reviews — replace them with genuine
              testimonials shared with the client&apos;s permission.
            </PlaceholderNote>
          )}
        </div>

        <RevealGroup as="ul" className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <RevealItem as="li" key={i} className="h-full">
              <figure className="border-line flex h-full flex-col border bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-36px_rgba(16,28,44,0.4)] sm:p-9">
                <div className="flex items-start justify-between">
                  <span aria-hidden className="text-gold font-serif text-7xl leading-[0.6]">
                    &ldquo;
                  </span>
                  <SampleBadge show={t.sample} />
                </div>
                <blockquote className="text-navy mt-6 flex-1 font-serif text-[1.3rem] leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="border-line mt-8 flex items-center gap-4 border-t pt-6">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="bg-navy text-gold grid size-12 shrink-0 place-items-center rounded-full font-serif"
                    >
                      {initials(t.name)}
                    </span>
                  )}
                  <span>
                    <span className="text-navy block font-semibold">{t.name}</span>
                    <span className="text-slate block text-sm">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
