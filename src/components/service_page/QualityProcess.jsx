'use client';
import React, { useRef } from 'react';
import { Sparkles, Zap, ShieldCheck, Smartphone, Droplets } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const QualityProcess = () => {
    // Outer wrapper controls how much scroll distance the "pin" lasts for, on
    // desktop only. h-[200vh] = 100vh for the pinned section itself + 100vh
    // of extra scroll distance during which the line fills up before the
    // section releases. On mobile the wrapper is just the section's own
    // height (no pin, no extra scroll runway) — see md:h-[300vh] below.
    const wrapperRef = useRef(null);

    // Tracks scroll progress across the wrapper relative to the viewport.
    // Animates naturally as the section enters the screen.
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start 40%", "center 50%"],
    });

    // Line grows as you scroll past it
    const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1], {
        clamp: true,
    });

    const steps = [
        {
            step: "01",
            title: "Collection",
            icon: <Smartphone size={22} className="sm:w-6 sm:h-6" />,
            desc: "Picked up from your doorstep at a time that suits you."
        },
        {
            step: "02",
            title: "Inspection",
            icon: <Sparkles size={22} className="sm:w-6 sm:h-6" />,
            desc: "Every item is assessed to determine the ideal care method."
        },
        {
            step: "03",
            title: "Expert Cleaning",
            icon: <Droplets size={22} className="sm:w-6 sm:h-6" />,
            desc: "Specialized treatments tailored to fabric type and condition."
        },
        {
            step: "04",
            title: "Finishing",
            icon: <Zap size={22} className="sm:w-6 sm:h-6" />,
            desc: "Professionally pressed, finished, and prepared for delivery."
        },
        {
            step: "05",
            title: "Quality Check",
            icon: <ShieldCheck size={22} className="sm:w-6 sm:h-6" />,
            desc: "A final inspection ensures every garment meets our standards."
        }
    ];

    // Each step's icon/label "activates" once the line has scrolled past it.
    const stepThresholds = steps.map((_, i) => i / (steps.length - 1));

    return (
        <div ref={wrapperRef} className="relative">
            <section className="py-16 sm:py-20 lg:py-32 bg-bg-white flex flex-col justify-center overflow-visible border-y border-gray-100">
                {/* Background geometric accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-transparent to-clothcare-primary/2 pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/2 blur-3xl rounded-full -translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-10 sm:mb-16 md:mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-text-accent font-bold uppercase tracking-[0.2em] text-xs"
                        >
                            Our Process
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mt-3 sm:mt-4 tracking-tight px-2"
                        >
                            Care, perfected in five steps.
                        </motion.h2>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line — horizontal on md+ screens */}
                        <div className="absolute top-9 sm:top-10 left-[10%] w-[80%] h-[3px] bg-bg-soft/40 hidden md:block z-0">
                            <motion.div
                                style={{ scaleX: lineScaleX }}
                                className="h-full bg-clothcare-primary/30 origin-left"
                            />
                        </div>
                        {/* Connecting Line — vertical on mobile/tablet, spans behind the stacked items only */}
                        <div className="absolute top-8 bottom-8 left-9 sm:left-10 w-[3px] bg-bg-soft/40 block md:hidden z-0">
                            <motion.div
                                style={{ scaleY: lineScaleX }}
                                className="w-full h-full bg-clothcare-primary/30 origin-top"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 md:gap-4 relative z-10">
                            {steps.map((item, index) => {
                                const threshold = stepThresholds[index];
                                return (
                                    <StepItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        scrollYProgress={scrollYProgress}
                                        threshold={threshold}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Additional Text at Bottom */}

                </div>
            </section>
        </div>
    );
};

const StepItem = ({ item, index, scrollYProgress, threshold }) => {
    // Icon "pops" and label fades in right as the connecting line reaches it.
    const scale = useTransform(
        scrollYProgress,
        [Math.max(0, threshold - 0.05), threshold + 0.03],
        [1, 1.12],
        { clamp: true }
    );
    const isActiveOpacity = useTransform(
        scrollYProgress,
        [Math.max(0, threshold - 0.05), threshold],
        [0, 1],
        { clamp: true }
    );

    return (
        <div className="relative flex flex-row md:flex-col items-center md:text-center text-left group gap-4 md:gap-0">
            <motion.div
                style={{ scale }}
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-bg-white border border-gray-100 rounded-2xl shadow-xl flex items-center justify-center text-text-dark md:mb-6 relative z-10 transition-colors duration-300"
            >
                {item.icon}
                {/* Highlight overlay fades in as the line reaches this step */}
                <motion.div
                    style={{ opacity: isActiveOpacity }}
                    className="absolute inset-0 rounded-2xl bg-clothcare-primary text-text-primary border border-clothcare-primary shadow-[0_10px_30px_rgba(228,111,51,0.3)] flex items-center justify-center"
                >
                    {item.icon}
                </motion.div>
            </motion.div>

            <div className="flex flex-col items-start md:items-center">
                <div className="text-text-accent font-mono font-bold text-xs sm:text-sm mb-2 sm:mb-3 px-3 py-1 bg-clothcare-primary/10 rounded-full">{item.step}</div>
                <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm font-medium md:px-2">{item.desc}</p>
            </div>

            {/* Pulse ring activates once the line reaches this step */}
            <motion.div
                style={{ opacity: isActiveOpacity }}
                className="hidden md:block absolute top-10 w-20 h-20 rounded-full -translate-y-1/2 z-0 pointer-events-none"
            >
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
                    className="w-full h-full bg-blue-500 rounded-full mix-blend-multiply"
                />
            </motion.div>
        </div>
    );
};

export default QualityProcess;