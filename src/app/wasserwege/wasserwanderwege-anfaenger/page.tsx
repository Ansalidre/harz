import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Wasserwanderwege im Harz sind auch für Anfänger geeignet? – Harz Wasser Guide",
  description: "Leichte Rundwanderungen mit wenig Höhenmetern, kurzen Strecken und schönen Wasserblicken.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welche Wasserwanderwege im Harz sind auch für Anfänger geeignet?"
        subtitle="Leichte Rundwanderungen mit wenig Höhenmetern, kurzen Strecken und schönen Wasserblicken."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–3 Stunden",
          bestSeason: "Mai – Oktober",
          dogs: true,
          parking: "Gut ausgebaute Parkplätze an den Startpunkten",
          familyFriendly: true,
          mapLat: 51.85,
          mapLng: 10.57,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Welche Strecke empfehlt sich als erste Wanderung?", a: "Der Graben-Wanderweg rund um Clausthal-Zellerfeld ist flach, gut ausgeschildert und historisch interessant – ideal für Einsteiger." },
          { q: "Wie viele Kilometer sollte ein Anfänger einplanen?", a: "5–10 km sind für Anfänger gut geeignet. Mit Pausen und Naturbeobachtungen kann das 3–4 Stunden dauern." },
          { q: "Sind die Wege befestigt oder unbefestigt?", a: "Die meisten Graben-Wanderwege sind auf unbefestigten, aber gut begehbaren Forstwegen. Festes Schuhwerk empfohlen." },
          { q: "Gibt es GPS-Tracks zum Download?", a: "In der Harz Wasser Guide App findest du Kartenausschnitte der wichtigsten Routen." },
          { q: "Was mache ich, wenn ich mich verlaufe?", a: "Im Zweifel auf dem Weg bleiben und zurückgehen. Die App zeigt deine Position auf der Karte." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: welche wasserwanderwege im harz sind auch für anfänger geeignet?.
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
