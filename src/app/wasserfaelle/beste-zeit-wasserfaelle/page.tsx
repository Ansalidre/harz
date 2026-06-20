import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Wann ist die beste Zeit für Wasserfälle im Harz?",
  description: "Frühjahr, Sommer, Herbst, Winter: Wann lohnt sich der Besuch der Harzer Wasserfälle? Mit Tipps für Fotografen, Familien und Einsamkeits-Sucher.",
  alternates: { canonical: "https://harzwasserguide.de/wasserfaelle/beste-zeit-wasserfaelle/" },
  openGraph: {
    title: "Wann ist die beste Zeit für Wasserfälle im Harz?",
    description: "Frühjahr, Sommer, Herbst, Winter: Wann lohnt sich der Besuch der Harzer Wasserfälle? Mit Tipps für Fotografen, Familien und Einsamkeits-Sucher.",
    url: "https://harzwasserguide.de/wasserfaelle/beste-zeit-wasserfaelle/",
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
        title="Wann ist die beste Zeit für einen Besuch der Harzer Wasserfälle?"
        subtitle="Frühjahrsflut nach der Schneeschmelze, Herbstfarben oder eingefrorene Wasserfälle im Winter – der Saisonüberblick."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–3 Stunden",
          bestSeason: "März – Mai und Oktober – November",
          dogs: true,
          parking: "Vorhanden, im Frühjahr manchmal voll",
          familyFriendly: true,
          mapLat: 51.87,
          mapLng: 10.57,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wann ist das Wasser am stärksten?", a: "März bis Mai nach der Schneeschmelze – dann führen alle Bäche Hochwasser und die Wasserfälle sind am imposantesten." },
          { q: "Kann man Wasserfälle auch im Winter besuchen?", a: "Ja – bei starkem Frost gefrieren einige Wasserfälle und bilden fantastische Eisformationen. Vorsicht auf vereisten Wegen." },
          { q: "Wann ist es am wenigsten voll?", a: "Unter der Woche im Frühjahr oder Herbst – die Hochsaison im Sommer kann an Wochenenden sehr voll werden." },
          { q: "Lohnt sich der Besuch auch im Sommer?", a: "Im trockenen Hochsommer führen manche Bäche wenig Wasser. Trotzdem lohnt der Besuch für Walderlebnis und Abkühlung." },
          { q: "Was sollte ich für den Besuch mitbringen?", a: "Festes Schuhwerk, Regenjacke, Wasser und im Frühjahr/Herbst warme Kleidung. Kamera oder Smartphone für Fotos." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Die Harzer Wasserfälle sind zu jeder Jahreszeit sehenswert — aber sie sind nicht zu
            jeder Zeit gleich imposant. Wer die volle Kraft erleben möchte, sollte zur richtigen
            Zeit kommen.
          </p>
          <h2>Frühjahr (März–Mai) – die beste Zeit</h2>
          <p>
            Wenn der Schnee auf dem Brocken schmilzt, schwellen alle Bachläufe mächtig an.
            Die Wasserfälle führen dann teils zwei- bis dreimal mehr Wasser als im Sommer —
            das Rauschen ist von Weitem zu hören.
          </p>
          <div className="info-box">
            <div className="label">Frühjahr: Was zu beachten ist</div>
            <p>Die Wege können nach der Schneeschmelze noch aufgeweicht und rutschig sein.
            Festes Schuhwerk ist Pflicht. Im April kann es im Hochharz noch Schneereste geben.</p>
          </div>
          <h2>Sommer (Juni–August) – viel los, aber trotzdem schön</h2>
          <p>
            Im Sommer führen die Wasserfälle am wenigsten Wasser, aber die üppige Vegetation
            macht die Bachläufe zu grünen Tunneln und die Abkühlung am Wasser ist willkommen.
          </p>
          <h2>Herbst (Oktober–November) – Farben und Regen</h2>
          <p>
            Nach den ersten Herbstregenfällen steigen die Wasserpegel wieder, und der goldene
            Wald rund um die Wasserfälle ist schlicht atemberaubend.
          </p>
          <div className="highlight">
            <p><strong>Herbst-Tipp:</strong> Mitte Oktober nach einem Regentag ist die perfekte
            Kombination — volle Wasserpegel, goldenes Laub und wenig Besucher.</p>
          </div>
          <h2>Winter (Dezember–Februar) – eingefrorene Wunder</h2>
          <p>
            Wenn es im Harz richtig kalt wird, gefrieren die Wasserfälle teilweise. Eiszapfen
            und Eisformationen sind ein beeindruckender Anblick. Vorsicht auf vereisten Wegen.
          </p>
          <h3>Zusammenfassung: Wann für wen?</h3>
          <p>
            <strong>Wassermengen maximieren:</strong> März–Mai ·
            <strong>Familien mit Kindern:</strong> Juni–August ·
            <strong>Fotografie:</strong> Oktober oder März ·
            <strong>Winterzauber:</strong> Dezember–Februar bei Frost
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
