'use client';
import React from 'react';
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
                    <motion.div variants={fadeUpVariants} className="lg:col-span-2 bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group h-[500px] flex flex-col justify-end">
                        <div className="absolute inset-0 z-0">
                            <img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1200&auto=format&fit=crop" alt="Wash and Fold" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10 w-full lg:w-2/3">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Wash & Fold</h3>
                            <p className="text-white/80 leading-relaxed text-lg">The weekly ritual, simplified. We sort by color and fabric, wash with eco-detergents, and return everything retail-folded and ready for your shelves.</p>
                        </div>
                    </motion.div>

                    {/* Bento 2: Dry Cleaning */}
                    <motion.div variants={fadeUpVariants} className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group h-[500px] flex flex-col justify-end">
                        <div className="absolute inset-0 z-0">
                            <img src="https://images.unsplash.com/photo-1582735689141-8600cd5c25db?q=80&w=800&auto=format&fit=crop" alt="Dry Cleaning" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20">
                                <Wind size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Dry Cleaning</h3>
                            <p className="text-white/80 leading-relaxed">Eco-friendly solvents that are tough on stains but gentle on fibers. Ideal for suits, silk, and formal wear.</p>
                        </div>
                    </motion.div>

                    {/* Bento 3: Household */}
                    <motion.div variants={fadeUpVariants} className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-10 flex flex-col justify-between group transition-colors hover:bg-gray-50">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
                                <Droplets size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Household Items</h3>
                            <p className="text-gray-500 leading-relaxed">Comforters, curtains, and linens treated to remove allergens and restore loftiness without the bulk of home machines.</p>
                        </div>
                    </motion.div>

                    {/* Bento 4: Pressing */}
                    <motion.div variants={fadeUpVariants} className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-10 flex flex-col justify-between group transition-colors hover:bg-gray-50">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Press & Finish</h3>
                            <p className="text-gray-500 leading-relaxed">Perfectly crisp collars and knife-edge creases. Our specialized pressing equipment restores the precise silhouette of your garments.</p>
                        </div>
                    </motion.div>

                    {/* Bento 5: Commercial */}
                    <motion.div variants={fadeUpVariants} className="bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem] p-10 flex flex-col justify-between group transition-colors hover:bg-gray-50">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Commercial SLA</h3>
                            <p className="text-gray-500 leading-relaxed">Reliable high-volume solutions for boutique hotels, gyms, and spas. Custom delivery schedules to keep your operations running perfectly.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CoreProtocols;
