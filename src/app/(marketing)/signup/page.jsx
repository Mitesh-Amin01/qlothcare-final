'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Eye, EyeOff, Sparkles, Chrome, Command, ShieldCheck, Mail, Lock, User, KeyRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/assets/pages/landing_image/heroImage.png';

export default function SignupPage() {
  const [step, setStep] = useState('signup'); // 'signup' | 'verification'
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // OTP State
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('verification');
    }, 1500); // Simulate API then go to verification
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Here you would redirect to dashboard or show success message
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
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

        <div className="relative z-20 w-full h-full flex flex-col justify-between p-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-4 text-3xl font-black tracking-tighter"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-clothcare-primary shadow-2xl">
              <Sparkles size={24} />
            </div>
            Qlothcare.
          </motion.div>

          {/* Testimonial / Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex gap-1.5 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={14} className="text-clothcare-primary fill-clothcare-primary" />)}
            </div>
            <h2 className="text-4xl font-light leading-snug mb-8 max-w-lg text-white/90">
              "Signup took less than a minute. Managing my laundry operations has never been this smooth and professional."
            </h2>
            <div className="flex items-center gap-5">
              <div className="relative w-14 h-14 rounded-full border border-white/20 p-1">
                <div className="w-full h-full rounded-full bg-clothcare-primary/20 flex items-center justify-center font-bold text-lg">AP</div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#050505] rounded-full flex items-center justify-center">
                  <ShieldCheck size={12} className="text-green-400" />
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-lg tracking-wide">Amit Patel</p>
                <p className="text-sm text-white/40 uppercase tracking-widest font-bold mt-1">Premium Partner</p>
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
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 lg:p-20 relative bg-[#050505] z-10 overflow-hidden">

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0 mix-blend-overlay"></div>

        <div className="w-full max-w-[480px] relative z-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-clothcare-primary font-bold uppercase tracking-[0.2em] text-xs pb-4 block">
                    {step === 'signup' ? 'Secure Enrollment' : 'Identity Verification'}
                  </span>
                  <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4">
                    {step === 'signup' ? 'Initialization.' : 'Verify Access.'}
                  </h1>
                  <p className="text-lg text-white/50 font-light">
                    {step === 'signup'
                      ? 'Begin your journey and gain access to the Qlothcare vault.'
                      : `We have dispatched a 6-digit security code to ${formData.email || 'your email'}.`}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Social Login Trio (Only on signup) */}
            <AnimatePresence>
              {step === 'signup' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
                  className="grid grid-cols-2 gap-4 my-10 border-b border-white/10 pb-10 overflow-hidden"
                >
                  <button className="flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl font-bold text-sm text-white transition-all group">
                    <Chrome size={18} className="text-white/50 group-hover:text-white transition-colors" />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl font-bold text-sm text-white transition-all group">
                    <Command size={18} className="text-white/50 group-hover:text-white transition-colors" />
                    Apple
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Forms */}
            <div className="relative mt-8">
              <AnimatePresence mode="wait">
                {step === 'signup' ? (
                  <motion.form
                    key="signup-form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, position: 'absolute', width: '100%' }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSignup}
                    className="space-y-6"
                  >

                    {/* Full Name */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Full Name</label>
                      <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-clothcare-primary transition-colors">
                          <User size={20} />
                        </div>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl py-5 pl-14 pr-6 font-bold text-white focus:outline-none focus:border-clothcare-primary focus:ring-1 focus:ring-clothcare-primary transition-all placeholder:text-white/20"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
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
                    </div>

                    {/* Password */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center pl-1">
                        <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Master Password</label>
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
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full relative group overflow-hidden bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest mt-8 flex items-center justify-center gap-4 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        ) : (
                          <>Initialize Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </span>
                      {/* Background fill animation */}
                      <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    </button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="verify-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, position: 'absolute', width: '100%' }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleVerifyOtp}
                    className="space-y-8"
                  >
                    <div className="flex justify-between gap-2 sm:gap-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={inputRefs[index]}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-16 sm:w-14 sm:h-16 bg-[#0A0A0A] border border-white/10 rounded-2xl text-center font-bold text-2xl text-white focus:outline-none focus:border-clothcare-primary focus:ring-1 focus:ring-clothcare-primary transition-all placeholder:text-white/20"
                          required
                        />
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-white/40">
                        Didn't receive the code?{' '}
                        <button type="button" className="text-clothcare-primary font-bold hover:text-white transition-colors">
                          Resend Signal
                        </button>
                      </p>
                    </div>

                    {/* Verify Button */}
                    <button
                      type="submit"
                      disabled={isLoading || otp.some(d => d === '')}
                      className="w-full relative group overflow-hidden bg-white text-black py-5 rounded-2xl font-bold uppercase tracking-widest mt-4 flex items-center justify-center gap-4 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        ) : (
                          <>Confirm Identity <KeyRound size={18} className="group-hover:scale-110 transition-transform" /></>
                        )}
                      </span>
                      {/* Background fill animation */}
                      <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    </button>

                    <div className="text-center pt-4">
                      <button
                        type="button"
                        onClick={() => setStep('signup')}
                        className="text-xs font-bold text-white/30 hover:text-white/70 uppercase transition-colors tracking-[0.2em]"
                      >
                        Cancel & Return
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Links */}
            <div className="mt-12 text-center text-sm font-medium text-white/40 pt-10 border-t border-white/5 relative z-10">
              <p className="mb-4">
                Already have credentials? <Link href="/login" className="text-white hover:text-clothcare-primary transition-colors pl-2">Access Vault</Link>
              </p>
              <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">
                Return to Main Site
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

    </div>
  );
}
