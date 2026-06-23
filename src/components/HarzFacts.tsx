const facts = [
  {
    number: "1.141",
    unit: "m",
    label: "Brocken – höchster Gipfel Norddeutschlands",
    note: "und Namensgeber der berühmtesten deutschen Walpurgisnacht",
  },
  {
    number: "15",
    unit: "+",
    label: "Talsperren & Stauseen",
    note: "davon die Rappbodetalsperre – größte Trinkwassertalsperre Deutschlands",
  },
  {
    number: "247",
    unit: "km²",
    label: "Nationalpark Harz",
    note: "größtes Schutzgebiet in Norddeutschland, Heimat von Luchs und Schwarzstorch",
  },
  {
    number: "8.000",
    unit: "+",
    label: "km Wanderwege",
    note: "darunter der Harzer-Hexen-Stieg und der Kaiserweg",
  },
];

export default function HarzFacts() {
  return (
    <section className="bg-sand/40 py-16 sm:py-24 contour-lines-dark">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
            Der Harz in Zahlen
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-moss">
            Was diesen Ort ausmacht
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className="reveal rounded-2xl bg-cream border border-mist p-5 sm:p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-3xl sm:text-4xl font-semibold text-moss">
                  {fact.number}
                </span>
                <span className="font-display text-xl font-semibold text-clay">
                  {fact.unit}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-ink leading-snug">
                {fact.label}
              </p>
              <p className="mt-1.5 text-xs text-ink/55 leading-relaxed">
                {fact.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
