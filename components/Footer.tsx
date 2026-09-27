"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Building2,
    PhoneCall,
    Mail,
    MapPin,
    ArrowRight,
    ShieldCheck,
    PlusCircle,
    ExternalLink,
} from "lucide-react";

const prayagrajLocalities = [
    { name: "Civil Lines", href: "/locations/civil-lines" },
    { name: "Jhalwa (Near IIIT)", href: "/locations/jhalwa" },
    { name: "Naini & Industrial Area", href: "/locations/naini" },
    { name: "Katra & Tagoretown", href: "/locations/katra" },
    { name: "Jhusi & Devghat", href: "/locations/jhusi" },
    { name: "Kalindipuram & Rajrooppur", href: "/locations/kalindipuram" },
];

const quickLinks = [
    { name: "Buy Property in Prayagraj", href: "/buy" },
    { name: "Sell / Post Property Free", href: "/list-property" },
    { name: "Real Estate Consultancy", href: "/consultancy" },
    { name: "About The Empire Group", href: "/about" },
    { name: "Contact & Location", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#FAF8F5] pt-16 pb-8 border-t border-slate-200 text-slate-800 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-8">

                {/* Top Call-To-Action Banner Card */}
                <div className="relative mb-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-amber-500/30 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Decorative Gold Radial Mesh */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                    <div className="space-y-3 max-w-2xl relative z-10 text-center md:text-left">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase border border-amber-500/30">
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Prayagraj Real Estate Leaders
                        </span>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                            Looking to Buy, Sell, or Invest in Prayagraj?
                        </h3>
                        <p className="text-slate-300 text-sm sm:text-base">
                            Get direct market valuation, RERA legal verification, and verified client leads with 5+ years of trusted advisory.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full md:w-auto">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer"
                        >
                            <span>Get Free Consultation</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href="/list-property"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer"
                        >
                            <PlusCircle className="w-4 h-4" />
                            <span>Post Property Free</span>
                        </Link>
                    </div>
                </div>

                {/* Main Footer Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">

                    {/* Column 1: Brand Info (Col span 4) */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3 cursor-pointer">
                            <div className="relative w-11 h-11 rounded-xl bg-slate-900 p-1 flex items-center justify-center shadow-md overflow-hidden">
                                <Image
                                    src="/the-great-empire-logo.png"
                                    alt="The Great Empire Group Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-extrabold tracking-wide text-slate-900 uppercase">
                                    The Great Empire<span className="text-amber-600"> Group</span>
                                </span>
                                <span className="text-[10px] text-slate-500 tracking-widest -mt-1 font-mono uppercase font-bold">
                                    Prayagraj Real Estate
                                </span>
                            </div>
                        </Link>

                        <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                            An independent real estate consultant & property service provider backed by dynamic developers & investors across Uttar Pradesh and India. Providing end-to-end legal verification, plots, residential, and commercial property solutions in Prayagraj.
                        </p>

                        <div className="pt-2 space-y-2.5">
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-3 text-xs font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                    <PhoneCall className="w-4 h-4 text-amber-600 group-hover:text-white" />
                                </div>
                                <span>+91 98765 43210 / +91 91234 56789</span>
                            </a>

                            <a
                                href="mailto:info@thegreatempiregroup.com"
                                className="flex items-center gap-3 text-xs font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                    <Mail className="w-4 h-4 text-amber-600 group-hover:text-white" />
                                </div>
                                <span>info@thegreatempiregroup.com</span>
                            </a>

                            <div className="flex items-start gap-3 text-xs font-semibold text-slate-700">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-amber-600" />
                                </div>
                                <span>Civil Lines, Prayagraj (Allahabad), Uttar Pradesh - 211001, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Col span 3) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-amber-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer font-medium"
                                    >
                                        <ArrowRight className="w-3 h-3 text-amber-600" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Prayagraj Localities (Col span 3) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                            Prayagraj Localities
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            {prayagrajLocalities.map((loc, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={loc.href}
                                        className="text-slate-600 hover:text-amber-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer font-medium"
                                    >
                                        <MapPin className="w-3 h-3 text-amber-600" />
                                        <span>{loc.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: RERA & Legal (Col span 2) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                            Legal & Trust
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
                            <li>RERA Verified Plots</li>
                            <li>UP Housing Approved</li>
                            <li>100% Legal Registry</li>
                            <li>Free Property Valuation</li>
                        </ul>

                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                            >
                                <span>Request Legal Audit</span>
                                <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
                    <p>© {new Date().getFullYear()} The Great Empire Group. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors cursor-pointer">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors cursor-pointer">
                            Terms of Service
                        </Link>
                        <Link href="/sitemap.xml" className="hover:text-slate-900 transition-colors cursor-pointer">
                            Sitemap
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}