const bundeslaender = [
  { name: "Niedersachsen", towns: ["Goslar", "Bad Harzburg", "Clausthal-Zellerfeld", "Herzberg"] },
  { name: "Sachsen-Anhalt", towns: ["Quedlinburg", "Wernigerode", "Thale", "Ballenstedt"] },
  { name: "Thüringen", towns: ["Nordhausen", "Stolberg", "Bleicherode"] },
];

const highlights = [
  {
    label: "Nationalpark Harz",
    text: "Seit 2006 vereinter Nationalpark, größtes Schutzgebiet Norddeutschlands – mit Luchsen, Wildkatzen und uralten Buchenwäldern.",
  },
  {
    label: "Welterbe Bergbau",
    text: "Goslar, Rammelsberg und das Oberharzer Wasserregal sind gemeinsam UNESCO-Welterbe – über 3.000 Jahre Bergbaugeschichte.",
  },
  {
    label: "Wasser als Lebensader",
    text: "19 Talsperren versorgen Millionen Menschen in Norddeutschland mit Trinkwasser. Gleichzeitig sind sie Lebensraum und Freizeitraum.",
  },
  {
    label: "Brockenbahn",
    text: "Die Harzer Schmalspurbahn fährt seit 1899 auf den Brocken – eine der wenigen Dampfzahnradbahnen Deutschlands, die noch im Linienbetrieb sind.",
  },
];

export default function AboutRegion() {
  return (
    <section className="bg-sand/30 py-20 sm:py-28 border-t border-mist">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
            Über die Region
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-moss">
            Wo liegt der Harz – und was erwartet dich?
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-14">
          {/* Bundesländer + Ausgangsort-Liste */}
          <div className="reveal space-y-6">
            <p className="text-ink/70 leading-relaxed">
              Der Harz liegt im Schnittpunkt dreier Bundesländer – etwa
              90 Minuten von Hannover und 2 Stunden von Berlin entfernt.
              Viele Städte rund um das Mittelgebirge eignen sich als
              Ausgangspunkt für Tagestouren oder mehrtägige Aufenthalte.
            </p>

            <div className="space-y-4">
              {bundeslaender.map((bl) => (
                <div key={bl.name} className="rounded-2xl bg-cream border border-mist p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage mb-3">
                    {bl.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bl.towns.map((town) => (
                      <span
                        key={town}
                        className="rounded-full border border-mist bg-sand px-3 py-1 text-sm text-ink/75"
                      >
                        {town}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="reveal [animation-delay:100ms] space-y-5">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="flex gap-4 rounded-2xl bg-cream border border-mist p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss text-cream text-xs font-bold font-display mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {h.label}
                  </h3>
                  <p className="mt-1 text-sm text-ink/65 leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
