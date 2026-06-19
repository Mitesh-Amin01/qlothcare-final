'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Droplets, Globe, Zap } from 'lucide-react';

const GlobalImpact = () => {
    return (
        <section className="py-24 lg:py-40 bg-bg-white relative overflow-hidden border-y border-gray-100">
            {/* Subtle background element */}
            <div className="absolute inset-0 bg-radial-[at_50%_0%] from-gray-50 to-transparent opacity-80 z-0"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-text-muted font-bold uppercase tracking-[0.2em] text-xs inline-block bg-bg-soft/20 px-4 py-1.5 rounded-full"
                    >
                        05 / Global Impact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                        className="text-5xl lg:text-7xl font-black text-text-dark mt-6 tracking-tighter leading-none"
                    >
                        Redefining the footprint.
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-bg-white rounded-[4rem] p-8 md:p-16 lg:p-24 border border-gray-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
                >

                    {/* Decorative Map BG with slow scale */}
                    <div className="absolute inset-0 opacity-[0.03] z-0 overflow-hidden rounded-[4rem]">
                        <Image
                            src="/services/map.png"
                            alt="Map"
                            fill
                            className="object-cover grayscale mix-blend-multiply"
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="flex flex-col items-center pt-8 md:pt-0 group cursor-default"
                        >
                            <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-text-primary transition-colors duration-500 shadow-sm group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
                                <Droplets size={36} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-text-dark mb-2 tracking-tighter group-hover:text-blue-600 transition-colors duration-500">40M+</h3>
                            <p className="text-sm font-bold text-text-muted uppercase tracking-widest mt-2">Gallons Saved</p>
                            <p className="text-text-muted text-base mt-6 font-light px-4 leading-relaxed group-hover:text-text-dark transition-colors duration-500">Our closed-loop filtration system reclaims water that traditional cleaners dump into the ocean.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.15 }}
                            className="flex flex-col items-center pt-16 md:pt-0 group cursor-default"
                        >
                            <div className="w-20 h-20 rounded-full bg-clothcare-primary/10 text-text-accent flex items-center justify-center mb-8 group-hover:bg-clothcare-primary group-hover:text-text-primary transition-colors duration-500 shadow-sm group-hover:shadow-[0_10px_30px_rgba(28,31,173,0.3)]">
                                <Globe size={36} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-text-dark mb-2 tracking-tighter group-hover:text-text-accent transition-colors duration-500">100%</h3>
                            <p className="text-sm font-bold text-text-muted uppercase tracking-widest mt-2">Solvent Free</p>
                            <p className="text-text-muted text-base mt-6 font-light px-4 leading-relaxed group-hover:text-text-dark transition-colors duration-500">PERC and toxic petrochemicals are completely eliminated from our facility and your clothing.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
                            className="flex flex-col items-center pt-16 md:pt-0 group cursor-default"
                        >
                            <div className="w-20 h-20 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-text-primary transition-colors duration-500 shadow-sm group-hover:shadow-[0_10px_30px_rgba(22,163,74,0.3)]">
                                <Zap size={36} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-text-dark mb-2 tracking-tighter group-hover:text-green-600 transition-colors duration-500">-60%</h3>
                            <p className="text-sm font-bold text-text-muted uppercase tracking-widest mt-2">Carbon Offset</p>
                            <p className="text-text-muted text-base mt-6 font-light px-4 leading-relaxed group-hover:text-text-dark transition-colors duration-500">Electric logistics fleets combined with low-temperature enzymatic cleaning cycles.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalImpact;
