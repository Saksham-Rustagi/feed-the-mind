"use client";

import { motion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function AmountGrid({ amounts, donateUrl }: { amounts: string[]; donateUrl: string }) {
  return (
    <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {amounts.map((amount, i) => (
        <StaggerItem key={amount}>
          <motion.a
            href={donateUrl}
            aria-label={`Donate ${amount}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`block rounded-xl border-2 px-4 py-4 text-center text-lg font-semibold transition-colors ${
              i === 1
                ? "border-brand-cornflower bg-brand-cornflower text-white"
                : "border-brand-lake/60 text-brand-sea hover:border-brand-cornflower"
            }`}
          >
            {amount}
          </motion.a>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
