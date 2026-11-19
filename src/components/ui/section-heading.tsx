import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.24em] uppercase",
        tone === "dark" ? "text-gold" : "text-gold-deep",
        className,
      )}
    >
      <span aria-hidden className={cn("h-px w-8", tone === "dark" ? "bg-gold" : "bg-gold-deep")} />
      {children}
    </p>
  );
}

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  as = "h2",
  className,
}: Props) {
  const Heading = as;
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} className={cn(align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        className={cn(
          "mt-5 font-serif text-[2.25rem] leading-[1.08] tracking-[-0.01em] text-balance sm:text-5xl lg:text-[3.4rem]",
          tone === "dark" ? "text-ivory" : "text-navy",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-6 text-[1.05rem] leading-relaxed text-pretty sm:text-lg",
            tone === "dark" ? "text-slate-light" : "text-slate",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
