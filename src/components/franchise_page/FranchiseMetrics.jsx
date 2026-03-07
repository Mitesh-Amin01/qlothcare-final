'use client';
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Sparkles, DollarSign } from 'lucide-react';

export default function FranchiseMetrics() {
    const stats = [
        { value: '45+', label: 'Active Command Hubs', icon: <MapPin size={32} /> },
        { value: '₹12Cr', label: 'Network Revenue Run-Rate', icon: <DollarSign size={32} /> },
        { value: '14 Mo', label: 'Average Capital Return', icon: <TrendingUp size={32} /> },
        { value: '99.9%', label: 'Infrastructure Uptime', icon: <Sparkles size={32} /> },
    ];

    return (
        <section className="bg-black py-32 relative z-10 overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,111,51,0.05)_0%,transparent_70%)]"></div>

            <div className="container mx-auto px-6 relative max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 80, scale: 0.9, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 flex flex-col justify-between items-center text-center group hover:border-clothcare-primary/50 transition-colors duration-500 shadow-xl"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-clothcare-primary/10 text-clothcare-primary flex items-center justify-center mb-8 group-hover:bg-clothcare-primary group-hover:text-white transition-colors duration-500">
                                {stat.icon}
                            </div>
                            <div className="text-5xl font-black text-white tracking-tighter mb-4 group-hover:text-clothcare-primary transition-colors duration-500">{stat.value}</div>
                            <div className="text-xs text-white/50 uppercase tracking-[0.1em] font-bold leading-relaxed">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
