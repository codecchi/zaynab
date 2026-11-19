import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** Closing call to action — used on every page. */
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
    <section className="on-dark bg-midnight text-ivory relative overflow-hidden">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-64 left-1/2 size-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,166,107,0.14),transparent_60%)]" />
      <Container className="relative py-24 sm:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="dark" className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2 className="mt-6 font-serif text-[2.4rem] leading-[1.06] text-balance sm:text-6xl">{title}</h2>
          <p className="text-slate-light mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty">{description}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact#inquiry" variant="gold" size="lg">
              Schedule a Consultation
              <ArrowUpRight className="size-4" aria-hidden />
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-gold mt-6 inline-flex min-h-11 items-center gap-2 text-sm"
            >
              <MessageCircle className="size-4" aria-hidden /> Prefer WhatsApp? Message us directly
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
