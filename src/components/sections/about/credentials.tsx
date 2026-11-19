import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { display, visible } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

/** C + D — Education timeline and certifications. Each block hides when empty. */
export function Credentials() {
  const edu = visible(education);
  const certs = visible(certifications);
  if (edu.length === 0 && certs.length === 0) return null;

  return (
    <section aria-label="Education and certifications" className="bg-ivory">
      <Container className="grid gap-20 py-24 sm:py-28 lg:grid-cols-2 lg:gap-16">
        {edu.length > 0 && (
          <div>
            <SectionHeading eyebrow="Education" title="Educational Background." />
            <RevealGroup as="ol" className="border-gold/50 mt-12 border-l">
              {edu.map((e, i) => (
                <RevealItem as="li" key={i} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className="border-gold-deep bg-ivory absolute top-1.5 -left-[7px] size-[13px] border-2"
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-gold-deep text-sm font-semibold">{e.year}</p>
                    <SampleBadge show={e.sample} />
                  </div>
                  <h3 className="text-navy mt-2 font-serif text-2xl leading-snug">{e.qualification}</h3>
                  <p className="text-slate mt-1">{e.institution}</p>
                  {display(e.specialization) && (
                    <p className="text-slate mt-2 text-sm">Specialization: {e.specialization}</p>
                  )}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}

        {certs.length > 0 && (
          <div>
            <SectionHeading eyebrow="Qualifications" title="Professional Certifications." />
            <RevealGroup as="ul" className="mt-12 space-y-4">
              {certs.map((c, i) => (
                <RevealItem as="li" key={i} className="border-line flex gap-5 border bg-white p-6">
                  <span className="bg-navy text-gold grid size-12 shrink-0 place-items-center">
                    <Icon name="badge-check" className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-navy font-serif text-xl leading-snug">{c.name}</h3>
                      <SampleBadge show={c.sample} />
                    </div>
                    <p className="text-slate mt-1 text-sm">
                      {c.issuer} · {c.year}
                    </p>
                    {c.verifyUrl && (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-deep mt-3 inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold hover:underline"
                      >
                        Verify credential <ArrowUpRight className="size-3.5" aria-hidden />
                      </a>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        )}
      </Container>
    </section>
  );
}
