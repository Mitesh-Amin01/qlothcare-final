'use client';
import React from 'react';
import { Sparkles, Zap, ShieldCheck, Smartphone, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const QualityProcess = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#FAFAFA] min-h-[80vh] flex flex-col justify-center overflow-hidden relative border-y border-gray-100">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-transparent to-clothcare-primary/2 pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/2 blur-3xl rounded-full -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-clothcare-primary font-bold uppercase tracking-[0.2em] text-xs"
                    >
                        05 / Quality Assurance
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl md:text-6xl font-black text-gray-900 mt-4 tracking-tight"
                    >
                        The 5-Point Inspection.
                    </motion.h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute top-10 left-[10%] w-[80%] h-px bg-gray-200 hidden md:block z-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                            className="h-full bg-clothcare-primary/30 origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                        {[
                            { step: '01', title: 'Intake Profiling', icon: <Smartphone size={24} />, desc: 'Digital logging and condition report creation.' },
                            { step: '02', title: 'Stain Analysis', icon: <Sparkles size={24} />, desc: 'Microscopic fabric and blemish assessment.' },
                            { step: '03', title: 'Precision Wash', icon: <Droplets size={24} />, desc: 'Custom formulated enzyme treatment.' },
                            { step: '04', title: 'Hand Finishing', icon: <Zap size={24} />, desc: 'Steam processing and tensionless pressing.' },
                            { step: '05', title: 'Final Audit', icon: <ShieldCheck size={24} />, desc: 'Multi-point verification before protective packaging.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15 + 0.3,
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 15
                                }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-20 h-20 bg-white border border-gray-100 rounded-2xl shadow-xl flex items-center justify-center text-gray-900 mb-6 relative z-10 transition-all duration-300 group-hover:bg-clothcare-primary group-hover:text-white group-hover:border-clothcare-primary group-hover:shadow-[0_10px_30px_rgba(228,111,51,0.3)]"
                                >
                                    {item.icon}
                                </motion.div>
                                <div className="text-clothcare-primary font-mono font-bold text-sm mb-3 px-3 py-1 bg-clothcare-primary/10 rounded-full">{item.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm font-medium px-2">{item.desc}</p>

                                {/* Professional decorative animation rings */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [0, 0.15, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        delay: index * 0.4
                                    }}
                                    className="absolute top-10 w-20 h-20 bg-blue-500 rounded-full -translate-y-1/2 z-0 pointer-events-none mix-blend-multiply"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional Text at Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-24 text-center max-w-3xl mx-auto flex flex-col items-center"
                >
                    <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
                    <p className="text-lg lg:text-xl text-gray-600 font-medium italic leading-relaxed">
                        "Our obsessive attention to detail means every thread is inspected, every stain is meticulously targeted, and every garment returns to you in pristine, runway-ready condition."
                    </p>
                    <p className="mt-4 text-sm text-gray-400 font-bold uppercase tracking-widest">— Qlothcare Quality Guarantee</p>
                </motion.div>
            </div>
        </section>
    );
};

export default QualityProcess;
