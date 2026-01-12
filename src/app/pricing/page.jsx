'use client'
import React, { useState, useEffect } from 'react';
import {
  Check, Sparkles, Crown, Zap,
  ShieldCheck, Calculator, Truck,
  Heart, ChevronDown, Wind, Droplets
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/common/Button';

/* ==========================================
   GLOBAL MOTION VARIANTS
   ========================================== */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

/* ==========================================
   HELPER: BUBBLE BACKGROUND COMPONENT
   ========================================== */
const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = [...Array(6)].map((_, i) => ({
      id: i,
      width: Math.random() * 300 + 200,
      height: Math.random() * 300 + 200,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      moveX: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
      moveY: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
      duration: Math.random() * 20 + 25,
    }));
    setBubbles(newBubbles);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-clothcare-primary/5 blur-3xl"
          initial={{
            width: bubble.width,
            height: bubble.height,
            x: bubble.startX + '%',
            y: bubble.startY + '%',
            opacity: 0.2
          }}
          animate={{
            x: bubble.moveX,
            y: bubble.moveY,
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

/* ==========================================
   COMPONENT 1: HERO SECTION
   ========================================== */
const HeroSection = () => {
  return (
    <section className="relative bg-[#F8FAFC] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <BubbleBackground />
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >

          <motion.h1
            variants={revealVariants}
            className="text-5xl lg:text-7xl font-display font-bold text-[#0F172A] leading-[0.95] mb-8"
          >
            Clean clothes. <br />
            <span className="italic font-light text-clothcare-primary">Transparent</span> pricing.
          </motion.h1>

          <motion.p
            variants={revealVariants}
            className="text-xl text-[#64748B] leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
          >
            Choose the plan that fits your lifestyle. From everyday essentials to premium care, we provide artisanal quality with digital convenience.
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
  const [pounds, setPounds] = useState(25);

  const guestRate = 2.50;
  const memberRate = 1.75;
  const guestCost = pounds * guestRate + 9.99; // + Delivery
  const memberCost = pounds * memberRate; // Free delivery
  const savings = guestCost - memberCost;

  return (
    <section className="py-12 -mt-16 lg:-mt-24 relative z-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-xl border border-[#E5E7EB] overflow-hidden flex flex-col md:flex-row"
        >
          {/* Controls */}
          <div className="p-8 md:p-12 w-full md:w-3/5 bg-white">
            <div className="flex items-center gap-2 mb-8 text-clothcare-primary">
              <Calculator size={20} />
              <span className="font-bold text-xs uppercase tracking-widest">Savings Estimator</span>
            </div>
            <h3 className="text-3xl font-display font-bold text-[#0F172A] mb-4">How much do you wash?</h3>
            <p className="text-[#64748B] mb-12">Drag the slider to see how much you could save per month with a Qlothcare+ membership.</p>

            <div className="space-y-10">
              <div className="relative">
                <div className="flex justify-between mb-4">
                  <label className="font-bold text-[#0F172A]">Weekly Laundry Weight</label>
                  <span className="font-display font-bold text-clothcare-primary text-xl">{pounds} lbs</span>
                </div>
                <input
                  type="range" min="10" max="100" step="5" value={pounds} onChange={(e) => setPounds(Number(e.target.value))}
                  className="w-full h-2 bg-[#F1F5F9] rounded-lg appearance-none cursor-pointer accent-clothcare-primary"
                />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-[#94A3B8] uppercase tracking-tighter">
                  <span>Small Load (10lb)</span>
                  <span>Family Load (100lb)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="w-full md:w-2/5 bg-[#0F172A] p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-clothcare-primary rounded-full blur-[100px] opacity-20"></div>

            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-4">Monthly Potential Savings</p>
                <motion.p
                  key={savings}
                  initial={{ scale: 1.1, color: "#E46F33" }}
                  animate={{ scale: 1, color: "#ffffff" }}
                  className="text-6xl font-display font-bold"
                >
                  ${(savings * 4).toFixed(0)}
                </motion.p>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Guest Price (with delivery)</span>
                  <span className="font-bold line-through text-white/40">${(guestCost * 4).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-clothcare-primary font-bold">Member Price</span>
                  <span className="font-bold text-white">${(memberCost * 4).toFixed(2)}</span>
                </div>
              </div>

              <Button children={"Start saving"} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 3: PRICING CARDS
   ========================================== */
const PricingCards = () => {
  const plans = [
    {
      name: 'Wash & Fold',
      price: '$1.50',
      unit: '/ lb',
      desc: 'Sorted, washed, dried, and perfectly folded.',
      features: ['Eco-Friendly Detergents', 'Color Separation', '24h Turnaround', 'Plastic-Free Packaging'],
      highlight: false,
      icon: Wind
    },
    {
      name: 'Professional Care',
      price: '$45',
      unit: '/ bag',
      desc: 'Our "Stuff-it-All" bag. Flat rate for busy families.',
      features: ['Up to 25 lbs Included', 'Stain Pre-treatment', 'Free Pickup & Delivery', 'Priority Support'],
      highlight: true,
      icon: Crown
    },
    {
      name: 'Dry Cleaning',
      price: '$6',
      unit: '/ item',
      desc: 'Eco-solvent cleaning for your delicate archive.',
      features: ['Hand-Finished Pressing', 'Minor Repairs Included', 'Steam Restoration', 'Hanger Recycling'],
      highlight: false,
      icon: Droplets
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={revealVariants}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-10 rounded-[3rem] transition-all duration-500 ${plan.highlight
                ? 'bg-[#0F172A] text-white shadow-2xl scale-105 z-10'
                : 'bg-[#F8FAFC] text-[#0F172A] border border-[#E5E7EB]'
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-clothcare-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.highlight ? 'bg-white/10 text-clothcare-primary' : 'bg-clothcare-primary/10 text-clothcare-primary'}`}>
                  <plan.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-[#64748B]'}`}>{plan.desc}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  <span className={plan.highlight ? 'text-white/40' : 'text-[#64748B]'}>{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-clothcare-primary shrink-0" />
                    <span className={plan.highlight ? 'text-white/80' : 'text-[#475569]'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight
                ? 'bg-clothcare-primary text-white hover:bg-clothcare-primaryDark shadow-lg shadow-clothcare-primary/20'
                : 'bg-[#0F172A] text-white hover:bg-clothcare-primary'
                }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 4: VALUE BENTO GRID
   ========================================== */
const ValueProps = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-clothcare-primary font-bold uppercase tracking-[0.3em] text-[10px]">The Qlothcare Edge</span>
          <h2 className="text-4xl font-display font-bold text-[#0F172A] mt-4">More than just a wash.</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {/* Bento 1 */}
          <motion.div variants={revealVariants} className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-[#E5E7EB] flex flex-col justify-between group">
            <div className="w-12 h-12 bg-clothcare-primary/10 rounded-2xl flex items-center justify-center text-clothcare-primary mb-8 group-hover:bg-clothcare-primary group-hover:text-white transition-colors">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">Replacement Guarantee</h3>
              <p className="text-[#64748B]">Missing button? Scratched zipper? We replace or repair items instantly. Our $1,000 protection policy covers every member order.</p>
            </div>
          </motion.div>

          {/* Bento 2 */}
          <motion.div variants={revealVariants} className="bg-[#0F172A] p-10 rounded-[2.5rem] text-white flex flex-col items-center text-center justify-center">
            <Zap className="text-clothcare-primary mb-6 animate-pulse" size={48} />
            <h3 className="text-xl font-bold mb-2">Rush? No Problem.</h3>
            <p className="text-white/50 text-sm">Next-day delivery is standard for all premium plans. Never wait a week for laundry again.</p>
          </motion.div>

          {/* Bento 3 */}
          <motion.div variants={revealVariants} className="bg-clothcare-primary p-10 rounded-[2.5rem] text-white">
            <h3 className="text-5xl font-display font-bold mb-4">0</h3>
            <p className="font-bold text-lg leading-tight">Delivery Fees for Members</p>
            <p className="text-white/70 text-sm mt-4">Save over $400 annually on trivial service charges.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 5: FAQ SECTION
   ========================================== */
const FAQSection = () => {
  const faqs = [
    { q: "Is there a minimum order size?", a: "For Wash & Fold, we have a 15 lb minimum. For Dry Cleaning, there is no minimum item count." },
    { q: "How do I schedule my first pickup?", a: "Once you select a plan, you'll be prompted to set your first window. We'll bring a Qlothcare bag for you on the first visit." },
    { q: "Can I cancel or pause my subscription?", a: "Absolutely. You can pause your Professional Care plan anytime via the app dashboard with zero penalties." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-[#0F172A] text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E5E7EB] rounded-3xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
      >
        <span className="font-bold text-[#0F172A] text-lg">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} className="text-[#64748B]" />
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
            <div className="px-6 pb-6 text-[#64748B] leading-relaxed">
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
    <div className="font-sans antialiased bg-white min-h-screen selection:bg-clothcare-primary/20 selection:text-[#0F172A]">
      <HeroSection />
      <div className="relative">
        <SavingsCalculator />
        <PricingCards />
        <ValueProps />
        <FAQSection />
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-6 inset-x-6 z-50 md:hidden">
        <button className="w-full py-4 bg-[#0F172A] text-white rounded-2xl font-bold shadow-2xl shadow-black/20 flex items-center justify-center gap-3 border border-white/10">
          <Truck size={18} className="text-clothcare-primary" />
          Schedule Regular Pickup
        </button>
      </div>
    </div>
  );
}
