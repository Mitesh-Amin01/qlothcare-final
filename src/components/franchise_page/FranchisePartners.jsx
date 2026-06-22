"use client";
import React from "react";
import { motion } from "motion/react";
import { Zap, ShieldCheck, Cpu, Fingerprint } from "lucide-react";

export default function FranchisePartners() {
  const partners = [
    { name: "STRIPE", icon: <Fingerprint size={24} /> },
    { name: "AWS", icon: <Cpu size={24} /> },
    { name: "RAZORPAY", icon: <Zap size={24} /> },
    { name: "ZOMATO", icon: <ShieldCheck size={24} /> },
  ];

  return (
    <section className="bg-clothcare-black py-6 lg:pt-14 border-b border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-12 text-center">
          Enterprise Infrastructure Integrations
        </p>

        {/* Responsive Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-12 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{
                y: 20,
                opacity: 0.4,
                filter: "grayscale(100%)",
              }}
              whileInView={{ y: 0, opacity: 0.4 }}
              whileHover={{
                y: -4,
                opacity: 1,
                filter: "grayscale(0%)",
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: idx * 0.05,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-2 md:gap-3 cursor-pointer text-text-primary"
            >
              <span className="text-text-accent shrink-0">{partner.icon}</span>
              <span className="font-display font-black text-lg md:text-2xl tracking-widest truncate">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}