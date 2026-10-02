"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    MapPin,
    Search,
    Building,
    Scale,
    Handshake,
    Star,
    ArrowRight,
    ShieldCheck,
    ChevronRight,
} from "lucide-react";

interface Locality {
    name: string;
    slug: string;
    propertyType: string;
    priceRange: string;
    mapEmbedUrl: string;
}

export default function TrustAndCoverage() {
    const [selectedLocality, setSelectedLocality] = useState<number>(0);

    // Verified Inventory Localities in Prayagraj
    const localities: Locality[] = [
        {
            name: "Civil Lines",
            slug: "civil-lines",
            propertyType: "Luxury Apartments, Premium Offices & Commercial Outlets",
            priceRange: "₹85 Lakh - ₹3.5 Cr+",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.222301287668!2d81.82823795!3d25.45310235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a84e5a013%3A0xb3cf5bb4edb07fa8!2sCivil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Naini",
            slug: "naini",
            propertyType: "PDA-Approved Residential Plots & Industrial Parks",
            priceRange: "₹18 Lakh - ₹85 Lakh",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28830.748398188176!2d81.84918455!3d25.3816654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c585c5c179c3d%3A0xc3f8379435b0d061!2sNaini%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Jhunsi",
            slug: "jhunsi",
            propertyType: "Gated Housing Societies & Riverfront Plots",
            priceRange: "₹22 Lakh - ₹1.1 Cr",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28821.570183185348!2d81.89531875!3d25.4382586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf8c87eb8f161%3A0xb198e3bfaeb5fb3d!2sJhusi%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Phaphamau",
            slug: "phaphamau",
            propertyType: "Budget Residential Plots & Affordable Independent Homes",
            priceRange: "₹15 Lakh - ₹60 Lakh",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28800.838561012353!2d81.85497255!3d25.5222091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf0e3c545ab5d%3A0xc6c7d9a8e030b77b!2sPhaphamau%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Teliarganj",
            slug: "teliarganj",
            propertyType: "Rental Flats, Student Hostels & Multi-storey Apartments",
            priceRange: "₹35 Lakh - ₹1.2 Cr",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14405.012543981881!2d81.85210135!3d25.4950346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd8c1c5a1537%3A0x6b40e797a742fa43!2sTeliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Lukerganj",
            slug: "lukerganj",
            propertyType: "Heritage Villas & Premium Residential Builder Floors",
            priceRange: "₹65 Lakh - ₹2.2 Cr",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14411.332301287668!2d81.81523795!3d25.44410235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4a84e5a013%3A0xb3cf5bb4edb07fa8!2sLukerganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Allenganj",
            slug: "allenganj",
            propertyType: "2/3 BHK Modern Apartments & Commercial Coaching Spaces",
            priceRange: "₹45 Lakh - ₹1.4 Cr",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14407.332301287668!2d81.85523795!3d25.47410235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd6a84e5a013%3A0xb3cf5bb4edb07fa8!2sAllenganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Bamrauli",
            slug: "bamrauli",
            propertyType: "Airport Highway Connectivity Plots & Warehousing Land",
            priceRange: "₹20 Lakh - ₹90 Lakh",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14412.332301287668!2d81.73523795!3d25.43410235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf24a84e5a013%3A0xb3cf5bb4edb07fa8!2sBamrauli%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Subedarganj",
            slug: "subedarganj",
            propertyType: "Railway Corridor Residential Plots & Independent Houses",
            priceRange: "₹30 Lakh - ₹95 Lakh",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.832301287668!2d81.78523795!3d25.44910235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf34a84e5a013%3A0xb3cf5bb4edb07fa8!2sSubedarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Jhalwa",
            slug: "jhalwa",
            propertyType: "IIIT Campus Vicinity Plots, Builder Floors & Row Houses",
            priceRange: "₹28 Lakh - ₹1.1 Cr",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14411.832301287668!2d81.76523795!3d25.42910235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf14a84e5a013%3A0xb3cf5bb4edb07fa8!2sJhalwa%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Shantipuram",
            slug: "shantipuram",
            propertyType: "Planned Colony Residential Plots & Duplex Houses",
            priceRange: "₹25 Lakh - ₹80 Lakh",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14398.832301287668!2d81.86523795!3d25.53910235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be04a84e5a013%3A0xb3cf5bb4edb07fa8!2sShantipuram%2C%20Phaphamau%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
        {
            name: "Kydganj",
            slug: "kydganj",
            propertyType: "Central City Commercial Plots & Heritage Homes",
            priceRange: "₹50 Lakh - ₹2.5 Cr",
            mapEmbedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14412.832301287668!2d81.84523795!3d25.42910235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd7a84e5a013%3A0xb3cf5bb4edb07fa8!2sKydganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
        },
    ];

    // 4-Step Process Data
    const steps = [
        {
            num: "01",
            title: "Share Requirement & Budget",
            desc: "Tell us your preferred locality, budget, and property specifications via call or form.",
            icon: Search,
        },
        {
            num: "02",
            title: "Verified Property Shortlisting",
            desc: "We match your criteria with our exclusive inventory of PDA & RERA approved properties.",
            icon: Building,
        },
        {
            num: "03",
            title: "Guided Site Visit & Legal Check",
            desc: "Accompanied site visits with zero-cost title checks and document verification.",
            icon: Scale,
        },
        {
            num: "04",
            title: "Fair Deal & Registry Support",
            desc: "Transparent price negotiation followed by complete registry and mutation support.",
            icon: Handshake,
        },
    ];

    // Real Testimonials
    const testimonials = [
        {
            name: "Rameshwar Shukla",
            role: "Retrived Government Officer",
            location: "Civil Lines, Prayagraj",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            quote:
                "The Great Empire Group made buying our 3 BHK flat in Civil Lines completely hassle-free. Their legal check team ensured the title was 100% clean before we signed.",
            rating: 5,
        },
        {
            name: "Anand Srivastava",
            role: "IT Professional & Investor",
            location: "Jhalwa, Prayagraj",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            quote:
                "As an NRI investor, finding verified plots in Jhalwa was tough until I contacted them. Excellent ROI guidance and clear documentation without hidden fees.",
            rating: 5,
        },
        {
            name: "Priyanka Mishra",
            role: "Business Owner",
            location: "Naini, Prayagraj",
            image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
            quote:
                "Sold my commercial land in Naini within 3 weeks at market-leading prices. Highly ethical group and full registration support right up to mutation.",
            rating: 5,
        },
    ];

    return (
        <section className="bg-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 text-slate-800 space-y-24 overflow-hidden">
            {/* =========================================================
          BLOCK 1: WHY CHOOSE US (LEFT-RIGHT SPLIT)
      ========================================================= */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Why Choose Us Content */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>TRUSTED REAL ESTATE PARTNER</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                        Why Choose The Great Empire Group as Your Property Consultant in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                            Prayagraj?
                        </span>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        With years of on-ground expertise across Prayagraj, we bridge the gap
                        between property buyers and authentic sellers through legal transparency
                        and direct market pricing.
                    </p>

                    {/* Checklist */}
                    <div className="space-y-4 pt-2">
                        {[
                            "Deep local knowledge of Prayagraj's markets and price trends",
                            "Verified listings with a clear title and PDA/RERA approvals",
                            "Transparent pricing with zero hidden consultancy charges",
                            "Dedicated site visit support and professional negotiation help",
                            "Complete after-sales assistance (registry, mutation, bank loans)",
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                className="flex items-start gap-3.5 bg-white/80 p-3.5 rounded-2xl border border-amber-900/5 shadow-xs hover:border-amber-500/30 transition-colors"
                            >
                                <div className="mt-0.5 p-1 rounded-full bg-amber-500/15 text-amber-700 shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="text-slate-800 font-bold text-sm sm:text-base leading-snug">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Office/Team Photo with Badges */}
                <div className="lg:col-span-5 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5">
                        <Image
                            src="/tge-consultant-aprt.png"
                            alt="The Great Empire Group Office in Prayagraj"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                        {/* Overlaid Floating Experience Card */}
                        <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl space-y-1">
                            <div className="text-2xl font-bold text-slate-900">
                                5+ Years of Excellence
                            </div>
                            <p className="text-xs text-slate-600 font-semibold">
                                Serving 1,500+ Satisfied Families Across Prayagraj Localities
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================
          BLOCK 2: LOCALITIES WE COVER (INTERACTIVE CHIPS + MAP)
      ========================================================= */}
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        Localities We Cover in Prayagraj
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base font-medium">
                        Explore verified residential and commercial inventories in prime growth hubs.
                    </p>
                </div>

                {/* Interactive Locality Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                    {localities.map((loc, index) => {
                        const isActive = selectedLocality === index;
                        return (
                            <button
                                key={loc.slug}
                                onClick={() => setSelectedLocality(index)}
                                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/25 scale-105"
                                    : "bg-white text-slate-700 hover:bg-amber-500/10 border border-slate-200"
                                    }`}
                            >
                                <MapPin className={`w-4 h-4 ${isActive ? "text-white" : "text-amber-600"}`} />
                                <span>{loc.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Selected Locality Details Card & Embedded Map */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl items-center">
                    {/* Locality Data */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-2">
                            <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                                Featured Locality Profile
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                                Property in {localities[selectedLocality].name}, Prayagraj
                            </h3>
                        </div>

                        <div className="space-y-4 text-sm font-medium">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                                <span className="text-xs text-slate-500 font-bold uppercase">
                                    Available Inventory Types
                                </span>
                                <p className="text-slate-800 font-bold">
                                    {localities[selectedLocality].propertyType}
                                </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1">
                                <span className="text-xs text-amber-800 font-bold uppercase">
                                    Average Price Range
                                </span>
                                <p className="text-amber-900 font-black text-lg">
                                    {localities[selectedLocality].priceRange}
                                </p>
                            </div>
                        </div>

                        <Link
                            href={`/locality/property-in-${localities[selectedLocality].slug}-prayagraj`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm transition-colors shadow-md group"
                        >
                            <span>Explore {localities[selectedLocality].name} Properties</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Embedded Map */}
                    <div className="lg:col-span-7 h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative bg-slate-100">
                        <iframe
                            src={localities[selectedLocality].mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of ${localities[selectedLocality].name}, Prayagraj`}
                            className="w-full h-full grayscale-[20%] contrast-[105%]"
                        />
                    </div>
                </div>
            </div>

            {/* =========================================================
          BLOCK 3: OUR SIMPLE 4-STEP PROCESS
      ========================================================= */}
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-xs font-black uppercase text-amber-700 tracking-widest">
                        Seamless Journey
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Our Simple 4-Step Process
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base font-medium">
                        How we guide you safely from initial search to physical property possession.
                    </p>
                </div>

                {/* 4-Step Horizontal Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {steps.map((step, idx) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={step.num}
                                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md relative flex flex-col justify-between hover:border-amber-500/40 transition-all group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <span className="text-3xl font-black text-slate-200 group-hover:text-amber-500/30 transition-colors">
                                            {step.num}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                                        {step.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>

                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full border border-slate-200 text-amber-600">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* =========================================================
          BLOCK 4: CLIENT TESTIMONIALS
      ========================================================= */}
            <div className="max-w-7xl mx-auto space-y-10 pt-6">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base font-medium">
                        Real experiences from homebuyers, plot owners, and investors across Prayagraj.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col justify-between space-y-6"
                        >
                            <div className="space-y-4">
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 text-amber-500">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                                    ))}
                                </div>

                                <p className="text-slate-700 text-sm leading-relaxed font-medium italic">
                                    "{t.quote}"
                                </p>
                            </div>

                            {/* User Bio */}
                            <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                        {t.name}
                                    </h3>
                                    <p className="text-[11px] text-slate-500 font-semibold">
                                        {t.role} • <span className="text-amber-700">{t.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}