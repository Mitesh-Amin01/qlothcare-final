"use client";
import React from "react";
import { motion } from "motion/react";
import { Target, Crosshair, ArrowRight } from "lucide-react";
import Button from "../ui/btn/Button";

export default function FranchiseOpportunity() {
  return (
    <section className="bg-bg-white py-40 relative z-10 border-t border-gray-100 overflow-hidden">
      {/* Background Subtle Tech Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(228,111,51,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-clothcare-primary/10 flex items-center justify-center">
                <Target size={18} className="text-text-accent" />
              </div>
              <span className="text-xs font-black text-text-accent uppercase tracking-widest">
                Market Dynamics
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-text-dark leading-[1.1] tracking-tighter mb-10">
              Capitalize on <br />
              an{" "}
              <span className="text-text-accent underline decoration-4 underline-offset-8">
                obsolete
              </span>{" "}
              sector.
            </h2>

            <div className="space-y-8">
              <p className="text-text-muted text-lg leading-relaxed font-medium">
                The global fabric care industry relies on toxic solvents, manual
                ledgers, and fragmented local operators. Qlothcare replaces this
                with a centralized, data-driven biosphere.
              </p>

              <div className="border-l-4 border-clothcare-primary pl-6 py-2 bg-bg-soft/20 rounded-r-2xl">
                <p className="text-text-dark text-xl font-bold leading-relaxed italic">
                  "Franchisees aren't opening dry cleaners; they are deploying
                  critical urban infrastructure with guaranteed territorial
                  monopolies."
                </p>
              </div>
            </div>

           
          </motion.div>

          {/* Right Data Viz Card */}
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] w-full bg-bg-white border border-gray-200 shadow-[0_30px_60px_rgba(0,0,0,0.05)] rounded-4xl overflow-hidden group p-10 flex flex-col justify-between"
          >
            <div className="absolute top-0 w-full h-2 left-0 bg-linear-to-r from-clothcare-primary via-orange-400 to-clothcare-primary"></div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-widest font-bold mb-2">
                  Network Expansion Velocity
                </p>
                <p className="text-5xl text-text-dark font-black tracking-tighter">
                  +412%
                </p>
              </div>
              <div className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-xs font-black uppercase tracking-widest border border-green-200">
                Live Data
              </div>
            </div>

            {/* Abstract Bar Chart */}
            <div className="h-48 flex items-end justify-between gap-3 border-b border-gray-100 pb-6 mt-8">
              {[15, 25, 20, 45, 35, 60, 50, 80, 75, 100].map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-md transition-all duration-500 ${i === 9 ? "bg-clothcare-primary w-[120%]" : "bg-gray-100 hover:bg-gray-200"}`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6">
              <div className="flex items-center gap-2 text-text-accent text-xs uppercase font-black tracking-widest">
                <Crosshair size={16} /> Target Acquisition
              </div>
              <div className="text-text-muted text-xs tracking-widest font-black uppercase">
                Q4 / 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
