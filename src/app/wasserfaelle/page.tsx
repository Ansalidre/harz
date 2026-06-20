import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wasserfälle im Harz – Romkehaller Wasserfall, Radauwasserfall & mehr",
  description: "Die schönsten Wasserfälle im Harz: Romkehaller Wasserfall, Radauwasserfall, Ilsefälle. Mit Wanderrouten, Fotospots und der besten Reisezeit.",
  alternates: { canonical: "https://harzwasserguide.de/wasserfaelle/" },
  openGraph: {
    title: "Wasserfälle im Harz – Romkehaller Wasserfall, Radauwasserfall & mehr",
    description: "Die schönsten Wasserfälle im Harz: Romkehaller Wasserfall, Radauwasserfall, Ilsefälle. Mit Wanderrouten, Fotospots und der besten Reisezeit.",
    url: "https://harzwasserguide.de/wasserfaelle/",
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
            <span className="text-cream/80">Wasserfälle im Harz</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-cream mb-4">
            Wasserfälle im Harz
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">Rauschende Wasserfälle im Harz – von romantischen Waldschluchten bis zu beeindruckenden Naturschauspielen nach der Schneeschmelze.</p>
        </div>
      </div>
      <main className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/wasserfaelle/schoenste-wasserfaelle" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Wo befinden sich die schönsten Wasserfälle im Harz?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/wasserfaelle/hoechster-wasserfall" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Welcher Wasserfall im Harz ist der höchste?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/wasserfaelle/wandern-wasserfaelle" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Kann man zu den Wasserfällen im Harz wandern?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/wasserfaelle/beste-zeit-wasserfaelle" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Wann ist die beste Zeit für einen Besuch der Harzer Wasserfälle?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
