import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Gibt es versteckte Seen oder Geheimtipps im Harz? – Harz Wasser Guide",
  description: "Abseits der großen Talsperren: ruhige Waldteiche, kleine Naturseen und unbekannte Badestellen im Harz.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Gibt es versteckte Seen oder Geheimtipps im Harz?"
        subtitle="Abseits der großen Talsperren: ruhige Waldteiche, kleine Naturseen und unbekannte Badestellen im Harz."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–5 Stunden",
          bestSeason: "Mai – Oktober",
          dogs: true,
          parking: "Teils nur Waldparkplätze oder Wanderparkplätze",
          familyFriendly: true,
          mapLat: 51.73,
          mapLng: 10.6,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wie findet man wenig bekannte Seen im Harz?", a: "Die Harz Wasser Guide App zeigt auch kleine Waldteiche und wenig bekannte Badestellen, die auf keiner Tourismuskarte stehen." },
          { q: "Sind Geheimtipps-Seen sicher zum Baden?", a: "Vorsicht: Unbekannte Gewässer können ungeklärte Wasserqualität haben. Immer vorher informieren." },
          { q: "Darf man überall zelten am See?", a: "Wildcampen ist im Nationalpark Harz verboten. Außerhalb nur auf ausgewiesenen Plätzen." },
          { q: "Sind diese Seen mit dem Auto erreichbar?", a: "Manche nur über Forstwege zu Fuß. Wir empfehlen die Navigation in der App für genaue Anfahrtsbeschreibungen." },
          { q: "Welche Jahreszeit ist für stille Seen am schönsten?", a: "Herbst: weniger Besucher, Spiegelungen im Wasser, buntes Laub – besonders reizvoll für Fotografen." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: gibt es versteckte seen oder geheimtipps im harz?.
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
