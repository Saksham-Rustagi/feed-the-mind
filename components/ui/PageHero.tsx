import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-brand-lake/30 bg-gradient-to-b from-brand-powder/30 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cornflower">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-sea sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-brand-sea/80">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
