"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Eye,
    FileText,
    UserCheck,
    Server,
    Mail,
    PhoneCall,
    MapPin,
    HelpCircle,
    Clock,
} from "lucide-react";

export default function PrivacyPolicy() {
    const lastUpdated = "October 1, 2026";

    const sections = [
        {
            id: "information-collection",
            icon: Eye,
            title: "1. Information We Collect",
            content: (
                <div className="space-y-3">
                    <p>
                        We collect personal information that you voluntarily provide to us
                        when filling out lead generation forms, requesting property site
                        visits, or contacting us regarding real estate listings.
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                        <li>
                            <strong>Personal Details:</strong> Full name, email address, phone
                            number, and preferred city/locality.
                        </li>
                        <li>
                            <strong>Property Requirements:</strong> Specific interests (e.g.,
                            buying plots, commercial land, house construction, or selling
                            property).
                        </li>
                        <li>
                            <strong>Technical Data:</strong> IP address, browser type, device
                            identifiers, and usage data collected via cookies during site
                            navigation.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "use-of-information",
            icon: FileText,
            title: "2. How We Use Your Information",
            content: (
                <div className="space-y-3">
                    <p>
                        The information collected through The Great Empire Group platform is
                        used solely for legitimate business operations, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                        <li>
                            Connecting you directly with authorized property consultants and
                            advisors.
                        </li>
                        <li>
                            Scheduling site visits, legal registry discussions, and property
                            evaluations.
                        </li>
                        <li>
                            Sending updates regarding property status, new land releases, or
                            price evaluations via WhatsApp, phone, or email.
                        </li>
                        <li>
                            Improving our web platform, customer service experience, and digital
                            offerings.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "data-protection",
            icon: Lock,
            title: "3. Data Security & Storage",
            content: (
                <div className="space-y-3">
                    <p>
                        We implement robust administrative, technical, and physical security
                        measures to protect your personal data from unauthorized access,
                        disclosure, alteration, or destruction.
                    </p>
                    <p>
                        Your inquiry submissions are transmitted securely and stored in encrypted
                        database environments. Access is strictly restricted to verified internal
                        staff and property advisors handling your inquiry.
                    </p>
                </div>
            ),
        },
        {
            id: "third-party-sharing",
            icon: Server,
            title: "4. Third-Party Sharing & Disclosure",
            content: (
                <div className="space-y-3">
                    <p>
                        <strong>We do not sell, rent, or trade your personal data</strong> to third-party advertisers or lead brokers.
                    </p>
                    <p>
                        Information may only be shared under the following limited circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                        <li>
                            <strong>Service Providers:</strong> Trusted third-party service
                            providers (e.g., SMS/WhatsApp message dispatch systems or hosting providers) under strict confidentiality agreements.
                        </li>
                        <li>
                            <strong>Legal Compliance:</strong> If required by Indian law, law
                            enforcement, legal proceedings, or government regulatory bodies.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "user-rights",
            icon: UserCheck,
            title: "5. Your Rights & Data Preferences",
            content: (
                <div className="space-y-3">
                    <p>You maintain full control over your personal information. You have the right to:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                        <li>
                            Request access to the personal data we hold about you.
                        </li>
                        <li>
                            Request correction or updating of inaccurate personal information.
                        </li>
                        <li>
                            Opt out of marketing communications or WhatsApp updates at any time.
                        </li>
                        <li>
                            Request the deletion of your contact records from our active database.
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <main className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden text-slate-800">
            {/* Background Decorative Ambient Glass Lighting */}
            <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-400/15 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-200/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-12">
                {/* Header Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mt-14 sm:mt-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xs">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>TRUST & COMPLIANCE</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">
                        Privacy Policy
                    </h1>

                    <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                        At The Great Empire Group, we value your privacy and trust. This policy outlines how we collect, use, and safeguard your personal details when using our services.
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 pt-2">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </motion.div>

                {/* Content Sections Container */}
                <div className="space-y-6">
                    {sections.map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <motion.section
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white/60 rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg shadow-amber-900/5 backdrop-blur-xl space-y-4"
                            >
                                <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-medium text-slate-900">
                                        {section.title}
                                    </h2>
                                </div>

                                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                    {section.content}
                                </div>
                            </motion.section>
                        );
                    })}
                </div>

                {/* Contact / Privacy Support Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-amber-500/10 via-white/80 to-amber-500/5 rounded-3xl p-6 sm:p-10 border border-amber-500/20 shadow-xl backdrop-blur-xl space-y-6"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">
                                Questions or Data Requests?
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 font-medium">
                                If you have questions regarding this Privacy Policy or wish to update/remove your details, contact our privacy desk:
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                        {/* Address */}
                        <div className="p-4 rounded-2xl bg-white/70 border border-white shadow-xs space-y-1">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
                                <MapPin className="w-4 h-4 text-amber-600" />
                                <span>Office Address</span>
                            </div>
                            <p className="text-xs text-slate-700 font-medium leading-snug">
                                52/42 Taskand Marg, Civil Lines, Prayagraj - 211001
                            </p>
                        </div>

                        {/* Email */}
                        <div className="p-4 rounded-2xl bg-white/70 border border-white shadow-xs space-y-1">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
                                <Mail className="w-4 h-4 text-amber-600" />
                                <span>Email Us</span>
                            </div>
                            <a
                                href="mailto:info@thegreatempiregroup.com"
                                className="text-xs text-slate-800 hover:text-amber-600 font-semibold transition-colors block break-all"
                            >
                                info@thegreatempiregroup.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="p-4 rounded-2xl bg-white/70 border border-white shadow-xs space-y-1">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
                                <PhoneCall className="w-4 h-4 text-amber-600" />
                                <span>Phone Support</span>
                            </div>
                            <a
                                href="tel:+917388481515"
                                className="text-xs text-slate-800 hover:text-amber-600 font-semibold transition-colors block"
                            >
                                +91 7388481515
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}