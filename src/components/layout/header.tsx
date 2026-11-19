"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-config";
import { display, telLink } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock scroll + Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const phone = display(siteConfig.contact.phone);
  const tel = telLink();

  return (
    <>
      <header
        className={cn(
          "ease-premium fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
          scrolled || open || pathname !== "/"
            ? "border-line bg-ivory/90 border-b shadow-[0_8px_30px_-20px_rgba(16,28,44,0.35)] backdrop-blur-xl"
            : "bg-ivory/0 border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "ease-premium mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 transition-[height] duration-500 sm:px-8 lg:px-10",
            scrolled ? "h-[72px]" : "h-[88px]",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={cn(
                      "relative inline-flex min-h-11 items-center px-4 text-[0.92rem] font-medium transition-colors duration-300",
                      isActive(l.href) ? "text-navy" : "text-slate hover:text-navy",
                    )}
                  >
                    {l.label}
                    {isActive(l.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="bg-gold-deep absolute inset-x-4 bottom-2 h-px"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/contact#inquiry" className="hidden sm:inline-flex">
              Book a Consultation
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden
              />
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="border-navy/15 text-navy hover:border-navy grid size-12 cursor-pointer place-items-center border transition-colors lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="on-dark bg-navy fixed inset-0 z-40 flex flex-col pt-[88px] lg:hidden"
          >
            <div className="hairlines-dark pointer-events-none absolute inset-0" />
            <nav aria-label="Mobile" className="relative flex-1 overflow-y-auto px-5 py-8 sm:px-8">
              <ul className="space-y-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 items-center justify-between border-b border-white/10 font-serif text-4xl",
                        isActive(l.href) ? "text-gold" : "text-ivory",
                      )}
                    >
                      {l.label}
                      <span className="text-slate-light font-sans text-xs tracking-[0.2em]">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative space-y-4 border-t border-white/10 px-5 py-6 sm:px-8"
            >
              <Button
                href="/contact#inquiry"
                variant="gold"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Book a Consultation
              </Button>
              {phone &&
                (tel ? (
                  <a href={tel} className="text-slate-light block text-center text-sm">
                    {phone}
                  </a>
                ) : (
                  <p className="text-slate-light text-center text-sm">{phone}</p>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
