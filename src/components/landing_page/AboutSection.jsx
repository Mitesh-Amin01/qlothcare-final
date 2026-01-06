'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Variants */
const sectionFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const leftStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const mediaReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const teamGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const teamCard = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const AboutSection = () => {

  return (
    <motion.section
      id="about"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-[#FAFAFA] font-sans overflow-hidden"
    >
      {/* Background Editorial Text */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none select-none"
        aria-hidden
      >
        <motion.h1
          initial={{ opacity: 0, x: -40, y: 20 }}
          whileInView={{ opacity: 0.07, x: -10, y: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] pl-5 font-bold text-[#0F172A] leading-none whitespace-nowrap"
        >
          About
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            variants={leftStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Label */}
            <motion.div variants={item} className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="h-px w-8 sm:w-12 bg-clothcare-primary" />
              <span className="text-[#0F172A] font-bold text-xs sm:text-sm tracking-widest uppercase">
                Our Story
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] leading-[1.1] mb-6 sm:mb-8"
            >
              The new standard for <br className="hidden sm:block" />
              <span className="text-clothcare-primary">fabric longevity.</span>
            </motion.h2>

            {/* Body Copy */}
            <motion.div variants={item} className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
              <p>
                Founded in 2023, Qlothcare began with a simple observation:
                <strong className="text-[#0F172A]"> clothing care hasn’t evolved in decades.</strong>
              </p>
              <p>
                We replaced harsh chemicals with biodegradable enzymes,
                window hours with real-time tracking, and inefficiency with
                intelligent systems — extending garment life while saving
                your most valuable asset: time.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="lg:col-span-7"
            variants={mediaReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">

              {/* Process Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="sm:row-span-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-xl sm:rounded-2xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <img src="/landingabout/about.png" alt="" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white/90 font-bold text-base sm:text-lg">Eco-Tech Facility</p>
                  <p className="text-white/70 text-xs sm:text-sm">State-of-the-art filtration</p>
                </div>
              </motion.div>

              {/* Stat Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-clothcare-accent-gradient p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white flex flex-col justify-between h-[200px] sm:h-[240px]"
              >
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">Locations</p>
                <p className="text-xl sm:text-2xl font-bold">Gandhinagar<br />Ahemdabad</p>
                <p className="text-white/60 text-xs sm:text-sm">24/7 time for wash & fold orders.</p>
              </motion.div>

              {/* Team Video */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative h-[200px] sm:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <video
                    src="/landingabout/preview.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
