import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Aurora } from "@/components/ui/effects";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** Closing call to action — a glowing card with a rotating light beam. */
export function CtaBand({
  eyebrow = "Book a Consultation",
  title = "Let's Simplify Your Tax & Business Compliance.",
  description = "Whether you are establishing a new business, managing tax obligations, or seeking professional financial guidance, take the next step with confidence.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const wa = whatsappLink();
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="beam theme-deep bg-bg relative overflow-hidden rounded-[2rem] px-6 py-20 sm:px-12 sm:py-24">
          <Aurora />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="font-display text-gradient mt-7 pb-1 text-[2.3rem] leading-[1.04] font-bold text-balance sm:text-6xl">
              {title}
            </h2>
            <p className="text-muted mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">{description}</p>
            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button href="/contact#inquiry" size="lg">
                Schedule a Consultation
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent-2 mt-6 inline-flex min-h-11 items-center gap-2 text-sm"
              >
                <MessageCircle className="size-4" aria-hidden /> Prefer WhatsApp? Message us directly
              </a>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
