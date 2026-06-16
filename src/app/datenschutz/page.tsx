import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Harz Wasser Guide",
  description: "Datenschutzerklärung des Harz Wasser Guide gemäß DSGVO.",
};

export default function Datenschutz() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      subtitle="Stand: 04.06.2026"
    >

      <h2>1. Verantwortlicher</h2>
      <div className="info-box">
        <div className="label">Datenschutzverantwortlicher</div>
        <p>
          Tim Jaitner<br />
          Frankenberger Straße 13<br />
          38640 Goslar<br />
          E-Mail:{" "}
          <a href="mailto:jaitner_tim@web.de">jaitner_tim@web.de</a>
        </p>
      </div>

      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten Ihre
        personenbezogenen Daten ausschließlich im Einklang mit den geltenden
        datenschutzrechtlichen Vorschriften, insbesondere der
        Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
      </p>
      <p>
        Diese Datenschutzerklärung informiert Sie darüber, welche Daten im Rahmen
        der Nutzung des Harz Wasser Guide verarbeitet werden.
      </p>

      <h2>3. Hinweisgeber-System</h2>
      <p>
        Der Harz Wasser Guide stellt ein Hinweisgebersystem bereit, über das Hinweise
        auf mögliche Gesetzesverstöße, Regelverstöße oder sonstige Missstände gemeldet
        werden können. Die Nutzung des Systems ist freiwillig.
      </p>

      <h2>4. Zweck der Datenverarbeitung</h2>
      <p>Die Verarbeitung erfolgt ausschließlich zu folgenden Zwecken:</p>
      <ul>
        <li>Entgegennahme und Bearbeitung von Hinweisen</li>
        <li>Kommunikation mit Hinweisgebern</li>
        <li>Aufklärung gemeldeter Sachverhalte</li>
        <li>Durchführung erforderlicher Untersuchungen</li>
        <li>Erfüllung gesetzlicher Verpflichtungen</li>
        <li>Schutz vor Rechtsverstößen und Missständen</li>
      </ul>

      <h2>5. Rechtsgrundlagen</h2>
      <p>Die Verarbeitung erfolgt auf Grundlage von:</p>
      <ul>
        <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
        <li>§ 10 Hinweisgeberschutzgesetz (HinSchG)</li>
      </ul>
      <p>
        Soweit besondere Kategorien personenbezogener Daten verarbeitet werden, erfolgt
        dies auf Grundlage von Art. 9 Abs. 2 lit. g DSGVO i.V.m. § 22 BDSG.
      </p>

      <h2>6. Verarbeitete Daten</h2>
      <p>Je nach Inhalt Ihrer Meldung können folgende Daten verarbeitet werden:</p>
      <ul>
        <li>Name des Hinweisgebers (freiwillig)</li>
        <li>E-Mail-Adresse oder sonstige Kontaktdaten (freiwillig)</li>
        <li>Angaben zu betroffenen Personen</li>
        <li>Angaben zu Zeugen</li>
        <li>Beschreibung des Sachverhalts</li>
        <li>Hochgeladene Dokumente und Nachweise</li>
        <li>Kommunikationsdaten im Rahmen der Bearbeitung</li>
      </ul>
      <p>Die Bereitstellung personenbezogener Daten erfolgt freiwillig.</p>

      <h2>7. Anonyme Meldungen</h2>
      <p>
        Hinweise können anonym abgegeben werden. Eine anonyme Meldung hat keine
        Nachteile für die Bearbeitung. Allerdings können Rückfragen nicht gestellt
        werden, wodurch die Aufklärung des Sachverhalts erschwert sein kann.
      </p>

      <h2>8. Vertraulichkeit</h2>
      <p>
        Die Identität von Hinweisgebern wird vertraulich behandelt. Zugriff auf die
        Informationen erhalten ausschließlich Personen, die mit der Bearbeitung der
        Meldung beauftragt sind.
      </p>
      <p>Eine Offenlegung erfolgt nur:</p>
      <ul>
        <li>mit Ihrer ausdrücklichen Zustimmung,</li>
        <li>aufgrund gesetzlicher Verpflichtungen,</li>
        <li>auf Anordnung einer zuständigen Behörde oder eines Gerichts.</li>
      </ul>

      <h2>9. Empfänger von Daten</h2>
      <p>
        Eine Weitergabe personenbezogener Daten erfolgt ausschließlich, wenn dies für
        die Bearbeitung der Meldung erforderlich oder gesetzlich vorgeschrieben ist.
        Empfänger können insbesondere sein:
      </p>
      <ul>
        <li>Behörden</li>
        <li>Gerichte</li>
        <li>Rechtsanwälte</li>
        <li>externe Berater</li>
        <li>technische Dienstleister im Rahmen einer Auftragsverarbeitung</li>
      </ul>
      <p>
        Alle eingesetzten Dienstleister sind vertraglich zur Einhaltung der
        Datenschutzvorschriften verpflichtet.
      </p>

      <h2>10. Nutzung des Online-Formulars</h2>
      <p>
        Bei der Nutzung des Hinweisgeberformulars werden technisch notwendige
        Verbindungsdaten verarbeitet, um die sichere Bereitstellung der Anwendung
        zu gewährleisten. Hierzu können insbesondere gehören:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp</li>
        <li>Betriebssystem</li>
        <li>aufgerufene Seiten</li>
      </ul>
      <p>
        Diese Daten werden ausschließlich zur Gewährleistung der Systemsicherheit
        und des technischen Betriebs verarbeitet.
      </p>

      <h2>11. Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden nur so lange gespeichert, wie dies für die
        Bearbeitung des Hinweises sowie zur Erfüllung gesetzlicher
        Aufbewahrungspflichten erforderlich ist. Nach Wegfall des
        Verarbeitungszwecks werden die Daten gelöscht oder anonymisiert, sofern
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>12. Datensicherheit</h2>
      <p>
        Wir setzen angemessene technische und organisatorische Maßnahmen ein, um
        personenbezogene Daten vor Verlust, Manipulation, unberechtigtem Zugriff
        oder unbefugter Offenlegung zu schützen. Hierzu gehören insbesondere:
      </p>
      <ul>
        <li>SSL-/TLS-Verschlüsselung</li>
        <li>Zugriffsbeschränkungen</li>
        <li>rollenbasierte Berechtigungen</li>
        <li>regelmäßige Sicherheitsüberprüfungen</li>
        <li>Protokollierung sicherheitsrelevanter Vorgänge</li>
      </ul>

      <h2>13. Rechte betroffener Personen</h2>
      <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf erteilter Einwilligungen</li>
      </ul>
      <p>
        Darüber hinaus haben Sie das Recht, sich bei einer
        Datenschutzaufsichtsbehörde zu beschweren.
      </p>

      <h2>14. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn dies
        aufgrund rechtlicher, technischer oder organisatorischer Änderungen
        erforderlich wird. Es gilt jeweils die aktuelle auf dieser Website
        veröffentlichte Version.
      </p>

    </LegalLayout>
  );
}
