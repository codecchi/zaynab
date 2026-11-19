import { ArrowUpRight } from "lucide-react";
import { values } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="on-dark bg-midnight text-ivory relative overflow-hidden">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <Container className="relative grid gap-14 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            tone="dark"
            eyebrow="Why Choose Us"
            title={
              <span id="why-title">
                Professional Expertise. Transparent Advice.{" "}
                <span className="text-gold italic">Lasting Relationships.</span>
              </span>
            }
            description="Tax and compliance matters call for precision, discretion and clear communication. These principles shape every engagement."
          />
          <Button href="/about" variant="outline-light" className="mt-10">
            Our Approach
            <ArrowUpRight className="size-4" aria-hidden />
          </Button>
        </div>

        <div className="lg:col-span-7">
          <RevealGroup as="ul" stagger={0.06} className="border-t border-white/10">
            {values.map((v, i) => (
              <RevealItem
                as="li"
                key={v.title}
                className="group grid grid-cols-[auto_1fr] gap-5 border-b border-white/10 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-7"
              >
                <span className="border-gold/30 text-gold group-hover:border-gold group-hover:bg-gold group-hover:text-navy grid size-12 place-items-center border transition-colors duration-500">
                  <Icon name={v.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight">{v.title}</h3>
                  <p className="text-slate-light mt-2 max-w-lg text-[0.95rem] leading-relaxed">{v.description}</p>
                </div>
                <span aria-hidden className="hidden font-serif text-lg text-white/25 sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
