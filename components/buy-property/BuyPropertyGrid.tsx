"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PropertyCategory {
    title: string;
    slug: string;
    icon: string;
    description: string;
}

interface FeaturedProperty {
    id: string;
    title: string;
    locality: string;
    price: string;
    propertyType: string;
    specs: string;
    imageSrc: string;
    badge?: string;
    slug: string;
}

const CATEGORIES: PropertyCategory[] = [
    {
        title: "Plots for Sale in Prayagraj",
        slug: "plots-for-sale-in-prayagraj",
        icon: "📐",
        description:
            "Residential plots in developing and established localities. Check approvals, road access and the registry before you buy.",
    },
    {
        title: "Flats & Apartments",
        slug: "flats-apartments-for-sale-in-prayagraj",
        icon: "🏢",
        description:
            "1, 2 and 3 BHK flats in ready-to-move and under-construction projects across prime locations.",
    },
    {
        title: "Independent Houses & Villas",
        slug: "independent-houses-villas-in-prayagraj",
        icon: "🏡",
        description:
            "Spacious individual homes for families who want privacy, independent land rights, and extra space.",
    },
    {
        title: "Commercial Property",
        slug: "commercial-property-in-prayagraj",
        icon: "🏪",
        description:
            "Shops, showrooms and office spaces located in high-footfall commercial hubs.",
    },
    {
        title: "Agricultural & Farm Land",
        slug: "agricultural-farm-land-in-prayagraj",
        icon: "🌾",
        description:
            "Fertile land options suitable for active farming, farmhouse development, and long-term land investment.",
    },
    {
        title: "Investment Properties",
        slug: "investment-properties-in-prayagraj",
        icon: "📈",
        description:
            "Handpicked properties selected specifically for high capital appreciation and strong rental yields.",
    },
];

const FEATURED_PROPERTIES: FeaturedProperty[] = [
    {
        id: "1",
        title: "200 Sq. Yd. Residential Plot in Jhalwa",
        locality: "Jhalwa, Prayagraj",
        price: "₹38.5 Lakhs",
        propertyType: "Plot / Land",
        specs: "200 Sq. Yd. · 30 ft Road Frontage · Registry Ready",
        imageSrc:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        badge: "Verified Listing",
        slug: "200-sq-yd-residential-plot-jhalwa-prayagraj",
    },
    {
        id: "2",
        title: "3 BHK Modern Apartment in Civil Lines",
        locality: "Civil Lines, Prayagraj",
        price: "₹75.0 Lakhs",
        propertyType: "Flat / Apartment",
        specs: "3 BHK · 1,650 Sq. Ft. · Ready to Move",
        imageSrc:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        badge: "Hot Deal",
        slug: "3-bhk-modern-apartment-civil-lines-prayagraj",
    },
    {
        id: "3",
        title: "Independent 4 BHK House in Naini",
        locality: "Naini, Prayagraj",
        price: "₹62.0 Lakhs",
        propertyType: "Independent House",
        specs: "4 BHK · 2,200 Sq. Ft. · Double Storey",
        imageSrc:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        badge: "Prime Location",
        slug: "independent-4-bhk-house-naini-prayagraj",
    },
];

export default function BuyPropertyGrid() {
    return (
        <section className="py-14 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                        Properties for Sale in Prayagraj
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                        Browse residential and commercial properties for sale in Prayagraj
                        across budgets and locations.
                    </p>
                </div>

                {/* 3x2 Grid of Property Category Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.slug}
                            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            <div className="pt-5 mt-4 border-t border-slate-100">
                                <Link
                                    href={`/${category.slug}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                                >
                                    <span>View Properties</span>
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

                {/* Featured Listings Highlight Section */}
                <div className="pt-8 border-t border-slate-200/80 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                                Handpicked Options
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                                Featured Listings in Prayagraj
                            </h3>
                        </div>
                        <Link
                            href="/properties"
                            className="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1 transition-colors"
                        >
                            <span>Explore All Listings</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* 3 Featured Property Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {FEATURED_PROPERTIES.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                            >
                                {/* Image Container with Badge */}
                                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {item.badge && (
                                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-bold tracking-wider uppercase rounded-md">
                                            {item.badge}
                                        </span>
                                    )}
                                    <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold rounded-md shadow">
                                        {item.price}
                                    </span>
                                </div>

                                {/* Card Content */}
                                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                                    <div className="space-y-1.5">
                                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                                            {item.propertyType}
                                        </span>
                                        <h4 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-amber-600 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-slate-500 flex items-center gap-1">
                                            <span>📍</span>
                                            <span>{item.locality}</span>
                                        </p>
                                    </div>

                                    <p className="text-xs text-slate-600 font-medium bg-slate-50 p-2 rounded-lg border border-slate-100">
                                        {item.specs}
                                    </p>

                                    <div className="pt-2">
                                        <Link
                                            href={`/properties/${item.slug}`}
                                            className="w-full py-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                                        >
                                            <span>View Details</span>
                                            <svg
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}