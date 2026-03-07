'use client';
import React from 'react';
import { Leaf, Smartphone, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const TechnologyStack = () => {
    return (
        <section className="py-32 bg-gray-50 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">02 / Architecture</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 tracking-tight">How we process.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm mb-8 transition-transform group-hover:scale-110 duration-500">
                            <Leaf className="text-gray-900 group-hover:text-clothcare-primary transition-colors duration-500" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">Bio-Enzyme Solvents</h3>
                        <p className="text-gray-500 leading-relaxed">We utilize advanced, plant-based enzymatic cleaners that target stains at the molecular level without degrading natural fibers or harming the ecosystem.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm mb-8 relative transition-transform group-hover:scale-110 duration-500">
                            <div className="absolute inset-0 bg-clothcare-primary/10 rounded-full animate-ping opacity-20"></div>
                            <Smartphone className="text-gray-900 group-hover:text-clothcare-primary transition-colors duration-500" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">Digital Tracking</h3>
                        <p className="text-gray-500 leading-relaxed">Every garment is logged into our secure digital ledger. Track your items from pickup, through the cleaning stages, right back to your door with zero-loss guarantee.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm mb-8 transition-transform group-hover:scale-110 duration-500">
                            <Droplets className="text-gray-900 group-hover:text-clothcare-primary transition-colors duration-500" size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-4">Ozone Purification</h3>
                        <p className="text-gray-500 leading-relaxed">Our advanced water filtration system utilizes ozone technology to sanitize and soften the water, ensuring unparalleled brightness and fabric longevity.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;
