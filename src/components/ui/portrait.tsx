import Image from "next/image";
import { profile } from "@/data/profile";
import { initials } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The client's portrait. Uses `profile.portrait` when set; otherwise a neutral,
 * clearly labelled placeholder (no stock photography).
 */
export function Portrait({
  className,
  priority,
  sizes = "(min-width: 1024px) 40vw, 90vw",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const alt = `Portrait of ${profile.fullName.replace(/[[\]]/g, "")}`;

  return (
    <div className={cn("bg-surface-2 relative overflow-hidden", className)}>
      {profile.portrait ? (
        <Image src={profile.portrait} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div role="img" aria-label="Portrait placeholder" className="absolute inset-0">
          <div className="bg-dots absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(141,181,150,0.22),transparent_60%)]" />
          <svg
            viewBox="0 0 200 250"
            className="text-accent/[0.08] absolute inset-x-0 bottom-0 mx-auto h-[76%] w-auto"
            aria-hidden
          >
            <circle cx="100" cy="82" r="42" fill="currentColor" />
            <path d="M18 250c0-58 37-98 82-98s82 40 82 98z" fill="currentColor" />
          </svg>
          <div className="absolute inset-x-0 top-[34%] flex flex-col items-center gap-3">
            <span className="text-accent-gradient font-display text-5xl font-bold">{initials(profile.fullName)}</span>
            <span className="text-subtle text-[0.62rem] font-semibold tracking-[0.24em] uppercase">
              Portrait placeholder
            </span>
          </div>
        </div>
      )}
      <div aria-hidden className="ring-line pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset" />
    </div>
  );
}
