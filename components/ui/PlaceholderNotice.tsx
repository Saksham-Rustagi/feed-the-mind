export default function PlaceholderNotice({
  text = "Content coming soon",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-dashed border-brand-cornflower/50 bg-brand-powder/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-cornflower ${className ?? ""}`}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 8v5M12 16h.01" />
      </svg>
      {text}
    </div>
  );
}
