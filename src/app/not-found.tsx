import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="on-dark bg-navy text-ivory relative flex min-h-[80svh] items-center overflow-hidden pt-[88px]">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-4%] -translate-y-1/2 font-serif text-[38vw] leading-none text-white/[0.03] select-none"
      >
        404
      </span>
      <Container className="relative py-24">
        <Eyebrow tone="dark">Error 404</Eyebrow>
        <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-7xl">
          This page could not be <span className="text-gold italic">found.</span>
        </h1>
        <p className="text-slate-light mt-6 max-w-lg text-lg leading-relaxed">
          The page may have moved, or the address may be mistyped. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="lg">
            <ArrowLeft className="size-4" aria-hidden /> Back to Home
          </Button>
          <Button href="/services" variant="outline-light" size="lg">
            View Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
