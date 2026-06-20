import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Talsperre im Harz ist die größte? – Rappbodetalsperre",
  description: "Die Rappbodetalsperre ist Deutschlands größte Trinkwassertalsperre: 106 m hoch, 109 Mio. m³ Volumen, Titan-RT Hängebrücke (483 m).",
  alternates: { canonical: "https://harzwasserguide.de/talsperren/groesste-talsperre/" },
  openGraph: {
    title: "Welche Talsperre im Harz ist die größte? – Rappbodetalsperre",
    description: "Die Rappbodetalsperre ist Deutschlands größte Trinkwassertalsperre: 106 m hoch, 109 Mio. m³ Volumen, Titan-RT Hängebrücke (483 m).",
    url: "https://harzwasserguide.de/talsperren/groesste-talsperre/",
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
        title="Welche Talsperre im Harz ist die größte?"
        subtitle="Die Rappbodetalsperre – Deutschlands größte Trinkwassertalsperre und ein Besuchermagnet im Harz."
        category="Talsperren"
        categoryHref="/talsperren"
        categoryColor="bg-cyan-500/20 text-cyan-200"
        meta={{
          difficulty: "Leicht",
          duration: "2–4 Stunden",
          bestSeason: "Ganzjährig",
          dogs: true,
          parking: "Großer Parkplatz am Besucherzentrum, kostenpflichtig",
          familyFriendly: true,
          mapLat: 51.726,
          mapLng: 10.895,
          mapZoom: 13,
        }}
        faqs={[
          { q: "Wie hoch ist die Staumauer der Rappbodetalsperre?", a: "Die Staumauer ist 106 m hoch und damit eine der größten Deutschlands." },
          { q: "Was ist die Hängebrücke an der Rappbodetalsperre?", a: "Die Titan-RT ist mit 483 m Länge Europas längste Hängebrücke für Fußgänger – 100 m über dem Stausee." },
          { q: "Wie viel Wasser fasst die Rappbodetalsperre?", a: "Das Gesamtspeichervolumen beträgt ca. 109 Millionen Kubikmeter." },
          { q: "Für wen versorgt die Talsperre Trinkwasser?", a: "Sie versorgt Millionen Menschen in Sachsen-Anhalt und angrenzenden Bundesländern mit Trinkwasser." },
          { q: "Gibt es Führungen an der Rappbodetalsperre?", a: "Ja, es gibt regelmäßige Führungen durch die Staumauer und Informationsveranstaltungen am Besucherzentrum." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Wenn man nach der größten Talsperre im Harz fragt, führt die Antwort unweigerlich zur
            Rappbodetalsperre. Eine 106 Meter hohe Sperrmauer, 109 Millionen Kubikmeter gespeichertes
            Wasser und Europas längste Fußgänger-Hängebrücke direkt über dem Stausee.
          </p>
          <h2>Die Zahlen hinter der Rappbodetalsperre</h2>
          <p>
            Die Talsperre wurde zwischen 1952 und 1959 gebaut. Das Gesamtstauvolumen beträgt rund
            113 Millionen Kubikmeter — genug Wasser, um mehrere Großstädte ein Jahr lang zu versorgen.
          </p>
          <div className="info-box">
            <div className="label">Rappbodetalsperre – Technische Daten</div>
            <p>Höhe Sperrmauer: 106 m · Kronenlänge: 415 m · Stauinhalt: 109 Mio. m³ ·
            Wassereinzugsgebiet: 471 km² · Baujahr: 1952–1959</p>
          </div>
          <h2>Titan-RT: Europas längste Fußgänger-Hängebrücke</h2>
          <p>
            Seit 2017 zieht die Titan-RT Hängebrücke Besucher aus ganz Europa an. 483 Meter lang,
            100 Meter über dem Stausee — die Überquerung ist nichts für schwache Nerven, aber
            unvergesslich. Eine Reservierung im Voraus wird empfohlen.
          </p>
          <div className="highlight">
            <p><strong>Praktischer Tipp:</strong> Am frühen Morgen kommen, um die ersten
            Überquerungen ohne Warteschlange zu erleben.</p>
          </div>
          <h2>Wandern rund um die Rappbodetalsperre</h2>
          <p>
            Die Standardrunde beträgt ca. 12 km und führt einmal rund um den Stausee —
            in 3–4 Stunden zu bewältigen.
          </p>
          <h3>Anfahrt und Parken</h3>
          <p>
            Die Rappbodetalsperre liegt bei Elbingerode im Landkreis Harz. Der kostenpflichtige
            Parkplatz am Besucherzentrum ist an Wochenenden in der Hauptsaison schnell voll.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
