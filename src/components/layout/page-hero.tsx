import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Aurora } from "@/components/ui/effects";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** Hero banner for inner pages: aurora glow, grid, centred gradient headline. */
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
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <Aurora intensity="soft" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <Container className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="text-subtle flex items-center gap-2 text-xs">
              <li>
                <Link href="/" className="hover:text-fg inline-flex min-h-10 items-center">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="text-muted">
                {crumb}
              </li>
            </ol>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display text-gradient mt-7 pb-2 text-[2.5rem] leading-[1.03] font-bold text-balance sm:text-6xl lg:text-[4.6rem]">
            {title}
          </h1>
          {description && (
            <p className="text-muted mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">{description}</p>
          )}
        </Reveal>
        {children}
      </Container>
      <div aria-hidden className="via-accent/25 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </section>
  );
}
