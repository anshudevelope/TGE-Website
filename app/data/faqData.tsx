import { on } from "events";
import { p } from "framer-motion/m";
import { property } from "zod/v4";
import Link from "next/link";

export interface FAQItem {
    id: string;
    question: string;
    answer: React.ReactNode;
}

export const homeFaqs: FAQItem[] = [
    {
        id: "home-1",
        question: "Which areas in Prayagraj do you deal in?",
        answer:
            "We operate across key residential, commercial, and investment hubs in Prayagraj, including Civil Lines, Jhalwa (near IIIT), Naini, Jhusi, Katra, Kalindipuram, Shantipuram, and Phaphamau.",
    },
    {
        id: "home-2",
        question: "Are all property plots legal and registry-approved?",
        answer:
            "Yes. Every plot, home, and commercial land listed or recommended by The Great Empire Group undergoes 100% legal verification, revenue department/Khasra checks, and clear title auditing before recommendation.",
    },
    {
        id: "home-3",
        question: "Do you offer property resale services for current owners?",
        answer:
            "Yes! We provide dedicated resale services for property owners and investors. We conduct fair market valuation assessments and connect you directly with genuine buyers for smooth transactions.",
    },
    {
        id: "home-4",
        question: "Can you help with large agricultural land or acre acquisitions?",
        answer:
            "Yes. Our specialized Land Management team assists developers, institutions, and individual investors in acquiring agricultural, farm, and recreational land measured in acres across Uttar Pradesh.",
    },
    {
        id: "home-5",
        question: "Do you offer turnkey construction services after plot purchase?",
        answer:
            "Yes. We provide complete turnkey construction services—from architectural planning and municipal permissions to construction management and final handover for custom residential and commercial projects.",
    },
    {
        id: "home-6",
        question: "How can I schedule a free site visit or consultation?",
        answer:
            "You can click on any 'Get Free Consultation' button on our website to visit our Contact page, or call our team directly at +91 7388 481515. We arrange hassle-free site visits at your convenience.",
    },
];

export const aboutFaqs: FAQItem[] = [
    {
        id: "about-1",
        question: "Who is behind The Great Empire Group and what is your core background?",
        answer:
            "The Great Empire Group is a premier real estate consultancy and service firm in Prayagraj, operating with over 5 years of industry experience. We bridge the gap between land developers, property owners, and buyers by offering verified residential plots, commercial land, and end-to-end real estate management across Uttar Pradesh.",
    },
    {
        id: "about-2",
        question: "Where is The Great Empire Group head office located in Prayagraj?",
        answer:
            "Our main corporate office is located at 52/42 Taskand Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001. Clients and investors are welcome to visit our office for in-person consultations, plot map reviews, and site visit scheduling.",
    },
    {
        id: "about-3",
        question: "How do you verify property legal documentation before offering plots to clients?",
        answer:
            "Every property on our panel undergoes strict due diligence. Our team inspects revenue department records, Khasra/Khatauni documents, authority approvals, and land ownership history to guarantee 100% clear titles and dispute-free registries.",
    },
    {
        id: "about-4",
        question: "How can I get in touch directly with support or schedule an office meeting?",
        answer:
            "You can contact our support team directly at +91 7388481515. Alternatively, you can drop by our office at 52/42 Taskand Marg, Civil Lines, Prayagraj, UP 211001, or fill out the booking form on our Contact page.",
    },
    {
        id: "about-5",
        question: "Do you assist buyers with site visits and transportation in Prayagraj?",
        answer:
            "Yes. We arrange hassle-free, guided site visits for all our potential buyers across Civil Lines, Jhalwa, Naini, Jhusi, Shantipuram, and surrounding growth corridors, ensuring you inspect the plot and surroundings firsthand.",
    },
    {
        id: "about-6",
        question: "Does The Great Empire Group work with channel partners and property associates?",
        answer:
            "Yes. We maintain a strong network of trusted real estate channel partners, developers, and investment associates across Uttar Pradesh to ensure access to top-tier commercial and residential land deals.",
    },
];

