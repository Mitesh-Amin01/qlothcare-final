'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

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
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mt-6 mb-8 tracking-tighter leading-tight">Specialized <br />Care.</h2>
                    <p className="text-xl text-white/60 leading-relaxed mb-10 font-light">
                        Certain pieces require more than just cleaning—they require expert preservation. Our specialized team handles designer wear, wedding gowns, and heritage silks with the finest attention to detail.
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
                                <h4 className="text-lg font-bold">Designer Wear Care</h4>
                                <p className="text-white/50 text-sm mt-1">Expert handling of high-end brands and delicate embellishments to maintain original texture.</p>
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
                                <h4 className="text-lg font-bold">Silk & Saree Preservation</h4>
                                <p className="text-white/50 text-sm mt-1">Specialized folding and storage techniques to prevent permanent creasing and color fading.</p>
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
                    <div className="relative w-full aspect-4/5 rounded-4xl sm:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <Image
                            src="/services/archive.png"
                            alt="Couture dress preservation"
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ArchiveVault;
