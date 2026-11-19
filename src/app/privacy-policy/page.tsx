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
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <div className="glass sticky top-28 rounded-3xl p-5">
              <p className="text-subtle text-[0.66rem] font-semibold tracking-[0.2em] uppercase">On this page</p>
              <ol className="mt-4 space-y-0.5">
                {privacy.sections.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#section-${i + 1}`}
                      className="text-muted hover:text-fg hover:bg-accent/[0.05] block rounded-xl px-3 py-2 text-sm transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <article className="glass rounded-[2rem] p-7 sm:p-10 lg:col-span-9">
            <PlaceholderNote className="mb-10">
              Template policy — have it reviewed and adapted to the practice&apos;s actual data handling before
              publishing.
            </PlaceholderNote>
            {privacy.sections.map((s, i) => (
              <section
                key={s.title}
                id={`section-${i + 1}`}
                className="border-line scroll-mt-32 border-t py-9 last:pb-0 first-of-type:border-t-0 first-of-type:pt-0"
              >
                <h2 className="text-fg text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="text-accent-gradient mr-3">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="text-muted mt-4 space-y-4 leading-relaxed">
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
