"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/logo/Logo";
import { NAV_ITEMS, DONATE_ITEM } from "@/lib/nav";

const panelVariants = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.04 },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
} as const;

const linkVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
} as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-lake/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo priority hideTextOnMobile />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-powder/40 text-brand-sea"
                    : "text-brand-sea/80 hover:bg-brand-powder/30 hover:text-brand-sea"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={DONATE_ITEM.href}
            className="ml-2 rounded-full bg-brand-cornflower px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-sea"
          >
            {DONATE_ITEM.label}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={DONATE_ITEM.href}
            className="rounded-full bg-brand-cornflower px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-sea"
          >
            {DONATE_ITEM.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lake/60 text-brand-sea"
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={false}
              animate={open ? "open" : "closed"}
            >
              <motion.path
                strokeLinecap="round"
                variants={{ closed: { d: "M4 7h16M4 12h16M4 17h16", opacity: 1 }, open: { d: "M6 12h12", opacity: 0 } }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                strokeLinecap="round"
                variants={{ closed: { d: "M6 6l0 0M18 6l0 0", opacity: 0 }, open: { d: "M6 6l12 12", opacity: 1 } }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                strokeLinecap="round"
                variants={{ closed: { d: "M6 18l0 0M18 18l0 0", opacity: 0 }, open: { d: "M18 6l-12 12", opacity: 1 } }}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={panelVariants}
            className="overflow-hidden border-t border-brand-lake/40 bg-white lg:hidden"
          >
            <nav aria-label="Primary mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={linkVariants}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                        active ? "bg-brand-powder/40 text-brand-sea" : "text-brand-sea/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
