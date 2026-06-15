import Image from "next/image";
import PhoneMockup from "./PhoneMockup";
import { MapPinned, Navigation, Filter } from "lucide-react";

const points = [
  {
    icon: MapPinned,
    title: "Über 120 Orte verzeichnet",
    text: "Von der Rappbodetalsperre bis zum kleinsten Moorteich – alle Standorte auf einer interaktiven Karte.",
  },
  {
    icon: Filter,
    title: "Nach Kategorie filtern",
    text: "Blende ein, was dich interessiert: Badeseen, Talsperren, Wasserfälle, Wandertouren oder Kletterparks.",
  },
  {
    icon: Navigation,
    title: "Direkt losnavigieren",
    text: "Ein Tipp auf einen Ort öffnet die Beschreibung – und mit einem weiteren startet die Navigation.",
  },
];

export default function MapShowcase() {
  return (
    <section id="karte" className="relative overflow-hidden bg-moss py-20 sm:py-28">
      <div className="absolute inset-0 contour-lines" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <PhoneMockup
              src="/images/screenshots/app-map.png"
              alt="Karte mit allen Wasser- und Naturorten im Harz, farblich nach Kategorie sortiert"
              tilt="left"
            />
          </div>

          <div className="order-1 lg:order-2 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              Die Karte im Zentrum
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-cream leading-tight">
              Alles auf einen Blick – von der Okertalsperre bis zur Bode
            </h2>
            <p className="mt-4 text-cream/75 leading-relaxed max-w-md">
              Statt zwischen zehn Webseiten zu springen, siehst du sofort, was
              in deiner Nähe ist. Jede Farbe steht für eine Kategorie, jeder
              Punkt für einen Ort mit Beschreibung, Fotos und Anfahrt.
            </p>

            <ul className="mt-9 space-y-6">
              {points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream">
                    <point.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-cream">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream/70 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Talsperre photo strip */}
        <div className="mt-20 reveal">
          <div className="relative aspect-[16/7] sm:aspect-[16/5] rounded-3xl overflow-hidden">
            <Image
              src="/images/photos/talsperre.jpg"
              alt="Luftaufnahme einer Talsperre im Harz mit Staumauer und bewaldeten Hügeln"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moss/70 via-moss/0 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 sm:bottom-7 sm:left-8">
              <p className="font-display text-cream text-lg sm:text-xl font-medium">
                Talsperren, Stauseen & Reservoirs – als eigene Kategorie auf der Karte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
