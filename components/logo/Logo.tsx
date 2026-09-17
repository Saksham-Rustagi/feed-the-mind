import Link from "next/link";
import LogoMark from "./LogoMark";

type LogoProps = {
  variant?: "color" | "inverted";
  /** "row" for header/footer, "stacked" for the hero */
  layout?: "row" | "stacked";
  showTagline?: boolean;
  className?: string;
};

export default function Logo({
  variant = "color",
  layout = "row",
  showTagline = false,
  className,
}: LogoProps) {
  const textColor = variant === "inverted" ? "text-white" : "text-brand-sea";
  const taglineColor = variant === "inverted" ? "text-brand-powder" : "text-brand-cornflower";
  const mindColor = variant === "inverted" ? "text-brand-powder" : "text-brand-cornflower";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${
        layout === "stacked" ? "flex-col text-center" : "flex-row"
      } ${className ?? ""}`}
      aria-label="Feed the Mind — home"
    >
      <LogoMark
        variant={variant}
        className={layout === "stacked" ? "h-24 w-auto sm:h-32" : "h-10 w-auto sm:h-11"}
      />
      <span className={layout === "stacked" ? "flex flex-col items-center" : "flex flex-col justify-center"}>
        <span
          className={`font-extrabold tracking-tight leading-none ${textColor} ${
            layout === "stacked" ? "text-3xl sm:text-4xl" : "text-lg sm:text-xl"
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
