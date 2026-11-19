import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

/** Small "Sample" tag shown on placeholder items while placeholder mode is on. */
export function SampleBadge({
  show = true,
  tone = "light",
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
        "inline-flex items-center border border-dashed px-2 py-0.5 text-[0.65rem] font-semibold tracking-[0.16em] uppercase",
        tone === "dark" ? "border-gold/50 text-gold" : "border-gold-deep/50 text-gold-deep",
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
  tone = "light",
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
        "border-l-2 pl-4 text-sm leading-relaxed",
        tone === "dark" ? "border-gold/60 text-slate-light" : "border-gold-deep/60 text-slate",
        className,
      )}
    >
      {children}
    </p>
  );
}
