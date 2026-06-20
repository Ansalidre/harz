import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Was ist das Oberharzer Wasserregal? – Harz Wasser Guide",
  description: "Das größte vorindustrielle Wassermanagementsystem der Welt – und seit 2010 UNESCO-Welterbe.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Was ist das Oberharzer Wasserregal?"
        subtitle="Das größte vorindustrielle Wassermanagementsystem der Welt – und seit 2010 UNESCO-Welterbe."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–8 Stunden",
          bestSeason: "Ganzjährig",
          dogs: true,
          parking: "Parkplätze in Clausthal-Zellerfeld und an den Teichen",
          familyFriendly: true,
          mapLat: 51.8,
          mapLng: 10.34,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wann wurde das Oberharzer Wasserregal zum UNESCO-Welterbe?", a: "Im Jahr 2010 wurde es gemeinsam mit den Bergwerken Rammelsberg und der Altstadt Goslar in die Welterbeliste aufgenommen." },
          { q: "Wie viele Teiche und Gräben gibt es?", a: "Das System umfasst über 100 Teiche und etwa 500 km Gräben und Wasserläufe – ein Jahrhundertprojekt des Harzer Bergbaus." },
          { q: "Kann man das Wasserregal besichtigen?", a: "Ja, viele Teiche und Gräben sind frei zugänglich und Teil der Wasserwanderwege. Es gibt auch geführte Touren." },
          { q: "Welche Funktion hatte das Wasserregal früher?", a: "Es versorgte die Silber- und Bergwerke mit Energie durch Wasserräder und regulierte den Wasserhaushalt für die Erzgewinnung." },
          { q: "Gibt es ein Besucherzentrum?", a: "Das Weltkulturerbe Rammelsberg in Goslar bietet Führungen und Ausstellungen zum Thema." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: was ist das oberharzer wasserregal?.
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
