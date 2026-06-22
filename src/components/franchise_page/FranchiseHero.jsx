'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/btn/Button';
import Link from 'next/link';
import Image from 'next/image';
import DashboardImage from '@/assets/pages/franchise_image/dashBoard.jpeg';

// TODO: replace with real, live network numbers before shipping.
const stats = [
    { value: '120+', label: 'Territories engineered' },
    { value: '99.9%', label: 'Platform uptime' },
    { value: '<6 mo', label: 'Avg. launch timeline' },
];

export default function FranchiseHero() {
    const sectionRef = useRef(null);

    // Tie scroll tracking to this section only, not the whole page.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    // Smaller travel distances = less work per frame, still feels parallax-y.
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -25]);
    const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[120vh] lg:min-h-[180vh] bg-clothcare-black overflow-hidden flex flex-col items-center justify-start pt-25 sm:pt-2 lg:pt-2 pb-20 lg:pb-40"
        >
            {/* Background system — warm brand glow, cool depth glow, blueprint grid, hairlines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-clothcare-black" />

                {/* Fine engineering grid — reads as blueprint texture, very low opacity */}
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* Primary warm glow — brand signal */}
                <div
                    className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] opacity-40"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(228,111,51,0.28) 0%, rgba(228,111,51,0) 70%)',
                    }}
                />

                {/* Secondary cool glow — adds depth, a quiet "systems online" undertone */}
                <div
                    className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] opacity-30"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0) 70%)',
                    }}
                />

                <div className="absolute top-0 left-1/4 w-px h-[600px] bg-linear-to-b from-transparent via-clothcare-primary/15 to-transparent" />
                <div className="absolute top-20 right-1/3 w-px h-[400px] bg-linear-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Hero Copy */}
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                style={{ y: y1, opacity, willChange: 'transform, opacity' }}
                className="relative z-10 container mx-auto px-6 text-center max-w-5xl flex flex-col items-center mt-3 md:mt-20"
            >
                {/* Status eyebrow — frames the page as a live network, not a sales pitch */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-8 backdrop-blur-sm"
                >
                    
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-primary/70">
                        Franchise 
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-[3.25rem] sm:text-6xl lg:text-[6rem] font-black text-text-primary leading-[0.95] tracking-tighter mb-7 sm:mb-8 font-display mx-auto max-w-4xl px-2"
                >
                    Own the <br className="hidden sm:block" />
                    <span className="text-text-accent drop-shadow-[0_0_30px_rgba(228,111,51,0.35)]">
                        infrastructure
                    </span>{' '}
                    <br className="hidden sm:block" />
                    of tomorrow.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-text-primary/65 max-w-2xl mx-auto mb-10 font-medium leading-relaxed tracking-wide"
                >
                    Deploy aerospace-grade logistics, bio-enzyme tech, and automated CRM
                    systems in your territory. We engineer the backend. You dominate the
                    market.
                </motion.p>

               

                {/* Telemetry strip — the signature element. Real operating metrics framed
                    like a console readout, not a generic numbered badge. */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-3 w-full max-w-xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center px-3 sm:px-6 ${
                                i !== stats.length - 1 ? 'border-r border-white/10' : ''
                            }`}
                        >
                            <span className="font-mono text-2xl sm:text-3xl font-bold text-text-primary">
                                {stat.value}
                            </span>
                            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-text-primary/45 mt-1.5 text-center">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Application Mockup Image */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: y2, willChange: 'transform' }}
                className="relative z-20 w-[96%] lg:w-[85%] max-w-[1900px] mx-auto px-4 sm:px-6 mt-24 lg:mt-36"
            >
                <div className="relative">
                    {/* HUD corner brackets — aerospace/blueprint motif, used sparingly */}
                    <div className="hidden sm:block absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-clothcare-primary/40 z-30" />
                    <div className="hidden sm:block absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-clothcare-primary/40 z-30" />
                    <div className="hidden sm:block absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-clothcare-primary/40 z-30" />
                    <div className="hidden sm:block absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-clothcare-primary/40 z-30" />

                    <div className="relative rounded-4xl bg-clothcare-black border border-white/10 shadow-[0_0_150px_rgba(228,111,51,0.15)] overflow-hidden aspect-4/3 md:aspect-16/10 flex items-center justify-center">
                        {/* Slow animated scan-line along the top edge — ambient, not flashy */}
                        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden z-30">
                            <div className="scanline-sweep h-full w-1/3 bg-linear-to-r from-transparent via-clothcare-primary/80 to-transparent" />
                        </div>

                        <Image
                            src={DashboardImage}
                            alt="Qlothcare Dashboard"
                            fill
                            sizes="(max-width: 1024px) 96vw, 85vw"
                            className="object-contain bg-bg-dark rounded-2xl opacity-85"
                            priority
                        />

                        <div className="absolute inset-0 bg-linear-to-tr from-clothcare-primary/20 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />

                        {/* Console top bar — breadcrumb + live status, not just traffic-light dots */}
                        <div className="absolute inset-0 flex flex-col">
                            <div className="h-12 border-b border-white/10 bg-clothcare-black/60 backdrop-blur-sm flex items-center justify-between px-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="hidden sm:inline font-mono text-[11px] text-text-primary/40 tracking-wide">
                                        qlothcare/ops/territory-04
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-400/80">
                                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    Live
                                </div>
                            </div>
                        </div>

                        {/* Bottom system readout */}
                        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-text-primary/35 z-30">
                            <span>Sys.status: nominal</span>
                            <span>Region: na-west-04</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                .scanline-sweep {
                    animation: sweep 7s linear infinite;
                }
                @keyframes sweep {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(400%);
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .scanline-sweep {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}