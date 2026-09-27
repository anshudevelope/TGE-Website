"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Compass,
    Target,
    Sparkles,
    ShieldCheck,
    Users,
    TrendingUp,
    Building2,
    CheckCircle2,
    ArrowRight,
    Award,
} from "lucide-react";

const coreValues = [
    {
        icon: ShieldCheck,
        title: "100% Legal & Transparency",
        description:
            "Every land parcel, plot, and residential listing undergoes rigorous revenue department verification and clear title checks before market listing.",
    },
    {
        icon: Users,
        title: "Customer-Centric Approach",
        description:
            "We tailor real estate opportunities to every stratum of society, matching specific budget requirements and preferred location parameters.",
    },
    {
        icon: TrendingUp,
        title: "High Value & Return on Investment",
        description:
            "Our strategic presence across Prayagraj’s premier growth corridors ensures maximize long-term asset appreciation for investors.",
    },
    {
        icon: Building2,
        title: "End-to-End Real Estate Solutions",
        description:
            "From plot acquisition and legal registry management to resale and turnkey construction advisory—we handle the complete lifecycle.",
    },
];

export default function AboutDetails() {
    return (
        <section className="relative bg-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">

                {/* Section 1: Overview & Corporate Message Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left Text Block (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wide">
                            <Sparkles className="w-4 h-4 text-amber-600" />
                            <span>COMPANY OVERVIEW</span>
                        </div>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                            Expect the Finest in <br />
                            <span className="text-amber-600">Real Estate Consultancy & Growth</span>
                        </h2>

                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                            <strong>The Great Empire Group</strong> is an independent real estate consultancy and service provider backed by a committed customer base and a network of dynamic developers and investors across Uttar Pradesh and several parts of India.
                        </p>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Our primary business centers on facilitating the acquisition, development, and sale of residential, commercial, and utility properties. By closing the gap between property owners and prospective buyers, we empower clients to realize measurable value from their investments while upholding highest standards of professionalism and ethics.
                        </p>

                        <div className="pt-2 grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Verified Titles</h4>
                                    <p className="text-slate-500 text-xs">Complete Khasra & registry verification.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Channel Partner Network</h4>
                                    <p className="text-slate-500 text-xs">Strong associate tie-ups in UP.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual / Quote Card (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden space-y-6">
                            {/* Background Accent Gradient */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

                            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                                <Award className="w-6 h-6" />
                            </div>

                            <blockquote className="space-y-4">
                                <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug italic">
                                    &ldquo;The Great Empire Group is founded on a vision to usher in a better tomorrow by providing people with improved quality of life and living standards. We aim to serve every stratum of society.&rdquo;
                                </p>
                                <footer className="pt-2 border-t border-slate-800">
                                    <div className="font-bold text-amber-400 text-base">Corporate Management</div>
                                    <div className="text-xs text-slate-400 font-mono">The Great Empire Group, Prayagraj</div>
                                </footer>
                            </blockquote>
                        </div>
                    </motion.div>

                </div>

                {/* Section 2: Vision & Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4 hover:border-amber-500/40 transition-all"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
                            <Compass className="w-6 h-6" />
                        </div>

                        <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            To fulfill the growing aspirations of our customers and business associates by building a world-class real estate sales corporate that redefines professionalism, integrity, and lifestyle standards across Uttar Pradesh and India.
                        </p>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4 hover:border-amber-500/40 transition-all"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
                            <Target className="w-6 h-6" />
                        </div>

                        <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            Our mission is to establish a premier real estate sales organization with unyielding commitment to customer service, transparent legal processes, and creating sustainable business and employment opportunities within the growing Indian economy.
                        </p>
                    </motion.div>

                </div>

                {/* Section 3: Why Choose The Great Empire Group */}
                <div className="space-y-10">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold uppercase tracking-wider">
                            <span>CORE ADVANTAGES</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                            Why <span className="text-amber-600">The Great Empire Group</span>?
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base">
                            Discover why homebuyers and land investors trust us for real estate deals in Prayagraj.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreValues.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-amber-500/40 transition-all space-y-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Section 4: Contact CTA Banner */}
                <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-amber-500/30 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center lg:text-left max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Ready to Explore Properties with Us?
                        </h3>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Book a free site visit or connect with our real estate specialists to discuss residential plots, commercial land, or investment opportunities in Prayagraj.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 shrink-0 cursor-pointer"
                    >
                        <span>Schedule Free Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    );
}