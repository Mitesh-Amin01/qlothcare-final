"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CreditCard, Wallet, Smartphone, ShieldCheck, MapPin, Truck, Check, Droplets, Sparkles, Wind, TrendingUp, BarChart3, Clock, ChevronRight } from "lucide-react";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}
            className="max-w-4xl flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 md:mb-8">
              How Qlothcare <span className="text-clothcare-primary italic font-serif font-light pr-2">works.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              We've streamlined our process to deliver the finest attention to detail with absolute comfort and convenience.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 auto-rows-[1fr]">

          {/* Card 1: Connect / Schedule */}
          <motion.div
            variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-gray-50 rounded-4xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col relative group"
          >
            <div className="mb-8 relative z-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Book a Pickup</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Schedule a pickup at your convenience through our website or a quick call. We work around your schedule.
              </p>
            </div>

            {/* Inner UI Widget 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 grow flex flex-col relative z-10 will-change-transform">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Connect</p>

              <div className="grow flex flex-col items-center justify-center relative">
                {/* Central Hub */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} viewport={{ once: true }}
                  className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center relative z-20 shadow-sm"
                >
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-clothcare-primary"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-clothcare-primary/50"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-gray-300"></div>
                  </div>
                </motion.div>

                {/* Connection Lines (Simulated SVG) */}
                <svg className="absolute top-1/2 left-0 w-full h-1/2 z-10" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ transform: 'translateY(-10px)' }}>
                  <path d="M 50 10 L 50 30 L 15 30 L 15 60" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 50 10 L 50 30 L 50 60" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 50 10 L 50 30 L 85 30 L 85 60" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Bottom Nodes */}
                <div className="w-full flex justify-between px-2 mt-8 z-20">
                  <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="w-12 h-10 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center"><CreditCard className="w-5 h-5 text-gray-400" /></motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="w-12 h-10 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center"><Smartphone className="w-5 h-5 text-gray-400" /></motion.div>
                  <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="w-12 h-10 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center"><Wallet className="w-5 h-5 text-gray-400" /></motion.div>
                </div>
              </div>

              <Link href="/login" className="block mt-8">
                <motion.button
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}
                  className="w-full py-3.5 bg-clothcare-primary hover:bg-clothcare-primary/90 transition-colors text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 group/btn"
                >
                  Connect <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Process / Goals */}
          <motion.div
            variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-4xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col relative group"
          >
            <div className="mb-8 relative z-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Expert Processing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your garments are handled with care using world-class machinery and eco-friendly cleaning solutions.
              </p>
            </div>

            {/* Inner UI Widget 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 grow flex flex-col relative z-10 will-change-transform">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Care Tracker</p>

              <div className="space-y-3 grow flex flex-col justify-center">

                {/* Stage 1 */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
                  className="bg-gray-50 border border-gray-100 p-3 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Inspection & Sort</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-clothcare-primary"></div>
                      </div>
                      <span className="text-[9px] font-bold text-gray-400">Done</span>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 2 */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
                  className="bg-white border border-gray-100 shadow-sm p-3 rounded-2xl flex items-center gap-4 relative overflow-hidden"
                >
                  {/* Subtle active glow */}
                  <div className="absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-clothcare-primary/50 to-transparent"></div>

                  <div className="w-10 h-10 rounded-full bg-clothcare-primary/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-5 h-5 text-clothcare-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Deep Cleaning</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div initial={{ width: "0%" }} whileInView={{ width: "65%" }} transition={{ delay: 0.8, duration: 1 }} viewport={{ once: true }} className="h-full bg-clothcare-primary"></motion.div>
                      </div>
                      <span className="text-[9px] font-bold text-clothcare-primary">Active</span>
                    </div>
                  </div>
                </motion.div>

                {/* Stage 3 */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
                  className="bg-white border text-opacity-50 border-gray-100 p-3 rounded-2xl flex items-center gap-4 opacity-50"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                    <Wind className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">Press & Fold</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden"></div>
                      <span className="text-[9px] font-bold text-gray-300">Pending</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Card 3: Manage / Track / Delivery */}
          <motion.div
            variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-4xl p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col relative group"
          >
            <div className="mb-8 relative z-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Doorstep Delivery</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fresh, clean, and perfectly pressed clothes delivered back to your door within the promised timeframe.
              </p>
            </div>

            {/* Inner UI Widget 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 grow flex flex-col relative z-10 will-change-transform">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Status</p>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div><span className="text-[9px] font-bold text-gray-400">Active</span></div>
              </div>

              <div className="grow flex flex-col justify-between">

                {/* Simulated Chart/Map area */}
                <div className="flex items-end justify-between h-24 gap-2 mb-6 px-2">
                  {[40, 60, 30, 85, 50, 70, 45].map((height, i) => (
                    <div key={i} className="w-full bg-gray-50 rounded-t-lg relative group/bar cursor-pointer">
                      <motion.div
                        initial={{ height: 0 }} whileInView={{ height: `${height}%` }} transition={{ delay: 0.3 + (i * 0.1), type: "spring" }} viewport={{ once: true }}
                        className={`absolute bottom-0 w-full rounded-t-lg transition-colors ${i === 3 ? 'bg-clothcare-primary' : 'bg-gray-200 group-hover/bar:bg-clothcare-primary/50'}`}
                      ></motion.div>
                    </div>
                  ))}
                </div>

                {/* Status Footer */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">ETA</span>
                    <span className="text-sm font-bold text-gray-900 leading-none mt-1">15m</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-clothcare-primary" /> Out for delivery</p>
                    <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                      Your fresh clothes are on their way back to you, perfectly cleaned and ready to wear.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
