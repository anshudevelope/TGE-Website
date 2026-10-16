import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Service";
import { homeFaqs } from "./data/faqData";
import Map from "@/components/Map";
import HomeLead from "@/components/HomeLead";
import LatestProject from "@/components/LatestProject";
import NewPopup from "@/components/sell-property/NewPopup";
import LiveApartment from "@/components/LiveApartment";

export default function Home() {
  // Construct FAQ JSON-LD dynamically from your faqData
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <HomeHero />
      <About />
      <Services />
      <LatestProject />
      <LiveApartment />
      <FAQs items={homeFaqs} />
      <HomeLead />
      <Map />
      <NewPopup />
      <Footer />
    </>
  );
}