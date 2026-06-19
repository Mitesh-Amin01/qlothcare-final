'use client';
import React from 'react';
import Image from 'next/image';
import { MapPin, Truck } from 'lucide-react';
import { motion } from 'motion/react';

const LogisticsMap = () => {
    return (
        <section className="py-24 lg:py-32 bg-bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
                >
                    <div>
                        <span className="text-text-muted font-bold uppercase tracking-[0.2em] text-xs">Our Footprint</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-text-dark mt-4 tracking-tight">Doorstep Convenience.</h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-md">
                        <p className="text-text-muted leading-relaxed text-sm md:text-base">
                            Free pick-up and delivery at your doorstep. We make sure that your requests are processed effectively and affordably, giving you more time for what matters.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-bg-soft/20 border border-gray-100 rounded-4xl sm:rounded-[3rem] p-1.5 sm:p-2 md:p-4 overflow-hidden shadow-sm flex flex-col lg:flex-row relative"
                >
                    <div className="w-full lg:w-1/3 bg-bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-md relative z-10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-bg-soft/40 text-text-dark rounded-full flex items-center justify-center mb-6">
                                <Truck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-text-dark mb-4">Pickup & Delivery</h3>
                            <p className="text-text-muted mb-8 leading-relaxed">Schedule a pickup at your convenience. Our team handles everything from your door and returns it fresh and clean.</p>

                            <div className="space-y-4 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-center gap-3 text-sm font-medium text-text-dark"
                                >
                                    <div className="w-2 h-2 rounded-full bg-status-success animate-pulse"></div> Active Zones: South Bopal & Beyond
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex items-center gap-3 text-sm font-medium text-text-dark"
                                >
                                    <div className="w-2 h-2 rounded-full bg-clothcare-primary"></div> Availability: Mon-Sun, 8AM-8PM
                                </motion.div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-text-muted uppercase tracking-widest">
                            <span>Fleet Status</span>
                            <span className="text-status-success">Operational</span>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 min-h-[300px] sm:min-h-[400px] lg:min-h-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden relative mt-2 lg:mt-0 lg:ml-2">
                        <Image
                            src="/services/map.png"
                            alt="Map footprint"
                            fill
                            className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale mix-blend-multiply transition-transform duration-1000 hover:scale-105"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
                                className="w-12 h-12 bg-clothcare-black rounded-full text-text-primary flex items-center justify-center shadow-2xl relative z-10"
                            >
                                <MapPin size={24} />
                            </motion.div>
                            <div className="w-6 h-6 bg-clothcare-dark/20 rounded-full animate-ping absolute z-0 delay-1000"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LogisticsMap;