export const consultationFaqs: FAQItem[] = [
    {
        id: "faq-1",
        question: "What does a property consultant in Prayagraj do?",
        answer:
            "A property consultant helps clients buy, sell, rent, or invest in real estate. This can include shortlisting suitable properties, coordinating site visits, reviewing available documentation, discussing pricing, assisting with negotiations, and guiding clients through registry and other paperwork involved in the property transaction.",
    },

    {
        id: "faq-2",
        question: "Why should I hire The Great Empire Group as my property consultant in Prayagraj?",
        answer:
            "The Great Empire Group provides property consultancy with a focus on verified listings, transparent communication, local market knowledge, and transaction support. Our team helps clients understand available property options, compare opportunities, coordinate site visits, and navigate documentation so they can make informed real estate decisions based on their requirements.",
    },

    {
        id: "faq-3",
        question: "Which areas in Prayagraj are best for buying a plot or flat?",
        answer:
            "The right area depends on your budget, property type, lifestyle needs, and investment purpose. Civil Lines may suit buyers seeking a central premium locality, while Naini, Jhunsi, Jhalwa, and Phaphamau offer different residential and development opportunities. We help clients explore locations according to their specific requirements.",
    },

    {
        id: "faq-4",
        question: "How do I check if a property in Prayagraj is legally clear?",
        answer:
            "Property verification can include checking the title deed, ownership records, encumbrance details, relevant development authority approvals, RERA registration where applicable, and mutation records. Our team can guide buyers through the documentation and verification process and help identify the records that should be reviewed before proceeding with a transaction.",
    },

    {
        id: "faq-5",
        question: "Do you charge a consultation fee?",
        answer:
            "No, we do not charge a consultation fee for discussing your property requirements or providing initial guidance. However, if you buy or sell a property through our consultancy, a simple percentage-based service or brokerage amount may apply. The amount depends on the property's value and the role and services involved.",
    },

    {
        id: "faq-6",
        question: "Can NRIs buy property in Prayagraj through you?",
        answer:
            "We can assist NRIs with understanding available property options, coordinating property discussions, arranging virtual or in-person site visits, and guiding them regarding documentation and transaction procedures. Specific eligibility and purchase requirements can depend on the NRI's circumstances and the type of property, so these should be confirmed before proceeding.",
    },

    {
        id: "faq-7",
        question: "Do you help with home loans?",
        answer:
            "We do not directly provide or process home loans. However, we can guide you toward suitable and trusted banking or financial partners based on your requirements. Our team can also help you understand the general documentation and property-related information you may need while exploring financing options for your real estate purchase.",
    },

    {
        id: "faq-8",
        question: "How can I book a site visit?",
        answer:
            "You can book a site visit by calling our team at +91 7388481515 or by submitting an enquiry through our Contact page. Share your preferred property, location, and suitable timing, and our team will coordinate the visit accordingly and provide the relevant property details before or during the site visit.",
    },
];

export const listingFaqs: FAQItem[] = [
    {
        id: "faq-1",
        question: "Is it really free to list my property in Prayagraj?",
        answer:
            "Yes, listing your property on The Great Empire Group is free. We do not charge any listing fee. If a deal is successfully completed through our services, any applicable service charges or brokerage will be discussed with you clearly in advance.",
    },

    {
        id: "faq-2",
        question: "Who can list a property on The Great Empire Group?",
        answer:
            "Property owners and authorised property agents can list residential, commercial, and land properties for sale in Prayagraj and nearby areas. The person submitting the listing should have the necessary authority to market the property.",
    },

    {
        id: "faq-3",
        question: "What documents do I need to list my property?",
        answer:
            "Basic property details are enough to submit a listing initially. Before proceeding with a sale, buyers may request documents such as the title deed or registry, property tax receipts, encumbrance certificate, ownership records, and valid ID proof. Keeping these documents ready can help make the verification and transaction process smoother.",
    },

    {
        id: "faq-4",
        question: "How long does it take for my property to go live?",
        answer:
            "After you submit your property details, our team reviews the information and may contact you to confirm the listing details. Most property listings can go live within 24–48 hours after the required information has been reviewed and confirmed.",
    },

    {
        id: "faq-5",
        question: "Can I edit or remove my property listing later?",
        answer:
            "Yes. You can contact The Great Empire Group to update your property's price, photos, description, or other listing details. You can also request us to remove your property listing whenever you no longer want it to be advertised.",
    },

    {
        id: "faq-6",
        question: "Will my phone number be shared publicly?",
        answer:
            "No. Your phone number and other contact details are not displayed publicly without your permission. When appropriate, your contact information may be shared with genuine and screened buyers who are interested in your property.",
    },
];

