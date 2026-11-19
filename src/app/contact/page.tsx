import type { Metadata } from "next";
import { Suspense } from "react";
import { localTitle, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Accent } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactDetails, MapEmbed } from "@/components/sections/contact/contact-details";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Book a Consultation",
  description: `Book a confidential consultation with a ${localTitle()}. Ask about tax return filing, NTN or SECP registration, sales tax, FBR notices and business advisory.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Book a Consultation"
        title={
          <>
            Let&apos;s discuss <Accent>your tax matters.</Accent>
          </>
        }
        description="Share a few details about your situation. Every inquiry is treated confidentially and answered personally."
      />

      <section id="inquiry" aria-labelledby="inquiry-title" className="scroll-mt-24 py-16 sm:py-20">
        <Container className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 id="inquiry-title" className="sr-only">
              Inquiry form
            </h2>
            <Suspense fallback={<div className="glass h-[640px] rounded-[2rem]" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <ContactDetails />
          </Reveal>
        </Container>
      </section>

      <MapEmbed />
    </>
  );
}
