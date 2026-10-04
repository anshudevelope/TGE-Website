"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

const LOCALITIES = [
    "Civil Lines",
    "Naini",
    "Jhunsi",
    "Phaphamau",
    "Jhalwa",
    "Teliarganj",
    "Lukerganj",
    "Allenganj",
    "Bamrauli",
    "Kydganj",
    "Other Area in Prayagraj",
];

export default function SellPropertyHero() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        propertyType: "Plot / Land",
        locality: "Civil Lines",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Format the WhatsApp Message
        const message = `*NEW PROPERTY VALUATION REQUEST* 🏠
-----------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Property Type:* ${formData.propertyType}
*Locality:* ${formData.locality}
-----------------------------------
_Sent via The Great Empire Group Website_`;

        // Target Phone Number: +91 7388 481515
        const whatsappUrl = `https://wa.me/917388481515?text=${encodeURIComponent(
            message
        )}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <section className="relative w-full bg-slate-950 py-12 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white min-h-[90vh] flex items-center">
                {/* Background Image with Dark Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transform transition-transform duration-1000"
                    style={{
                        backgroundImage: `url('/sell-property-hero.png')`,
                    }}
                />
                {/* Multi-layered Gradient Overlay for Rich Depth and High Contrast Text */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-900/10 z-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/10 z-0" />

                {/* Ambient Subtle Glow Accent Orbs */}
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

                <div className="max-w-8xl mx-auto relative z-10 px-0 sm:px-4 lg:px-8 mt-10 sm:mt-12 lg:mt-16 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                        {/* Left Column: Headline, Subheading, Intro & Trust Points */}
                        <div className="lg:col-span-7 space-y-6">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold backdrop-blur-md shadow-inner">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                Trusted Real Estate Advisor in Prayagraj
                            </div>

                            {/* H1 Headline */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                Sell Your Property in Prayagraj at the{" "}
                                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                                    Right Price
                                </span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                                Selling a plot, flat, house, shop or land? The Great Empire
                                Group connects you with genuine buyers and supports you from
                                pricing to registry.
                            </p>

                            {/* Intro Paragraph */}
                            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-2xl">
                                Selling property in Prayagraj can be slow and stressful when
                                you have to handle pricing, buyer enquiries, negotiations and
                                paperwork on your own. The Great Empire Group is a local
                                property consultant that helps owners sell faster, safely and
                                with full clarity at every step.
                            </p>

                            {/* Action CTAs */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a
                                    href="/list-property"
                                    className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
                                >
                                    List your property for free
                                </a>
                                <a
                                    href="https://wa.me/917388481515?text=Hi,%20I%20want%20to%20talk%20to%20your%20team%20regarding%20selling%20my%20property%20in%20Prayagraj."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800/90 text-white border border-slate-700/80 backdrop-blur-md text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Talk to Our Team
                                </a>
                            </div>

                            {/* Trust Points */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-3.5 gap-x-4 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                                    <span>Free property valuation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                                    <span>Screened buyers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                                    <span>Documentation support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">✓</span>
                                    <span>No pressure to commit</span>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Glassmorphism Valuation Form Card */}
                        <div id="valuation-form" className="lg:col-span-5">
                            <div className="relative group">
                                {/* Glow Backdrop Highlight */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-100 to-emerald-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                                <div className="relative bg-slate-900/60 backdrop-blur-xl text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                                            <span>Get Free Valuation</span>
                                        </h3>
                                        <p className="text-xs text-slate-300/80 mt-1.5 leading-relaxed">
                                            Fill in your details below and our Prayagraj property expert will contact you via WhatsApp.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Ramesh Chandra"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700/70 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-transparent backdrop-blur-md transition-all"
                                            />
                                        </div>

                                        {/* Phone Input */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="e.g. 9876543210"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700/70 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-transparent backdrop-blur-md transition-all"
                                            />
                                        </div>

                                        {/* Property Type Dropdown */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                                                Property Type
                                            </label>
                                            <select
                                                value={formData.propertyType}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        propertyType: e.target.value,
                                                    })
                                                }
                                                className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700/70 rounded-xl text-xs sm:text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-transparent backdrop-blur-md transition-all [&>option]:bg-slate-900 [&>option]:text-white"
                                            >
                                                <option value="Plot / Land">Plot / Land</option>
                                                <option value="Flat / Apartment">Flat / Apartment</option>
                                                <option value="Independent House / Villa">
                                                    Independent House / Villa
                                                </option>
                                                <option value="Commercial Space / Shop">
                                                    Commercial Space / Shop
                                                </option>
                                                <option value="Agricultural Land">Agricultural Land</option>
                                            </select>
                                        </div>

                                        {/* Locality Dropdown */}
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                                                Locality in Prayagraj
                                            </label>
                                            <select
                                                value={formData.locality}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, locality: e.target.value })
                                                }
                                                className="w-full px-3.5 py-2.5 bg-slate-950/60 border border-slate-700/70 rounded-xl text-xs sm:text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-transparent backdrop-blur-md transition-all [&>option]:bg-slate-900 [&>option]:text-white"
                                            >
                                                {LOCALITIES.map((loc) => (
                                                    <option key={loc} value={loc}>
                                                        {loc}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                                        >
                                            <span className="text-base">💬</span>
                                            <span>Get Free Valuation on WhatsApp</span>
                                        </button>

                                        <p className="text-[11px] text-slate-400 text-center pt-1">
                                            🔒 Your details are kept 100% private. No spam calls.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mobile Sticky Call / WhatsApp Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-lg border-t border-slate-800 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
                <a
                    href="tel:+917388481515"
                    className="flex-1 py-2.5 px-3 bg-slate-800/90 hover:bg-slate-700 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 border border-slate-700"
                >
                    📞 Call Team
                </a>
                <a
                    href="https://wa.me/917388481515?text=Hi,%20I%20want%20to%20sell%20my%20property%20in%20Prayagraj."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                    💬 WhatsApp
                </a>
            </div>
        </>
    );
}