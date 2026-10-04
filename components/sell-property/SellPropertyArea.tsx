"use client";

import React from "react";
import Link from "next/link";

const PROPERTY_TYPES = [
    "Residential plots and land",
    "Flats and apartments",
    "Independent houses and villas",
    "Shops, showrooms and commercial buildings",
    "Office spaces",
    "Agricultural and farm land",
];

const LOCALITIES = [
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

export default function SellPropertyArea() {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Section Header */}
                <div className="max-w-3xl space-y-3">
                    <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                        Coverage & Scope
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                        Sell Any Type of Property in Prayagraj
                    </h2>
                    <p className="text-base text-slate-600 font-normal leading-relaxed">
                        Whether it is prime commercial space or residential land, our local networks cover all primary property categories and prime corridors across Prayagraj.
                    </p>
                </div>

                {/* 2-Column Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Property Types Checklist (5 cols) */}
                    <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                            Property Types Handled
                        </h3>
                        <ul className="space-y-4">
                            {PROPERTY_TYPES.map((type, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold text-xs mt-0.5">
                                        ✓
                                    </span>
                                    <span>{type}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Localities Chips (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                Localities Where We Help Owners Sell
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Select your area below to view local market insights or submit a localized valuation request.
                            </p>
                        </div>

                        {/* Locality Chips Container */}
                        <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {LOCALITIES.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    href={`/sell-property-in-${loc.slug}-prayagraj`}
                                    title={`Sell Property in ${loc.name}, Prayagraj`}
                                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-500 text-slate-700 hover:text-slate-950 border border-slate-200/80 hover:border-amber-500 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                                >
                                    <span className="text-slate-400 group-hover:text-slate-950 transition-colors">📍</span>
                                    <span>{loc.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Helper Note */}
                        <p className="text-xs text-slate-500 italic pt-2">
                            * Property located outside these primary hubs? We also cover extended areas along major Prayagraj highways and outer corridors.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}