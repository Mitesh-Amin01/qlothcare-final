'use client';
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, BookOpen, Megaphone, Wrench } from 'lucide-react';

export default function FranchiseSupport() {
    const supports = [
        { title: 'Location Intelligence', icon: <MapPin size={32} />, desc: 'AI-driven demographic analysis to secure the highest-yield real estate for your hub.' },
        { title: 'Digital Acquisition', icon: <Megaphone size={32} />, desc: 'Centralized performance marketing pumping localized leads directly into your catchment area.' },
        { title: 'Staff Academy', icon: <BookOpen size={32} />, desc: 'Rigorous 3-week training protocol for your operators covering bio-enzymes and customer service.' },
        { title: '24/7 Ops Engineering', icon: <Wrench size={32} />, desc: 'Direct hotline to our engineering team for immediate software troubleshooting or machine optimization.' },
    ];

    return (
        <section className="bg-black py-40 relative z-10 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex items-center gap-6 mb-20">
                    <div className="w-16 h-16 rounded-full bg-clothcare-primary/20 flex items-center justify-center border border-clothcare-primary/30 shadow-[0_0_30px_rgba(228,111,51,0.2)]">
                        <div className="w-8 h-8 rounded-full bg-clothcare-primary animate-pulse"></div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">Corporate Backbone.</h2>
                        <span className="text-xs uppercase font-bold tracking-[0.2em] text-clothcare-primary">Engineered for success</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-white/60 text-xl font-medium leading-relaxed max-w-md">
                            Your growth is the only variable we optimize. From day one, you tap into our centralized resource pool, built to scale across nationwide territories.
                        </p>
                        <br />
                        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md hidden md:block">
                            We handle the engineering and customer acquisition. You handle the local operational excellence.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {supports.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 60, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-clothcare-primary hover:shadow-[0_20px_40px_rgba(228,111,51,0.15)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-clothcare-primary group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white tracking-tight mb-4 group-hover:text-clothcare-primary transition-colors">{item.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-bold">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
