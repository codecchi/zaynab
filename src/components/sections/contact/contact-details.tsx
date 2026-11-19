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
    <div className="flex gap-5 border-b border-white/10 py-6">
      <span className="border-gold/30 text-gold grid size-11 shrink-0 place-items-center border">
        <Icon className="size-[18px]" />
      </span>
      <div className="min-w-0">
        <dt className="text-slate-light text-[0.7rem] font-semibold tracking-[0.22em] uppercase">{label}</dt>
        <dd className="text-ivory mt-1.5">{children}</dd>
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
    <aside aria-labelledby="details-title" className="on-dark bg-navy text-ivory relative overflow-hidden p-7 sm:p-10">
      <div className="hairlines-dark pointer-events-none absolute inset-0" />
      <div className="relative">
        <h2 id="details-title" className="font-serif text-3xl">
          Contact Details
        </h2>
        <dl className="mt-6 border-t border-white/10">
          {address && (
            <Row icon={MapPin} label="Office Address">
              <address className="not-italic">{address}</address>
            </Row>
          )}
          {phone && (
            <Row icon={Phone} label="Phone">
              {tel ? (
                <a href={tel} className="hover:text-gold">
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
                <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
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
                <a href={mail} className="hover:text-gold break-all">
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
          <Button href={wa} variant="gold" size="lg" className="mt-8 w-full">
            <MessageCircle className="size-4" aria-hidden /> Chat on WhatsApp
          </Button>
        )}

        <div className="mt-8">
          <p className="text-slate-light text-[0.7rem] font-semibold tracking-[0.22em] uppercase">Follow</p>
          <SocialLinks className="mt-2" />
        </div>
      </div>
    </aside>
  );
}

export function MapEmbed() {
  const { mapEmbedUrl, mapLink } = siteConfig.contact;
  if (!mapEmbedUrl && !siteConfig.showPlaceholders) return null;

  return (
    <section aria-label="Office location map" className="bg-ivory">
      <div className="relative h-[380px] w-full sm:h-[460px]">
        {mapEmbedUrl ? (
          <iframe
            src={mapEmbedUrl}
            title="Office location on Google Maps"
            className="absolute inset-0 size-full border-0 grayscale-[35%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div
            role="img"
            aria-label="Map placeholder"
            className="hairlines absolute inset-0 grid place-items-center bg-[#ecebe5]"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="bg-navy text-gold grid size-14 place-items-center">
                <MapPin className="size-6" aria-hidden />
              </span>
              <p className="text-slate text-[0.7rem] font-semibold tracking-[0.24em] uppercase">
                Google Maps placeholder
              </p>
              <p className="text-slate max-w-xs text-sm">
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
            className="bg-navy text-ivory hover:bg-midnight absolute bottom-6 left-6 px-5 py-3 text-sm font-semibold"
          >
            Get Directions
          </a>
        )}
      </div>
    </section>
  );
}
