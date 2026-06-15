import { Star, Droplets, Mountain, Waves } from "lucide-react";

const places = [
  {
    icon: Droplets,
    category: "Reservoir / Talsperre",
    name: "Okerstausee",
    description: "Großer Wasserspeicher in der Harzregion, umgeben von dichtem Wald – ideal für eine Runde am Ufer.",
    accent: "text-sage",
  },
  {
    icon: Waves,
    category: "Wasserfall",
    name: "Radau-Wasserfall",
    description: "Einer der schönsten Wasserfälle im Harz, eingebettet in ein ruhiges Waldtal nahe Bad Harzburg.",
    accent: "text-clay",
  },
  {
    icon: Mountain,
    category: "Wander- & Höhenstraße",
    name: "Harzhochstraße",
    description: "Panoramastrecke mit Aussichtspunkten und Zugängen zu Wanderwegen entlang der Hochlagen.",
    accent: "text-moss",
  },
];

export default function PopularPlaces() {
  return (
    <section id="orte" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
              Beliebte Ziele
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-moss">
              Ein paar Favoriten zum Anfangen
            </h2>
          </div>
          <p className="text-sm text-ink/60 max-w-xs">
            In der App findest du zu jedem Ort Fotos, Anfahrt, Barrierefreiheit
            und Aktivitäten wie Camping, Wandern oder Angeln.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {places.map((place, i) => (
            <article
              key={place.name}
              className="reveal group rounded-2xl border border-mist bg-cream p-6 transition-shadow hover:shadow-lg hover:shadow-moss/5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full bg-sand ${place.accent}`}>
                  <place.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <Star className="h-4 w-4 text-clay" fill="currentColor" strokeWidth={0} />
              </div>

              <p className={`mt-5 text-xs font-semibold uppercase tracking-wide ${place.accent}`}>
                {place.category}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
                {place.name}
              </h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                {place.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
