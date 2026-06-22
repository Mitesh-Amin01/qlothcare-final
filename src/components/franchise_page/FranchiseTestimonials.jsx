"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote, TrendingUp } from "lucide-react";

export default function FranchiseTestimonials() {
  const testimonials = [
    {
      quote:
        "The automated logistics and centralized marketing mean I don't have to worry about daily acquisition. The hub practically runs itself.",
      name: "Vikram S.",
      role: "Managing Director",
      location: "South Mumbai Franchise",
      roi: "11 Mo ROI",
      dark: true,
    },
    {
      quote:
        "Switching from a traditional dry-cleaning setup to Qlothcare's bio-enzyme infrastructure cut my operational costs by 40% while doubling volume.",
      name: "Priya M.",
      role: "Operations Head",
      location: "Bengaluru Tech Park",
      roi: "3 Hubs Active",
      dark: false,
    },
  ];

  return (
    <section className="bg-bg-white py-20 sm:py-28 lg:py-40 relative z-10 border-t border-gray-100 overflow-hidden">
      {/* Soft ambient glow, premium-section signature already used elsewhere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(circle,rgba(228,111,51,0.06)_0%,transparent_65%)] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-24 justify-center text-center">
          <span className="text-[10px] sm:text-xs uppercase font-black tracking-[0.2em] text-text-accent bg-clothcare-primary/10 px-5 sm:px-6 py-2 rounded-full">
            Network Verification
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-dark tracking-tighter font-display">
            Proven Partners.
          </h2>
          <p className="text-text-muted font-medium text-sm sm:text-base max-w-md">
            Real numbers, from operators who run the network every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={
                testimonial.dark
                  ? { y: -10 }
                  : {
                      y: -10,
                      borderColor: "#E46F33",
                      boxShadow: "0 40px 80px rgba(228,111,51,0.12)",
                    }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-[1.75rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-7 sm:p-10 lg:p-12 flex flex-col group overflow-hidden ${
                testimonial.dark
                  ? "bg-clothcare-darker border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                  : "bg-bg-soft/10 border border-border-soft"
              }`}
            >
              {testimonial.dark && (
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-clothcare-primary/20 rounded-full blur-[90px] pointer-events-none" />
              )}

              {/* Quote mark — inline at top instead of floating off the card edge */}
              <div
                className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shrink-0 transition-transform duration-500 group-hover:scale-105 ${
                  testimonial.dark
                    ? "bg-white/10 text-clothcare-primary"
                    : "bg-bg-white text-text-accent shadow-lg border border-gray-100"
                }`}
              >
                <Quote
                  size={22}
                  className={testimonial.dark ? "fill-clothcare-primary/30" : "fill-clothcare-primary/20"}
                />
              </div>

              <p
                className={`relative z-10 text-lg sm:text-2xl lg:text-[1.7rem] font-black leading-relaxed sm:leading-relaxed mb-8 sm:mb-12 tracking-tight italic flex-1 ${
                  testimonial.dark ? "text-text-primary" : "text-text-dark"
                }`}
              >
                "{testimonial.quote}"
              </p>

              <div
                className={`relative z-10 flex items-center justify-between gap-4 pt-6 sm:pt-8 border-t ${
                  testimonial.dark ? "border-white/10" : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-black text-lg sm:text-xl shrink-0 border ${
                      testimonial.dark
                        ? "bg-clothcare-primary/20 text-clothcare-primary border-clothcare-primary/30"
                        : "bg-clothcare-primary/20 text-text-accent border-clothcare-primary/30"
                    }`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className={`font-black text-base sm:text-xl tracking-tight truncate ${
                        testimonial.dark ? "text-text-primary" : "text-text-dark"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <div
                      className={`text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-0.5 sm:mt-1 truncate ${
                        testimonial.dark ? "text-text-primary/50" : "text-text-muted"
                      }`}
                    >
                      {testimonial.role} · {testimonial.location}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1.5 font-black px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-xs uppercase tracking-wide shrink-0 ${
                    testimonial.dark
                      ? "bg-clothcare-primary text-white shadow-[0_10px_20px_rgba(228,111,51,0.3)]"
                      : "bg-clothcare-primary text-text-primary shadow-[0_10px_20px_rgba(228,111,51,0.3)]"
                  }`}
                >
                  <TrendingUp size={13} className="shrink-0" />
                  <span className="whitespace-nowrap">{testimonial.roi}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}