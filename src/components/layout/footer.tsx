import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { display, mailtoLink, telLink, whatsappLink } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-subtle text-[0.68rem] font-semibold tracking-[0.22em] uppercase">{children}</h2>;
}

const linkCls =
  "inline-flex min-h-9 items-center py-1 text-[0.9rem] leading-snug text-muted transition-colors duration-300 hover:text-fg";

export function Footer() {
  const { contact, location } = siteConfig;
  const email = display(contact.email);
  const phone = display(contact.phone);
  const address = [display(location.streetAddress), display(`${location.city}, ${location.country}`)]
    .filter(Boolean)
    .join(", ");
  const hours = contact.businessHours.map(display).filter(Boolean) as string[];
  const wa = whatsappLink();
  const mail = mailtoLink();
  const tel = telLink();

  return (
    <footer className="theme-deep relative overflow-hidden">
      <div className="via-accent/25 pointer-events-none absolute -top-px left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />
      <div className="bg-glow-2/60 pointer-events-none absolute -top-40 left-1/2 h-80 w-[60vw] -translate-x-1/2 rounded-full blur-[120px]" />

      <Container className="relative">
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-muted mt-6 max-w-sm text-[0.92rem] leading-relaxed">{siteConfig.brand.description}</p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <FooterHeading>Navigate</FooterHeading>
            <ul className="mt-5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className={linkCls}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className={linkCls}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <address className="text-muted mt-5 space-y-3 text-[0.9rem] not-italic">
              {address && <p>{address}</p>}
              {phone && (
                <p>
                  {tel ? (
                    <a href={tel} className="hover:text-fg">
                      {phone}
                    </a>
                  ) : (
                    phone
                  )}
                </p>
              )}
              {email && (
                <p>
                  {mail ? (
                    <a href={mail} className="hover:text-fg break-all">
                      {email}
                    </a>
                  ) : (
                    email
                  )}
                </p>
              )}
              {hours.length > 0 && (
                <div className="text-subtle pt-1">
                  {hours.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                </div>
              )}
            </address>
            {(wa || siteConfig.showPlaceholders) && (
              <a
                href={wa ?? "/contact"}
                {...(wa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="border-accent/30 text-accent-2 hover:border-accent/60 bg-accent/[0.05] hover:bg-accent/[0.1] mt-6 inline-flex min-h-11 items-center gap-2 rounded-2xl border px-4 py-2 text-left text-sm font-semibold transition-colors"
              >
                <MessageCircle className="size-4" aria-hidden />
                {wa ? "Chat on WhatsApp" : `WhatsApp ${contact.whatsappDisplay}`}
              </a>
            )}
          </div>
        </div>

        {/* Oversized wordmark */}
        <p
          aria-hidden
          className="font-display from-accent/[0.12] pointer-events-none -mb-[0.18em] overflow-hidden bg-gradient-to-b to-transparent bg-clip-text text-center text-[10.5vw] leading-[1.1] font-bold tracking-[-0.06em] whitespace-nowrap text-transparent select-none lg:text-[8.5rem]"
        >
          {siteConfig.brand.name}
        </p>

        <div className="border-line text-subtle flex flex-col gap-3 border-t py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.brand.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-fg inline-flex min-h-10 items-center gap-1">
            Privacy Policy <ArrowUpRight className="size-3" aria-hidden />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
