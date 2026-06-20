import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Welche Wasserwanderwege im Harz sind auch für Anfänger geeignet? – Harz Wasser Guide",
  description: "Leichte Rundwanderungen mit wenig Höhenmetern, kurzen Strecken und schönen Wasserblicken.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Welche Wasserwanderwege im Harz sind auch für Anfänger geeignet?"
        subtitle="Leichte Rundwanderungen mit wenig Höhenmetern, kurzen Strecken und schönen Wasserblicken."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht",
          duration: "1–3 Stunden",
          bestSeason: "Mai – Oktober",
          dogs: true,
          parking: "Gut ausgebaute Parkplätze an den Startpunkten",
          familyFriendly: true,
          mapLat: 51.85,
          mapLng: 10.57,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Welche Strecke empfehlt sich als erste Wanderung?", a: "Der Graben-Wanderweg rund um Clausthal-Zellerfeld ist flach, gut ausgeschildert und historisch interessant – ideal für Einsteiger." },
          { q: "Wie viele Kilometer sollte ein Anfänger einplanen?", a: "5–10 km sind für Anfänger gut geeignet. Mit Pausen und Naturbeobachtungen kann das 3–4 Stunden dauern." },
          { q: "Sind die Wege befestigt oder unbefestigt?", a: "Die meisten Graben-Wanderwege sind auf unbefestigten, aber gut begehbaren Forstwegen. Festes Schuhwerk empfohlen." },
          { q: "Gibt es GPS-Tracks zum Download?", a: "In der Harz Wasser Guide App findest du Kartenausschnitte der wichtigsten Routen." },
          { q: "Was mache ich, wenn ich mich verlaufe?", a: "Im Zweifel auf dem Weg bleiben und zurückgehen. Die App zeigt deine Position auf der Karte." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Wer zum ersten Mal im Harz wandert, ist bei den Wasserwanderwegen bestens aufgehoben.
            Die historischen Gräben verlaufen meist nahezu eben, die Wege sind gut befestigt und
            das fließende Wasser sorgt dafür, dass es nie langweilig wird.
          </p>
          <h2>Graben-Wanderweg Buntenbock – ideal für Einsteiger</h2>
          <p>
            Der Graben-Wanderweg rund um Buntenbock bei Clausthal-Zellerfeld ist einer der
            einfachsten und gleichzeitig schönsten Wege im Harz — etwa 6 km fast eben durch
            Fichtenwald entlang historischer Wassergräben.
          </p>
          <div className="info-box">
            <div className="label">Buntenbock Graben-Runde</div>
            <p>Länge: ca. 6 km · Höhenunterschied: minimal · Dauer: 1,5–2 Stunden ·
            Schwierigkeit: Leicht · Parkplatz: In Buntenbock vorhanden</p>
          </div>
          <h2>Prinzenteich-Runde – kurz, schön, perfekt</h2>
          <p>
            Die kleine Runde um den Prinzenteich eignet sich hervorragend als erste Wanderung
            im Harz. Rund 3 km, kaum Steigung, schöne Blicke auf den historischen Teich.
          </p>
          <div className="highlight">
            <p><strong>Anfänger-Tipp:</strong> Starte immer mit einer kürzeren Route und halte
            dir die Option offen, umzukehren. Die Wasserwanderwege sind nie eine Einbahnstraße.</p>
          </div>
          <h2>Navigation und Orientierung</h2>
          <p>
            Die meisten Wasserwanderwege sind gut ausgeschildert. Zusätzlich hilft die Harz Wasser
            Guide App mit Kartenansicht und aktueller Position. Offline-Karten herunterladen —
            dann bist du auch ohne Mobilfunkempfang gut aufgestellt.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
