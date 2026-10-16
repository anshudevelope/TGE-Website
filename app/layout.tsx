import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LeadModalProvider } from "./context/LeadModalContext";
import LeadModal from "@/components/LeadModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greatempire.in"),
  title: "Real Estate & Property Consultants in Prayagraj | The Great Empire Group",
  icons: {
    icon: "/tge-favicon.jpeg",
  },

  description:
    "Leading real estate consultants in Prayagraj. Buy, sell, or invest in verified residential plots, commercial properties, and land with 100% legal registry and RERA assurance.",
  keywords: [
    "Real estate in Prayagraj",
    "Property dealers in Civil Lines Prayagraj",
    "Buy plots in Prayagraj",
    "Sell property free Prayagraj",
    "The Great Empire Group",
    "Residential plots Naini Jhusi Jhalwa",
    "Best property consultants UP",
  ],
  authors: [{ name: "The Great Empire Group" }],
  creator: "The Great Empire Group",
  publisher: "The Great Empire Group",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Real Estate & Property in Prayagraj | The Great Empire Group",
    description:
      "Find your ideal property, plot, or commercial space in Prayagraj. Expert valuation, legal verification, and trusted local advisory.",
    url: "https://www.greatempire.in",
    siteName: "The Great Empire Group",
    images: [
      {
        url: "/tge-favicon.jpeg", // Replace with a larger 1200x630 banner image for best social previews
        width: 1200,
        height: 630,
        alt: "The Great Empire Group - Prayagraj Real Estate Leaders",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Empire Group | Real Estate in Prayagraj",
    description:
      "Buy, sell, and invest in verified properties across Civil Lines, Naini, Jhusi, and Jhalwa, Prayagraj.",
    images: ["/tge-favicon.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // LocalBusiness Schema for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "The Great Empire Group",
    "image": "https://www.greatempire.in/tge-favicon.jpeg",
    "@id": "https://www.greatempire.in",
    "url": "https://www.greatempire.in",
    "telephone": "+917388481515",
    "email": "thegreatempiregroup@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "52/42 Taskand Marg, Civil Lines",
      "addressLocality": "Prayagraj",
      "addressRegion": "UP",
      "postalCode": "211001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.4484, // Approximate Civil Lines coordinates; update with precise pin if available
      "longitude": 81.8340
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      "Prayagraj",
      "Civil Lines",
      "Jhalwa",
      "Naini",
      "Katra",
      "Tagore Town",
      "Jhusi",
      "Devghat",
      "Kalindipuram",
      "Rajrooppur"
    ],
    "sameAs": []
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LeadModalProvider>
          {children}
          <LeadModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}