import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

/** C + D — Education timeline and certifications. Each block hides when empty. */
export function Credentials() {
  const edu = visible(education);
  const certs = visible(certifications);
  if (edu.length === 0 && certs.length === 0) return null;

  return (
    <section aria-label="Education and certifications" className="relative py-24 sm:py-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        {edu.length > 0 && (
          <div>
            <SectionHeading
              eyebrow="Education"
              title={
                <>
                  Educational <Accent>background.</Accent>
                </>
              }
            />
            <RevealGroup as="ol" className="relative mt-10 space-y-3 pl-8">
              <span
                aria-hidden
                className="from-accent-2/60 absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b to-transparent"
              />
              {edu.map((e, i) => (
                <RevealItem as="li" key={i} className="relative">
                  <span
                    aria-hidden
                    className="bg-highlight absolute top-7 -left-[29px] size-2.5 rounded-full shadow-[0_0_10px_2px_rgba(141,181,150,0.6)]"
                  />
                  <div className="glass rounded-3xl p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-accent-2 text-xs font-semibold">{e.year}</span>
                      <SampleBadge show={e.sample} />
                    </div>
                    <h3 className="text-fg mt-3 text-lg font-semibold tracking-tight">{e.qualification}</h3>
                    <p className="text-muted mt-1 text-sm">{e.institution}</p>
                    {display(e.specialization) && (
                      <p className="text-subtle mt-2 text-sm">Specialization: {e.specialization}</p>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}

        {certs.length > 0 && (
          <div>
            <SectionHeading
              eyebrow="Qualifications"
              title={
                <>
                  Professional <Accent>certifications.</Accent>
                </>
              }
            />
            <SpotlightGroup className="mt-10">
              <RevealGroup as="ul" className="space-y-3">
                {certs.map((c, i) => (
                  <RevealItem as="li" key={i} className="glass spotlight flex gap-5 rounded-3xl p-6">
                    <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-12 shrink-0 place-items-center rounded-2xl border">
                      <Icon name="badge-check" className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-fg text-lg font-semibold tracking-tight">{c.name}</h3>
                        <SampleBadge show={c.sample} />
                      </div>
                      <p className="text-muted mt-1 text-sm">
                        {c.issuer}
                        {display(c.year) && ` · ${c.year}`}
                      </p>
                      {c.verifyUrl && (
                        <a
                          href={c.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-2 mt-3 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold hover:underline"
                        >
                          Verify credential <ArrowUpRight className="size-3.5" aria-hidden />
                        </a>
                      )}
                    </div>
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
