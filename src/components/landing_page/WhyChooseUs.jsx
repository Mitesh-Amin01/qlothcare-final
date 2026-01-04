'use client'

import React from 'react';
import { ShieldCheck, Leaf, Smartphone, Clock, CheckCircle2 } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Hygiene First Technology",
    description: "We don't mix loads. Your clothes are washed separately in sanitized machines using hospital-grade hygiene protocols.",
    icon: ShieldCheck,
    stat: "99.9%",
    statLabel: "Germ Removal",
    featured: true,
    color: "#E46F33"
  },
  {
    id: 2,
    title: "Eco-Smart Solvents",
    description: "Our GreenEarth® cleaning process is non-toxic, odorless, and gentle on sensitive skin and delicate fabrics.",
    icon: Leaf,
    stat: "0%",
    statLabel: "Toxic Chems",
    color: "#4CAF50"
  },
  {
    id: 4,
    title: "24h Express Turnaround",
    description: "Need it fast? Select our Express Service for same-day pickup and next-morning delivery at no extra cost.",
    icon: Clock,
    stat: "24h",
    statLabel: "Standard Time",
    color: "#9C27B0"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 font-sans overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Subtle Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-5"
        style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-5"
        style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section - Clean Light Design */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          {/* Small Label */}
          <div className="mb-6" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#E46F33' }}>
              The Qlothcare Advantage
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both', color: '#2F343A' }}>
            Engineered for
            <span style={{ color: '#E46F33' }}> perfection</span>.
          </h2>

          {/* Decorative Line */}
          <div className="flex justify-center mb-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <div className="h-1 w-24 rounded-full" style={{ backgroundColor: '#E46F33' }}></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl leading-relaxed"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both', color: '#778582' }}>
            We've replaced the traditional, manual laundry experience with a seamless,
            <br className="hidden lg:block" />
            tech-driven process that prioritizes quality and consistency.
          </p>
        </div>

        {/* Bento Grid Layout - Clean Light Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = item.featured;

            return (
              <div
                key={item.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both`,
                  gridColumn: isFeatured ? 'span 1 lg:span 2' : 'span 1',
                  backgroundColor: '#FFFFFF',
                  borderColor: '#D1D3CF'
                }}
                className="relative border rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}></div>

                {/* Stat Badge - Top Right */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="border rounded-xl px-4 py-2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#D1D3CF'
                    }}>
                    <span className="text-2xl font-display font-bold tracking-tight block" style={{ color: '#2F343A' }}>
                      {item.stat}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: '#E46F33' }}>
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: '#FFFFFF50',
                      borderWidth: '1px',
                      borderColor: '#D1D3CF'
                    }}>
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4" style={{ color: '#2F343A' }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#778582' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;