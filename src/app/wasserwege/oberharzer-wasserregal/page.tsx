import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Was ist das Oberharzer Wasserregal? – Harz Wasser Guide",
  description: "Das größte vorindustrielle Wassermanagementsystem der Welt – und seit 2010 UNESCO-Welterbe.",
};

export default function Page() {
  return (
    <>
      <Header />
      <GuideLayout
        title="Was ist das Oberharzer Wasserregal?"
        subtitle="Das größte vorindustrielle Wassermanagementsystem der Welt – und seit 2010 UNESCO-Welterbe."
        category="WasserWanderWege"
        categoryHref="/wasserwege"
        categoryColor="bg-emerald-500/20 text-emerald-200"
        meta={{
          difficulty: "Leicht bis Mittel",
          duration: "2–8 Stunden",
          bestSeason: "Ganzjährig",
          dogs: true,
          parking: "Parkplätze in Clausthal-Zellerfeld und an den Teichen",
          familyFriendly: true,
          mapLat: 51.8,
          mapLng: 10.34,
          mapZoom: 11,
        }}
        faqs={[
          { q: "Wann wurde das Oberharzer Wasserregal zum UNESCO-Welterbe?", a: "Im Jahr 2010 wurde es gemeinsam mit den Bergwerken Rammelsberg und der Altstadt Goslar in die Welterbeliste aufgenommen." },
          { q: "Wie viele Teiche und Gräben gibt es?", a: "Das System umfasst über 100 Teiche und etwa 500 km Gräben und Wasserläufe – ein Jahrhundertprojekt des Harzer Bergbaus." },
          { q: "Kann man das Wasserregal besichtigen?", a: "Ja, viele Teiche und Gräben sind frei zugänglich und Teil der Wasserwanderwege. Es gibt auch geführte Touren." },
          { q: "Welche Funktion hatte das Wasserregal früher?", a: "Es versorgte die Silber- und Bergwerke mit Energie durch Wasserräder und regulierte den Wasserhaushalt für die Erzgewinnung." },
          { q: "Gibt es ein Besucherzentrum?", a: "Das Weltkulturerbe Rammelsberg in Goslar bietet Führungen und Ausstellungen zum Thema." },
        ]}
      >
        <div className="guide-prose">
          <p>
            Kaum ein Besucher des Harzes ahnt, welches technische Wunderwerk unter seinen Füßen
            verborgen liegt. Das Oberharzer Wasserregal ist eines der größten und am besten
            erhaltenen vorindustriellen Wassermanagementsysteme der Welt — und seit 2010 UNESCO-Welterbe.
          </p>
          <h2>Geschichte: Wie alles begann</h2>
          <p>
            Im 16. Jahrhundert boomte der Silberbergbau im Oberharz. Die Bergleute stießen auf ein
            grundlegendes Problem: Die Gruben füllten sich mit Wasser. Die Lösung war revolutionär —
            man nutzte das Wasser selbst als Energiequelle durch Stauteiche, Gräben und unterirdische Wasserläufe.
          </p>
          <div className="info-box">
            <div className="label">Das Oberharzer Wasserregal in Zahlen</div>
            <p>Über 500 km Gräben · Mehr als 100 Teiche · Entstanden zwischen 16. und 19. Jahrhundert ·
            Seit 2010 UNESCO-Welterbe · Weltweit größtes vorindustrielles Wassermanagementsystem</p>
          </div>
          <h2>UNESCO-Welterbe: Was wurde anerkannt?</h2>
          <p>
            Im Jahr 2010 nahm die UNESCO das Oberharzer Wasserregal gemeinsam mit den Erzbergwerken
            Rammelsberg und der Altstadt von Goslar in die Welterbeliste auf.
          </p>
          <div className="highlight">
            <p><strong>Besuchertipp:</strong> Das Weltkulturerbe Rammelsberg in Goslar bietet
            unterirdische Führungen und Ausstellungen zur Geschichte des Wasserregals.</p>
          </div>
          <h2>Heute: Wandern auf historischen Wegen</h2>
          <p>
            Viele der historischen Gräben sind heute als Wanderwege zugänglich. Der Rehberger Graben,
            der Kranicher Teich oder der Graben rund um Clausthal-Zellerfeld lassen sich erwandern
            und geben einen lebendigen Eindruck dieser ingenieurtechnischen Leistung.
          </p>
          <h3>Für Familien</h3>
          <p>
            Kinder fasziniert die Idee, dass Menschen hier schon vor Hunderten von Jahren Wasser
            wie Strom durch "Leitungen" geleitet haben. Die Gräben sind gut sichtbar und das Wasser
            fließt noch heute durch viele von ihnen.
          </p>
        </div>
      
            </GuideLayout>
      <Footer />
    </>
  );
}
