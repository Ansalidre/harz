import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Wofür wurden die Harzer Talsperren gebaut?",
  description: "Geschichte und Funktion der Harzer Talsperren: Trinkwasser, Hochwasserschutz, Wasserkraft. Wie Millionen Menschen vom Harzwasser profitieren.",
  alternates: { canonical: "https://harzwasserguide.de/talsperren/wozu-talsperren/" },
  openGraph: {
    title: "Wofür wurden die Harzer Talsperren gebaut?",
    description: "Geschichte und Funktion der Harzer Talsperren: Trinkwasser, Hochwasserschutz, Wasserkraft. Wie Millionen Menschen vom Harzwasser profitieren.",
    url: "https://harzwasserguide.de/talsperren/wozu-talsperren/",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
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
            Wer an einer Harzer Talsperre steht und die gewaltige Staumauer betrachtet, fragt sich
            unweigerlich: Warum wurde das hier gebaut? Die Antwort ist vielschichtig — und erklärt,
            warum der Harz heute einer der wichtigsten Wasserspeicher Norddeutschlands ist.
          </p>
          <h2>Trinkwasserversorgung – die wichtigste Aufgabe</h2>
          <p>
            Die Rappbodetalsperre allein versorgt rund 1,3 Millionen Menschen in Sachsen-Anhalt
            mit sauberem Trinkwasser. Das Harzgebirge mit seinem hohen Niederschlag und dichten
            Waldbestand ist ein natürlicher Filter — das Wasser ist von außergewöhnlicher Qualität.
          </p>
          <div className="info-box">
            <div className="label">Trinkwasser aus dem Harz</div>
            <p>Die Harzer Talsperren versorgen gemeinsam mehrere Millionen Menschen in Niedersachsen,
            Sachsen-Anhalt und Thüringen. Das Talsperrenwasser gilt als eines der reinsten Trinkwasser Deutschlands.</p>
          </div>
          <h2>Hochwasserschutz – Puffer für Extremereignisse</h2>
          <p>
            Wenn im Frühjahr der Schnee schmilzt oder nach Starkregen die Bäche anschwellen,
            puffern die Talsperren die Wassermengen. Ohne sie wären Städte wie Halberstadt
            oder Quedlinburg regelmäßig von Überflutungen bedroht.
          </p>
          <h2>Energiegewinnung – Wasserkraft im Harz</h2>
          <p>
            Mehrere Harzer Talsperren sind mit Wasserkraftwerken ausgestattet. Das Pumpspeicherwerk
            Wendefurth kann innerhalb von Minuten ans Netz gehen und bei Stromspitzen schnell
            Energie bereitstellen.
          </p>
          <div className="highlight">
            <p><strong>Wusstest du?</strong> Das Pumpspeicherwerk Wendefurth spielt eine wichtige
            Rolle für die Netzstabilität in der Energiewende.</p>
          </div>
          <h3>Sicherheit und Überwachung</h3>
          <p>
            Moderne Talsperren werden kontinuierlich überwacht — Sensoren messen Wasserstand,
            Druck und Bewegungen der Mauer rund um die Uhr. Die Sicherheitsstandards in
            Deutschland gehören zu den höchsten der Welt.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
