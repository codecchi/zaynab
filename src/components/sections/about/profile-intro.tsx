import { profile } from "@/data/profile";
import { display, visibleStrings } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Portrait } from "@/components/ui/portrait";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";

/** A + B — Professional introduction and background facts. */
export function ProfileIntro() {
  const name = display(profile.fullName);
  const title = display(profile.currentRole);
  const designation = display(profile.designation);
  const bio = visibleStrings(profile.bio);

  const facts = (
    [
      ["Full Name", profile.public.fullName && profile.fullName],
      ["Professional Designation", profile.public.designation && profile.designation],
      ["Location", profile.public.location && profile.location],
      ["Specialization", profile.public.specialization && profile.specialization],
      ["Languages", profile.public.languages && profile.languages],
      ["Current Organization", profile.public.organization && profile.organization],
    ] as const
  )
    .map(([label, value]) => [label, value ? display(value) : null] as const)
    .filter(([, v]) => v);

  return (
    <section aria-labelledby="profile-title" className="bg-white">
      <Container className="grid gap-14 py-24 sm:py-28 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative lg:sticky lg:top-32">
            <div
              aria-hidden
              className="border-gold/60 absolute -right-4 -bottom-4 h-full w-full border sm:-right-5 sm:-bottom-5"
            />
            <Portrait className="relative aspect-[4/5] w-full" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Professional Introduction</Eyebrow>
            <h2
              id="profile-title"
              className="text-navy mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
            >
              {name ?? "Professional Profile"}
            </h2>
            {(title || designation) && (
              <p className="text-gold-deep mt-4 text-sm font-semibold tracking-[0.16em] uppercase">
                {[title, designation].filter(Boolean).join(" · ")}
              </p>
            )}
          </Reveal>

          {bio.length > 0 && (
            <Reveal delay={0.1} className="text-slate mt-10 space-y-6 text-lg leading-relaxed text-pretty">
              {bio.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:text-navy first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.85]"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </Reveal>
          )}

          {facts.length > 0 && (
            <Reveal delay={0.15} className="mt-14">
              <h3 className="text-gold-deep text-[0.72rem] font-semibold tracking-[0.24em] uppercase">
                Background at a Glance
              </h3>
              <dl className="border-line mt-6 grid border-t sm:grid-cols-2">
                {facts.map(([label, value]) => (
                  <div key={label} className="border-line border-b py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                    <dt className="text-slate text-xs font-semibold tracking-[0.14em] uppercase">{label}</dt>
                    <dd className="text-navy mt-2 font-serif text-xl">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
