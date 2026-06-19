'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LegalLayout = ({ title, lastUpdated, children }) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="min-h-screen bg-white text-text-dark font-sans selection:bg-clothcare-primary/30 selection:text-text-accentDark">
            {/* Immersive Header Section */}
            <section className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center bg-clothcare-dark overflow-hidden">
                {/* Animated Mesh Gradients */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-clothcare-primary/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, -40, 0],
                            y: [0, 60, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[90%] bg-clothcare-primaryDark/10 rounded-full blur-[150px]"
                    />

                    {/* Noise patterns or subtle textures could go here */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>

                <motion.div
                    style={{ y: y1, opacity }}
                    className="container mx-auto px-6 relative z-10 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Legal Document
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-black text-text-primary mb-8 tracking-tighter leading-[0.9]">
                            {title.split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="inline-block mr-4 last:mr-0"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    {lastUpdated && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center justify-center gap-4 text-text-primary/50 text-sm font-medium"
                        >
                            <div className="w-8 h-[1px] bg-white/20"></div>
                            <span>REVISED {lastUpdated.toUpperCase()}</span>
                            <div className="w-8 h-[1px] bg-white/20"></div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
                >
                    <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-clothcare-primary rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* Content Section with Premium Typography */}
            <section className="relative z-20 py-24 lg:py-32 bg-white -mt-12 rounded-t-[3rem] lg:rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white">
                        {children}
                    </div>
                </div>
            </section>

            {/* Immersive CTA */}
            <footer className="py-24 bg-clothcare-dark text-text-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Need further clarification?</h3>
                    <p className="text-text-primary/60 text-lg mb-12 max-w-xl mx-auto">Our legal team and support specialists are here to help you understand your rights and our commitments.</p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact-us"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-clothcare-accent-gradient text-text-primary font-black rounded-2xl transition-all shadow-[0_15px_30px_rgba(228,111,51,0.3)] hover:shadow-[0_20px_40px_rgba(228,111,51,0.4)]"
                    >
                        Connect With Us
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </div>
            </footer>
        </div>
    );
};

export default LegalLayout;
