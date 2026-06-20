import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Kann man im Harz in Seen baden? – Harz Wasser Guide",
  description: "Offizielle Badestellen, Wasserqualität und was du vor dem Sprung ins kühle Nass wissen solltest.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Kann man im Harz in Seen baden?"
        subtitle="Offizielle Badestellen, Wasserqualität und was du vor dem Sprung ins kühle Nass wissen solltest."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht",
          duration: "Halber Tag",
          bestSeason: "Juni – September",
          dogs: true,
          parking: "Vorhanden an den offiziellen Badestellen",
          familyFriendly: true,
          mapLat: 51.88,
          mapLng: 10.56,
          mapZoom: 12,
        }}
        faqs={[
          { q: "Ist das Baden in allen Seen erlaubt?", a: "Nein. An Talsperren, die der Trinkwasserversorgung dienen, ist Baden verboten. Die App zeigt erlaubte Badestellen." },
          { q: "Gibt es bewachte Badestellen im Harz?", a: "Einige größere Badestellen sind saisonal bewacht. Viele Naturbadestellen sind unbewacht – Schwimmen auf eigene Gefahr." },
          { q: "Wie kalt ist das Wasser in den Harzer Seen?", a: "Je nach Höhenlage und Jahreszeit zwischen 16 und 22°C im Sommer. Hochgelegene Seen bleiben kühler." },
          { q: "Gibt es Sanitäranlagen an den Badestellen?", a: "Große Badestellen wie der Juessee haben sanitäre Anlagen. Kleinere Naturbadestellen meist nicht." },
          { q: "Darf mein Hund mit in den See?", a: "An vielen Naturbadestellen ja. An offiziellen Badegewässern gibt es teils Hundebereiche oder Einschränkungen." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: kann man im harz in seen baden?.
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
