import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Wo befinden sich die schönsten Wasserfälle im Harz?",
  description: "Romkehaller Wasserfall, Radauwasserfall, Ilsefälle – die schönsten Wasserfälle im Harz. Mit Anfahrt, Wanderwegen und Fotospots.",
  alternates: { canonical: "https://harzwasserguide.de/wasserfaelle/schoenste-wasserfaelle/" },
  openGraph: {
    title: "Wo befinden sich die schönsten Wasserfälle im Harz?",
    description: "Romkehaller Wasserfall, Radauwasserfall, Ilsefälle – die schönsten Wasserfälle im Harz. Mit Anfahrt, Wanderwegen und Fotospots.",
    url: "https://harzwasserguide.de/wasserfaelle/schoenste-wasserfaelle/",
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
        title="Wo befinden sich die schönsten Wasserfälle im Harz?"
        subtitle="Romkerhaller Wasserfall, Radauwasserfall und weitere Naturhighlights – mit Anfahrt und Wanderweg."
        category="Wasserfälle"
        categoryHref="/wasserfaelle"
        categoryColor="bg-indigo-500/20 text-indigo-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "1–3 Stunden",
          bestSeason: "März – Mai und Oktober – November",
          dogs: true,
          parking: "Parkplätze an den meisten Wasserfällen vorhanden",
          familyFriendly: true,
          mapLat: 51.87,
          mapLng: 10.57,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wie viele Wasserfälle gibt es im Harz?", a: "Es gibt mehrere dutzend Wasserfälle – von kleinen Bachkaskaden bis zu imposanten Natürlichkeiten wie dem Romkerhaller Wasserfall." },
          { q: "Wann führen die Wasserfälle am meisten Wasser?", a: "Im Frühjahr nach der Schneeschmelze und nach starken Regenfällen im Herbst sind die Wasserfälle am beeindruckendsten." },
          { q: "Sind die Wasserfälle beleuchtet?", a: "Einige Wasserfälle wie der Romkerhaller haben historische Beleuchtungsanlagen für Abendveranstaltungen." },
          { q: "Kann man die Wasserfälle mit dem Rollstuhl erreichen?", a: "Einige größere Wasserfälle haben befestigte Wege. Für Details empfiehlt sich eine Vorabrecherche über die App." },
          { q: "Gibt es Eintrittsgeld?", a: "Der Romkerhaller Wasserfall hat einen kleinen Eintritt. Die meisten anderen sind frei zugänglich." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Wasserfälle haben eine magische Anziehungskraft — das Rauschen, das Sprühen, die Kraft
            des fallenden Wassers. Der Harz bietet eine überraschende Auswahl, von romantischen
            Waldkaskaden bis zu imposanten Naturschauspielen.
          </p>
          <h2>Romkerhaller Wasserfall – der Bekannteste im Harz</h2>
          <p>
            Der Romkerhaller Wasserfall im Okkertal stürzt in mehreren Stufen über das Felsgestein.
            Besonders eindrucksvoll ist er nach starken Regenfällen und im Frühjahr nach der Schneeschmelze.
          </p>
          <div className="info-box">
            <div className="label">Romkerhaller Wasserfall</div>
            <p>Ort: Oker, Goslar · Eintritt: Ja (kleiner Beitrag) · Parkplatz: Am Wanderparkplatz Okertal ·
            Gehzeit: ca. 15 Minuten · Hunde: Willkommen</p>
          </div>
          <h2>Radauwasserfall – romantisch und leicht erreichbar</h2>
          <p>
            Der Radauwasserfall bei Bad Harzburg ist einer der meistbesuchten Wasserfälle im Harz.
            Der Weg durch das Radautal ist auch für Familien gut machbar. Am Wasserfall gibt es
            eine Holzbrücke mit direktem Blick — ein fantastischer Fotospot.
          </p>
          <h2>Ilsefälle – die wilden Schwestern</h2>
          <p>
            Im Ilsetal zwischen Ilsenburg und dem Brocken gibt es eine ganze Reihe von Wasserfällen
            und Kaskaden. Der Weg entlang der Ilse ist einer der schönsten Bachtalwege im Harz.
          </p>
          <div className="highlight">
            <p><strong>Fotografie-Tipp:</strong> Für seidenweiches Wasser am besten an bewölkten
            Tagen fotografieren — dann leuchtet das Wasser und der Wald hat sein schönstes Grün.</p>
          </div>
          <h3>Wann sind die Wasserfälle am eindrucksvollsten?</h3>
          <p>
            <strong>März bis Mai</strong> nach der Schneeschmelze — dann führen alle Bäche Hochwasser
            und die Wasserfälle sind in ihrer vollen Kraft.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
