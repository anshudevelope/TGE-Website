"use client";

import React from "react";
import Image from "next/image";

interface BenefitItem {
    id: number;
    text: string;
}

interface ProcessStep {
    stepNumber: string;
    title: string;
    description: string;
}

interface Testimonial {
    quote: string;
    name: string;
    locality: string;
    propertyType: string;
    rating: number;
}

const BENEFITS: BenefitItem[] = [
    { id: 1, text: "Verified listings with clear title checks" },
    { id: 2, text: "Honest pricing and market guidance, with no hidden charges" },
    { id: 3, text: "Free site visits at your convenience" },
    { id: 4, text: "Help with negotiation and paperwork" },
    { id: 5, text: "Support with registry, mutation and loan coordination" },
    { id: 6, text: "After-sales assistance" },
];

const PROCESS_STEPS: ProcessStep[] = [
    {
        stepNumber: "01",
        title: "Share your needs",
        description: "Tell us your budget, property type and preferred area.",
    },
    {
        stepNumber: "02",
        title: "Get shortlisted options",
        description: "We send you matching, verified properties.",
    },
    {
        stepNumber: "03",
        title: "Visit and verify",
        description: "We arrange site visits and check the documents.",
    },
    {
        stepNumber: "04",
        title: "Negotiate and finalise",
        description: "We help agree on a fair price and terms.",
    },
    {
        stepNumber: "05",
        title: "Register and move in",
        description: "We guide you through registry and handover.",
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        quote:
            "Buying a plot in Jhalwa was completely stress-free with The Great Empire Group. They verified all paper registry records beforehand and got us a great deal.",
        name: "Rajesh S. Tiwari",
        locality: "Jhalwa, Prayagraj",
        propertyType: "Plot Purchase",
        rating: 5,
    },
    {
        quote:
            "They guided us from shortlisting 3 BHK flats in Civil Lines to bank loan approval and final registry. Transparent pricing with zero hidden commission fees.",
        name: "Dr. Ananya Srivastava",
        locality: "Civil Lines, Prayagraj",
        propertyType: "3 BHK Apartment",
        rating: 5,
    },
    {
        quote:
            "As an NRI investing in Prayagraj real estate, their team handled site video tours and title check verification smoothly in Naini. Truly reliable advisory.",
        name: "Vikas Agarwal",
        locality: "Naini, Prayagraj",
        propertyType: "Commercial Land",
        rating: 5,
    },
];

export default function BuyPropertyWhy() {
    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* BLOCK 1: Left-Right Split (Benefits & Animated Logo / Media) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left Column: Headline & Benefits List */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                            🛡️ Trusted Real Estate Guidance
                        </div>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                            Why Buy Property in Prayagraj with <br className="hidden sm:inline" />
                            <span className="text-amber-600">The Great Empire Group</span>
                        </h2>

                        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                            We eliminate property purchase risks by providing end-to-end verified guidance, clear legal title checks, and honest market pricing for buyers in Prayagraj.
                        </p>

                        {/* Benefits Checklist */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                            {BENEFITS.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5">
                                        ✓
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Animated Logo & Office / Team Visual */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-700/60 text-center space-y-6 group overflow-hidden">

                            {/* Subtle background glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                            {/* Animated Website Logo Container */}
                            <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white p-2.5 shadow-xl border-2 border-amber-400/40 flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-1">

                                {/* Outer Pulsing Animation Ring */}
                                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 opacity-75 blur-sm animate-pulse group-hover:opacity-100 transition-opacity" />

                                {/* Logo Image */}
                                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
                                    <Image
                                        src="/logo-trans.png"
                                        alt="The Great Empire Group Logo"
                                        fill
                                        sizes="(max-width: 768px) 128px, 144px"
                                        className="object-contain p-1 transition-transform duration-500 hover:scale-110"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Tagline & Callout below logo */}
                            <div className="relative z-10 space-y-1.5">
                                <h3 className="text-lg font-bold text-white tracking-wide">
                                    The Great Empire Group
                                </h3>
                                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                                    Real Estate & Development Consulting
                                </p>
                                <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                                    Your trusted local partner in Prayagraj for verified land, home, and commercial investments.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


                {/* BLOCK 2: 5-Step Horizontal Timeline */}
                <div className="space-y-10 pt-6">
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                            Seamless Home Buying Experience
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                            Our Simple Process to Buy Property in Prayagraj
                        </h2>
                        <p className="text-sm text-slate-600 font-medium">
                            We make purchasing real estate transparent and straightforward through five simple steps.
                        </p>
                    </div>

                    {/* Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
                        {PROCESS_STEPS.map((step, idx) => (
                            <div
                                key={step.stepNumber}
                                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
                            >
                                {/* Step Badge */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            {step.stepNumber}
                                        </span>
                                        {idx < PROCESS_STEPS.length - 1 && (
                                            <span className="hidden lg:block text-slate-300 font-bold text-lg">
                                                →
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* BLOCK 3: Client Testimonials */}
                <div className="pt-6 space-y-8 border-t border-slate-200/80">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                            What Our Happy Buyers Say
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500">
                            Real feedback from clients who purchased their property through us in Prayagraj.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
                            >
                                <div className="space-y-3">
                                    {/* Star Rating */}
                                    <div className="flex text-amber-400 text-sm">
                                        {"★".repeat(t.rating)}
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">{t.name}</p>
                                        <p className="text-[11px] text-slate-500">{t.locality}</p>
                                    </div>
                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-semibold rounded-md">
                                        {t.propertyType}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}