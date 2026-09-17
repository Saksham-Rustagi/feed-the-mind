import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "inverted";
  className?: string;
  external?: boolean;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-cornflower text-white hover:bg-brand-sea",
  secondary: "bg-brand-sea text-white hover:bg-brand-cornflower",
  outline: "border-2 border-brand-cornflower text-brand-cornflower hover:bg-brand-cornflower hover:text-white",
  inverted: "bg-white text-brand-sea hover:bg-brand-powder",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors ${VARIANT_CLASSES[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
