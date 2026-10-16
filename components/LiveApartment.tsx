"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    ChevronLeft,
    ChevronRight,
    PhoneCall,
    MessageSquare,
    Sparkles,
    Building2,
    CheckCircle2,
    Home,
    Maximize2,
    Calendar,
    Tag,
} from "lucide-react";
import { useLeadModal } from "@/app/context/LeadModalContext";

const APARTMENT_IMAGES = [
    "/sonal-palms-image-1.jpeg",
    "/sonal-palms-image-2.jpeg",
    "/sonal-palms-image-3.jpeg",
];

const HIGHLIGHT_FEATURES = [
    { title: "Spacious Layouts", desc: "1 & 2 BHK Large Size Apartments" },
    { title: "Penthouse Style", desc: "Premium Living Experience" },
    { title: "Modern Architecture", desc: "Contemporary Design & Elevation" },
    { title: "Prime Connectivity", desc: "Near Triveni Puram, Jhunsi" },
];

export default function LiveApartment() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const { openModal } = useLeadModal();

    // Auto-slide images every 4 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % APARTMENT_IMAGES.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const handleNextImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) => (prev + 1) % APARTMENT_IMAGES.length);
    };

    const handlePrevImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex((prev) =>
            prev === 0 ? APARTMENT_IMAGES.length - 1 : prev - 1
        );
    };

    return (
        <section className="py-16 sm:py-20 bg-white text-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Badge & Title */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs sm:text-sm font-bold tracking-wide uppercase font-mono mb-3">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Featured New Launch
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                        SONAL PALMS <span className="text-amber-600">- JHUNSI</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
                        अब Jhunsi में लग्ज़री और बड़े आकार के Apartments का नया विकल्प!
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                     {/* Left Column: Property Info & CTA Card */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Project Highlights Card */}
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                            
                            {/* Price Tag Header */}
                            <div className="flex items-center justify-between pb-5 border-b border-slate-200/80">
                                <div>
                                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                                        Starting Price Rate
                                    </span>
                                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-600">
                                        ₹5,500 <span className="text-sm font-bold text-slate-700">/ Sq.Ft.</span>
                                    </span>
                                </div>
                                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-600">
                                    <Tag className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Location Box */}
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm">
                                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-slate-900 block">Project Location</span>
                                    <span className="text-slate-600">Katka, Triveni Puram, Jhunsi, Prayagraj</span>
                                </div>
                            </div>

                            {/* Key Specifications Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {HIGHLIGHT_FEATURES.map((feature, i) => (
                                    <div key={i} className="p-3 bg-white border border-slate-200 rounded-2xl space-y-1">
                                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                            <span>{feature.title}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-tight">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Action Buttons */}
                            <div className="space-y-3 pt-2">
                                <button
                                    onClick={() => openModal("Inquiry for Sonal Palms Jhunsi")}
                                    className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-sm transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 cursor-pointer border border-amber-500/30"
                                >
                                    <Building2 className="w-4 h-4" />
                                    <span>Inquire / Book Site Visit</span>
                                </button>

                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href="tel:+917388481515"
                                        className="py-3 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200 cursor-pointer"
                                    >
                                        <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                                        <span>Call Advisor</span>
                                    </a>
                                    <a
                                        href="https://wa.me/917388481515?text=Hi,%20I%20am%20interested%20in%20Sonal%20Palms%20Jhunsi,%20Prayagraj."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20 cursor-pointer"
                                    >
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    {/* Right Column: Animated Image Slider */}
                    <div className="lg:col-span-7 space-y-4">
                        <div
                            className="relative w-full aspect-4/3 rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 group"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={APARTMENT_IMAGES[currentImageIndex]}
                                        alt={`Sonal Palms Jhunsi View ${currentImageIndex + 1}`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover"
                                        priority={currentImageIndex === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating Image Counter */}
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/70 text-white text-xs font-bold backdrop-blur-md border border-white/20">
                                {currentImageIndex + 1} / {APARTMENT_IMAGES.length}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-md backdrop-blur-sm transition-all hover:scale-110 cursor-pointer"
                                aria-label="Previous Slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-md backdrop-blur-sm transition-all hover:scale-110 cursor-pointer"
                                aria-label="Next Slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Bottom Caption Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                                <span className="drop-shadow-md">
                                    Katka, Triveni Puram, Jhunsi, Prayagraj
                                </span>
                            </div>
                        </div>

                        {/* Thumbnails Navigation Row */}
                        <div className="grid grid-cols-5 gap-2 sm:gap-3">
                            {APARTMENT_IMAGES.map((imgSrc, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentImageIndex(idx);
                                    }}
                                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                                        currentImageIndex === idx
                                            ? "border-amber-500 scale-105 shadow-md"
                                            : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                                >
                                    <Image
                                        src={imgSrc}
                                        alt={`Thumbnail ${idx + 1}`}
                                        fill
                                        sizes="120px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}