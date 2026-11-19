"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

/**
 * Counts up to `value` once in view. Only used for genuine numbers.
 * The final value is server-rendered (good for SEO / no-JS); the count-up
 * writes straight to the DOM, so it causes no React re-renders.
 */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = fmt(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span aria-label={`${fmt(value)}${suffix}`}>
      <span aria-hidden>
        <span ref={ref}>{fmt(value)}</span>
        {suffix}
      </span>
    </span>
  );
}
