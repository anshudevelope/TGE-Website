"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Building2,
    ShieldCheck,
    Send,
    PhoneCall,
    User,
    Mail,
    MapPin,
    HelpCircle,
    MessageSquare,
    CheckCircle2,
} from "lucide-react";
import { useLeadModal } from "@/app/context/LeadModalContext";

export default function LeadModal() {
    const { isOpen, closeModal, selectedQueryType } = useLeadModal();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        queryType: selectedQueryType || "Want to Buy - Plot",
        city: "Prayagraj",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (selectedQueryType) {
            setFormData((prev) => ({ ...prev, queryType: selectedQueryType }));
        }
    }, [selectedQueryType]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: Connect API Endpoint here later
            // const response = await fetch('/api/lead', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData),
            // });

            console.log("Lead Submitted:", formData);

            // Simulate API Response delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setIsSubmitting(false);
                closeModal();
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    queryType: "Want to Buy - Plot",
                    city: "Prayagraj",
                    message: "",
                });
            }, 2000);
        } catch (error) {
            console.error("Submission failed", error);
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 lg:p-6 overflow-y-auto">
                    {/* Backdrop Blur Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
                    />

                    {/* Modal Card Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20 z-10 flex flex-col md:flex-row my-auto max-h-[92vh] md:max-h-[85vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-900/10 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* LEFT SIDE: Brand Visual Panel (Reference Layout Style) */}
                        <div className="relative md:w-[42%] bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between shrink-0 overflow-hidden min-h-[220px] md:min-h-full">
                            {/* Image Background with Dark Overlay */}
                            <Image
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                                alt="The Great Empire Group Real Estate"
                                fill
                                className="object-cover object-center opacity-30"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0" />

                            <div className="relative z-10 space-y-4">
                                {/* Brand Header Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Verified Legal Properties</span>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight font-sans">
                                        Get Free <br />
                                        <span className="text-amber-400">Consultation</span>
                                    </h3>
                                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                                        Connect directly with our property specialists in Prayagraj for verified plot maps, pricing details, and site visit arrangements.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Trust Contact Card */}
                            <div className="relative z-10 pt-6 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 font-medium">
                                <div className="flex items-center gap-2 text-amber-400 font-bold">
                                    <PhoneCall className="w-4 h-4" />
                                    <span>Direct Support: +91 7388481515</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                                    <span>52/42 Taskand Marg, Civil Lines, Prayagraj</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Form Controls */}
                        <div className="md:w-[58%] p-6 sm:p-8 bg-[#FAF8F5] overflow-y-auto flex flex-col justify-between">
                            {isSuccess ? (
                                <div className="my-auto py-12 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900">
                                        Request Received!
                                    </h4>
                                    <p className="text-slate-600 text-sm max-w-sm mx-auto">
                                        Thank you. Our real estate specialist will contact you on WhatsApp/Phone shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-extrabold text-slate-900">
                                            Property Requirement Form
                                        </h4>
                                        <p className="text-xs text-slate-500">
                                            Fill out the form below to receive detailed info.
                                        </p>
                                    </div>

                                    {/* Full Name Field */}
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="e.g. Rahul Sharma"
                                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-xs sm:text-sm bg-white outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email & WhatsApp Phone Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="name@gmail.com"
                                                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-xs sm:text-sm bg-white outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                                WhatsApp Number *
                                            </label>
                                            <div className="relative">
                                                <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 9876543210"
                                                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-xs sm:text-sm bg-white outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Query Type & Target City Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                                Requirement Type *
                                            </label>
                                            <div className="relative">
                                                <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <select
                                                    name="queryType"
                                                    value={formData.queryType}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-xs sm:text-sm bg-white outline-none transition-all appearance-none cursor-pointer"
                                                >
                                                    <option value="Want to Buy - Plot">Want to Buy - Plot</option>
                                                    <option value="Want to Buy - Apartment/Villa">
                                                        Want to Buy - House/Apartment
                                                    </option>
                                                    <option value="Want to Buy - Commercial Land">
                                                        Want to Buy - Commercial Land
                                                    </option>
                                                    <option value="Want to Sell Property">
                                                        Want to Sell Property
                                                    </option>
                                                    <option value="Land Management / Construction">
                                                        Turnkey Construction Advisory
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                                Preferred City *
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input
                                                    type="text"
                                                    name="city"
                                                    required
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Prayagraj"
                                                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-xs sm:text-sm bg-white outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Message */}
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Message / Locality Preference
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                                            <textarea
                                                name="message"
                                                rows={2}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Specify preferred area (e.g. Civil Lines, Jhalwa) or budget..."
                                                className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-900 text-xs sm:text-sm bg-white outline-none transition-all resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg active:scale-95 cursor-pointer disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <span>Submitting...</span>
                                        ) : (
                                            <>
                                                <span>Submit Inquiry</span>
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-slate-400 text-center leading-normal">
                                        By submitting, you agree to receive property updates from The Great Empire Group. Your information is 100% secure.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}