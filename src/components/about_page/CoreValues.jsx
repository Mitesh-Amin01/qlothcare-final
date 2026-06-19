'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Target, Microscope, ShieldCheck } from 'lucide-react';

const CoreValues = () => {
    const values = [
        {
            icon: Leaf,
            title: "Ecological Integrity",
            desc: "Zero toxic solvents. 40% water reclamation. We operate at the cutting edge of green chemistry."
        },
        {
            icon: Microscope,
            title: "Cellular Precision",
            desc: "We analyze fabric weaves under spectral lighting before deciding on a treatment protocol."
        },
        {
            icon: Target,
            title: "Zero-Loss Logistics",
            desc: "RFID injection molding allows us to track your garment with 100% accuracy through the facility."
        },
        {
            icon: ShieldCheck,
            title: "Total Accountability",
            desc: "If an item isn't perfectly restored, we process it again on us. Uncompromising standards."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
    };

    return (
        <section className="py-24 lg:py-40 bg-clothcare-midnight relative overflow-hidden border-y border-clothcare-graySoft/10">
            {/* Soft decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clothcare-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-clothcare-primary/30 bg-clothcare-primary/10 text-clothcare-primary mb-6"
                    >
                        <ShieldCheck size={20} strokeWidth={1.75} />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="block text-clothcare-primary font-display font-semibold uppercase tracking-[0.25em] text-xs"
                    >
                        Core Tenets
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-display text-5xl lg:text-6xl font-black text-text-primary mt-4 tracking-tight leading-tight"
                    >
                        The Qlothcare Standards.
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative bg-clothcare-dark/30 backdrop-blur-sm border border-clothcare-graySoft/10 rounded-[2.5rem] p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:bg-clothcare-dark/50 hover:border-clothcare-primary/30"
                        >
                            {/* Hover effect background glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary/10 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 origin-center pointer-events-none" />

                            {/* Signature: spectral scan-light sweep */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                                <div className="absolute -inset-y-10 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-clothcare-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[260%] transition-all duration-[1100ms] ease-out" />
                            </div>

                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                                className="relative w-16 h-16 bg-clothcare-midnight/60 border border-clothcare-graySoft/15 rounded-[1.25rem] flex items-center justify-center text-clothcare-graySoft mb-8 transition-all duration-500 group-hover:bg-clothcare-primary group-hover:border-clothcare-primary group-hover:text-text-primary group-hover:shadow-clothcareSoft"
                            >
                                <item.icon size={30} strokeWidth={1.5} />
                            </motion.div>

                            <h3 className="relative font-display text-xl font-bold text-text-primary mb-4 group-hover:text-clothcare-primary transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="relative text-clothcare-graySoft/70 font-light leading-relaxed group-hover:text-clothcare-graySoft/90 transition-colors duration-500">
                                {item.desc}
                            </p>

                            {/* Animated line on hover */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 bg-clothcare-accent-gradient bg-clothcare-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-lg" />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default CoreValues;