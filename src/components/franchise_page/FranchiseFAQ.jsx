'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Command } from 'lucide-react';

export default function FranchiseFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "What is the exact territory protection provided?",
            a: "Qlothcare guarantees a strict 5KM radius exclusivity zone for each Flagship Hub. Drop-off kiosks can be placed within this zone by the franchisee to maximize local capture."
        },
        {
            q: "Do I need prior laundry industry experience?",
            a: "No. Our technology stack and automated machinery remove the need for specialized textile knowledge. Our 3-week Staff Academy trains your operators on the exact bio-enzyme protocols required."
        },
        {
            q: "Who handles the customer acquisition?",
            a: "While franchisees are encouraged to build local B2B relationships (hotels, gyms), Qlothcare runs a centralized digital performance marketing engine that funnels B2C orders directly to your hub via our app."
        },
        {
            q: "What is the timeline from signing to the first order?",
            a: "Typically 45 to 60 days. This covers real-estate finalization, equipment import, interior branding using our modular guidelines, and operator training."
        }
    ];

    return (
        <section className="bg-black py-40 relative z-10 border-t border-white/10">

            {/* Background glow for depth */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(228,111,51,0.1)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                <div className="text-center mb-24 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-clothcare-primary/20 text-clothcare-primary flex items-center justify-center mb-8 border border-clothcare-primary/30 rotate-12 shadow-[0_0_40px_rgba(228,111,51,0.2)]">
                        <Command size={28} className="-rotate-12" />
                    </div>
                    <h2 className="text-5xl font-black text-white mb-6 tracking-tighter font-display">Intelligence.</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-3xl overflow-hidden transition-all duration-500 ${openIndex === idx ? 'border-clothcare-primary/50 bg-[#111] shadow-[0_20px_40px_rgba(228,111,51,0.05)]' : 'border-white/10 bg-black hover:border-white/30 hover:bg-[#0A0A0A]'}`}
                        >
                            <button
                                suppressHydrationWarning
                                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                                className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                            >
                                <span className={`text-xl md:text-2xl font-black tracking-tight pr-8 transition-colors ${openIndex === idx ? 'text-white' : 'text-white/60'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border ${openIndex === idx ? 'bg-clothcare-primary text-white border-clothcare-primary shadow-lg rotate-90' : 'bg-white/5 text-white/40 border-white/10'}`}>
                                    {openIndex === idx ? <X size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 md:px-10 pb-10 text-white/50 leading-relaxed font-medium text-lg">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
