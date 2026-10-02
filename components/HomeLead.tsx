"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    PhoneCall,
    Mail,
    Clock,
    Send,
    CheckCircle2,
    ShieldCheck,
    AlertCircle,
    Loader2,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function HomeLead() {
    const [formData, setFormData] = useState({
        name: "",
        city: "Prayagraj",
        phone: "",
        email: "",
        queryType: "Want to Buy - Plot",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage("");

        try {
            // ------------------------------------------------------------------
            // API INTEGRATION POINT
            // Replace '/api/leads' with your actual API endpoint URL when ready.
            // ------------------------------------------------------------------
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.message || "Failed to submit request. Please try again."
                );
            }

            // Success State
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setIsSubmitting(false);
                setFormData({
                    name: "",
                    city: "Prayagraj",
                    phone: "",
                    email: "",
                    queryType: "Want to Buy - Plot",
                    message: "",
                });
            }, 4000);
        } catch (error: any) {
            console.error("Error submitting lead form:", error);

            // Fallback for development/testing if API route doesn't exist yet
            if (process.env.NODE_ENV === "development") {
                console.log("Mock submission success (Dev Mode):", formData);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    setIsSubmitting(false);
                    setFormData({
                        name: "",
                        city: "Prayagraj",
                        phone: "",
                        email: "",
                        queryType: "Want to Buy - Plot",
                        message: "",
                    });
                }, 4000);
                return;
            }

            setErrorMessage(
                error.message || "Something went wrong. Please try again later."
            );
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden text-slate-800">

            {/* Background Decorative Ambient Glass Lighting */}
            <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-400/20 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-200/40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-300/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Section Info, Contact Cards & Social Media (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        {/* Tag Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xs">
                            <ShieldCheck className="w-4 h-4 text-amber-600" />
                            <span>GET IN TOUCH WITH US</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-3">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight font-sans">
                                Seamless Real Estate, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                                    Verified Peace of Mind.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                                Connect directly with The Great Empire Group. Whether you wish to acquire high-ROI plots, sell property, or inquire about legal registry our Prayagraj office is at your service.
                            </p>
                        </div>

                        {/* 4 Block Light Glass Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/80">

                            {/* Head Office */}
                            <div className="p-3.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-sm flex items-start gap-3 hover:bg-white/70 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                                        HEAD OFFICE
                                    </div>
                                    <div className="text-xs text-slate-700 font-medium leading-snug">
                                        52/42 Taskand Marg, Civil Lines, Prayagraj - 211001
                                    </div>
                                </div>
                            </div>

                            {/* Direct Support */}
                            <div className="p-3.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-sm flex items-start gap-3 hover:bg-white/70 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                                    <PhoneCall className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                                        LET&apos;S TALK
                                    </div>
                                    <a
                                        href="tel:+917388481515"
                                        className="text-xs text-slate-800 hover:text-amber-600 transition-colors block font-semibold"
                                    >
                                        +91 7388481515
                                    </a>
                                </div>
                            </div>

                            {/* Email Support */}
                            <div className="p-3.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-sm flex items-start gap-3 hover:bg-white/70 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                                        EMAIL SUPPORT
                                    </div>
                                    <a
                                        href="mailto:info@thegreatempiregroup.com"
                                        className="text-xs text-slate-800 hover:text-amber-600 transition-colors block break-all font-medium"
                                    >
                                        info@thegreatempiregroup.com
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="p-3.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/80 shadow-sm flex items-start gap-3 hover:bg-white/70 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5">
                                    <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest">
                                        WORKING HOURS
                                    </div>
                                    <div className="text-xs text-slate-700 font-medium leading-snug">
                                        Mon - Sat: 09:30am - 07:00pm <br />
                                        Sunday: By Appointment
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Social Media Links */}
                        <div className="pt-4 border-t border-slate-200/80 space-y-3">
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                                Follow our official social media
                            </h4>
                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/70 border border-white hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/70 border border-white hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/70 border border-white hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/70 border border-white hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Light Glassmorphism Form Card (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 bg-white/60 rounded-xl p-6 sm:p-10 border border-white/80 shadow-2xl shadow-amber-900/5 backdrop-blur-xl relative"
                    >
                        {isSuccess ? (
                            <div className="py-16 text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                                    Thank you for reaching out to The Great Empire Group. Our property consultant will get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-1">
                                    <h3 className="text-md sm:text-xl font-bold text-slate-900 tracking-tight">
                                        Send us a message
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600">
                                        Please feel free to send us any property requirements, feedback, or plot inquiries.
                                    </p>
                                </div>

                                {/* Error Banner */}
                                {errorMessage && (
                                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                {/* Name & City Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Rahul Sharma"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 outline-none transition-all shadow-xs"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Preferred City *
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="e.g. Prayagraj"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 outline-none transition-all shadow-xs"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            WhatsApp Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 7388 481515"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 outline-none transition-all shadow-xs"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 outline-none transition-all shadow-xs"
                                        />
                                    </div>
                                </div>

                                {/* Requirement Type Dropdown */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Property Requirement *
                                    </label>
                                    <select
                                        name="queryType"
                                        value={formData.queryType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200/90 text-slate-900 text-xs sm:text-sm focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 outline-none transition-all cursor-pointer shadow-xs"
                                    >
                                        <option value="Want to Buy - Plot">Want to Buy - Residential Plot</option>
                                        <option value="Want to Buy - Commercial Land">
                                            Want to Buy - Commercial Land
                                        </option>
                                        <option value="Want to Buy - House/Apartment">
                                            Want to Buy - House / Apartment
                                        </option>
                                        <option value="Want to Sell Property">
                                            Want to Sell Property
                                        </option>
                                        <option value="Turnkey Construction Services">
                                            Turnkey Construction Advisory
                                        </option>
                                    </select>
                                </div>

                                {/* Message Textarea */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Message / Preferred Locality
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Provide additional details or questions (e.g. Civil Lines, Jhalwa)..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none shadow-xs"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Sending Message...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-slate-500 text-center font-medium">
                                    Your information is completely safe with us. We respect your privacy.
                                </p>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}