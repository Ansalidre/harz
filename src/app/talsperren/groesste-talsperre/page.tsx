import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Talsperre im Harz ist die größte? – Harz Wasser Guide",
  description: "Die Rappbodetalsperre – Deutschlands größte Trinkwassertalsperre und ein Besuchermagnet im Harz.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welche Talsperre im Harz ist die größte?"
        subtitle="Die Rappbodetalsperre – Deutschlands größte Trinkwassertalsperre und ein Besuchermagnet im Harz."
        category="Talsperren"
        categoryHref="/talsperren"
        categoryColor="bg-cyan-500/20 text-cyan-200"
        meta={{
          difficulty: "Leicht",
          duration: "2–4 Stunden",
          bestSeason: "Ganzjährig",
          dogs: true,
          parking: "Großer Parkplatz am Besucherzentrum, kostenpflichtig",
          familyFriendly: true,
          mapLat: 51.726,
          mapLng: 10.895,
          mapZoom: 13,
        }}
        faqs={[
          { q: "Wie hoch ist die Staumauer der Rappbodetalsperre?", a: "Die Staumauer ist 106 m hoch und damit eine der größten Deutschlands." },
          { q: "Was ist die Hängebrücke an der Rappbodetalsperre?", a: "Die Titan-RT ist mit 483 m Länge Europas längste Hängebrücke für Fußgänger – 100 m über dem Stausee." },
          { q: "Wie viel Wasser fasst die Rappbodetalsperre?", a: "Das Gesamtspeichervolumen beträgt ca. 109 Millionen Kubikmeter." },
          { q: "Für wen versorgt die Talsperre Trinkwasser?", a: "Sie versorgt Millionen Menschen in Sachsen-Anhalt und angrenzenden Bundesländern mit Trinkwasser." },
          { q: "Gibt es Führungen an der Rappbodetalsperre?", a: "Ja, es gibt regelmäßige Führungen durch die Staumauer und Informationsveranstaltungen am Besucherzentrum." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: welche talsperre im harz ist die größte?.
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
