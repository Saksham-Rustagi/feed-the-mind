"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-brand-lake/30 bg-gradient-to-b from-brand-powder/30 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={container} className="max-w-3xl">
          {eyebrow && (
            <motion.p variants={item} className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cornflower">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 variants={item} className="mt-3 text-4xl font-extrabold tracking-tight text-brand-sea sm:text-5xl">
            {title}
          </motion.h1>
          {description && (
            <motion.p variants={item} className="mt-5 text-lg leading-relaxed text-brand-sea/80">
              {description}
            </motion.p>
          )}
          {children && <motion.div variants={item}>{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}
