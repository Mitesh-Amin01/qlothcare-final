"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function FranchiseTestimonials() {
  const testimonials = [
    {
      quote:
        "The automated logistics and centralized marketing mean I don't have to worry about daily acquisition. The hub practically runs itself.",
      name: "Vikram S.",
      role: "Managing Director",
      location: "South Mumbai Franchise",
      roi: "11 Mo ROI",
    },
    {
      quote:
        "Switching from a traditional dry-cleaning setup to Qlothcare's bio-enzyme infrastructure cut my operational costs by 40% while doubling volume.",
      name: "Priya M.",
      role: "Operations Head",
      location: "Bengaluru Tech Park",
      roi: "3 Hubs Active",
    },
  ];

  return (
    <section className="bg-bg-white py-40 relative z-10 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center gap-4 mb-24 justify-center text-center">
          <span className="text-xs uppercase font-black tracking-[0.2em] text-text-accent bg-clothcare-primary/10 px-6 py-2 rounded-full">
            Network Verification
          </span>
          <h2 className="text-5xl font-black text-text-dark tracking-tighter font-display">
            Proven Partners.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{
                y: 30,
                borderColor: "#D1D3CF",
              }}
              whileInView={{ y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.015,
                borderColor: "#E46F33",
                boxShadow: "0 40px 80px rgba(228,111,51,0.12)",
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-bg-soft/10 border border-border-soft rounded-[3rem] p-12 group"
            >
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-bg-white rounded-full flex items-center justify-center shadow-2xl border border-gray-100 text-text-accent group-hover:scale-110 transition-transform duration-500">
                <Quote size={40} className="fill-clothcare-primary/20" />
              </div>

              <p className="text-2xl font-black text-text-dark leading-relaxed mb-12 tracking-tight italic mt-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-15 h-13 rounded-full bg-clothcare-primary/20 text-text-accent flex items-center justify-center font-black text-xl border border-clothcare-primary/30">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-text-dark text-xl tracking-tight">
                      {testimonial.name}
                    </h4>
                    <div className="text-xs text-text-muted uppercase tracking-widest font-bold mt-1">
                      {testimonial.role} | {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="bg-clothcare-primary text-text-primary font-black px-6 py-3 rounded-xl text-xs uppercase shadow-[0_10px_20px_rgba(228,111,51,0.3)]">
                  {testimonial.roi}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
