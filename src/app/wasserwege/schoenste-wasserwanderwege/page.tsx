import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Was sind die schönsten Wasserwanderwege im Harz? – Harz Wasser Guide",
  description: "Entlang von Bächen, Gräben und historischen Wasseranlagen – die schönsten Routen des Harzes.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Was sind die schönsten Wasserwanderwege im Harz?"
        subtitle="Entlang von Bächen, Gräben und historischen Wasseranlagen – die schönsten Routen des Harzes."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–6 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Wanderparkplätze an den Startpunkten",
          familyFriendly: true,
          mapLat: 51.8,
          mapLng: 10.52,
          mapZoom: 10,
        }}
        faqs={[
          { q: "Was unterscheidet einen Wasserwanderweg von einem normalen Wanderweg?", a: "Er führt dauerhaft oder wiederholt entlang von Gewässern – Bächen, Gräben, Teichen oder Seen – und nutzt historische Wasserläufe als Leitlinie." },
          { q: "Welche Ausrüstung brauche ich?", a: "Festes Schuhwerk, Regenjacke und Wasser. Im Nationalpark sollte man auf den Wegen bleiben." },
          { q: "Sind Wasserwanderwege ausgeschildert?", a: "Die wichtigsten sind ausgeschildert, kleinere Routen teils nicht. Die App hilft bei der Navigation." },
          { q: "Kann man Wasserwanderwege im Winter gehen?", a: "Viele sind auch im Winter begehbar. Vereiste Gräben und Schnee können die Wege schwieriger machen." },
          { q: "Gibt es Einkehrmöglichkeiten unterwegs?", a: "Je nach Route und Saison gibt es Berghütten, Gaststätten oder Schutzhütten. Die App zeigt aktuelle Möglichkeiten." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: was sind die schönsten wasserwanderwege im harz?.
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
