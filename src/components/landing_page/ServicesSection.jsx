"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const scaleIn = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => {
  const services = [
    {
      title: "Premium Laundry",
      description:
        "Professional washing and drying with fabric-specific care for your everyday clothes.",
      image: "/landingservices/fold.jpg",
    },
    {
      title: "Dry Cleaning",
      description:
        "Specialized chemical cleaning for delicate fabrics, suits, and premium silks.",
      image: "/landingservices/dryCleaning.jpg",
    },
    {
      title: "Shoe Cleaning",
      description:
        "Expert cleaning and conditioning to restore your footwear to its original shine.",
      image: "/landingservices/delivery.jpg",
    },
    {
      title: "Premium Ironing",
      description:
        "Professional steam pressing for crisp, wrinkle-free clothes with perfect creases.",
      image: "/landingservices/pressIron.jpeg",
    },
    {
      title: "Stain Removal",
      description:
        "Advanced treatment for tough spots using specialized, eco-friendly extraction techniques.",
      image: "/landingservices/stain.jpg",
    },
  ];

  return (
    <div className="py-24 md:py-32 bg-bg-white overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="max-w-4xl flex flex-col items-center"
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
              What we offer
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-[1.05] tracking-tight mb-6 md:mb-8">
              More than{" "}
              <span className="text-text-accent italic font-serif font-light pr-2">
                clean.
              </span>
            </h2>
            <p className="text-text-muted text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              Premium garment care that protects your wardrobe, extends fabric
              life, and keeps you looking your best every day.
            </p>
          </motion.div>
        </div>

        {/* 2+3 Bento Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const colSpanClass =
              index < 2
                ? "xl:col-span-3 h-[28rem]"
                : "xl:col-span-2 h-[24rem]";
            const mdSpanClass =
              index === 4 ? "md:col-span-2 xl:col-span-2" : "";

            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`group relative isolate rounded-4xl overflow-hidden cursor-pointer ${colSpanClass} ${mdSpanClass}`}
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-clothcare-darker/95 via-clothcare-darker/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                {/* Text Content */}
                <div className="absolute bottom-8 left-8 right-24 z-10 flex flex-col items-start">
                  <div className="px-3 py-1 mb-4 bg-clothcare-gray/20 backdrop-blur-md border border-white/20 rounded-full text-text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Service 0{index + 1}
                  </div>
                  <h3 className="text-text-primary text-2xl md:text-3xl font-bold mb-3 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-text-primary/60 text-sm md:text-base line-clamp-2 md:line-clamp-3 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button — no SVG cutout, clean floating button */}
                <div className="absolute bottom-6 right-6 z-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-bg-dark group-hover:bg-clothcare-primary transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center w-full"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 group/btn"
          >
            <span className="text-text-accent font-semibold text-lg hover:underline underline-offset-4 decoration-2">
              View All Care Packages
            </span>
            <span className="text-2xl text-text-accent leading-none mb-1 group-hover/btn:translate-x-1 transition-transform">
              &rsaquo;
            </span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicesSection;