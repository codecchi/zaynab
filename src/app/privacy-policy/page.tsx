import type { Metadata } from "next";
import { privacy } from "@/data/privacy";
import { siteConfig } from "@/data/site-config";
import { display } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { PlaceholderNote } from "@/components/ui/sample-badge";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.brand.name} collects, uses and protects personal information shared through this website.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  const updated = display(privacy.lastUpdated);
  return (
    <>
      <PageHero
        crumb="Privacy Policy"
        eyebrow="Legal"
        title="Privacy Policy"
        description={updated ? `Last updated: ${updated}` : undefined}
      />
      <section className="bg-white">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32">
              <p className="text-gold-deep text-[0.7rem] font-semibold tracking-[0.22em] uppercase">On this page</p>
              <ol className="border-line mt-4 space-y-1 border-l">
                {privacy.sections.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-slate hover:border-gold-deep hover:text-navy -ml-px block border-l border-transparent py-1.5 pl-4 text-sm"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <article className="max-w-3xl lg:col-span-9">
            <PlaceholderNote className="mb-12">
              Template policy — have it reviewed and adapted to the practice&apos;s actual data handling before
              publishing.
            </PlaceholderNote>
            {privacy.sections.map((s, i) => (
              <section
                key={s.title}
                id={`section-${i + 1}`}
                className="border-line scroll-mt-32 border-t py-10 first-of-type:border-t-0 first-of-type:pt-0"
              >
                <h2 className="text-navy font-serif text-3xl">
                  <span className="text-gold-deep mr-3">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="text-slate mt-5 space-y-4 text-[1.05rem] leading-relaxed">
                  {s.body.map((p, j) => (
                    <p key={j}>{p.replace("{brand}", siteConfig.brand.name)}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
