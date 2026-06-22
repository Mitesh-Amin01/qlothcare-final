'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const containerScale = useTransform(scrollYProgress, [0, 0.7, 1], [0.95, 1, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["3rem", "0rem"]);

    return (
        <section ref={containerRef} className="relative h-[140vh] w-full bg-clothcare-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8 overflow-hidden bg-clothcare-black">

                <motion.div
                    style={{ scale: containerScale, borderRadius }}
                    className="relative w-full h-full overflow-hidden bg-clothcare-black shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center"
                >
                    {/* Background Media */}
                    <motion.div
                        style={{ scale }}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                        <Image
                            src="/about/hero.png"
                            alt="Luxury garment preservation"
                            fill
                            className="object-cover opacity-60 grayscale-30 contrast-125 brightness-75"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-[#050505]/60 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Premium Typography Content */}
                    <motion.div
                        style={{ y: yContent, opacity: opacityContent }}
                        className="absolute inset-0 z-10 w-full h-full container mx-auto px-6 lg:px-16 py-10 sm:py-12 lg:py-16 flex flex-col justify-between"
                    >
                        {/* Top Nav/Header Area within Hero */}
                        <div className="flex justify-between items-center w-full mt-16 md:mt-10 lg:mt-0 shrink-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-6"
                            >
                                <span className="text-text-primary/80 text-xs font-bold tracking-[0.4em] uppercase hidden sm:block">Archive</span>
                                <div className="hidden sm:block w-12 h-px bg-bg-white/30"></div>
                                <span className="text-text-accent text-xs font-medium tracking-[0.4em] uppercase">Est. 2026</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-2 group cursor-pointer lg:hidden"
                            >
                                <span className="text-text-primary/50 text-[10px] font-bold tracking-widest uppercase mb-1">Scroll</span>
                                <ArrowDown size={14} className="text-text-primary group-hover:translate-y-1 transition-transform" />
                            </motion.div>
                        </div>

                        {/* Middle/Bottom Main Typography */}
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-0 mt-auto mb-6 sm:mb-10 w-full min-h-0">

                            <div className="max-w-5xl flex-1 min-w-0">
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="w-px h-16 sm:h-24 bg-linear-to-b from-clothcare-primary to-transparent mb-6 sm:mb-8 origin-top hidden md:block"
                                ></motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-medium text-text-primary leading-[0.9] tracking-tighter"
                                >
                                    {/* Ghost background text — capped in size and clipped to its own
                                        box so it can never push past the heading's bounds and get
                                        cut off by the section's overflow-hidden. */}
                                    <span
                                        aria-hidden
                                        className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none select-none z-0"
                                    >
                                        <span className="text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] font-bold text-text-primary/5 tracking-tighter whitespace-nowrap mix-blend-overlay">
                                            QLOTHCARE
                                        </span>
                                    </span>

                                    <span className="relative z-10 block">
                                        THE FINEST <br />
                                        <span className="italic font-light text-text-primary/50 pr-4">GARMENT</span> <br className="block md:hidden" />
                                        <span className="relative">
                                            CARE
                                            <div className="absolute -bottom-1 md:-bottom-3 left-0 w-full h-px md:h-[2px] bg-bg-white/20"></div>
                                        </span>
                                    </span>
                                </motion.h1>
                            </div>

                            {/* Right-side copy: visible from md up now, not just lg,
                                so it no longer leaves a void on tablets, and a
                                shorter variant fills the mobile gap below. */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="hidden md:flex flex-col items-start lg:items-end gap-8 lg:gap-12 pb-2 lg:pb-4 lg:max-w-xs xl:max-w-sm shrink-0"
                            >
                                <p className="text-text-primary/60 text-left lg:text-right text-base lg:text-lg xl:text-xl font-light leading-relaxed">
                                    A sanctuary for the world's most delicate fabrics. Built for those who demand <span className="text-text-primary font-medium">nothing less than perfection.</span>
                                </p>

                                <div className="flex items-center gap-6 text-text-primary hover:text-text-accent transition-colors cursor-pointer group">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Discover Our Journey</span>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-clothcare-primary transition-colors bg-bg-white/5 backdrop-blur-sm">
                                        <motion.div
                                            variants={{
                                                initial: { y: 0 },
                                                hover: { y: 5 }
                                            }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <ArrowDown size={18} />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mobile-only fallback so small screens don't feel empty
                                under the headline — short tagline + scroll cue. */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                                className="flex md:hidden items-center justify-between gap-4 pt-2 border-t border-white/10"
                            >
                                <p className="text-text-primary/60 text-sm font-light leading-relaxed max-w-[65%]">
                                    A sanctuary for delicate fabrics, built for perfection.
                                </p>
                                <div className="flex items-center gap-2 text-text-primary/70 shrink-0">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
                                    <ArrowDown size={14} />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;