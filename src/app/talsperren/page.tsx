import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Talsperren im Harz – Harz Wasser Guide",
  description: "Von der Rappbodetalsperre bis zur Okertalsperre – Stauseen zum Wandern, Erholen und Staunen. Technische Giganten inmitten wilder Natur.",
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
            <span className="text-cream/80">Talsperren im Harz</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-cream mb-4">
            Talsperren im Harz
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">Von der Rappbodetalsperre bis zur Okertalsperre – Stauseen zum Wandern, Erholen und Staunen. Technische Giganten inmitten wilder Natur.</p>
        </div>
      </div>
      <main className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/talsperren/welche-talsperren-harz" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Welche Talsperren gibt es im Harz?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/talsperren/groesste-talsperre" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Welche Talsperre im Harz ist die größte?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/talsperren/wandern-talsperren" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Kann man an den Talsperren im Harz wandern?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          <Link href="/talsperren/wozu-talsperren" className="block rounded-2xl bg-white border border-mist p-6 hover:shadow-md transition-shadow group">
            <h2 className="font-display text-lg font-semibold text-moss group-hover:text-sage transition-colors mb-2">Wofür wurden die Harzer Talsperren gebaut?</h2>
            <span className="text-sm text-sage font-medium">Zum Ratgeber →</span>
          </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
