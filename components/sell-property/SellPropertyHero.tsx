"use client";

import Link from "next/link";
import {
    CheckCircle2,
    MessageSquare,
    ArrowRight,
    PhoneCall,
    Users,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";

export default function SellPropertyHero() {
    return (
        <>
            <section className="relative w-full bg-slate-950 py-16 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-white min-h-[90vh] flex items-center">
                {/* Background Image with Dark Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transform transition-transform duration-1000"
                    style={{
                        backgroundImage: `url('/sell-property-hero.png')`,
                    }}
                />

                {/* Multi-layered Gradient Overlay for High Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/20 to-slate-950/10 z-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90 z-0" />

                {/* Subtle Ambient Glowing Accents */}
                <div className="absolute top-1/4 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
                <div className="absolute bottom-10 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

                <div className="max-w-8xl mx-auto relative z-10 w-full mt-10 sm:mt-12 lg:mt-6 px-0 sm:px-4 lg:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                        {/* Left Column: Headline, Subheading, Intro & CTAs */}
                        <div className="lg:col-span-7 space-y-6 sm:space-y-8">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-inner">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                <span>Trusted Real Estate Advisor in Prayagraj</span>
                            </div>

                            {/* Main H1 Headline */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                                Sell Your Property in Prayagraj at the{" "}
                                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                                    Right Price
                                </span>
                            </h1>

                            {/* Intro Paragraph */}
                            <p className="text-sm sm:text-xl leading-relaxed max-w-2xl">
                                Selling property in Prayagraj can be slow and stressful when
                                handling pricing, buyer enquiries, negotiations, and paperwork on your own. The Great Empire Group helps owners sell faster, safely, and with complete clarity.
                            </p>

                            {/* Action CTAs */}
                            <div className="flex flex-wrap items-center gap-3.5 pt-2">
                                <Link
                                    href="/list-property"
                                    className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                                >
                                    <span>List Your Property For Free</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://wa.me/917388481515?text=Hi,%20I%20want%20to%20talk%20to%20your%20team%20regarding%20selling%20my%20property%20in%20Prayagraj."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 backdrop-blur-md text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                                >
                                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                                    <span>Talk to Our Team</span>
                                </a>
                            </div>

                            {/* Trust Points */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 font-medium text-left">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Free Property Valuation</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Screened Genuine Buyers</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Documentation Support</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>No Pressure to Commit</span>
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Key Highlights & Trust Cards */}
                        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

                            {/* Card 1 */}
                            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Accurate Market Valuation</h4>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Get fair market pricing based on current land rates & recent deals across Prayagraj.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Verified Buyer Network</h4>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Connect directly with active buyers looking for properties in your locality.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-5 h-5 text-sky-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white">End-to-End Legal Assistance</h4>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Full assistance with agreement drafting, registry paperwork, and title checks.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Mobile Sticky Call / WhatsApp Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
                <a
                    href="tel:+917388481515"
                    className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
                >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Team</span>
                </a>
                <a
                    href="https://wa.me/917388481515?text=Hi,%20I%20want%20to%20sell%20my%20property%20in%20Prayagraj."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer"
                >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </>
    );
}