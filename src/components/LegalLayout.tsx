import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <>
      {/* Minimal header */}
      <header className="border-b border-mist bg-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-moss hover:opacity-80 transition-opacity">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-moss text-cream">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 18c2-4 4-6 6-6s3 3 5 3 4-5 7-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="font-display text-sm font-semibold text-moss">Harz Wasser Guide</span>
          </Link>
          <Link href="/" className="text-xs text-ink/50 hover:text-moss transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Page hero */}
      <div className="bg-moss py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-cream">{title}</h1>
          {subtitle && <p className="mt-2 text-cream/65 text-sm">{subtitle}</p>}
        </div>
      </div>

      {/* Content */}
      <main className="bg-cream flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="prose-legal">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cream border-t border-mist py-8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink/40">© {new Date().getFullYear()} Harz Wasser Guide</p>
          <nav className="flex gap-5 text-xs text-ink/55">
            <Link href="/impressum" className="hover:text-moss transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-moss transition-colors">Datenschutz</Link>
            <Link href="/" className="hover:text-moss transition-colors">Startseite</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
