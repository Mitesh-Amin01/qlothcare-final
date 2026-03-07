'use client';
import React from 'react';
import { motion } from 'motion/react';

const ArchiveVault = () => {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-clothcare-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-xs">03 / The Vault</span>
                    <h2 className="text-5xl lg:text-7xl font-bold mt-6 mb-8 tracking-tighter leading-tight">Couture <br />Preservation.</h2>
                    <p className="text-xl text-white/60 leading-relaxed mb-10 font-light">
                        Certain pieces require more than just cleaning—they require archiving. Our specialized restoration team handles wedding gowns, vintage leather, and bespoke tailoring with museum-grade techniques and acid-free boxing.
                    </p>

                    <ul className="space-y-6 border-t border-white/10 pt-10">
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-start gap-4"
                        >
                            <span className="text-clothcare-primary text-sm font-mono mt-1">01</span>
                            <div>
                                <h4 className="text-lg font-bold">Museum-Grade Boxing</h4>
                                <p className="text-white/50 text-sm mt-1">Acid-free tissue and hermetic sealing prevents yellowing over decades.</p>
                            </div>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex items-start gap-4"
                        >
                            <span className="text-clothcare-primary text-sm font-mono mt-1">02</span>
                            <div>
                                <h4 className="text-lg font-bold">Leather & Suede Restoration</h4>
                                <p className="text-white/50 text-sm mt-1">Rehydrating and color-matching scuffed or aged natural skins.</p>
                            </div>
                        </motion.li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative w-full aspect-4/5 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
                            alt="Couture dress preservation"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ArchiveVault;
