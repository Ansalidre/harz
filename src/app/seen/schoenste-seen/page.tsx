import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Seen im Harz sind die schönsten? – Harz Wasser Guide",
  description: "Vom Oderteich bis zum Okerstausee – die schönsten Gewässer des Harzes im Überblick.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welche Seen im Harz sind die schönsten?"
        subtitle="Vom Oderteich bis zum Okerstausee – die schönsten Gewässer des Harzes im Überblick."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–4 Stunden je nach See",
          bestSeason: "Mai – Oktober",
          dogs: true,
          parking: "Kostenpflichtige Parkplätze an den meisten Seen",
          familyFriendly: true,
          mapLat: 51.72,
          mapLng: 10.54,
          mapZoom: 10,
        }}
        faqs={[
          { q: "Welche Seen eignen sich für Schwimmer?", a: "Oderteich, Juessee und einige Badeteiche rund um Bad Harzburg sind für Schwimmer freigegeben und gut zugänglich." },
          { q: "Sind alle Harzer Seen frei zugänglich?", a: "Die meisten Seen sind frei zugänglich. Talsperren haben teils Betretungsverbote im Uferbereich zum Schutz des Trinkwassers." },
          { q: "Gibt es Seen mit Verleih von Booten oder SUPs?", a: "An einigen Seen wie dem Juessee gibt es saisonalen Bootsverleih. Die Harz Wasser Guide App zeigt aktuelle Angebote." },
          { q: "Wie ist die Wasserqualität an den Harzer Seen?", a: "Die meisten Badestellen haben sehr gute Wasserqualität. Aktuelle Messwerte gibt es beim Niedersächsischen Landesgesundheitsamt." },
          { q: "Welcher See ist am wenigsten touristisch?", a: "Der Silberteich bei Clausthal-Zellerfeld und kleine Waldteiche im Nationalpark sind deutlich ruhiger als die großen Talsperren." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: welche seen im harz sind die schönsten?.
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
