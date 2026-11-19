"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  FileCheck,
  Laptop,
  Lock,
  MapPin,
  MessagesSquare,
  Search,
  User,
} from "lucide-react";
import { profile } from "@/data/profile";
import { display, locationLabel } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Aurora } from "@/components/ui/effects";
import { Portrait } from "@/components/ui/portrait";
import { Eyebrow } from "@/components/ui/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease },
});

/** How an engagement runs — an illustrative process, not client data. */
const flow = [
  { icon: MessagesSquare, title: "Consultation", text: "Understand your situation and obligations" },
  { icon: Search, title: "Review", text: "Examine records and documents in detail" },
  { icon: FileCheck, title: "File & Register", text: "Prepare and submit with care" },
  { icon: Lock, title: "Ongoing Support", text: "Deadlines, notices and follow-ups" },
];

const audiences = [
  { icon: User, label: "Individuals" },
  { icon: Laptop, label: "Freelancers" },
  { icon: Briefcase, label: "Businesses" },
];

const chips = ["FBR", "SECP", "STRN", "PSEB", "WeBOC"];

export function Hero() {
  const name = display(profile.fullName);
  const designation = display(profile.designation);
  const reduce = useReducedMotion();
  const showcase = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: showcase, offset: ["start end", "start 35%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <Aurora />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div {...rise(0.05)}>
            <Eyebrow>
              Tax · Compliance · Advisory <span className="text-subtle hidden sm:inline">—</span>{" "}
              <span className="hidden sm:inline">{locationLabel()}</span>
            </Eyebrow>
          </motion.div>

          <h1 className="font-display mt-8 text-[2.6rem] leading-[1] font-bold tracking-[-0.045em] sm:text-[4.2rem] lg:text-[5.6rem]">
            <motion.span {...rise(0.15)} className="text-gradient block pb-1">
              Strategic Tax Solutions.
            </motion.span>
            <motion.span {...rise(0.28)} className="text-accent-gradient block pb-2">
              Trusted Professional Guidance.
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.42)}
            className="text-muted mt-7 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg"
          >
            Comprehensive taxation, corporate compliance, and business advisory solutions designed to simplify financial
            complexities and empower confident business decisions.
          </motion.p>

          <motion.div {...rise(0.54)} className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/contact#inquiry" size="lg">
              Book a Consultation
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden
              />
            </Button>
            <Button href="/#expertise" variant="secondary" size="lg">
              Explore Our Expertise
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden
              />
            </Button>
          </motion.div>

          {(name || designation) && (
            <motion.p {...rise(0.66)} className="text-subtle mt-8 text-sm">
              {name && <span className="text-fg font-semibold">{name}</span>}
              {name && designation && <span className="mx-2">·</span>}
              {designation}
            </motion.p>
          )}
        </div>

        {/* Product-style showcase */}
        <div ref={showcase} className="relative mx-auto mt-16 max-w-6xl sm:mt-20 md:[perspective:1600px]">
          <div aria-hidden className="bg-glow-1/80 absolute inset-x-[10%] -top-10 h-40 rounded-full blur-[90px]" />
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            style={reduce ? undefined : { rotateX, scale, transformOrigin: "50% 0%" }}
            className="glass relative rounded-[1.75rem] p-2.5 sm:p-3"
          >
            {/* Floating registration chips */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
              {chips.map((c, i) => (
                <span
                  key={c}
                  style={{
                    top: `${[8, 30, 62, 18, 78][i]}%`,
                    [i % 2 === 0 ? "left" : "right"]: `${[-3.5, -3.5, -2.5, -2.5, -3][i]}%`,
                    animationDelay: `${i * 0.9}s`,
                  }}
                  className="glass-strong animate-float text-accent-2 absolute z-10 rounded-full px-4 py-2 text-xs font-bold tracking-[0.16em]"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[0.9fr_1.4fr]">
              {/* Portrait tile */}
              <div className="theme-deep relative overflow-hidden rounded-[1.25rem]">
                <Portrait priority className="aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[460px]" />
                <div className="from-bg via-bg/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-5 pt-16">
                  {name && <p className="text-fg text-lg font-semibold">{name}</p>}
                  {designation && (
                    <p className="text-accent-2 mt-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase">
                      {designation}
                    </p>
                  )}
                  <p className="text-muted mt-3 flex items-center gap-2 text-xs">
                    <MapPin className="size-3.5" aria-hidden /> {locationLabel()}
                  </p>
                </div>
              </div>

              <div className="grid gap-2.5 sm:gap-3">
                {/* Engagement flow */}
                <div className="bg-surface/80 ring-line relative overflow-hidden rounded-[1.25rem] p-6 ring-1 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-subtle text-[0.68rem] font-semibold tracking-[0.2em] uppercase">How we work</p>
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="bg-accent/15 size-2.5 rounded-full" />
                      <span className="bg-accent/15 size-2.5 rounded-full" />
                      <span className="bg-highlight/70 size-2.5 rounded-full" />
                    </span>
                  </div>
                  <ol className="relative mt-6 grid gap-3 sm:grid-cols-2">
                    {flow.map((step, i) => (
                      <motion.li
                        key={step.title}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 + i * 0.12, ease }}
                        className="group border-line hover:border-accent/30 bg-surface/70 relative rounded-2xl border p-4 transition-colors duration-500"
                      >
                        <div className="flex items-center gap-3">
                          <span className="border-accent/25 text-accent-2 bg-accent/[0.06] grid size-9 place-items-center rounded-xl border">
                            <step.icon className="size-4" strokeWidth={1.6} aria-hidden />
                          </span>
                          <span className="text-subtle text-xs font-semibold">0{i + 1}</span>
                        </div>
                        <p className="text-fg mt-4 text-[0.95rem] font-semibold">{step.title}</p>
                        <p className="text-muted mt-1 text-xs leading-relaxed">{step.text}</p>
                      </motion.li>
                    ))}
                  </ol>
                  {/* animated progress */}
                  <div className="bg-accent/[0.06] mt-6 h-1 overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.4, delay: 1.2, ease }}
                      className="bg-brand h-full rounded-full"
                    />
                  </div>
                </div>

                {/* Audiences */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {audiences.map((a) => (
                    <div
                      key={a.label}
                      className="bg-surface/80 ring-line flex flex-col items-center justify-center gap-3 rounded-[1.25rem] px-2 py-6 text-center ring-1"
                    >
                      <a.icon className="text-accent-2 size-5" strokeWidth={1.6} aria-hidden />
                      <span className="text-fg text-xs font-semibold sm:text-sm">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          {/* floor fade */}
          <div
            aria-hidden
            className="from-bg pointer-events-none absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-t to-transparent"
          />
        </div>
      </Container>
    </section>
  );
}
