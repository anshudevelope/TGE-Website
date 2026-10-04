import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SellPropertyArea from "@/components/sell-property/SellPropertyArea";
import SellPropertyGuide from "@/components/sell-property/SellPropertyGuide";
import SellPropertyHelp from "@/components/sell-property/SellPropertyHelp";
import SellPropertyHero from "@/components/sell-property/SellPropertyHero";
import SellPropertyProcess from "@/components/sell-property/SellPropertyProcess";
import { sellPropertyFaqs } from "../data/faqData";

export default function SellPropertyPage() {
    return (
        <>
            <Navbar />
            <main>
                <SellPropertyHero />
                <SellPropertyHelp />
                <SellPropertyArea />
                <SellPropertyProcess />
                <SellPropertyGuide />
                <FAQs items={sellPropertyFaqs} />
            </main>
            <Footer />
        </>
    );
}