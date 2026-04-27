"use client";

import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, SlidersHorizontal, ToggleRight, CalendarClock, MessageSquare, Paperclip, Check, ChevronDown, CircleDot } from 'lucide-react';
import { motion } from 'motion/react';

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const WhyChooseUs = () => {
  const [sliderVal, setSliderVal] = useState(8);
  const [isRepeating, setIsRepeating] = useState(true);

  return (
    <section className="py-16 md:py-32 bg-gray-50 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}
            className="max-w-4xl flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 md:mb-8">
              A modern approach to <br className="hidden md:block" />
              <span className="text-clothcare-primary italic font-serif font-light pr-2">classic fabric care.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              We combine world-class machinery with eco-friendly practices to ensure your wardrobe receives the premium care it deserves.
            </p>
          </motion.div>
        </div>

        {/* 3x3 Modular Bento Grid */}
        <div className="bg-gray-200/50 p-2 sm:p-4 rounded-[2.5rem]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr md:auto-rows-[220px]"
          >

            {/* Widget 1: Search Bar */}
            {/* Widget 1: Search Bar (Left) */}
            <motion.div
              variants={slideInLeft}
              whileHover={{ y: -5 }}
              className="bg-white rounded-4xl will-change-transform p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} viewport={{ once: true }}
                className="w-full max-w-[200px] absolute top-6"
              >
                <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-800">Silk Cleaning|</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}
                className="w-full max-w-[200px] mt-16 blur-[1px] group-hover:blur-none transition-all duration-300"
              >
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-3">Found 2 Results</p>
                <p className="text-[10px] text-gray-400 mb-1">Protocols / Delicate</p>
                <p className="text-sm font-medium text-gray-800">The <span className="bg-clothcare-primary/20 text-clothcare-primary px-1 rounded">silk</span> care manual</p>
              </motion.div>
            </motion.div>

            {/* Widget 2: Action Menu */}
            {/* Widget 2: Action Menu (Center) */}
            <motion.div
              variants={zoomIn}
              whileHover={{ y: -5 }}
              className="bg-white rounded-4xl will-change-transform p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex items-center justify-center relative group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, type: "spring" }} viewport={{ once: true }}
                className="bg-white border border-gray-100 shadow-xl rounded-2xl p-2 w-48 z-10"
              >
                <div className="flex items-center gap-3 p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-not-allowed">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="text-sm font-medium">Edit Preferences</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-clothcare-primary/10 text-clothcare-primary rounded-xl cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 fill-clothcare-primary" />
                    <span className="text-sm font-bold">Auto-Schedule</span>
                  </div>
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </div>
                <div className="flex items-center gap-3 p-2.5 text-gray-500 hover:bg-gray-50 rounded-xl cursor-not-allowed">
                  <CircleDot className="w-4 h-4" />
                  <span className="text-sm font-medium">View Stats</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Widget 3: Progress Tracker */}
            {/* Widget 3: Progress Tracker (Right) */}
            <motion.div
              variants={slideInRight}
              whileHover={{ y: -5 }}
              className="bg-white rounded-4xl will-change-transform p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col justify-center items-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full max-w-[220px]">
                <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-3 mb-4 flex items-center justify-between">
                  <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }} whileInView={{ width: "25%" }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }} viewport={{ once: true }}
                      className="h-full bg-gray-900 rounded-full"
                    ></motion.div>
                  </div>
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} viewport={{ once: true }} className="text-[10px] font-bold text-gray-500">2/8 Completed</motion.span>
                </div>

                <div className="space-y-3 px-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }} viewport={{ once: true }}>
                        <CheckCircle2 className="w-4 h-4 text-clothcare-primary fill-clothcare-primary/20" />
                      </motion.div>
                      <span className="text-xs font-medium text-gray-800">Sorting & Insp.</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                      <span className="text-xs font-medium text-gray-500">Stain Treatment</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between opacity-30">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                      <span className="text-xs font-medium text-gray-500">Cleaning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Widget 4: Calendar/Shift */}
            {/* Widget 4: Calendar/Shift (Left) */}
            <motion.div
              variants={slideInLeft}
              whileHover={{ y: -5 }}
              className="bg-white rounded-4xl will-change-transform p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex items-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-4 w-full max-w-[240px] mx-auto">
                <div className="flex flex-col items-center pt-2">
                  <span className="text-2xl font-bold text-gray-900 leading-none">8</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase mt-1">Sun</span>
                </div>
                <div className="flex-1">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, type: "spring" }} viewport={{ once: true }}
                    className="bg-white border border-gray-100 shadow-lg rounded-2xl p-4 relative z-10 flex flex-col gap-3 group"
                  >
                    <p className="font-bold text-sm text-gray-900">Pickup Window</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <CalendarClock className="w-3 h-3" /> 09:00 to 11:00
                    </p>
                    <div className="flex gap-2">
                      <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-md">Home</span>
                      <motion.span
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }} viewport={{ once: true }}
                        className="bg-clothcare-primary/10 text-clothcare-primary text-[10px] font-bold px-2 py-1 rounded-md"
                      >
                        Confirmed
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Widget 5: Alert Modal */}
            {/* Widget 5: Alert Modal (Center) */}
            <motion.div
              variants={zoomIn}
              whileHover={{ y: -5 }}
              className="bg-white flex items-center justify-center rounded-4xl will-change-transform shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} viewport={{ once: true }}
                className="bg-white border border-gray-100 shadow-xl rounded-2xl p-5 w-48 text-center flex flex-col items-center"
              >
                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center mb-3">
                  <span className="text-lg font-bold">!</span>
                </div>
                <p className="font-bold text-sm text-gray-900 mb-2">Quality Check Passed</p>
                <p className="text-[9px] text-gray-500 mb-4 leading-relaxed">
                  Your garments have passed our rigorous 5-point quality inspection and are ready for delivery.
                </p>
                <motion.div
                  initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }}
                  className="w-full flex items-center justify-between bg-clothcare-primary/10 rounded-xl p-1 pr-3 cursor-pointer"
                >
                  <div className="w-8 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <Check className="w-3 h-3 text-clothcare-primary" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">Accept</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Widget 6: Schedule Toggle */}
            {/* Widget 6: Schedule Toggle (Right) */}
            <motion.div
              variants={slideInRight}
              whileHover={{ y: -5 }}
              className="bg-white rounded-4xl will-change-transform p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex items-center justify-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full max-w-[220px] bg-white border border-gray-100 shadow-xl rounded-2xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-gray-900">Is repeating</span>
                  <div
                    onClick={() => setIsRepeating(!isRepeating)}
                    className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${isRepeating ? 'bg-clothcare-primary' : 'bg-gray-200'}`}
                  >
                    <motion.div
                      initial={{ x: 0 }} animate={{ x: isRepeating ? 20 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-4 h-4 bg-white rounded-full shadow-sm"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 mb-4">
                  <span className="text-xs text-gray-500 font-medium">Repeat</span>
                  <span className="text-xs font-bold text-gray-900">Weekly</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>

                <div className="flex justify-between px-1">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, i) => (
                    <motion.div
                      key={day}
                      initial={{ opacity: 0, y: 5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (i * 0.05) }} viewport={{ once: true }}
                      className={`text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-md ${day === 'We' ? 'bg-white shadow-sm border border-gray-200 text-gray-900' : 'text-gray-400'}`}
                    >
                      {day}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Widget 7: Stats Dashboard */}
            {/* Widget 7: Stats Dashboard (Left) */}
            <motion.div
              variants={slideInLeft}
              whileHover={{ y: -5 }}
              className="bg-white flex items-center justify-center rounded-4xl will-change-transform shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-4 w-[220px] flex items-center justify-between">
                <div className="flex flex-col items-center gap-2">
                  <ShieldCheckIcon />
                  <p className="text-[10px] font-bold text-gray-900">Hygiene Score</p>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, type: "spring" }} viewport={{ once: true }}
                    className="bg-clothcare-primary/10 text-clothcare-primary px-3 py-1 rounded-full text-sm font-bold border border-clothcare-primary/20"
                  >
                    99.9%
                  </motion.div>
                </div>
                <div className="w-px h-16 bg-gray-100"></div>
                <div className="flex flex-col gap-2">
                  <StatRow val="40" label="Toxins" />
                  <StatRow val="0" label="Chemicals" />
                  <StatRow val="100" label="Freshness" />
                </div>
              </div>
            </motion.div>

            {/* Widget 8: Slider Widget */}
            {/* Widget 8: Slider Widget (Center) */}
            <motion.div
              variants={zoomIn}
              className="bg-white flex items-center justify-center rounded-4xl will-change-transform shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 p-6 sm:p-4 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-[240px] text-center">
                <p className="text-sm font-bold text-gray-900 mb-4">How happy are you?</p>
                <div className="flex justify-between text-[10px] font-bold text-gray-300 px-1 mb-3 relative">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <span
                      key={num}
                      onClick={() => setSliderVal(num)}
                      className={`cursor-pointer transition-colors duration-200 z-10 w-4 ${sliderVal === num ? 'text-gray-900 text-sm -mt-0.5 font-black' : 'hover:text-gray-500'}`}
                    >
                      {num}
                    </span>
                  ))}
                </div>
                <div className="relative w-full h-1.5 bg-gray-100 rounded-full mt-2 cursor-pointer" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
                  setSliderVal(Math.round(percent / 10) || 1);
                }}>
                  <motion.div
                    initial={false}
                    animate={{ width: `${(sliderVal - 1) * 11.111}%` }}
                    className="absolute left-0 top-0 h-full bg-clothcare-primary rounded-full"
                  />
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    onDrag={(e, info) => {
                      const container = e.target.parentElement;
                      if (!container) return;
                      const rect = container.getBoundingClientRect();
                      const x = info.point.x - rect.left;
                      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
                      const newVal = Math.max(1, Math.min(10, Math.round((percent / 100) * 9) + 1));
                      if (newVal !== sliderVal) setSliderVal(newVal);
                    }}
                    animate={{ left: `${(sliderVal - 1) * 11.111}%` }}
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-clothcare-primary shadow-md rounded-full cursor-grab active:cursor-grabbing z-20"
                    style={{ x: "-50%" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Widget 9: Chat / Instruction */}
            {/* Widget 9: Chat / Instruction (Right) */}
            <motion.div
              variants={slideInRight}
              whileHover={{ y: -5 }}
              className="bg-white rounded-4xl will-change-transform p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col justify-center items-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full max-w-[220px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-xl px-3 py-2.5 mb-3"
                >
                  <div className="w-5 h-5 bg-clothcare-primary/20 rounded flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 text-clothcare-primary" />
                  </div>
                  <p className="text-xs text-gray-900 font-medium truncate">@support light starch on shirts|</p>
                </motion.div>
                <div className="flex gap-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
                    className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm rounded-xl px-3 py-2 shrink-0"
                  >
                    <Paperclip className="w-3 h-3 text-gray-500" />
                    <span className="text-[10px] font-bold text-gray-800">Attach photo</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }}
                    className="flex items-center justify-center gap-1.5 bg-white border border-gray-200 shadow-sm rounded-xl px-3 py-2 grow"
                  >
                    <span className="text-[10px] font-bold text-gray-800">Save Note</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Mini internal components
const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const StatRow = ({ val, label }) => (
  <div className="flex items-center gap-2">
    <span className="text-[10px] font-bold text-gray-400 w-5">{val}</span>
    <span className="text-[9px] text-gray-300 font-medium uppercase tracking-wider">{label}</span>
  </div>
);

export default WhyChooseUs;