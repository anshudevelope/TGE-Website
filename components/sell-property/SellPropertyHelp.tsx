"use client";

import React from "react";
import Link from "next/link";

interface ServiceCard {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const SERVICES: ServiceCard[] = [
    {
        id: "valuation",
        title: "Free Property Valuation",
        description:
            "A realistic price estimate based on your locality, size, road access and recent nearby deals.",
        icon: (
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: "promotion",
        title: "Property Listing & Promotion",
        description:
            "Your property is listed on our platform and promoted directly across our website, WhatsApp buyer broadcast network, local classified networks, and targeted real estate buyer circles in Prayagraj.",
        icon: (
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A2.5 2.5 0 013 11.2 2.5 2.5 0 015.436 8.717" />
            </svg>
        ),
    },
    {
        id: "screening",
        title: "Buyer Screening",
        description:
            "We filter casual enquiries so you speak only with serious, verified buyers and genuine investors.",
        icon: (
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: "negotiation",
        title: "Site Visits & Negotiation",
        description:
            "We coordinate on-site physical visits and help you negotiate a fair price without high-pressure tactics.",
        icon: (
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        id: "documentation",
        title: "Document Preparation",
        description:
            "Help organising your title deed, khata, tax receipts, mutation papers and other required legal records.",
        icon: (
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: "closing",
        title: "Registry & Closing Support",
        description:
            "Guidance through the sale deed preparation, stamp duty registration and secure payment settlement process.",
        icon: (
            <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
];

export default function SellPropertyHelp() {
    return (
        <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
            <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

                {/* Section Header */}
                <div className="max-w-3xl space-y-4 text-left">
                    <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                        End-To-End Advisory
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                        Our Property Selling Services in Prayagraj
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                        From the first call to the final registry, we manage the parts of
                        selling that take the most time and effort.
                    </p>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                        >
                            <div className="space-y-4">
                                {/* Icon Container with subtle background */}
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                {/* H3 Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                                    {service.title}
                                </h3>

                                {/* Short Description */}
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout Line */}
                <div className="pt-4 text-center sm:text-left">
                    <p className="text-sm sm:text-base text-slate-700 font-medium">
                        Just want to post your property?{" "}
                        <Link
                            href="/list-property"
                            className="font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4 transition-colors"
                        >
                            List it for free here
                        </Link>
                    </p>
                </div>

            </div>
        </section>
    );
}