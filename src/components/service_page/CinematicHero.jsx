'use client';
import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck } from 'lucide-react';
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

const CinematicHero = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center pt-24 pb-12 perspective-1000">
            {/* --- DYNAMIC BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src="/hero/fabric_bg.png"
                            alt="Full Fabric Background"
                            fill
                            priority
                            className="object-cover grayscale mix-blend-luminosity"
                        />
                    </motion.div>
                </div>

                {/* Floating Gradient Orbs */}
                <motion.div
                    animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.9, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-clothcare-primary/30 blur-[120px] mix-blend-screen pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -80, 60, 0], y: [0, 120, -40, 0], scale: [1, 1.5, 0.8, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[0%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen pointer-events-none"
                />

                {/* Heavy masking gradients to blend images into the dark background */}
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/80 to-[#0a0a0a] z-10" />
                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]/90 z-10" />

                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-solid.png")' }}></div>
            </div>

            {/* --- FOREGROUND CONTENT --- */}
            <div className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center mt-12">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-6xl mx-auto flex flex-col items-center"
                >
                    {/* Top Label */}
                    <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-8 sm:mb-16">
                        <div className="w-6 sm:w-8 h-px bg-clothcare-primary"></div>
                        <span className="text-clothcare-primary text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] glow-text">
                            India's Most Trusted Fabric Care
                        </span>
                        <div className="w-6 sm:w-8 h-px bg-clothcare-primary"></div>
                    </motion.div>

                    {/* Massive Typography */}
                    <motion.div variants={fadeUpVariants} className="relative w-full">
                        {/* Background ghost text */}
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold text-white/3 tracking-tighter whitespace-normal sm:whitespace-nowrap text-center pointer-events-none select-none z-0 mix-blend-overlay">
                            QLOTHCARE
                        </h1>

                        <h2 className="relative z-10 text-[2.5rem] xs:text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10.5rem] font-black text-white leading-[1.1] sm:leading-[0.80] tracking-tighter drop-shadow-2xl">
                            <span className="inline-block hover:scale-[1.02] transition-transform duration-500 hover:text-white/90 cursor-default">PREMIUM</span> <br className="sm:hidden" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/40 italic font-light inline-block hover:-rotate-2 transition-transform duration-500 cursor-default">CARE.</span> <br />
                            <span className="inline-block relative">
                                DELIVERED.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Glassmorphism Info Card */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="mt-12 sm:mt-24 w-full max-w-4xl relative group"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-clothcare-primary/30 via-blue-900/20 to-transparent blur-2xl -z-10 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="bg-white/3 backdrop-blur-3xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-2xl relative overflow-hidden transition-all duration-500 hover:bg-white/5">

                            {/* Card inner shine */}
                            <div className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>

                            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                                <Image
                                    src="/hero/couture.png"
                                    alt="Couture"
                                    width={80}
                                    height={80}
                                    className="w-12 h-12 sm:w-16 md:w-20 rounded-full border-2 border-white/10 object-cover shadow-lg"
                                />
                                <Image
                                    src="/hero/suit.png"
                                    alt="Suits"
                                    width={80}
                                    height={80}
                                    className="w-12 h-12 sm:w-16 md:w-20 rounded-full border-2 border-white/10 object-cover shadow-lg"
                                />
                                <div className="w-12 h-12 sm:w-16 md:w-20 rounded-full border-2 border-white/10 bg-clothcare-primary flex items-center justify-center text-white font-bold backdrop-blur-md shadow-[0_0_20px_rgba(228,111,51,0.3)]">
                                    <ShieldCheck size={20} className="sm:hidden" />
                                    <ShieldCheck size={24} className="hidden sm:block" />
                                </div>
                            </div>

                            <p className="text-sm sm:text-xl text-white/70 leading-relaxed font-light text-center md:text-left pl-0 md:pl-4 border-l-0 md:border-l border-white/10">
                                Experience <span className="text-white font-medium drop-shadow-md">hassle-free laundry</span> with free pickup and delivery. We combine world-class machinery with eco-friendly practices to restore your wardrobe.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/30 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default CinematicHero;
