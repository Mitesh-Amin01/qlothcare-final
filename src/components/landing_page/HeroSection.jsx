import React from 'react';
import Link from 'next/link';
import { Play, ArrowRight, CheckCircle2, Leaf, ShieldCheck, Phone } from 'lucide-react';
import heroImage from '@/assets/pages/landing_image/heroImage.png'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-bg-light overflow-hidden selection:bg-clothcare-teal selection:text-white font-sans">
      
      {/* =========================
          BACKGROUND DECORATION (3D Floating Shapes)
      ========================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right Teal Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-clothcare-teal/20 rounded-full blur-[100px]" />
        {/* Bottom Left Navy Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-clothcare-navy/10 rounded-full blur-[100px]" />
        
        {/* Abstract 3D Cube (CSS only representation) */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-linear-to-br from-clothcare-teal to-clothcare-navy opacity-20 rounded-2xl rotate-12 blur-sm animate-pulse" />
        <div className="absolute bottom-20 right-1/2 w-32 h-32 bg-clothcare-tealSoft opacity-60 rounded-full blur-md" />
      </div>

      {/* =========================
          HERO CONTENT
      ========================= */}
      <main className="container mx-auto px-6 pt-40 lg:pt-26 pb-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-350">
        
        {/* Left: Text Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          
          <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] tracking-tight">
            Redefining Clean.<br />
            <span className="bg-clip-text text-transparent bg-clothcare-primary-gradient">
              Effortlessly Delivered.
            </span>
          </h1>

          <p className="font-sans text-lg text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
            Experience premium laundry and dry cleaning delivered to your door. 
            We combine advanced fabric technology with eco-friendly care, giving you back the luxury of time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-clothcare-primary-gradient text-white font-display font-bold text-lg px-8 py-4 rounded-2xl shadow-clothcare hover:shadow-clothcareSoft hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Schedule Pickup
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="w-full sm:w-auto bg-white border border-border-light text-text-primary font-display font-semibold text-lg px-8 py-4 rounded-2xl hover:border-clothcare-teal hover:text-clothcare-teal transition-all flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 fill-current" />
              See How It Works
            </button>
          </div>

          {/* Features / Trust Badges */}
          <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-text-muted">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-clothcare-teal" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-status-success" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-clothcare-navy" />
              <span>Premium Care</span>
            </div>
          </div>
        </div>

        {/* Right: Visual Container (Glass Card with 3D Image Placeholder) */}
        <div className="lg:w-1/2 w-full relative">
          {/* Background Blob for Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-clothcare-tealSoft/50 rounded-full blur-3xl -z-10" />
          
          {/* Glass Card Container */}
          <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 p-6 rounded-[2.5rem] shadow-clothcare">
            
            {/* Inner Content Area (Placeholder for your 3D Laundry Image) */}
            <div className="relative bg-linear-to-br from-white to-clothcare-tealSoft rounded-4xl overflow-hidden aspect-4/3 flex items-center justify-center border border-white/50 group">
              
              {/* Decorative Circles */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-md z-20 animate-bounce delay-700">
                 <span className="text-xl">✨</span>
              </div>
              
              {/* Placeholder Content - Replace this <img> with your actual 3D asset */}
              <div className="text-center p-8">
                    <Image src={heroImage} alt='Hero 3D Image'/>
                 <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl inline-block shadow-sm">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-status-success" />
                        <span className="font-bold text-text-primary">Order Complete</span>
                    </div>
                 </div>
              </div>

              {/* Floating "Card" Elements simulating the 3D effect */}
              <div className="absolute -left-6 bottom-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse">
                 <div className="w-10 h-10 bg-clothcare-tealSoft rounded-full flex items-center justify-center text-clothcare-teal">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                    <p className="text-xs text-text-muted">Delivery Time</p>
                    <p className="font-bold text-text-primary">24 Hours</p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;