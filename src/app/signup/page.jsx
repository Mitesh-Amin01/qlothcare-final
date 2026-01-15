'use client'
import React, { useState, useEffect } from 'react';
import {
  Mail, Lock, Eye, EyeOff, ArrowRight,
  Sparkles, Chrome, Command, ShieldCheck,
  User,
  ArrowLeft
} from 'lucide-react';
import heroImage from '@/assets/pages/landing_image/heroImage.png'
import Image from 'next/image';
import Link from 'next/link';

/* ==========================================
   COMPONENT: SIGNUP PAGE
   ========================================== */
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSignup = (e) => {
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
      <div className="hidden lg:flex lg:w-1/2 relative bg-clothcare-dark overflow-hidden p-16 flex-col justify-between text-white">
        {/* Background Image with Depth */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Qlothcare Operations"
            className="w-full h-full object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-clothcare-dark via-clothcare-dark/90 to-transparent"></div>
        </div>

        {/* Dynamic Animated Shapes */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-clothcare-primary/10 rounded-full blur-[120px] animate-pulse"></div>

        {/* Brand Logo Area */}
        <div className={`relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-clothcare-primary/20 backdrop-blur border border-white/10 flex items-center justify-center text-clothcare-primary shadow-lg group-hover:bg-clothcare-primary group-hover:text-white transition-all duration-300">
              <Sparkles size={20} fill="currentColor" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white">Qlothcare<span className="text-clothcare-primary">.</span></span>
          </Link>
        </div>

        {/* Center Message */}
        <div className={`relative z-10 max-w-sm transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          <h2 className="text-5xl font-display font-bold leading-tight mb-6">
            Join the <br />
            <span className="text-clothcare-primary italic uppercase tracking-widest text-3xl">Qlothcare</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed font-medium">
            Connect your operations to the world's most advanced artisanal laundry distribution network.
          </p>
        </div>

        {/* Statistics or Testimonial */}
        <div className={`relative z-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl max-w-sm transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={14} className="text-clothcare-primary fill-clothcare-primary" />)}
          </div>
          <p className="text-base font-medium leading-relaxed mb-6 text-white/80">
            "Signup took less than a minute. Managing my laundry operations has never been this smooth and professional."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-clothcare-primary/20 border border-white/10 flex items-center justify-center font-bold text-clothcare-primary text-sm">AP</div>
            <div>
              <p className="font-bold text-sm text-white">Amit Patel</p>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Premium Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          RIGHT SIDE: THE FORM
          ========================================== */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative bg-gray-50/30">

        <div className={`w-full max-w-[420px] relative z-10 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

          {/* The Signup Card */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_24px_50px_rgba(0,0,0,0.06)] overflow-hidden border border-border-soft">

            {/* Header Section */}
            <div className="pt-10 pb-6 px-10 text-center border-b border-gray-50">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-soft/50 border border-border-soft text-clothcare-dark text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <ShieldCheck size={14} className="text-clothcare-primary" />
                Secure Enrollment
              </div>
              <h1 className="text-3xl font-display font-bold text-clothcare-dark tracking-tight mb-1">Create Account</h1>
              <p className="text-xs text-text-muted font-medium">Start your Qlothcare partner journey today</p>
            </div>

            {/* Form Section */}
            <div className="p-10">
              <form onSubmit={handleSignup} className="space-y-6">

                {/* Full Name */}
                <div className={`group space-y-1.5 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <label className="text-[10px] font-black text-clothcare-dark/40 uppercase tracking-[0.2em] ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clothcare-primary transition-colors" size={18} />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b-2 border-gray-200 py-3 pl-7 pr-3 font-bold text-clothcare-dark focus:outline-none focus:border-clothcare-primary transition-all placeholder:text-gray-400 text-base"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className={`group space-y-1.5 transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <label className="text-[10px] font-black text-clothcare-dark/40 uppercase tracking-[0.2em] ml-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clothcare-primary transition-colors" size={18} />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-transparent border-b-2 border-gray-200 py-3 pl-7 pr-3 font-bold text-clothcare-dark focus:outline-none focus:border-clothcare-primary transition-all placeholder:text-gray-400 text-base"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className={`group space-y-1.5 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <label className="text-[10px] font-black text-clothcare-dark/40 uppercase tracking-[0.2em] ml-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-clothcare-primary transition-colors" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full bg-transparent border-b-2 border-gray-200 py-3 pl-7 pr-10 font-bold text-clothcare-dark focus:outline-none focus:border-clothcare-primary transition-all placeholder:text-gray-400 text-base"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-clothcare-primary transition-colors p-2"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-clothcare-dark text-white font-black uppercase tracking-[0.2em] py-4 rounded-2xl shadow-xl hover:bg-clothcare-primary hover:shadow-clothcare-primary/20 hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Create Account <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Footer */}
              <div className={`mt-10 pt-6 text-center border-t border-gray-50 transition-all duration-700 delay-700 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-gray-400 text-xs font-medium">
                  Already have an account? <Link href="/login" className="text-clothcare-primary font-bold hover:underline">Sign in</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Back Nav */}
          <div className={`mt-8 text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-clothcare-primary transition-colors text-xs font-bold tracking-widest uppercase italic group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignupPage;
