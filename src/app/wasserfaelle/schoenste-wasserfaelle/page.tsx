import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Wo befinden sich die schönsten Wasserfälle im Harz? – Harz Wasser Guide",
  description: "Romkerhaller Wasserfall, Radauwasserfall und weitere Naturhighlights – mit Anfahrt und Wanderweg.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Wo befinden sich die schönsten Wasserfälle im Harz?"
        subtitle="Romkerhaller Wasserfall, Radauwasserfall und weitere Naturhighlights – mit Anfahrt und Wanderweg."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "1–3 Stunden",
          bestSeason: "März – Mai und Oktober – November",
          dogs: true,
          parking: "Parkplätze an den meisten Wasserfällen vorhanden",
          familyFriendly: true,
          mapLat: 51.87,
          mapLng: 10.57,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wie viele Wasserfälle gibt es im Harz?", a: "Es gibt mehrere dutzend Wasserfälle – von kleinen Bachkaskaden bis zu imposanten Natürlichkeiten wie dem Romkerhaller Wasserfall." },
          { q: "Wann führen die Wasserfälle am meisten Wasser?", a: "Im Frühjahr nach der Schneeschmelze und nach starken Regenfällen im Herbst sind die Wasserfälle am beeindruckendsten." },
          { q: "Sind die Wasserfälle beleuchtet?", a: "Einige Wasserfälle wie der Romkerhaller haben historische Beleuchtungsanlagen für Abendveranstaltungen." },
          { q: "Kann man die Wasserfälle mit dem Rollstuhl erreichen?", a: "Einige größere Wasserfälle haben befestigte Wege. Für Details empfiehlt sich eine Vorabrecherche über die App." },
          { q: "Gibt es Eintrittsgeld?", a: "Der Romkerhaller Wasserfall hat einen kleinen Eintritt. Die meisten anderen sind frei zugänglich." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: wo befinden sich die schönsten wasserfälle im harz?.
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
