"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// 4 Carousel images path setup
const CAROUSEL_IMAGES = [
    "/samriddhi-vihar-1.jpeg",
    "/samriddhi-vihar-2.jpeg",
    "/samriddhi-vihar-3.jpeg",
    "/samriddhi-vihar-4.jpeg",
];

export default function LatestProject() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play carousel logic
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <>
            {/* Light Gradient Brand Section */}
            <section className="w-full bg-gradient-to-b from-amber-50/60 via-slate-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 text-slate-900 overflow-hidden relative">

                {/* Soft Background Accent Glows */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-0" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

                <div className="max-w-7xl mx-auto space-y-10 relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                                Featured Project Spotlight
                            </span>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 uppercase">
                                SAMRIDDHI VIHAR
                            </h2>
                            <p className="text-sm sm:text-base text-slate-600 mt-1 flex items-center gap-2 font-medium">
                                <span className="text-amber-600">📍</span> Gohaniya Near Jari Bazar, Prayagraj
                            </p>
                        </div>

                        {/* Quick Map Action Button */}
                        <button
                            onClick={() => setIsMapOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            <span>View Layout Map</span>
                        </button>
                    </div>

                    {/* Main 2-Column Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* Left 6 Columns: Animated Image Carousel */}
                        <div
                            className="lg:col-span-6 relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl h-[360px] sm:h-[450px]"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Carousel Images with Smooth Crossfade Animation */}
                            {CAROUSEL_IMAGES.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                                        } transform transition-transform duration-1000`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Samriddhi Vihar Phase 1 - View ${index + 1}`}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                </div>
                            ))}

                            {/* Navigation Controls */}
                            <button
                                onClick={prevSlide}
                                aria-label="Previous Slide"
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-amber-500 text-slate-900 hover:text-white border border-slate-200/50 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                            >
                                ❮
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next Slide"
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-amber-500 text-slate-900 hover:text-white border border-slate-200/50 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md cursor-pointer"
                            >
                                ❯
                            </button>

                            {/* Slide Counter Indicator */}
                            <div className="absolute bottom-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs text-amber-300 font-bold">
                                {currentIndex + 1} / {CAROUSEL_IMAGES.length}
                            </div>

                            {/* Dot Indicators */}
                            <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
                                {CAROUSEL_IMAGES.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-amber-400" : "w-2 bg-white/60 hover:bg-white"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right 6 Columns: Project Details & Status Cards */}
                        <div className="lg:col-span-6 space-y-6">

                            {/* Phase Status Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {/* Phase 1 Status */}
                                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 shadow-sm">
                                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm">
                                        ✓
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                                            Status Update
                                        </span>
                                        <h3 className="text-base font-extrabold text-slate-900">
                                            Phase 1 - Completed
                                        </h3>
                                        <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                                            Development & boundary work delivered successfully.
                                        </p>
                                    </div>
                                </div>

                                {/* Phase 2 Status */}
                                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 relative overflow-hidden group shadow-sm">
                                    <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
                                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm flex-shrink-0 shadow-sm">
                                        🔥
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                                            New Launch
                                        </span>
                                        <h3 className="text-base font-extrabold text-slate-900">
                                            Phase 2 - Started
                                        </h3>
                                        <p className="text-xs text-amber-900 font-semibold mt-0.5 leading-snug">
                                            Best opportunity for buyers & investors!
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Tagline & Pitch */}
                            <div className="space-y-2">
                                <blockquote className="text-lg sm:text-xl font-bold text-amber-700 italic border-l-4 border-amber-500 pl-4 py-1">
                                    "Better Location, Brighter Future"
                                </blockquote>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                    Invest in a better tomorrow with prime residential plots in Prayagraj. Ideal for building your dream home or securing high-appreciation land investment in a fast-developing corridor.
                                </p>
                            </div>

                            {/* Key Features List */}
                            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                                    <span className="text-amber-500 text-base">🏡</span>
                                    <span>Premium Residential Plots</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                                    <span className="text-amber-500 text-base">📍</span>
                                    <span>Prime Connectivity</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                                    <span className="text-amber-500 text-base">🛣️</span>
                                    <span>Well Connected Roads</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                                    <span className="text-amber-500 text-base">🌳</span>
                                    <span>Green & Peaceful Environment</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a
                                    href="https://wa.me/917388481515?text=Hi,%20I%20am%20interested%20in%20Samriddhi%20Vihar%20Phase%202%20plots."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl text-center shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all"
                                >
                                    💬 Enquire Phase 2 via WhatsApp
                                </a>
                                <button
                                    onClick={() => setIsMapOpen(true)}
                                    className="py-3.5 px-5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 shadow-sm transition-all cursor-pointer"
                                >
                                    🗺️ Open Layout Map
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Light-Themed Animated Layout Map Modal Popup */}
            {isMapOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
                    <div
                        className="relative bg-white rounded-3xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span>🗺️ Samriddhi Vihar</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-800 border border-amber-500/30 font-semibold">Layout Map</span>
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5">Gohaniya Near Jari Bazar, Prayagraj</p>
                            </div>
                            <button
                                onClick={() => setIsMapOpen(false)}
                                className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors text-base font-bold cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Body - Layout Map Container */}
                        <div className="p-4 overflow-y-auto flex items-center justify-center min-h-[300px] bg-slate-100/50">
                            <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                                <Image
                                    src="/samriddhi-vihar-map.jpeg"
                                    alt="Samriddhi Vihar Layout Map Plan"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 border-t border-slate-100 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                            <span>* High-resolution map view for site planning and plot selection.</span>
                            <a
                                href="/samriddhi-vihar-map.jpeg"
                                download="Samriddhi-Vihar-Layout-Map.jpeg"
                                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition-colors shadow-sm"
                            >
                                📥 Download Map JPG
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}