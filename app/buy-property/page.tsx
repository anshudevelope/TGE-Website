import type { Metadata } from "next";
import BuyPropertyGrid from "@/components/buy-property/BuyPropertyGrid";
import BuyPropertyGuide from "@/components/buy-property/BuyPropertyGuide";
import BuyPropertyHero from "@/components/buy-property/BuyPropertyHero";
import BuyPropertyLocation from "@/components/buy-property/BuyPropertyLocation";
import BuyPropertyWhy from "@/components/buy-property/BuyPropertyWhy";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { buyPropertyFaqs } from "../data/faqData";

// Page-Specific SEO Metadata
export const metadata: Metadata = {
    title: "Plots & Apartments for Sale in Prayagraj | Buy Residential & Commercial Land",
    description:
        "Explore RERA-approved plots, residential homes, and commercial land for sale in Prayagraj across Civil Lines, Jhalwa, Naini, Jhusi, and Katra. 100% legal registry assured.",
    keywords: [
        "Buy plots in Prayagraj",
        "Residential plots for sale Prayagraj",
        "Commercial land Civil Lines Prayagraj",
        "RERA approved plots Jhalwa Naini",
        "Property for sale Jhusi Prayagraj",
        "Buy property in Prayagraj",
        "Plots near IIIT Allahabad Jhalwa",
    ],
    alternates: {
        canonical: "https://www.greatempire.in/buy-property",
    },
    openGraph: {
        title: "Buy Verified Plots & Properties in Prayagraj | The Great Empire Group",
        description:
            "Find top residential and commercial properties in prime localities across Prayagraj. Legal verification and site visits provided.",
        url: "https://www.greatempire.in/buy-property",
        siteName: "The Great Empire Group",
        images: [
            {
                url: "/tge-favicon.jpeg", // Replace with a high-res banner if available
                width: 1200,
                height: 630,
                alt: "Buy Property in Prayagraj - The Great Empire Group",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Plots & Property for Sale in Prayagraj | The Great Empire Group",
        description:
            "Browse RERA-verified residential and commercial plots for sale across Civil Lines, Naini, Jhalwa, and Jhusi.",
        images: ["/tge-favicon.jpeg"],
    },
};

export default function ListPropertyPage() {
    // 1. Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.greatempire.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Buy Property",
                "item": "https://www.greatempire.in/buy-property"
            }
        ]
    };

    // 2. Local Real Estate Collection Page Schema
    const realEstateCollectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Properties for Sale in Prayagraj",
        "description": "Verified residential and commercial property listings in Prayagraj, UP.",
        "url": "https://www.greatempire.in/buy-property",
        "provider": {
            "@type": "RealEstateAgent",
            "name": "The Great Empire Group",
            "url": "https://www.greatempire.in",
            "telephone": "+917388481515"
        },
        "about": {
            "@type": "Place",
            "name": "Prayagraj",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Prayagraj",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
            }
        }
    };

    // 3. Dynamic FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": buyPropertyFaqs.map((faq: { question: string; answer: React.ReactNode }) => ({
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
            {/* Inject Structured Data (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateCollectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

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