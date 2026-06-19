'use client';
import React, { useRef } from 'react';
import { Sparkles, Zap, ShieldCheck, Smartphone, Droplets } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const QualityProcess = () => {
    // Outer wrapper controls how much scroll distance the "pin" lasts for.
    // h-[200vh] = 100vh for the pinned section itself + 100vh of extra scroll
    // distance during which the line fills up before the section releases.
    const wrapperRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"],
    });

    // Line grows over the first ~70% of the pinned scroll range, then holds
    // briefly at full width before the section unpins (feels less abrupt).
    const lineScaleX = useTransform(scrollYProgress, [0, 0.75], [0, 1], {
        clamp: true,
    });

    const steps = [
        {
            step: "01",
            title: "Collection",
            icon: <Smartphone size={24} />,
            desc: "Picked up from your doorstep at a time that suits you."
        },
        {
            step: "02",
            title: "Inspection",
            icon: <Sparkles size={24} />,
            desc: "Every item is assessed to determine the ideal care method."
        },
        {
            step: "03",
            title: "Expert Cleaning",
            icon: <Droplets size={24} />,
            desc: "Specialized treatments tailored to fabric type and condition."
        },
        {
            step: "04",
            title: "Finishing",
            icon: <Zap size={24} />,
            desc: "Professionally pressed, finished, and prepared for delivery."
        },
        {
            step: "05",
            title: "Quality Check",
            icon: <ShieldCheck size={24} />,
            desc: "A final inspection ensures every garment meets our standards."
        }
    ];

    // Each step's icon/label "activates" once the line has scrolled past it.
    const stepThresholds = steps.map((_, i) => (i / (steps.length - 1)) * 0.75);

    return (
        // Tall wrapper = pin (100vh) + scroll runway (100vh) for the line animation.
        <div ref={wrapperRef} className="relative h-[300vh]">
            <section className="sticky top-0 py-24 lg:py-32 bg-bg-white h-screen flex flex-col justify-center overflow-hidden border-y border-gray-100">
                {/* Background geometric accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-transparent to-clothcare-primary/2 pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/2 blur-3xl rounded-full -translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-24">
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
                            className="text-4xl lg:text-5xl md:text-6xl font-black text-text-dark mt-4 tracking-tight"
                        >
                           Care, perfected in five steps.
                        </motion.h2>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line - now driven by scroll progress, not whileInView */}
                        <div className="absolute top-10 left-[10%] w-[80%] h-[3px] bg-bg-soft/40 hidden md:block z-0">
                            <motion.div
                                style={{ scaleX: lineScaleX }}
                                className="h-full bg-clothcare-primary/30 origin-left"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
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
        <div className="relative flex flex-col items-center text-center group">
            <motion.div
                style={{ scale }}
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-bg-white border border-gray-100 rounded-2xl shadow-xl flex items-center justify-center text-text-dark mb-6 relative z-10 transition-colors duration-300"
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
            <div className="text-text-accent font-mono font-bold text-sm mb-3 px-3 py-1 bg-clothcare-primary/10 rounded-full">{item.step}</div>
            <h3 className="text-xl font-bold text-text-dark mb-2">{item.title}</h3>
            <p className="text-text-muted text-sm font-medium px-2">{item.desc}</p>

            {/* Pulse ring activates once the line reaches this step */}
            <motion.div
                style={{ opacity: isActiveOpacity }}
                className="absolute top-10 w-20 h-20 rounded-full -translate-y-1/2 z-0 pointer-events-none"
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