'use client'

import React, { useState, useRef } from 'react';
import { ArrowRight, RefreshCcw } from 'lucide-react';
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
          (Stays visible at the end)
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
          {/* Ensure this path is correct */}
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay Gradient - Essential for text readability over video */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </div>


      {/* =======================================
          LAYER 2: HERO CONTENT (Overlays the video)
      ======================================= */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT SIDE: HEADLINE --- */}
          <div className="lg:col-span-7 overflow-hidden">
            {introFinished && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1], 
                  delay: 0.2 // Start shortly after overlay fades in
                }}
              >
                <h1 className="font-display text-5xl md:text-8xl font-medium text-white leading-[0.95] tracking-tight drop-shadow-lg">
                  The AI journey of <br />
                  <span className="block pl-2 lg:pl-0">your</span>
                  <span 
                    className="relative block text-transparent bg-clip-text bg-gradient-to-r from-clothcare-gray via-clothcare-graySoft to-clothcare-gray opacity-80 font-bold my-2" 
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
                  >
                    value chain
                  </span>
                  starts here
                </h1>
              </motion.div>
            )}
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pl-10 space-y-8 lg:mt-32 overflow-hidden">
             {introFinished && (
               <>
                <motion.p 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  className="text-xl text-white/90 font-light max-w-md leading-relaxed drop-shadow-md"
                >
                  Harness the power of digital intelligence for the physical world. 
                  Automate your logistics with precision.
                </motion.p>

                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <button className="group relative flex items-center gap-3 bg-clothcare-primary text-white rounded-full px-8 py-4 font-semibold transition-all hover:bg-clothcare-primaryDark hover:pr-10 shadow-clothcareSoft shadow-lg">
                    <span className="bg-white/20 rounded-full p-1">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    Book a demo
                  </button>

                  <button 
                    onClick={handleReplay}
                    className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-all group shadow-md"
                  >
                    <RefreshCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" /> Replay Intro
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