'use client';
import React from 'react';
import { MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';

const LogisticsMap = () => {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
                >
                    <div>
                        <span className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">06 / Our Footprint</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 tracking-tight">Logistics Network.</h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-md">
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            We operate an expanding fleet of electric and hybrid vehicles dedicated to maintaining strict SLAs across major metropolitan zones. Check local coverage for immediate dispatch.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-50 border border-gray-100 rounded-[3rem] p-2 md:p-4 overflow-hidden shadow-sm flex flex-col lg:flex-row relative"
                >
                    <div className="w-full lg:w-1/3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-md relative z-10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-full flex items-center justify-center mb-6">
                                <Truck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct to Door</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">Next-day pickup is guaranteed within our active service sectors. Delivery is always complimentary for members.</p>

                            <div className="space-y-4 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center gap-3 text-sm font-medium text-gray-900"
                                >
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Active Zones: 48 Cities
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-3 text-sm font-medium text-gray-900"
                                >
                                    <div className="w-2 h-2 rounded-full bg-clothcare-primary"></div> Expanding: Q3 2026
                                </motion.div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <span>Fleet Status</span>
                            <span className="text-green-500">Operational</span>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 min-h-[400px] lg:min-h-full rounded-[2.5rem] overflow-hidden relative mt-2 lg:mt-0 lg:ml-2">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                            alt="Map footprint"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale mix-blend-multiply transition-transform duration-1000 hover:scale-105"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                                className="w-12 h-12 bg-black rounded-full text-white flex items-center justify-center shadow-2xl relative z-10"
                            >
                                <MapPin size={24} />
                            </motion.div>
                            <div className="w-6 h-6 bg-black/20 rounded-full animate-ping absolute z-0 delay-1000"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LogisticsMap;
