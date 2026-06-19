'use client';
import React from 'react';
import { motion } from 'motion/react';

const ServiceDeepDive = () => {
    return (
        <section className="py-24 bg-clothcare-darker text-text-primary border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clothcare-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-text-accent font-bold uppercase tracking-[0.2em] text-xs">Fabric Expertise</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mt-4 tracking-tight">Care tailored to every fabric.</h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-text-primary/60 mt-6 max-w-2xl text-lg font-light leading-relaxed">
                        No two garments are the same. That's why every fabric receives specialized treatment designed to protect its texture, color, and longevity.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: 'Cashmere & Wool', desc: 'Low-temperature hydro-cleansing using lanolin-rich detergents to restore natural oils and prevent fiber felting. Blocked to precise measurements to maintain shape.' },
                        { title: 'Silk & Satin', desc: 'Solvent-based spot treatment followed by tensionless steaming. We eliminate water-spots and maintain the fabric\'s signature luminescence and drape.' },
                        { title: 'Leather & Suede', desc: 'Hand-cleaned using specialized pH-balanced oils. Natural shedding is brushed out, and conditioning treatments are applied to restore suppleness and deep color depth.' },
                        { title: 'Technical Fabrics', desc: 'Athleisure and waterproof gear are cleaned using enzyme-free solutions to preserve DWR (Durable Water Repellent) coatings and maintain breathability.' }
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="p-8 border border-white/10 rounded-3xl bg-bg-bg-white/5 hover:bg-bg-bg-white/10 transition-colors duration-300 group"
                        >
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-text-accent transition-colors">{service.title}</h3>
                            <p className="text-text-primary/60 leading-relaxed font-light">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDeepDive;
