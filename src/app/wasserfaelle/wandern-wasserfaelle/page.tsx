import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Kann man zu den Wasserfällen im Harz wandern? – Harz Wasser Guide",
  description: "Wanderrouten, Schwierigkeitsgrade und die schönsten Aussichtspunkte auf dem Weg zu den Harzer Wasserfällen.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Kann man zu den Wasserfällen im Harz wandern?"
        subtitle="Wanderrouten, Schwierigkeitsgrade und die schönsten Aussichtspunkte auf dem Weg zu den Harzer Wasserfällen."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–5 Stunden",
          bestSeason: "April – Oktober",
          dogs: true,
          parking: "Wanderparkplätze an den Talorten",
          familyFriendly: true,
          mapLat: 51.87,
          mapLng: 10.55,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Welche Wanderroute zu einem Wasserfall ist besonders schön?", a: "Die Route von Bad Harzburg durch das Radautal zum Radauwasserfall ist eine der schönsten und beliebtesten im Harz." },
          { q: "Wie schwierig sind die Wanderwege zu den Wasserfällen?", a: "Die meisten sind leicht bis mittel. Steile Talwände können anspruchsvoller sein." },
          { q: "Sind die Wege auch nach Regen gut begehbar?", a: "Oft sind die Wege nach Regen rutschig. Gutes Schuhwerk und Vorsicht sind empfohlen." },
          { q: "Kann man mehrere Wasserfälle an einem Tag verbinden?", a: "Ja, einige Wanderrouten verbinden mehrere Wasserfälle. Die App zeigt solche Mehrziel-Routen." },
          { q: "Gibt es geführte Wanderungen zu den Wasserfällen?", a: "Lokale Wanderführer und der Harzer Wandernadel-Verein bieten geführte Touren an – besonders im Frühjahr." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Die meisten Harzer Wasserfälle liegen nicht direkt an der Straße — man muss sie sich
            erwandern. Das ist kein Nachteil, sondern ein Gewinn: Der Weg zum Wasserfall gehört
            zum Erlebnis.
          </p>
          <h2>Route Radautal – Bad Harzburg zum Radauwasserfall</h2>
          <p>
            Von Bad Harzburg aus führt der gut ausgeschilderte Weg durch das Radautal — entlang
            der Radau, durch alten Mischwald. Nach etwa 3 km erreicht man den Wasserfall.
          </p>
          <div className="info-box">
            <div className="label">Wanderung Radauwasserfall</div>
            <p>Start: Bad Harzburg Ortsmitte · Länge (einfach): ca. 3 km · Höhenunterschied: ca. 150 m ·
            Dauer (Hin und zurück): 2–3 Stunden · Schwierigkeit: Leicht bis Mittel</p>
          </div>
          <h2>Ilsetal-Wanderung – mehrere Wasserfälle in einem</h2>
          <p>
            Von Ilsenburg aus führt der Weg bachaufwärts — vorbei an Felsen, Stromschnellen und
            den Ilsefällen bis hinauf zum Brocken. Die Strecke bis zum Brocken: ca. 12 km mit 800 Höhenmetern.
          </p>
          <h2>Okkertal – Romkehaller Wasserfall und mehr</h2>
          <p>
            Das Okkertal bietet eine der schönsten Talwanderungen des Harzes. Wer weiter geht,
            kommt zur Okertalsperre — eine lohnende Verlängerung.
          </p>
          <div className="highlight">
            <p><strong>Kombinationstipp:</strong> Besuche den Wasserfall und wandere dann weiter
            zur Okertalsperre. Hin- und Rückweg ca. 8 km, Dauer ca. 3 Stunden.</p>
          </div>
          <h3>Tipps für nasse Wege</h3>
          <p>
            Besonders nach Regen können die Wege rutschig werden. Festes Schuhwerk mit Profil
            ist Pflicht, keine Sneaker oder Sandalen.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
