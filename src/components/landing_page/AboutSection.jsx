"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function AboutSection() {

  // Professional "Crazy" Animation Variants based on motion/react
  const containerVariants = {
    hidden: {}, // no opacity
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: 120, rotateX: -45, scale: 0.9 },
    visible: {
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 12, duration: 1 }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 50, scale: 0.95 },
    visible: {
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageRevealVariants = {
    hidden: { scale: 0.85, rotate: -2, borderRadius: "100px" },
    visible: {
      scale: 1,
      rotate: 0,
      borderRadius: "40px",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };


  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-white min-h-screen overflow-hidden text-clothcare-darker font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section - 3 Column Layout (4-5-3) */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-32 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >

          {/* Left Column (4/12) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4">
            <div className="perspective-1000 mb-12 lg:mb-24">
              <motion.h2
                variants={textRevealVariants}
                className="text-[4.5rem] sm:text-[5.5rem] lg:text-[7rem] leading-[0.85] font-black tracking-tighter uppercase text-clothcare-darker origin-bottom"
              >
                About<br />Us
              </motion.h2>
            </div>

            <motion.div className="space-y-6" variants={fadeUpVariants}>
              <div className="relative inline-block">
                <p className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-text-accent relative z-10 pb-1">
                  Premium Fabric Care & Innovation
                </p>
                <motion.div variants={lineVariants} className="absolute bottom-0 left-0 h-px bg-clothcare-primary" />
              </div>
              <p className="text-[0.85rem] text-clothcare-gray leading-[1.8] pr-4 max-w-sm">
                Redefining garment treatment through a blend of artisanal expertise and software-level precision.
              </p>
            </motion.div>
          </div>

          {/* Center Column (5/12) */}
          <motion.div className="lg:col-span-5 relative group" variants={imageRevealVariants}>
            <div className="w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <motion.img
                src="/landingabout/about_premium.png"
                alt="Qlothcare Premium Studio"
                className="w-full h-full object-cover origin-center"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-clothcare-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Right Column (3/12) */}
          <div className="lg:col-span-3 flex flex-col pt-2 lg:pt-8">
            <motion.div
              className="w-full h-[200px] lg:h-[180px] relative overflow-hidden rounded-4xl mb-8 shadow-lg group"
              variants={imageRevealVariants}
            >
              <motion.img
                src="/landingabout/about_detail.png"
                alt="Fabric Inspection Detail"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <h3 className="text-2xl lg:text-[1.8rem] font-bold text-clothcare-darker mb-4 tracking-tight leading-tight">
                Our Philosophy
              </h3>
              <p className="text-[0.85rem] text-clothcare-gray leading-[1.8]">
                At Qlothcare, we believe that every garment is a masterpiece. Our philosophy is rooted in preserving the lifespan of your wardrobe with obsessive quality control.
              </p>
            </motion.div>
          </div>

        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="relative max-w-6xl mx-auto mt-24 lg:mt-48 mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
          }}
        >
          {/* Gray Container */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 150, scale: 0.9, rotateX: 10 },
              visible: {
                opacity: 1, y: 0, scale: 1, rotateX: 0,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15, delayChildren: 0.3 }
              }
            }}
            className="bg-[#F9F9F9] rounded-[4rem] w-full relative pt-[320px] lg:pt-[120px] pb-16 px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-8 shadow-[0_30px_60px_rgba(0,0,0,0.04)] perspective-[2000px] border border-gray-100"
          >

            {/* The White Notch / Meet The Team Card */}
            <motion.div
              variants={{
                hidden: { y: -80, opacity: 0, rotate: -2 },
                visible: { y: -1, opacity: 1, rotate: 0, transition: { duration: 1, type: "spring", bounce: 0.5 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="absolute -top-px left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] lg:w-[48%] bg-white pb-10 pt-8 px-6 lg:px-10 rounded-b-[4rem] flex flex-col items-center z-20 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-b border-l border-r border-gray-50"
            >

              {/* Inverted seamless corners */}
              <div className="hidden lg:block absolute top-0 -left-[1.45rem] w-6 h-6 bg-transparent" style={{ boxShadow: "10px -10px 0 10px white", borderTopRightRadius: "1.5rem" }}></div>
              <div className="hidden lg:block absolute top-0 -right-[1.45rem] w-6 h-6 bg-transparent" style={{ boxShadow: "-10px -10px 0 10px white", borderTopLeftRadius: "1.5rem" }}></div>

              <div className="text-center w-full overflow-hidden mb-6">
                <motion.h2
                  variants={textRevealVariants}
                  className="text-[2.5rem] lg:text-[3rem] leading-none font-black uppercase text-clothcare-darker tracking-tighter"
                >
                  THE MINDS
                </motion.h2>
                <motion.h2
                  variants={textRevealVariants}
                  className="text-[2.5rem] lg:text-[3rem] leading-none font-black uppercase text-text-accent tracking-tighter italic font-serif"
                >
                  BEHIND CARE
                </motion.h2>
              </div>

              <motion.div
                className="flex flex-wrap justify-center gap-2 mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
                }}
              >
                {['Innovation', 'Quality', 'Hygiene', 'Sustainability'].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeUpVariants}
                    className="px-4 py-1.5 bg-gray-50 text-clothcare-gray text-[0.6rem] font-bold uppercase tracking-widest rounded-full border border-gray-100"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUpVariants}
                className="text-sm leading-relaxed text-clothcare-gray text-center max-w-[90%]"
              >
                Our founders combined decades of experience in textile science and logistical engineering to create a service that treats every garment as a masterpiece.
              </motion.p>
            </motion.div>

            {/* Left Member */}
            <motion.div
              variants={fadeUpVariants}
              className="w-full lg:w-[32%] flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pt-24 mt-8 lg:mt-0 group"
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-[280px] lg:max-w-none aspect-4/5 rounded-[2.5rem] overflow-hidden mb-8 bg-gray-100 shadow-xl border border-gray-100 relative transition-all duration-500"
              >
                <img
                  src="/landingabout/team_member_ceo_1767511764298.png"
                  alt="Jay Britto"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                />
              </motion.div>
              <h3 className="text-3xl font-bold text-clothcare-darker mb-1 tracking-tight">Jay Britto</h3>
              <p className="text-xs text-text-accent font-bold uppercase tracking-widest">CHIEF INNOVATION OFFICER</p>
            </motion.div>

            {/* Right Member */}
            <motion.div
              variants={fadeUpVariants}
              className="w-full lg:w-[32%] flex flex-col items-center lg:items-end text-center lg:text-right z-10 mt-12 lg:mt-0 group"
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-[280px] lg:max-w-none aspect-4/5 rounded-[2.5rem] overflow-hidden mb-8 bg-gray-100 shadow-xl border border-gray-100 relative transition-all duration-500"
              >
                <img
                  src="/landingabout/team_member_ops_1767511796826.png"
                  alt="David Charette"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                />
              </motion.div>
              <h3 className="text-3xl font-bold text-clothcare-darker mb-1 tracking-tight">David Charette</h3>
              <p className="text-xs text-text-accent font-bold uppercase tracking-widest">DIRECTOR OF OPERATIONS</p>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
