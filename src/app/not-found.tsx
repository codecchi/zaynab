import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Aurora } from "@/components/ui/effects";
import { Accent, Eyebrow } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden pt-28">
      <Aurora />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <Container className="relative flex flex-col items-center py-24 text-center">
        <p
          aria-hidden
          className="font-display from-accent/25 bg-gradient-to-b to-transparent bg-clip-text text-[9rem] leading-none font-bold tracking-[-0.06em] text-transparent select-none sm:text-[13rem]"
        >
          404
        </p>
        <Eyebrow className="-mt-4">Page not found</Eyebrow>
        <h1 className="font-display text-gradient mt-6 max-w-2xl pb-1 text-4xl leading-[1.05] font-bold sm:text-6xl">
          This page could not be <Accent>found.</Accent>
        </h1>
        <p className="text-muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
          The page may have moved, or the address may be mistyped. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="/" size="lg">
            <ArrowLeft className="size-4" aria-hidden /> Back to Home
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            View Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
