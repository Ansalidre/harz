import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Kann man im Harz in Seen baden? – Erlaubte Badestellen",
  description: "Offizielle Badestellen im Harz, Wasserqualität und Badeverbote an Talsperren. Alles was du vor dem Sprung ins kühle Nass wissen musst.",
  alternates: { canonical: "https://harzwasserguide.de/seen/baden-im-harz/" },
  openGraph: {
    title: "Kann man im Harz in Seen baden? – Erlaubte Badestellen",
    description: "Offizielle Badestellen im Harz, Wasserqualität und Badeverbote an Talsperren. Alles was du vor dem Sprung ins kühle Nass wissen musst.",
    url: "https://harzwasserguide.de/seen/baden-im-harz/",
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
        title="Kann man im Harz in Seen baden?"
        subtitle="Offizielle Badestellen, Wasserqualität und was du vor dem Sprung ins kühle Nass wissen solltest."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht",
          duration: "Halber Tag",
          bestSeason: "Juni – September",
          dogs: true,
          parking: "Vorhanden an den offiziellen Badestellen",
          familyFriendly: true,
          mapLat: 51.88,
          mapLng: 10.56,
          mapZoom: 12,
        }}
        faqs={[
          { q: "Ist das Baden in allen Seen erlaubt?", a: "Nein. An Talsperren, die der Trinkwasserversorgung dienen, ist Baden verboten. Die App zeigt erlaubte Badestellen." },
          { q: "Gibt es bewachte Badestellen im Harz?", a: "Einige größere Badestellen sind saisonal bewacht. Viele Naturbadestellen sind unbewacht – Schwimmen auf eigene Gefahr." },
          { q: "Wie kalt ist das Wasser in den Harzer Seen?", a: "Je nach Höhenlage und Jahreszeit zwischen 16 und 22°C im Sommer. Hochgelegene Seen bleiben kühler." },
          { q: "Gibt es Sanitäranlagen an den Badestellen?", a: "Große Badestellen wie der Juessee haben sanitäre Anlagen. Kleinere Naturbadestellen meist nicht." },
          { q: "Darf mein Hund mit in den See?", a: "An vielen Naturbadestellen ja. An offiziellen Badegewässern gibt es teils Hundebereiche oder Einschränkungen." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Eine der häufigsten Fragen von Harztouristen: Darf man hier eigentlich ins Wasser?
            Die kurze Antwort: Ja — aber nicht überall. Der Harz hat eine ganze Reihe offiziell
            freigegebener Badestellen mit guter Wasserqualität, daneben aber auch viele Gewässer,
            die dem Trinkwasserschutz dienen und wo Baden verboten ist.
          </p>
          <h2>Erlaubte Badestellen im Harz</h2>
          <p>
            Die wichtigste offizielle Badestelle ist der <strong>Juessee bei Herzberg am Harz</strong> (Südharz).
            Er ist regelmäßig auf Wasserqualität geprüft, hat einen flachen Sandstrand und gilt als
            familienfreundlichster Badesee des Harzes. Weitere freigegebene Badestellen finden sich
            am <strong>Sösestausee</strong> nahe Osterode.
          </p>
          <div className="info-box">
            <div className="label">Aktuelle Wasserqualität</div>
            <p>Die offizielle Überwachung erfolgt durch das Niedersächsische Landesgesundheitsamt.
            Aktuelle Messwerte findest du auf deren Webseite oder in der Harz Wasser Guide App.</p>
          </div>
          <h2>Wo ist Baden verboten?</h2>
          <p>
            An der <strong>Rappbodetalsperre</strong> und der <strong>Granetalsperre</strong> ist Baden
            verboten, da sie der Trinkwasserversorgung dienen. An der <strong>Okertalsperre</strong>
            und am <strong>Oderteich</strong> gibt es hingegen ausgewiesene Badebereiche.
          </p>
          <div className="highlight">
            <p><strong>Wichtig:</strong> Das Missachten der Badeverbote an Talsperren kann mit
            einem Bußgeld geahndet werden und schadet der Trinkwasserqualität.</p>
          </div>
          <h2>Wasserqualität an den Badestellen</h2>
          <p>
            Die offiziell überwachten Badestellen im Harz haben in der Regel ausgezeichnete
            Wasserqualität. Die Temperaturen liegen im Hochsommer zwischen 18 und 22 Grad —
            erfrischend, aber nicht tropisch warm.
          </p>
          <h3>Tipps für Familien</h3>
          <p>
            Für Familien mit Kleinkindern ist der Juessee klar die beste Wahl — flacher Eingang,
            bewachsener Uferbereich und gute Infrastruktur.
          </p>
          <h3>Hunde am Badesee</h3>
          <p>
            Hunde sind an den meisten Naturbadestellen willkommen. Am Juessee gibt es einen
            ausgewiesenen Hundebereich. Leine anlegen und auf andere Badegäste Rücksicht nehmen.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
