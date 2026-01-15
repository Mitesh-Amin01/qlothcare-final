'use client'
import React, { useState } from 'react';
import { 
  Building2, TrendingUp, Smartphone, Users, ArrowRight, 
  CheckCircle2, Globe, LayoutDashboard, Shirt, Sparkles, 
  ChevronDown, Wallet, PieChart, BarChart3, Play
} from 'lucide-react';
import { motion } from 'motion/react';

/* ==========================================
   ANIMATION CONFIG (Snappy & Corporate)
   ========================================== */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } 
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

/* ==========================================
   SECTION 1: HERO (Clean White & Professional)
   ========================================== */
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      
      {/* 1. PROFESSIONAL BACKGROUND MESH */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Soft Ambient Glows (Not Neon) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-50/50 to-transparent rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-5xl mx-auto text-center"
        >
          {/* 2. EYEBROW BADGE (Capsule Style) */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-slate-600 text-xs font-bold tracking-widest uppercase hover:bg-white hover:shadow-md transition-all cursor-default">
              <span className="w-2 h-2 rounded-full bg-clothcare-primary animate-pulse"></span>
              Franchise Partner Program 2026
            </div>
          </motion.div>
          
          {/* 3. HEADLINE (Swiss Style - Tight & Huge) */}
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.05] mb-8">
            Scale with <br className="hidden md:block"/>
            <span className="relative whitespace-nowrap text-clothcare-primary">
              <svg className="absolute -bottom-2 w-full h-3 text-orange-200/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              Intelligent Laundry.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Don't just open a shop. Invest in a <strong>vertically integrated tech stack</strong>. We provide the machinery, the customers, and the <span className="text-slate-900 font-bold">Qlothcare OS</span> to run on autopilot.
          </motion.p>

          {/* 4. BUTTONS (High Tactile Feel) */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-xl bg-clothcare-primary hover:bg-clothcare-primaryDark text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(228,111,51,0.39)] hover:shadow-[0_6px_20px_rgba(228,111,51,0.23)] hover:-translate-y-0.5 transition-all flex items-center gap-3">
              Start Application <ArrowRight size={20} />
            </button>
            <button className="group px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white border border-slate-200 transition-colors">
                 <Play size={12} fill="currentColor" className="text-slate-900 ml-0.5"/>
              </div>
              Watch The Model
            </button>
          </motion.div>

        </motion.div>

        {/* 5. FLOATING STATS STRIP (Glassmorphism Bridge) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-slate-100">
             <StatItem value="45+" label="Live Outlets" />
             <StatItem value="₹12Cr" label="Network Revenue" />
             <StatItem value="14 Mo" label="Avg. ROI Period" />
             <StatItem value="0%" label="Failure Rate" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const StatItem = ({ value, label }) => (
  <div className="text-center md:text-left md:pl-8 group cursor-default">
    <div className="text-4xl font-display font-bold text-slate-900 mb-1 group-hover:text-clothcare-primary transition-colors">{value}</div>
    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">{label}</div>
  </div>
);

/* ==========================================
   SECTION 2: BENTO VALUE PROP (Light Gray)
   ========================================== */
const ValueProp = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">A "Business-in-a-Box" Model</h2>
            <p className="text-slate-500 text-lg">We don't just sell you a brand name. We hand over a fully operational technology ecosystem and supply chain.</p>
          </div>
          <div className="hidden md:block">
            <button className="text-slate-900 font-bold flex items-center gap-2 hover:gap-4 transition-all hover:text-clothcare-primary underline decoration-slate-200 underline-offset-8">
               View Success Stories <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          
          {/* Card 1: App Ecosystem (Dark Card for Contrast) */}
          <motion.div whileHover={{ y: -5 }} className="row-span-2 bg-slate-900 rounded-[2rem] p-10 relative overflow-hidden group shadow-2xl shadow-slate-200">
             <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-black/80 z-10"></div>
             <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop" alt="App Tech" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale mix-blend-overlay" />
             
             <div className="relative z-20 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8">
                   <Smartphone size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Complete App Ecosystem</h3>
                <p className="text-slate-300 leading-relaxed text-lg">You get the driver app, customer app, and POS pre-configured. No tech headaches, just pure operation.</p>
             </div>
          </motion.div>

          {/* Card 2: Operations */}
          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-clothcare-primary mb-6 group-hover:rotate-12 transition-transform">
                <LayoutDashboard size={28} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Turnkey Operations</h3>
             <p className="text-slate-500 leading-relaxed font-medium">We handle site selection, interior design, and machinery installation. Walk in on day one ready to earn.</p>
          </motion.div>

          {/* Card 3: Marketing */}
          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
             <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:-rotate-12 transition-transform">
                <TrendingUp size={28} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-3">Centralized Marketing</h3>
             <p className="text-slate-500 leading-relaxed font-medium">We run national ads. You get high-intent local leads automatically assigned to your dashboard.</p>
          </motion.div>

          {/* Card 4: Sustainability (Wide) */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
             
             <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Future-Proof & Sustainable</h3>
                <p className="text-slate-500 text-lg mb-8">Government compliant eco-friendly tech. Zero PERC used, Solar ready setups, and advanced water recycling.</p>
                <div className="flex gap-3 flex-wrap">
                  {['Eco-Detergents', 'Water Saving', 'Energy Efficient'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-700 border border-slate-200">{tag}</span>
                  ))}
                </div>
             </div>
             
             {/* Visual Chart */}
             <div className="w-full md:w-auto flex justify-center">
                 <div className="relative w-40 h-40">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                      <path className="text-clothcare-primary" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold text-slate-900">40%</span>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Less Water</span>
                    </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SECTION 3: TECH SHOWCASE (Dark Contrast)
   ========================================== */
const TechShowcase = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
               <span className="flex h-3 w-3 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clothcare-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-clothcare-primary"></span>
               </span>
               <span className="text-clothcare-primary font-bold tracking-widest uppercase text-xs">The Qlothcare OS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Not just a shop. <br />A Tech Company.</h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
              Most franchises give you a signboard. We give you a brain. Our centralized <strong>Cloud ERP</strong> manages everything from customer pickups to machinery load balancing.
            </p>

            <div className="space-y-4">
               <TechListItem icon={<LayoutDashboard/>} title="Centralized Dashboard" desc="Real-time sales & inventory tracking." />
               <TechListItem icon={<Globe/>} title="Automated Logistics" desc="Auto-assign drivers for pickup & delivery." />
               <TechListItem icon={<Wallet/>} title="Automated Billing" desc="GST compliant invoicing & digital payments." />
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="relative">
             {/* The "Card" */}
             <div className="relative bg-[#0F172A] border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-10 border-b border-slate-800 pb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-slate-600 font-mono text-xs">admin.qlothcare.com</div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                    <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">Today's Revenue</p>
                    <p className="text-3xl font-bold text-white mt-2">₹42,500</p>
                    <div className="text-green-400 text-xs flex items-center gap-1 mt-3 font-bold bg-green-400/10 w-fit px-2 py-1 rounded"><TrendingUp size={12}/> +15%</div>
                  </div>
                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                    <p className="text-slate-500 text-xs uppercase font-bold tracking-wider">Active Orders</p>
                    <p className="text-3xl font-bold text-white mt-2">128</p>
                    <div className="text-clothcare-primary text-xs mt-3 font-bold bg-orange-500/10 w-fit px-2 py-1 rounded">Processing Now</div>
                  </div>
                </div>

                {/* Chart Area Mockup */}
                <div className="h-48 bg-slate-800/30 rounded-2xl border border-slate-700/50 flex items-end justify-between px-6 pb-0 overflow-hidden relative">
                   {[40, 65, 45, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                     <div 
                       key={i} 
                       style={{ height: `${h}%` }}
                       className="w-1/12 mx-1 bg-clothcare-primary/90 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                     ></div>
                   ))}
                </div>
             </div>
             
             {/* Decor Blur */}
             <div className="absolute -z-10 inset-0 bg-clothcare-primary/20 blur-[100px] rounded-full opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TechListItem = ({ icon, title, desc }) => (
  <div className="flex gap-5 p-5 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group cursor-default">
    <div className="w-12 h-12 rounded-xl bg-slate-800 text-clothcare-primary flex items-center justify-center group-hover:bg-clothcare-primary group-hover:text-white transition-colors border border-slate-700">
      {React.cloneElement(icon, { size: 22 })}
    </div>
    <div>
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-slate-400 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

/* ==========================================
   SECTION 4: FORM (Clean & Inviting)
   ========================================== */
const FranchiseForm = () => {
  return (
    <section id="inquiry-form" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* Left: Persuasion */}
          <div className="lg:w-5/12 p-12 lg:p-20 relative flex flex-col justify-between bg-clothcare-darker">
             {/* Texture */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-display font-bold text-white mb-6">Partner Application</h3>
               <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                 We are selective. We look for operators who understand that quality and technology are the future.
               </p>
               
               <div className="space-y-8">
                 {[
                   { step: 1, title: 'Submit Inquiry', sub: 'Fill out this form' },
                   { step: 2, title: 'Discovery Call', sub: '30 min zoom with Founder' },
                   { step: 3, title: 'Site Visit', sub: 'Tour our flagship' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${i===0 ? 'bg-clothcare-primary border-clothcare-primary text-white shadow-lg shadow-orange-900/50' : 'border-slate-700 text-slate-500'}`}>
                        {item.step}
                      </div>
                      <div>
                        <p className={`font-bold text-lg ${i===0 ? 'text-white' : 'text-slate-500'}`}>{item.title}</p>
                        <p className="text-sm text-slate-600">{item.sub}</p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="mt-16 pt-8 border-t border-slate-800 relative z-10">
               <p className="text-clothcare-primary text-xs uppercase font-bold tracking-wider">Direct Franchise Line</p>
               <p className="text-white font-display text-2xl mt-1 font-bold">+91 98765 00000</p>
             </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:w-7/12 bg-white p-12 lg:p-20">
             <h3 className="text-3xl font-bold text-slate-900 mb-10">Enter your details</h3>

             <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                   <InputGroup label="First Name" placeholder="Rahul" />
                   <InputGroup label="Last Name" placeholder="Sharma" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <InputGroup label="Email Address" type="email" placeholder="rahul@business.com" />
                  <InputGroup label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                </div>

                <div>
                   <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Liquid Capital Available</label>
                   <div className="relative">
                      <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-clothcare-primary transition-all text-slate-900 font-bold appearance-none cursor-pointer">
                         <option>₹10 Lakh - ₹20 Lakh</option>
                         <option>₹20 Lakh - ₹50 Lakh</option>
                         <option>₹50 Lakh+</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                   </div>
                </div>

                <div className="pt-6">
                   <button className="w-full bg-slate-900 hover:bg-black text-white font-bold text-lg py-5 rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 group transform active:scale-[0.99]">
                      Submit Application <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                   <p className="text-center text-xs text-slate-400 mt-6">Protected by reCAPTCHA and our Privacy Policy.</p>
                </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const InputGroup = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-clothcare-primary transition-all text-slate-900 placeholder:text-slate-400 font-bold"
    />
  </div>
);

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
const FranchisePage = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen selection:bg-clothcare-primary selection:text-white">
      <HeroSection />
      <ValueProp />
      <TechShowcase />
      <FranchiseForm />
    </div>
  );
};

export default FranchisePage;