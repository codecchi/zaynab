import { values } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="why-title"
          align="center"
          eyebrow="Why Choose Us"
          title={
            <>
              Professional Expertise. Transparent Advice. <Accent>Lasting Relationships.</Accent>
            </>
          }
          description="Tax and compliance matters call for precision, discretion and clear communication. These principles shape every engagement."
        />

        <SpotlightGroup className="mt-14">
          <RevealGroup as="ul" stagger={0.06} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <RevealItem
                as="li"
                key={v.title}
                className={`glass spotlight group relative overflow-hidden rounded-3xl p-7 ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                {i === 0 && (
                  <div className="bg-glow-1/80 pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-[80px]" />
                )}
                <span className="border-accent/25 text-accent-2 ease-premium bg-accent/[0.06] relative grid size-12 place-items-center rounded-2xl border transition-transform duration-500 group-hover:scale-110">
                  <Icon name={v.icon} className="size-5" />
                </span>
                <h3
                  className={`text-fg relative mt-7 font-semibold tracking-tight ${i === 0 ? "text-2xl sm:text-[1.7rem]" : "text-lg"}`}
                >
                  {v.title}
                </h3>
                <p
                  className={`text-muted relative mt-2.5 leading-relaxed ${i === 0 ? "max-w-md text-base" : "text-sm"}`}
                >
                  {v.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </SpotlightGroup>
      </Container>
    </section>
  );
}
