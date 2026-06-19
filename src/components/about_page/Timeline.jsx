"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Timeline = () => {
  const events = [
  {
    year: "2026",
    title: "The Foundation",
    desc: "We are establishing a premium garment care brand built on modern operations, exceptional service, and uncompromising quality standards.",
  },
  {
    year: "2027",
    title: "Market Expansion",
    desc: "We will expand into key growth markets, strengthening our operational network and customer experience across multiple locations.",
  },
  {
    year: "2028",
    title: "Franchise Growth",
    desc: "We will launch strategic franchise partnerships, enabling entrepreneurs to build successful businesses backed by our proven systems and support.",
  },
  {
    year: "2029",
    title: "Industry Leadership",
    desc: "We will establish a nationwide presence and become a trusted name in premium laundry and garment care solutions.",
  },
];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animate the line drawing down based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-40 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl lg:text-6xl font-black text-text-dark tracking-tighter"
          >
            Our Trajectory.
          </motion.h2>
        </div>

        <div className="relative border-l-0 md:border-l-0">
          {/* The Background Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-bg-soft/40"></div>

          {/* The Animated Draw Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-linear-to-b from-clothcare-primary via-blue-500 to-transparent origin-top z-10"
          ></motion.div>

          <div className="space-y-16 lg:space-y-24">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.3,
                }}
                className={`relative flex flex-col md:flex-row items-center cursor-default ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-white border-4 border-gray-300 z-20 shadow-sm transition-colors duration-500 hover:border-clothcare-primary hover:scale-150"></div>

                <div
                  className={`ml-20 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                      borderColor: "rgba(228,111,51,0.2)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    className="bg-bg-white p-8 rounded-4xl shadow-xl border border-border-soft group"
                  >
                    <span className="text-text-accent font-black text-3xl md:text-4xl tracking-tighter group-hover:text-blue-600 transition-colors">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-text-dark mt-2 mb-4 group-hover:text-text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed group-hover:text-text-dark transition-colors">
                      {event.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
