import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Was sind die schönsten Wasserwanderwege im Harz? – Harz Wasser Guide",
  description: "Entlang von Bächen, Gräben und historischen Wasseranlagen – die schönsten Routen des Harzes.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Was sind die schönsten Wasserwanderwege im Harz?"
        subtitle="Entlang von Bächen, Gräben und historischen Wasseranlagen – die schönsten Routen des Harzes."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–6 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Wanderparkplätze an den Startpunkten",
          familyFriendly: true,
          mapLat: 51.8,
          mapLng: 10.52,
          mapZoom: 10,
        }}
        faqs={[
          { q: "Was unterscheidet einen Wasserwanderweg von einem normalen Wanderweg?", a: "Er führt dauerhaft oder wiederholt entlang von Gewässern – Bächen, Gräben, Teichen oder Seen – und nutzt historische Wasserläufe als Leitlinie." },
          { q: "Welche Ausrüstung brauche ich?", a: "Festes Schuhwerk, Regenjacke und Wasser. Im Nationalpark sollte man auf den Wegen bleiben." },
          { q: "Sind Wasserwanderwege ausgeschildert?", a: "Die wichtigsten sind ausgeschildert, kleinere Routen teils nicht. Die App hilft bei der Navigation." },
          { q: "Kann man Wasserwanderwege im Winter gehen?", a: "Viele sind auch im Winter begehbar. Vereiste Gräben und Schnee können die Wege schwieriger machen." },
          { q: "Gibt es Einkehrmöglichkeiten unterwegs?", a: "Je nach Route und Saison gibt es Berghütten, Gaststätten oder Schutzhütten. Die App zeigt aktuelle Möglichkeiten." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Das Besondere an den Wasserwanderwegen im Harz ist, dass sie einem der faszinierendsten
            Wassersysteme Europas folgen. Das Oberharzer Wasserregal prägt bis heute die Landschaft —
            Wandern auf diesen Wegen bedeutet Geschichte spüren.
          </p>
          <h2>Der Rehberger Graben – Klassiker unter den Wasserwanderwegen</h2>
          <p>
            Der Rehberger Graben führt auf knapp 19 km von Sankt Andreasberg bis Königshütte —
            fast immer leicht bergab, immer entlang des historischen Grabens. Eine der schönsten
            Halbtageswanderungen im gesamten Harz.
          </p>
          <div className="info-box">
            <div className="label">Rehberger Graben</div>
            <p>Länge: ca. 19 km · Höhenunterschied: ca. 300 m bergab · Dauer: 4–5 Stunden ·
            Schwierigkeit: Leicht bis Mittel · Einkehr: In Sankt Andreasberg und Königshütte</p>
          </div>
          <h2>Graben-Wanderweg Clausthal – das Herz des Wasserregals</h2>
          <p>
            Rund um Clausthal-Zellerfeld verlaufen mehrere historische Gräben, die man zu einem
            ausgedehnten Netzwerk verbinden kann. Die Teiche des Wasserregals liegen hier besonders dicht.
          </p>
          <div className="highlight">
            <p><strong>Tipp:</strong> Kombiniere die Graben-Wanderwege mit einem Besuch im
            Oberharzer Bergwerksmuseum in Clausthal-Zellerfeld.</p>
          </div>
          <h2>Ilsetal – romantischstes Bachtal im Harz</h2>
          <p>
            Das Ilsetal zwischen Ilsenburg und dem Brocken gehört zu den romantischsten Wanderzielen.
            Der Weg folgt der Ilse durch Felsen und dichtes Unterholz. Wasserfälle und Stromschnellen
            begleiten den Wanderer bis hinauf auf den Brocken.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
