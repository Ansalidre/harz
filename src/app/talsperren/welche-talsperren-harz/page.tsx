import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Talsperren gibt es im Harz? – Harz Wasser Guide",
  description: "Von der Rappbodetalsperre bis zur Sösetalsperre – alle großen Stauanlagen des Harzes im Überblick.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welche Talsperren gibt es im Harz?"
        subtitle="Von der Rappbodetalsperre bis zur Sösetalsperre – alle großen Stauanlagen des Harzes im Überblick."
        category="Talsperren"
        categoryHref="/talsperren"
        categoryColor="bg-cyan-500/20 text-cyan-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–4 Stunden pro Talsperre",
          bestSeason: "Ganzjährig",
          dogs: true,
          parking: "Parkplätze an allen großen Talsperren vorhanden",
          familyFriendly: true,
          mapLat: 51.72,
          mapLng: 10.89,
          mapZoom: 10,
        }}
        faqs={[
          { q: "Wie viele Talsperren gibt es im Harz?", a: "Im Harzgebiet gibt es über 20 Talsperren und Stauanlagen unterschiedlicher Größe – von kleinen Hochbehältern bis zur Rappbodetalsperre." },
          { q: "Welche Talsperren sind öffentlich zugänglich?", a: "Die meisten Talsperren haben öffentliche Wege an den Ufern. Gesperrte Bereiche schützen das Trinkwasser." },
          { q: "Kann man an den Talsperren angeln?", a: "Mit gültigem Angelschein ja, an ausgewiesenen Stellen. Die App zeigt Angelspots im Harz." },
          { q: "Gibt es Gastronomie an den Talsperren?", a: "An größeren Talsperren wie der Rappbodetalsperre und Okertalsperre gibt es saisonale Gastronomie." },
          { q: "Welche Talsperre hat die eindrucksvollste Staumauer?", a: "Die Rappbodetalsperre mit 106 m Höhe und Europas längster Hängebrücke gilt als spektakulärste Anlage." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Der Harz ist das wasserreichste Mittelgebirge Norddeutschlands. Mehr als 20 Stauanlagen
            verteilen sich über das Gebirge — sie versorgen Millionen Menschen mit Trinkwasser,
            schützen vor Hochwasser und erzeugen Strom.
          </p>
          <h2>Rappbodetalsperre – die Königin der Harzer Talsperren</h2>
          <p>
            Mit einer Sperrmauerhöhe von 106 Metern ist die Rappbodetalsperre die größte Talsperre
            Deutschlands nach Fassungsvermögen. Sie versorgt große Teile Sachsen-Anhalts mit Trinkwasser.
            Seit 2017 zieht die Titan-RT Hängebrücke — mit 483 Metern Europas längste — Besucher aus ganz Europa an.
          </p>
          <div className="info-box">
            <div className="label">Rappbodetalsperre</div>
            <p>Höhe Staumauer: 106 m · Stauvolumen: 109 Mio. m³ · Titan-RT Hängebrücke: 483 m ·
            Parkplatz: Vorhanden, kostenpflichtig</p>
          </div>
          <h2>Okertalsperre – malerisch im Tal</h2>
          <p>
            Die Okertalsperre bei Goslar liegt eingebettet zwischen bewaldeten Hängen und ist
            vor allem bei Wanderern beliebt. Die Oker-Schlucht unterhalb der Mauer gehört zu
            den eindrucksvollsten Naturszenerien des Harzes.
          </p>
          <h2>Sösetalsperre – Erholung und Natur</h2>
          <p>
            Die Sösetalsperre bei Osterode ist die größte Trinkwassertalsperre in Niedersachsen
            und ein beliebtes Ausflugsziel. Sie hat eine Badestelle und gut ausgebaute Wanderwege.
          </p>
          <div className="highlight">
            <p><strong>Tipp:</strong> Die Harz Wasser Guide App zeigt alle Talsperren auf einer
            interaktiven Karte mit Wanderwegen, Parkmöglichkeiten und Besonderheiten.</p>
          </div>
          <h3>Welche Talsperre eignet sich für Tagesausflüge?</h3>
          <p>
            Für Baden: <strong>Sösetalsperre</strong>. Für Ingenieurbaukunst und Hängebrücke:
            <strong>Rappbodetalsperre</strong>. Für ruhige Wanderungen: <strong>Okertalsperre</strong>.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
