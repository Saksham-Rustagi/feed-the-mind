"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function DonatePulse({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`inline-block rounded-full ${className ?? ""}`}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(56,111,164,0.35)",
          "0 0 0 14px rgba(56,111,164,0)",
          "0 0 0 0 rgba(56,111,164,0)",
        ],
      }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
