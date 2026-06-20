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
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: kann man an den talsperren im harz wandern?.
          </p>
          <div className="info-box">
            <div className="label">Hinweis</div>
            <p>Dieser Artikel befindet sich in Bearbeitung. Die vollständigen Informationen folgen in Kürze.</p>
          </div>
          <h2>Was dich erwartet</h2>
          <p>
            In diesem Ratgeber findest du bald ausführliche Informationen, praktische Tipps und alles Wissenswerte zum Thema.
            Außerdem: interaktive Karte, Bildergalerie, Tipps für Familien, Hundeinfos, Parkmöglichkeiten und mehr.
          </p>
          <ul>
            <li>Ausführliche Beschreibungen der schönsten Orte</li>
            <li>Praktische Tipps für deinen Besuch</li>
            <li>Hinweise zu Anfahrt und Parkmöglichkeiten</li>
            <li>Familientipps und Hundeinfos</li>
            <li>Beste Reisezeit und Schwierigkeitsgrad</li>
          </ul>
          <div className="highlight">
            <p>
              <strong>Tipp:</strong> Lade die Harz Wasser Guide App herunter und entdecke alle Orte direkt auf der interaktiven Karte – mit Navigation und Offline-Funktion.
            </p>
          </div>
        </div>
      </GuideLayout>
      <Footer />
    </>
  );
}
