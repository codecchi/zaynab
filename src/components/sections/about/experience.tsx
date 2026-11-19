import { experience } from "@/data/experience";
import { visible, visibleStrings } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { SampleBadge } from "@/components/ui/sample-badge";

function Bullets({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-subtle text-[0.68rem] font-semibold tracking-[0.2em] uppercase">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((r, j) => (
          <li key={j} className="text-fg flex gap-3 text-sm leading-relaxed">
            <span aria-hidden className="bg-highlight mt-[0.55em] size-1.5 shrink-0 rotate-45" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** E — Professional experience. */
export function ExperienceSection() {
  const items = visible(experience);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="experience-title" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          id="experience-title"
          eyebrow="Professional Experience"
          title={
            <>
              Career <Accent>timeline.</Accent>
            </>
          }
          description="Roles, responsibilities and contributions across the client's professional career."
        />
        <RevealGroup as="ol" className="mt-12 space-y-3">
          {items.map((x, i) => (
            <RevealItem as="li" key={i} className="glass grid gap-8 rounded-3xl p-7 sm:p-9 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <span className="border-accent/25 text-accent-2 bg-accent/[0.06] inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                  {x.duration}
                </span>
                <h3 className="text-fg mt-4 text-xl font-semibold tracking-tight">{x.title}</h3>
                <p className="text-muted mt-1 text-sm">{x.organization}</p>
                <SampleBadge show={x.sample} className="mt-4" />
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
                <Bullets title="Responsibilities" items={visibleStrings(x.responsibilities ?? [])} />
                <Bullets title="Key Contributions" items={visibleStrings(x.contributions ?? [])} />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
