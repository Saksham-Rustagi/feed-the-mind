"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animate on mount instead of on scroll into view (use for above-the-fold content) */
  onMount?: boolean;
};

export default function FadeIn({ children, className, delay = 0, y = 24, onMount = false }: FadeInProps) {
  const visible = { opacity: 1, y: 0 };
  const hidden = { opacity: 0, y };

  return (
    <motion.div
      initial={hidden}
      viewport={onMount ? undefined : { once: true, margin: "-80px" }}
      animate={onMount ? visible : undefined}
      whileInView={onMount ? undefined : visible}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
