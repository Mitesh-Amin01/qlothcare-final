'use client';
import React from 'react';
import { motion } from 'motion/react';

const FoundersVision = () => {
    return (
        <section className="py-24 lg:py-40 bg-[#FAFAFA] relative overflow-hidden">
            {/* Subtle background element */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-gray-100 to-transparent skew-x-12 -z-10"
            ></motion.div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side - Staggered Reveal */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <motion.div
                            variants={{ hidden: { opacity: 0, scale: 0.8, rotate: -5 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", bounce: 0.4, duration: 1.5 } } }}
                            className="relative aspect-4/5 w-full max-w-md mx-auto lg:mx-0 rounded-[3rem] overflow-hidden shadow-2xl"
                        >
                            <motion.img
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1000&auto=format&fit=crop"
                                className="w-full h-full object-cover"
                                alt="Founder Vision"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Glassmorphism Badge */}
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } } }}
                                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
                            >
                                <p className="text-white font-medium text-lg xl:text-xl italic leading-relaxed">"A garment's true value isn't measured at retail, but in the decades it's worn."</p>
                            </motion.div>
                        </motion.div>

                        {/* Decorative background element animations */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 w-40 h-40 bg-clothcare-primary/10 rounded-full blur-2xl -z-10"
                        ></motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl -z-10"
                        ></motion.div>
                    </motion.div>

                    {/* Text Side - Staggered Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        className="w-full lg:w-1/2"
                    >
                        <motion.span
                            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
                            className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-4"
                        >
                            <div className="w-8 h-px bg-gray-400"></div>
                            02 / Origin
                        </motion.span>

                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                            className="text-4xl lg:text-6xl font-black text-gray-900 mb-10 tracking-tight leading-[1.1]"
                        >
                            Built from frustration, <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-clothcare-primary to-blue-500">designed for perfection.</span>
                        </motion.h2>

                        <div className="space-y-6 text-gray-500 text-lg lg:text-xl font-light leading-relaxed">
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                Qlothcare was born in 2026 after our founders realized that premium apparel was being degraded by the very services meant to preserve it. Industrial presses crushed lapels, harsh solvents bleached fibers, and the environmental cost was staggering.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                We spent two years collaborating with textile experts, chemists, and automation engineers to build a facility that treats clothes with the deference they deserve.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                Today, we don't just clean clothes. We restore, preserve, and archive them using the most advanced robotic sorting and bio-cleansing lab in the hemisphere.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { delay: 0.4, type: "spring" } } }}
                            className="mt-12 p-6 bg-white border border-gray-100 rounded-4xl shadow-xl inline-flex items-center gap-6 group hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-clothcare-primary rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <img src="/landingabout/team_member_ceo_1767511764298.png" alt="Founder" className="w-16 h-16 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white shadow-md relative z-10" />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold text-lg">Irfan Pathan</h4>
                                <p className="text-clothcare-primary font-bold tracking-widest uppercase text-xs mt-1">CEO & Co-Founder</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FoundersVision;
