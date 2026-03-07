"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('weekly');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-white font-sans overflow-hidden">

      {/* Background Ambient Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-clothcare-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
      />

      <div className="max-w-360 mx-auto px-6 relative z-10">

        {/* Header Area */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight"
          >
            Choose the Qlothcare <br className="hidden md:block" />
            plan for your home
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-xl text-gray-600 mb-10"
          >
            Flexible Plans for All Your Laundry Needs. <br className="hidden sm:block" />
            Empower Your Weekends with Qlothcare.
          </motion.p>

          {/* Toggle Switch */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center bg-gray-50 border border-black p-1"
          >
            <button
              onClick={() => setBillingCycle('weekly')}
              className={`px-8 py-2 text-sm font-bold transition-colors ${billingCycle === 'weekly' ? 'bg-white text-black border border-gray-200' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-2 text-sm font-bold transition-colors ${billingCycle === 'monthly' ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
            >
              Monthly
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-340 mx-auto mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >

          {/* Card 1: Standard Pay-as-you-go */}
          <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            {/* Bottom ambient glow */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-clothcare-primary/10 rounded-full blur-[50px] transition-all group-hover:bg-clothcare-primary/20"></div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-4xl pr-0 font-medium text-gray-900 mb-4 tracking-tight">Standard</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">$2.50</span>
                <span className="text-gray-500 font-medium">/lb</span>
              </div>
            </div>

            <button className="w-full bg-black text-white font-bold py-4 rounded-full mb-10 hover:bg-black/80 transition-colors text-sm tracking-wider relative z-10">
              GET STARTED
            </button>

            <ul className="space-y-5 grow mb-8 relative z-10">
              <ListItem text="Pay-as-you-go pricing model" />
              <ListItem text="48h Standard Turnaround" />
              <ListItem text="Premium Detergents used" />
              <ListItem text="Basic stain inspection" />
            </ul>

            <div className="pt-8 border-t border-gray-100 flex items-center justify-center relative z-10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                Perfect for occasional use
              </span>
            </div>
          </motion.div>

          {/* Card 2: Family Plan */}
          <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            {/* Bottom ambient glow */}
            <div className="absolute -bottom-24 inset-x-0 w-full h-48 bg-purple-200/30 rounded-full blur-2xl transition-all group-hover:bg-purple-300/40"></div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-4xl pr-0 font-medium text-gray-900 mb-4 tracking-tight">Family</h3>
              <div className="flex items-center justify-center gap-1 h-10 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={billingCycle}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold text-gray-900"
                  >
                    {billingCycle === 'weekly' ? '$45' : '$150'}
                  </motion.span>
                </AnimatePresence>
                <span className="text-gray-500 font-medium">/{billingCycle === 'weekly' ? 'week' : 'month'}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white font-bold py-4 rounded-full mb-10 hover:bg-black/80 transition-colors text-sm tracking-wider relative z-10">
              GET STARTED
            </button>

            <ul className="space-y-5 grow mb-8 relative z-10">
              <ListItem text={billingCycle === 'weekly' ? "Includes 20lbs per week" : "Includes 80lbs per month"} />
              <ListItem text="Scheduled Pickups" />
              <ListItem text="Bedding & Towels Included" />
              <ListItem text="Rollover unused pounds" />
            </ul>

            <div className="pt-8 border-t border-gray-100 flex items-center justify-center opacity-40 relative z-10">
              <img src="/howitswork/pickup.webp" alt="logos" className="h-4 object-cover grayscale" />
            </div>
          </motion.div>

          {/* Card 3: Premium / Recommended (Glowing Borders) */}
          <motion.div variants={scaleUpVariants} className="relative group hover:-translate-y-1 transition-transform duration-300">
            {/* The Glowing Border Wrapper */}
            <div className="absolute -inset-[2px] bg-linear-to-b from-blue-300 via-clothcare-primary to-orange-400 rounded-[26px] opacity-70 blur-[1px]"></div>

            <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col relative h-full">
              {/* Bottom ambient glow inside card */}
              <div className="absolute -bottom-24 right-0 w-48 h-48 bg-orange-200/40 rounded-full blur-2xl transition-all group-hover:bg-orange-300/50"></div>

              <div className="text-center mb-8 relative z-10">
                <h3 className="text-4xl pr-0 font-medium text-gray-900 mb-4 tracking-tight">Qlothcare+</h3>
                <div className="flex items-center justify-center gap-1 h-10 overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={billingCycle}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-gray-900"
                    >
                      {billingCycle === 'weekly' ? '$25' : '$89'}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-gray-500 font-medium">/{billingCycle === 'weekly' ? 'week' : 'month'}</span>
                </div>
              </div>

              <button className="w-full bg-linear-to-r from-blue-400 via-clothcare-primary to-orange-400 text-white font-bold py-4 rounded-full mb-10 shadow-md hover:shadow-lg transition-all text-sm tracking-wider relative z-10">
                GET STARTED
              </button>

              <ul className="space-y-5 grow mb-8 relative z-10">
                <ListItem text="Unlimited Free Delivery" />
                <ListItem text="24h Express Turnaround" />
                <ListItem text="$1.80/lb discounted rate" />
                <ListItem text="Free Minor Repairs (Buttons)" />
                <ListItem text="Dedicated Support Agent" />
              </ul>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-4 opacity-40 grayscale relative z-10">
                <img src="/landingabout/about.png" alt="brands" className="h-5 w-auto object-contain rounded" />
                <span className="text-xs font-bold text-gray-400">PARTNERS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Enterprise */}
          <motion.div variants={scaleUpVariants} className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-4xl pr-0 font-medium text-gray-900 mb-4 tracking-tight">Business</h3>
              <div className="flex items-center justify-center gap-1 mt-7 mb-2 h-10">
                <span className="text-2xl font-bold text-gray-900">Custom</span>
              </div>
            </div>

            <button className="w-full bg-black text-white font-bold py-4 rounded-full mb-10 hover:bg-black/80 transition-colors text-sm tracking-wider relative z-10">
              TALK TO SALES
            </button>

            <ul className="space-y-5 grow mb-8 relative z-10">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-pink-400 mt-1 shrink-0" strokeWidth={3} />
                <span className="text-[15px] font-medium text-pink-400">Volume discount on loads</span>
              </li>
              <ListItem text="5x higher priority processing" />
              <ListItem text="Custom pickup schedules" />
              <ListItem text="Corporate billing portal" />
              <ListItem text="Dedicated account manager" />
            </ul>

            <div className="pt-8 border-t border-gray-100 flex items-center justify-center opacity-30 gap-3 grayscale relative z-10">
              <span className="font-serif font-bold text-sm">SPAs</span>
              <span className="font-sans font-bold text-sm">HOTELS</span>
              <span className="font-serif font-bold text-sm">CLINICS</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Footer Info Area */}
        <motion.div
          className="text-center max-w-2xl mx-auto flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Overage Pricing & Usage</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            The Qlothcare platform operates on a precise weight-based system,
            where each action—such as standard washing, dry cleaning, or pressing
            —is factored gracefully into your plan. Overage rate: $2.50 per additional pound.
          </p>
          <button className="bg-black text-white font-bold px-8 py-3 text-sm tracking-widest hover:bg-black/80 transition-colors">
            READ MORE
          </button>
        </motion.div>

      </div>
    </section>
  );
};

// Minimal checkmark list item
const ListItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <Check className="w-4 h-4 text-gray-900 mt-1 shrink-0" strokeWidth={3} />
    <span className="text-[15px] font-medium text-gray-700">{text}</span>
  </li>
);

export default PricingSection;