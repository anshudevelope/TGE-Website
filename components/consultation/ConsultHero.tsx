"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Building2,
    Award,
    Users,
    CheckCircle2,
    ArrowRight,
    PhoneCall,
    Sparkles,
    MapPin,
    TrendingUp,
    Clock,
} from "lucide-react";

export default function ConsultHero() {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

    return (
        <section className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] pt-12 pb-16 lg:pt-20 px-4 sm:px-16 overflow-hidden text-slate-800">
            {/* Background Decorative Ambient Glass Lighting */}
            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-amber-400/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-300/30 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-300/20 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-8xl mx-auto relative z-10 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: SEO Copy, Trust Highlights & CTAs (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        {/* SEO Location Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs tracking-wide backdrop-blur-md shadow-xs">
                            <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>PRAYAGRAJ&apos;S BEST REAL ESTATE ADVISORS</span>
                        </div>

                        {/* Main H1 Headline for SEO */}
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.15] font-sans">
                                Expert Property Consultant in{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                                    Prayagraj
                                </span>
                            </h1>

                            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-2xl">
                                Buy, sell or invest in verified residential and commercial properties with The Great Empire Group, with transparent deals and local expertise.
                            </p>
                        </div>

                        {/* Quick SEO Bullet Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {[
                                "Title & Registry Verification",
                                "High-ROI Land Acquisition",
                                "Fair Market Valuation",
                                "Distressed Property Sales",
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                                    </div>
                                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <a
                                href="#consultation-form"
                                className="py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2 group cursor-pointer"
                            >
                                <span>Book Free Consultation</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="tel:+917388481515"
                                className="py-4 px-6 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/90 text-slate-800 font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow-md backdrop-blur-md text-center flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <PhoneCall className="w-4 h-4 text-amber-600" />
                                <span>Call Advisor: +91 7388481515</span>
                            </a>
                        </div>

                        {/* Micro Rating Indicator */}
                        <div className="pt-2 flex items-center gap-4 text-slate-500 text-xs font-medium border-t border-slate-200/80">
                            <div className="flex items-center gap-1 text-amber-500 font-bold">
                                <span>★ 4.9/5 Rating</span>
                            </div>
                            <span className="text-slate-300">•</span>
                            <span>500+ Legal Verified Deals</span>
                            <span className="text-slate-300">•</span>
                            <span>PDA & Registry Compliant</span>
                        </div>

                    </motion.div>

                    {/* RIGHT COLUMN: Visual Showcase & Floating Glassmorphism Stats (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Main Visual Image Card with Frosted Border */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/40 backdrop-blur-md">
                            <div className="relative h-[400px] sm:h-[480px] w-full">
                                <Image
                                    src="/consultant-hero.png"
                                    alt="Real Estate Advisory & Property Consultation in Prayagraj"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                            </div>

                            {/* Bottom Image Overlay Banner */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-mono font-bold text-amber-700 uppercase">
                                            OFFICIAL CONSULTANTS
                                        </div>
                                        <div className="text-sm font-black text-slate-900">
                                            The Great Empire Group
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-2.5 py-1 rounded-full text-[11px] font-bold">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        <span>Verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FLOATING GLASS STAT BADGE 1: Success Rate (Top Right) */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -top-6 -right-2 sm:-right-6 bg-white/80 backdrop-blur-xl border border-white/90 p-4 rounded-2xl shadow-xl shadow-amber-900/10 flex items-center gap-3.5 z-20 max-w-[210px]"
                        >
                            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-lg font-black text-slate-900 leading-tight">
                                    ₹50 Cr+
                                </div>
                                <div className="text-[11px] text-slate-600 font-semibold leading-snug">
                                    Property Portfolio Managed
                                </div>
                            </div>
                        </motion.div>

                        {/* FLOATING GLASS STAT BADGE 2: Happy Clients (Middle Left) */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute top-1/2 -left-2 sm:-left-8 -translate-y-1/2 bg-white/80 backdrop-blur-xl border border-white/90 p-3.5 rounded-2xl shadow-xl shadow-amber-900/10 flex items-center gap-3 z-20 max-w-[200px]"
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shrink-0">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-base font-black text-slate-900 leading-tight">
                                    850+ Clients
                                </div>
                                <div className="text-[10px] text-slate-600 font-semibold leading-snug">
                                    Guided in Prayagraj
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}