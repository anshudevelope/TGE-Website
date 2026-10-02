"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Building2,
    TrendingUp,
    Home,
    Trees,
    HardHat,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    PhoneCall,
} from "lucide-react";
import { div } from "framer-motion/m";

const servicesData = [
    {
        id: "consultant",
        title: "Real Estate Advisory & Consultancy",
        subtitle: "Bridging the Gap Between Property & Client",
        description:
            "As our primary business, The Great Empire Group is an independent real estate consultant and service provider with a committed customer base. Our primary focus is on bridging the gap between property and client to help clients realize measurable business value from their investments. We help clients find commercial, residential, and plot properties keeping in mind their requirements, choice of location across Prayagraj & UP, and within their budget.",
        icon: Building2,
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        features: [
            "Targeted Property Matching in Prayagraj",
            "Budget & ROI Optimization Analysis",
            "End-to-End Legal & Registry Verification",
        ],
    },
    {
        id: "resale",
        title: "Property Resale & Selling Services",
        subtitle: "Maximizing Returns on Your Real Estate Investments",
        description:
            "We at The Great Empire Group work to make your dreams a reality and make your property investments more profitable. We provide dedicated property resale services to property owners and investors, connecting them directly with genuine, verified buyers to secure the maximum market valuation.",
        icon: TrendingUp,
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        features: [
            "Direct Investor & Genuine Buyer Network",
            "Accurate Market Valuation Assessment",
            "Hassle-Free Title Transfer & Sales Agreement",
        ],
    },
    {
        id: "buy-advisory",
        title: "Property Buying & Acquisition Services",
        subtitle: "Verified Residential, Commercial & Plot Sourcing",
        description:
            "We assist individual buyers, families, and commercial investors in locating, evaluating, and purchasing premium plots, houses, and commercial space across Prayagraj. Our team manages property verification, title checks, price negotiations, and final registration for a completely secure purchase.",
        icon: Home,
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
        features: [
            "100% Legal & Registry Verified Plots & Homes",
            "Fair Market Price Negotiation & Budget Matching",
            "Seamless Legal Documentation & Title Registration",
        ],
    },
    {
        id: "land",
        title: "Land Management & Acre Acquisition",
        subtitle: "Agricultural, Commercial & Recreational Land",
        description:
            "Our specialized Land Management team provides agricultural land in acres, farmhouses, and recreational property to developers, investors, and institutions. Our experienced professionals have established industry best practices for land sourcing, boundary management, and legal clearance in Uttar Pradesh.",
        icon: Trees,
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        features: [
            "Large Agricultural Land & Acre Listings",
            "Clear Title & Khasra / Khatauni Audit",
            "Developer & Institution Partnership Models",
        ],
    },
    {
        id: "construction",
        title: "Construction & Development Services",
        subtitle: "Turnkey Home Building & Commercial Development",
        description:
            "The Great Empire Group provides complete construction services to clients and landowners, helping build custom homes and commercial structures tailored to their needs. We assist clients not only financially but also by advising on the best possible usage of their property, maximizing commercial and functional value through our professional engineering network.",
        icon: HardHat,
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        features: [
            "Architectural Planning & Floor Plan Optimization",
            "Turnkey Residential & Commercial Construction",
            "Commercial Monetization Strategy for Landowners",
        ],
    },
];

export default function Services() {
    return (
        <section className="relative bg-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wide"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>COMPREHENSIVE PROPERTY SOLUTIONS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900"
                    >
                        Our Core <span className="text-amber-600">Real Estate Services</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 text-base sm:text-lg leading-relaxed"
                    >
                        From independent consulting and property resales to large-scale land management and construction, The Great Empire Group delivers end-to-end excellence across Prayagraj and Uttar Pradesh.
                    </motion.p>
                </div>

                {/* Services Showcase Cards */}
                <div className="space-y-12">
                    {servicesData.map((service, index) => {
                        const Icon = service.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-3xl border border-amber-900/10 p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 overflow-hidden"
                            >
                                <div
                                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    {/* Service Text Content (Span 7) */}
                                    <div
                                        className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"
                                            }`}
                                    >
                                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-700 font-mono text-xs font-bold border border-amber-500/20">
                                            <Icon className="w-4 h-4 text-amber-600" />
                                            <span>{service.subtitle}</span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features Checklist */}
                                        <ul className="space-y-2.5 pt-2">
                                            {service.features.map((feat, fIdx) => (
                                                <li
                                                    key={fIdx}
                                                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Redirect to Contact Page */}
                                        <div className="pt-4">
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 text-amber-400 hover:bg-slate-800 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 group cursor-pointer"
                                            >
                                                <span>Inquire About This Service</span>
                                                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Service Visual Image (Span 5) */}
                                    <div
                                        className={`lg:col-span-5 relative ${isEven ? "lg:order-2" : "lg:order-1"
                                            }`}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] border border-slate-200 shadow-md group">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Banner Call to Action */}
                <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 border border-amber-500/30 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold text-white">
                            Need Custom Real Estate Consultation in Prayagraj?
                        </h4>
                        <p className="text-slate-300 text-sm max-w-xl">
                            Talk directly with our senior consultants regarding legal audits, agricultural land acquisition, or custom property development.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <a
                            href="tel:+919876543210"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs sm:text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
                        >
                            <PhoneCall className="w-4 h-4" />
                            <span>Call +91 7388 481515</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}