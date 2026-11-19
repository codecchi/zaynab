import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "light",
  className,
  onClick,
}: {
  tone?: "light" | "dark";
  className?: string;
  onClick?: () => void;
}) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.brand.name} — home`}
      className={cn("group inline-flex min-h-11 items-center gap-3", className)}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-10 shrink-0 place-items-center border font-serif text-lg leading-none transition-colors duration-300",
          dark ? "border-gold/60 text-gold" : "border-navy/80 bg-navy text-gold group-hover:bg-midnight",
        )}
      >
        {siteConfig.brand.monogram}
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-serif text-[1.2rem] tracking-tight", dark ? "text-ivory" : "text-navy")}>
          {siteConfig.brand.name}
        </span>
        <span
          className={cn(
            "mt-1.5 hidden text-[0.6rem] font-semibold tracking-[0.22em] uppercase min-[420px]:block",
            dark ? "text-slate-light" : "text-slate",
          )}
        >
          {siteConfig.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
