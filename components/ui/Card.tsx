"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-2xl border border-brand-lake/40 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
