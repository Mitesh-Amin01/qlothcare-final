"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function AboutSection() {

  // Professional "Crazy" Animation Variants based on motion/react
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: 120, opacity: 0, rotateX: -45, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 12, duration: 1 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageRevealVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(15px)", borderRadius: "100px" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
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

        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-32 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >

          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div className="perspective-1000">
              <motion.h2
                variants={textRevealVariants}
                className="text-[5.5rem] lg:text-[7.5rem] leading-[0.85] font-black tracking-tighter uppercase text-clothcare-darker mb-4 lg:mb-0 origin-bottom"
              >
                About<br />Us
              </motion.h2>
            </div>

            <motion.div className="mt-8 lg:mt-32 space-y-6" variants={fadeUpVariants}>
              <div className="relative inline-block">
                <p className="text-[0.65rem] font-bold tracking-wide uppercase text-clothcare-darker relative z-10 pb-1">
                  Luxurious Interior and Industrial Design
                </p>
                <motion.div variants={lineVariants} className="absolute bottom-0 left-0 h-px bg-clothcare-darker" />
              </div>
              <p className="text-[0.85rem] text-clothcare-gray leading-[1.8] pr-4">
                Modern Elegance: Designs featuring clean lines, neutral palettes, and high-quality materials.
              </p>
            </motion.div>
          </div>

          {/* Center Column */}
          <motion.div className="lg:col-span-5 relative group" variants={imageRevealVariants}>
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-sm relative">
              <motion.img
                src="/landingabout/about.png"
                alt="Luxury Interior Main"
                className="w-full h-full object-cover origin-center"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-clothcare-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col pt-2 lg:pt-4">
            <motion.div
              className="w-full h-[180px] lg:h-[160px] relative overflow-hidden rounded-3xl mb-6 shadow-sm group"
              variants={imageRevealVariants}
            >
              <motion.img
                src="/landingabout/about.png"
                alt="Detail view"
                className="w-full h-full object-cover object-top scale-110"
                whileHover={{ scale: 1, y: -5 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <h3 className="text-2xl lg:text-[1.7rem] font-bold text-clothcare-darker mb-3">
                Our Philosophy
              </h3>
              <p className="text-[0.85rem] text-clothcare-gray leading-[1.8] mt-4">
                At Britto Charette, we believe in creating luxurious, personalized environments that reflect our clients' tastes and lifestyles.
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
            className="bg-[#EFEFEF] rounded-[3rem] w-full relative pt-[300px] lg:pt-[100px] pb-12 px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] perspective-[2000px]"
          >

            {/* The White Notch / Meet The Principals Card */}
            <motion.div
              variants={{
                hidden: { y: -80, opacity: 0, rotate: -2 },
                visible: { y: -1, opacity: 1, rotate: 0, transition: { duration: 1, type: "spring", bounce: 0.5 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="absolute -top-px left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[46%] bg-white pb-8 pt-6 px-4 lg:px-8 rounded-b-[3rem] flex flex-col items-center z-20 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-b border-l border-r border-[#EFEFEF]"
            >

              {/* Inverted seamless borders */}
              <div className="hidden lg:block absolute top-0 -left-[1.45rem] w-6 h-6 bg-transparent" style={{ boxShadow: "10px -10px 0 10px white", borderTopRightRadius: "1.5rem" }}></div>
              <div className="hidden lg:block absolute top-0 -right-[1.45rem] w-6 h-6 bg-transparent" style={{ boxShadow: "-10px -10px 0 10px white", borderTopLeftRadius: "1.5rem" }}></div>

              {/* Text */}
              <div className="mt-4 lg:mt-2 text-center w-full overflow-hidden">
                <motion.h2
                  variants={textRevealVariants}
                  className="text-[2.2rem] lg:text-[2.6rem] leading-[1.05] font-black uppercase text-clothcare-darker tracking-tighter"
                >
                  MEET THE
                </motion.h2>
                <motion.h2
                  variants={textRevealVariants}
                  className="text-[2.2rem] lg:text-[2.6rem] leading-[1.05] font-black uppercase text-clothcare-darker tracking-tighter"
                >
                  PRINCIPALS
                </motion.h2>
              </div>

              {/* Pill Image Gallery with Stagger */}
              <motion.div
                className="flex gap-1.5 lg:gap-2 mt-6 mb-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.5, rotate: -30 },
                      visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 12 } }
                    }}
                    whileHover={{ scale: 1.25, rotate: 10, y: -5, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-6 lg:w-18 lg:h-[1.8rem] rounded-full overflow-hidden bg-gray-200 cursor-pointer shadow-sm relative z-0"
                  >
                    <img src={`/landingabout/about.png`} alt={`Project ${i}`} className="w-full h-full object-cover object-center" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUpVariants}
                className="text-[0.65rem] lg:text-[0.7rem] leading-[1.6] text-clothcare-gray text-center max-w-[95%] lg:max-w-[92%]"
              >
                As principal and licensed designer, the founder oversees the day-to-day operations of Britto Charette and the design and manufacture of our firm's custom furniture and award-winning accessories.
              </motion.p>
            </motion.div>

            {/* Left Principal Stack */}
            <motion.div
              variants={fadeUpVariants}
              className="w-full lg:w-[32%] flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pt-24 mt-8 lg:mt-0 group"
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-[280px] lg:max-w-none rounded-3xl lg:rounded-4xl overflow-hidden mb-6 bg-clothcare-soft/20 shadow-md hover:shadow-2xl border border-clothcare-gray/10 relative transition-all duration-500"
              >
                <img
                  src="/landingabout/team_member_ceo_1767511764298.png"
                  alt="Jay Britto"
                  className="w-full h-auto object-cover object-top transform transition-transform duration-1000 ease-in-out group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              <h3 className="text-2xl lg:text-[2rem] font-bold text-clothcare-darker mb-1.5 tracking-tight group-hover:text-clothcare-primary transition-colors duration-500">Jay Britto</h3>
              <p className="text-[0.6rem] lg:text-[0.7rem] text-clothcare-gray font-semibold uppercase tracking-widest mt-1">FOUNDER AND PRINCIPAL</p>
            </motion.div>

            {/* Right Principal Stack */}
            <motion.div
              variants={fadeUpVariants}
              className="w-full lg:w-[32%] flex flex-col items-center lg:items-end text-center lg:text-right z-10 mt-12 lg:mt-0 group"
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full max-w-[280px] lg:max-w-none rounded-3xl lg:rounded-4xl overflow-hidden mb-6 bg-clothcare-soft/20 shadow-md hover:shadow-2xl border border-clothcare-gray/10 relative transition-all duration-500"
              >
                <img
                  src="/landingabout/team_member_ops_1767511796826.png"
                  alt="David Charette"
                  className="w-full h-auto object-cover object-top transform transition-transform duration-1000 ease-in-out group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              <h3 className="text-2xl lg:text-[2rem] font-bold text-clothcare-darker mb-1.5 tracking-tight group-hover:text-clothcare-primary transition-colors duration-500">David Charette</h3>
              <p className="text-[0.6rem] lg:text-[0.7rem] text-clothcare-gray font-semibold uppercase tracking-widest mt-1">FOUNDER AND PRINCIPAL</p>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
