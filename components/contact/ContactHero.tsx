"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  MessageSquare,
  Navigation,
} from "lucide-react";

const quickContactCards = [
  {
    icon: PhoneCall,
    title: "Call Direct Support",
    subtitle: "Speak with our real estate specialists",
    value: "+91 7388481515",
    actionHref: "tel:+917388481515",
    actionText: "Call Now",
    badge: "Fastest Response",
  },
  {
    icon: MapPin,
    title: "Visit Corporate Office",
    subtitle: "52/42 Taskand Marg, Civil Lines",
    value: "Prayagraj, UP - 211001",
    actionHref:
      "https://www.google.com/maps/search/?api=1&query=52/42+Taskand+Marg+Civil+Lines+Prayagraj+Uttar+Pradesh+211001",
    actionText: "Get Directions",
    badge: "Head Office",
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    subtitle: "Send us property or plot requirements",
    value: "info@thegreatempiregroup.com",
    actionHref: "mailto:info@thegreatempiregroup.com",
    actionText: "Send Mail",
    badge: "24/7 Service",
  },
];

export default function ContactHero() {
  return (
    <section className="relative bg-[#FAF8F5] pt-28 pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-8 overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-8xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wide"
          >
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>GET IN TOUCH WITH US</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900"
          >
            Let&apos;s Connect & Find Your <br />
            <span className="text-amber-600">Ideal Property in Prayagraj</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Have questions about plot availability, legal verification, or scheduling a free site visit? Reach out to The Great Empire Group team today.
          </motion.p>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {quickContactCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500">{card.subtitle}</p>
                  </div>

                  <div className="text-base font-bold text-slate-800 break-words font-sans">
                    {card.value}
                  </div>
                </div>

                <a
                  href={card.actionHref}
                  target={card.actionHref.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{card.actionText}</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Operating Hours & Office Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-lg font-extrabold text-white">
                Office Hours & Consultation Timings
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                Monday – Saturday: 09:30 AM – 07:00 PM | Sunday: By Appointment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Prayagraj Regional Office</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}