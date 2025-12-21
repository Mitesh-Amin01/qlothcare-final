import React from 'react';
import { ShieldCheck, Leaf, Smartphone, Clock, ArrowUpRight, Droplets } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Hygiene First Technology",
    description: "We don't mix loads. Your clothes are washed separately in sanitized machines using hospital-grade hygiene protocols.",
    icon: <ShieldCheck className="w-6 h-6 text-clothcare-teal" />,
    stat: "99.9%",
    statLabel: "Germ Removal"
  },
  {
    id: 2,
    title: "Eco-Smart Solvents",
    description: "Our GreenEarth® cleaning process is non-toxic, odorless, and gentle on sensitive skin and delicate fabrics.",
    icon: <Leaf className="w-6 h-6 text-clothcare-teal" />,
    stat: "0%",
    statLabel: "Toxic Chems"
  },
  {
    id: 3,
    title: "Real-Time Tracking",
    description: "Track your driver, view photo proofs of stains, and manage delivery windows instantly via our mobile dashboard.",
    icon: <Smartphone className="w-6 h-6 text-clothcare-teal" />,
    stat: "Live",
    statLabel: "Order Status"
  },
  {
    id: 4,
    title: "24h Express Turnaround",
    description: "Need it fast? Select our Express Service for same-day pickup and next-morning delivery at no extra cost.",
    icon: <Clock className="w-6 h-6 text-clothcare-teal" />,
    stat: "24h",
    statLabel: "Standard Time"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-clothcare-navy relative overflow-hidden font-sans">
      
      {/* Background Decor: Subtle Mesh Gradient for Depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-clothcare-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section: Split Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 border-b border-white/10 pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-clothcare-teal"></span>
              <span className="text-clothcare-teal font-display font-bold text-sm tracking-widest uppercase">
                The Qlothcare Advantage
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              Engineered for perfection. <br />
              <span className="text-gray-500">Designed for peace of mind.</span>
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-gray-400 text-lg leading-relaxed">
              We’ve replaced the traditional, manual laundry experience with a seamless, tech-driven process that prioritizes quality and consistency.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-clothcare-navySoft/40 backdrop-blur-sm border border-white/5 hover:border-clothcare-teal/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon Header */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-clothcare-teal/20 group-hover:border-clothcare-teal/30 transition-all duration-300">
                  {item.icon}
                </div>
                {/* Arrow Icon that appears on hover */}
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-clothcare-teal transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-clothcare-tealSoft transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8 min-h-[80px]">
                  {item.description}
                </p>

                {/* Stat Footer */}
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-display font-bold text-white tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom "Technology" Strip */}
        <div className="mt-6 p-6 rounded-2xl border border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm font-medium">
          <span className="uppercase tracking-widest text-xs opacity-50">Powered By</span>
          <div className="flex items-center gap-8 opacity-70">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Droplets className="w-4 h-4" /> HydroClean™
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Smartphone className="w-4 h-4" /> Q-Track App
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <ShieldCheck className="w-4 h-4" /> FabricGuard
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;