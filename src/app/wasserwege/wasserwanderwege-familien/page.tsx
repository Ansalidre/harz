import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Gibt es Wasserwanderwege im Harz für Familien? – Harz Wasser Guide",
  description: "Kurze Routen mit Erlebnischarakter, Naturlehrpfaden und spannenden Stationen für Kinder.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Gibt es Wasserwanderwege im Harz für Familien?"
        subtitle="Kurze Routen mit Erlebnischarakter, Naturlehrpfaden und spannenden Stationen für Kinder."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–2 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Familienfreundliche Parkplätze an den Startpunkten",
          familyFriendly: true,
          mapLat: 51.85,
          mapLng: 10.45,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wie lang sollte eine Familienwanderung mit Kindern sein?", a: "Mit kleinen Kindern 3–5 km planen. Die Erlebnisdichte ist wichtiger als die Streckenlänge." },
          { q: "Gibt es Naturlehrpfade für Kinder?", a: "Ja, im Nationalpark Harz gibt es ausgeschilderte Erlebnispfade mit Infotafeln zur Natur und zum Wasserregal." },
          { q: "Darf man in den Gräben planschen?", a: "Die Gräben führen Trinkwasser – Betreten und Plantschen ist verboten. Natürliche Bachläufe sind teils freier zugänglich." },
          { q: "Welche Tiere kann man unterwegs sehen?", a: "Eisvögel, Wasseramsel, Forellen, Frösche und im Nationalpark auch Luchse und Wildkatzen." },
          { q: "Gibt es Spielplätze entlang der Wasserwanderwege?", a: "In einigen Ortschaften entlang der Routen gibt es Spielplätze als Zwischenstopp." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: gibt es wasserwanderwege im harz für familien?.
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
