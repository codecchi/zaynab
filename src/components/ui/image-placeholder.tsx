import Image from "next/image";
import { cn } from "@/lib/utils";

/** Renders an image when a path is set, otherwise a neutral labelled placeholder. */
export function MediaFrame({
  src,
  alt,
  label = "Image placeholder",
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string | null | undefined;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={cn("bg-surface-2 relative overflow-hidden", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="ease-premium object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div role="img" aria-label={label} className="absolute inset-0 grid place-items-center">
          <div className="bg-dots absolute inset-0 opacity-70" />
          <div className="ease-premium absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(74,105,88,0.25),transparent_60%)] transition-opacity duration-700 group-hover:opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_90%,rgba(141,181,150,0.18),transparent_55%)]" />
          <span className="text-subtle relative text-[0.62rem] font-semibold tracking-[0.24em] uppercase">{label}</span>
        </div>
      )}
      <div aria-hidden className="ring-line pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset" />
    </div>
  );
}
