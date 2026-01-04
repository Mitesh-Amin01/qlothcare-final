'use client'

import React from 'react';
import { ShieldCheck, Leaf, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "Hygiene First Technology",
    description: "We don't mix loads. Your clothes are washed separately in sanitized machines using hospital-grade hygiene protocols.",
    icon: ShieldCheck,
    stat: "99.9%",
    statLabel: "Germ Removal",
    featured: true,
    color: "#E46F33"
  },
  {
    id: 2,
    title: "Eco-Smart Solvents",
    description: "Our GreenEarth® cleaning process is non-toxic, odorless, and gentle on sensitive skin and delicate fabrics.",
    icon: Leaf,
    stat: "0%",
    statLabel: "Toxic Chems",
    color: "#4CAF50"
  },
  {
    id: 4,
    title: "24h Express Turnaround",
    description: "Need it fast? Select our Express Service for same-day pickup and next-morning delivery at no extra cost.",
    icon: Clock,
    stat: "24h",
    statLabel: "Standard Time",
    color: "#9C27B0"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const bgOrbVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.05, 0.08, 0.05],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 font-sans overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Subtle Background Decor */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}
        variants={bgOrbVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}
        variants={bgOrbVariants}
        animate="animate"
        transition={{ delay: 2, duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Header Section - Clean Light Design */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Small Label */}
          <motion.div className="mb-6" variants={itemVariants}>
            <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#E46F33' }}>
              The Qlothcare Advantage
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
            variants={itemVariants}
            style={{ color: '#2F343A' }}
          >
            Engineered for
            <span style={{ color: '#E46F33' }}> perfection</span>.
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <div className="h-1 w-24 rounded-full" style={{ backgroundColor: '#E46F33' }}></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg lg:text-xl leading-relaxed"
            variants={itemVariants}
            style={{ color: '#778582' }}
          >
            We've replaced the traditional, manual laundry experience with a seamless,
            <br className="hidden lg:block" />
            tech-driven process that prioritizes quality and consistency.
          </motion.p>
        </div>

        {/* Bento Grid Layout - Clean Light Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((item) => {
            const Icon = item.icon;
            const isFeatured = item.featured;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                style={{
                  gridColumn: isFeatured ? 'span 1 lg:span 2' : 'span 1',
                  backgroundColor: '#FFFFFF',
                  borderColor: '#D1D3CF'
                }}
                className="relative border rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}></div>

                {/* Stat Badge - Top Right */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="border rounded-xl px-4 py-2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#D1D3CF'
                    }}>
                    <span className="text-2xl font-display font-bold tracking-tight block" style={{ color: '#2F343A' }}>
                      {item.stat}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: '#E46F33' }}>
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: '#FFFFFF50',
                      borderWidth: '1px',
                      borderColor: '#D1D3CF'
                    }}>
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4" style={{ color: '#2F343A' }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#778582' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export default WhyChooseUs;