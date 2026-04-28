"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const scaleIn = {
  hidden: { scale: 0.85, rotate: -2 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
};

const ServicesSection = () => {
  const services = [
    {
      title: "Premium Laundry",
      description: "Professional washing and drying with fabric-specific care for your everyday clothes.",
      image: "/landingservices/fold.jpg",
    },
    {
      title: "Dry Cleaning",
      description: "Specialized chemical cleaning for delicate fabrics, suits, and premium silks.",
      image: "/landingservices/dryCleaning.jpg",
    },
    {
      title: "Shoe Cleaning",
      description: "Expert cleaning and conditioning to restore your footwear to its original shine.",
      image: "/landingservices/delivery.jpg",
    },
    {
      title: "Premium Ironing",
      description: "Professional steam pressing for crisp, wrinkle-free clothes with perfect creases.",
      image: "/landingservices/pressIron.jpeg",
    },
    {
      title: "Stain Removal",
      description: "Advanced treatment for tough spots using specialized, eco-friendly extraction techniques.",
      image: "/landingservices/stain.jpg",
    },
  ];

  return (
    <div className="py-24 md:py-32 bg-gray-50 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Modern Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
            className="max-w-4xl flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6 md:mb-8">
              Professional laundry, <br className="hidden md:block" />
              <span className="text-clothcare-primary italic font-serif font-light pr-2">perfected.</span>
            </h2>
            <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              From everyday washing to delicate dry cleaning, we've got you covered. Experience reliable, premium garment care tailored to your exact needs.
            </p>
          </motion.div>
        </div>

        {/* 2+3 Bento Grid Layout */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            // Top two span 3 cols (50% each), bottom three span 2 cols (33% each) on XL.
            const colSpanClass = index < 2 ? 'xl:col-span-3 h-[28rem]' : 'xl:col-span-2 h-[24rem]';
            // On MD (tablet), top row is 2 cols, next row is 2 cols, last one spans 2 cols to center/fill.
            const mdSpanClass = index === 4 ? 'md:col-span-2 xl:col-span-2' : '';

            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`relative rounded-4xl overflow-hidden group transition-all duration-500 bg-black cursor-pointer transform-gpu ${colSpanClass} ${mdSpanClass}`}
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-1000 scale-[1.05] group-hover:scale-[1.12] opacity-80 group-hover:opacity-100"
                  />
                </div>

                {/* Deeper Rich Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/95 via-gray-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                {/* Text Content */}
                <div className="absolute bottom-8 left-8 right-24 z-10 flex flex-col items-start pr-4">
                  <div className="px-3 py-1 mb-4 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Service 0{index + 1}
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base line-clamp-2 md:line-clamp-3 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Smooth Cutout Bottom Right */}
                <div className="absolute bottom-0 right-0 bg-gray-50 pt-5 pl-5 rounded-tl-[2.5rem] rounded-br-4xl z-20">
                  {/* Visual curves using SVGs to perfectly mask without shadow bleeding */}
                  <svg className="absolute bottom-full right-0 w-8 h-8 text-gray-50 bg-transparent block" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M 100 100 V 0 C 100 55.23 55.23 100 0 100 H 100 Z" />
                  </svg>
                  <svg className="absolute right-full bottom-0 w-8 h-8 text-gray-50 bg-transparent block" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M 100 100 V 0 C 100 55.23 55.23 100 0 100 H 100 Z" />
                  </svg>

                  {/* Action Button */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-900 group-hover:bg-clothcare-primary transition-colors duration-300 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }}
          className="mt-16 flex justify-center w-full"
        >
          <Link href="/services" className="inline-flex items-center justify-center gap-2 group/btn">
            <span className="text-clothcare-primary font-semibold text-lg hover:underline underline-offset-4 decoration-2">View All Care Packages</span>
            <span className="text-2xl text-clothcare-primary leading-none mb-1 group-hover/btn:translate-x-1 transition-transform">&rsaquo;</span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicesSection;
