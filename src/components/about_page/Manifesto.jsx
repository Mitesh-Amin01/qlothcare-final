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

    // Giant background word drifts + scales very slightly — a literal
    // typographic backdrop the headline sits on top of and cuts into,
    // rather than ambient texture floating behind everything.
    const bgX = useTransform(scrollYProgress, [0, 1], ['4%', '-10%']);
    const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.98]);

    // Vertical progress rail fills as you scroll through the charges.
    const railHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

    return (
        <section
            ref={sectionRef}
            className="relative bg-clothcare-black overflow-hidden border-t border-white/5 selection:bg-clothcare-primary/30 selection:text-text-primary py-28 lg:py-40"
        >
            {/* Giant cropped backdrop word — bleeds off both edges, sits behind
                the headline at low opacity so the headline genuinely overlaps
                it rather than floating in front of separate "decoration". */}
            <motion.div
                style={{ x: bgX, scale: bgScale }}
                aria-hidden
                className="absolute top-[6%] left-0 w-full pointer-events-none select-none z-0"
            >
                <span className="block text-[16rem] sm:text-[22rem] lg:text-[32rem] font-black leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)] whitespace-nowrap">
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
                        <span className="float-left text-[5.5rem] sm:text-[7rem] leading-[0.8] font-black pr-3 pt-1 text-text-accent italic">
                            F
                        </span>
                       or us, laundry isn't a routine chore—it's the responsibility of preserving the clothes you wear with confidence. Every fabric deserves expert attention, every customer deserves complete transparency, and every order deserves to be treated with care.
                    </p>
                </motion.div>

                {/* The Charges — vertical indicted list with a fill-on-scroll rail,
                    replacing the previous two-column paragraph grid. Each item
                    carries genuine sequence (the brand's stated defects, in
                    order of how the manifesto resolves them), so numbering here
                    is informational, not decorative. */}
                <div className="relative mt-24 lg:mt-32 max-w-5xl">
                    {/* Static track + animated fill rail */}
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

                {/* Closing resolution line — answers the charges, sits apart as
                    the section's turn from problem to stance. */}
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