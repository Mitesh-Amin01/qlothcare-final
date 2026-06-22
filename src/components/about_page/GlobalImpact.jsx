'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Zap } from 'lucide-react';

const stats = [
    {
        icon: Droplets,
        value: '40M+',
        label: 'Gallons Saved',
        copy: "Our closed-loop filtration system reclaims water that traditional cleaners dump into the ocean.",
    },
    {
        icon: ShieldCheck,
        value: '100%',
        label: 'Solvent Free',
        copy: 'PERC and toxic petrochemicals are completely eliminated from our facility and your clothing.',
    },
    {
        icon: Zap,
        value: '-60%',
        label: 'Carbon Offset',
        copy: 'Electric logistics fleets combined with low-temperature enzymatic cleaning cycles.',
    },
];

const EASE = [0.16, 1, 0.3, 1];

const GlobalImpact = () => {
    return (
        <section className="py-24 lg:py-36 bg-bg-white relative overflow-hidden border-y border-border-soft/70">
            {/* Ambient background — graySoft wash with a faint orange glow, not a generic radial */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-clothcare-primary/[0.04] blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-clothcare-graySoft/30 blur-3xl" />
            </div>

            <div className="container mx-auto px-2 sm:px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="inline-flex items-center gap-2 text-text-muted font-bold uppercase tracking-[0.2em] text-xs border border-border-soft px-4 py-1.5 rounded-full"
                    >
                      
                        Global Impact
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                        className="font-display text-5xl lg:text-7xl font-black text-text-dark mt-6 tracking-tighter leading-none"
                    >
                        Redefining the{' '}
                        <span className="text-clothcare-primary">footprint.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
                        className="text-text-muted text-base lg:text-lg font-light max-w-xl mx-auto mt-5 leading-relaxed"
                    >
                        Every load processed through our network meets a measurable
                        standard — verified at the facility level, not claimed on a label.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="bg-bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-20 border border-border-soft shadow-[0_30px_80px_-25px_rgba(11,13,16,0.08)] relative overflow-hidden"
                >
                   
                    
                    {/* Decorative map, tinted navy instead of plain gray */}
                    <div className="absolute inset-0 opacity-[0.025] z-0 overflow-hidden rounded-[2.5rem]">
                        <Image
                            src="/services/map.png"
                            alt="Map"
                            fill
                            className="object-cover grayscale mix-blend-multiply"
                        />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border-soft">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                                    className="flex flex-col items-center pt-10 md:pt-0 group cursor-default"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-clothcare-darker text-text-primary flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-clothcare-accent-gradient group-hover:shadow-clothcareSoft group-hover:-translate-y-1">
                                        <Icon size={28} strokeWidth={1.75} />
                                    </div>

                                    <h3 className="font-display text-4xl lg:text-5xl font-black text-text-dark tracking-tighter">
                                        {stat.value}
                                    </h3>
                                    <span className="block w-8 h-[3px] rounded-full bg-clothcare-primary mt-3 mb-4" />

                                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
                                        {stat.label}
                                    </p>
                                    <p className="text-text-muted text-[15px] mt-4 font-light px-4 leading-relaxed group-hover:text-text-dark transition-colors duration-500">
                                        {stat.copy}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalImpact;