import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Gibt es Wasserwanderwege im Harz für Familien? – Harz Wasser Guide",
  description: "Kurze Routen mit Erlebnischarakter, Naturlehrpfaden und spannenden Stationen für Kinder.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Gibt es Wasserwanderwege im Harz für Familien?"
        subtitle="Kurze Routen mit Erlebnischarakter, Naturlehrpfaden und spannenden Stationen für Kinder."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–2 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Familienfreundliche Parkplätze an den Startpunkten",
          familyFriendly: true,
          mapLat: 51.85,
          mapLng: 10.45,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wie lang sollte eine Familienwanderung mit Kindern sein?", a: "Mit kleinen Kindern 3–5 km planen. Die Erlebnisdichte ist wichtiger als die Streckenlänge." },
          { q: "Gibt es Naturlehrpfade für Kinder?", a: "Ja, im Nationalpark Harz gibt es ausgeschilderte Erlebnispfade mit Infotafeln zur Natur und zum Wasserregal." },
          { q: "Darf man in den Gräben planschen?", a: "Die Gräben führen Trinkwasser – Betreten und Plantschen ist verboten. Natürliche Bachläufe sind teils freier zugänglich." },
          { q: "Welche Tiere kann man unterwegs sehen?", a: "Eisvögel, Wasseramsel, Forellen, Frösche und im Nationalpark auch Luchse und Wildkatzen." },
          { q: "Gibt es Spielplätze entlang der Wasserwanderwege?", a: "In einigen Ortschaften entlang der Routen gibt es Spielplätze als Zwischenstopp." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Mit Kindern wandern geht immer — wenn das Ziel stimmt. Ein Wasserweg hat dabei einen
            entscheidenden Vorteil: Das plätschernde Wasser hält Kinder bei Laune wie kaum etwas anderes.
          </p>
          <h2>Prinzenteich-Runde – Traumstart für Familien</h2>
          <p>
            Nur 3 km, kaum Steigung, ein schöner historischer Teich als Ziel. Unterwegs erklären
            Infotafeln die Geschichte des Wasserregals — auf kindgerechte Weise.
          </p>
          <div className="info-box">
            <div className="label">Prinzenteich-Runde für Familien</div>
            <p>Länge: ca. 3 km · Dauer: 1–1,5 Stunden · Schwierigkeit: Leicht ·
            Geeignet ab: 4 Jahren · Parkplatz: In Clausthal-Zellerfeld vorhanden</p>
          </div>
          <h2>Was Kinder auf Wasserwanderwegen entdecken</h2>
          <p>
            Wasseramsel und Eisvogel fliegen am Ufer entlang, Forellen stehen im klaren Wasser,
            Frösche springen ins Gras. Mit einem kleinen Fernglas und einem Bestimmungsbuch
            wird der Wasserweg zur Naturoase.
          </p>
          <div className="highlight">
            <p><strong>Aktivität für Kinder:</strong> Steckt einen Papierschiffchen-Wettbewerb
            auf dem Graben durch — wessen Schiff kommt zuerst ans Ziel?</p>
          </div>
          <h2>Tipps für die Planung</h2>
          <p>
            Plane maximal 5 km für Kinder unter 8 Jahren. Baue Pausen ein — am besten
            an einem schönen Teich oder einem breiten Graben, wo man ein bisschen spielen kann.
          </p>
          <h3>Wann ist der beste Zeitpunkt?</h3>
          <p>
            <strong>Frühling (April–Juni)</strong> ist ideal — die Natur erwacht, das Wasser
            führt ausreichend Wasser und die Temperaturen sind angenehm.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
