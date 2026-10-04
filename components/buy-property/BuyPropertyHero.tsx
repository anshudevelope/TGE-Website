"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

const LOCALITIES = [
  "Civil Lines",
  "Naini",
  "Jhunsi",
  "Phaphamau",
  "Jhalwa",
  "Teliarganj",
  "Lukerganj",
  "Allenganj",
  "Bamrauli",
  "Kydganj",
];

export default function BuyPropertyHero() {
  const [propertyType, setPropertyType] = useState("All Types");
  const [locality, setLocality] = useState("");
  const [budget, setBudget] = useState("Any Budget");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      type: propertyType,
      locality: locality,
      budget: budget,
    });
    // Redirect to property search results page
    window.location.href = `/properties?${queryParams.toString()}`;
  };

  return (
    <>
      <section className="relative w-full min-h-[640px] flex items-center justify-center bg-slate-900 py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/buy-property-hero.png')` }}
        >
          {/* Multi-layer gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/50 to-slate-900/10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-8xl w-full mx-auto mt-10 sm:mt-20 px-0 sm:px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Verified Properties in Prayagraj
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Buy Property in <span className="text-amber-400">Prayagraj</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              Find plots, flats, houses and commercial spaces in the right
              locality at the right price, with expert guidance from The
              Great Empire Group at every step.
            </p>

            {/* Intro Paragraph */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Prayagraj is growing fast, with new roads, colonies and commercial
              hubs opening more options for homebuyers and investors. Whether you
              want a ready home in Civil Lines, a plot in Jhalwa or an
              investment in Naini, we help you compare options, verify
              documents and close the deal confidently.
            </p>

            {/* Primary Action & Book Site Visit */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#book-site-visit"
                className="px-5 py-2.5 bg-slate-100 hover:bg-white text-slate-900 border border-slate-200 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow"
              >
                Book Free Site Visit
              </Link>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-3 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Verified listings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Legal documentation support</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Sticky Call / WhatsApp Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
        <a
          href="tel:+919450000000"
          className="flex-1 py-2 px-3 bg-slate-900 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
        >
          📞 Call Agent
        </a>
        <a
          href="https://wa.me/919450000000?text=Hi,%20I%20am%20interested%20in%20buying%20a%20property%20in%20Prayagraj."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-emerald-600 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}