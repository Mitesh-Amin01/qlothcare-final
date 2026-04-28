'use client'

import React, { useState, useRef } from 'react';
import { ArrowRight, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function HeroSection() {
  const [introFinished, setIntroFinished] = useState(false);
  const videoRef = useRef(null);

  // Called when video finishes playing
  const handleVideoEnd = () => {
    setIntroFinished(true);
  };

  // Function to replay the experience
  const handleReplay = () => {
    setIntroFinished(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    // Changed h-screen to min-h-dvh for better mobile browser support (address bar handling)
    <section className="relative w-full min-h-dvh bg-clothcare-midnight overflow-hidden selection:bg-clothcare-primary selection:text-white flex flex-col">

      {/* =======================================
          LAYER 1: BACKGROUND VIDEO
          (Stays visible as the base layer)
      ======================================= */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          {/* Ensure this path is correct based on your public folder */}
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>

        {/* SMART OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20"
          initial={{ opacity: 0 }}
          animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </div>


      {/* =======================================
          LAYER 2: HERO CONTENT
      ======================================= */}
      <div className="relative z-10 w-full grow flex flex-col justify-center py-12 lg:py-0">

        {/* Adjusted padding and gap for responsiveness */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full">

          {/* --- LEFT SIDE: MASSIVE HEADLINE --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {introFinished && (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-left"
              >
                {/* Responsive Text Sizes: text-4xl on mobile -> text-8xl on desktop */}
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.1] sm:leading-[0.95] tracking-tight drop-shadow-2xl">
                  Your Clothes<br />
                  <span className="block pl-1 lg:pl-0 text-white/90">Deserve the</span>

                  {/* Outline / Stroke Text Effect */}
                  <span
                    className="relative block text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/80 to-white/40 font-bold my-2 sm:my-3 lg:my-5"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
                  >
                    BEST CARE.
                  </span>

                  Delivered.
                </h1>
              </motion.div>
            )}
          </div>

          {/* --- RIGHT SIDE: SUBTEXT & BUTTONS --- */}
          {/* Added mt-4 for mobile spacing, lg:mt-20 for desktop alignment */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-6 sm:space-y-8 mt-4 lg:mt-20">
            {introFinished && (
              <>
                <motion.p
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg drop-shadow-md"
                >
                  Experience India's most trusted laundry & dry cleaning service with free pickup & delivery at your doorstep.
                  <br className="hidden md:block" />
                  Premium care, simplified for you.
                </motion.p>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                  // Stack buttons vertically on mobile (flex-col), row on sm+ devices
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
                >
                  {/* Primary CTA */}
                  <Link href="/services" className="group relative flex items-center justify-between sm:justify-start gap-4 bg-clothcare-primary text-white rounded-full pl-6 sm:pl-8 pr-2 py-2 h-14 sm:h-16 font-semibold transition-all hover:bg-clothcare-primaryDark shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 hover:scale-[1.02] sm:hover:scale-105 active:scale-95 w-full sm:w-auto">
                    <span className="text-base sm:text-lg tracking-wide whitespace-nowrap">Explore Services</span>
                    <span className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-clothcare-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-3" />
                    </span>
                  </Link>

                  {/* Secondary CTA */}
                  <button
                    onClick={handleReplay}
                    className="group flex items-center justify-center sm:justify-start gap-3 px-8 h-12 sm:h-14 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all active:scale-95 w-full sm:w-auto"
                  >
                    <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white group-hover:-rotate-180 transition-transform duration-700" />
                    <span className="text-sm sm:text-base">Replay Intro</span>
                  </button>
                </motion.div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}