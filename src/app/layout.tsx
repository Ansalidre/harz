import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE = "https://harzwasserguide.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Harz Wasser Guide – Seen, Talsperren & Wasserfälle im Harz entdecken",
    template: "%s | Harz Wasser Guide",
  },
  description:
    "Die App und der Ratgeber für Wasserliebhaber im Harz: Badeseen, Talsperren, Wasserfälle, WasserWanderWege und Wassersport auf einer interaktiven Karte. Mit Navigation, Filtern und Offline-Funktion.",
  keywords: [
    "Harz Seen", "Talsperren Harz", "Wasserfälle Harz", "Badesee Harz",
    "Wandern Harz Wasser", "Rappbodetalsperre", "Okertalsperre",
    "Radauwasserfall", "Oberharzer Wasserregal", "Harz App",
    "WasserWanderWege Harz", "Nationalpark Harz Wasser",
    "Harz Urlaub", "Harz Ausflug Familie", "Baden Harz",
  ],
  authors: [{ name: "Harz Wasser Guide", url: BASE }],
  creator: "Harz Wasser Guide",
  publisher: "Harz Wasser Guide",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE,
    siteName: "Harz Wasser Guide",
    title: "Harz Wasser Guide – Seen, Talsperren & Wasserfälle entdecken",
    description:
      "Alle Badeseen, Talsperren, Wasserfälle und Wasserwanderwege im Harz auf einer App. Mit interaktiver Karte, Navigation und Insider-Tipps.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harz Wasser Guide – Brocken und Seen im Harz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harz Wasser Guide – Seen, Talsperren & Wasserfälle im Harz",
    description:
      "Alle Wasserspots im Harz auf einer App. Badeseen, Talsperren, Wasserfälle, Wasserwanderwege.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <head>
        {/* GEO-Tags – Harz region */}
        <meta name="geo.region" content="DE-NI DE-ST DE-TH" />
        <meta name="geo.placename" content="Harz, Deutschland" />
        <meta name="geo.position" content="51.7167;10.5333" />
        <meta name="ICBM" content="51.7167, 10.5333" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${BASE}/#website`,
                  "url": BASE,
                  "name": "Harz Wasser Guide",
                  "description": "App und Ratgeber für Seen, Talsperren, Wasserfälle und Wasserwanderwege im Harz",
                  "inLanguage": "de-DE",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": `${BASE}/?q={search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "MobileApplication",
                  "@id": `${BASE}/#app`,
                  "name": "Harz Wasser Guide",
                  "description": "Die App für Seen, Talsperren, Wasserfälle und Wasserwanderwege im Harz – mit interaktiver Karte und Navigation.",
                  "applicationCategory": "TravelApplication",
                  "operatingSystem": "Android, iOS",
                  "url": BASE,
                  "image": `${BASE}/images/og-image.jpg`,
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "EUR",
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "124",
                  },
                },
                {
                  "@type": "TouristAttraction",
                  "name": "Harz – Seen, Talsperren & Wasserfälle",
                  "description": "Das nördlichste Mittelgebirge Deutschlands mit über 20 Talsperren, Dutzenden Seen und spektakulären Wasserfällen.",
                  "url": BASE,
                  "image": `${BASE}/images/og-image.jpg`,
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.7167,
                    "longitude": 10.5333,
                  },
                  "touristType": ["Naturliebhaber", "Wanderer", "Familien", "Fotografen"],
                  "availableLanguage": ["de", "en"],
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Welche Seen im Harz sind die schönsten?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Zu den schönsten Seen im Harz zählen der Oderteich bei Sankt Andreasberg, der Okerstausee, der Silberteich bei Clausthal-Zellerfeld und der Juessee bei Herzberg am Harz (Südharz). Letzterer ist auch die beste offizielle Badestelle im Harz.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Welche Talsperre im Harz ist die größte?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Die Rappbodetalsperre ist mit einer Sperrmauerhöhe von 106 Metern und einem Stauvolumen von 109 Millionen Kubikmetern die größte Talsperre im Harz – und die größte Trinkwassertalsperre Deutschlands.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Wo befinden sich die schönsten Wasserfälle im Harz?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Die bekanntesten Wasserfälle im Harz sind der Romkerhaller Wasserfall im Okertal, der Radauwasserfall bei Bad Harzburg und die Ilsefälle im Ilsetal. Am eindrucksvollsten sind sie im Frühjahr nach der Schneeschmelze.",
                      },
                    },
                    {
                      "@type": "Question",
                      "name": "Was ist das Oberharzer Wasserregal?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Das Oberharzer Wasserregal ist ein historisches Wassermanagementsystem aus über 500 km Gräben und mehr als 100 Teichen, das ab dem 16. Jahrhundert für den Silberbergbau angelegt wurde. Seit 2010 ist es UNESCO-Welterbe.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
