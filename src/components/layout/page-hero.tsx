import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** Navy banner used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumb: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="on-dark bg-navy text-ivory relative overflow-hidden pt-[88px]">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(198,166,107,0.16),transparent_65%)]" />
      <Container className="relative pt-14 pb-20 sm:pt-20 sm:pb-24">
        <nav aria-label="Breadcrumb">
          <ol className="text-slate-light flex items-center gap-2 text-xs">
            <li>
              <Link href="/" className="hover:text-gold inline-flex min-h-10 items-center">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="text-ivory/90">
              {crumb}
            </li>
          </ol>
        </nav>
        <Reveal className="mt-8 max-w-4xl">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.04] tracking-[-0.015em] text-balance sm:text-6xl lg:text-[4.4rem]">
            {title}
          </h1>
          {description && (
            <p className="text-slate-light mt-7 max-w-2xl text-lg leading-relaxed text-pretty">{description}</p>
          )}
        </Reveal>
        {children}
      </Container>
      <div aria-hidden className="via-gold/50 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </section>
  );
}
