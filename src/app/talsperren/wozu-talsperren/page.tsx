import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Wofür wurden die Harzer Talsperren gebaut? – Harz Wasser Guide",
  description: "Trinkwasser, Hochwasserschutz, Stromerzeugung – die Geschichte und Funktion der Harzer Stauanlagen.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Wofür wurden die Harzer Talsperren gebaut?"
        subtitle="Trinkwasser, Hochwasserschutz, Stromerzeugung – die Geschichte und Funktion der Harzer Stauanlagen."
        category="Talsperren"
        categoryHref="/talsperren"
        categoryColor="bg-cyan-500/20 text-cyan-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–2 Stunden Besuch",
          bestSeason: "Ganzjährig",
          dogs: true,
          parking: "An den Besucherzentren vorhanden",
          familyFriendly: true,
          mapLat: 51.72,
          mapLng: 10.89,
          mapZoom: 10,
        }}
        faqs={[
          { q: "Wann wurden die ersten Harzer Talsperren gebaut?", a: "Die ersten modernen Talsperren entstanden Ende des 19. Jahrhunderts, viele in den 1930er bis 1960er Jahren." },
          { q: "Wird an den Talsperren Strom erzeugt?", a: "Ja, an mehreren Talsperren gibt es Wasserkraftwerke, die Strom ins Netz einspeisen." },
          { q: "Warum sind Talsperren für den Hochwasserschutz wichtig?", a: "Sie puffern Starkregenereignisse und verhindern, dass Flüsse wie Bode oder Oker unkontrolliert über die Ufer treten." },
          { q: "Können Talsperren überlaufen?", a: "Sicherheitssysteme wie Hochwasserentlaster sorgen dafür, dass überschüssiges Wasser kontrolliert abgeführt wird." },
          { q: "Wie lange halten Talsperren?", a: "Gut gewartete Talsperren halten viele Jahrzehnte bis Jahrhunderte. Regelmäßige Inspektionen sind gesetzlich vorgeschrieben." },
        ]}
      >
        <div className="guide-prose">
          <p>
            <strong>Dieser Ratgeber wird demnächst mit ausführlichem Inhalt befüllt.</strong> Hier erfährst du alles über: wofür wurden die harzer talsperren gebaut?.
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
