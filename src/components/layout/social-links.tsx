import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

/** Social profiles. Networks without a URL show as muted placeholders (placeholder mode) or are hidden. */
export function SocialLinks({ tone = "dark", className }: { tone?: "light" | "dark"; className?: string }) {
  const items = siteConfig.socials.filter((s) => s.href || siteConfig.showPlaceholders);
  if (items.length === 0) return null;
  const dark = tone === "dark";

  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
      {items.map((s) =>
        s.href ? (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-300",
                dark ? "text-ivory/80 hover:text-gold" : "text-navy hover:text-gold-deep",
              )}
            >
              {s.label}
            </a>
          </li>
        ) : (
          <li key={s.label}>
            <span
              title="Link not added yet"
              className={cn("inline-flex min-h-11 items-center text-sm", dark ? "text-white/35" : "text-slate/70")}
            >
              {s.label}
            </span>
          </li>
        ),
      )}
    </ul>
  );
}
