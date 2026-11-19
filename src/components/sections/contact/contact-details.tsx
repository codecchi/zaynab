import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { display, mailtoLink, telLink, whatsappLink } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/layout/social-links";

function Row({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-line bg-surface/70 flex gap-4 rounded-2xl border p-4">
      <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-10 shrink-0 place-items-center rounded-xl border">
        <Icon className="size-[18px]" />
      </span>
      <div className="min-w-0">
        <dt className="text-subtle text-[0.66rem] font-semibold tracking-[0.2em] uppercase">{label}</dt>
        <dd className="text-fg mt-1 text-sm">{children}</dd>
      </div>
    </div>
  );
}

export function ContactDetails() {
  const { contact, location } = siteConfig;
  const address = [display(location.streetAddress), display(`${location.city}, ${location.region}`), location.country]
    .filter(Boolean)
    .join(", ");
  const phone = display(contact.phone);
  const email = display(contact.email);
  const hours = contact.businessHours.map(display).filter(Boolean) as string[];
  const wa = whatsappLink();
  const tel = telLink();
  const mail = mailtoLink();

  return (
    <aside aria-labelledby="details-title" className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
      <div className="bg-glow-1/80 pointer-events-none absolute -top-24 -right-24 size-64 rounded-full blur-[80px]" />
      <div className="relative">
        <h2 id="details-title" className="text-fg text-xl font-semibold tracking-tight">
          Contact Details
        </h2>
        <dl className="mt-6 space-y-2.5">
          {address && (
            <Row icon={MapPin} label="Office Address">
              <address className="not-italic">{address}</address>
            </Row>
          )}
          {phone && (
            <Row icon={Phone} label="Phone">
              {tel ? (
                <a href={tel} className="hover:text-accent-2">
                  {phone}
                </a>
              ) : (
                phone
              )}
            </Row>
          )}
          {(wa || siteConfig.showPlaceholders) && (
            <Row icon={MessageCircle} label="WhatsApp">
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-accent-2">
                  {contact.whatsappDisplay}
                </a>
              ) : (
                contact.whatsappDisplay
              )}
            </Row>
          )}
          {email && (
            <Row icon={Mail} label="Email">
              {mail ? (
                <a href={mail} className="hover:text-accent-2 break-all">
                  {email}
                </a>
              ) : (
                email
              )}
            </Row>
          )}
          {hours.length > 0 && (
            <Row icon={Clock3} label="Business Hours">
              {hours.map((h) => (
                <span key={h} className="block">
                  {h}
                </span>
              ))}
            </Row>
          )}
        </dl>

        {wa && (
          <Button href={wa} size="lg" className="mt-6 w-full">
            <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
          </Button>
        )}

        <div className="mt-8">
          <p className="text-subtle text-[0.66rem] font-semibold tracking-[0.2em] uppercase">Follow</p>
          <SocialLinks className="mt-3" />
        </div>
      </div>
    </aside>
  );
}

export function MapEmbed() {
  const { mapEmbedUrl, mapLink } = siteConfig.contact;
  if (!mapEmbedUrl && !siteConfig.showPlaceholders) return null;

  return (
    <section aria-label="Office location map" className="pb-8">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="glass relative h-[380px] overflow-hidden rounded-[2rem] p-2 sm:h-[440px]">
          <div className="relative h-full overflow-hidden rounded-[1.5rem]">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                title="Office location on Google Maps"
                className="absolute inset-0 size-full border-0 [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.6)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div
                role="img"
                aria-label="Map placeholder"
                className="bg-surface-2 absolute inset-0 grid place-items-center"
              >
                <div className="bg-dots absolute inset-0 opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(141,181,150,0.16),transparent_55%)]" />
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <span className="bg-accent text-on-accent relative grid size-14 place-items-center rounded-full">
                    <span className="animate-pulse-dot absolute inset-0 rounded-full" />
                    <MapPin className="size-6" aria-hidden />
                  </span>
                  <p className="text-subtle text-[0.66rem] font-semibold tracking-[0.24em] uppercase">
                    Google Maps placeholder
                  </p>
                  <p className="text-muted max-w-xs text-sm">
                    Add the embed URL in site-config.ts to show the office location.
                  </p>
                </div>
              </div>
            )}
            {mapLink && (
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong text-fg absolute bottom-5 left-5 rounded-full px-5 py-3 text-sm font-semibold"
              >
                Get Directions
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
