'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Cpu, Fingerprint } from 'lucide-react';

export default function FranchisePartners() {
    const partners = [
        { name: 'STRIPE', icon: <Fingerprint size={28} /> },
        { name: 'AWS', icon: <Cpu size={28} /> },
        { name: 'RAZORPAY', icon: <Zap size={28} /> },
        { name: 'ZOMATO', icon: <ShieldCheck size={28} /> },
    ];

    return (
        <section className="bg-black py-16 lg:py-24 border-b border-white/5 relative z-10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-clothcare-primary text-xs font-black uppercase tracking-[0.2em] mb-12">Enterprise Infrastructure Integrations</p>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-32">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center justify-center gap-3 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer text-white"
                        >
                            <span className="text-clothcare-primary">{partner.icon}</span>
                            <span className="font-display font-black text-2xl tracking-widest">{partner.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
