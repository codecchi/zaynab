import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group/btn relative inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 overflow-hidden px-6 text-[0.95rem] font-semibold tracking-[0.01em] whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-premium disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-navy text-ivory hover:bg-midnight hover:shadow-[0_10px_30px_-12px_rgba(16,28,44,0.55)]",
        gold: "bg-gold text-navy hover:bg-[#d2b57e] hover:shadow-[0_10px_30px_-12px_rgba(198,166,107,0.6)]",
        outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
        "outline-light": "border border-white/25 text-ivory hover:border-gold hover:text-gold",
        link: "min-h-11 px-0 text-navy underline-offset-[6px] hover:underline",
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

export function Button({ href, external, variant, size, className, children, ...rest }: Props) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    if (external || /^(https?:|mailto:|tel:)/.test(href)) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
