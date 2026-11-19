"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SpotlightGroup } from "@/components/ui/effects";
import { Icon } from "@/components/ui/icon";
import { Accent, SectionHeading } from "@/components/ui/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="bg-glow-2/60 pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[70vw] -translate-x-1/2 rounded-full blur-[140px]" />
      <Container className="relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="expertise-title"
            eyebrow="Areas of Expertise"
            title={
              <>
                Seven practice areas. <Accent>One trusted advisor.</Accent>
              </>
            }
            description="From your first registration to ongoing compliance and strategic planning — comprehensive tax, compliance and advisory services."
          />
          <Button href="/services" variant="secondary" className="shrink-0 self-start lg:self-end">
            View All Services
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden
            />
          </Button>
        </div>

        <SpotlightGroup as="ul" className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease }}
              className="glass spotlight group rounded-3xl"
            >
              <Link href={`/services#${s.slug}`} className="flex h-full min-h-[290px] flex-col rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span className="border-accent/25 text-accent-2 ease-premium bg-accent/[0.06] grid size-12 place-items-center rounded-2xl border shadow-[0_0_30px_-10px_rgba(141,181,150,0.6)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="text-subtle text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-fg mt-8 text-[1.2rem] leading-snug font-semibold tracking-tight">{s.title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{s.summary}</p>
                <span className="text-fg group-hover:text-accent-2 mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold transition-colors duration-300">
                  Learn More
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="beam theme-deep bg-bg relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-3xl p-7"
          >
            <div className="bg-glow-1/80 pointer-events-none absolute -right-20 -bottom-20 size-64 rounded-full blur-[70px]" />
            <p className="text-fg relative text-[1.45rem] leading-tight font-semibold tracking-tight">
              Not sure where your matter fits?
            </p>
            <div className="relative">
              <p className="text-muted text-sm leading-relaxed">
                Describe your situation and receive guidance on the right next step.
              </p>
              <Button href="/contact#inquiry" className="mt-6">
                Ask a Question
              </Button>
            </div>
          </motion.li>
        </SpotlightGroup>
      </Container>
    </section>
  );
}
