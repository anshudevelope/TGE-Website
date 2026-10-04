"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    PhoneCall,
    PlusCircle,
    ShieldCheck,
    Building2,
    KeyRound,
    ArrowRight,
    Clock,
    Sparkles,
} from "lucide-react";

export default function ListPropertyHero() {
    // Smooth scroll handler for the primary CTA button
    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const formElement = document.getElementById("list-property-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center bg-slate-950 overflow-hidden py-16 lg:py-24 px-4 sm:px-8 text-white">
            {/* 1. FULL-WIDTH BACKGROUND IMAGE WITH GRADIENT OVERLAY */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
                    alt="List property for free in Prayagraj"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center scale-105"
                />
                {/* Layered dark gradients to guarantee text legibility & premium look */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/55 to-slate-950/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/10" />
            </div>

            {/* HERO CONTENT CONTAINER */}
            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* LEFT COLUMN: TEXT CONTENT + CTAs + TRUST POINTS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 space-y-6 text-left mt-10 sm:mt-20"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>100% Free Property Listing</span>
                    </div>

                    {/* H1 Heading */}
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.15] text-white">
                        List Your Property for Free in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                            Prayagraj
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl">
                        Selling a plot, flat, house or shop? Post your property on{" "}
                        <span className="text-white font-bold">The Great Empire Group</span> in
                        just 2 minutes and connect with genuine buyers in Prayagraj and nearby areas.
                    </p>

                    {/* CTA Buttons Block */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        {/* Primary CTA: Scroll to Form */}
                        <a
                            href="#list-property-form"
                            onClick={scrollToForm}
                            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                        >
                            <PlusCircle className="w-5 h-5 text-slate-950 group-hover:rotate-90 transition-transform duration-300" />
                            <span>List My Property Free</span>
                            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Secondary Link: Talk to Team */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all group"
                        >
                            <PhoneCall className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                            <span>Talk to our team</span>
                        </Link>
                    </div>

                    {/* Trust Points (3 Ticks) */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>No listing fee</span>
                        </div>

                        <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Takes about 2 minutes</span>
                        </div>

                        <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Property Privacy</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: ILLUSTRATION / HOUSE & KEY GRAPHIC CARD */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="lg:col-span-5 relative flex justify-center"
                >
                    {/* Glassmorphic Visual Feature Card */}
                    <div className="relative w-full max-w-md bg-white/10 border border-white/20 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl shadow-slate-950 space-y-6">

                        {/* House & Key Graphic Badge */}
                        <div className="flex items-center justify-between">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                <KeyRound className="w-7 h-7" />
                            </div>

                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-amber-400 text-xs font-bold">
                                <Clock className="w-3.5 h-3.5" />
                                <span>Instant Buyer Exposure</span>
                            </div>
                        </div>

                        {/* Title & Micro Stats inside Graphic Card */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-extrabold text-white">
                                Get Verified Buyer Enquiries
                            </h3>
                            <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                Over 1,200+ buyers actively searching for plots, flats, and commercial properties in Prayagraj every month.
                            </p>
                        </div>

                        {/* Quick Listing Categories */}
                        <div className="grid grid-cols-2 gap-2.5 pt-2">
                            {[
                                { label: "Residential Plots", count: "High Demand" },
                                { label: "Flats & Apartments", count: "Fast Sell" },
                                { label: "Villas & Houses", count: "Verified Buyers" },
                                { label: "Commercial Shops", count: "Top Value" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-900/60 p-2.5 rounded-xl border border-white/10 flex items-center gap-2"
                                >
                                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                                    <div>
                                        <div className="text-[11px] font-bold text-white">
                                            {item.label}
                                        </div>
                                        <div className="text-[9px] font-bold text-amber-400/90 uppercase">
                                            {item.count}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Security Guarantee Note */}
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5 text-xs font-medium text-amber-200">
                            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                            <span>Zero Brokerage Interference Guarantee</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}