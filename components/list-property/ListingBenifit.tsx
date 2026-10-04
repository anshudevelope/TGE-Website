"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    FileText,
    MapPin,
    Zap,
    ShieldCheck,
    Headphones,
    Sliders
} from 'lucide-react';

interface BenefitCard {
    title: string;
    description: string;
    icon: React.ElementType;
}

const steps = [
    {
        number: '01',
        title: 'Fill the short form',
        description: 'Share basic details like property type, location, size and expected price.',
    },
    {
        number: '02',
        title: 'We review your listing',
        description: 'Our team checks the details and may call you to confirm.',
    },
    {
        number: '03',
        title: 'Get genuine enquiries',
        description: 'Your property goes live and interested buyers contact you through us.',
    },
];

const benefits: BenefitCard[] = [
    {
        title: 'Free to List',
        description: 'Post your property without any upfront listing charges.',
        icon: FileText,
    },
    {
        title: 'Local Buyer Reach',
        description: 'Get seen by buyers searching for property in Prayagraj.',
        icon: MapPin,
    },
    {
        title: 'Quick & Simple',
        description: 'A short form instead of long paperwork.',
        icon: Zap,
    },
    {
        title: 'Genuine Enquiries',
        description: 'Leads are screened before reaching you.',
        icon: ShieldCheck,
    },
    {
        title: 'Expert Support',
        description: 'Get pricing guidance and help with documentation.',
        icon: Headphones,
    },
    {
        title: 'Your Choice, Always',
        description: 'You decide the price, and you can edit or remove your listing anytime.',
        icon: Sliders,
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
        },
    },
};

export const ListingBenefit: React.FC = () => {
    return (
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* BLOCK 1: How It Works */}
                <div className="space-y-12">
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
                            How to List Your Property in Prayagraj for Free
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Get your property in front of thousands of active buyers in three seamless steps.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
                            >
                                {/* Connecting Line (Desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] right-[-40%] h-[2px] bg-gradient-to-r from-amber-400 to-slate-200 z-0" />
                                )}

                                {/* Numbered Circle Badge */}
                                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300 mb-6">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* BLOCK 2: Benefits Grid */}
                <div className="space-y-12">
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
                            Why List Your Property With The Great Empire Group?
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            We combine local experience with maximum visibility to give you a stress-free listing experience.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                                            <IconComponent className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {benefit.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ListingBenefit;