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
    <div className={cn("bg-midnight relative overflow-hidden", className)}>
      {profile.portrait ? (
        <Image src={profile.portrait} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div role="img" aria-label="Portrait placeholder" className="absolute inset-0">
          <div className="hairlines-dark absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(198,166,107,0.18),transparent_60%)]" />
          {/* Neutral silhouette */}
          <svg
            viewBox="0 0 200 250"
            className="absolute inset-x-0 bottom-0 mx-auto h-[78%] w-auto text-white/[0.07]"
            aria-hidden
          >
            <circle cx="100" cy="82" r="42" fill="currentColor" />
            <path d="M18 250c0-58 37-98 82-98s82 40 82 98z" fill="currentColor" />
          </svg>
          <div className="absolute inset-x-0 top-[38%] flex flex-col items-center gap-3">
            <span className="text-gold/80 font-serif text-5xl">{initials(profile.fullName)}</span>
            <span className="text-slate-light text-[0.65rem] font-semibold tracking-[0.24em] uppercase">
              Portrait placeholder
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
