"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

type Tag = "div" | "ul" | "li";

type StaggerProps = {
  children?: ReactNode;
  className?: string;
  /** HTML tag to render — use "ul"/"li" to keep list markup valid */
  as?: Tag;
};

const GROUP_TAGS = { div: motion.div, ul: motion.ul, li: motion.li };
const ITEM_TAGS = { div: motion.div, ul: motion.ul, li: motion.li };

export function StaggerGroup({ children, className, as = "div" }: StaggerProps) {
  const MotionTag = GROUP_TAGS[as];
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className, as = "div" }: StaggerProps) {
  const MotionTag = ITEM_TAGS[as];
  return (
    <MotionTag variants={itemVariants} className={className}>
      {children}
    </MotionTag>
  );
}
