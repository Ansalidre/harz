import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Wann ist die beste Zeit für einen Besuch der Harzer Wasserfälle? – Harz Wasser Guide",
  description: "Frühjahrsflut nach der Schneeschmelze, Herbstfarben oder eingefrorene Wasserfälle im Winter – der Saisonüberblick.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Wann ist die beste Zeit für einen Besuch der Harzer Wasserfälle?"
        subtitle="Frühjahrsflut nach der Schneeschmelze, Herbstfarben oder eingefrorene Wasserfälle im Winter – der Saisonüberblick."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–3 Stunden",
          bestSeason: "März – Mai und Oktober – November",
          dogs: true,
          parking: "Vorhanden, im Frühjahr manchmal voll",
          familyFriendly: true,
          mapLat: 51.87,
          mapLng: 10.57,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wann ist das Wasser am stärksten?", a: "März bis Mai nach der Schneeschmelze – dann führen alle Bäche Hochwasser und die Wasserfälle sind am imposantesten." },
          { q: "Kann man Wasserfälle auch im Winter besuchen?", a: "Ja – bei starkem Frost gefrieren einige Wasserfälle und bilden fantastische Eisformationen. Vorsicht auf vereisten Wegen." },
          { q: "Wann ist es am wenigsten voll?", a: "Unter der Woche im Frühjahr oder Herbst – die Hochsaison im Sommer kann an Wochenenden sehr voll werden." },
          { q: "Lohnt sich der Besuch auch im Sommer?", a: "Im trockenen Hochsommer führen manche Bäche wenig Wasser. Trotzdem lohnt der Besuch für Walderlebnis und Abkühlung." },
          { q: "Was sollte ich für den Besuch mitbringen?", a: "Festes Schuhwerk, Regenjacke, Wasser und im Frühjahr/Herbst warme Kleidung. Kamera oder Smartphone für Fotos." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: wann ist die beste zeit für einen besuch der harzer wasserfälle?.
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
