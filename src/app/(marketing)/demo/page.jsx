'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Phone, User, Send, Building2 } from 'lucide-react';

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const formVariants = {
    hidden: { scale: 0.95, y: 50 },
    visible: { 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  const headerVariants = {
    hidden: { y: 40, scale: 0.95 },
    visible: { 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pt-32 pb-24">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-clothcare-primary/5 rounded-b-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <p className="text-text-accent font-bold tracking-widest uppercase text-sm mb-4">
            Exclusive Walkthrough
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-clothcare-darker leading-[1.1] tracking-tight mb-6">
            Book Your <span className="text-text-accent">Demo</span>
          </h1>
          <p className="text-lg text-clothcare-gray leading-relaxed">
            Experience the future of premium fabric care. Schedule a personalized demo with our experts to see how Qlothcare can elevate your wardrobe management.
          </p>
        </motion.div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto relative perspective-[2000px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden relative"
          >
            {/* Split Layout inside the card */}
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side: Info & Benefits */}
              <div className="lg:w-2/5 bg-clothcare-darker text-text-primary p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-clothcare-primary/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">What to Expect</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-bold text-text-accent text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">Personalized Consultation</h4>
                        <p className="text-sm text-text-primary/70 leading-relaxed">We assess your specific garment care needs and volume.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-bold text-text-accent text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">Process Walkthrough</h4>
                        <p className="text-sm text-text-primary/70 leading-relaxed">Detailed tour of our 8-step quality control systems.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-bold text-text-accent text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">Custom Pricing Plan</h4>
                        <p className="text-sm text-text-primary/70 leading-relaxed">Tailored enterprise or personal pricing recommendations.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-text-primary/60 mb-2">Need immediate assistance?</p>
                  <p className="font-bold tracking-wider">contact@qlothcare.com</p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lg:w-3/5 p-10 lg:p-12">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <Send className="w-10 h-10 ml-1" />
                    </div>
                    <h3 className="text-3xl font-black text-clothcare-darker mb-4">Request Sent!</h3>
                    <p className="text-clothcare-gray leading-relaxed max-w-sm mb-8">
                      Thank you for your interest. One of our specialists will be in touch within 24 hours to confirm your demo time.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-clothcare-darker ml-1">Full Name</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400 group-focus-within:text-text-accent transition-colors" />
                          </div>
                          <input 
                            required
                            type="text" 
                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-text-dark focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary focus:bg-white transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-clothcare-darker ml-1">Work Email</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-text-accent transition-colors" />
                          </div>
                          <input 
                            required
                            type="email" 
                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-text-dark focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary focus:bg-white transition-all"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-clothcare-darker ml-1">Phone Number</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-text-accent transition-colors" />
                          </div>
                          <input 
                            required
                            type="tel" 
                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-text-dark focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary focus:bg-white transition-all"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-clothcare-darker ml-1">Company / Organization</label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Building2 className="h-5 w-5 text-gray-400 group-focus-within:text-text-accent transition-colors" />
                          </div>
                          <input 
                            type="text" 
                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-text-dark focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary focus:bg-white transition-all"
                            placeholder="Optional"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-clothcare-darker ml-1">Preferred Date</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-text-accent transition-colors" />
                        </div>
                        <input 
                          type="date" 
                          className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-text-dark focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-clothcare-darker ml-1">How can we help you?</label>
                      <textarea 
                        rows="4"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-text-dark focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary focus:bg-white transition-all resize-none"
                        placeholder="Tell us a little bit about your garment care needs..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-clothcare-primary text-text-primary font-bold rounded-2xl hover:bg-clothcare-primaryDark transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 shadow-lg shadow-orange-900/20"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Demo
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ArrowRight missing from lucide-react import
function ArrowRight({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
