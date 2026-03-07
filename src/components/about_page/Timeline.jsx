'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const Timeline = () => {
    const events = [
        {
            year: "2026",
            title: "The Frustration",
            desc: "Founded after our team's collective dissatisfaction with standard dry cleaning methods ruining archival designer pieces."
        },
        {
            year: "2027",
            title: "Lab Launch",
            desc: "Opened our first 10,000 sq ft bio-cleansing facility equipped with proprietary water filtration."
        },
        {
            year: "2028",
            title: "Robotic Ascendance",
            desc: "Integrated AI-driven fabric analysis and robotic sorting, reducing human error to 0.01%."
        },
        {
            year: "2029",
            title: "Global Standardization",
            desc: "Now the trusted garment preservation partner for over 50 luxury fashion houses worldwide."
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Animate the line drawing down based on scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 lg:py-40 bg-[#FAFAFA] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter"
                    >
                        Our Trajectory.
                    </motion.h2>
                </div>

                <div className="relative border-l-0 md:border-l-0">
                    {/* The Background Line */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gray-200"></div>

                    {/* The Animated Draw Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-linear-to-b from-clothcare-primary via-blue-500 to-transparent origin-top z-10"
                    ></motion.div>

                    <div className="space-y-16 lg:space-y-24">
                        {events.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                                className={`relative flex flex-col md:flex-row items-center cursor-default ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-300 z-20 shadow-sm transition-colors duration-500 hover:border-clothcare-primary hover:scale-150"></div>

                                <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white p-8 rounded-4xl shadow-xl border border-gray-100 hover:shadow-2xl hover:border-clothcare-primary/20 transition-all duration-300 group"
                                    >
                                        <span className="text-clothcare-primary font-black text-3xl md:text-4xl tracking-tighter group-hover:text-blue-600 transition-colors">{event.year}</span>
                                        <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4 group-hover:text-clothcare-primary transition-colors">{event.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-900 transition-colors">{event.desc}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
