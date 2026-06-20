import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Kann man zu den Wasserfällen im Harz wandern? – Harz Wasser Guide",
  description: "Wanderrouten, Schwierigkeitsgrade und die schönsten Aussichtspunkte auf dem Weg zu den Harzer Wasserfällen.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Kann man zu den Wasserfällen im Harz wandern?"
        subtitle="Wanderrouten, Schwierigkeitsgrade und die schönsten Aussichtspunkte auf dem Weg zu den Harzer Wasserfällen."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–5 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Wanderparkplätze an den Talorten",
          familyFriendly: true,
          mapLat: 51.87,
          mapLng: 10.55,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Welche Wanderroute zu einem Wasserfall ist besonders schön?", a: "Die Route von Bad Harzburg durch das Radautal zum Radauwasserfall ist eine der schönsten und beliebtesten im Harz." },
          { q: "Wie schwierig sind die Wanderwege zu den Wasserfällen?", a: "Die meisten sind leicht bis mittel. Steile Talwände können anspruchsvoller sein." },
          { q: "Sind die Wege auch nach Regen gut begehbar?", a: "Oft sind die Wege nach Regen rutschig. Gutes Schuhwerk und Vorsicht sind empfohlen." },
          { q: "Kann man mehrere Wasserfälle an einem Tag verbinden?", a: "Ja, einige Wanderrouten verbinden mehrere Wasserfälle. Die App zeigt solche Mehrziel-Routen." },
          { q: "Gibt es geführte Wanderungen zu den Wasserfällen?", a: "Lokale Wanderführer und der Harzer Wandernadel-Verein bieten geführte Touren an – besonders im Frühjahr." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: kann man zu den wasserfällen im harz wandern?.
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
