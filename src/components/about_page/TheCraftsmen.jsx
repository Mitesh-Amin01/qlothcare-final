'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Sparkles } from 'lucide-react';

const TheCraftsmen = () => {
    const team = [
        {
            name: "Alexander Voss",
            role: "Master of Preservation",
            desc: "Former head of conservation at the Met Archives. Oversees all specialized garment handling and historical restorations.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Dr. Elena Rostova",
            role: "Chief of Bio-Chemistry",
            desc: "PhD in Organic Chemistry. Developed our proprietary enzyme-based cleaning solvent that revolutionized eco-laundry.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
        },
        {
            name: "Marcus Chen",
            role: "Head of Logistics",
            desc: "Engineered our zero-loss RFID tracking system. Ensures 99.9% on-time delivery across all major metropolitan zones.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 1.2 } }
    };

    return (
        <section className="py-24 lg:py-40 bg-[#050505] text-white relative overflow-hidden">
            {/* Background Texture with slow pan */}
            <motion.div
                animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            ></motion.div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-clothcare-primary font-bold uppercase tracking-[0.2em] text-xs">04 / The Assembly</span>
                        <h2 className="text-4xl lg:text-6xl font-black mt-4 tracking-tight text-white leading-tight">The Craftsmen.</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-md text-white/50 leading-relaxed font-light text-lg"
                    >
                        We employ a rare mix of textile artisans, industrial engineers, and green chemists to guarantee your garments are treated with unparalleled expertise.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -15, scale: 1.02 }}
                            transition={{ type: "spring", bounce: 0.4 }}
                            className="group h-full relative"
                        >
                            {/* Hover glow backing */}
                            <div className="absolute inset-0 bg-clothcare-primary/20 scale-95 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

                            <div className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-10 h-full flex flex-col items-center text-center overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl backdrop-blur-sm z-10">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary/20 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none origin-bottom-left"></div>

                                <motion.div
                                    className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 mb-8 z-10 group-hover:border-clothcare-primary transition-colors duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                                >
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-clothcare-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-2 bg-clothcare-primary/10 px-4 py-1.5 rounded-full">
                                    <Sparkles size={12} />
                                    {member.role}
                                </p>

                                <p className="text-white/50 text-sm leading-relaxed mb-8 grow font-light">
                                    {member.desc}
                                </p>

                                <div className="flex items-center gap-4 opacity-50 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 border-t border-white/10 pt-6 w-full justify-center">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clothcare-primary hover:shadow-[0_0_20px_rgba(28,31,173,0.5)] transition-all text-white">
                                        <Linkedin size={16} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clothcare-primary hover:shadow-[0_0_20px_rgba(28,31,173,0.5)] transition-all text-white">
                                        <Twitter size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TheCraftsmen;
