"use client";

import React from 'react';
import { Check, Sparkles, Zap, ShieldCheck, Crown } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const PricingSection = () => {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 60, rotateX: -10 },
    visible: { y: 0, rotateX: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  const scaleUpVariants = {
    hidden: { scale: 0.9, y: 50 },
    visible: { scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };


  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-white font-sans overflow-hidden">



      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Area */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-clothcare-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-clothcare-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-clothcare-primary">Smart Care Savings</span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-[4rem] font-black text-gray-900 leading-[1.1] tracking-tighter mb-8"
          >
            Flexible Care for <br /> Every Wardrobe.
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg text-gray-500 leading-relaxed font-medium"
          >
            Recharge your Qlothcare wallet and unlock exclusive tiered discounts. <br className="hidden md:block" />
            Designed for those who value software-level precision in fabric care.
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >

          {/* Card 1: Standard */}
          <motion.div variants={scaleUpVariants} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 p-8 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-gray-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
              <p className="text-sm text-gray-500 font-medium">Pay as you go</p>
            </div>

            <div className="mb-10">
              <span className="text-5xl font-black text-gray-900 tracking-tight">₹0</span>
              <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest leading-relaxed">No Upfront Cost</p>
            </div>

            <ul className="space-y-4 grow mb-10">
              <ListItem text="Itemized billing" />
              <ListItem text="48h Turnaround" />
              <ListItem text="Standard detergents" />
            </ul>

            <Link href="/coming-soon" className="w-full">
              <CoolButton text="Get Started" type="dark" />
            </Link>
          </motion.div>

          {/* Card 2: Lite */}
          <motion.div variants={scaleUpVariants} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 p-8 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-clothcare-primary/5 flex items-center justify-center mb-6 text-clothcare-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lite Member</h3>
              <p className="text-sm text-clothcare-primary font-bold">5% OFF Every Item</p>
            </div>

            <div className="mb-10">
              <span className="text-5xl font-black text-gray-900 tracking-tight">₹2,000</span>
              <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest leading-relaxed">Wallet Recharge</p>
            </div>

            <ul className="space-y-4 grow mb-10">
              <ListItem text="5% Exclusive Discount" />
              <ListItem text="Priority Scheduling" />
              <ListItem text="Eco-friendly softeners" />
            </ul>

            <Link href="/coming-soon" className="w-full">
              <CoolButton text="Recharge Now" type="plain" />
            </Link>
          </motion.div>

          {/* Card 3: Classic (Recommended) */}
          <motion.div variants={scaleUpVariants} className="relative group lg:scale-105 z-20">
            {/* Animated Border/Glow */}
            <div className="absolute -inset-px bg-linear-to-b from-blue-400 via-clothcare-primary to-orange-400 rounded-[2.6rem] blur-[1px] group-hover:blur-[3px] transition-all duration-500"></div>

            <div className="bg-white rounded-[2.5rem] p-8 flex flex-col relative h-full">
              <div className="absolute top-6 right-8">
                <span className="bg-clothcare-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>

              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-clothcare-primary to-orange-500 flex items-center justify-center mb-6 text-white shadow-lg shadow-clothcare-primary/20">
                  <Crown className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Classic Member</h3>
                <p className="text-sm text-clothcare-primary font-bold">10% OFF Every Item</p>
              </div>

              <div className="mb-10">
                <span className="text-5xl font-black text-gray-900 tracking-tight">₹5,000</span>
                <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest leading-relaxed">Wallet Recharge</p>
              </div>

              <ul className="space-y-4 grow mb-10">
                <ListItem text="10% Exclusive Discount" textBold />
                <ListItem text="Free Pickup & Delivery" />
                <ListItem text="24h Premium Turnaround" />
                <ListItem text="Stain Treatment Plus" />
              </ul>

              <Link href="/coming-soon" className="w-full">
                <CoolButton text="Select Plan" type="gradient" />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Elite */}
          <motion.div variants={scaleUpVariants} className="bg-gray-900 rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group shadow-2xl transition-all duration-500">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>

            <div className="mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Elite Member</h3>
              <p className="text-sm text-clothcare-primary font-bold">15% OFF Every Item</p>
            </div>

            <div className="mb-10 relative z-10">
              <span className="text-5xl font-black text-white tracking-tight">₹10,000</span>
              <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest leading-relaxed">Wallet Recharge</p>
            </div>

            <ul className="space-y-4 grow mb-10 relative z-10">
              <ListItem text="15% Exclusive Discount" textWhite />
              <ListItem text="Unlimited VIP Express" textWhite />
              <ListItem text="Dedicated Account Manager" textWhite />
              <ListItem text="Monthly Sanitization Pack" textWhite />
            </ul>

            <Link href="/coming-soon" className="w-full">
              <CoolButton text="Go Elite" type="white" />
            </Link>
          </motion.div>

        </motion.div>

        {/* Footer Info Area */}
        <motion.div
          className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Need a custom plan for business?</h3>
            <p className="text-gray-500 leading-relaxed font-medium">
              We offer bespoke solutions for hotels, spas, and clinics with volume-based pricing and specialized garment treatment protocols.
            </p>
          </div>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border-2 border-gray-900 text-gray-900 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-900 hover:text-white transition-all shadow-lg"
            >
              Contact Sales
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

// Cool Button Component
const CoolButton = ({ text, type }) => {
  const styles = {
    dark: "bg-gray-950 text-white hover:bg-gray-800",
    plain: "bg-white border-2 border-gray-100 text-gray-900 hover:border-clothcare-primary hover:text-clothcare-primary",
    gradient: "bg-linear-to-r from-blue-400 via-clothcare-primary to-orange-400 text-white shadow-xl shadow-clothcare-primary/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-clothcare-primary/30",
    white: "bg-white text-gray-950 hover:bg-clothcare-primary hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative z-10 ${styles[type]}`}
    >
      {text}
    </motion.button>
  );
};

// List item
const ListItem = ({ text, textWhite, textBold }) => (
  <li className="flex items-start gap-4">
    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${textWhite ? 'bg-white/10 text-white' : 'bg-clothcare-primary/10 text-clothcare-primary'}`}>
      <Check className="w-3 h-3" strokeWidth={4} />
    </div>
    <span className={`text-[14px] leading-tight ${textWhite ? 'text-gray-300 font-medium' : 'text-gray-600 font-medium'} ${textBold ? 'font-bold text-gray-900' : ''}`}>
      {text}
    </span>
  </li>
);

export default PricingSection;