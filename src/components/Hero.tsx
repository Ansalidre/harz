import Image from "next/image";
import StoreButtons from "./StoreButtons";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-moss">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/photos/brocken.jpg"
          alt="Blick über Schilf und Wald auf den Brocken im Harz"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moss/80 via-moss/55 to-moss" />
        <div className="absolute inset-0 contour-lines" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 border border-cream/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cream/90">
              Für den Harz gemacht
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-cream">
              Jede Quelle, jeder Wasserfall, jeder versteckte Badesee –
              <span className="italic text-clay"> auf einer Karte.</span>
            </h1>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/10 border border-cream/15 px-3.5 py-1 text-xs font-semibold text-cream/80">
              📖 Diese Seite wächst ständig – das <span className="text-clay font-bold ml-1">WasserWiki Harz</span>
            </div>
            <p className="mt-4 max-w-xl text-lg text-cream/80 leading-relaxed">
              Der Harz Wasser Guide zeigt dir Talsperren, Moore, Badeseen und
              Wassersport-Spots zwischen Brocken und Bode – mit kurzen
              Beschreibungen, Filtern nach Kategorie und Navigation direkt zum Ziel.
            </p>

            <div className="mt-9">
              <StoreButtons />
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="font-display text-2xl sm:text-3xl font-semibold text-cream">120+</dt>
                <dd className="mt-1 text-sm text-cream/70">Orte im Harz</dd>
              </div>
              <div>
                <dt className="font-display text-2xl sm:text-3xl font-semibold text-cream">12</dt>
                <dd className="mt-1 text-sm text-cream/70">Kategorien</dd>
              </div>
              <div>
                <dt className="font-display text-2xl sm:text-3xl font-semibold text-cream">1</dt>
                <dd className="mt-1 text-sm text-cream/70">Karte für alles</dd>
              </div>
            </dl>
          </div>

          <div className="reveal [animation-delay:150ms] flex justify-center lg:justify-end">
            <PhoneMockup
              src="/images/screenshots/app-map.png"
              alt="Kartenansicht der Harz Wasser Guide App mit markierten Badeseen, Talsperren und Wanderwegen"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
