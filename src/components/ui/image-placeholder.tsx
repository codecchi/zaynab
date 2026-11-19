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
    <div className={cn("relative overflow-hidden bg-[#ecebe5]", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="ease-premium object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div role="img" aria-label={label} className="absolute inset-0 grid place-items-center">
          <div className="hairlines absolute inset-0" />
          <div className="border-navy/10 absolute inset-6 border" />
          <span className="text-slate relative text-[0.65rem] font-semibold tracking-[0.24em] uppercase">{label}</span>
        </div>
      )}
    </div>
  );
}
