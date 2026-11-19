import type { Metadata } from "next";
import { Suspense } from "react";
import { localTitle, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
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
            Let&apos;s Discuss <span className="text-gold italic">Your Tax Matters.</span>
          </>
        }
        description="Share a few details about your situation. Every inquiry is treated confidentially and answered personally."
      />

      <section id="inquiry" aria-labelledby="inquiry-title" className="bg-ivory scroll-mt-24">
        <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Inquiry Form</Eyebrow>
            <h2 id="inquiry-title" className="text-navy mt-5 mb-10 font-serif text-4xl leading-tight sm:text-5xl">
              Tell us how we can help.
            </h2>
            <Suspense fallback={<div className="border-line h-[640px] border bg-white" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pt-[7.5rem]">
            <ContactDetails />
          </Reveal>
        </Container>
      </section>

      <MapEmbed />
    </>
  );
}
