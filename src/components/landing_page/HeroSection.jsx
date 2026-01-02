'use client'

import React, { useState, useRef } from 'react';
import { ArrowRight, RefreshCcw, Play } from 'lucide-react';
import { motion } from 'motion/react';

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
    if(videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative w-full h-screen bg-clothcare-midnight overflow-hidden selection:bg-clothcare-primary selection:text-white">
      
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
        
        {/* SMART OVERLAY: 
            Fades in when video ends to darken the background 
            so White Text is readable.
        */}
        <motion.div 
          className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20"
          initial={{ opacity: 0 }}
          animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </div>


      {/* =======================================
          LAYER 2: HERO CONTENT
          (Aligns Text & Buttons Perfectly)
      ======================================= */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT SIDE: MASSIVE HEADLINE --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {introFinished && (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.95] tracking-tight drop-shadow-2xl">
                  The AI journey of <br />
                  <span className="block pl-2 lg:pl-0 text-white/90">your</span>
                  
                  {/* Outline / Stroke Text Effect */}
                  <span 
                    className="relative block text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/80 to-white/40 font-bold my-3 lg:my-5" 
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
                  >
                    value chain
                  </span>
                  
                  starts here
                </h1>
              </motion.div>
            )}
          </div>

          {/* --- RIGHT SIDE: SUBTEXT & BUTTONS --- */}
          {/* Aligned slightly lower to balance the huge headline */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-8 lg:mt-20">
             {introFinished && (
               <>
                <motion.p 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg drop-shadow-md"
                >
                  Harness the power of digital intelligence for the physical world. 
                  <br className="hidden md:block" />
                  Automate your logistics with precision.
                </motion.p>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full"
                >
                  {/* Primary CTA: Orange Background, White Text */}
                  <button className="group relative flex items-center gap-4 bg-clothcare-primary text-white rounded-full pl-8 pr-2 py-2 h-16 font-semibold transition-all hover:bg-clothcare-primaryDark shadow-lg shadow-orange-900/20 hover:shadow-orange-700/40 hover:scale-105 active:scale-95">
                    <span className="text-lg tracking-wide">Book a demo</span>
                    <span className="w-12 h-12 bg-white text-clothcare-primary rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowRight className="w-5 h-5 stroke-3" />
                    </span>
                  </button>

                  {/* Secondary CTA: Outline White */}
                  <button 
                    onClick={handleReplay}
                    className="group flex items-center gap-3 px-8 h-14 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all active:scale-95"
                  >
                    <RefreshCcw className="w-5 h-5 text-white/70 group-hover:text-white group-hover:-rotate-180 transition-transform duration-700" /> 
                    <span>Replay Intro</span>
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