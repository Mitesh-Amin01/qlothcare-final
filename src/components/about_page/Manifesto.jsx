'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Manifesto = () => {
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
    const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

    return (
        <section className="py-32 lg:py-56 bg-[#09090b] overflow-hidden relative border-t border-white/5 selection:bg-red-500/30 selection:text-white">

            {/* Background Parallax Typography Decoration */}
            <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-center gap-12 opacity-[0.02]">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-8">
                    {Array(5).fill("").map((_, i) => (
                        <h1 key={`r1-${i}`} className="text-[15rem] md:text-[25rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,1)] tracking-tighter leading-none select-none">
                            REWRITE THE RULES
                        </h1>
                    ))}
                </motion.div>
                <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-8">
                    {Array(5).fill("").map((_, i) => (
                        <h1 key={`r2-${i}`} className="text-[15rem] md:text-[25rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,1)] tracking-tighter leading-none select-none">
                            THE MANIFESTO
                        </h1>
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col">

                {/* Top Numbering and Line */}
                <div className="w-full flex justify-between items-start mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-6"
                    >
                        <div className="w-16 h-px bg-clothcare-primary"></div>
                        <span className="text-clothcare-primary font-bold uppercase tracking-[0.4em] text-xs">
                            01 / The Core Defect
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -45 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-14 h-14 rounded-full border border-white/10 items-center justify-center text-white bg-white/5 backdrop-blur-md hidden md:flex ring-4 ring-black shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    >
                        <Sparkles size={18} />
                    </motion.div>
                </div>

                {/* Main Statement */}
                <div className="max-w-6xl w-full mx-auto text-left relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight relative z-20"
                    >
                        The traditional laundry sector is <br className="hidden lg:block" />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 italic text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-400 to-yellow-500 pr-2">
                                chemically harsh,
                            </span>
                            {/* Animated Highlighting Stroke underneath */}
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                                className="absolute bottom-[10%] left-[-2%] w-[104%] h-[30%] bg-red-600/20 -z-10 origin-left skew-x-[-15deg] blur-sm rounded-full"
                            ></motion.span>
                        </span> <br className="hidden md:block" />
                        operationally archaic, <br className="hidden sm:block" /> and ecologically devastating.
                    </motion.h2>

                    {/* Gradient separator acting as a dynamic visual divider */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="w-full max-w-4xl h-px bg-linear-to-r from-red-500/50 via-clothcare-primary/30 to-transparent my-16 origin-left"
                    ></motion.div>

                    {/* Lower Text Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pl-0 md:pl-20 border-l border-white/5 ml-4 md:ml-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="absolute -left-10 md:-left-[90px] top-1 w-6 h-6 rounded-full bg-[#09090b] border-2 border-clothcare-primary/50 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-clothcare-primary rounded-full"></div>
                            </div>
                            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                                We founded Qlothcare to fundamentally <span className="text-white font-medium">rewrite the rules</span> of garment maintenance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative md:pt-16"
                        >
                            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
                                By replacing toxic industrial solvents with biodegradable bio-enzymes and implementing aerospace-grade logistics, we're building the infrastructure for the <span className="text-white font-medium italic border-b border-clothcare-primary/50 pb-1 hover:text-clothcare-primary transition-colors cursor-crosshair">sustainable wardrobe of the future.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Removed shadow gradients to create a hard cut into the next white section */}

        </section>
    );
};

export default Manifesto;
