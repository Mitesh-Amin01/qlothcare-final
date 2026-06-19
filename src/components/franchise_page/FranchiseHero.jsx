'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, LayoutDashboard, Calendar, FileText, CheckCircle2, ChevronDown, Plus, ShieldCheck } from 'lucide-react';
import Button from '../ui/btn/Button';
import Link from 'next/link';
import Image from 'next/image';
import DashboardImage from '@/assets/pages/franchise_image/dashBoard.jpeg';

export default function FranchiseHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        initial: { y: 20 },
        animate: {
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative min-h-[120vh] lg:min-h-[180vh] bg-clothcare-black overflow-hidden flex flex-col items-center justify-start pt-24 sm:pt-32 lg:pt-40 pb-20 lg:pb-40">
            {/* Ultra-Premium Cinematic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Core Deep Space Background */}
                <div className="absolute inset-0 bg-clothcare-black"></div>

                {/* Massive Orange Glows - Simplified for performance */}
                <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-clothcare-primary/10 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>

                {/* Vertical Orange Light Rays */}
                <div className="absolute top-0 left-1/4 w-px h-[600px] bg-linear-to-b from-transparent via-clothcare-primary/15 to-transparent"></div>
                <div className="absolute top-20 right-1/3 w-px h-[400px] bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Hero Copy */}
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                style={{ y: y1, opacity, willChange: 'transform, opacity' }}
                className="relative z-10 container mx-auto px-6 text-center max-w-5xl flex flex-col items-center mt-10 md:mt-20"
            >
                <motion.div variants={itemVariants}>
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-clothcare-primary text-text-accent text-xs font-bold tracking-[0.2em] uppercase mb-10 bg-clothcare-primary/10 shadow-[0_0_20px_rgba(228,111,51,0.2)]">
                        <Sparkles size={16} />
                        Enterprise Partnership Portal
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-6xl lg:text-[6rem] font-black text-text-primary leading-none tracking-tighter mb-6 sm:mb-8 font-display mx-auto max-w-4xl px-2"
                >
                    Own the <br className="hidden sm:block" />
                    <span className="text-text-accent">infrastructure</span> <br className="hidden sm:block" />
                    of tomorrow.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-text-primary/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed tracking-wide"
                >
                    Deploy aerospace-grade logistics, bio-enzyme tech, and automated CRM systems in your territory. We engineer the backend. You dominate the market.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Link href="#application">
                        
                         <Button
            variant="primary"
            icon={ArrowRight}
            className="px-7 py-5 rounded-full"
            iconWrapperClassName="transition-all duration-300 group-hover:translate-x-1">
             Initialize
            </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Application Mockup Image */}
            <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: y2, willChange: 'transform' }}
                className="relative z-20 w-[96%] lg:w-[85%] max-w-[1900px] mx-auto px-4 sm:px-6 mt-20 lg:mt-32"
            >
                <div className="relative rounded-4xl bg-clothcare-black border border-white/10 shadow-[0_0_150px_rgba(228,111,51,0.15)] overflow-hidden aspect-4/3 md:aspect-16/10 flex items-center justify-center">

                    <Image
                        src={DashboardImage}
                        alt="Qlothcare Dashboard"
                        fill
                        className="object-contain bg-bg-dark rounded-2xl opacity-80"
                        priority
                    />

                    {/* Orange Overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-clothcare-primary/30 to-transparent mix-blend-overlay"></div>

                    {/* UI Overlay */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-12 border-b border-white/20 bg-clothcare-black/50 backdrop-blur-md flex items-center px-6">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mx-auto text-text-primary font-bold text-sm tracking-widest uppercase">Operations Console</div>
                        </div>
                       
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
