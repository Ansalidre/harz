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
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: welche talsperren gibt es im harz?.
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
