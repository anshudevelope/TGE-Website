"use client";

import React from "react";
import Image from "next/image";

interface Step {
    number: string;
    title: string;
    description: string;
}

interface Testimonial {
    id: string;
    quote: string;
    name: string;
    locality: string;
    propertyType: string;
}

const STEPS: Step[] = [
    {
        number: "01",
        title: "Share Details",
        description: "Tell us about your property, location, size and expected price.",
    },
    {
        number: "02",
        title: "Get a Valuation",
        description: "We review the details and suggest a realistic market price range.",
    },
    {
        number: "03",
        title: "Listing & Promotion",
        description: "Your property goes live, with buyer enquiries handled by our team.",
    },
    {
        number: "04",
        title: "Visits & Negotiation",
        description: "We arrange site visits and help finalise terms without stress.",
    },
    {
        number: "05",
        title: "Documentation & Registry",
        description: "We support you through the paperwork until the sale is complete.",
    },
];

const BENEFITS = [
    "Local knowledge of Prayagraj prices and buyer demand",
    "Honest pricing advice, not inflated promises",
    "Serious, screened buyers only",
    "You stay in control of price and final decision",
    "Clear communication and transparent brokerage terms",
    "Full end-to-end support until the registry is done",
];

const TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        quote:
            "Sold our plot in Naini within 3 weeks. What impressed me most was that they only brought genuine buyers rather than wasting time with casual callers.",
        name: "Suresh Chandra Srivastava",
        locality: "Naini, Prayagraj",
        propertyType: "Residential Plot Owner",
    },
    {
        id: "2",
        quote:
            "Pricing advice was completely realistic. They guided us through the entire registry process at Civil Lines sub-registrar office seamlessly.",
        name: "Anand Tripathii",
        locality: "Civil Lines, Prayagraj",
        propertyType: "2BHK Flat Owner",
    },
    {
        id: "3",
        quote:
            "Transparent fee structure and clear updates on WhatsApp. Best property advisors in Prayagraj for hassle-free sales.",
        name: "Dr. R. K. Verma",
        locality: "Jhalwa, Prayagraj",
        propertyType: "Commercial Space Owner",
    },
];

export default function SellPropertyProcess() {
    return (
        <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">

                {/* PART 1: 5-STEP PROCESS TIMELINE */}
                <div className="space-y-12">
                    {/* Header */}
                    <div className="max-w-3xl space-y-3">
                        <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                            Step-By-Step Workflow
                        </p>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                            How to Sell Your Property in Prayagraj with Us
                        </h2>
                        <p className="text-base text-slate-600 font-normal leading-relaxed">
                            Our structured process ensures complete clarity, speed, and security from initial listing to official registration.
                        </p>
                    </div>

                    {/* Timeline Grid (Vertical on Mobile, Horizontal Steps on Desktop) */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                        {STEPS.map((step, index) => (
                            <div
                                key={step.number}
                                className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-all duration-300 group"
                            >
                                {/* Step Number Accent */}
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-black text-amber-500 group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </span>
                                    {index < STEPS.length - 1 && (
                                        <span className="hidden md:block text-slate-300 font-extrabold text-lg">
                                            →
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PART 2: WHY CHOOSE US (LEFT-RIGHT SPLIT) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* Left Column: Benefits Checklist (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                                Why Choose Us
                            </p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                                Why Sell Your Property with The Great Empire Group
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            We eliminate guesswork and unverified leads so you can complete your property sale at optimum value with total peace of mind.
                        </p>

                        <ul className="space-y-3.5 pt-2">
                            {BENEFITS.map((benefit, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800"
                                >
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5 border border-emerald-500/30">
                                        ✓
                                    </span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Office/Team Visual Showcase (5 cols) */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
                            <div className="relative h-[340px] sm:h-[400px] w-full bg-slate-900">
                                <Image
                                    src="/sell-property-process.png"
                                    alt="The Great Empire Group Advisory Team Prayagraj"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white space-y-1">
                                    <p className="text-xs font-semibold text-amber-400">
                                        Local Real Estate Experts
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        The Great Empire Group Office
                                    </p>
                                    <p className="text-[11px] text-slate-300">
                                        Serving property sellers across Prayagraj, UP.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* PART 3: TESTIMONIALS */}
                <div className="space-y-8 pt-6 border-t border-slate-200/80">
                    <div className="text-center space-y-2 max-w-2xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                            Trusted by Property Owners Across Prayagraj
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                            Read what local sellers say about our transparent advisory and valuation services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center gap-1 text-amber-500 text-sm">
                                        {"★".repeat(5)}
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="pt-2 border-t border-slate-100">
                                    <p className="text-sm font-bold text-slate-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-amber-600 font-medium">
                                        {testimonial.locality} • {testimonial.propertyType}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}