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

/** Floating glass navigation pill. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={cn(
            "ease-premium mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full border pr-2 pl-4 transition-[background-color,border-color,box-shadow] duration-500 sm:pl-5",
            scrolled || open
              ? "border-line-strong bg-surface/85 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-line bg-surface/70 backdrop-blur-md",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block" onMouseLeave={() => setHovered(null)}>
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => {
                const active = isActive(l.href);
                return (
                  <li key={l.href} onMouseEnter={() => setHovered(l.href)}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex min-h-10 items-center rounded-full px-4 text-[0.88rem] font-medium transition-colors duration-300",
                        active ? "text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      {(hovered ?? (active ? l.href : null)) === l.href && (
                        <motion.span
                          layoutId="nav-pill"
                          className="bg-accent/[0.07] ring-line absolute inset-0 rounded-full ring-1"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="relative">{l.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/contact#inquiry" className="hidden min-h-11 px-5 text-[0.85rem] sm:inline-flex">
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
              className="border-line-strong text-fg bg-surface/70 hover:bg-accent/[0.06] grid size-12 cursor-pointer place-items-center rounded-full border transition-colors lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </motion.header>

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
            className="bg-bg/95 fixed inset-0 z-40 flex flex-col pt-24 backdrop-blur-2xl lg:hidden"
          >
            <div className="bg-grid pointer-events-none absolute inset-0" />
            <nav aria-label="Mobile" className="relative flex-1 overflow-y-auto px-5 py-6 sm:px-8">
              <ul className="space-y-2">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={cn(
                        "glass flex min-h-16 items-center justify-between rounded-2xl px-5 text-2xl font-semibold tracking-tight",
                        isActive(l.href) ? "text-accent-2" : "text-fg",
                      )}
                    >
                      {l.label}
                      <ArrowUpRight className="text-subtle size-5" aria-hidden />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative space-y-4 px-5 pb-8 sm:px-8"
            >
              <Button href="/contact#inquiry" size="lg" className="w-full" onClick={() => setOpen(false)}>
                Book a Consultation
              </Button>
              {phone &&
                (tel ? (
                  <a href={tel} className="text-muted block text-center text-sm">
                    {phone}
                  </a>
                ) : (
                  <p className="text-muted text-center text-sm">{phone}</p>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
