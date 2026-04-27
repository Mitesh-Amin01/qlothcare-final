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

    // Subtly shrink the padding and increase the border radius to create a "picture frame" that expands
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Instead of transforming padding directly (which can be janky), we scale the inner container
    const containerScale = useTransform(scrollYProgress, [0, 0.7, 1], [0.95, 1, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["3rem", "0rem"]);

    return (
        <section ref={containerRef} className="relative h-[140vh] w-full bg-[#050505]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4 md:p-8 overflow-hidden bg-[#050505]">

                <motion.div
                    style={{ scale: containerScale, borderRadius }}
                    className="relative w-full h-full overflow-hidden bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center"
                >
                    {/* Background Media */}
                    <motion.div
                        style={{ scale }}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                        {/* High-end editorial mood image */}
                        <Image
                            src="/about/hero.png"
                            alt="Luxury garment preservation"
                            fill
                            className="object-cover opacity-60 grayscale-30 contrast-125 brightness-75"
                            priority
                        />
                        {/* Elegant edge darkening */}
                        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-[#050505]/60 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Premium Typography Content */}
                    <motion.div
                        style={{ y: yContent, opacity: opacityContent }}
                        className="absolute inset-0 z-10 w-full h-full container mx-auto px-6 lg:px-16 py-12 lg:py-20 flex flex-col justify-between"
                    >
                        {/* Top Nav/Header Area within Hero */}
                        <div className="flex justify-between items-center w-full mt-16 md:mt-10 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-6"
                            >
                                <span className="text-white/80 text-xs font-bold tracking-[0.4em] uppercase hidden sm:block">Archive</span>
                                <div className="hidden sm:block w-12 h-px bg-white/30"></div>
                                <span className="text-clothcare-primary text-xs font-medium tracking-[0.4em] uppercase">Est. 2026</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                className="flex items-center gap-2 group cursor-pointer lg:hidden"
                            >
                                <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-1">Scroll</span>
                                <ArrowDown size={14} className="text-white group-hover:translate-y-1 transition-transform" />
                            </motion.div>
                        </div>

                        {/* Middle/Bottom Main Typography */}
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-0 mt-auto mb-10 w-full">

                            <div className="max-w-5xl flex-1">
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="w-px h-16 sm:h-24 bg-linear-to-b from-clothcare-primary to-transparent mb-8 origin-top hidden md:block"
                                ></motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-[9rem] font-medium text-white leading-[0.85] tracking-tighter relative"
                                >
                                    {/* Massive background ghost text for brand presence */}
                                    <span className="absolute -top-1/2 left-0 text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] font-bold text-white/5 tracking-tighter whitespace-nowrap pointer-events-none select-none z-0 mix-blend-overlay -translate-y-1/4">
                                        QLOTHCARE
                                    </span>

                                    THE FINEST <br />
                                    <span className="italic font-light text-white/50 pr-4">GARMENT</span> <br className="block md:hidden" />
                                    <span className="relative z-10">
                                        CARE
                                        <div className="absolute -bottom-1 md:-bottom-4 left-0 w-full h-px md:h-[2px] bg-white/20"></div>
                                    </span>
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="hidden lg:flex flex-col items-start lg:items-end gap-12 pb-4"
                            >
                                <p className="text-white/60 text-right text-lg xl:text-xl font-light leading-relaxed max-w-sm">
                                    A sanctuary for the world's most delicate fabrics. Built for those who demand <span className="text-white font-medium">nothing less than perfection.</span>
                                </p>

                                <div className="flex items-center gap-6 text-white hover:text-clothcare-primary transition-colors cursor-pointer group">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Discover Our Journey</span>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-clothcare-primary transition-colors bg-white/5 backdrop-blur-sm">
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

                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
