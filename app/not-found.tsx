"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ArrowLeft, PhoneCall, Search, MapPin, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] flex flex-col justify-between font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Header / Branding Bar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3 cursor-pointer">
          <div className="relative w-10 h-10 rounded-xl bg-slate-900 p-1 flex items-center justify-center shadow-md overflow-hidden">
            <Image
              src="/the-great-empire-logo.png"
              alt="The Great Empire Group Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-wide text-slate-900 uppercase">
              The Great Empire<span className="text-amber-600"> Group</span>
            </span>
            <span className="text-[9px] text-slate-500 tracking-widest -mt-1 font-mono uppercase font-bold">
              Prayagraj Real Estate
            </span>
          </div>
        </Link>

        <Link
          href="/contact"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-amber-600 transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
          <span>Need Help? Contact Us</span>
        </Link>
      </header>

      {/* Hero 404 Content Area */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Animated Graphic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full" />
            
            <div className="relative bg-white border border-amber-900/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/80 inline-flex items-center justify-center">
              <span className="text-6xl sm:text-8xl font-black tracking-tighter text-slate-900 font-sans">
                4<span className="text-amber-600">0</span>4
              </span>
              <Compass className="absolute -top-3 -right-3 w-8 h-8 text-amber-500 animate-spin-slow" />
            </div>
          </motion.div>

          {/* Text Message */}
          <div className="space-y-3 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight"
            >
              Property or Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed"
            >
              The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track to exploring verified real estate in Prayagraj.
            </motion.p>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer group"
            >
              <Home className="w-4 h-4 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Support / Sales</span>
            </Link>
          </motion.div>

          {/* Quick Helpful Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-slate-200/80 max-w-lg mx-auto"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-4">
              Or Explore Popular Sections:
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              <Link
                href="/"
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-500/50 hover:text-amber-600 transition-all text-center cursor-pointer shadow-sm"
              >
                Buy Plots
              </Link>
              <Link
                href="/#services"
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-500/50 hover:text-amber-600 transition-all text-center cursor-pointer shadow-sm"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-500/50 hover:text-amber-600 transition-all text-center cursor-pointer shadow-sm"
              >
                Free Site Visit
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer Branding Bar */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 text-center text-xs text-slate-500 font-medium border-t border-slate-200/60">
        <p>© {new Date().getFullYear()} The Great Empire Group. All rights reserved. Prayagraj, Uttar Pradesh.</p>
      </footer>

    </main>
  );
}