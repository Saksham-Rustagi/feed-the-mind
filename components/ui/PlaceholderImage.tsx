type PlaceholderImageProps = {
  label?: string;
  tone?: "sea" | "cornflower" | "sky" | "lake" | "powder";
  icon?: "people" | "food" | "heart" | "book" | "calendar" | "hands";
  className?: string;
  ratio?: "square" | "video" | "portrait";
};

const TONE_CLASSES: Record<NonNullable<PlaceholderImageProps["tone"]>, string> = {
  sea: "bg-brand-sea text-white",
  cornflower: "bg-brand-cornflower text-white",
  sky: "bg-brand-sky text-white",
  lake: "bg-brand-lake text-brand-sea",
  powder: "bg-brand-powder text-brand-sea",
};

const RATIO_CLASSES: Record<NonNullable<PlaceholderImageProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

type IconPath = { viewBox: string; d: string };

const ICONS: Record<NonNullable<PlaceholderImageProps["icon"]>, IconPath> = {
  people: {
    viewBox: "0 0 24 24",
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  food: {
    viewBox: "0 0 24 24",
    d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
  },
  heart: {
    viewBox: "0 0 24 24",
    d: "M12 21s-6.7-4.35-9.33-8.28C1.02 10.5 1.6 7.36 4.1 5.6 6.2 4.12 8.9 4.6 10.4 6.4L12 8.2l1.6-1.8c1.5-1.8 4.2-2.28 6.3-.8 2.5 1.76 3.08 4.9 1.43 7.12C18.7 16.65 12 21 12 21z",
  },
  book: {
    viewBox: "0 0 24 24",
    d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5a2.5 2.5 0 0 0-2.5 2.5V4.5zM6.5 19H19v1H6.5a1.5 1.5 0 0 1 0-3H19",
  },
  calendar: {
    viewBox: "0 0 24 24",
    d: "M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zM5 9h14v9H5V9z",
  },
  hands: {
    viewBox: "0 0 24 24",
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  },
};

export default function PlaceholderImage({
  label = "Image placeholder",
  tone = "lake",
  icon = "people",
  className,
  ratio = "video",
}: PlaceholderImageProps) {
  const glyph = ICONS[icon];
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-2xl ${RATIO_CLASSES[ratio]} ${TONE_CLASSES[tone]} ${className ?? ""}`}
    >
      <svg viewBox={glyph.viewBox} className="h-10 w-10 opacity-80" fill="currentColor">
        <path d={glyph.d} />
      </svg>
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
