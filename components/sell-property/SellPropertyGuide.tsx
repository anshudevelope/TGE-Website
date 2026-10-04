"use client";

import React from "react";

const REQUIRED_DOCUMENTS = [
    "Sale deed or registry and the complete ownership chain",
    "Mutation records (dakhil-kharij) and updated property tax receipts",
    "Encumbrance certificate (NIL dues confirmation)",
    "Approved map or development authority approvals (PDA/Local Body), where applicable",
    "Society NOC, maintenance receipts and RERA details (for flats and projects)",
    "Your ID and address proof (Aadhaar/PAN), and loan NOC/closure papers if mortgaged",
];

const SELLING_TIPS = [
    "Price based on recent nearby deals, not just unverified expectations.",
    "Clean and present the property well, and take clear, bright photos.",
    "Mention exact locality, plot size, road width, facing (East/North) and authority approvals.",
    "Resolve pending dues, boundary markings or title questions before listing.",
    "Be ready to negotiate within a realistic price range you decide in advance.",
    "Insist on traceable banking payments (RTGS/NEFT/Cheque), and never hand over original registry documents before full payment.",
];

export default function SellPropertyGuide() {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Focused Single Column Block (Max 800px) */}
            <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

                {/* Section Header */}
                <div className="space-y-4 text-left border-b border-slate-200 pb-8">
                    <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                        Seller Insights & Compliance
                    </p>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                        How to Sell Property in Prayagraj Faster and Safely
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        A little preparation can significantly improve both your final price and speed of sale. Here is a practical roadmap to ensure a secure transaction in Prayagraj.
                    </p>
                </div>

                {/* Subsection 1: Documents to keep ready */}
                <div className="space-y-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <span>📄</span>
                        <span>Documents to Keep Ready</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Having clean paperwork ready beforehand prevents last-minute transaction delays and gives prospective buyers confidence:
                    </p>

                    <ul className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                        {REQUIRED_DOCUMENTS.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold text-xs mt-0.5">
                                    ✓
                                </span>
                                <span className="leading-relaxed">{doc}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subsection 2: Tips to get a better price */}
                <div className="space-y-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <span>💡</span>
                        <span>Tips to Get a Better Price</span>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Positioning your property accurately in the Prayagraj market helps you attract high-intent buyers faster:
                    </p>

                    <ul className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                        {SELLING_TIPS.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-500 mt-2" />
                                <span className="leading-relaxed">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subsection 3: Tax and charges to plan for */}
                <div className="space-y-5 pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        <span>⚖️</span>
                        <span>Tax and Charges to Plan For</span>
                    </h3>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p>
                            <strong className="text-slate-900">Capital Gains Tax:</strong> Depending on whether you have held the property long-term or short-term, income tax rules apply on profits from real estate sales.
                        </p>
                        <p>
                            <strong className="text-slate-900">Tax Deducted at Source (TDS):</strong> Buyer TDS obligations (e.g., Section 194-IA under Indian Income Tax rules) may apply on property transactions exceeding specified threshold values.
                        </p>
                        <p>
                            <strong className="text-slate-900">Brokerage & Fees:</strong> Brokerage fees, consultation charges, and marketing expenses should always be agreed upon in writing prior to listing.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
                        💡 <strong>Professional Advice Recommended:</strong> Tax rules and thresholds undergo periodic updates. We suggest consulting a certified chartered accountant or tax advisor for your specific transaction.
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <div className="pt-6 border-t border-slate-200 text-center sm:text-left">
                    <p className="text-xs text-slate-500 italic leading-relaxed">
                        <strong>Disclaimer:</strong> This guide is for general information purposes only. Please consult a qualified legal professional or tax practitioner before finalising any property transaction in Prayagraj.
                    </p>
                </div>

            </div>
        </section>
    );
}