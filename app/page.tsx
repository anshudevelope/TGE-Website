import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Service";
import { homeFaqs } from "./data/faqData";
import Map from "@/components/Map";
import HomeLead from "@/components/HomeLead";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <About />
      <Services />
      <FAQs items={homeFaqs} />
      <HomeLead />
      <Map />
      <Footer />
    </>
  );
}
