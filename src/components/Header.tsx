"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  {
    href: "/seen",
    label: "Seen",
    dot: "bg-blue-400",
    sub: [
      { href: "/seen/schoenste-seen", label: "Schönste Seen" },
      { href: "/seen/baden-im-harz", label: "Baden im Harz" },
      { href: "/seen/seen-fuer-familien", label: "Seen für Familien" },
      { href: "/seen/geheimtipps-seen", label: "Geheimtipps" },
    ],
  },
  {
    href: "/wasserwege",
    label: "WasserWege",
    dot: "bg-emerald-400",
    sub: [
      { href: "/wasserwege/schoenste-wasserwanderwege", label: "Schönste Routen" },
      { href: "/wasserwege/wasserwanderwege-anfaenger", label: "Für Anfänger" },
      { href: "/wasserwege/oberharzer-wasserregal", label: "Oberharzer Wasserregal" },
      { href: "/wasserwege/wasserwanderwege-familien", label: "Für Familien" },
    ],
  },
  {
    href: "/talsperren",
    label: "Talsperren",
    dot: "bg-cyan-400",
    sub: [
      { href: "/talsperren/welche-talsperren-harz", label: "Alle Talsperren" },
      { href: "/talsperren/groesste-talsperre", label: "Die größte Talsperre" },
      { href: "/talsperren/wandern-talsperren", label: "Wandern an Talsperren" },
      { href: "/talsperren/wozu-talsperren", label: "Geschichte & Funktion" },
    ],
  },
  {
    href: "/wasserfaelle",
    label: "Wasserfälle",
    dot: "bg-indigo-400",
    sub: [
      { href: "/wasserfaelle/schoenste-wasserfaelle", label: "Schönste Wasserfälle" },
      { href: "/wasserfaelle/hoechster-wasserfall", label: "Höchster Wasserfall" },
      { href: "/wasserfaelle/wandern-wasserfaelle", label: "Wandern zu Wasserfällen" },
      { href: "/wasserfaelle/beste-zeit-wasserfaelle", label: "Beste Reisezeit" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-mist)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss text-cream">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 18c2-4 4-6 6-6s3 3 5 3 4-5 7-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 13c2-3 4-4 6-4s3 2 5 2 4-4 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
            </span>
            <span className={`font-display text-base font-semibold tracking-tight hidden sm:block ${scrolled ? "text-moss" : "text-cream"}`}>
              Harz Wasser Guide
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled ? "text-ink/75 hover:text-moss hover:bg-sand" : "text-cream/85 hover:text-cream hover:bg-white/10"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="opacity-40">
                    <path d="M2 3.5L5 6.5L8 3.5"/>
                  </svg>
                </Link>

                {/* Dropdown */}
                {activeDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-mist py-2 min-w-[200px]">
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-ink/75 hover:text-moss hover:bg-sand transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href="#kategorien" className={`hidden sm:block text-sm font-medium transition-colors ${scrolled ? "text-ink/60 hover:text-moss" : "text-cream/70 hover:text-cream"}`}>
              Kategorien
            </Link>
            <Link
              href="#download"
              className={`hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled ? "bg-moss text-cream hover:bg-moss/90" : "bg-cream text-moss hover:bg-cream/90"
              }`}
            >
              App laden
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-ink" : "text-cream"}`}
              aria-label="Menü"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-16 overflow-y-auto lg:hidden">
          <div className="px-5 py-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 font-display text-lg font-semibold text-moss mb-3"
                >
                  <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                  {item.label}
                </Link>
                <ul className="space-y-1 pl-4">
                  {item.sub.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-ink/70 hover:text-moss transition-colors border-b border-mist"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-4 border-t border-mist">
              <Link href="#download" onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-moss text-cream rounded-full py-3 font-semibold text-sm">
                App laden
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
