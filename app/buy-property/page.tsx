import BuyPropertyGrid from "@/components/buy-property/BuyPropertyGrid";
import BuyPropertyGuide from "@/components/buy-property/BuyPropertyGuide";
import BuyPropertyHero from "@/components/buy-property/BuyPropertyHero";
import BuyPropertyLocation from "@/components/buy-property/BuyPropertyLocation";
import BuyPropertyWhy from "@/components/buy-property/BuyPropertyWhy";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { buyPropertyFaqs } from "../data/faqData";

export default function ListPropertyPage() {
    return (
        <>
            <Navbar />
            <main>
                <BuyPropertyHero />
                <BuyPropertyGrid />
                <BuyPropertyLocation />
                <BuyPropertyWhy />
                <BuyPropertyGuide />
                <FAQs items={buyPropertyFaqs} />
            </main>
            <Footer />
        </>
    );
}