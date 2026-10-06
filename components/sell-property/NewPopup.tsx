"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function NewPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds (3000ms)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-all duration-500 animate-fadeIn"
            onClick={handleClose}
        >
            {/* Modal Card */}
            <div
                className="relative bg-white rounded-3xl border border-slate-200/80 shadow-2xl max-w-lg w-full overflow-hidden transform transition-all duration-500 scale-100 animate-scaleUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Floating Close Button */}
                <button
                    onClick={handleClose}
                    aria-label="Close Announcement"
                    className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 shadow-lg"
                >
                    ✕
                </button>

                {/* Header Tag */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-center text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                    <span>New Launch Announcement</span>
                </div>

                {/* Pop-up Banner Image Container */}
                <div className="relative w-full h-[320px] sm:h-[400px] bg-slate-100">
                    <Image
                        src="/samriddhi-vihar-pop-up.png"
                        alt="Samriddhi Vihar Special Offer Popup"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Bottom Call to Action Footer */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-amber-50/50 to-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-center sm:text-left">
                        <h4 className="text-sm font-extrabold text-slate-900">
                            Samriddhi Vihar Phase 2
                        </h4>
                        <p className="text-xs text-slate-600">
                            Book your plot today with prime connectivity!
                        </p>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <a
                            href="https://wa.me/917388481515?text=I%20want%20to%20know%20more%20details%20about%20the%20SAMRIDDHI%20VIHAR%20property" target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center shadow-md shadow-emerald-600/20 transition-all"
                        >
                            💬 WhatsApp Us
                        </a>
                        <button
                            onClick={handleClose}
                            className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}