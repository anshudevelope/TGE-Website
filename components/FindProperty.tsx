import React, { useState, useEffect } from 'react';
import {
    Search,
    MapPin,
    Building2,
    IndianRupee,
    ShieldCheck,
    Award,
    Users,
    PhoneCall,
    CheckCircle2,
    ChevronRight,
    Sparkles,
    Home,
    LandPlot,
    Store,
    ArrowRight,
    Clock,
    Car
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FindProperty() {
    const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'plots' | 'commercial'>('buy');

    // Search Form State
    const [locality, setLocality] = useState('');
    const [propertyType, setPropertyType] = useState('All');
    const [budget, setBudget] = useState('Any');

    // Lead Form State
    const [leadForm, setLeadForm] = useState({
        name: '',
        phone: '',
        requirement: 'Buy Property'
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Animated Counter Logic
    const [stats, setStats] = useState({ happyFamilies: 0, propertiesSold: 0, activeListings: 0 });

    useEffect(() => {
        const duration = 2000;
        const steps = 50;
        const intervalTime = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setStats({
                happyFamilies: Math.floor(progress * 1500),
                propertiesSold: Math.floor(progress * 2200),
                activeListings: Math.floor(progress * 350)
            });

            if (step >= steps) {
                clearInterval(timer);
                setStats({ happyFamilies: 1500, propertiesSold: 2200, activeListings: 350 });
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!leadForm.name || !leadForm.phone) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormSubmitted(true);
        }, 1000);
    };

    const prayagrajLocalities = [
        'Civil Lines (Prime Core)',
        'Jhalwa (Near IIIT / Airport)',
        'Naini (Industrial & Express Highway)',
        'Katra (University & Market Hub)',
        'Jhusi (Shanti / Sangam Belt)',
        'Shantipuram & Shantipuram Colony',
        'Kalindipuram (ADA Developed)',
        'Tagore Town / George Town',
        'Teliyarganj & Phaphamau',
        'Preetam Nagar / Dhoomanganj'
    ];

    const propertyTypesMap = {
        buy: ['2 BHK Apartment', '3 BHK Luxury Flat', 'Independent House/Villa', 'Penthouse'],
        rent: ['1/2 BHK Flat', 'Commercial Space', 'Student PG/Hostel Near University', 'Full House'],
        plots: ['ADA Approved Residential Plot', 'Freehold Farm Land', 'Commercial Plot', 'Gated Colony Plot'],
        commercial: ['Retail Shop in Civil Lines', 'Office Space', 'Warehouse/Godown in Naini', 'Showroom Space']
    };

    const budgetOptionsMap = {
        buy: ['Under ₹30 Lakhs', '₹30 L - ₹60 L', '₹60 L - ₹1 Crore', '₹1 Crore+'],
        rent: ['Under ₹10,000/mo', '₹10k - ₹25k/mo', '₹25k - ₹50k/mo', '₹50k+/mo'],
        plots: ['Under ₹15 Lakhs', '₹15 L - ₹35 L', '₹35 L - ₹75 L', '₹75 Lakhs+'],
        commercial: ['Under ₹50 Lakhs', '₹50 L - ₹1.5 Cr', '₹1.5 Cr - ₹5 Cr', '₹5 Cr+']
    };

    return (
        <div className="relative min-h-[92vh] bg-[#0a192f] text-white flex flex-col justify-between overflow-hidden pt-6 pb-12 lg:py-16">

            {/* Background Image with Dark Gradient & Gold Glow Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
                    alt="Luxury Real Estate in Prayagraj"
                    className="w-full h-full object-cover object-center opacity-25 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 to-[#0a192f]/70" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-[#0a192f]" />

                {/* Shimmer Ambient Glows */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#c5a059]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">

                {/* Top Announcement Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 backdrop-blur-md text-[#d4af37] text-xs sm:text-sm font-medium mb-6 shadow-lg"
                >
                    <Sparkles className="w-4 h-4 text-[#c5a059] animate-pulse" />
                    <span>Prayagraj's #1 Most Trusted Real Estate Partner</span>
                    <span className="bg-[#c5a059] text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:inline-block">RERA Approved</span>
                </motion.div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Heading, Subtitle, Search Widget, and Badges */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">

                        {/* Hero Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                                Find Your Dream Space in <br className="hidden sm:inline" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c5a059]">
                                    Prayagraj (Allahabad)
                                </span>
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                                Discover verified residential plots, luxury apartments, and commercial hubs in <span className="text-white font-medium">Civil Lines, Jhalwa, Naini, Shantipuram</span> & key growth corridors with 100% legal clearance.
                            </p>
                        </motion.div>

                        { }
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#112240]/90 border border-slate-700/60 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md"
                        >
                            {/* Tabs header */}
                            <div className="flex flex-wrap gap-2 border-b border-slate-700/80 pb-3 mb-4">
                                {[
                                    { id: 'buy', label: 'Buy Property', icon: Home },
                                    { id: 'plots', label: 'Plots / Land', icon: LandPlot },
                                    { id: 'rent', label: 'Rent', icon: Building2 },
                                    { id: 'commercial', label: 'Commercial', icon: Store }
                                ].map((tab) => {
                                    const Icon = tab.icon;
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as any)}
                                            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                                                ? 'bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-slate-950 font-bold shadow-md scale-[1.02]'
                                                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                                                }`}
                                        >
                                            <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-[#c5a059]'}`} />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Search Inputs Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                                {/* Locality Selector */}
                                <div className="space-y-1">
                                    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                        <MapPin className="w-3 h-3 text-[#c5a059]" /> Locality
                                    </label>
                                    <select
                                        value={locality}
                                        onChange={(e) => setLocality(e.target.value)}
                                        className="w-full bg-slate-900/90 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                                    >
                                        <option value="">All Prayagraj Areas</option>
                                        {prayagrajLocalities.map((loc, idx) => (
                                            <option key={idx} value={loc} className="bg-slate-900 text-white">{loc}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Property Type Dropdown */}
                                <div className="space-y-1">
                                    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                        <Building2 className="w-3 h-3 text-[#c5a059]" /> Property Type
                                    </label>
                                    <select
                                        value={propertyType}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                        className="w-full bg-slate-900/90 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                                    >
                                        <option value="All">All Types</option>
                                        {propertyTypesMap[activeTab].map((type, idx) => (
                                            <option key={idx} value={type} className="bg-slate-900 text-white">{type}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Budget Dropdown */}
                                <div className="space-y-1">
                                    <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                                        <IndianRupee className="w-3 h-3 text-[#c5a059]" /> Budget
                                    </label>
                                    <select
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                        className="w-full bg-slate-900/90 border border-slate-700 text-white rounded-lg px-3 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                                    >
                                        <option value="Any">Any Budget</option>
                                        {budgetOptionsMap[activeTab].map((b, idx) => (
                                            <option key={idx} value={b} className="bg-slate-900 text-white">{b}</option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            {/* Search CTA Button */}
                            <div className="mt-4 pt-2">
                                <button
                                    onClick={() => {
                                        const query = `Locality: ${locality || 'All'}, Type: ${propertyType}, Budget: ${budget}, Mode: ${activeTab}`;
                                        alert(`Searching Great Empire Group Properties in Prayagraj:\n${query}`);
                                    }}
                                    className="w-full bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b38f46] text-slate-950 font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all shadow-lg cursor-pointer"
                                >
                                    <Search className="w-4 h-4 stroke-[2.5]" />
                                    <span>Search Verified Properties in Prayagraj</span>
                                </button>
                            </div>
                        </motion.div>

                        { }
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
                        >
                            {[
                                { title: 'RERA Approved', desc: '100% Regulated Deals', icon: ShieldCheck },
                                { title: '100% Legal Land', desc: 'Clear Title Guarantee', icon: CheckCircle2 },
                                { title: '10+ Years Trust', desc: 'In Prayagraj Region', icon: Award },
                                { title: 'Direct Owner Deals', desc: 'Zero Hidden Fees', icon: Users }
                            ].map((badge, idx) => {
                                const Icon = badge.icon;
                                return (
                                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-[#c5a059]/40 transition-colors">
                                        <div className="p-1.5 rounded-lg bg-[#c5a059]/20 text-[#d4af37] shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-100">{badge.title}</h4>
                                            <p className="text-[10px] text-slate-400 leading-tight">{badge.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                    </div>

                    { }
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-b from-[#112240] to-[#0a192f] border-2 border-[#c5a059]/40 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden"
                        >
                            {/* Subtle top ribbon */}
                            <div className="absolute top-0 right-0 bg-[#c5a059] text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md">
                                VIP Callback
                            </div>

                            <div className="mb-5">
                                <div className="flex items-center gap-2 text-[#c5a059] font-semibold text-xs tracking-wide uppercase">
                                    <PhoneCall className="w-4 h-4" /> Free Site Visit & Consultation
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                                    Connect With Local Experts
                                </h3>
                                <p className="text-xs text-slate-300 mt-1">
                                    Get personalized options in Civil Lines, Jhalwa, Naini & Shantipuram within 15 minutes.
                                </p>
                            </div>

                            {formSubmitted ? (
                                <div className="py-10 text-center space-y-3">
                                    <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white">Callback Scheduled!</h4>
                                    <p className="text-xs text-slate-300 max-w-xs mx-auto">
                                        Thank you <span className="text-[#c5a059] font-medium">{leadForm.name}</span>. Our Prayagraj real estate advisor will call you shortly at <span className="text-white font-medium">{leadForm.phone}</span>.
                                    </p>
                                    <button
                                        onClick={() => { setFormSubmitted(false); setLeadForm({ name: '', phone: '', requirement: 'Buy Property' }); }}
                                        className="text-xs text-[#c5a059] underline hover:text-white mt-2 cursor-pointer"
                                    >
                                        Submit another request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleLeadSubmit} className="space-y-4">

                                    {/* Full Name Field */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Rajesh Kumar"
                                            value={leadForm.name}
                                            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                                            className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
                                        />
                                    </div>

                                    {/* Phone Number Field */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-400">+91</span>
                                            <input
                                                type="tel"
                                                required
                                                maxLength={10}
                                                placeholder="98765 43210"
                                                value={leadForm.phone}
                                                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value.replace(/\D/g, '') })}
                                                className="w-full bg-slate-900/80 border border-slate-700 rounded-lg pl-12 pr-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a059] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Requirement Selector */}
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1">Your Requirement</label>
                                        <select
                                            value={leadForm.requirement}
                                            onChange={(e) => setLeadForm({ ...leadForm, requirement: e.target.value })}
                                            className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
                                        >
                                            <option value="Buy Residential Property">Buy Residential (Flat/Villa)</option>
                                            <option value="Buy Plot/Land in Prayagraj">Buy Plot / Land (Gated/Freehold)</option>
                                            <option value="Commercial Investment">Commercial / Retail Shop</option>
                                            <option value="Sell Property in Prayagraj">Sell My Property</option>
                                            <option value="Legal & Property Advisory">Free Legal & Site Visit Advisory</option>
                                        </select>
                                    </div>

                                    {/* Free Cab Site Visit Checkbox badge */}
                                    <div className="p-2.5 bg-slate-900/50 rounded-lg border border-slate-800 flex items-center gap-2 text-[11px] text-slate-300">
                                        <Car className="w-4 h-4 text-[#c5a059] shrink-0" />
                                        <span>Complimentary pickup & drop for Prayagraj site visits!</span>
                                    </div>

                                    {/* Submit CTA */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b38f46] text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span>Get Instant Callback & Free Site Visit</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1 mt-2">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                        100% Privacy Protected. No Spam Calls.
                                    </p>

                                </form>
                            )}

                        </motion.div>
                    </div>

                </div>

                { }
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-12 sm:mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <div className="space-y-1">
                        <p className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c5a059]">
                            {stats.propertiesSold.toLocaleString()}+
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">Properties Delivered</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-white">
                            {stats.happyFamilies.toLocaleString()}+
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">Happy Families in Prayagraj</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c5a059]">
                            {stats.activeListings}+
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">Verified Active Listings</p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-white">
                            100%
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">RERA & Legal Verification</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}