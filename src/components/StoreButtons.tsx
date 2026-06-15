interface StoreButtonsProps {
  variant?: "light" | "dark";
}

export default function StoreButtons({ variant = "light" }: StoreButtonsProps) {
  const isLight = variant === "light";

  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 border transition-colors";
  const styles = isLight
    ? "border-cream/25 bg-cream/10 text-cream hover:bg-cream/15"
    : "border-moss/15 bg-white text-moss hover:bg-sand";

  return (
    <div id="download" className="flex flex-wrap gap-3">
      <a href="#" className={`${base} ${styles}`} aria-label="Im App Store laden (in Kürze verfügbar)">
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide opacity-70">
            Bald verfügbar
          </span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a href="#" className={`${base} ${styles}`} aria-label="Bei Google Play laden (in Kürze verfügbar)">
        <PlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide opacity-70">
            Bald verfügbar
          </span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.05-1.26 2.73-.84.68-1.83 1.02-2.97.96-.06-1.1.35-2.04 1.23-2.79.88-.75 1.87-1.1 2.97-.9.02.04.02.06.03.0Zm4.07 16.4c-.36.78-.79 1.49-1.3 2.15-1.07 1.35-2.13 2.02-3.18 2.02-.51 0-1.16-.16-1.95-.49-.79-.32-1.51-.49-2.18-.49-.7 0-1.45.17-2.26.49-.81.33-1.45.5-1.94.51-.99.04-2.07-.65-3.25-2.07-1.13-1.36-2.04-2.97-2.74-4.84-.74-1.99-1.11-3.92-1.11-5.79 0-2.14.46-3.97 1.39-5.49.91-1.5 2.13-2.25 3.66-2.27.62-.01 1.49.18 2.62.56 1.13.38 1.85.57 2.18.57.4 0 1.16-.22 2.27-.65 1.05-.4 1.94-.57 2.66-.51 1.97.16 3.45.97 4.43 2.45-1.76 1.07-2.63 2.57-2.61 4.5.02 1.5.55 2.75 1.6 3.74.48.46 1.01.81 1.6 1.07-.13.36-.27.71-.42 1.05Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.4c-.3.3-.5.7-.5 1.2v17c0 .5.2.9.5 1.2l8.6-9.7-8.6-9.7Z" opacity="0.85" />
      <path d="M16.8 12.1l-3.4-1.9-8.7-8.9c.2-.1.4-.1.6-.1.3 0 .6.1.9.2l10.6 6v4.7Z" />
      <path d="M16.8 11.9v4.7l-10.6 6c-.3.2-.6.2-.9.2-.2 0-.4 0-.6-.1l8.7-8.9 3.4-1.9Z" />
      <path d="M20.9 10.5c.6.4.9.9.9 1.5s-.3 1.1-.9 1.5l-3.2 1.8-3.5-3.3 3.5-3.3 3.2 1.8Z" />
    </svg>
  );
}
