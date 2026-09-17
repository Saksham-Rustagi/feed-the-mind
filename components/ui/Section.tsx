import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "white" | "powder" | "sea";
  id?: string;
};

const TONE_CLASSES: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white",
  powder: "bg-brand-powder/25",
  sea: "bg-brand-sea text-white",
};

export default function Section({ children, className, tone = "white", id }: SectionProps) {
  return (
    <section id={id} className={`${TONE_CLASSES[tone]} ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">{children}</div>
    </section>
  );
}
