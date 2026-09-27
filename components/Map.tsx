"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin,
    Navigation,
    PhoneCall,
    Mail,
    ShieldCheck,
    ExternalLink,
    ArrowRight,
} from "lucide-react";

// Key Prayagraj investment hubs and office landmarks
// Updated Prayagraj Map Targets - Featuring Full City View
const prayagrajHubs = [
    {
        name: "Prayagraj (Full View)",
        tagline: "Commercial & Residential Investment Opportunities",
        coords: "25.4358, 81.8463",
        mapQuery: "Prayagraj,+Uttar+Pradesh",
    },
    {
        name: "Civil Lines",
        tagline: "Commercial Hub & Premium Residential",
        coords: "25.4524, 81.8349",
        mapQuery: "Civil+Lines+Prayagraj",
    },
    {
        name: "Jhalwa (Near IIIT)",
        tagline: "Educational & Fast Growth Corridor",
        coords: "25.4320, 81.7712",
        mapQuery: "Jhalwa+Prayagraj",
    },
    {
        name: "Naini Industrial Area",
        tagline: "Industrial & Emerging Housing Plots",
        coords: "25.3853, 81.8617",
        mapQuery: "Naini+Prayagraj",
    },
    {
        name: "Jhusi & Devghat",
        tagline: "High-ROI Highway & River-side Plots",
        coords: "25.4312, 81.9056",
        mapQuery: "Jhusi+Prayagraj",
    },
    {
        name: "Katra & Tagoretown",
        tagline: "Central Residential & Market Area",
        coords: "25.4611, 81.8512",
        mapQuery: "Katra+Prayagraj",
    },
    {
        name: "Shantipuram & Phaphamau",
        tagline: "Northern Expansion & Housing Colonies",
        coords: "25.5210, 81.8540",
        mapQuery: "Phaphamau+Prayagraj",
    },
];
export default function Map() {
    const [activeQuery, setActiveQuery] = useState("Civil+Lines+Prayagraj");
    const [selectedHubName, setSelectedHubName] = useState("Civil Lines");

    const handleSelectHub = (query: string, name: string) => {
        setActiveQuery(query);
        setSelectedHubName(name);
    };

    return (
        <section className="relative bg-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wide"
                    >
                        <MapPin className="w-4 h-4 text-amber-600" />
                        <span>PRAYAGRAJ PRIME LOCATIONS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900"
                    >
                        Explore Prayagraj&apos;s Top <span className="text-amber-600">Real Estate Hubs</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 text-base sm:text-lg leading-relaxed"
                    >
                        Discover verified plots, commercial spaces, and residential developments across Prayagraj. Select a location below to view details on the interactive map.
                    </motion.p>
                </div>

                {/* Main Interactive Map & Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Interactive Google Map Embed (Span 8) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8 rounded-3xl overflow-hidden border border-amber-900/10 shadow-2xl shadow-slate-200/80 bg-white min-h-[420px] lg:min-h-[500px] flex flex-col relative"
                    >
                        {/* Top Map Location Indicator Bar */}
                        <div className="bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between gap-4 border-b border-amber-500/30">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300">
                                <Navigation className="w-4 h-4 text-amber-400 animate-pulse" />
                                <span>Showing Map Location: <strong className="text-white font-extrabold">{selectedHubName}, Prayagraj</strong></span>
                            </div>

                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${activeQuery}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-white transition-colors font-medium cursor-pointer"
                            >
                                <span>Open in Google Maps</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        {/* Google Map iframe */}
                        <div className="w-full flex-1 min-h-[380px] relative">
                            <iframe
                                title="Prayagraj Property Locations Map"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "380px" }}
                                loading="lazy"
                                allowFullScreen
                                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY_OR_EMBED&q=${activeQuery}`}
                                // Fallback standard iframe embed query without requiring API key
                                srcDoc={`<style>html,body{margin:0;height:100%}</style><iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://maps.google.com/maps?q=${activeQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen></iframe>`}
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Key Localities Selector & Office Info (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-4 flex flex-col justify-between space-y-6"
                    >
                        {/* Locality Selector Panel */}
                        <div className="bg-white rounded-3xl border border-amber-900/10 p-6 shadow-xl shadow-slate-200/60 space-y-4">
                            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-amber-600" />
                                <span>Select Target Zone</span>
                            </h3>

                            <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                                {prayagrajHubs.map((hub, idx) => {
                                    const isSelected = selectedHubName === hub.name;

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleSelectHub(hub.mapQuery, hub.name)}
                                            className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${isSelected
                                                ? "bg-slate-900 text-white border-amber-500/40 shadow-md"
                                                : "bg-slate-50 hover:bg-amber-50/50 border-slate-200 text-slate-800"
                                                }`}
                                        >
                                            <div className="space-y-0.5">
                                                <div
                                                    className={`text-sm font-bold ${isSelected ? "text-amber-300" : "text-slate-900"
                                                        }`}
                                                >
                                                    {hub.name}
                                                </div>
                                                <div
                                                    className={`text-xs ${isSelected ? "text-slate-300" : "text-slate-500"
                                                        }`}
                                                >
                                                    {hub.tagline}
                                                </div>
                                            </div>

                                            <div
                                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isSelected
                                                    ? "bg-amber-500 text-slate-950"
                                                    : "bg-slate-200 text-slate-600"
                                                    }`}
                                            >
                                                <Navigation className="w-3.5 h-3.5" />
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Direct Head Office Contact Card */}
                        <div className="bg-slate-900 rounded-3xl p-6 border border-amber-500/30 text-white shadow-xl space-y-4">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Headquarters</span>
                            </div>

                            <div className="space-y-1">
                                <h4 className="text-xl font-extrabold text-white">
                                    The Great Empire Group
                                </h4>
                                <p className="text-slate-300 text-xs leading-relaxed">
                                    Civil Lines, Prayagraj (Allahabad), Uttar Pradesh - 211001, India
                                </p>
                            </div>

                            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs font-semibold">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    <PhoneCall className="w-4 h-4 text-amber-500 shrink-0" />
                                    <span>+91 98765 43210</span>
                                </a>
                                <a
                                    href="mailto:info@thegreatempiregroup.com"
                                    className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                                    <span>info@thegreatempiregroup.com</span>
                                </a>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
                                >
                                    <span>Book Office Visit / Contact</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}