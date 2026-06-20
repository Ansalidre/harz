import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welcher Wasserfall im Harz ist der höchste? – Harz Wasser Guide",
  description: "Ein Vergleich der bekanntesten Wasserfälle – mit Höhe, Besonderheiten und den besten Fotospots.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welcher Wasserfall im Harz ist der höchste?"
        subtitle="Ein Vergleich der bekanntesten Wasserfälle – mit Höhe, Besonderheiten und den besten Fotospots."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "1–2 Stunden",
          bestSeason: "März – Mai",
          dogs: true,
          parking: "Wanderparkplätze in der Nähe",
          familyFriendly: true,
          mapLat: 51.88,
          mapLng: 10.56,
          mapZoom: 13,
        }}
        faqs={[
          { q: "Wie hoch ist der Romkerhaller Wasserfall?", a: "Der Romkerhaller Wasserfall stürzt in mehreren Stufen über insgesamt ca. 20 Meter in die Tiefe." },
          { q: "Welcher Wasserfall ist am leichtesten zu erreichen?", a: "Der Radauwasserfall bei Bad Harzburg ist über einen kurzen, gut ausgebauten Weg bequem erreichbar." },
          { q: "Gibt es Wasserfälle, die man nur mit Wanderung erreicht?", a: "Ja, einige Wasserfälle in den Tälern des Nationalparks erfordern 1–2 Stunden Fußweg." },
          { q: "Was ist der schönste Fotospot am Wasserfall?", a: "Am Radauwasserfall gibt es eine Holzbrücke mit direktem Blick auf den Wasserfall – besonders bei Gegenlicht." },
          { q: "Sind die Wasserfälle ganzjährig aktiv?", a: "Im Sommer führen viele Bäche wenig Wasser. Im Winter können sie teilweise einfrieren – ein spektakulärer Anblick." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Welcher Wasserfall im Harz ist der höchste? Eine eindeutige Antwort ist schwieriger als
            gedacht — der Harz hat keine einzelnen vertikalen Stürze wie die Alpen, sondern eher
            Kaskaden und mehrstufige Wasserfälle entlang der Bachläufe.
          </p>
          <h2>Romkerhaller Wasserfall – der eindrucksvollste</h2>
          <p>
            Über mehrere Stufen fällt das Wasser der Romke in die Tiefe — in der Summe über 20 Meter.
            Was ihn besonders macht: Die Kombination aus Wassermenge, Geräusch und der engen Felsschlucht.
          </p>
          <div className="info-box">
            <div className="label">Vergleich der größten Harzer Wasserfälle</div>
            <p>Romkerhaller Wasserfall: ca. 20 m (mehrstufig) · Radauwasserfall: ca. 8 m ·
            Ilsefälle: mehrere kleinere Stufen · Steinerne Renne: ca. 5 m Hauptstufe</p>
          </div>
          <h2>Steinerne Renne bei Wernigerode</h2>
          <p>
            Die Steinerne Renne ist ein breiter, seichter Wasserfall, der über Felsplatten glätschert.
            Nicht der höchste, aber einer der breitesten und durch seine sanfte Form besonders fotogen.
          </p>
          <h2>Radauwasserfall – für Fotografen ein Traumziel</h2>
          <p>
            Der Radauwasserfall fällt zwar nur etwa 8 Meter, aber die Holzbrücke davor ermöglicht
            Fotos aus perfekter Perspektive.
          </p>
          <div className="highlight">
            <p><strong>Fotografen-Tipp:</strong> Stativ mitbringen für Langzeitbelichtungen —
            auch mit dem Smartphone funktioniert das mit den richtigen Apps gut.</p>
          </div>
          <h3>Beste Fotospots</h3>
          <p>
            <strong>Romkehaller Wasserfall:</strong> Von der Holzbrücke unterhalb des Falls.
            <strong>Radauwasserfall:</strong> Von der Aussichtsbrücke frontal auf den Fall.
            <strong>Ilsefälle:</strong> Vom Bach aus, mit Blick bachaufwärts auf die Kaskaden.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
