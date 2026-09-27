"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

export default function HomeHero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-[92vh] w-full bg-[#FAF8F5] flex items-center pt-28 pb-12 px-4 sm:px-8 overflow-hidden">

            {/* Outer Curved Container (Matches Reference Card Style) */}
            <div className="max-w-8xl mx-auto w-full relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center shadow-2xl shadow-slate-200/80 border border-amber-900/10">

                {/* Background Real Estate Image */}
                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
                    alt="Luxury Real Estate Property Prayagraj"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                />

                {/* Organic Curved Gradient Overlay (Left-Side Contrast for Text - Matching Reference) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent lg:w-[70%] z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent z-10 lg:hidden" />

                {/* Hero Content Area */}
                <div className="relative z-20 w-full max-w-2xl p-6 sm:p-12 lg:p-16 space-y-6">

                    {/* Trust Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 backdrop-blur-md text-xs font-semibold tracking-wide"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        <span>Prayagraj&apos;s Most Trusted Real Estate Group</span>
                    </motion.div>

                    {/* Main Headline (Styled Like Reference) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight font-sans"
                    >
                        Prime Properties. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">
                            Trusted Advice.
                        </span>
                    </motion.h1>

                    {/* Subheading Copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed"
                    >
                        We help buyers, sellers, and investors discover verified plots, luxury flats,
                        and commercial spaces in Civil Lines, Jhalwa, Naini & across Prayagraj.
                    </motion.p>

                    {/* Primary CTA Button -> Leads to /contact Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="pt-2"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group cursor-pointer"
                        >
                            <span>Get Free Consultation</span>
                            <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-slate-950 flex items-center justify-center transition-colors">
                                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-amber-400 transition-colors" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Floating Social Proof Card (Bottom Right - Matching Reference Design) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-4 sm:p-5 text-white max-w-[260px] sm:max-w-[280px] shadow-2xl"
                >
                    {/* Avatar Heap */}
                    <div className="flex items-center -space-x-2.5 mb-3">
                        <Image
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                            alt="Satisfied Buyer Prayagraj"
                            width={36}
                            height={36}
                            className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover"
                        />
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                            alt="Verified Client"
                            width={36}
                            height={36}
                            className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover"
                        />
                        <Image
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                            alt="Property Investor"
                            width={36}
                            height={36}
                            className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover"
                        />
                        <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center">
                            +
                        </div>
                    </div>

                    {/* Metric Stats */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <div className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
                            1,200+
                        </div>
                        <p className="text-xs text-slate-300 font-medium">
                            Happy property buyers & verified listings in Prayagraj.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}