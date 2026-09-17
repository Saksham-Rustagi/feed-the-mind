type LogoMarkProps = {
  className?: string;
  /** "color" for light backgrounds, "inverted" for dark backgrounds */
  variant?: "color" | "inverted";
};

/**
 * Placeholder brand mark: a shield/brain outline holding a circle of people,
 * flowing down into a single figure rooted in a small leaf sprout.
 * Recreated as SVG from the source logo artwork.
 */
export default function LogoMark({ className, variant = "color" }: LogoMarkProps) {
  const palette =
    variant === "inverted"
      ? {
          outline: "#91E5F6",
          table: "#1c4f6e",
          outer: "#84D2F6",
          inner: "#59A5D8",
          center: "#91E5F6",
          figure: "#91E5F6",
          leafA: "#59A5D8",
          leafB: "#84D2F6",
        }
      : {
          outline: "#386FA4",
          table: "#CFE9F7",
          outer: "#84D2F6",
          inner: "#59A5D8",
          center: "#133C55",
          figure: "#133C55",
          leafA: "#386FA4",
          leafB: "#59A5D8",
        };

  return (
    <svg
      viewBox="0 0 240 300"
      className={className}
      role="img"
      aria-label="Feed the Mind logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* brain / shield outline */}
      <path
        d="M 60,150
           C 40,150 26,134 26,113
           C 26,95 37,80 53,75
           C 48,58 58,40 76,34
           C 82,17 99,6 118,6
           C 137,6 154,17 160,34
           C 178,40 188,58 183,75
           C 199,80 210,95 210,113
           C 210,134 196,150 176,150
           C 176,170 160,188 118,195
           C 76,188 60,170 60,150
           Z"
        fill="none"
        stroke={palette.outline}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* table the people sit around */}
      <ellipse cx="118" cy="141" rx="74" ry="17" fill={palette.table} />

      {/* five people: outer, inner, center (largest/darkest), inner, outer */}
      <g>
        <path d="M 45.3,141 A 11.7,11.7 0 0 1 68.7,141 Z" fill={palette.outer} />
        <circle cx="57" cy="122" r="9" fill={palette.outer} />

        <path d="M 71.4,141 A 15.6,15.6 0 0 1 102.6,141 Z" fill={palette.inner} />
        <circle cx="87" cy="116" r="12" fill={palette.inner} />

        <path d="M 100,141 A 18,18 0 0 1 136,141 Z" fill={palette.center} />
        <circle cx="118" cy="108" r="15" fill={palette.center} />

        <path d="M 133.4,141 A 15.6,15.6 0 0 1 164.6,141 Z" fill={palette.inner} />
        <circle cx="149" cy="116" r="12" fill={palette.inner} />

        <path d="M 167.3,141 A 11.7,11.7 0 0 1 190.7,141 Z" fill={palette.outer} />
        <circle cx="179" cy="122" r="9" fill={palette.outer} />
      </g>

      {/* stem flowing down from the shield */}
      <path
        d="M 106,192 C 90,206 85,216 96,230"
        fill="none"
        stroke={palette.outline}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 130,192 C 146,206 151,216 140,230"
        fill="none"
        stroke={palette.outline}
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* single figure, rooted */}
      <circle cx="118" cy="234" r="11" fill={palette.figure} />
      <path
        d="M 118,246
           C 108,246 100,254 99,266
           L 99,280 C 99,283 104,283 104,280
           L 105,264 L 111,264 L 111,283
           C 111,286 118,286 118,283
           L 118,264 L 125,264 L 125,283
           C 125,286 132,286 132,283
           L 133,264 L 137,264 L 137,280
           C 137,283 132,283 132,280
           L 131,266
           C 130,254 128,246 118,246
           Z"
        fill={palette.figure}
      />

      {/* leaf sprout */}
      <g transform="translate(118,286)">
        <path d="M 0,10 C -3,-2 -14,-8 -22,-6 C -18,4 -8,12 0,10 Z" fill={palette.leafA} />
        <path d="M 0,10 C 3,-2 14,-8 22,-6 C 18,4 8,12 0,10 Z" fill={palette.leafB} />
      </g>
    </svg>
  );
}
