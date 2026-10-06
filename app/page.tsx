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

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <About />
      <Services />
      <LatestProject />
      <FAQs items={homeFaqs} />
      <HomeLead />
      <Map />
      <NewPopup />
      <Footer />
    </>
  );
}
