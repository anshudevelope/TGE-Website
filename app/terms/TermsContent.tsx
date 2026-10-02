"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldAlert,
  Scale,
  Building2,
  CheckCircle2,
  HelpCircle,
  Clock,
  MapPin,
  Mail,
  PhoneCall,
  AlertTriangle,
} from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "October 1, 2026";

  const sections = [
    {
      id: "acceptance",
      icon: CheckCircle2,
      title: "1. Acceptance of Terms",
      content: (
        <div className="space-y-3">
          <p>
            By accessing or using the website and services provided by <strong>The Great Empire Group</strong> ("Company", "we", "our", or "us"), you agree to comply with and be bound by these Terms of Service.
          </p>
          <p>
            If you do not agree to these terms, please refrain from submitting inquiries, booking site visits, or using our real estate consultation services.
          </p>
        </div>
      ),
    },
    {
      id: "services-scope",
      icon: Building2,
      title: "2. Real Estate Advisory & Services",
      content: (
        <div className="space-y-3">
          <p>
            The Great Empire Group operates as a real estate advisement, property marketing, and land development facilitator primarily operating in Prayagraj and surrounding regions.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              <strong>Property Listings & Details:</strong> Plot dimensions, pricing estimations, project maps, and locality descriptions provided on our platform are for informational purposes and subject to field verification.
            </li>
            <li>
              <strong>Site Visits:</strong> Arranging a site visit or submitting a query does not constitute a legally binding sale agreement or property reservation until official documentation and token payments are executed.
            </li>
            <li>
              <strong>Legal Registries:</strong> Real estate transactions are subject to final government registration, stamp duty regulations, and verified title clearance.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "user-responsibilities",
      icon: Scale,
      title: "3. User Conduct & Inquiries",
      content: (
        <div className="space-y-3">
          <p>
            When utilizing our contact forms, lead submission forms, or contacting our representatives:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              You agree to provide accurate, current, and complete contact information (Name, WhatsApp Phone Number, Email).
            </li>
            <li>
              You agree not to submit fraudulent inquiries, impersonate another individual, or misuse our platform for unauthorized marketing.
            </li>
            <li>
              You consent to receiving communications via phone, email, or WhatsApp regarding your property request.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      icon: FileText,
      title: "4. Intellectual Property Rights",
      content: (
        <div className="space-y-3">
          <p>
            All content, visual layouts, branding assets, logos, site plans, graphics, and text published on this website are the intellectual property of The Great Empire Group unless otherwise stated.
          </p>
          <p>
            You may not copy, reproduce, distribute, or create derivative works from any website materials without prior written consent from us.
          </p>
        </div>
      ),
    },
    {
      id: "disclaimer-limitation",
      icon: AlertTriangle,
      title: "5. Disclaimers & Limitation of Liability",
      content: (
        <div className="space-y-3">
          <p>
            While we strive to maintain complete accuracy across all property listings and developments, all information is provided on an <em>"as is"</em> and <em>"as available"</em> basis.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              <strong>Availability:</strong> Property availability and rates are subject to change without prior notice depending on market conditions and prior sales.
            </li>
            <li>
              <strong>Third-Party Content:</strong> We are not responsible for delays or errors caused by government registration departments, financial institutions, or external legal verifications.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "jurisdiction",
      icon: ShieldAlert,
      title: "6. Governing Law & Jurisdiction",
      content: (
        <div className="space-y-3">
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the courts in <strong>Prayagraj, Uttar Pradesh</strong>.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F3EFEA] to-[#FAF8F5] py-16 lg:py-24 px-4 sm:px-8 overflow-hidden text-slate-800">
      {/* Background Decorative Ambient Glass Lighting */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-amber-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mt-14 md:mt-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-xs">
            <Scale className="w-4 h-4 text-amber-600" />
            <span>LEGAL AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">
            Terms of Service
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Please review the following rules and conditions governing your use of The Great Empire Group website and real estate services.
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

        {/* Legal Inquiry / Support Card */}
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
                Questions Regarding Our Terms?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                For legal inquiries or clarification regarding our terms and property agreements, reach out to our legal department:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {/* Address */}
            <div className="p-4 rounded-2xl bg-white/70 border border-white shadow-xs space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Head Office</span>
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
                <span>Direct Contact</span>
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