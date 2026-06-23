import {
  MapPin,
  Droplet,
  Waves,
  Sailboat,
  Footprints,
  Mountain,
  Fish,
  Zap,
  Building2,
  Landmark,
  Flame,
  Dumbbell,
  TreePine,
  Home,
  PersonStanding,
  Anchor,
} from "lucide-react";

const groups = [
  {
    label: "Wasser & Natur",
    dot: "bg-sage",
    color: "text-sage",
    items: [
      { icon: MapPin,          name: "Badesee & Teiche" },
      { icon: Home,            name: "Talsperre" },
      { icon: PersonStanding,  name: "Schwimmbad" },
      { icon: Waves,           name: "Wasserfall" },
      { icon: Droplet,         name: "Quellen & Quellorte" },
      { icon: MapPin,          name: "Moore" },
      { icon: Footprints,      name: "Wasser Wander Wege" },
    ],
  },
  {
    label: "Wassersport",
    dot: "bg-emerald-500",
    color: "text-emerald-600",
    items: [
      { icon: Sailboat,  name: "Bootsverleih" },
      { icon: Zap,       name: "Stand-up-Paddling" },
      { icon: Anchor,    name: "Kanufahren" },
      { icon: Waves,     name: "Wildwasser" },
      { icon: Fish,      name: "Angeln" },
    ],
  },
  {
    label: "Besondere Orte",
    dot: "bg-amber-400",
    color: "text-amber-600",
    items: [
      { icon: Flame,    name: "Kneipp-Anlage" },
      { icon: Waves,    name: "Oberharzer Wasserwirtschaft" },
      { icon: Landmark, name: "Welterbe Harz" },
    ],
  },
  {
    label: "Klettern",
    dot: "bg-rose-400",
    color: "text-rose-500",
    items: [
      { icon: Mountain,  name: "Outdoor" },
      { icon: Building2, name: "Indoor" },
      { icon: TreePine,  name: "Seilparks" },
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
            Egal ob ruhiger Badetag, eine Wanderung am Wasser, Stand-up-Paddling
            auf der Talsperre oder historische Welterbe-Stätten entlang der Harzhochstraße
            – die App sortiert alle Orte in klare Kategorien.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, gi) => (
            <div key={group.label} className="reveal" style={{ animationDelay: `${gi * 90}ms` }}>
              <div className="flex items-center gap-2 mb-5">
                <span className={`h-2 w-2 rounded-full ${group.dot}`} />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {group.label}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl bg-sand/60 border border-mist px-4 py-2.5 text-sm font-medium text-ink/85"
                  >
                    <item.icon className={`h-4 w-4 ${group.color} shrink-0`} strokeWidth={1.8} />
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
