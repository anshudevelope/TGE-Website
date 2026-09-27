import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
import AboutHero from "@/components/About/AboutHero";
import { aboutFaqs } from "../data/faqData";
import AboutDetails from "@/components/About/AboutDetails";

export default function Home() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <AboutDetails />
            <FAQs items={aboutFaqs} />
            <Footer />
        </>
    );
}
