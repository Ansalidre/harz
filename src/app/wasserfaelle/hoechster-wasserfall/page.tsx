import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welcher Wasserfall im Harz ist der höchste? – Harz Wasser Guide",
  description: "Ein Vergleich der bekanntesten Wasserfälle – mit Höhe, Besonderheiten und den besten Fotospots.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welcher Wasserfall im Harz ist der höchste?"
        subtitle="Ein Vergleich der bekanntesten Wasserfälle – mit Höhe, Besonderheiten und den besten Fotospots."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "1–2 Stunden",
          bestSeason: "März – Mai",
          dogs: true,
          parking: "Wanderparkplätze in der Nähe",
          familyFriendly: true,
          mapLat: 51.88,
          mapLng: 10.56,
          mapZoom: 13,
        }}
        faqs={[
          { q: "Wie hoch ist der Romkerhaller Wasserfall?", a: "Der Romkerhaller Wasserfall stürzt in mehreren Stufen über insgesamt ca. 20 Meter in die Tiefe." },
          { q: "Welcher Wasserfall ist am leichtesten zu erreichen?", a: "Der Radauwasserfall bei Bad Harzburg ist über einen kurzen, gut ausgebauten Weg bequem erreichbar." },
          { q: "Gibt es Wasserfälle, die man nur mit Wanderung erreicht?", a: "Ja, einige Wasserfälle in den Tälern des Nationalparks erfordern 1–2 Stunden Fußweg." },
          { q: "Was ist der schönste Fotospot am Wasserfall?", a: "Am Radauwasserfall gibt es eine Holzbrücke mit direktem Blick auf den Wasserfall – besonders bei Gegenlicht." },
          { q: "Sind die Wasserfälle ganzjährig aktiv?", a: "Im Sommer führen viele Bäche wenig Wasser. Im Winter können sie teilweise einfrieren – ein spektakulärer Anblick." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: welcher wasserfall im harz ist der höchste?.
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
