import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Seen im Harz sind die schönsten?",
  description: "Oderteich, Okerstausee, Silberteich, Juessee – die schönsten Seen im Harz mit Ausflugstipps, Besonderheiten und Informationen zu Wanderwegen.",
  alternates: { canonical: "https://harzwasserguide.de/seen/schoenste-seen/" },
  openGraph: {
    title: "Welche Seen im Harz sind die schönsten?",
    description: "Oderteich, Okerstausee, Silberteich, Juessee – die schönsten Seen im Harz mit Ausflugstipps, Besonderheiten und Informationen zu Wanderwegen.",
    url: "https://harzwasserguide.de/seen/schoenste-seen/",
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
        title="Welche Seen im Harz sind die schönsten?"
        subtitle="Vom Oderteich bis zum Okerstausee – die schönsten Gewässer des Harzes im Überblick."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–4 Stunden je nach See",
          bestSeason: "Mai – Oktober",
          dogs: true,
          parking: "Kostenpflichtige Parkplätze an den meisten Seen",
          familyFriendly: true,
          mapLat: 51.72,
          mapLng: 10.54,
          mapZoom: 10,
        }}
        faqs={[
          { q: "Welche Seen eignen sich für Schwimmer?", a: "Oderteich, Juessee und einige Badeteiche rund um Bad Harzburg sind für Schwimmer freigegeben und gut zugänglich." },
          { q: "Sind alle Harzer Seen frei zugänglich?", a: "Die meisten Seen sind frei zugänglich. Talsperren haben teils Betretungsverbote im Uferbereich zum Schutz des Trinkwassers." },
          { q: "Gibt es Seen mit Verleih von Booten oder SUPs?", a: "An einigen Seen wie dem Juessee gibt es saisonalen Bootsverleih. Die Harz Wasser Guide App zeigt aktuelle Angebote." },
          { q: "Wie ist die Wasserqualität an den Harzer Seen?", a: "Die meisten Badestellen haben sehr gute Wasserqualität. Aktuelle Messwerte gibt es beim Niedersächsischen Landesgesundheitsamt." },
          { q: "Welcher See ist am wenigsten touristisch?", a: "Der Silberteich bei Clausthal-Zellerfeld und kleine Waldteiche im Nationalpark sind deutlich ruhiger als die großen Talsperren." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Der Harz ist nicht nur ein Mittelgebirge voller Wälder und Gipfel — er ist auch eine
            erstaunliche Wasserlandschaft. Dutzende Seen, Teiche und Talsperren verteilen sich
            über das gesamte Gebiet, viele davon eingebettet in uralten Nadelwald oder im Schatten
            markanter Felsen. Wer die schönsten Gewässer des Harzes kennenlernen möchte,
            braucht keine langen Anreisen — sie liegen oft direkt am Wegesrand.
          </p>
          <h2>Oderteich – der älteste Stausee des Harzes</h2>
          <p>
            Der Oderteich bei Sankt Andreasberg wurde bereits im 18. Jahrhundert als Teil des
            Oberharzer Wasserregals angelegt und zählt heute zu den ältesten künstlichen Stauseen
            Deutschlands. Das klare, dunkle Wasser spiegelt die umliegenden Fichten und Kiefern —
            im Herbst ein fast unwirkliches Panorama. Ein Rundweg führt in etwa 1,5 Stunden einmal
            um den See herum.
          </p>
          <div className="info-box">
            <div className="label">Oderteich im Überblick</div>
            <p>Lage: Sankt Andreasberg · Rundweg: ca. 4 km · Parkplatz: Kostenpflichtig · Baden: Nicht erlaubt (Trinkwasserschutz)</p>
          </div>
          <h2>Okerstausee – Naturerlebnis mit Panoramablick</h2>
          <p>
            Der Okerstausee südlich von Goslar bietet spektakuläre Blicke auf die Oker-Schlucht
            und die Staumauer. Das umliegende Wegesystem ermöglicht Wanderungen unterschiedlicher
            Länge — von der kurzen Runde entlang der Staumauer bis zur mehrstündigen Tour durch das Okertal.
          </p>
          <div className="highlight">
            <p><strong>Tipp:</strong> Die Aussicht von der Staumauer auf den See ist besonders
            eindrucksvoll am frühen Morgen, wenn der Nebel noch über dem Wasser liegt.</p>
          </div>
          <h2>Silberteich – Stille im Hochharz</h2>
          <p>
            Der Silberteich bei Clausthal-Zellerfeld ist deutlich weniger frequentiert als die
            großen Talsperren. Seine stille Atmosphäre zieht vor allem Naturliebhaber und
            Fotografen an. Der Weg dorthin führt durch alten Fichtenwald und lässt sich gut
            mit weiteren Teichen des Wasserregals kombinieren.
          </p>
          <h2>Juessee – der Badesee bei Bad Harzburg</h2>
          <p>
            Wer tatsächlich ins Wasser möchte, ist am Juessee bei Bad Harzburg am besten
            aufgehoben. Der See hat einen flachen Sandstrand, klares Wasser und ist
            besonders für Familien mit Kindern geeignet.
          </p>
          <h3>Beste Jahreszeiten</h3>
          <p>
            <strong>Frühjahr (April–Mai):</strong> Maximale Wasserstände, frischer Wald, wenig Besucher.
            <strong>Sommer (Juni–August):</strong> Ideal zum Baden am Juessee.
            <strong>Herbst (September–Oktober):</strong> Goldenes Laub spiegelt sich im Wasser — fotografisch die schönste Zeit.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
