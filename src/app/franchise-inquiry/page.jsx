'use client';

import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Download,
  MapPin,
  Briefcase,
  Zap,
  Users,
  DollarSign,
  BarChart3,
  Package,
  Droplets,
  Sun,
  Shield,
  Sparkles,
  Globe,
  Target,
} from 'lucide-react';

/* ==========================================
   THEME COLORS REFERENCE
   primary: '#E46F33'
   primaryDark: '#CC5F2B'
   dark: '#3C4249'
   darker: '#2F343A'
   gray: '#778582'
   graySoft: '#D1D3CF'
========================================== */

const FranchiseHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: '45+', label: 'Active Hubs', icon: <MapPin size={20} /> },
    { value: '₹12Cr', label: 'Annual Revenue', icon: <DollarSign size={20} /> },
    { value: '14Mo', label: 'Avg ROI Period', icon: <TrendingUp size={20} /> },
    { value: '4.9★', label: 'Customer Rating', icon: <Sparkles size={20} /> },
  ];

  return (
    <section className="relative min-h-screen bg-[#2F343A] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(228, 111, 51, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(228, 111, 51, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Brand Orbs */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-[#E46F33]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-[#3C4249]/40 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className={`text-center max-w-5xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E46F33]/10 border border-[#E46F33]/20 rounded-full text-[#E46F33] text-sm font-medium mb-6 backdrop-blur-sm">
            <Zap size={16} className="animate-pulse" />
            India's Most Advanced Laundry Franchise
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
            Own a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E46F33] to-[#CC5F2B] animate-gradient">
              Smart Laundry
            </span>
            <span className="block text-5xl md:text-6xl mt-2">Powerhouse</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#D1D3CF] max-w-3xl mx-auto mb-12 leading-relaxed">
            Join a technology-first franchise where AI meets fabric care. 
            Complete operations, proven systems, <span className="text-[#E46F33] font-semibold">guaranteed support</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-10 py-5 bg-[#E46F33] hover:bg-[#CC5F2B] text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#E46F33]/30 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3">
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group px-10 py-5 bg-white/5 hover:bg-white/10 border-2 border-[#778582] text-white rounded-2xl font-bold text-lg backdrop-blur-md transition-all flex items-center justify-center gap-3">
              <Download size={20} />
              Download Brochure
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="group bg-[#3C4249]/50 hover:bg-[#3C4249] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:scale-105 hover:border-[#E46F33]/50">
                <div className="text-[#E46F33] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-[#778582] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FloatingFeature 
            icon={<Smartphone />}
            title="Mobile-First Platform"
            description="Custom app with real-time tracking"
            delay={0}
            mounted={mounted}
          />
          <FloatingFeature 
            icon={<Shield />}
            title="Territory Protection"
            description="Exclusive 5km radius guarantee"
            delay={100}
            mounted={mounted}
          />
          <FloatingFeature 
            icon={<Target />}
            title="Proven Model"
            description="14-month average ROI timeline"
            delay={200}
            mounted={mounted}
          />
        </div>
      </div>
    </section>
  );
};

const FloatingFeature = ({ icon, title, description, delay, mounted }) => (
  <div className={`group bg-[#3C4249]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#E46F33]/50 transition-all hover:scale-105 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
    <div className="w-14 h-14 bg-gradient-to-br from-[#E46F33] to-[#CC5F2B] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
    <p className="text-[#778582] text-sm">{description}</p>
  </div>
);

const WhyClothCare = () => {
  const benefits = [
    {
      icon: <Zap />,
      title: 'Complete Tech Stack',
      points: ['Proprietary mobile app', 'Real-time order tracking', 'Automated billing', 'Customer analytics']
    },
    {
      icon: <Package />,
      title: 'Turnkey Operations',
      points: ['Equipment & setup', 'Training & SOPs', 'Quality control', 'Supply chain support']
    },
    {
      icon: <Globe />,
      title: 'Marketing Engine',
      points: ['National brand campaigns', 'Local digital marketing', 'Social media content', 'Acquisition tools']
    },
    {
      icon: <Users />,
      title: 'Ongoing Support',
      points: ['Account manager', '24/7 tech support', 'Regular reviews', 'Community network']
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E46F33]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#3C4249] mb-4">
            Why Partner with <span className="text-[#E46F33]">ClothCare?</span>
          </h2>
          <p className="text-xl text-[#778582] max-w-3xl mx-auto">
            We've built the infrastructure. You bring the ambition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group bg-[#D1D3CF]/20 border-2 border-transparent hover:border-[#E46F33] rounded-3xl p-8 transition-all hover:shadow-xl">
              <div className="w-16 h-16 bg-[#E46F33] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#3C4249] mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#3C4249]">
                    <CheckCircle2 size={20} className="text-[#E46F33] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InvestmentBreakdown = () => {
  return (
    <section className="py-24 bg-[#D1D3CF]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#3C4249] mb-4">
            Investment <span className="text-[#E46F33]">Breakdown</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-2 border-[#D1D3CF] rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-[#3C4249] text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#D1D3CF] mb-2">Total Investment Range</p>
                  <p className="text-4xl md:text-5xl font-black text-[#E46F33]">₹25L - ₹40L</p>
                </div>
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                  <BarChart3 size={40} className="text-[#E46F33]" />
                </div>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <InvestmentItem label="Franchise Fee" value="₹5L" />
              <InvestmentItem label="Equipment & Setup" value="₹12L - ₹20L" />
              <InvestmentItem label="Interior & Branding" value="₹4L - ₹8L" />
              <InvestmentItem label="Working Capital" value="₹4L - ₹7L" />
            </div>

            <div className="bg-[#E46F33]/5 p-8 border-t-2 border-[#E46F33]/10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-[#E46F33] text-sm font-bold mb-2">PROFIT MARGIN</p>
                  <p className="text-3xl font-black text-[#3C4249]">35% - 45%</p>
                </div>
                <div>
                  <p className="text-[#E46F33] text-sm font-bold mb-2">PAYBACK PERIOD</p>
                  <p className="text-3xl font-black text-[#3C4249]">12-18 Mo</p>
                </div>
                <div>
                  <p className="text-[#E46F33] text-sm font-bold mb-2">MONTHLY REVENUE</p>
                  <p className="text-3xl font-black text-[#3C4249]">₹4L - ₹8L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InvestmentItem = ({ label, value }) => (
  <div className="flex items-center justify-between py-4 border-b border-[#D1D3CF]/50 last:border-0">
    <span className="text-[#778582] font-medium">{label}</span>
    <span className="text-xl font-bold text-[#3C4249]">{value}</span>
  </div>
);

const ApplicationForm = () => {
  return (
    <section className="py-24 bg-[#2F343A] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-[#E46F33] text-white p-12 text-center">
              <Briefcase size={40} className="mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Start?</h2>
              <p className="text-xl opacity-90">Fill out the form below</p>
            </div>

            <div className="p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="First Name" placeholder="John" />
                  <FormInput label="Last Name" placeholder="Doe" />
                </div>
                <FormInput label="Email" type="email" placeholder="john@example.com" />
                
                <button className="w-full bg-[#E46F33] hover:bg-[#CC5F2B] text-white font-bold py-5 rounded-2xl text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#E46F33]/30">
                  Submit Application
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({ label, type = 'text', placeholder }) => (
  <div>
    <label className="block text-sm font-bold text-[#3C4249] mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-2 border-[#D1D3CF] focus:border-[#E46F33] rounded-xl px-4 py-3 text-[#3C4249] focus:outline-none transition-colors"
    />
  </div>
);

export default function FranchisePage() {
  return (
    <div className="font-sans antialiased bg-white">
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      
      <FranchiseHero />
      <WhyClothCare />
      <InvestmentBreakdown />
      <ApplicationForm />
    </div>
  );
}