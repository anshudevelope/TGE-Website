"use client";

import React from "react";
import Link from "next/link";

interface LocalityItem {
    name: string;
    slug: string;
    description: string;
    highlightTag?: string;
}

const LOCALITIES: LocalityItem[] = [
    {
        name: "Civil Lines",
        slug: "civil-lines",
        description:
            "Central, well-connected area with a premium feel, good for upscale living and commercial use.",
        highlightTag: "Premium",
    },
    {
        name: "Naini",
        slug: "naini",
        description:
            "Industrial and educational hub with growing residential demand and plot developments.",
        highlightTag: "High Growth",
    },
    {
        name: "Jhunsi",
        slug: "jhunsi",
        description:
            "Across the river, popular for plots, township projects, and affordable housing.",
        highlightTag: "Affordable",
    },
    {
        name: "Phaphamau",
        slug: "phaphamau",
        description:
            "Developing area with budget-friendly plots near the main national highway.",
    },
    {
        name: "Jhalwa",
        slug: "jhalwa",
        description:
            "Established residential locality close to IIIT and key city connectivity nodes.",
        highlightTag: "Educational Hub",
    },
    {
        name: "Teliarganj",
        slug: "teliarganj",
        description:
            "Mixed residential and commercial area, well connected to MNNIT and major roads.",
    },
    {
        name: "Lukerganj",
        slug: "lukerganj",
        description:
            "Commercial-residential locality with good market access and central proximity.",
    },
    {
        name: "Allenganj",
        slug: "allenganj",
        description:
            "Central locality close to top schools, healthcare facilities, and Allahabad University.",
    },
    {
        name: "Bamrauli",
        slug: "bamrauli",
        description:
            "Growing area near the Prayagraj airport side with fast-paced new developments.",
    },
];

export default function BuyPropertyLocation() {
    return (
        <section className="py-14 bg-white border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                {/* Section Header */}
                <div className="max-w-3xl space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                        📍 Locality Guide
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Best Areas to Buy Property in Prayagraj
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                        The right locality depends on your budget, commute and plans. Here
                        is a quick guide to popular areas across Prayagraj.
                    </p>
                </div>

                {/* Localities Grid / Mobile Horizontal Scroll */}
                <div className="relative">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                        {LOCALITIES.map((item) => (
                            <div
                                key={item.slug}
                                className="flex-none w-[260px] sm:w-[280px] md:w-auto snap-start bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                            {item.name}
                                        </h3>
                                        {item.highlightTag && (
                                            <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold rounded-md flex-shrink-0">
                                                {item.highlightTag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 mt-3 border-t border-slate-200/60">
                                    <Link
                                        href={`/property-for-sale-in-${item.slug}-prayagraj`}
                                        title={`Property for Sale in ${item.name}, Prayagraj`}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                                    >
                                        <span>View Properties</span>
                                        <svg
                                            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2.5"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Swipe Indicator Hint */}
                    <p className="text-[11px] text-slate-400 text-center mt-2 md:hidden">
                        ← Scroll horizontally to explore all localities →
                    </p>
                </div>

                {/* Embedded Google Map Section */}
                <div className="pt-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">
                                Explore Prayagraj Property Map
                            </h3>
                            <p className="text-xs text-slate-500">
                                Locate top residential zones and major roads across Prayagraj.
                            </p>
                        </div>
                        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60 self-start sm:self-auto">
                            Interactive Map
                        </span>
                    </div>

                    <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                        <iframe
                            title="Prayagraj Property Locations Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115283.47214777271!2d81.76106346212879!3d25.432311499596486!2m3!1f0!20f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856c6b13e05!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}