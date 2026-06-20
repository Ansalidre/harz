import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WasserWanderWege im Harz – Historische Gräben & UNESCO-Welterbe",
  description: "Wandern entlang von Gräben, Teichen und Bächen im Harz. Oberharzer Wasserregal, Rehberger Graben und Routen für Anfänger und Familien.",
  alternates: { canonical: "https://harzwasserguide.de/wasserwege/" },
  openGraph: {
    title: "WasserWanderWege im Harz – Historische Gräben & UNESCO-Welterbe",
    description: "Wandern entlang von Gräben, Teichen und Bächen im Harz. Oberharzer Wasserregal, Rehberger Graben und Routen für Anfänger und Familien.",
    url: "https://harzwasserguide.de/wasserwege/",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <div className="bg-moss pt-24 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 contour-lines opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <nav className="flex items-center gap-2 text-xs text-cream/50 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">Startseite</Link>
            <span>/</span>
            <span className="text-cream/80">WasserWanderWege im Harz</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-cream mb-4">
            WasserWanderWege im Harz
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">Wanderrouten entlang von Bächen, Gräben und historischen Wasseranlagen – das UNESCO-Welterbe Oberharzer Wasserregal erleben.</p>
        </div>
      </div>
      <main className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/wasserwege/schoenste-wasserwanderwege" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Was sind die schönsten Wasserwanderwege im Harz?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/wasserwege/wasserwanderwege-anfaenger" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Welche Wasserwanderwege sind auch für Anfänger geeignet?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/wasserwege/oberharzer-wasserregal" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Was ist das Oberharzer Wasserregal?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/wasserwege/wasserwanderwege-familien" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Gibt es Wasserwanderwege im Harz für Familien?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
