export default function Footer() {
  return (
    <footer className="bg-cream border-t border-mist py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-moss text-cream">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 18c2-4 4-6 6-6s3 3 5 3 4-5 7-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold text-moss">
            Harz Wasser Guide
          </span>
        </div>

        <p className="text-xs text-ink/50 text-center">
          © {new Date().getFullYear()} Harz Wasser Guide. Alle Angaben ohne Gewähr.
        </p>

        <nav className="flex gap-5 text-xs text-ink/60">
          <a href="#" className="hover:text-moss transition-colors">Impressum</a>
          <a href="#" className="hover:text-moss transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-moss transition-colors">Kontakt</a>
        </nav>
      </div>
    </footer>
  );
}
