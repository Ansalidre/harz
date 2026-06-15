import { Star, Droplets, Mountain, Waves, TreePine, Fish, MapPin } from "lucide-react";

const places = [
  {
    icon: Droplets,
    category: "Reservoir / Talsperre",
    categoryColor: "text-sage",
    name: "Rappbodetalsperre",
    description:
      "Mit einer Höhe von 106 Metern ist sie die größte Trinkwassertalsperre Deutschlands und Europas längste Hängebrücke überspannt ihren Stausee. Ein beeindruckendes Technik- und Naturdenkmal inmitten des Harzes.",
    tags: ["Wandern", "Aussicht", "Brücke"],
    location: "Oberharz am Brocken",
  },
  {
    icon: Waves,
    category: "Wasserfall",
    categoryColor: "text-clay",
    name: "Radau-Wasserfall",
    description:
      "Einer der bekanntesten Wasserfälle im Harz, nahe Bad Harzburg. Die Radau stürzt hier über eine natürliche Felsstufe ins Tal – umgeben von altem Mischwald und einem gut ausgebauten Wanderweg.",
    tags: ["Wasserfall", "Wald", "Fotografieren"],
    location: "Bad Harzburg",
  },
  {
    icon: Mountain,
    category: "Gipfel & Panorama",
    categoryColor: "text-moss",
    name: "Brocken (1.141 m)",
    description:
      "Höchster Berg Norddeutschlands und sagenumwobener Hexengipfel. Oben erwarten dich eine historische Brockenbahn, das Brockenmuseum und bei klarem Wetter ein Panorama bis nach Berlin.",
    tags: ["Gipfel", "Bahn", "Wandern"],
    location: "Nationalpark Harz",
  },
  {
    icon: TreePine,
    category: "UNESCO-Welterbe",
    categoryColor: "text-sage",
    name: "Oberharzer Wasserregal",
    description:
      "Ein 400 Jahre altes System aus Teichen, Gräben und Wasserstollen, das einst Energie für den Bergbau lieferte. Seit 2010 UNESCO-Welterbe – und ein einzigartiges Erlebnis für Naturwanderer.",
    tags: ["UNESCO", "Geschichte", "Teiche"],
    location: "Clausthal-Zellerfeld",
  },
  {
    icon: Fish,
    category: "Badesee & Angeln",
    categoryColor: "text-clay",
    name: "Okerstausee",
    description:
      "Großer Wasserspeicher in der Harzregion, eingebettet in bewaldete Hügel. Beliebtes Ziel für Spaziergänger am Ufer, Angler und Naturbeobachter – ruhig, weitläufig und gut erreichbar.",
    tags: ["Angeln", "Spazieren", "Natur"],
    location: "Goslar",
  },
  {
    icon: MapPin,
    category: "Wander- & Höhenstraße",
    categoryColor: "text-moss",
    name: "Harzhochstraße",
    description:
      "Panoramastrecke entlang der Hochlagen des Harzes mit zahlreichen Aussichtspunkten und Zugängen zu Wanderwegen. Ideal als Ausgangsroute für Tagestouren in den Nationalpark.",
    tags: ["Panorama", "Wandern", "Aussicht"],
    location: "Harzregion",
  },
];

export default function PopularPlaces() {
  return (
    <section id="orte" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
              Beliebte Ziele
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-moss">
              Ein paar Favoriten zum Anfangen
            </h2>
            <p className="mt-3 text-ink/65 leading-relaxed max-w-lg">
              In der App findest du zu jedem Ort Fotos, Anfahrt, Barrierefreiheit
              und Aktivitäten – hier schon mal ein erster Einblick.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place, i) => (
            <article
              key={place.name}
              className="reveal group rounded-2xl border border-mist bg-white p-6 flex flex-col transition-shadow hover:shadow-lg hover:shadow-moss/5"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-sand ${place.categoryColor}`}>
                  <place.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                </span>
                <Star className="h-4 w-4 text-clay" fill="currentColor" strokeWidth={0} />
              </div>

              <p className={`mt-4 text-xs font-semibold uppercase tracking-wide ${place.categoryColor}`}>
                {place.category}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink leading-snug">
                {place.name}
              </h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed flex-1">
                {place.description}
              </p>

              <div className="mt-4 pt-4 border-t border-mist flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {place.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sand px-2.5 py-0.5 text-[11px] font-medium text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-ink/40 flex items-center gap-1 shrink-0">
                  <MapPin className="h-3 w-3" strokeWidth={1.8} />
                  {place.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
