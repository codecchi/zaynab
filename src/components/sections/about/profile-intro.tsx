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
    <section aria-labelledby="profile-title" className="relative overflow-x-clip py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="glass relative rounded-[2rem] p-2.5 lg:sticky lg:top-28">
            <div className="bg-glow-1/80 pointer-events-none absolute -inset-10 -z-10 rounded-full blur-[80px]" />
            <Portrait className="aspect-[4/5] w-full rounded-[1.5rem]" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Professional Introduction</Eyebrow>
            <h2
              id="profile-title"
              className="font-display text-gradient mt-6 pb-1 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-[3.4rem]"
            >
              {name ?? "Professional Profile"}
            </h2>
            {(title || designation) && (
              <p className="text-accent-2 mt-4 text-xs font-semibold tracking-[0.18em] uppercase">
                {[title, designation].filter(Boolean).join(" · ")}
              </p>
            )}
          </Reveal>

          {bio.length > 0 && (
            <Reveal delay={0.1} className="text-muted mt-9 space-y-5 text-base leading-relaxed text-pretty sm:text-lg">
              {bio.map((p, i) => (
                <p key={i} className={i === 0 ? "text-fg" : ""}>
                  {p}
                </p>
              ))}
            </Reveal>
          )}

          {facts.length > 0 && (
            <Reveal delay={0.15} className="mt-12">
              <h3 className="text-subtle text-[0.68rem] font-semibold tracking-[0.22em] uppercase">
                Background at a Glance
              </h3>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                {facts.map(([label, value]) => (
                  <div key={label} className="glass rounded-2xl p-5">
                    <dt className="text-subtle text-[0.68rem] font-semibold tracking-[0.16em] uppercase">{label}</dt>
                    <dd className="text-fg mt-2 text-base font-semibold">{value}</dd>
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
