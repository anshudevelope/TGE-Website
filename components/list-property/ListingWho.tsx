"use client";

import React from "react";
import Link from "next/link";

interface Locality {
    name: string;
    slug: string;
}

const LOCALITIES: Locality[] = [
    { name: "Civil Lines", slug: "civil-lines" },
    { name: "Naini", slug: "naini" },
    { name: "Jhunsi", slug: "jhunsi" },
    { name: "Phaphamau", slug: "phaphamau" },
    { name: "Jhalwa", slug: "jhalwa" },
    { name: "Teliarganj", slug: "teliarganj" },
    { name: "Lukerganj", slug: "lukerganj" },
    { name: "Allenganj", slug: "allenganj" },
    { name: "Bamrauli", slug: "bamrauli" },
    { name: "Subedarganj", slug: "subedarganj" },
    { name: "Kydganj", slug: "kydganj" },
    { name: "Shantipuram", slug: "shantipuram" },
];

const PROPERTY_TYPES = [
    "Residential plots and land",
    "Flats and apartments",
    "Independent houses and villas",
    "Shops, showrooms and offices",
    "Agricultural and farm land",
];

const QUICK_TIPS = [
    { icon: "📷", text: "Add clear photos" },
    { icon: "📍", text: "Mention exact locality & size" },
    { icon: "📑", text: "Keep documents ready (Registry/Title)" },
    { icon: "🏷️", text: "Price competitively" },
];

export default function ListingWho() {
    return (
        <section className="py-12 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 2-Column Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Heading, Intro, and Property Types Checklist */}
                    <div className="lg:col-span-7 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            Sell Any Type of Property in Prayagraj
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Whether you own a residential plot in Naini, a flat in Civil Lines,
                            or a commercial shop in Lukerganj, you can list it with us for free.
                            Our platform helps property owners in Prayagraj reach serious buyers
                            without paying listing fees.
                        </p>

                        {/* Checklist */}
                        <div className="pt-2">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                                What You Can List
                            </h3>
                            <ul className="space-y-2.5">
                                {PROPERTY_TYPES.map((type, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
                                            ✓
                                        </span>
                                        <span>{type}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Localities & SEO Links */}
                    <div className="lg:col-span-5 bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                Popular Localities in Prayagraj
                            </h3>
                            <p className="text-xs text-slate-500 mb-4">
                                Explore property listings across prime locations in the city.
                            </p>
                        </div>

                        {/* Locality Chips Wrap */}
                        <div className="flex flex-wrap gap-2">
                            {LOCALITIES.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={`/property-for-sale-in-${loc.slug}-prayagraj`}
                                    title={`Property for Sale in ${loc.name}, Prayagraj`}
                                    className="px-3.5 py-1.5 bg-white hover:bg-amber-500 hover:text-white border border-slate-200 hover:border-amber-500 text-slate-700 text-xs font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    {loc.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Tips for Faster Sales Box */}
                <div className="mt-10 p-5 sm:p-6 bg-amber-50/60 rounded-2xl border border-amber-200/80">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-amber-600 text-lg">💡</span>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                            Tips for Faster Sales
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {QUICK_TIPS.map((tip, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-amber-100 shadow-2xs"
                            >
                                <span className="text-base">{tip.icon}</span>
                                <span className="text-xs font-medium text-slate-700">
                                    {tip.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}