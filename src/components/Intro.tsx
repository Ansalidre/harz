export default function Intro() {
  return (
    <section className="bg-cream py-16 sm:py-20 border-b border-mist">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
              Der Harz
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-moss leading-snug">
              Mittelgebirge, Wald und Wasser –{" "}
              <span className="italic">seit Jahrhunderten ein besonderer Ort</span>
            </h2>
            <p className="mt-5 text-ink/75 leading-relaxed">
              Der Harz erstreckt sich über die Grenzen von Niedersachsen,
              Sachsen-Anhalt und Thüringen – und ist das nördlichste Mittelgebirge
              Deutschlands. Über Jahrhunderte war er Bergbauregion; die
              Wasserwirtschaft der Oberharzer Bergleute – das Oberharzer Wasserregal – prägt bis heute die Landschaft.
              Heute lockt er mit dem Nationalpark Harz, dem Brocken als
              höchstem Gipfel des Nordens, und einem dichten Netz aus Bächen,
              Talsperren, Mooren und Wasserfällen.
            </p>
          </div>

          <div className="reveal [animation-delay:120ms] space-y-5">
            <div className="rounded-2xl bg-sand border border-mist px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-sage mb-1">Lage</p>
              <p className="text-sm text-ink/80 leading-relaxed">
                Zwischen Goslar, Quedlinburg und Nordhausen – im Herzen Norddeutschlands,
                etwa 1–2 Stunden von Hannover, Braunschweig, Magdeburg und Erfurt entfernt.
              </p>
            </div>
            <div className="rounded-2xl bg-sand border border-mist px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-clay mb-1">Historisches Weltkulturerbe</p>
              <p className="text-sm text-ink/80 leading-relaxed">
                Das Oberharzer Wasserregal – ein historisches System aus über
                100 Teichen, Gräben und Wasserläufen – wurde 2010 in die
                Welterbeliste aufgenommen – gemeinsam mit dem Erzbergwerk Rammelsberg und der Altstadt Goslar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
