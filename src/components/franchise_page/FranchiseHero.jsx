'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, LayoutDashboard, Calendar, FileText, CheckCircle2, ChevronDown, Plus, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DashboardImage from '@/assets/pages/franchise_image/dashboard.png';

export default function FranchiseHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative min-h-[180vh] bg-black overflow-hidden flex flex-col items-center justify-start pt-32 pb-40">
            {/* Ultra-Premium Cinematic Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Core Deep Space Background */}
                <div className="absolute inset-0 bg-black"></div>

                {/* Massive Orange Glows */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-clothcare-primary/20 rounded-full blur-[180px] opacity-80 mix-blend-screen"></div>

                {/* Subtle White Stars/Noise */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                {/* Vertical Orange Light Rays */}
                <div className="absolute top-0 left-1/4 w-px h-[600px] bg-linear-to-b from-transparent via-clothcare-primary/30 to-transparent"></div>
                <div className="absolute top-20 right-1/3 w-px h-[400px] bg-linear-to-b from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Hero Copy */}
            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-10 container mx-auto px-6 text-center max-w-5xl flex flex-col items-center mt-10 md:mt-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-clothcare-primary text-clothcare-primary text-xs font-bold tracking-[0.2em] uppercase mb-10 bg-clothcare-primary/10 shadow-[0_0_20px_rgba(228,111,51,0.2)]">
                        <Sparkles size={16} />
                        Enterprise Partnership Portal
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1] tracking-tighter mb-8 font-display mx-auto max-w-4xl">
                        Own the <br className="hidden md:block" />
                        <span className="text-clothcare-primary">infrastructure</span> <br className="hidden md:block" />
                        of tomorrow.
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium leading-relaxed tracking-wide">
                        Deploy aerospace-grade logistics, bio-enzyme tech, and automated CRM systems in your territory. We engineer the backend. You dominate the market.
                    </p>

                    <Link href="#application">
                        <button className="group relative bg-clothcare-primary text-white font-black text-sm uppercase tracking-widest px-10 py-5 rounded-xl transition-all hover:bg-clothcare-primaryDark shadow-[0_0_40px_rgba(228,111,51,0.3)] hover:shadow-[0_0_60px_rgba(228,111,51,0.5)] overflow-hidden flex items-center justify-center gap-4 mx-auto w-[280px]">
                            <span className="relative z-10 flex items-center gap-3">Initialize <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" /></span>
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Application Mockup Image (Replacing CSS mockup for performance & aesthetics based on user feedback) */}
            <motion.div
                style={{ y: y2 }}
                initial={{ opacity: 0, y: 120, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-[95%] lg:w-[85%] max-w-[1900px] mx-auto px-4 sm:px-6 mt-32"
            >
                <div className="relative rounded-[2rem] bg-black border border-white/10 shadow-[0_0_150px_rgba(228,111,51,0.2)] overflow-hidden aspect-[4/3] md:aspect-[16/10] flex items-center justify-center">

                    {/* Placeholder for the user's dashboard image since we cannot easily create a perfect CSS replica of complex images. We will use a highly styled placeholder image here that strongly fits the theme */}
                    <Image
                        src={DashboardImage}
                        alt="Qlothcare Dashboard"
                        fill
                        className="object-cover opacity-80 mix-blend-luminosity"
                    />

                    {/* Orange Overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-clothcare-primary/30 to-transparent mix-blend-overlay"></div>

                    {/* UI Overlay */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="h-12 border-b border-white/20 bg-black/50 backdrop-blur-md flex items-center px-6">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mx-auto text-white font-bold text-sm tracking-widest uppercase">Operations Console</div>
                        </div>
                        <div className="flex-1 flex items-center justify-center p-10">
                            <div className="bg-black/80 backdrop-blur-xl border border-clothcare-primary p-8 rounded-2xl max-w-sm text-center shadow-[0_0_50px_rgba(228,111,51,0.3)]">
                                <Sparkles size={40} className="text-clothcare-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-black text-white mb-2">System Active</h3>
                                <p className="text-white/60 text-sm">Real-time hub monitoring engaged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
