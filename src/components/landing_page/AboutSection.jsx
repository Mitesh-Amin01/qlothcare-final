'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Variants */
const sectionFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const leftStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const mediaReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const teamGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const teamCard = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Irfan Pathan',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in tech innovation and sustainable business practices',
      image: '/landingabout/team_member_ceo_1767511764298.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Officer',
      bio: 'A specialist pioneering fabric care systems',
      image: '/landingabout/team_member_cto_1767511780392.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Rahul Mehta',
      role: 'Head of Operations',
      bio: 'Operations expert optimizing logistics and customer experience at scale',
      image: '/landingabout/team_member_ops_1767511796826.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Anjali Desai',
      role: 'Marketing Director',
      bio: 'Brand strategist crafting compelling narratives for modern consumers',
      image: '/landingabout/team_member_marketing_1767511813471.png',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <motion.section
      id="about"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-[#FAFAFA] font-sans overflow-hidden"
    >
      {/* Background Editorial Text */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none select-none"
        aria-hidden
      >
        <motion.h1
          initial={{ opacity: 0, x: -40, y: 20 }}
          whileInView={{ opacity: 0.07, x: -10, y: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] pl-5 font-bold text-[#0F172A] leading-none whitespace-nowrap"
        >
          About
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            variants={leftStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Label */}
            <motion.div variants={item} className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="h-px w-8 sm:w-12 bg-clothcare-primary" />
              <span className="text-[#0F172A] font-bold text-xs sm:text-sm tracking-widest uppercase">
                Our Story
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#0F172A] leading-[1.1] mb-6 sm:mb-8"
            >
              The new standard for <br className="hidden sm:block" />
              <span className="text-clothcare-primary">fabric longevity.</span>
            </motion.h2>

            {/* Body Copy */}
            <motion.div variants={item} className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
              <p>
                Founded in 2023, Qlothcare began with a simple observation:
                <strong className="text-[#0F172A]"> clothing care hasn’t evolved in decades.</strong>
              </p>
              <p>
                We replaced harsh chemicals with biodegradable enzymes,
                window hours with real-time tracking, and inefficiency with
                intelligent systems — extending garment life while saving
                your most valuable asset: time.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="lg:col-span-7"
            variants={mediaReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">

              {/* Process Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="sm:row-span-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-xl sm:rounded-2xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <img src="/landingabout/about.png" alt="" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white/90 font-bold text-base sm:text-lg">Eco-Tech Facility</p>
                  <p className="text-white/70 text-xs sm:text-sm">State-of-the-art filtration</p>
                </div>
              </motion.div>

              {/* Stat Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-clothcare-accent-gradient p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white flex flex-col justify-between h-[200px] sm:h-[240px]"
              >
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">Locations</p>
                <p className="text-xl sm:text-2xl font-bold">Gandhinagar<br />Ahemdabad</p>
                <p className="text-white/60 text-xs sm:text-sm">24/7 time for wash & fold orders.</p>
              </motion.div>

              {/* Team Video */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative h-[200px] sm:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <video
                    src="/landingabout/preview.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* TEAM SECTION */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 pt-12 sm:pt-16 border-t border-[#E5E7EB]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="h-px w-8 sm:w-12 bg-clothcare-primary" />
              <span className="text-[#0F172A] font-bold text-xs sm:text-sm tracking-widest uppercase">
                Our Team
              </span>
              <span className="h-px w-8 sm:w-12 bg-clothcare-primary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-3 sm:mb-4"
            >
              Meet the <span className="text-clothcare-primary">Innovators</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto px-4"
            >
              Passionate professionals revolutionizing the laundry industry through technology and care
            </motion.p>
          </div>

          {/* Team Grid */}
          <motion.div
            variants={teamGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={teamCard}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Card Container - Responsive Height */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E5E7EB] hover:border-clothcare-primary/30 h-auto sm:h-[400px] md:h-[420px] flex flex-col">

                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-clothcare-accent-gradient rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Profile Image */}
                  <div className="relative mb-5 sm:mb-6 flex justify-center">
                    <div className="relative">
                      {/* Image Container */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1 group-hover:text-clothcare-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-clothcare-primary mb-2 sm:mb-3 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-4 sm:mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F1F5F9] hover:bg-clothcare-accent-gradient flex items-center justify-center text-[#64748B] hover:text-white transition-all duration-300 group/icon"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>

                      <a
                        href={member.twitter}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F1F5F9] hover:bg-clothcare-accent-gradient flex items-center justify-center text-[#64748B] hover:text-white transition-all duration-300 group/icon"
                        aria-label={`${member.name} Twitter`}
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
