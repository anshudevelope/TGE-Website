import type { Metadata } from "next";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import ListingBenefit from "@/components/list-property/ListingBenifit";
import ListingForm from "@/components/list-property/ListingForm";
import ListingWho from "@/components/list-property/ListingWho";
import ListPropertyHero from "@/components/list-property/ListPropertyHero";
import Navbar from "@/components/Navbar";
import { listingFaqs } from "../data/faqData";

export const metadata: Metadata = {
    title: "Free Property Listing in Prayagraj | The Great Empire Group",
    description:
        "List your plot, flat, house or shop for sale in Prayagraj for free. Post your property in 2 minutes and reach genuine buyers.",
    keywords: [
        "list your property for free in Prayagraj",
        "free property listing Prayagraj",
        "sell property in Prayagraj",
        "post property free",
        "sell plot in Prayagraj",
        "sell flat in Prayagraj",
        "property owner listing",
    ],
    alternates: {
        canonical: "/list-property",
    },
    openGraph: {
        title: "Free Property Listing in Prayagraj | The Great Empire Group",
        description:
            "List your plot, flat, house or shop for sale in Prayagraj for free. Post your property in 2 minutes and reach genuine buyers.",
        url: "/list-property",
        type: "website",
        siteName: "The Great Empire Group",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Property Listing in Prayagraj | The Great Empire Group",
        description:
            "List your plot, flat, house or shop for sale in Prayagraj for free and reach genuine buyers.",
    },
};

export default function ListPropertyPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "/list-property#webpage",
                url: "/list-property",
                name: "Free Property Listing in Prayagraj | The Great Empire Group",
                description:
                    "List your plot, flat, house or shop for sale in Prayagraj for free. Post your property in 2 minutes and reach genuine buyers.",
                isPartOf: {
                    "@type": "WebSite",
                    name: "The Great Empire Group",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "/list-property#faq",
                mainEntity: listingFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": "/list-property#breadcrumb",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "List Property",
                        item: "/list-property",
                    },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <Navbar />
            <ListPropertyHero />
            <ListingBenefit />
            <ListingForm />
            <ListingWho />
            <FAQs items={listingFaqs} />
            <Footer />
        </>
    );
}