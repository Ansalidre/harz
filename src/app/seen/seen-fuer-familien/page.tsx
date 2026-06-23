import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Seen im Harz für Familien mit Kindern",
  description: "Familienfreundliche Badeseen im Harz: Juessee, Sösestausee und Oderteich. Mit Infos zu flachen Ufern, Spielmöglichkeiten und Kinderangeboten.",
  alternates: { canonical: "https://harzwasserguide.de/seen/seen-fuer-familien/" },
  openGraph: {
    title: "Seen im Harz für Familien mit Kindern",
    description: "Familienfreundliche Badeseen im Harz: Juessee, Sösestausee und Oderteich. Mit Infos zu flachen Ufern, Spielmöglichkeiten und Kinderangeboten.",
    url: "https://harzwasserguide.de/seen/seen-fuer-familien/",
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
        title="Welche Seen im Harz eignen sich für Familien mit Kindern?"
        subtitle="Flache Ufer, Spielmöglichkeiten und Picknickwiesen – die familienfreundlichsten Badeseen im Harz."
        category="Seen & Teiche"
        categoryHref="/seen"
        categoryColor="bg-blue-500/20 text-blue-200"
        meta={{
          difficulty: "Leicht",
          duration: "Halber bis ganzer Tag",
          bestSeason: "Juli – August",
          dogs: true,
          parking: "Familiengerechte Parkplätze vorhanden",
          familyFriendly: true,
          mapLat: 51.88,
          mapLng: 10.56,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Welcher See hat den flachsten Zugang für Kleinkinder?", a: "Der Juessee bei Herzberg am Harz gilt als besonders familienfreundlich mit flachem Sandstrand." },
          { q: "Gibt es Spielplätze an den Badeseen?", a: "Einige Badestellen haben Spielbereiche. Der Juessee und die Okertalsperre bieten Freizeitinfrastruktur." },
          { q: "Sind Grillplätze an den Seen vorhanden?", a: "An ausgewählten Stellen gibt es Grillmöglichkeiten. Im Nationalpark ist Grillen nicht erlaubt." },
          { q: "Wie lange dauert ein Familienausflug zum See?", a: "Plant mindestens einen halben Tag ein. Mit Anfahrt, Baden und Picknick sind 4–6 Stunden realistisch." },
          { q: "Gibt es Rettungsschwimmer an den Badeseen?", a: "Nur an wenigen offiziellen Badestellen. Immer auf Kinder achten – die meisten Seen sind unbewacht." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Ein Ausflug mit Kindern zum See gelingt, wenn die Rahmenbedingungen stimmen:
            flacher Zugang ins Wasser, ein schattiges Plätzchen, kein stundenlanger Fußmarsch
            und im besten Fall noch ein Eis am Ufer. Der Harz bietet genau das — wenn man
            die richtigen Seen kennt.
          </p>
          <h2>Juessee bei Herzberg am Harz – die erste Wahl für Familien</h2>
          <p>
            Der Juessee ist der familienfreundlichste Badesee im Harz. Der Sandstrand fällt
            sehr flach ab, sodass auch Kleinkinder sicher planschen können. Es gibt sanitäre
            Anlagen, einen Kiosk und ausreichend Schattenplätze unter Bäumen.
          </p>
          <div className="info-box">
            <div className="label">Juessee im Überblick</div>
            <p>Ort: Herzberg am Harz (Südharz) · Parkplatz: Vorhanden, kostenpflichtig in der Saison ·
            Sanitäranlagen: Ja · Kiosk: Saisonal · Hunde: Eigener Bereich vorhanden</p>
          </div>
          <h2>Sösestausee – Baden und Wandern kombinieren</h2>
          <p>
            Der Sösestausee bei Osterode bietet neben einer Badestelle auch einfache
            Wanderwege am Ufer. Ideal für Familien, die nach dem Schwimmen noch einen
            kurzen Spaziergang machen möchten.
          </p>
          <h2>Oderteich – für Entdeckergeister</h2>
          <p>
            Kein Badesee, aber für ältere Kinder ein spannendes Ausflugsziel. Der Rundweg
            von 4 km ist auch für 6–8-jährige gut machbar. Unterwegs erklärt man den Kleinen,
            warum der See schon seit 300 Jahren hier ist.
          </p>
          <div className="highlight">
            <p><strong>Tipp für Kinder:</strong> Am Oderteich kann man auf der historischen
            Staumauer balancieren und durch die Baumwipfel schauen.</p>
          </div>
          <h3>Was packe ich ein?</h3>
          <p>
            Badekleidung, Sonnencreme (Höhensonne!), Gummistiefel für die kleinen Entdecker,
            Vesper und ausreichend Wasser. Ein Kescher für die Naturerkundung macht den Ausflug zum Erlebnis.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
