import {
  Droplet,
  Waves,
  MapPin,
  Sailboat,
  Footprints,
  Mountain,
  Tent,
  Fish,
} from "lucide-react";

const groups = [
  {
    label: "Wasser & Natur",
    dot: "bg-sage",
    items: [
      { icon: MapPin, name: "Badesee & Teiche" },
      { icon: Droplet, name: "Talsperre" },
      { icon: Waves, name: "Wasserfall" },
      { icon: Droplet, name: "Quellen & Quellorte" },
    ],
  },
  {
    label: "Wassersport",
    dot: "bg-clay",
    items: [
      { icon: Sailboat, name: "Bootsverleih" },
      { icon: Footprints, name: "Kanufahren" },
      { icon: Fish, name: "Angeln" },
    ],
  },
  {
    label: "Wandern & Klettern",
    dot: "bg-moss",
    items: [
      { icon: Mountain, name: "Wasser-Wanderwege" },
      { icon: Tent, name: "Outdoor & Seilparks" },
    ],
  },
];

export default function Categories() {
  return (
    <section id="kategorien" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
            Was du findest
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-moss">
            Sortiert nach dem, was du vorhast
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Egal ob ruhiger Badetag, eine Wanderung am Wasser oder Stand-up-Paddling
            auf der Talsperre – die App sortiert alle Orte in klare Kategorien,
            damit du genau das findest, worauf du Lust hast.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {groups.map((group, gi) => (
            <div key={group.label} className="reveal" style={{ animationDelay: `${gi * 90}ms` }}>
              <div className="flex items-center gap-2 mb-5">
                <span className={`h-2 w-2 rounded-full ${group.dot}`} />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {group.label}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl bg-sand/60 border border-mist px-4 py-3 text-sm font-medium text-ink/85"
                  >
                    <item.icon className="h-4.5 w-4.5 text-sage shrink-0" strokeWidth={1.8} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
