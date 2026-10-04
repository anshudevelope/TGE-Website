"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Home,
    TrendingUp,
    PlusCircle,
    MapPin,
    PhoneCall,
    Menu,
    X,
    Sparkles,
    Compass,
} from "lucide-react";
import { useLeadModal } from "@/app/context/LeadModalContext";

// Mega-menu items tailored for Prayagraj Real Estate
const servicesMenu = [
    {
        icon: Home,
        title: "Buy Property in Prayagraj",
        description: "Explore luxury apartments, plots, and villas in top localities.",
        href: "/buy-property",
    },
    {
        icon: TrendingUp,
        title: "Sell / Value Your Property",
        description: "Get accurate market valuation & connect directly with verified buyers.",
        href: "/sell-property",
    },
    {
        icon: Compass,
        title: "Real Estate Consultancy",
        description: "Expert advice on legal verification, plot land registry & ROI deals.",
        href: "/property-consultant",
    },
    {
        icon: PlusCircle,
        title: "Post Free Property Listing",
        description: "List your residential or commercial property in 2 easy steps.",
        href: "/list-property",
    },
];

const prayagrajLocations = [
    { name: "Civil Lines", tagline: "Premium Commercial & Residential Hub" },
    { name: "Jhalwa (Near IIIT)", tagline: "Rapidly Growing Residential Hub" },
    { name: "Naini & Industrial Belt", tagline: "Affordable Plots & Housing Schemes" },
    { name: "Katra & Tagoretown", tagline: "Prime Market & Residential Zones" },
    { name: "Devghat & Jhusi", tagline: "Emerging Smart Suburbs" },
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { openModal } = useLeadModal();

    // Auto Hide / Show Navbar on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling Down & Past initial threshold
                setIsVisible(false);
            } else {
                // Scrolling Up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -110 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 transition-all"
        >
            <div className="max-w-7xl mx-auto">
                {/* Main Floating Glassmorphic Container */}
                <nav className="relative flex items-center justify-between px-5 py-2.5 rounded-full border border-slate-200/80 bg-white/85 backdrop-blur-md shadow-lg shadow-slate-900/5">

                    {/* Brand Logo & Name */}
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-10 h-10 rounded-xl bg-slate-900 p-[1px] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden">
                            <Image
                                src="/the-great-empire-logo.jpeg"
                                alt="The Great Empire Group Logo"
                                width={38}
                                height={38}
                                className="object-contain p-0.5"
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base sm:text-lg font-medium tracking-wide text-slate-900 uppercase font-sans">
                                The Great Empire<span className="text-amber-600"> Group</span>
                            </span>
                            <span className="text-[10px] text-slate-500 tracking-widest -mt-1 font-mono uppercase font-semibold">
                                Prayagraj Real Estate
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Menu Links */}
                    <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 border border-slate-200 rounded-full px-3 py-1">

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("services")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                type="button"
                                className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all ${activeDropdown === "services"
                                    ? "bg-amber-500/10 text-amber-700"
                                    : "text-slate-700 hover:text-slate-950 hover:bg-white"
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-amber-600" : ""
                                        }`}
                                />
                            </button>

                            {/* Mega Dropdown Content */}
                            <AnimatePresence>
                                {activeDropdown === "services" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[700px] rounded-2xl bg-white border border-slate-200 p-4 shadow-2xl backdrop-blur-xl grid grid-cols-12 gap-4 overflow-hidden"
                                    >
                                        {/* Left Column: Menu Links */}
                                        <div className="col-span-7 space-y-1">
                                            <div className="text-[11px] font-bold text-amber-600 tracking-wider uppercase px-3 py-1 font-mono">
                                                Our Core Offerings
                                            </div>
                                            {servicesMenu.map((item, idx) => {
                                                const Icon = item.icon;
                                                return (
                                                    <Link
                                                        key={idx}
                                                        href={item.href}
                                                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                                            <Icon className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                                                                {item.title}
                                                            </div>
                                                            <p className="text-xs text-slate-500 line-clamp-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>

                                        {/* Right Column: Featured Banner Card */}
                                        <div className="col-span-5 relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 flex flex-col justify-end p-4 group">
                                            <Image
                                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                                                alt="Civil Lines Property Prayagraj"
                                                fill
                                                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                            <div className="relative z-10 space-y-1.5">
                                                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500 text-slate-950">
                                                    <Sparkles className="w-3 h-3" /> Featured Project
                                                </span>
                                                <h4 className="text-sm font-bold text-white leading-tight">
                                                    Empire Luxury Enclave, Civil Lines
                                                </h4>
                                                <p className="text-xs text-slate-300">
                                                    RERA Approved Plots & Luxury Apartments.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Prayagraj Localities Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("locations")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                type="button"
                                className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all ${activeDropdown === "locations"
                                    ? "bg-amber-500/10 text-amber-700"
                                    : "text-slate-700 hover:text-slate-950 hover:bg-white"
                                    }`}
                            >
                                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                                <span>Prayagraj Hubs</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "locations" ? "rotate-180 text-amber-600" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === "locations" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 top-full mt-3 w-80 rounded-2xl bg-white border border-slate-200 p-3 shadow-2xl backdrop-blur-xl space-y-1"
                                    >
                                        <div className="text-[11px] font-bold text-amber-600 tracking-wider uppercase px-3 py-1 font-mono">
                                            Prime Localities
                                        </div>
                                        {prayagrajLocations.map((loc, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/locations/${loc.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                                                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                                            >
                                                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                <div>
                                                    <div className="text-xs font-bold text-slate-800 group-hover:text-amber-700">
                                                        {loc.name}
                                                    </div>
                                                    <div className="text-[11px] text-slate-500">{loc.tagline}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/buy-property"
                            className="text-sm font-semibold text-slate-700 hover:text-slate-950 px-4 py-2 rounded-full hover:bg-white transition-all cursor-pointer"
                        >
                            Buy
                        </Link>

                        <Link
                            href="/sell-property"
                            className="text-sm font-semibold text-slate-700 hover:text-slate-950 px-4 py-2 rounded-full hover:bg-white transition-all cursor-pointer"
                        >
                            Sell
                        </Link>

                        <Link
                            href="/about"
                            className="text-sm font-semibold text-slate-700 hover:text-slate-950 px-4 py-2 rounded-full hover:bg-white transition-all cursor-pointer"
                        >
                            About
                        </Link>
                    </div>

                    {/* Right Action Call & CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-amber-600 transition-colors px-3 py-1.5 cursor-pointer"
                        >
                            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[9px] text-slate-400 uppercase font-mono leading-none">
                                    Expert Advice
                                </span>
                                <span className="text-xs font-bold text-slate-900">+91 7388 481515</span>
                            </div>
                        </a>

                        <button
                            onClick={() => openModal("Want to Buy - Plot")}
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-amber-400 font-bold text-xs tracking-wide shadow-md hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer border border-amber-500/30"
                        >
                            Get Free Consultation
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 cursor-pointer"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>

                {/* Mobile Slide-down Navigation Drawer */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-2 rounded-2xl bg-white/95 border border-slate-200 p-5 backdrop-blur-xl space-y-4 shadow-xl"
                        >
                            <div className="space-y-1.5">
                                <div className="text-xs font-mono text-amber-600 uppercase font-bold tracking-wider px-1">
                                    Menu Options
                                </div>
                                {servicesMenu.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 p-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                                    >
                                        <item.icon className="w-4 h-4 text-amber-600" />
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className="pt-3 border-t border-slate-200 space-y-2">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs border border-slate-200 cursor-pointer"
                                >
                                    <PhoneCall className="w-4 h-4 text-amber-600" />
                                    Call Expert: +91 7388 481515
                                </a>


                                <button
                                    onClick={() => openModal("Want to Buy - Plot")}
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-amber-400 font-bold text-sm shadow-md cursor-pointer"
                                >
                                    Get Free Consultation
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}