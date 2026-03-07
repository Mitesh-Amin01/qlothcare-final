'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export default function FranchiseModels() {
    const models = [
        {
            title: 'Collection Hub',
            desc: 'High-footfall urban drop-off points with automated tracking.',
            investment: '₹12L - ₹15L',
            area: '200 - 300 Sq.Ft',
            roi: '10 Mo',
            features: [
                'Zero massive machinery required',
                'Drop & Go automated kiosks',
                'Minimal staff footprint',
            ],
            highlight: false,
        },
        {
            title: 'Flagship Center',
            desc: 'Complete bio-enzyme facility servicing multiple collection hubs.',
            investment: '₹35L - ₹45L',
            area: '800 - 1200 Sq.Ft',
            roi: '14 Mo',
            features: [
                'Full industrial aerospace machinery',
                'B2B commercial capacity built-in',
                'Maximum territorial revenue ceiling',
            ],
            highlight: true,
        }
    ];

    return (
        <section className="bg-black py-40 relative z-10 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Deployment Models.</h2>
                    <p className="text-white/60 text-xl font-medium leading-relaxed">
                        Select the infrastructure tier aligned with your capital deployment targets and real estate capacity.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {models.map((model, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 80, scale: 0.9, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative p-10 md:p-14 flex flex-col justify-between rounded-[3rem] transition-all duration-500 overflow-hidden ${model.highlight
                                ? 'bg-clothcare-primary shadow-[0_0_80px_rgba(228,111,51,0.2)] lg:scale-105 z-10'
                                : 'bg-[#111] border border-white/5 hover:border-white/20'
                                }`}
                        >
                            {model.highlight && (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>
                            )}

                            <div className="relative z-10 mb-12">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-4xl font-black tracking-tight ${model.highlight ? 'text-white' : 'text-white'}`}>{model.title}</h3>
                                    {model.highlight && (
                                        <span className="bg-white text-clothcare-primary text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-full shadow-lg">Priority Tier</span>
                                    )}
                                </div>
                                <p className={`text-lg font-medium ${model.highlight ? 'text-white/80' : 'text-white/40'}`}>{model.desc}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-12 relative z-10 bg-black/20 p-6 rounded-3xl backdrop-blur-sm">
                                <div>
                                    <div className={`text-[10px] uppercase tracking-widest font-black mb-1 ${model.highlight ? 'text-white/60' : 'text-white/30'}`}>Capital</div>
                                    <div className="text-2xl font-black text-white">{model.investment}</div>
                                </div>
                                <div>
                                    <div className={`text-[10px] uppercase tracking-widest font-black mb-1 ${model.highlight ? 'text-white/60' : 'text-white/30'}`}>Area</div>
                                    <div className="text-xl font-bold text-white">{model.area}</div>
                                </div>
                                <div>
                                    <div className={`text-[10px] uppercase tracking-widest font-black mb-1 ${model.highlight ? 'text-white/60' : 'text-white/30'}`}>Return</div>
                                    <div className="text-xl font-bold text-white">{model.roi}</div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-16 relative z-10 flex-1">
                                {model.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-4">
                                        <Check size={24} className={`shrink-0 ${model.highlight ? 'text-white' : 'text-clothcare-primary'}`} />
                                        <span className={`font-bold text-lg ${model.highlight ? 'text-white' : 'text-white/80'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`relative z-10 w-full rounded-2xl py-5 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-black transition-all group ${model.highlight
                                ? 'bg-black text-white hover:bg-white hover:text-black'
                                : 'bg-white/10 text-white hover:bg-clothcare-primary'
                                }`}>
                                Initialize Protocol <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
