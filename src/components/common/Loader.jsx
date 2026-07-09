'use client';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#fdfaf6] overflow-hidden"
        >
          {/* Generated Background Image */}
          <div className="absolute inset-0 select-none pointer-events-none opacity-30">
            <Image
              src="/loader_bg.png"
              alt="Loading Background"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Ambient Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e87722]/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2F343A]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Glowing Logo & Loading Ring Container */}
          <div className="relative flex flex-col items-center gap-6 z-10">
            {/* Pulsing Core */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer Rotating Segment Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-t-[#e87722] border-r-transparent border-b-[#e87722]/20 border-l-transparent"
              />

              {/* Inner Counter-Rotating Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-2 rounded-full border-2 border-b-[#2F343A] border-t-transparent border-l-[#2F343A]/20 border-r-transparent"
              />

              {/* Center Brand Icon */}
              <span className="text-xl font-bold text-[#e87722] tracking-wide select-none">QC</span>
            </div>

            {/* Status Message */}
            <div className="text-center">
              <h3 
                className="text-2xl font-normal text-[#2F343A] tracking-wider uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Qlothcare
              </h3>
              <p 
                className="text-xs text-[#778582] mt-1.5 tracking-[0.2em] uppercase font-medium"
              >
                Redefining Wardrobe Care
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
