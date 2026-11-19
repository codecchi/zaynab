import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { display, visibleStrings } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Aurora, SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, Eyebrow, SectionHeading } from "@/components/ui/section-heading";

/** F — Areas of expertise. */
export function AboutExpertise() {
  const knowledge = visibleStrings(profile.technicalKnowledge);
  return (
    <section aria-labelledby="about-expertise-title" className="relative py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHeading
            id="about-expertise-title"
            eyebrow="Areas of Expertise"
            title={
              <>
                Specializations <Accent>& knowledge.</Accent>
              </>
            }
          />
          {knowledge.length > 0 && (
            <Reveal delay={0.1} className="mt-10">
              <h3 className="text-subtle text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                Technical Knowledge
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {knowledge.map((k, i) => (
                  <li key={i} className="glass text-fg rounded-full px-4 py-2 text-sm">
                    {k}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
        <SpotlightGroup className="lg:col-span-8">
          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <RevealItem as="li" key={s.slug} className="glass spotlight group rounded-2xl">
                <Link href={`/services#${s.slug}`} className="flex h-full items-center gap-4 rounded-2xl p-5">
                  <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-11 shrink-0 place-items-center rounded-xl border">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="text-fg flex-1 text-[0.95rem] leading-snug font-semibold">{s.title}</span>
                  <ArrowUpRight
                    className="text-subtle group-hover:text-accent-2 size-4 shrink-0 transition-colors"
                    aria-hidden
                  />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </SpotlightGroup>
      </Container>
    </section>
  );
}

/** G — Professional philosophy. */
export function Philosophy() {
  const statement = display(profile.philosophyStatement);
  const topics = profile.philosophy.filter((p) => display(p.text));
  if (!statement && topics.length === 0) return null;

  return (
    <section aria-labelledby="philosophy-title" className="relative py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Eyebrow>Professional Philosophy</Eyebrow>
          <h2 id="philosophy-title" className="sr-only">
            Professional Philosophy
          </h2>
          {statement && (
            <blockquote className="font-display text-gradient mt-8 pb-1 text-3xl leading-[1.2] font-semibold text-balance sm:text-[2.6rem]">
              <span aria-hidden className="text-highlight">
                &ldquo;
              </span>
              {statement}
              <span aria-hidden className="text-highlight">
                &rdquo;
              </span>
            </blockquote>
          )}
        </Reveal>
        {topics.length > 0 && (
          <SpotlightGroup className="mt-14">
            <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {topics.map((t, i) => (
                <RevealItem as="li" key={t.topic} className="glass spotlight rounded-3xl p-6">
                  <span className="text-accent-gradient text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-fg mt-4 text-base font-semibold tracking-tight">{t.topic}</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{t.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </SpotlightGroup>
        )}
      </Container>
    </section>
  );
}

/** H — Vision & Mission. */
export function VisionMission() {
  const blocks = [
    { icon: "eye" as const, label: "Vision", text: display(profile.vision) },
    { icon: "target" as const, label: "Mission", text: display(profile.mission) },
  ].filter((b) => b.text);
  if (blocks.length === 0) return null;

  return (
    <section aria-label="Vision and mission" className="relative py-12 sm:py-16">
      <Container className="grid gap-3 md:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal
            key={b.label}
            delay={i * 0.1}
            className="beam theme-deep bg-bg relative overflow-hidden rounded-[2rem] p-8 sm:p-12"
          >
            <Aurora intensity="soft" />
            <div className="relative">
              <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-14 place-items-center rounded-2xl border">
                <Icon name={b.icon} className="size-6" />
              </span>
              <h2 className="text-accent-2 mt-8 text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                Our {b.label}
              </h2>
              <p className="text-gradient mt-4 pb-1 text-2xl leading-snug font-semibold text-pretty sm:text-3xl">
                {b.text}
              </p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
