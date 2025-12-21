'use client'
import React, { useState } from 'react';
import { Check, X, Sparkles, Crown, Zap } from 'lucide-react';

const PricingSection = () => {
  // Toggle state for future interactivity (Monthly/Yearly)
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-bg-light font-sans relative overflow-hidden">
      
      {/* Background Decor: Abstract Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[1px] bg-clothcare-navy rotate-45"></div>
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[1px] bg-clothcare-navy -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Simple rates. <br />
            <span className="text-transparent bg-clip-text bg-clothcare-primary-gradient">
              Transparent value.
            </span>
          </h2>
          <p className="text-text-muted text-lg">
            Choose a plan that fits your lifestyle. From occasional cleaning to full-service wardrobe management.
          </p>
          
          {/* Modern Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-clothcare-navy' : 'text-text-muted'}`}>Pay As You Go</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-clothcare-navy rounded-full p-1 transition-colors duration-300 focus:outline-none ring-2 ring-offset-2 ring-clothcare-teal/20"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-clothcare-navy' : 'text-text-muted'}`}>
              Membership <span className="text-clothcare-teal text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          
          {/* CARD 1: Standard (Pay As You Go) */}
          <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-clothcareSoft transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-clothcare-tealSoft transition-colors">
                <Zap className="w-6 h-6 text-text-muted group-hover:text-clothcare-teal" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary">Standard</h3>
              <p className="text-sm text-text-muted mt-2">Perfect for the occasional refresh.</p>
            </div>
            
            <div className="mb-8 border-b border-border-light pb-8">
               <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-display font-bold text-text-primary">$2.50</span>
                 <span className="text-text-muted font-medium">/lb</span>
               </div>
               <p className="text-xs text-text-muted mt-2">Plus delivery fees</p>
            </div>

            <ul className="space-y-4 mb-8">
              <ListItem text="48h Standard Turnaround" />
              <ListItem text="Premium Detergents" />
              <ListItem text="Stain Inspection" />
              <ListItem text="Free Pickup" negative />
            </ul>

            <button className="w-full py-4 rounded-xl border border-border-light font-display font-bold text-text-primary hover:border-clothcare-teal hover:text-clothcare-teal transition-all">
              Schedule Pickup
            </button>
          </div>

          {/* CARD 2: Qlothcare+ (The Premium/Dark Card) */}
          <div className="relative bg-clothcare-navy rounded-2xl p-8 shadow-clothcare transform lg:-translate-y-4 border border-white/10 z-10">
            {/* Best Value Badge */}
            <div className="absolute top-0 right-0 bg-clothcare-teal text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
              Most Popular
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-clothcare-teal" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Qlothcare+</h3>
              <p className="text-sm text-clothcare-tealSoft/70 mt-2">For professionals who value time.</p>
            </div>
            
            <div className="mb-8 border-b border-white/10 pb-8">
               <div className="flex items-baseline gap-1">
                 <span className="text-5xl font-display font-bold text-white">$1.80</span>
                 <span className="text-clothcare-tealSoft font-medium">/lb</span>
               </div>
               <p className="text-xs text-clothcare-tealSoft/50 mt-2">Billed $19/mo membership</p>
            </div>

            <ul className="space-y-4 mb-8 text-white">
              <ListItem text="24h Express Turnaround" dark />
              <ListItem text="Unlimited Free Delivery" dark />
              <ListItem text="Free Minor Repairs (Buttons)" dark />
              <ListItem text="Dedicated Support Agent" dark />
            </ul>

            <button className="w-full py-4 rounded-xl bg-clothcare-teal text-white font-display font-bold hover:bg-clothcare-tealDark hover:shadow-lg transition-all shadow-clothcareSoft">
              Start Free 7-Day Trial
            </button>
          </div>

          {/* CARD 3: Family / Bulk */}
          <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm hover:shadow-clothcareSoft transition-all duration-300 group">
            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-clothcare-tealSoft transition-colors">
                <Sparkles className="w-6 h-6 text-text-muted group-hover:text-clothcare-teal" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary">Family Plan</h3>
              <p className="text-sm text-text-muted mt-2">High volume care for the whole home.</p>
            </div>
            
            <div className="mb-8 border-b border-border-light pb-8">
               <div className="flex items-baseline gap-1">
                 <span className="text-4xl font-display font-bold text-text-primary">$1.50</span>
                 <span className="text-text-muted font-medium">/lb</span>
               </div>
               <p className="text-xs text-text-muted mt-2">Min. 40lbs per pickup</p>
            </div>

            <ul className="space-y-4 mb-8">
              <ListItem text="Scheduled Weekly Pickups" />
              <ListItem text="Bedding & Towels Included" />
              <ListItem text="Folded by Family Member" />
              <ListItem text="Color Separation" />
            </ul>

            <button className="w-full py-4 rounded-xl border border-border-light font-display font-bold text-text-primary hover:border-clothcare-teal hover:text-clothcare-teal transition-all">
              Contact Sales
            </button>
          </div>

        </div>

        {/* Bottom Trust/Guarantee Strip */}
        <div className="mt-16 text-center">
           <p className="text-sm text-text-muted flex items-center justify-center gap-2">
             <span className="w-2 h-2 rounded-full bg-status-success"></span>
             No hidden fees. Cancel anytime. 100% Satisfaction Guarantee.
           </p>
        </div>

      </div>
    </section>
  );
};

// Helper Component for List Items to keep code clean
const ListItem = ({ text, negative = false, dark = false }) => (
  <li className="flex items-center gap-3">
    {negative ? (
      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
        <X className={`w-3 h-3 ${dark ? 'text-white/30' : 'text-gray-400'}`} />
      </div>
    ) : (
      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${dark ? 'bg-clothcare-teal' : 'bg-clothcare-tealSoft'}`}>
        <Check className={`w-3 h-3 ${dark ? 'text-white' : 'text-clothcare-tealDark'}`} />
      </div>
    )}
    <span className={`text-sm font-medium ${dark ? (negative ? 'text-white/30' : 'text-white/90') : (negative ? 'text-text-muted/50' : 'text-text-primary/80')}`}>
      {text}
    </span>
  </li>
);

export default PricingSection;