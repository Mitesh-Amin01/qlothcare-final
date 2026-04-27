'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Bell, Sparkles, Wand2 } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-clothcare-midnight text-white flex flex-col justify-center items-center px-6 relative overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-clothcare-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-clothcare-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Fabric Effect (Subtle) */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 opacity-10 pointer-events-none hidden lg:block"
      >
        <Wand2 size={120} className="text-white" />
      </motion.div>

      <div className="container max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-clothcare-primary/10 rounded-full border border-clothcare-primary/20 mb-10"
        >
          <Sparkles className="w-4 h-4 text-clothcare-primary" />
          <span className="text-xs font-black uppercase tracking-widest text-clothcare-primary">
            Perfecting the Experience
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-8xl font-black text-center mb-8 leading-tight tracking-tighter"
        >
          Something <br />
          <span className="text-transparent bg-clip-text bg-clothcare-accent-gradient">
            Big is Folding.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-clothcare-graySoft/60 text-center max-w-2xl mb-12 leading-relaxed"
        >
          We're fine-tuning our signature booking & payment systems to ensure 
          a software-level precision for your wardrobe. We'll be ready to 
          transform your laundry routine very soon.
        </motion.p>

        {/* Interactive Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto"
        >
          <div className="relative group min-w-[300px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-hidden focus:border-clothcare-primary transition-colors text-white text-lg placeholder:text-white/20"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-clothcare-primary hover:bg-clothcare-primaryDark text-white px-6 rounded-xl transition-all flex items-center gap-2 font-bold text-sm">
              <Bell size={16} />
              Notify
            </button>
          </div>

          <Link href="/">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all text-white font-bold group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>
        </motion.div>

        {/* Brand Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24"
        >
          <div className="flex items-center gap-3 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100 cursor-default">
            <span className="font-display text-2xl font-bold tracking-tight">
              Qlothcare<span className="text-clothcare-primary">.</span>
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
