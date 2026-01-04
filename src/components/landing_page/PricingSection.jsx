'use client'

import React, { useState } from 'react';
import { Check, X, Sparkles, Crown, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bgOrbVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.05, 0.08, 0.05],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="pricing" className="relative py-24 font-sans overflow-hidden bg-white">

      {/* Background Decor */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}
        variants={bgOrbVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}
        variants={bgOrbVariants}
        animate="animate"
        transition={{ delay: 2, duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#2F343A' }}>
            Simple rates. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E46F33] to-[#CC5F2B]">
              Transparent value.
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#778582' }}>
            Choose a plan that fits your lifestyle. From occasional cleaning to full-service wardrobe management.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">

          {/* CARD 1: Standard (Pay As You Go) */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            style={{ borderColor: '#D1D3CF' }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E46F33]/10 transition-colors" style={{ backgroundColor: '#F9FAFB' }}>
                <Zap className="w-6 h-6 group-hover:text-[#E46F33] transition-colors" style={{ color: '#778582' }} />
              </div>
              <h3 className="text-xl font-display font-bold" style={{ color: '#2F343A' }}>Standard</h3>
              <p className="text-sm mt-2" style={{ color: '#778582' }}>Perfect for the occasional refresh.</p>
            </div>

            <div className="mb-8 border-b pb-8" style={{ borderColor: '#D1D3CF' }}>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold" style={{ color: '#2F343A' }}>$2.50</span>
                <span className="font-medium" style={{ color: '#778582' }}>/lb</span>
              </div>
              <p className="text-xs mt-2" style={{ color: '#778582' }}>Plus delivery fees</p>
            </div>

            <ul className="space-y-4 mb-8">
              <ListItem text="48h Standard Turnaround" />
              <ListItem text="Premium Detergents" />
              <ListItem text="Stain Inspection" />
              <ListItem text="Free Pickup" negative />
            </ul>

            <button className="w-full py-4 rounded-xl border font-display font-bold transition-all hover:bg-[#E46F33]/5"
              style={{ borderColor: '#D1D3CF', color: '#2F343A' }}
            >
              Schedule Pickup
            </button>
          </motion.div>

          {/* CARD 2: Qlothcare+ (Featured Premium) */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white rounded-2xl p-8 transform lg:-translate-y-4 shadow-xl z-10 border-2"
            style={{ borderColor: '#E46F33' }}
          >
            {/* Best Value Badge */}
            <div className="absolute top-5 right-2 text-white text-xs font-bold px-3 py-1 rounded-xl uppercase tracking-wider"
              style={{ backgroundColor: '#E46F33' }}>
              Most Popular
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#E46F3315' }}>
                <Crown className="w-6 h-6" style={{ color: '#E46F33' }} />
              </div>
              <h3 className="text-xl font-display font-bold" style={{ color: '#2F343A' }}>Qlothcare+</h3>
              <p className="text-sm mt-2" style={{ color: '#E46F33' }}>For professionals who value time.</p>
            </div>

            <div className="mb-8 border-b pb-8" style={{ borderColor: '#E46F3320' }}>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-display font-bold" style={{ color: '#2F343A' }}>$1.80</span>
                <span className="font-medium" style={{ color: '#E46F33' }}>/lb</span>
              </div>
              <p className="text-xs mt-2" style={{ color: '#778582' }}>Billed $19/mo membership</p>
            </div>

            <ul className="space-y-4 mb-8">
              <ListItem text="24h Express Turnaround" featured />
              <ListItem text="Unlimited Free Delivery" featured />
              <ListItem text="Free Minor Repairs (Buttons)" featured />
              <ListItem text="Dedicated Support Agent" featured />
            </ul>

            <button className="w-full py-4 rounded-xl text-white font-display font-bold hover:shadow-lg transition-all shadow-md group relative overflow-hidden"
              style={{ background: 'linear-gradient(to right, #E46F33, #CC5F2B)' }}
            >
              <span className="relative z-10">Start Free 7-Day Trial</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </motion.div>

          {/* CARD 3: Family / Bulk */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            style={{ borderColor: '#D1D3CF' }}
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E46F33]/10 transition-colors" style={{ backgroundColor: '#F9FAFB' }}>
                <Sparkles className="w-6 h-6 group-hover:text-[#E46F33] transition-colors" style={{ color: '#778582' }} />
              </div>
              <h3 className="text-xl font-display font-bold" style={{ color: '#2F343A' }}>Family Plan</h3>
              <p className="text-sm mt-2" style={{ color: '#778582' }}>High volume care for the whole home.</p>
            </div>

            <div className="mb-8 border-b pb-8" style={{ borderColor: '#D1D3CF' }}>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold" style={{ color: '#2F343A' }}>$1.50</span>
                <span className="font-medium" style={{ color: '#778582' }}>/lb</span>
              </div>
              <p className="text-xs mt-2" style={{ color: '#778582' }}>Min. 40lbs per pickup</p>
            </div>

            <ul className="space-y-4 mb-8">
              <ListItem text="Scheduled Weekly Pickups" />
              <ListItem text="Bedding & Towels Included" />
              <ListItem text="Folded by Family Member" />
              <ListItem text="Color Separation" />
            </ul>

            <button className="w-full py-4 rounded-xl border font-display font-bold transition-all hover:bg-[#E46F33]/5"
              style={{ borderColor: '#D1D3CF', color: '#2F343A' }}
            >
              Contact Sales
            </button>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

// Helper Component for List Items
const ListItem = ({ text, negative = false, featured = false }) => (
  <li className="flex items-center gap-3">
    {negative ? (
      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gray-100">
        <X className="w-3 h-3 text-gray-400" />
      </div>
    ) : (
      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ backgroundColor: featured ? '#E46F33' : '#E46F3320' }}>
        <Check className="w-3 h-3" style={{ color: featured ? '#FFFFFF' : '#E46F33' }} />
      </div>
    )}
    <span className="text-sm font-medium"
      style={{ color: negative ? '#77858280' : '#2F343A' }}>
      {text}
    </span>
  </li>
);

export default PricingSection;