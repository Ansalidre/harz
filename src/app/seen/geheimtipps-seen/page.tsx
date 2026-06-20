import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Versteckte Seen & Geheimtipps im Harz",
  description: "Abseits der großen Talsperren: ruhige Waldteiche, stille Naturseen und unbekannte Badestellen im Harz für Naturliebhaber und Entdecker.",
  alternates: { canonical: "https://harzwasserguide.de/seen/geheimtipps-seen/" },
  openGraph: {
    title: "Versteckte Seen & Geheimtipps im Harz",
    description: "Abseits der großen Talsperren: ruhige Waldteiche, stille Naturseen und unbekannte Badestellen im Harz für Naturliebhaber und Entdecker.",
    url: "https://harzwasserguide.de/seen/geheimtipps-seen/",
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
        title="Gibt es versteckte Seen oder Geheimtipps im Harz?"
        subtitle="Abseits der großen Talsperren: ruhige Waldteiche, kleine Naturseen und unbekannte Badestellen im Harz."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–5 Stunden",
          bestSeason: "Mai – Oktober",
          dogs: true,
          parking: "Teils nur Waldparkplätze oder Wanderparkplätze",
          familyFriendly: true,
          mapLat: 51.73,
          mapLng: 10.6,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wie findet man wenig bekannte Seen im Harz?", a: "Die Harz Wasser Guide App zeigt auch kleine Waldteiche und wenig bekannte Badestellen, die auf keiner Tourismuskarte stehen." },
          { q: "Sind Geheimtipps-Seen sicher zum Baden?", a: "Vorsicht: Unbekannte Gewässer können ungeklärte Wasserqualität haben. Immer vorher informieren." },
          { q: "Darf man überall zelten am See?", a: "Wildcampen ist im Nationalpark Harz verboten. Außerhalb nur auf ausgewiesenen Plätzen." },
          { q: "Sind diese Seen mit dem Auto erreichbar?", a: "Manche nur über Forstwege zu Fuß. Wir empfehlen die Navigation in der App für genaue Anfahrtsbeschreibungen." },
          { q: "Welche Jahreszeit ist für stille Seen am schönsten?", a: "Herbst: weniger Besucher, Spiegelungen im Wasser, buntes Laub – besonders reizvoll für Fotografen." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Wer im Harz nach dem sucht, was die meisten Reiseführer nicht zeigen, wird belohnt:
            versteckte Waldteiche, stille Naturseen und kleine Badestellen, die nur Einheimische kennen.
          </p>
          <h2>Prinzenteich bei Clausthal-Zellerfeld</h2>
          <p>
            Der Prinzenteich ist einer der zahlreichen historischen Teiche des Oberharzer Wasserregals
            und liegt mitten im Wald. Im Sommer spiegeln sich die Fichten im stillen Wasser,
            im Herbst gibt es kaum einen schöneren Ort für eine Runde mit dem Hund.
          </p>
          <h2>Kleine Teiche entlang der Gräben</h2>
          <p>
            Wer auf den Graben-Wanderwegen rund um Sankt Andreasberg oder Clausthal-Zellerfeld
            unterwegs ist, entdeckt immer wieder kleine Teiche und Wasseransammlungen abseits der Wege.
          </p>
          <div className="highlight">
            <p><strong>Geheimtipp:</strong> Besonders schön sind die stillen Teiche im Morgennebel —
            wer früh aufbricht, erlebt eine andere Welt.</p>
          </div>
          <h2>Bergseen im Nationalpark</h2>
          <p>
            Im Nationalpark Harz gibt es mehrere kleinere Gewässer, die nicht in jedem Reiseführer
            auftauchen. Hier brüten seltene Vogelarten und die Natur ist vollständig sich selbst überlassen.
          </p>
          <h3>Wie findet man Geheimtipps?</h3>
          <p>
            Die Harz Wasser Guide App zeigt auch wenig bekannte Gewässer, Moorteiche und stille
            Badestellen. Einheimische kennen oft noch mehr — ein freundliches Gespräch in der
            Wanderhütte lohnt sich.
          </p>
          <h3>Bitte beachten</h3>
          <p>
            Viele dieser stillen Orte sind so schön, weil sie wenig besucht werden.
            Hinterlasse keinen Müll, halte Lärm gering und respektiere die Natur.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
