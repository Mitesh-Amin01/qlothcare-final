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
        <section className="bg-clothcare-black py-20 lg:py-40 relative z-10 border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-12 lg:mb-20">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-clothcare-primary/20 flex items-center justify-center border border-clothcare-primary/30 shadow-[0_0_30px_rgba(228,111,51,0.2)] shrink-0">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-clothcare-primary animate-pulse"></div>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-black text-text-primary tracking-tighter mb-1 lg:mb-2 leading-tight">Corporate Backbone.</h2>
                        <span className="text-[10px] lg:text-xs uppercase font-bold tracking-[0.2em] text-text-accent">Engineered for success</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ x: -30 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-text-primary/60 text-xl font-medium leading-relaxed max-w-md">
                            Your growth is the only variable we optimize. From day one, you tap into our centralized resource pool, built to scale across nationwide territories.
                        </p>
                        <br />
                        <p className="text-text-primary/40 text-lg font-medium leading-relaxed max-w-md hidden md:block">
                            We handle the engineering and customer acquisition. You handle the local operational excellence.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {supports.map((item, idx) => (
                         <motion.div
  key={idx}
  initial={{
    y: 30,
    borderColor: "rgba(255,255,255,0.1)",
  }}
  whileInView={{ y: 0 }}
  whileHover={{
    y: -8,
    borderColor: "#E46F33",
    boxShadow: "0 20px 40px rgba(228,111,51,0.15)",
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    y: {
      duration: 0.6,
      delay: idx * 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
    borderColor: {
      duration: 0.3,
    },
    boxShadow: {
      duration: 0.3,
    },
  }}
  className="bg-clothcare-black border rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-between"
>
                                <div className="w-16 h-16 rounded-2xl bg-bg-white/5 flex items-center justify-center mb-8 text-text-accent group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-text-primary tracking-tight mb-4 group-hover:text-text-accent transition-colors">{item.title}</h3>
                                    <p className="text-text-primary/50 text-sm leading-relaxed font-bold">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
