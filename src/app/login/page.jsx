'use client'
import React, { useState, useEffect } from 'react';
import {
   Mail, Lock, Eye, EyeOff, ArrowRight,
   Sparkles, Chrome, Command, ShieldCheck
} from 'lucide-react';
import heroImage from '@/assets/pages/landing_image/heroImage.png'
import Image from 'next/image';
import Link from 'next/link';

/* ==========================================
   COMPONENT: LOGIN PAGE
   ========================================== */
const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [formData, setFormData] = useState({ email: '', password: '' });
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setIsVisible(true);
   }, []);

   const handleLogin = (e) => {
      e.preventDefault();
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => setIsLoading(false), 2000);
   };

   return (
      <div className="min-h-screen w-full flex bg-white font-sans overflow-hidden">

         {/* ==========================================
          LEFT SIDE: VISUAL STORYTELLING (Desktop)
          ========================================== */}
         <div className="hidden lg:flex lg:w-1/2 relative bg-clothcare-dark overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
               <Image
                  src={heroImage}
                  alt="Qlothcare Facility"
                  className="w-full h-full object-cover opacity-60 scale-105"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-clothcare-dark via-clothcare-dark/80 to-transparent"></div>
            </div>

            {/* Abstract Shapes - Updated to Brand Orange */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-clothcare-primary/10 rounded-full blur-[100px] animate-pulse"></div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">

               {/* Brand Logo (White) */}
               <div className={`flex items-center gap-2 text-2xl font-display font-bold tracking-tight transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-clothcare-primary">
                     <Sparkles size={16} fill="currentColor" />
                  </div>
                  Qlothcare.
               </div>

               {/* Testimonial Card */}
               <div className={`bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="flex gap-1 mb-4">
                     {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={14} className="text-clothcare-primary fill-clothcare-primary" />)}
                  </div>
                  <p className="text-lg font-medium leading-relaxed mb-6">
                     "The automated tracking is a game changer. I know exactly when my suits are pressed and ready. Highly recommended for busy professionals."
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-clothcare-primary/20 border border-white/10 flex items-center justify-center font-bold text-clothcare-primary">RM</div>
                     <div>
                        <p className="font-bold text-sm text-white">Rahul Mehta</p>
                        <p className="text-xs text-white/60">Member since 2025</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* ==========================================
          RIGHT SIDE: THE FORM
          ========================================== */}
         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative bg-white">

            {/* Mobile Background Decor */}
            <div className="lg:hidden absolute top-[-10%] right-[-10%] w-64 h-64 bg-clothcare-primary/5 rounded-full blur-[60px]"></div>

            <div className={`w-full max-w-[420px] relative z-10 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

               {/* Header */}
               <div className="mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-soft/50 border border-border-soft text-clothcare-dark text-[10px] font-black uppercase tracking-widest mb-6">
                     <ShieldCheck size={14} className="text-clothcare-primary" />
                     Secure Terminal
                  </div>
                  <h1 className="text-4xl font-display font-bold text-clothcare-dark mb-3 tracking-tight">Welcome back</h1>
                  <p className="text-text-muted font-medium">
                     Enter your credentials to access your Qlothcare account.
                  </p>
               </div>

               {/* Social Login */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <button className="flex items-center justify-center gap-3 py-3 px-4 border border-border-soft rounded-xl font-bold text-sm text-clothcare-dark hover:bg-gray-50 hover:border-clothcare-primary/30 transition-all group active:scale-[0.98]">
                     <Chrome size={18} className="text-text-muted group-hover:text-clothcare-primary transition-colors" />
                     Google
                  </button>
                  <button className="flex items-center justify-center gap-3 py-3 px-4 border border-border-soft rounded-xl font-bold text-sm text-clothcare-dark hover:bg-gray-50 hover:border-clothcare-primary/30 transition-all group active:scale-[0.98]">
                     <Command size={18} className="text-text-muted group-hover:text-clothcare-primary transition-colors" />
                     Apple
                  </button>
               </div>

               {/* Main Form */}
               <form onSubmit={handleLogin} className="space-y-5">

                  {/* Email Input */}
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-clothcare-dark uppercase tracking-widest ml-1">Email</label>
                     <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-clothcare-primary transition-colors" size={20} />
                        <input
                           type="email"
                           placeholder="name@company.com"
                           className="w-full bg-gray-50/50 border border-border-soft rounded-xl py-3.5 pl-12 pr-4 font-bold text-clothcare-dark focus:outline-none focus:ring-4 focus:ring-clothcare-primary/5 focus:border-clothcare-primary transition-all placeholder:text-gray-300 placeholder:font-medium"
                           value={formData.email}
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                           required
                        />
                     </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                     <div className="flex justify-between items-center ml-1">
                        <label className="text-[10px] font-black text-clothcare-dark uppercase tracking-widest">Password</label>
                        <a href="#" className="text-[10px] font-black text-clothcare-primary hover:underline uppercase tracking-tighter">Emergency Recovery</a>
                     </div>
                     <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-clothcare-primary transition-colors" size={20} />
                        <input
                           type={showPassword ? "text" : "password"}
                           placeholder="••••••••"
                           className="w-full bg-gray-50/50 border border-border-soft rounded-xl py-3.5 pl-12 pr-12 font-bold text-clothcare-dark focus:outline-none focus:ring-4 focus:ring-clothcare-primary/5 focus:border-clothcare-primary transition-all placeholder:text-gray-300"
                           value={formData.password}
                           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                           required
                        />
                        <button
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-clothcare-primary transition-colors p-1"
                        >
                           {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                     </div>
                  </div>

                  {/* Submit Button */}
                  <button
                     type="submit"
                     disabled={isLoading}
                     className="w-full bg-clothcare-dark text-white font-black uppercase tracking-widest py-4.5 rounded-xl shadow-xl hover:bg-clothcare-primary hover:shadow-clothcare-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed group active:scale-[0.98]"
                  >
                     {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                     ) : (
                        <>
                           Verify Identity <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                     )}
                  </button>
               </form>

               {/* Footer */}
               <p className="text-center mt-10 text-text-muted text-sm font-medium">
                  Don't have an account? <a href="/signup" className="font-black text-clothcare-primary hover:underline">Sign up</a>
               </p>

               {/* Terminal Back Nav */}
               <div className="mt-10 pt-10 border-t border-border-soft text-center px-4">
                  <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-clothcare-primary transition-colors text-xs font-bold tracking-widest uppercase">
                     Return to Terminal
                  </Link>
               </div>

            </div>
         </div>
      </div>
   );
};

export default LoginPage;