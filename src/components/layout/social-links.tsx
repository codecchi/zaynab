import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

/** Social profiles. Networks without a URL show as muted placeholders (placeholder mode) or are hidden. */
export function SocialLinks({ className }: { className?: string }) {
  const items = siteConfig.socials.filter((s) => s.href || siteConfig.showPlaceholders);
  if (items.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((s) =>
        s.href ? (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-line text-muted hover:text-fg bg-surface/70 hover:border-accent/30 inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-medium transition-colors duration-300"
            >
              {s.label}
            </a>
          </li>
        ) : (
          <li key={s.label}>
            <span
              title="Link not added yet"
              className="border-line text-subtle/70 inline-flex min-h-10 items-center rounded-full border border-dashed px-4 text-sm"
            >
              {s.label}
            </span>
          </li>
        ),
      )}
    </ul>
  );
}
