import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { localTitle, pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/hero";
import { ServicesMarquee } from "@/components/sections/home/services-marquee";
import { Highlights } from "@/components/sections/home/highlights";
import { Introduction } from "@/components/sections/home/introduction";
import { Expertise } from "@/components/sections/home/expertise";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { Journey } from "@/components/sections/home/journey";
import { Work } from "@/components/sections/home/work";
import { Testimonials } from "@/components/sections/home/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${localTitle()} — Tax, Compliance & Business Advisory`,
    description: `${siteConfig.brand.description} FBR tax return filing, NTN and SECP registration, sales tax, bookkeeping and tax advisory.`,
    path: "/",
  }),
  title: { absolute: `${localTitle()} — Tax, Compliance & Business Advisory | ${siteConfig.brand.name}` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <Highlights />
      <Introduction />
      <Expertise />
      <WhyChoose />
      <Journey />
      <Work />
      <Testimonials />
      <CtaBand />
    </>
  );
}
