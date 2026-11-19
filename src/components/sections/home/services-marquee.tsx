import { services } from "@/data/services";
import { Marquee } from "@/components/ui/effects";

/** Scrolling strip of individual services. */
export function ServicesMarquee() {
  const items = services.flatMap((s) => s.services.slice(0, 3));
  return (
    <section aria-label="Services overview" className="border-line relative border-y py-6">
      <Marquee items={items} />
    </section>
  );
}
