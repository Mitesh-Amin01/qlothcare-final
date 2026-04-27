'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Lock, Fingerprint } from 'lucide-react';

export default function FranchiseApplication() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    return (
        <section id="application" className="bg-white py-20 lg:py-40 relative z-10 overflow-hidden">

            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(228,111,51,0.08)_0%,transparent_50%)]"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex justify-center">

                <div className="w-full max-w-5xl bg-gray-50 border border-gray-200 rounded-4xl lg:rounded-[3rem] p-8 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden group">

                    {/* Orange Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-clothcare-primary via-orange-400 to-clothcare-primary"></div>

                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">

                        {/* Left Context */}
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white text-clothcare-primary flex items-center justify-center mb-6 lg:mb-8 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-500 shrink-0">
                                <Fingerprint size={32} />
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-black text-black mb-4 lg:mb-6 tracking-tighter leading-tight">Initialize Protocol.</h2>
                            <p className="text-gray-500 font-medium text-lg leading-relaxed mb-8 lg:mb-10">
                                Submit your operational territory request. Verified applications are moved to board review within 48 hours.
                            </p>

                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-black uppercase tracking-widest border border-green-200 self-start">
                                <Lock size={14} /> 256-bit Encrypted
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-3">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full flex flex-col justify-center items-center text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-inner"
                                >
                                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                                        <div className="absolute inset-0 border border-green-300 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                                        <Lock size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black text-black mb-4 tracking-tighter">Transmission Secured.</h3>
                                    <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-sm mx-auto">
                                        Your data packet has been encrypted and logged. Our expansion engineers will contact you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm transition-all duration-500">

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Legal Identifier</label>
                                            <input suppressHydrationWarning type="text" required placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black text-lg focus:outline-none focus:border-clothcare-primary focus:ring-4 focus:ring-clothcare-primary/10 transition-all font-medium placeholder:text-gray-300" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Comms Channel</label>
                                            <input suppressHydrationWarning type="tel" required placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black text-lg focus:outline-none focus:border-clothcare-primary focus:ring-4 focus:ring-clothcare-primary/10 transition-all font-medium placeholder:text-gray-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Encrypted Address</label>
                                        <input suppressHydrationWarning type="email" required placeholder="john@enterprise.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black text-lg focus:outline-none focus:border-clothcare-primary focus:ring-4 focus:ring-clothcare-primary/10 transition-all font-medium placeholder:text-gray-300" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Target Sector</label>
                                            <input suppressHydrationWarning type="text" required placeholder="Navi Mumbai" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black text-lg focus:outline-none focus:border-clothcare-primary focus:ring-4 focus:ring-clothcare-primary/10 transition-all font-medium placeholder:text-gray-300" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Capital Deployment</label>
                                            <div className="relative">
                                                <select suppressHydrationWarning required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-black text-lg focus:outline-none focus:border-clothcare-primary focus:ring-4 focus:ring-clothcare-primary/10 transition-all font-medium appearance-none cursor-pointer">
                                                    <option value="" className="text-gray-400">Select Tier</option>
                                                    <option value="15-25" className="text-black">Tier 1: ₹15L - ₹25L</option>
                                                    <option value="25-40" className="text-black">Tier 2: ₹25L - ₹40L</option>
                                                    <option value="40+" className="text-black">Tier 3: ₹40L+</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            suppressHydrationWarning
                                            disabled={isSubmitting}
                                            className="w-full bg-clothcare-primary text-white py-6 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 transition-all hover:bg-clothcare-primaryDark disabled:opacity-50 shadow-[0_10px_30px_rgba(228,111,51,0.3)] hover:shadow-[0_20px_40px_rgba(228,111,51,0.4)] hover:-translate-y-1"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>Transmit Request <ArrowRight size={16} /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
