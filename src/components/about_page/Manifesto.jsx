'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const CHARGES = [
  {
    n: '01',
    word: 'Trusted Care',
    body: 'Every garment is individually inspected, professionally cleaned, and handled with the same attention we would give our own wardrobe.',
  },
  {
    n: '02',
    word: 'Advanced Cleaning',
    body: 'Fabric-specific cleaning methods, premium detergents, and modern equipment protect color, texture, and longevity.',
  },
  {
    n: '03',
    word: 'Reliable Delivery',
    body: 'On-time pickup and doorstep delivery with real-time updates, so your wardrobe is always where it needs to be.',
  },
];

const Manifesto = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Only animate horizontal drift (cheap, GPU-friendly transform).
    // Dropped the scale animation — animating scale on a ~32rem text
    // block forces re-rasterization of a huge layer every frame.
    const bgX = useTransform(scrollYProgress, [0, 1], ['4%', '-10%']);

    // Vertical progress rail fills as you scroll through the charges.
    const railHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

    return (
        <section
            ref={sectionRef}
            className="relative bg-clothcare-black overflow-hidden border-t border-white/5 selection:bg-clothcare-primary/30 selection:text-text-primary py-28 lg:py-40"
        >
            {/* Giant cropped backdrop word. Promoted to its own GPU layer via
                translateZ(0) + will-change so the drift is composited, not
                repainted. Text-stroke removed in favor of a plain low-opacity
                fill, which is dramatically cheaper to paint than stroked text. */}
            <motion.div
                style={{
                    x: bgX,
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
                aria-hidden
                className="absolute top-[6%] left-0 w-full pointer-events-none select-none z-0"
            >
                <span className="block text-[16rem] sm:text-[22rem] lg:text-[32rem] font-black leading-none tracking-tighter text-white/[0.06] whitespace-nowrap">
                    TRUST
                </span>
            </motion.div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Eyebrow row */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-14 lg:mb-20"
                >
                    <span className="font-mono text-[11px] text-clothcare-primary tracking-[0.3em]">§ 01</span>
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-text-primary/40 font-mono text-[11px] tracking-[0.3em] uppercase">The Manifesto</span>
                </motion.div>

                {/* Editorial opening line with drop cap */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl"
                >
                    <p className="text-2xl sm:text-3xl lg:text-4xl text-text-primary/90 font-light leading-[1.25] tracking-tight">
                        
                       For us, laundry isn't a routine chore—it's the responsibility of preserving the clothes you wear with confidence. Every fabric deserves expert attention, every customer deserves complete transparency, and every order deserves to be treated with care.
                    </p>
                </motion.div>

                {/* The Charges */}
                <div className="relative mt-24 lg:mt-32 max-w-5xl">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10 hidden md:block">
                        <motion.div
                            style={{ height: railHeight }}
                            className="w-full bg-clothcare-primary"
                        />
                    </div>

                    <ul className="md:pl-16 divide-y divide-white/5">
                        {CHARGES.map((c, i) => (
                            <motion.li
                                key={c.n}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                className="group py-10 lg:py-12 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10"
                            >
                                <span className="font-mono text-sm text-text-primary/30 tracking-widest shrink-0 sm:w-10">
                                    {c.n}
                                </span>
                                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight shrink-0 sm:w-[40%] group-hover:text-text-accent transition-colors duration-500">
                                    {c.word}
                                </h3>
                                <p className="text-text-primary/45 text-base lg:text-lg font-light leading-relaxed sm:pt-3">
                                    {c.body}
                                </p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Closing resolution line */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 lg:mt-32 max-w-3xl border-t border-white/10 pt-12"
                >
                    <p className="text-xl lg:text-2xl text-text-primary/70 font-light leading-relaxed">
                        <span className="text-text-primary font-medium">QlothCare combines professional garment care,</span>{' '}
                      modern technology, and dependable service to deliver a laundry experience built on trust—not shortcuts.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Manifesto;