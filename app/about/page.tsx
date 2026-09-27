import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
import AboutHero from "@/components/About/AboutHero";
import { homeFaqs } from "../data/faqData";

export default function Home() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <FAQs items={homeFaqs} />
            <Footer />
        </>
    );
}
