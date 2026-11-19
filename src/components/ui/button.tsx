import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn relative inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full px-6 text-[0.92rem] font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-premium active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        /** Mint gradient with soft glow with soft lift + light sweep */
        primary:
          "bg-accent-gradient text-on-accent shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] hover:-translate-y-0.5",
        /** Frosted glass */
        secondary:
          "border border-line-strong bg-surface/70 text-fg backdrop-blur-md hover:border-accent/30 hover:bg-accent/[0.06]",
        ghost: "min-h-11 px-0 text-fg hover:text-accent-2",
      },
      size: {
        md: "",
        lg: "min-h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = VariantProps<typeof buttonVariants> & {
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

function Shine({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <span
      aria-hidden
      className="animate-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
    />
  );
}

export function Button({ href, external, variant, size, className, children, ...rest }: Props) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = (
    <>
      <Shine show={(variant ?? "primary") === "primary"} />
      <span className="relative inline-flex items-center gap-2.5">{children}</span>
    </>
  );
  if (href) {
    if (external || /^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
