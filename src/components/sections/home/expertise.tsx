"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="bg-ivory">
      <Container className="py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Areas of Expertise"
            title={<span id="expertise-title">Comprehensive Tax, Compliance & Advisory Services.</span>}
            description="Seven practice areas covering every stage of your financial and regulatory life — from your first registration to ongoing compliance and strategic planning."
          />
          <Button href="/services" variant="outline" className="shrink-0 self-start lg:self-end">
            View All Services
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden
            />
          </Button>
        </div>

        <ul className="border-line bg-line mt-16 grid gap-px border md:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.li
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.07, ease }}
              className="bg-ivory"
            >
              <Link
                href={`/services#${s.slug}`}
                className="group ease-premium hover:bg-navy relative flex h-full min-h-[300px] flex-col overflow-hidden bg-white p-7 transition-colors duration-500 sm:p-8"
              >
                <span
                  aria-hidden
                  className="bg-gold ease-premium absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <span className="border-line text-navy group-hover:border-gold/40 group-hover:text-gold grid size-14 place-items-center border transition-colors duration-500">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="text-slate/60 group-hover:text-gold/70 font-serif text-lg transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-navy group-hover:text-ivory mt-8 font-serif text-[1.55rem] leading-tight transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="text-slate group-hover:text-slate-light mt-3 text-[0.94rem] leading-relaxed transition-colors duration-500">
                  {s.summary}
                </p>
                <span className="text-navy group-hover:text-gold mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold transition-colors duration-500">
                  Learn More
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </motion.li>
          ))}

          {/* Closing tile completes the grid */}
          <li className="on-dark bg-navy text-ivory relative flex min-h-[300px] flex-col justify-between overflow-hidden p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(198,166,107,0.25),transparent_65%)]" />
            <p className="relative font-serif text-[1.7rem] leading-tight">Not sure where your matter fits?</p>
            <div className="relative">
              <p className="text-slate-light text-[0.94rem] leading-relaxed">
                Describe your situation and receive guidance on the right next step.
              </p>
              <Button href="/contact#inquiry" variant="gold" className="mt-6">
                Ask a Question
              </Button>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
