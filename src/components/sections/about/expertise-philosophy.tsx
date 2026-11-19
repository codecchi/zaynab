import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { display, visibleStrings } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";

/** F — Areas of expertise. */
export function AboutExpertise() {
  const knowledge = visibleStrings(profile.technicalKnowledge);
  return (
    <section aria-labelledby="about-expertise-title" className="bg-ivory">
      <Container className="grid gap-14 py-24 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Areas of Expertise"
            title={<span id="about-expertise-title">Specializations & Knowledge.</span>}
          />
          {knowledge.length > 0 && (
            <Reveal delay={0.1} className="mt-10">
              <h3 className="text-slate text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                Technical Knowledge
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {knowledge.map((k, i) => (
                  <li key={i} className="border-navy/15 text-navy border bg-white px-3 py-2 text-sm">
                    {k}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
        <RevealGroup as="ul" className="border-line bg-line grid gap-px self-start border sm:grid-cols-2 lg:col-span-8">
          {services.map((s) => (
            <RevealItem as="li" key={s.slug} className="bg-white">
              <Link
                href={`/services#${s.slug}`}
                className="group hover:bg-navy flex h-full items-start gap-4 p-6 transition-colors duration-500"
              >
                <Icon
                  name={s.icon}
                  className="text-gold-deep group-hover:text-gold mt-0.5 size-5 shrink-0 transition-colors"
                />
                <span className="text-navy group-hover:text-ivory flex-1 font-serif text-lg leading-snug transition-colors">
                  {s.title}
                </span>
                <ArrowUpRight
                  className="text-slate group-hover:text-gold size-4 shrink-0 transition-colors"
                  aria-hidden
                />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
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
    <section aria-labelledby="philosophy-title" className="bg-white">
      <Container className="py-24 sm:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow className="justify-center">Professional Philosophy</Eyebrow>
          <h2 id="philosophy-title" className="sr-only">
            Professional Philosophy
          </h2>
          {statement && (
            <blockquote className="text-navy mt-8 font-serif text-3xl leading-snug text-balance sm:text-[2.6rem]">
              <span aria-hidden className="text-gold">
                &ldquo;
              </span>
              {statement}
              <span aria-hidden className="text-gold">
                &rdquo;
              </span>
            </blockquote>
          )}
        </Reveal>
        {topics.length > 0 && (
          <RevealGroup as="ul" className="border-line bg-line mt-16 grid gap-px border sm:grid-cols-2 lg:grid-cols-5">
            {topics.map((t, i) => (
              <RevealItem as="li" key={t.topic} className="bg-white p-6 sm:p-7">
                <span className="text-gold-deep font-serif text-lg">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-navy mt-4 font-serif text-xl leading-snug">{t.topic}</h3>
                <p className="text-slate mt-3 text-sm leading-relaxed">{t.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
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
    <section aria-label="Vision and mission" className="on-dark bg-navy text-ivory relative overflow-hidden">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <Container className="relative grid gap-px py-24 sm:py-28 md:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal
            key={b.label}
            delay={i * 0.1}
            className={`py-6 md:py-0 ${i === 1 ? "border-t border-white/10 md:border-t-0 md:border-l md:pl-14" : "md:pr-14"}`}
          >
            <span className="border-gold/40 text-gold grid size-14 place-items-center border">
              <Icon name={b.icon} className="size-6" />
            </span>
            <h2 className="text-gold mt-8 text-[0.72rem] font-semibold tracking-[0.24em] uppercase">Our {b.label}</h2>
            <p className="mt-5 font-serif text-[1.9rem] leading-snug text-pretty sm:text-4xl">{b.text}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
