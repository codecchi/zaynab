import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { display, mailtoLink, telLink, whatsappLink } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-gold text-[0.7rem] font-semibold tracking-[0.24em] uppercase">{children}</h2>;
}

const linkCls =
  "inline-flex min-h-10 items-center py-1.5 leading-snug text-[0.92rem] text-ivory/75 transition-colors duration-300 hover:text-gold";

export function Footer() {
  const { contact, location } = siteConfig;
  const email = display(contact.email);
  const phone = display(contact.phone);
  const address = [display(location.streetAddress), display(`${location.city}, ${location.country}`)]
    .filter(Boolean)
    .join(", ");
  const wa = whatsappLink();
  const mail = mailtoLink();
  const tel = telLink();

  return (
    <footer className="on-dark bg-navy text-ivory relative overflow-hidden">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <Container className="relative">
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="text-slate-light mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              {siteConfig.brand.description}
            </p>
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
            <address className="text-ivory/75 mt-5 space-y-3 text-[0.92rem] not-italic">
              {address && <p>{address}</p>}
              {phone && (
                <p>
                  {tel ? (
                    <a href={tel} className="hover:text-gold">
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
                    <a href={mail} className="hover:text-gold break-all">
                      {email}
                    </a>
                  ) : (
                    email
                  )}
                </p>
              )}
              {contact.businessHours.map(display).filter(Boolean).length > 0 && (
                <div className="text-slate-light pt-2">
                  {contact.businessHours.map((h) => display(h) && <p key={h}>{h}</p>)}
                </div>
              )}
            </address>
            {(wa || siteConfig.showPlaceholders) && (
              <a
                href={wa ?? "/contact"}
                {...(wa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="border-gold/40 text-gold hover:bg-gold hover:text-navy mt-6 inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-semibold transition-colors"
              >
                <MessageCircle className="size-4" aria-hidden />
                {wa ? "Chat on WhatsApp" : `WhatsApp ${contact.whatsappDisplay}`}
              </a>
            )}
          </div>
        </div>

        <div className="text-slate-light flex flex-col gap-3 border-t border-white/10 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.brand.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-gold inline-flex min-h-10 items-center">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
