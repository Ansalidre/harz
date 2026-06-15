"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#kategorien", label: "Entdecken" },
  { href: "#karte", label: "Karte" },
  { href: "#orte", label: "Beliebte Orte" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-mist)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss text-cream">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 18c2-4 4-6 6-6s3 3 5 3 4-5 7-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13c2-3 4-4 6-4s3 2 5 2 4-4 7-7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </span>
          <span
            className={`font-display text-lg font-semibold tracking-tight ${
              scrolled ? "text-moss" : "text-cream"
            }`}
          >
            Harz Wasser Guide
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-ink/70 hover:text-moss" : "text-cream/85 hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className={`hidden sm:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            scrolled
              ? "bg-moss text-cream hover:bg-moss/90"
              : "bg-cream text-moss hover:bg-cream/90"
          }`}
        >
          App laden
        </a>
      </div>
    </header>
  );
}
