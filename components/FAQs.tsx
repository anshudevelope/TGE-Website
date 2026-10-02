"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight, PhoneCall } from "lucide-react";
import { FAQItem } from "@/app/data/faqData";

interface FAQsProps {
    badgeText?: string;
    title?: string;
    highlightTitle?: string;
    description?: string;
    items: FAQItem[];
}

export default function FAQs({
    badgeText = "FREQUENTLY ASKED QUESTIONS",
    title = "Got Questions? We Have",
    highlightTitle = "Answers.",
    description = "Find clear answers about buying, selling, legal verification, and property investment with The Great Empire Group in Prayagraj.",
    items,
}: FAQsProps) {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

    const toggleAccordion = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative bg-[#FAF8F5] py-16 px-4 sm:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold tracking-wide"
                    >
                        <HelpCircle className="w-4 h-4 text-amber-600" />
                        <span>{badgeText}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900"
                    >
                        {title} <span className="text-amber-600">{highlightTitle}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 text-base sm:text-lg leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-4">
                    {items.map((item, index) => {
                        const isOpen = openId === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "bg-white border-amber-500/40 shadow-xl shadow-amber-900/5"
                                        : "bg-white/80 hover:bg-white border-slate-200 shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base sm:text-md font-bold text-slate-900 leading-snug">
                                        {item.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                                                ? "bg-amber-500 text-slate-950 rotate-180"
                                                : "bg-slate-100 text-slate-600"
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 sm:p-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Contact CTA Card */}
                <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-amber-500/30 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center sm:text-left">
                        <h4 className="text-lg font-bold text-white">
                            Still have questions about properties in Prayagraj?
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm">
                            Our real estate advisors are ready to assist you directly.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}