import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Logo({ className, onClick, compact }: { className?: string; onClick?: () => void; compact?: boolean }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.brand.name} — home`}
      className={cn("group inline-flex min-h-11 items-center gap-3", className)}
    >
      <span
        aria-hidden
        className="bg-brand text-on-accent relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl text-[0.8rem] font-bold shadow-[0_0_24px_-4px_rgba(141,181,150,0.6)]"
      >
        {siteConfig.brand.monogram}
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/30 ring-inset" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-fg text-[0.98rem] font-semibold tracking-tight">{siteConfig.brand.name}</span>
        {!compact && (
          <span className="text-subtle mt-1 hidden text-[0.56rem] font-semibold tracking-[0.2em] uppercase min-[420px]:block">
            {siteConfig.brand.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
