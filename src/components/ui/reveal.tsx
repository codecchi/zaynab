"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
type Tag = "div" | "ul" | "ol" | "li" | "article";
type BaseProps = { as?: Tag; className?: string; children?: React.ReactNode; id?: string };

/** Subtle fade-up on scroll. Reduced motion is handled globally by <MotionConfig reducedMotion="user">. */
export function Reveal({
  delay = 0,
  y = 24,
  children,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct <RevealItem> children. Use `as="ul"` with `RevealItem as="li"` for lists. */
export function RevealGroup({ as = "div", stagger = 0.08, ...props }: BaseProps & { stagger?: number }) {
  const Cmp = motion[as] as typeof motion.div;
  return (
    <Cmp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...props}
    />
  );
}

export function RevealItem({ as = "div", ...props }: BaseProps) {
  const Cmp = motion[as] as typeof motion.div;
  return (
    <Cmp
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
      }}
      {...props}
    />
  );
}
