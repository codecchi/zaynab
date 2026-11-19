import { ArrowRight, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { display, visibleStrings } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Portrait } from "@/components/ui/portrait";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";

export function Introduction() {
  const name = display(profile.fullName);
  const designation = display(profile.designation);
  const bio = display(profile.shortBio);
  const highlights = visibleStrings(profile.careerHighlights);

  return (
    <section aria-labelledby="intro-title" className="bg-white">
      <Container className="grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <div aria-hidden className="bg-ivory absolute -top-4 -left-4 h-2/3 w-2/3 sm:-top-6 sm:-left-6" />
          <Portrait className="relative aspect-[4/5] w-full max-w-md" />
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <Eyebrow>{name ? `Meet ${name}` : "Professional Introduction"}</Eyebrow>
          <h2
            id="intro-title"
            className="text-navy mt-5 font-serif text-[2.25rem] leading-[1.08] text-balance sm:text-5xl lg:text-[3.3rem]"
          >
            Expertise Built on Experience. <span className="text-gold-deep italic">Guidance Built on Trust.</span>
          </h2>
          {designation && (
            <p className="text-slate mt-6 text-sm font-semibold tracking-[0.16em] uppercase">{designation}</p>
          )}
          {bio && <p className="text-slate mt-6 max-w-2xl text-lg leading-relaxed text-pretty">{bio}</p>}

          {highlights.length > 0 && (
            <ul className="border-line mt-10 grid gap-4 border-t pt-8 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <li key={i} className="text-navy flex gap-3 text-[0.95rem] leading-relaxed">
                  <span className="bg-navy text-gold mt-1 grid size-5 shrink-0 place-items-center">
                    <Check className="size-3" strokeWidth={2.5} aria-hidden />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}

          <Button href="/about" variant="outline" className="mt-10">
            Read the Full Profile
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden
            />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
