"use client";
import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

export default function FranchiseModels() {
  const models = [
    {
      title: "Collection Hub",
      desc: "High-footfall urban drop-off points with automated tracking.",
      investment: "₹12L - ₹15L",
      area: "200 - 300 Sq.Ft",
      roi: "10 Mo",
      features: [
        "Zero massive machinery required",
        "Drop & Go automated kiosks",
        "Minimal staff footprint",
      ],
      highlight: false,
    },
    {
      title: "Flagship Center",
      desc: "Complete bio-enzyme facility servicing multiple collection hubs.",
      investment: "₹35L - ₹45L",
      area: "800 - 1200 Sq.Ft",
      roi: "14 Mo",
      features: [
        "Full industrial aerospace machinery",
        "B2B commercial capacity built-in",
        "Maximum territorial revenue ceiling",
      ],
      highlight: true,
    },
  ];

  return (
    <section className="bg-black py-14 sm:py-20 lg:py-40 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16 lg:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-text-primary mb-4 sm:mb-6 tracking-tighter leading-tight">
            Deployment Models.
          </h2>
          <p className="text-text-primary/60 text-base sm:text-xl font-medium leading-relaxed px-2 sm:px-4">
            Select the infrastructure tier aligned with your capital deployment
            targets and real estate capacity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{
                y: 40,
                borderColor: "rgba(255,255,255,0.05)",
              }}
              whileInView={{ y: 0 }}
              whileHover={
                !model.highlight
                  ? {
                      y: -8,
                      borderColor: "rgba(255,255,255,0.2)",
                    }
                  : {}
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative p-6 sm:p-10 md:p-14 flex flex-col justify-between rounded-[1.75rem] sm:rounded-[3rem] overflow-hidden ${
                model.highlight
                  ? "bg-clothcare-primary shadow-[0_0_80px_rgba(228,111,51,0.2)] lg:scale-105 z-10"
                  : "bg-[#111] border border-white/5"
              }`}
            >
              {model.highlight && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>
              )}

              <div className="relative z-10 mb-8 sm:mb-12">
                <div className="flex justify-between items-start gap-3 mb-3 sm:mb-4">
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight ${model.highlight ? "text-text-primary" : "text-text-primary"}`}
                  >
                    {model.title}
                  </h3>
                  {model.highlight && (
                    <span className="bg-white text-text-accent text-[9px] sm:text-[10px] uppercase font-black tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shrink-0">
                      Priority Tier
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm sm:text-lg font-medium ${model.highlight ? "text-text-primary/80" : "text-text-primary/40"}`}
                >
                  {model.desc}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 relative z-10 bg-black/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
                <div>
                  <div
                    className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-black mb-1 ${model.highlight ? "text-text-primary/60" : "text-text-primary/30"}`}
                  >
                    Capital
                  </div>
                  <div className="text-base sm:text-2xl font-black text-text-primary leading-tight">
                    {model.investment}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-black mb-1 ${model.highlight ? "text-text-primary/60" : "text-text-primary/30"}`}
                  >
                    Area
                  </div>
                  <div className="text-sm sm:text-xl font-bold text-text-primary leading-tight">
                    {model.area}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-black mb-1 ${model.highlight ? "text-text-primary/60" : "text-text-primary/30"}`}
                  >
                    Return
                  </div>
                  <div className="text-sm sm:text-xl font-bold text-text-primary leading-tight">
                    {model.roi}
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-16 relative z-10 flex-1">
                {model.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 sm:gap-4">
                    <Check
                      size={20}
                      className={`shrink-0 mt-0.5 sm:mt-0 sm:!w-6 sm:!h-6 ${model.highlight ? "text-text-primary" : "text-text-accent"}`}
                    />
                    <span
                      className={`font-bold text-sm sm:text-lg leading-snug ${model.highlight ? "text-text-primary" : "text-text-primary/80"}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                suppressHydrationWarning
                className={`relative z-10 w-full rounded-2xl py-4 sm:py-5 flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-widest text-xs sm:text-sm font-black transition-all group ${
                  model.highlight
                    ? "bg-black text-text-primary hover:bg-white hover:text-black"
                    : "bg-white/10 text-text-primary hover:bg-clothcare-primary"
                }`}
              >
                Initialize Protocol{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}