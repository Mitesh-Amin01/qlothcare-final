"use client";
import React from "react";
import { motion } from "motion/react";
import { Smartphone, Database, ScanLine } from "lucide-react";

export default function FranchiseTech() {
  const tools = [
    {
      title: "Customer Vault App",
      icon: <Smartphone size={40} />,
      desc: "Consumer-facing interface. One-tap pickups, live garment tracking via RFID, and automated billing subscriptions.",
    },
    {
      title: "Command Center ERP",
      icon: <Database size={40} />,
      desc: "Your central hub. Manage logistics, track chemical inventory, monitor machine output, and view live revenue analytics.",
    },
    {
      title: "RFID Auto-Sorting",
      icon: <ScanLine size={40} />,
      desc: "Garments tagged with proprietary water-proof chips, eliminating manual sorting and maintaining a zero-loss protocol.",
    },
  ];

  return (
    <section className="bg-bg-white py-20 lg:py-40 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-clothcare-primary/10 text-text-accent text-xs font-black uppercase tracking-widest mb-6">
            Software Dominance
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-text-dark leading-[1.1] tracking-tighter mb-6 sm:mb-8 font-display">
            The Digital <br /> Backbone.
          </h2>
          <p className="text-text-muted text-lg sm:text-xl font-medium leading-relaxed px-4">
            We provide the complete tech infrastructure to run a modern facility
            with zero operational friction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{
                y: 30,
                borderColor: "#e5e7eb",
              }}
              whileInView={{ y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: "#E46F33",
                boxShadow: "0 20px 60px rgba(228,111,51,0.12)",
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-bg-white border rounded-[2.5rem] p-12 group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-4xl bg-bg-soft/10 border border-gray-100 flex items-center justify-center text-text-muted mb-10 group-hover:bg-clothcare-primary group-hover:text-text-primary group-hover:-translate-y-2 transition-all duration-500 shadow-sm">
                {tool.icon}
              </div>

              <h3 className="text-3xl font-black text-text-dark mb-6 tracking-tight group-hover:text-text-accent transition-colors">
                {tool.title}
              </h3>
              <p className="text-text-muted leading-relaxed font-medium text-lg">
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
