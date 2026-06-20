import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Seen im Harz eignen sich für Familien mit Kindern? – Harz Wasser Guide",
  description: "Flache Ufer, Spielmöglichkeiten und Picknickwiesen – die familienfreundlichsten Badeseen im Harz.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welche Seen im Harz eignen sich für Familien mit Kindern?"
        subtitle="Flache Ufer, Spielmöglichkeiten und Picknickwiesen – die familienfreundlichsten Badeseen im Harz."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht",
          duration: "Halber bis ganzer Tag",
          bestSeason: "Juli – August",
          dogs: true,
          parking: "Familiengerechte Parkplätze vorhanden",
          familyFriendly: true,
          mapLat: 51.88,
          mapLng: 10.56,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Welcher See hat den flachsten Zugang für Kleinkinder?", a: "Der Juessee bei Bad Harzburg gilt als besonders familienfreundlich mit flachem Sandstrand." },
          { q: "Gibt es Spielplätze an den Badeseen?", a: "Einige Badestellen haben Spielbereiche. Der Juessee und die Okertalsperre bieten Freizeitinfrastruktur." },
          { q: "Sind Grillplätze an den Seen vorhanden?", a: "An ausgewählten Stellen gibt es Grillmöglichkeiten. Im Nationalpark ist Grillen nicht erlaubt." },
          { q: "Wie lange dauert ein Familienausflug zum See?", a: "Plant mindestens einen halben Tag ein. Mit Anfahrt, Baden und Picknick sind 4–6 Stunden realistisch." },
          { q: "Gibt es Rettungsschwimmer an den Badeseen?", a: "Nur an wenigen offiziellen Badestellen. Immer auf Kinder achten – die meisten Seen sind unbewacht." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: welche seen im harz eignen sich für familien mit kindern?.
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
