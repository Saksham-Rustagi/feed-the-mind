"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/logo/Logo";
import { NAV_ITEMS, DONATE_ITEM } from "@/lib/nav";

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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-lake/60 text-brand-sea"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-brand-lake/40 bg-white`}
      >
        <nav aria-label="Primary mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                  active ? "bg-brand-powder/40 text-brand-sea" : "text-brand-sea/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
