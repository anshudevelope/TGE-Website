import type { Metadata } from "next";

import ConsultHero from "@/components/consultation/ConsultHero";
import ConsultServices from "@/components/consultation/ConsultService";
import TrustAndCoverage from "@/components/consultation/TrustAndCoverage";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { consultationFaqs } from "../data/faqData";

const siteUrl = "https://www.greatempire.in/";

const pageUrl = `${siteUrl}/property-consultant`;

export const metadata: Metadata = {
    title: "Property Consultant in Prayagraj | The Great Empire Group",

    description:
        "Looking for a trusted property consultant in Prayagraj? The Great Empire Group helps you buy, sell & invest in verified plots, flats & homes. Call today.",

    keywords: [
        "property consultant in Prayagraj",
        "real estate consultant Prayagraj",
        "property dealer in Prayagraj",
        "buy plot in Prayagraj",
        "flats for sale in Prayagraj",
        "property investment in Prayagraj",
    ],

    authors: [
        {
            name: "The Great Empire Group",
        },
    ],

    creator: "The Great Empire Group",
    publisher: "The Great Empire Group",

    alternates: {
        canonical: pageUrl,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: pageUrl,
        siteName: "The Great Empire Group",
        title: "Property Consultant in Prayagraj | The Great Empire Group",
        description:
            "Looking for a trusted property consultant in Prayagraj? The Great Empire Group helps you buy, sell & invest in verified plots, flats & homes.",
        images: [
            {
                url: `/consultant-hero.png`,
                width: 1200,
                height: 630,
                alt: "Property Consultant in Prayagraj - The Great Empire Group",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Property Consultant in Prayagraj | The Great Empire Group",
        description:
            "Buy, sell and invest in verified plots, flats and properties in Prayagraj with The Great Empire Group.",
        images: [`${siteUrl}/images/property-consultant-og.jpg`],
    },

    category: "Real Estate",
};

export default function PropertyConsultationPage() {
    const realEstateSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": `${siteUrl}/#real-estate-agent`,
        name: "The Great Empire Group",
        url: siteUrl,
        telephone: "+91 7388481515",
        description:
            "The Great Empire Group is a real estate consultancy in Prayagraj providing property buying, selling, investment and real estate consultation services.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "52/42 Taskand Marg, Civil Lines",
            addressLocality: "Prayagraj",
            addressRegion: "Uttar Pradesh",
            postalCode: "211001",
            addressCountry: "IN",
        },
        areaServed: [
            {
                "@type": "City",
                name: "Prayagraj",
            },
            {
                "@type": "AdministrativeArea",
                name: "Uttar Pradesh",
            },
        ],
        serviceType: [
            "Property Consultation",
            "Real Estate Consultancy",
            "Property Buying Assistance",
            "Property Selling Assistance",
            "Plot Consultation",
            "Real Estate Investment Consultation",
        ],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Property Consultant",
                item: pageUrl,
            },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: consultationFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            {/* JSON-LD: Real Estate Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(realEstateSchema),
                }}
            />

            {/* JSON-LD: Breadcrumb */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            {/* JSON-LD: FAQs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <Navbar />
            <main>
                <ConsultHero />
                <ConsultServices />
                <TrustAndCoverage />
                <FAQs
                    items={consultationFaqs}
                />
            </main>
            <Footer />
        </>
    );
}