"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Building2, MapPin } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative bg-[#FAF8F5] pt-28 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">

            {/* Outer Curved Container */}
            <div className="max-w-8xl mx-auto w-full relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-center shadow-2xl shadow-slate-200/80 border border-amber-900/10">

                {/* Background Real Estate & Advisory Visual */}
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
                    alt="About The Great Empire Group Real Estate Advisory"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                />

                {/* Organic Curved Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent lg:w-[70%] z-10" />
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
                        <span>EXPERTISE OF MORE THAN 5 YEARS</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight font-sans"
                    >
                        About <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">
                            The Great Empire Group
                        </span>
                    </motion.h1>

                    {/* Subheading Narrative */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed"
                    >
                        An independent real estate consultant and service provider bridging the gap between property and buyers across Uttar Pradesh and India.
                    </motion.p>

                    {/* Primary CTA Button -> Leads to /contact Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="pt-2 flex flex-wrap items-center gap-4"
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

                {/* Floating Stat Card (Bottom Right) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 bg-slate-900/85 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-4 sm:p-5 text-white max-w-[260px] sm:max-w-[280px] shadow-2xl"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                            <Award className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-black text-amber-400 font-sans leading-none">
                                5+ Years
                            </div>
                            <div className="text-[10px] text-slate-300 font-mono uppercase tracking-wider mt-1">
                                Real Estate Legacy
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        Backed by dynamic developers and investors in Prayagraj & UP.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}