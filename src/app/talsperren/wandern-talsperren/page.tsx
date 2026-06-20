import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Kann man an den Talsperren im Harz wandern? – Harz Wasser Guide",
  description: "Rundwanderwege, Aussichtspunkte und Einkehrmöglichkeiten entlang der Stauseen des Harzes.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Kann man an den Talsperren im Harz wandern?"
        subtitle="Rundwanderwege, Aussichtspunkte und Einkehrmöglichkeiten entlang der Stauseen des Harzes."
        category="Talsperren"
        categoryHref="/talsperren"
        categoryColor="bg-cyan-500/20 text-cyan-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–6 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Wanderparkplätze an den Startpunkten der Runden",
          familyFriendly: true,
          mapLat: 51.73,
          mapLng: 10.55,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Gibt es ausgeschilderte Rundwanderwege um die Talsperren?", a: "Ja, die meisten großen Talsperren haben ausgeschilderte Runden – von 5 km bis über 20 km Länge." },
          { q: "Welcher Wanderweg ist der schönste an einer Talsperre?", a: "Die Runde um den Okerstausee mit Blick auf die Oker-Schlucht gilt als besonders beeindruckend." },
          { q: "Wie lange ist die Runde um die Rappbodetalsperre?", a: "Die Standardrunde beträgt ca. 12 km und ist in 3–4 Stunden zu bewältigen." },
          { q: "Gibt es Aussichtspunkte über den Stausee?", a: "Ja, an Okertalsperre und Rappbodetalsperre gibt es markierte Aussichtspunkte mit Panoramablick." },
          { q: "Sind die Wege auch im Winter begehbar?", a: "Viele Wege sind bei normalen Winterbedingungen begehbar. Bei Eis und Schnee ist Vorsicht geboten." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Die Harzer Talsperren sind nicht nur Wasserspeicher — sie sind auch Ausgangspunkte
            für einige der schönsten Wanderungen in der Region. Ruhige Uferwege, spektakuläre
            Ausblicke auf die Staumauer und ständiges Wasserrauschen begleiten den Wanderer.
          </p>
          <h2>Rundwanderung Okertalsperre – Highlight des Harzes</h2>
          <p>
            Die Runde um den Okerstausee führt auf ca. 12 km durch abwechslungsreichen Wald,
            vorbei an der imposanten Staumauer und durch die wild-romantische Oker-Schlucht.
          </p>
          <div className="info-box">
            <div className="label">Rundwanderung Okertalsperre</div>
            <p>Länge: ca. 12 km · Höhenunterschied: ca. 300 m · Dauer: 3,5–4,5 Stunden ·
            Schwierigkeit: Mittel · Parkplatz: An der Staumauer, kostenpflichtig</p>
          </div>
          <h2>Sösetalsperre – einfach und familientauglich</h2>
          <p>
            Die Runde um den Sösesee ist deutlich gemächlicher und gut für Familien geeignet.
            Im Sommer lädt die Badestelle zum Abkühlen ein.
          </p>
          <h2>Rappbodetalsperre – Wandern mit Spektakel</h2>
          <p>
            Wer die Titan-RT Hängebrücke überquert, erlebt das Highlight der Tour
            in 100 Meter Höhe über dem Wasser.
          </p>
          <div className="highlight">
            <p><strong>Kombinations-Tipp:</strong> Starte an der Rappbodetalsperre, überquere
            die Hängebrücke und wandere dann auf dem Uferweg zurück — zwei völlig unterschiedliche Perspektiven.</p>
          </div>
          <h3>Beste Jahreszeit zum Wandern</h3>
          <p>
            <strong>Frühling und Herbst</strong> sind die besten Jahreszeiten — angenehme Temperaturen,
            wenig Besucher und die Natur in ihrer schönsten Form.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
