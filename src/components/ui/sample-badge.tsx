import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

/** Small "Sample" tag shown on placeholder items while placeholder mode is on. */
export function SampleBadge({
  show = true,
  label = "Sample",
  className,
}: {
  show?: boolean;
  tone?: "light" | "dark";
  label?: string;
  className?: string;
}) {
  if (!show || !siteConfig.showPlaceholders) return null;
  return (
    <span
      className={cn(
        "border-accent/40 text-accent-2 inline-flex items-center rounded-full border border-dashed px-2.5 py-0.5 text-[0.62rem] font-semibold tracking-[0.16em] uppercase",
        className,
      )}
    >
      {label}
    </span>
  );
}

/** A note explaining placeholder content, only in placeholder mode. */
export function PlaceholderNote({
  children,
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  if (!siteConfig.showPlaceholders) return null;
  return (
    <p
      className={cn(
        "border-accent/30 text-muted bg-surface/70 rounded-xl border border-dashed px-4 py-3 text-sm leading-relaxed",
        className,
      )}
    >
      {children}
    </p>
  );
}
