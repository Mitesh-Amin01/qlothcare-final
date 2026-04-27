'use client';
import React, { useState } from 'react';
import {
  Calculator, Truck, ShieldCheck, Zap, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/common/Button';
import PricingSection from '@/components/landing_page/PricingSection';

/* ==========================================
   GLOBAL MOTION VARIANTS
   ========================================== */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

/* ==========================================
   COMPONENT 1: HERO SECTION
   ========================================== */
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">

      {/* Background Ambient Glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-clothcare-primary/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-widest mb-8">
            Transparent Economics
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="text-[4rem] lg:text-[6.5rem] font-bold text-gray-900 leading-[0.95] tracking-tight mb-8"
          >
            Precision pricing. <br />
            <span className="italic font-normal text-gray-400">Zero surprises.</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl lg:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Choose the protocol that fits your lifestyle. From everyday essentials to premium preservation, we provide artisan quality with digital convenience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 2: SAVINGS CALCULATOR
   ========================================== */
const SavingsCalculator = () => {
  const [items, setItems] = useState(25);

  const guestRate = 180;
  const memberRate = 162; // 10% discount for Classic members
  const guestCost = items * guestRate + 99; // + Delivery
  const memberCost = items * memberRate; // Free delivery
  const savings = guestCost - memberCost;

  return (
    <section className="py-20 lg:py-32 relative bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}
          className="bg-white rounded-[2.5rem] shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-shadow duration-500"
        >
          {/* Controls */}
          <div className="p-8 md:p-14 w-full md:w-3/5 bg-white">
            <div className="flex items-center gap-2 mb-8 text-gray-400">
              <Calculator size={20} />
              <span className="font-bold text-xs uppercase tracking-widest">Savings Estimator</span>
            </div>

            <h3 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">Project Your Savings</h3>
            <p className="text-gray-500 mb-12">Drag the slider based on your household's weekly garment output to see the exact economic benefit.</p>

            <div className="space-y-10">
              <div className="relative p-6 border border-gray-100 rounded-3xl bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <label className="font-bold text-gray-600 text-sm">Weekly Items</label>
                  <span className="font-bold text-gray-900 text-2xl">{items} <span className="text-sm text-gray-400">pcs</span></span>
                </div>

                <input
                  type="range" min="10" max="100" step="5" value={items} onChange={(e) => setItems(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors accent-black"
                />

                <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Small Batch (10 pcs)</span>
                  <span>Estate Batch (100 pcs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="w-full md:w-2/5 bg-black p-8 md:p-14 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-clothcare-primary/30 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 space-y-10">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-4">Monthly Value Retained</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-500 font-bold text-3xl">₹</span>
                  <motion.span
                    animate={{ color: "#ffffff" }}
                    className="text-6xl lg:text-7xl font-bold tracking-tighter"
                  >
                    {(savings * 4).toLocaleString('en-IN')}
                  </motion.span>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">Guest Price</span>
                  <span className="font-bold line-through text-gray-500">₹{(guestCost * 4).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white fill-current font-bold">Member Rate</span>
                  <span className="font-bold text-white text-xl">₹{(memberCost * 4).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-gray-100 transition-colors text-sm tracking-widest uppercase">
                Unlock Member Rates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 3: VALUE BENTO GRID
   ========================================== */
const ValueProps = () => {
  return (
    <section className="py-20 lg:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-center mb-20 text-gray-900">
          <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">The Structural Edge</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 tracking-tight">More than just a wash.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bento 1: Large Wide */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="sm:col-span-2 bg-gray-50 border border-gray-100 p-10 lg:p-12 rounded-3xl flex flex-col justify-between group overflow-hidden relative transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors"></div>
            <div className="w-14 h-14 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center text-gray-900 mb-10 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-medium text-gray-900 mb-3 tracking-tight">Zero-Friction Guarantee.</h3>
              <p className="text-gray-500 leading-relaxed">Missing button? Scratched zipper? We replace or repair items instantly. Our ₹50,000 protection policy covers every member automatically.</p>
            </div>
          </motion.div>

          {/* Bento 2: Dark Brutalist */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="bg-black p-10 lg:p-12 rounded-3xl text-white flex flex-col items-center text-center justify-center relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-48 h-48 bg-clothcare-primary/20 rounded-full blur-2xl"></div>
            <Zap className="text-gray-300 mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-2xl font-medium mb-3 tracking-tight relative z-10">Absolute Velocity.</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">Next-day delivery is standard for all premium tiers. Time reclaimed.</p>
          </motion.div>

          {/* Bento 3: Orange Accent */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="bg-clothcare-primary p-10 lg:p-12 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-clothcare-primary/20 transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1),transparent)]"></div>
            <h3 className="text-7xl font-bold leading-none mb-6 relative z-10 tracking-tighter">0</h3>
            <div className="relative z-10">
              <p className="font-bold text-xl leading-tight mb-2">Logistics Fees</p>
              <p className="text-white/80 text-sm">Retain over ₹25,000 annually simply by avoiding service charges.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 4: FAQ SECTION
   ========================================== */
const FAQSection = () => {
  const faqs = [
    { q: "Is there a minimum order threshold?", a: "For our Standard Pay-as-you-go service, we enforce a strict 5 kg minimum to maintain logistical efficiency. For Dry Cleaning operations, there is no minimum item count required." },
    { q: "How is the initial pickup executed?", a: "Upon selecting your preferred tier, you will be directed to our logistics portal to designate a collection window. Our operative will arrive with a secure Qlothcare transfer bag." },
    { q: "Can a subscription protocol be paused?", a: "Affirmative. You possess absolute sovereignty over your subscription. The Professional Care plan can be paused instantly via your dashboard with zero administrative penalties." },
    { q: "Are delicate fabrics processed securely?", a: "We utilize eco-solvent technologies and hand-finished pressing specifically designed to extend the lifespan of your most delicate archival pieces." }
  ];

  return (
    <section className="py-20 lg:py-32 pb-32 lg:pb-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">Operational Inquiries</h2>
          <p className="text-gray-500">Everything you need to know about the product and billing.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} key={i}>
              <FAQItem question={faq.q} answer={faq.a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-black/20 hover:shadow-xs transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left transition-colors"
      >
        <span className="font-bold text-gray-900 text-lg lg:text-xl pr-8">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 bg-gray-50 p-3 rounded-full text-gray-400 border border-gray-100">
          <ChevronDown size={20} strokeWidth={2} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0 text-gray-600 font-medium leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
export default function PricingPage() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-clothcare-primary/20 selection:text-black">
      <HeroSection />

      {/* 
        This is the imported PricingSection component we redesigned 
        earlier to have the ultra-premium SaaS aesthetics.
      */}
      <div className="-mt-16 relative z-20">
        <PricingSection />
      </div>

      <SavingsCalculator />
      <ValueProps />
      <FAQSection />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 inset-x-6 z-50 lg:hidden">
        <button className="w-full py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl flex items-center justify-center gap-3 border border-gray-800">
          <Truck size={18} className="text-clothcare-primary" />
          Schedule Regular Pickup
        </button>
      </div>
    </div>
  );
}
