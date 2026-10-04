"use client";

import React from "react";

interface VerificationDoc {
    title: string;
    description: string;
}

const DOCUMENTS_CHECKLIST: VerificationDoc[] = [
    {
        title: "Title Deed / Registry (Sale Deed)",
        description: "Verify the original sale deed and trace the complete ownership chain to ensure clean ownership.",
    },
    {
        title: "Encumbrance Certificate (EC)",
        description: "Confirm that the property is free from mortgages, unpaid bank loans, or active legal disputes.",
    },
    {
        title: "Mutation Records (Dakhil-Kharij)",
        description: "Check official revenue records and tax receipts to verify the seller's name is updated in municipal logs.",
    },
    {
        title: "PDA Approved Layout / Map",
        description: "Ensure layout approval from the Prayagraj Development Authority (PDA) where applicable.",
    },
    {
        title: "UP RERA Registration",
        description: "Verify project registration status on the official UP RERA portal for modern apartments and housing schemes.",
    },
    {
        title: "Land-Use & Zoning Status",
        description: "Confirm whether the plot or property is designated for residential, commercial, or agricultural land use.",
    },
];

export default function BuyPropertyGuide() {
    return (
        <section className="py-16 bg-white border-t border-slate-200/80">
            {/* Readable Single-Column Block (Max-W-800px) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">

                {/* Section Header */}
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                        📘 Real Estate Legal & Buyer Guide
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                        What to Check Before You Buy Property in Prayagraj
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                        Buying property is a big decision. These essential verification steps and practical checks help you avoid common legal and financial pitfalls.
                    </p>
                </div>

                {/* H3 Section 1: Documents to Verify */}
                <div className="space-y-5 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                        <span>📑</span>
                        <span>Documents to Verify</span>
                    </h3>

                    <div className="grid grid-cols-1 gap-3.5">
                        {DOCUMENTS_CHECKLIST.map((doc, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3.5 hover:bg-amber-50/50 transition-colors"
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold mt-0.5">
                                    ✓
                                </span>
                                <div className="space-y-0.5">
                                    <h4 className="text-sm font-bold text-slate-900">
                                        {doc.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {doc.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* H3 Section 2: Practical Tips */}
                <div className="space-y-4 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                        <span>💡</span>
                        <span>Practical Buyer Tips</span>
                    </h3>

                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <li className="flex items-start gap-2.5">
                            <span className="text-amber-500 font-bold text-base">•</span>
                            <span><strong>Site Inspections:</strong> Visit the property site more than once, at different times of the day to evaluate traffic, neighborhood noise, and sunlight.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-amber-500 font-bold text-base">•</span>
                            <span><strong>Infrastructure Readiness:</strong> Verify wide road access, water line connection, municipal drainage systems, and electricity availability.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-amber-500 font-bold text-base">•</span>
                            <span><strong>Market Pricing Comparison:</strong> Compare square foot rates with recently sold nearby properties in the same locality.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-amber-500 font-bold text-base">•</span>
                            <span><strong>Identity Checks:</strong> Confirm the seller&apos;s identity, Aadhaar, PAN, and original property ownership documents before paying any token amount.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-amber-500 font-bold text-base">•</span>
                            <span><strong>Secure Payment Trails:</strong> Pay only through traceable banking channels (Cheque/NEFT/RTGS) and keep receipts for every transaction.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="text-amber-500 font-bold text-base">•</span>
                            <span><strong>Additional Registration Budgets:</strong> Factor in government stamp duty, legal advocate fees, mutation costs, and registry fees. <em>(Note: Always verify prevailing UP Government stamp duty rates prior to agreement).</em></span>
                        </li>
                    </ul>
                </div>

                {/* H3 Section 3: Buying a Plot vs Flat vs House */}
                <div className="space-y-4 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                        <span>🏡</span>
                        <span>Buying a Plot vs a Flat vs a House</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                        {/* Plot */}
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                                <span>📐</span> Plot / Land
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Offers greater construction flexibility and higher long-term capital appreciation, but requires independent construction planning and strict document verification.
                            </p>
                        </div>

                        {/* Flat */}
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                                <span>🏢</span> Flat / Apartment
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Provides ready convenience, gated security, and shared amenities, but involves recurring maintenance charges and undivided land ownership share.
                            </p>
                        </div>

                        {/* House */}
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                                <span>🏠</span> Independent House
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Delivers complete privacy, personal plot ownership, and multi-storey living space, typically requiring a higher initial budget investment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Legal Disclaimer Note Box */}
                <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-slate-700">
                    <span className="text-xl flex-shrink-0">⚠️</span>
                    <p className="text-xs leading-relaxed font-medium">
                        <strong>Disclaimer:</strong> This buyer&apos;s guide is provided for general informational purposes only. Property laws and registration requirements in Uttar Pradesh can vary based on land authority zoning. Please consult a qualified legal professional or property advocate before making financial commitments.
                    </p>
                </div>

            </div>
        </section>
    );
}