'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Linkedin, Twitter, Sparkles } from 'lucide-react';

const TheCraftsmen = () => {
    const team = [
       {
    name: "Rahul Patel",
    role: "Verified Customer",
    desc: "The pickup and delivery service is incredibly convenient. My clothes are always returned fresh, perfectly cleaned, and neatly packed."
  },
  {
    name: "Priya Shah",
    role: "Premium Member",
    desc: "I've trusted them with delicate garments for months. The attention to detail and consistency have been outstanding."
  },
  {
    name: "Amit Mehta",
    role: "Business Professional",
    desc: "Fast turnaround, professional service, and excellent communication. It has made managing my weekly laundry effortless."
  },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="py-24 lg:py-40 bg-clothcare-black text-text-primary relative overflow-hidden">
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
                        <span className="text-text-accent font-bold uppercase tracking-[0.2em] text-xs">04 / Client Voices</span>
                        <h2 className="text-4xl lg:text-6xl font-black mt-4 tracking-tight text-text-primary leading-tight">Trusted By Customers.</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-md text-text-primary/50 leading-relaxed font-light text-lg"
                    >
                       Thousands of customers trust us with their garments every day. Here's what they have to say about their experience.
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

                            <div className="relative bg-bg-white/5 border border-white/10 rounded-[2.5rem] p-10 h-full flex flex-col items-center text-center overflow-hidden hover:bg-bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl backdrop-blur-sm z-10">

                                <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary/20 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none origin-bottom-left"></div>



                                <h3 className="text-2xl font-bold text-text-primary mb-2">{member.name}</h3>
                                <p className="text-text-accent font-bold text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center justify-center gap-2 bg-clothcare-primary/10 px-4 py-1.5 rounded-full">
                                    <Sparkles size={12} />
                                    {member.role}
                                </p>

                                <p className="text-text-primary/50 text-sm leading-relaxed mb-8 grow font-light">
                                    {member.desc}
                                </p>

                               
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TheCraftsmen;
