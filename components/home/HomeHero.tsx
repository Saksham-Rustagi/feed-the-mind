"use client";

import { motion } from "framer-motion";
import Logo from "@/components/logo/Logo";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-powder/40 via-white to-white">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8"
      >
        <motion.div variants={item}>
          <Logo layout="stacked" showTagline priority className="items-center" />
        </motion.div>
        <motion.p variants={item} className="max-w-2xl text-lg leading-relaxed text-brand-sea/80 sm:text-xl">
          Feed the Mind provides accessible mental health resources, emotional
          wellness support, and nutritious food to individuals and families
          experiencing hardship — because a full plate and a supported mind
          both matter.
        </motion.p>
        <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
          <Button href="/get-involved" variant="primary">
            Get Involved
          </Button>
          <Button href="/donate" variant="outline">
            Donate
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
