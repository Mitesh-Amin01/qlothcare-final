'use client';

import React from 'react';
import { Leaf, Smartphone, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const FEATURES = [
  {
    code: '01',
    icon: Leaf,
    title: 'Eco-Conscious Care',
    copy:
      'Biodegradable, plant-based enzymatic cleaners — gentle on every fiber, harder on nothing but the stain.',
  },
  {
    code: '02',
    icon: Smartphone,
    title: 'Precision Technology',
    copy:
      'Automated, world-class machinery calibrated for consistent quality and fabric longevity, order after order.',
  },
  {
    code: '03',
    icon: Droplets,
    title: 'Doorstep Convenience',
    copy:
      'Free pick-up and delivery, with same-day and next-day turnaround — your wardrobe, always within reach.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TechnologyStack() {
  return (
    <section className="relative py-32 bg-clothcare-black border-y border-clothcare-dark/60 overflow-hidden">

      {/* Background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-clothcare-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 text-clothcare-primary font-semibold uppercase tracking-[0.3em] text-xs">
            <span className="w-6 h-px bg-clothcare-primary/70" />
            Why Qlothcare
            <span className="w-6 h-px bg-clothcare-primary/70" />
          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Care you can{' '}
            <span className="text-clothcare-primary">
              count on.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURES.map(({ code, icon: Icon, title, copy }) => (
            <motion.div
              key={code}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                },
              }}
              style={{
                willChange: 'transform',
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                px-8
                pt-10
                pb-9
                transform-gpu
                transition-colors
                duration-500
                hover:border-clothcare-primary/50
                hover:bg-white/[0.05]
              "
            >
              {/* Watermark */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-white/[0.04] select-none transition-colors duration-500 group-hover:text-clothcare-primary/[0.08]">
                {code}
              </span>

              {/* Icon */}
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors duration-500">
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-white/70"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-semibold text-white tracking-tight">
                {title}
              </h3>

              {/* Divider */}
              <motion.div
                whileHover={{
                  width: 64,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="mb-6 h-px w-10 bg-clothcare-primary"
              />

              {/* Description */}
              <p className="leading-7 text-white/60">
                {copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}