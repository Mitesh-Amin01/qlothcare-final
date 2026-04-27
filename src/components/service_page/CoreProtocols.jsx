'use client';
import React from 'react';
import Image from 'next/image';
import { Layers, Wind, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

// Shared variants
const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const CoreProtocols = () => {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">01 / Our Protocols</span>
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mt-4 tracking-tight">The Services.</h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Bento 1: Wash & Fold (Large) */}
                    <motion.div variants={fadeUpVariants} className="lg:col-span-2 bg-gray-50 border border-gray-100 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 overflow-hidden relative group h-[400px] sm:h-[500px] flex flex-col justify-end">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/services/wash_fold.png"
                                alt="Wash and Fold"
                                fill
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10 w-full lg:w-2/3">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Premium Laundry</h3>
                            <p className="text-white/80 leading-relaxed text-lg">Professional washing and drying with fabric-specific care for your everyday clothes. Gentle on fibers, tough on stains.</p>
                        </div>
                    </motion.div>

                    {/* Bento 2: Dry Cleaning */}
                    <motion.div variants={fadeUpVariants} className="bg-gray-50 border border-gray-100 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 overflow-hidden relative group h-[400px] sm:h-[500px] flex flex-col justify-end">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/services/dry_cleaning.png"
                                alt="Dry Cleaning"
                                fill
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                                <Wind size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Dry Cleaning</h3>
                            <p className="text-white/80 leading-relaxed">Specialized chemical cleaning for delicate fabrics. Ideal for suits, silk, and formal wear, ensuring shape and color preservation.</p>
                        </div>
                    </motion.div>

                    {/* Bento 3: Household */}
                    <motion.div variants={fadeUpVariants} className="bg-[#FAFAFA] border border-gray-100 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between group transition-colors hover:bg-gray-50">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
                                <Droplets size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Shoe Cleaning</h3>
                            <p className="text-gray-500 leading-relaxed">Expert cleaning and conditioning for all footwear. From leather conditioning to deodorizing, we restore your shoes to their original shine.</p>
                        </div>
                    </motion.div>

                    {/* Bento 4: Pressing */}
                    <motion.div variants={fadeUpVariants} className="bg-[#FAFAFA] border border-gray-100 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between group transition-colors hover:bg-gray-50">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Ironing</h3>
                            <p className="text-gray-500 leading-relaxed">Professional steam pressing for crisp, wrinkle-free clothes. Perfect creases and fabric protection for a polished, sharp look.</p>
                        </div>
                    </motion.div>

                    {/* Bento 5: Commercial */}
                    <motion.div variants={fadeUpVariants} className="bg-[#FAFAFA] border border-gray-100 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between group transition-colors hover:bg-gray-50">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Household & Linens</h3>
                            <p className="text-gray-500 leading-relaxed">Deep cleaning for comforters, curtains, and upholstery. We remove allergens and restore freshness to your home essentials.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CoreProtocols;
