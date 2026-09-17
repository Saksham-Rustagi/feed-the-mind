import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/assets/logo-icon.png";

type LogoProps = {
  variant?: "color" | "inverted";
  /** "row" for header/footer, "stacked" for the hero */
  layout?: "row" | "stacked";
  showTagline?: boolean;
  className?: string;
  /** Mark as LCP-relevant for above-the-fold placements (header, hero) */
  priority?: boolean;
  /** Icon-only below `sm` — for the header, where it shares a row with nav controls */
  hideTextOnMobile?: boolean;
};

export default function Logo({
  variant = "color",
  layout = "row",
  showTagline = false,
  className,
  priority = false,
  hideTextOnMobile = false,
}: LogoProps) {
  const textColor = variant === "inverted" ? "text-white" : "text-brand-sea";
  const taglineColor = variant === "inverted" ? "text-brand-powder" : "text-brand-cornflower";
  const mindColor = variant === "inverted" ? "text-brand-powder" : "text-brand-cornflower";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${
        layout === "stacked" ? "flex-col gap-3 text-center" : "flex-row gap-2 sm:gap-3"
      } ${className ?? ""}`}
      aria-label="Feed the Mind — home"
    >
      <Image
        src={logoIcon}
        alt=""
        priority={priority}
        className={`w-auto shrink-0 object-contain ${layout === "stacked" ? "h-24 sm:h-32" : "h-8 sm:h-11"}`}
      />
      <span
        className={`${layout === "stacked" ? "flex flex-col items-center" : "flex-col justify-center"} ${
          hideTextOnMobile ? "hidden min-[375px]:flex" : "flex"
        }`}
      >
        <span
          className={`whitespace-nowrap font-extrabold tracking-tight leading-none ${textColor} ${
            layout === "stacked" ? "text-3xl sm:text-4xl" : "text-base sm:text-xl"
          }`}
        >
          FEED{" "}
          <span className={`font-medium ${mindColor}`}>THE</span> MIND
        </span>
        {showTagline && (
          <span
            className={`mt-1 uppercase tracking-[0.2em] ${taglineColor} ${
              layout === "stacked" ? "text-sm sm:text-base" : "text-[10px]"
            }`}
          >
            Nourish. Connect. Grow.
          </span>
        )}
      </span>
    </Link>
  );
}
