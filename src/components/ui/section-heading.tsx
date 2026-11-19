import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Glass pill label with a pulsing leaf-green dot. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "border-line-strong text-accent-2 bg-surface/70 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-md",
        className,
      )}
    >
      <span aria-hidden className="bg-highlight animate-pulse-dot size-1.5 rounded-full" />
      {children}
    </p>
  );
}

/** White-to-mint gradient accent for part of a heading. */
export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-accent-gradient">{children}</span>;
}

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

/** Section title: pill eyebrow, gradient headline, muted description. */
export function SectionHeading({ eyebrow, title, description, align = "left", as = "h2", id, className }: Props) {
  const Heading = as;
  const center = align === "center";
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto flex flex-col items-center text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className="font-display text-gradient mt-6 pb-1 text-[2.1rem] leading-[1.06] text-balance sm:text-5xl lg:text-[3.4rem]"
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("text-muted mt-5 text-base leading-relaxed text-pretty sm:text-lg", center && "max-w-2xl")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
