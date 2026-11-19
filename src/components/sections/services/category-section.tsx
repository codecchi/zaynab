import { ArrowUpRight, Check } from "lucide-react";
import type { ServiceCategory } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function CategorySection({ service, index }: { service: ServiceCategory; index: number }) {
  const alt = index % 2 === 1;
  return (
    <section
      id={service.slug}
      aria-labelledby={`${service.slug}-title`}
      className={cn("scroll-mt-36", alt ? "bg-ivory" : "bg-white")}
    >
      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-44">
            <div className="flex items-center gap-5">
              <span className="bg-navy text-gold grid size-16 place-items-center">
                <Icon name={service.icon} className="size-7" />
              </span>
              <span className="text-line font-serif text-5xl" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2
              id={`${service.slug}-title`}
              className="text-navy mt-8 font-serif text-[2.1rem] leading-[1.1] text-balance sm:text-[2.6rem]"
            >
              {service.title}
            </h2>
            <p className="text-slate mt-6 text-lg leading-relaxed text-pretty">{service.intro}</p>
            <Button href={`/contact?service=${service.slug}#inquiry`} className="mt-9">
              Request Assistance
              <ArrowUpRight className="size-4" aria-hidden />
            </Button>
          </div>
        </Reveal>

        <div className="space-y-12 lg:col-span-7">
          <Reveal delay={0.1}>
            <h3 className="text-gold-deep text-[0.72rem] font-semibold tracking-[0.24em] uppercase">
              Services Included
            </h3>
            <ul className="border-line mt-6 grid border-t sm:grid-cols-2">
              {service.services.map((item) => (
                <li key={item} className="border-line flex items-center gap-4 border-b py-5 sm:odd:pr-6 sm:even:pl-6">
                  <span aria-hidden className="bg-gold-deep h-px w-5 shrink-0" />
                  <span className="text-navy font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className={cn("p-8 sm:p-10", alt ? "bg-white" : "bg-ivory")}>
            <h3 className="text-gold-deep text-[0.72rem] font-semibold tracking-[0.24em] uppercase">How You Benefit</h3>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="text-navy flex gap-4 leading-relaxed">
                  <span className="bg-navy text-gold mt-0.5 grid size-5 shrink-0 place-items-center">
                    <Check className="size-3" strokeWidth={2.5} aria-hidden />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