export const buyPropertyFaqs: FAQItem[] = [
    {
        id: "faq-1",
        question: "Which is the best area to buy property in Prayagraj?",
        answer:
            "The best area depends on your budget, property type, lifestyle requirements, and investment goals. Civil Lines may suit buyers looking for premium and centrally located properties, while Naini, Jhalwa, Jhunsi, and Phaphamau offer a range of residential and investment opportunities. Our team can help you compare locations based on your specific requirements.",
    },

    {
        id: "faq-2",
        question: "Is it a good time to buy property in Prayagraj?",
        answer:
            "Prayagraj has experienced ongoing infrastructure development and growth in residential and commercial areas. However, the right time to buy depends on your financial position, property location, budget, and long-term objectives. We can help you compare available properties and understand the factors you should consider before making a decision.",
    },

    {
        id: "faq-3",
        question: "How do I check if a property in Prayagraj is legally clear?",
        answer:
            "Before purchasing a property, buyers should review important documents such as the sale deed or title deed, encumbrance certificate, mutation records, property tax receipts, applicable development authority approvals, and RERA registration for projects where applicable. Our team can help you understand the documents that should be reviewed before you proceed with a purchase.",
    },

    {
        id: "faq-4",
        question: "What documents are required to buy a property in Prayagraj?",
        answer:
            "Buyers generally need documents such as valid ID proof, address proof, PAN card, and passport-size photographs. If you are applying for a home loan, the lender may also require income and financial documents. The seller typically provides the property's ownership and title documents, while the buyer and seller complete the required registration process at the appropriate Sub-Registrar's Office.",
    },

    {
        id: "faq-5",
        question: "What is the cost of registration when buying property in Prayagraj?",
        answer: (
            <p>
                Property registration costs generally include stamp duty and
                registration fees. The applicable amount depends on factors such as
                the property's value, transaction details, and current government
                rules. You can check the applicable charges using the{" "}
                <a
                    href="https://igrsup.gov.in/igrsup/stampFeesCalculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline hover:no-underline font-medium"
                >
                    official Uttar Pradesh IGRSUP Stamp Fees Calculator
                </a>
                . Our team can also help you understand the expected
                registration-related costs before you proceed.
            </p>
        ),
    },

    {
        id: "faq-6",
        question: "Can I get a home loan for property in Prayagraj?",
        answer:
            "Yes, banks and housing finance companies offer home loans for eligible residential properties and, depending on the lender and property, certain plots or other types of real estate. Loan approval depends on factors such as the borrower's income, credit profile, property documents, and lender policies. We can help guide you toward suitable banking or financial partners and assist with understanding the general documentation required.",
    },

    {
        id: "faq-7",
        question: "Can NRIs buy property in Prayagraj?",
        answer:
            "NRIs can generally purchase residential and commercial properties in India, subject to applicable laws and regulations. There are specific restrictions regarding agricultural land, farmhouses, and plantation property. We can assist NRIs with property selection, virtual site visits, communication, and documentation guidance. For individual circumstances, buyers should confirm the current applicable rules with a qualified legal or financial advisor.",
    },

    {
        id: "faq-8",
        question: "How can I book a site visit?",
        answer: (
            <p>
                You can book a property site visit by calling or WhatsApping our
                team at{" "}
                <a
                    href="tel:+917388481515"
                    className="font-medium text-primary hover:underline"
                >
                    +91 7388 481515
                </a>
                . You can also{" "}
                <Link
                    href="/contact"
                    className="font-medium text-primary hover:underline"
                >
                    submit an enquiry through our Contact page
                </Link>
                . Share the property you are interested in and your preferred date
                and time, and our team will coordinate the site visit accordingly.
            </p>
        ),
    },
];