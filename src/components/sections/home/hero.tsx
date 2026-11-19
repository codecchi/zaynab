"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Lock, MapPin, Users } from "lucide-react";
import { profile } from "@/data/profile";
import { display, locationLabel } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Portrait } from "@/components/ui/portrait";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const name = display(profile.fullName);
  const designation = display(profile.designation);

  return (
    <section className="bg-ivory relative overflow-hidden pt-[88px]">
      {/* Background detailing */}
      <div className="hairlines pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-[-20%] right-[-15%] size-[760px] rounded-full bg-[radial-gradient(circle,rgba(198,166,107,0.20),transparent_62%)]" />
      <div className="bg-line pointer-events-none absolute bottom-0 left-0 h-px w-full" />

      <Container className="relative grid items-center gap-14 pt-10 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-14 lg:pb-28">
        <div className="lg:col-span-7">
          {(name || designation) && (
            <motion.p
              {...rise(0.05)}
              className="text-gold-deep flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-semibold tracking-[0.2em] uppercase"
            >
              <span aria-hidden className="bg-gold-deep h-px w-8" />
              {name}
              {name && designation && (
                <span aria-hidden className="text-gold">
                  ·
                </span>
              )}
              {designation}
            </motion.p>
          )}

          <h1 className="text-navy mt-7 font-serif text-[2.75rem] leading-[1.02] tracking-[-0.02em] sm:text-[4rem] lg:text-[4.6rem] xl:text-[5.1rem]">
            <motion.span {...rise(0.15)} className="block">
              Strategic Tax Solutions.
            </motion.span>
            <motion.span {...rise(0.28)} className="text-gold-deep block italic">
              Trusted Professional Guidance.
            </motion.span>
          </h1>

          <motion.p {...rise(0.42)} className="text-slate mt-8 max-w-xl text-lg leading-relaxed text-pretty">
            Comprehensive taxation, corporate compliance, and business advisory solutions designed to simplify financial
            complexities and empower confident business decisions.
          </motion.p>

          <motion.div {...rise(0.54)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact#inquiry" size="lg">
              Book a Consultation
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden
              />
            </Button>
            <Button href="/#expertise" variant="outline" size="lg">
              Explore Our Expertise
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden
              />
            </Button>
          </motion.div>

          <motion.ul
            {...rise(0.66)}
            className="border-line text-slate mt-12 grid gap-4 border-t pt-7 text-sm sm:grid-cols-3"
          >
            <li className="flex items-center gap-3">
              <Lock className="text-gold-deep size-4 shrink-0" strokeWidth={1.5} aria-hidden /> Confidential
              consultations
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-gold-deep size-4 shrink-0" strokeWidth={1.5} aria-hidden /> Individuals &
              businesses
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-gold-deep size-4 shrink-0" strokeWidth={1.5} aria-hidden /> {locationLabel()}
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none"
        >
          <div className="relative lg:ml-6">
            {/* Offset frame */}
            <div
              aria-hidden
              className="border-gold/60 absolute -right-3 -bottom-3 h-full w-full border sm:-right-5 sm:-bottom-5"
            />
            <Portrait priority className="aspect-[4/5] w-full shadow-[0_40px_80px_-40px_rgba(16,28,44,0.6)]" />

            {(name || designation) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.8, ease }}
                className="border-gold absolute -bottom-6 left-0 max-w-[85%] border-l-2 bg-white px-6 py-5 shadow-[0_20px_50px_-24px_rgba(16,28,44,0.45)] sm:-left-8"
              >
                {name && <p className="text-navy font-serif text-xl">{name}</p>}
                {designation && (
                  <p className="text-slate mt-1 text-xs font-semibold tracking-[0.16em] uppercase">{designation}</p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
