"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Award, Users, Building, CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <section className="relative bg-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image Stack with Experience Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-amber-900/10 shadow-2xl shadow-slate-200/80 aspect-[4/3] sm:aspect-[16/11]">
                            <Image
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                                alt="The Great Empire Group Real Estate Advisory Prayagraj"
                                fill
                                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating Floating Stat Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="absolute -bottom-6 -right-2 sm:right-6 bg-slate-900 text-white border border-amber-500/30 p-5 sm:p-6 rounded-2xl shadow-2xl max-w-[220px] sm:max-w-[260px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-sans leading-none">
                                        5+ Years
                                    </div>
                                    <div className="text-xs font-semibold text-slate-300 mt-1 uppercase font-mono tracking-wider">
                                        Proven Expertise
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Story & Introduction Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        {/* Tagline Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wide">
                            <ShieldCheck className="w-4 h-4 text-amber-600" />
                            <span>EXPERTISE OF MORE THAN 5 YEARS</span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                            Best Real Estate Advisor in{" "}
                            <span className="text-amber-600">Prayagraj</span>
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                            We aspire to become a leading player in all our activities, both in Prayagraj and in several other parts of Uttar Pradesh. The Great Empire Group has been in the forefront with our commitment to provide end-to-end solutions of property to our valued clients. We maintain close ties to the clients we serve and encourage our promoters to develop their talents and excel in their areas of expertise.
                        </p>

                        {/* Sub-heading & Paragraph 2 */}
                        <div className="pt-2 space-y-3 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <Building className="w-5 h-5 text-amber-600" />
                                Our Introduction
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                The Great Empire Group is an independent real estate consultant and service provider with a committed customer base. Backed by a group of dynamic real estate developers & investors from many cities across India, our primary business is the sales of residential, commercial, and utility properties with a unique business model focused on trusted development and value generation.
                            </p>
                        </div>

                        {/* Quick Feature Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                <span>End-to-End Property Legal Verification</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                <span>RERA & Registry Approved Plots</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                <span>Direct Investor & Buyer Connect</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                <span>Prayagraj Regional Market Leadership</span>
                            </div>
                        </div>

                        {/* CTA Button -> Redirects to Contact Page */}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-slate-900 text-amber-400 hover:bg-slate-800 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 group cursor-pointer"
                            >
                                <span>Connect With Our Consultants</span>
                                <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}