import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum – Harz Wasser Guide",
  description: "Impressum und Anbieterkennzeichnung des Harz Wasser Guide.",
};

export default function Impressum() {
  return (
    <LegalLayout title="Impressum" subtitle="Angaben gemäß § 5 TMG">

      <h2>Anbieter</h2>
      <div className="info-box">
        <div className="label">Verantwortlich</div>
        <p>
          Tim Jaitner<br />
          Frankenberger Straße 13<br />
          38640 Goslar
        </p>
      </div>
      <div className="info-box">
        <div className="label">E-Mail</div>
        <p>
          <a href="mailto:jaitner_tim@web.de">jaitner_tim@web.de</a>
        </p>
      </div>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Tim Jaitner (Anschrift wie oben)
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser App und der zugehörigen Website wurden mit größtmöglicher Sorgfalt
        erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen.
      </p>
      <p>
        Angaben zu Standorten, Öffnungszeiten, Zugänglichkeit und sonstigen ortsbezogenen
        Informationen erfolgen ohne Gewähr und können sich jederzeit ändern. Eine Haftung
        für Schäden, die durch die Nutzung der bereitgestellten Informationen entstehen,
        ist ausgeschlossen, sofern kein vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
      </p>

      <h2>Hinweis zur Outdoor-Nutzung</h2>
      <p>
        Die App dient der Orientierung und Information. Die Nutzung von Naturräumen,
        Gewässern und Freizeitanlagen erfolgt auf eigene Gefahr. Geltende Regeln,
        Betretungsverbote und Sicherheitshinweise vor Ort sind stets zu beachten.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Anbieter erstellten Inhalte und Werke in dieser App unterliegen
        dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
        jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
        schriftlichen Zustimmung des jeweiligen Autors.
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr
        </a>
        . Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

    </LegalLayout>
  );
}
