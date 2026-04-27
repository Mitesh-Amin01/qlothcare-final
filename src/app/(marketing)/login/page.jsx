'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Eye, EyeOff, Sparkles, Chrome, Command, ShieldCheck, Mail, Lock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/assets/pages/landing_image/heroImage.png';

/* ==========================================
   ANIMATION CONFIG (Professional & Smooth)
   ========================================== */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export default function LoginPage() {
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [formData, setFormData] = useState({ email: '', password: '' });

   const handleLogin = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000); // Simulate API
   };

   return (
      <div className="min-h-screen w-full flex bg-[#050505] text-white font-sans overflow-hidden">

         {/* ==========================================
                LEFT SIDE: CINEMATIC STORYTELLING 
                ========================================== */}
         <div className="hidden lg:flex lg:w-5/12 relative overflow-hidden group">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-out">
               <Image
                  src={heroImage}
                  alt="Qlothcare Facility"
                  className="w-full h-full object-cover grayscale brightness-50"
                  priority
               />
               <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-black/90"></div>
               <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
               <div className="absolute top-10 left-10 w-32 h-32 bg-clothcare-primary/20 rounded-full blur-[80px]"></div>
               <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-20 w-full h-full flex flex-col justify-center p-16">

               {/* Testimonial / Quote */}
               <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-12"
               >
                  <div className="flex gap-1.5 mb-6">
                     {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={14} className="text-clothcare-primary fill-clothcare-primary" />)}
                  </div>
                  <h2 className="text-4xl font-light leading-snug mb-8 max-w-lg text-white/90">
                     "The automated tracking is a game changer. I know exactly when my suits are pressed and ready. Highly recommended."
                  </h2>
                  <div className="flex items-center gap-5">
                     <div className="relative w-14 h-14 rounded-full border border-white/20 p-1">
                        <div className="w-full h-full rounded-full bg-clothcare-primary/10 flex items-center justify-center text-clothcare-primary">
                           <User size={28} strokeWidth={1.5} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#050505] rounded-full flex items-center justify-center">
                           <ShieldCheck size={12} className="text-green-400" />
                        </div>
                     </div>
                     <div>
                        <p className="font-bold text-white text-lg tracking-wide uppercase">Verified Member</p>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* The vertical separator line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent z-30"></div>
         </div>

         {/* ==========================================
                RIGHT SIDE: PREMIUM FORM INTERFACE
                ========================================== */}
         <div className="w-full lg:w-7/12 flex items-center justify-center p-6 pt-24 sm:pt-32 lg:p-20 relative bg-[#050505] z-10">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0 mix-blend-overlay"></div>

            <div className="w-full max-w-[480px] relative z-20">

               <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
               >
                  <motion.div variants={fadeUp} className="mb-4">
                     <span className="text-clothcare-primary font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs pb-3 sm:pb-4 block">Secure Terminal</span>
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
                        Authentication.
                     </h1>
                     <p className="text-base sm:text-lg text-white/50 font-light">
                        Enter your credentials to access the Qlothcare vault.
                     </p>
                  </motion.div>

                  {/* Social Login Trio */}
                  <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 my-8 lg:my-10 border-b border-white/10 pb-8 lg:pb-10">
                     <button className="flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl font-bold text-sm text-white transition-all group">
                        <Chrome size={18} className="text-white/50 group-hover:text-white transition-colors" />
                        Google
                     </button>
                     <button className="flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl font-bold text-sm text-white transition-all group">
                        <Command size={18} className="text-white/50 group-hover:text-white transition-colors" />
                        Apple
                     </button>
                  </motion.div>

                  {/* Main Form */}
                  <form onSubmit={handleLogin} className="space-y-5 lg:space-y-6">
                     {/* Email */}
                     <motion.div variants={fadeUp} className="space-y-3">
                        <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Email Address</label>
                        <div className="relative group">
                           <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-clothcare-primary transition-colors">
                              <Mail size={20} />
                           </div>
                           <input
                              type="email"
                              placeholder="name@qlothcare.com"
                              className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl py-5 pl-14 pr-6 font-bold text-white focus:outline-none focus:border-clothcare-primary focus:ring-1 focus:ring-clothcare-primary transition-all placeholder:text-white/20"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                           />
                        </div>
                     </motion.div>

                     {/* Password */}
                     <motion.div variants={fadeUp} className="space-y-3 pt-2">
                        <div className="flex justify-between items-center pl-1">
                           <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Master Password</label>
                           <Link href="#" className="text-xs font-bold text-clothcare-primary hover:text-white transition-colors uppercase tracking-widest">Reset</Link>
                        </div>
                        <div className="relative group">
                           <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-clothcare-primary transition-colors">
                              <Lock size={20} />
                           </div>
                           <input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••••••"
                              className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl py-5 pl-14 pr-14 font-bold text-white focus:outline-none focus:border-clothcare-primary focus:ring-1 focus:ring-clothcare-primary transition-all placeholder:text-white/20 tracking-widest"
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              required
                           />
                           <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                           >
                              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                           </button>
                        </div>
                     </motion.div>

                     {/* Submit Button */}
                     <motion.div variants={fadeUp}>
                        <button
                           type="submit"
                           disabled={isLoading}
                           className="w-full relative group overflow-hidden bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest mt-4 lg:mt-8 flex items-center justify-center gap-4 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                        >
                           <span className="relative z-10 flex items-center gap-3">
                              {isLoading ? (
                                 <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                              ) : (
                                 <>Access Vault <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                              )}
                           </span>
                           {/* Background fill animation */}
                           <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                        </button>
                     </motion.div>
                  </form>

                  {/* Footer Links */}
                  <motion.div variants={fadeUp} className="mt-10 lg:mt-12 text-center text-sm font-medium text-white/40 pt-8 lg:pt-10 border-t border-white/5">
                     <p className="mb-4">
                        Requesting new credentials? <Link href="/signup" className="text-white hover:text-clothcare-primary transition-colors pl-2">Initialize Account</Link>
                     </p>
                     <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
                        Return to Main Site
                     </Link>
                  </motion.div>

               </motion.div>
            </div>
         </div>

      </div>
   );
}