import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung / Privacy Policy – Harz Wasser Guide",
  description: "Datenschutzerklärung des Harz Wasser Guide gemäß DSGVO. Privacy Policy of the Harz Wasser Guide pursuant to GDPR.",
};

export default function Datenschutz() {
  return (
    <LegalLayout
      title="Datenschutzerklärung / Privacy Policy"
      subtitle="Stand / As of: 04.06.2026"
    >

      {/* ── ENGLISH VERSION ── */}
      <h2 style={{borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: "8px", marginBottom: "24px", color: "var(--accent, #3b9ede)", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase"}}>English Version</h2>

      <h2>1. Controller</h2>
      <div className="info-box">
        <div className="label">Data Protection Controller</div>
        <p>
          Tim Jaitner<br />
          Frankenberger Straße 13<br />
          38640 Goslar<br />
          E-Mail:{" "}
          <a href="mailto:jaitner_tim@web.de">jaitner_tim@web.de</a>
        </p>
      </div>

      <h2>2. General Information</h2>
      <p>
        The protection of your personal data is important to us. We process your personal data
        exclusively in accordance with applicable data protection laws, in particular the General
        Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
      </p>
      <p>
        This privacy policy informs you about what data is processed when using the Harz Wasser Guide.
      </p>

      <h2>3. Whistleblower System</h2>
      <p>
        The Harz Wasser Guide provides a whistleblower system through which reports of potential
        legal violations, rule violations, or other misconduct can be submitted. Use of the system
        is voluntary.
      </p>

      <h2>4. Purpose of Data Processing</h2>
      <p>Processing is carried out exclusively for the following purposes:</p>
      <ul>
        <li>Receiving and processing reports</li>
        <li>Communication with whistleblowers</li>
        <li>Investigating reported matters</li>
        <li>Conducting required inquiries</li>
        <li>Fulfilling legal obligations</li>
        <li>Protection against legal violations and misconduct</li>
      </ul>

      <h2>5. Legal Basis</h2>
      <p>Processing is based on:</p>
      <ul>
        <li>Art. 6(1)(c) GDPR (legal obligation)</li>
        <li>Art. 6(1)(f) GDPR (legitimate interest)</li>
        <li>§ 10 Whistleblower Protection Act (HinSchG)</li>
      </ul>
      <p>
        Where special categories of personal data are processed, this is done on the basis of
        Art. 9(2)(g) GDPR in conjunction with § 22 BDSG.
      </p>

      <h2>6. Data Processed</h2>
      <p>Depending on the content of your report, the following data may be processed:</p>
      <ul>
        <li>Name of the whistleblower (voluntary)</li>
        <li>Email address or other contact details (voluntary)</li>
        <li>Information about affected persons</li>
        <li>Information about witnesses</li>
        <li>Description of the matter</li>
        <li>Uploaded documents and evidence</li>
        <li>Communication data during processing</li>
      </ul>
      <p>Providing personal data is voluntary.</p>

      <h2>7. Anonymous Reports</h2>
      <p>
        Reports can be submitted anonymously. Anonymous reporting does not disadvantage the
        processing. However, follow-up questions cannot be asked, which may make it harder
        to clarify the matter.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        The identity of whistleblowers is treated confidentially. Access to information is
        granted only to persons assigned to handle the report.
      </p>
      <p>Disclosure occurs only:</p>
      <ul>
        <li>with your explicit consent,</li>
        <li>due to legal obligations,</li>
        <li>by order of a competent authority or court.</li>
      </ul>

      <h2>9. Recipients of Data</h2>
      <p>
        Personal data is only shared when necessary for processing the report or required by law.
        Recipients may include in particular:
      </p>
      <ul>
        <li>Authorities</li>
        <li>Courts</li>
        <li>Lawyers</li>
        <li>External consultants</li>
        <li>Technical service providers under data processing agreements</li>
      </ul>
      <p>
        All service providers used are contractually obligated to comply with data protection regulations.
      </p>

      <h2>10. Use of the Online Form</h2>
      <p>
        When using the whistleblower form, technically necessary connection data is processed
        to ensure the secure provision of the application. This may include:
      </p>
      <ul>
        <li>IP address</li>
        <li>Date and time of access</li>
        <li>Browser type</li>
        <li>Operating system</li>
        <li>Pages accessed</li>
      </ul>
      <p>
        This data is processed exclusively to ensure system security and technical operation.
      </p>

      <h2>11. Storage Period</h2>
      <p>
        Personal data is stored only as long as necessary for processing the report and fulfilling
        legal retention obligations. After the purpose of processing no longer applies, the data
        will be deleted or anonymized, unless legal retention obligations prevent this.
      </p>

      <h2>12. Data Security</h2>
      <p>
        We use appropriate technical and organizational measures to protect personal data from
        loss, manipulation, unauthorized access, or unauthorized disclosure. These include in particular:
      </p>
      <ul>
        <li>SSL/TLS encryption</li>
        <li>Access restrictions</li>
        <li>Role-based permissions</li>
        <li>Regular security audits</li>
        <li>Logging of security-relevant events</li>
      </ul>

      <h2>13. Rights of Data Subjects</h2>
      <p>Under the GDPR, you have in particular the following rights:</p>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>Right to object (Art. 21 GDPR)</li>
        <li>Right to withdraw consent</li>
      </ul>
      <p>
        You also have the right to lodge a complaint with a data protection supervisory authority.
      </p>

      <h2>14. Changes to this Privacy Policy</h2>
      <p>
        We reserve the right to update this privacy policy if required due to legal, technical,
        or organizational changes. The current version published on this website always applies.
      </p>

      {/* ── DEUTSCHE VERSION ── */}
      <div style={{borderTop: "2px solid rgba(255,255,255,.1)", marginTop: "56px", paddingTop: "40px"}}>
        <h2 style={{borderBottom: "1px solid rgba(255,255,255,.1)", paddingBottom: "8px", marginBottom: "24px", color: "var(--accent, #3b9ede)", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase"}}>Deutsche Version</h2>
      </div>

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
