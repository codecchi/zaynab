import type { Metadata } from "next";
import { Info } from "lucide-react";
import { services, servicesDisclaimer } from "@/data/services";
import { localTitle, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Accent } from "@/components/ui/section-heading";
import { CategoryNav } from "@/components/sections/services/category-nav";
import { CategorySection } from "@/components/sections/services/category-section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = pageMetadata({
  title: "Tax, Compliance & Business Advisory Services",
  description: `${localTitle("Tax services")}: NTN registration, SECP company incorporation, FBR tax return filing, sales tax, bookkeeping, FBR notice assistance, tax planning and corporate documentation.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Service Catalogue"
        title={
          <>
            Professional services for <Accent>every stage of business.</Accent>
          </>
        }
        description="For salaried professionals, freelancers, entrepreneurs and companies — seven practice areas covering registration, filing, compliance and advisory."
      />
      <div className="pt-8">
        <CategoryNav />
        <div className="pt-6">
          {services.map((s, i) => (
            <CategorySection key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
      <section aria-label="Disclaimer" className="pt-6">
        <Container>
          <p className="glass text-muted flex gap-4 rounded-2xl p-5 text-sm leading-relaxed sm:p-6">
            <Info className="text-accent-2 mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              <strong className="text-fg font-semibold">Disclaimer: </strong>
              {servicesDisclaimer}
            </span>
          </p>
        </Container>
      </section>
      <CtaBand
        eyebrow="Request Assistance"
        title="Discuss the Right Service for You."
        description="Tell us about your situation and we will recommend a clear, practical way forward."
      />
    </>
  );
}
