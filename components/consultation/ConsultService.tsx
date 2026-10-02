"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    LandPlot,
    Building2,
    Home,
    Store,
    TrendingUp,
    Scale,
    ArrowUpRight,
    ShieldCheck,
} from "lucide-react";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
    link: string;
    badge: string;
}

export default function ConsultServices() {
    const services: ServiceItem[] = [
        {
            id: "plots",
            title: "Residential Plots for Sale",
            description:
                "PDA-approved and RERA-compliant plots in growing localities across Prayagraj with clear legal titles.",
            image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
            icon: LandPlot,
            link: "/services/residential-plots-prayagraj",
            badge: "High ROI Plots",
        },
        {
            id: "flats",
            title: "Flats & Apartments",
            description:
                "1/2/3 BHK options across budgets with top amenities in prime Prayagraj residential neighborhoods.",
            image:
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
            icon: Building2,
            link: "/services/flats-apartments-prayagraj",
            badge: "Modern Living",
        },
        {
            id: "villas",
            title: "Independent Houses & Villas",
            description:
                "Ready-to-move and under-construction luxury homes designed for modern comfort and family lifestyle.",
            image:
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
            icon: Home,
            link: "/services/villas-houses-prayagraj",
            badge: "Premium Homes",
        },
        {
            id: "commercial",
            title: "Commercial Property",
            description:
                "Shops, showrooms and high-footfall office spaces for expanding business enterprises in Prayagraj.",
            image:
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            icon: Store,
            link: "/services/commercial-property-prayagraj",
            badge: "Prime Hubs",
        },
        {
            id: "investment",
            title: "Property Investment Advisory",
            description:
                "Location-wise growth analysis and ROI guidance to maximize capital appreciation on your real estate deals.",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            icon: TrendingUp,
            link: "/services/property-investment-advisory-prayagraj",
            badge: "Growth Insights",
        },
        {
            id: "legal",
            title: "Legal & Registry Assistance",
            description:
                "Title checks, documentation, mutation assistance, and stamp registration support for zero-risk transactions.",
            image:
                "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
            icon: Scale,
            link: "/services/legal-registry-assistance-prayagraj",
            badge: "100% Verified",
        },
    ];

    return (
        <section className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] py-16 px-4 sm:px-8 overflow-hidden text-slate-800">
            {/* Background Decorative Ambient Lighting */}
            <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-amber-400/15 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-300/20 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-12">
                {/* SECTION HEADER FOR SEO */}
                <div className="text-center space-y-4 max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xs">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>END-TO-END REAL ESTATE SOLUTIONS</span>
                    </div>

                    {/* H2 Heading */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                        Real Estate Services by Our Property Consultants in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                            Prayagraj
                        </span>
                    </h2>

                    {/* Intro Paragraph with Buy & Sell Intent */}
                    <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                        Whether you are looking to <strong>buy a dream property</strong>,{" "}
                        <strong>sell land for maximum profit</strong>, or build an investment
                        portfolio, our property consultants in Prayagraj offer end-to-end support
                        including site verification, valuation, and legal registry.
                    </p>
                </div>

                {/* 3x2 SERVICES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="group relative bg-white/60 rounded-3xl overflow-hidden border border-white/80 shadow-lg shadow-amber-900/5 backdrop-blur-xl flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Upper Image Container */}
                                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={service.image}
                                        alt={`${service.title} in Prayagraj`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                                    {/* Badge Top Left */}
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-amber-800 text-[10px] font-extrabold uppercase tracking-wider border border-white/90 shadow-xs">
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Card Content Body */}
                                <div className="p-6 pt-7 space-y-3 flex-1 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        {/* H3 Title for SEO */}
                                        <h3 className="text-xl font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* 2-line Description */}
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-2">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Enquire CTA Link with Internal Routing */}
                                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-700 hover:text-amber-800 uppercase tracking-wider transition-colors group/link"
                                            aria-label={`Enquire about ${service.title} in Prayagraj`}
                                        >
                                            <span>Enquire Now</span>
                                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-amber-600" />
                                        </Link>

                                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                                            Prayagraj
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}