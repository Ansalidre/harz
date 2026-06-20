"use client";

import Link from "next/link";
import { useState } from "react";

export interface GuideMetaInfo {
  difficulty?: "Leicht" | "Mittel" | "Anspruchsvoll" | "Leicht bis Mittel" | "Mittel bis Anspruchsvoll";
  duration?: string;
  bestSeason?: string;
  dogs?: boolean;
  parking?: string;
  familyFriendly?: boolean;
  mapLat?: number;
  mapLng?: number;
  mapZoom?: number;
}

export interface FAQItem {
  q: string;
  a: string;
}

interface GuideLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  categoryHref: string;
  categoryColor: string;
  meta: GuideMetaInfo;
  faqs: FAQItem[];
  children: React.ReactNode;
}

const difficultyColor: Record<string, string> = {
  "Leicht": "bg-emerald-100 text-emerald-700",
  "Mittel": "bg-amber-100 text-amber-700",
  "Anspruchsvoll": "bg-rose-100 text-rose-700",
  "Leicht bis Mittel": "bg-amber-50 text-amber-600",
  "Mittel bis Anspruchsvoll": "bg-orange-100 text-orange-700",
};

export default function GuideLayout({
  title, subtitle, category, categoryHref, categoryColor, meta, faqs, children,
}: GuideLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Breadcrumb + Header */}
      <div className="bg-moss pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 contour-lines opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <nav className="flex items-center gap-2 text-xs text-cream/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-cream transition-colors">Startseite</Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-cream transition-colors">{category}</Link>
            <span>/</span>
            <span className="text-cream/80">{title}</span>
          </nav>
          <span className={`inline-block text-xs font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-4 ${categoryColor}`}>
            {category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream leading-tight mb-4">
            {title}
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Meta info bar */}
      <div className="bg-sand border-b border-mist">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-4 flex flex-wrap gap-4 sm:gap-6">
          {meta.difficulty && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted font-medium uppercase tracking-wide">Schwierigkeit</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[meta.difficulty]}`}>
                {meta.difficulty}
              </span>
            </div>
          )}
          {meta.duration && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">⏱</span>
              <span className="text-xs font-medium text-ink">{meta.duration}</span>
            </div>
          )}
          {meta.bestSeason && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">📅</span>
              <span className="text-xs font-medium text-ink">{meta.bestSeason}</span>
            </div>
          )}
          {meta.dogs !== undefined && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">🐕</span>
              <span className="text-xs font-medium text-ink">
                Hunde {meta.dogs ? "erlaubt" : "nicht erlaubt"}
              </span>
            </div>
          )}
          {meta.parking && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">🅿️</span>
              <span className="text-xs font-medium text-ink">{meta.parking}</span>
            </div>
          )}
          {meta.familyFriendly && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">👨‍👩‍👧</span>
              <span className="text-xs font-medium text-ink">Familienfreundlich</span>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <main className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">

          {/* Article content */}
          <div className="guide-prose mb-16">
            {children}
          </div>

          {/* OSM Map */}
          {meta.mapLat && meta.mapLng && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-moss mb-4">
                Karte & Lage
              </h2>
              <div className="rounded-2xl overflow-hidden border border-mist shadow-sm"
                   style={{ height: "400px" }}>
                <iframe
                  title={`Karte: ${title}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${meta.mapLng - 0.08},${meta.mapLat - 0.05},${meta.mapLng + 0.08},${meta.mapLat + 0.05}&layer=mapnik&marker=${meta.mapLat},${meta.mapLng}`}
                  loading="lazy"
                />
              </div>
              <a
                href={`https://www.openstreetmap.org/?mlat=${meta.mapLat}&mlon=${meta.mapLng}#map=${meta.mapZoom ?? 13}/${meta.mapLat}/${meta.mapLng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-sage hover:underline"
              >
                Größere Karte ansehen →
              </a>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mb-16">
              <h2 className="font-display text-2xl font-semibold text-moss mb-6">
                Häufige Fragen
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-mist bg-white overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-medium text-ink text-sm sm:text-base pr-4">{faq.q}</span>
                      <span className="text-sage flex-shrink-0 text-lg font-light">
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-sm text-ink/70 leading-relaxed border-t border-mist pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* App CTA */}
          <div className="rounded-2xl bg-moss p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 contour-lines">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-clay mb-1">Harz Wasser Guide App</p>
              <h3 className="font-display text-xl font-semibold text-cream mb-1">
                Alle Orte auf einer Karte
              </h3>
              <p className="text-cream/65 text-sm">
                Entdecke diesen und viele weitere Orte direkt in der App — mit Navigation, Filtern und Offline-Karte.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <a href="#download" className="inline-flex items-center gap-2 bg-cream text-moss rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-cream/90 transition-colors">
                App laden
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
