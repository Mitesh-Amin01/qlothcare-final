'use client'
import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Play, Users, ShieldCheck,
  Sparkles, Leaf, Microscope, Heart,
  ChevronRight, ArrowDown, Target, Eye,
  Smartphone, Layers, Zap, Clock, CheckCircle2,
  Thermometer, Droplets, ScanLine, Wind, Shirt
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';


/* ==========================================
   GLOBAL MOTION VARIANTS
   ========================================== */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
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

const teamGrid = staggerContainer; // Alias for backward compatibility in TeamSection

/* ==========================================
   HELPER: SMOOTH SCROLL FUNCTION
   ========================================== */
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================
   COMPONENT 1: STICKY NAV PILLS
   ========================================== */


/* ==========================================
   COMPONENT 2: HERO SECTION
   ========================================== */
const AboutHero = () => {
  return (
    <section className="relative bg-[#F8FAFC] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 text-center lg:text-left"
          >

            <motion.h1
              variants={revealVariants}
              className="text-5xl lg:text-8xl font-display font-bold text-[#0F172A] leading-[0.95] mb-8"
            >
              Freshness <br />
              <span className="italic font-light text-clothcare-primary">is our</span> <br />
              Obsession.
            </motion.h1>

            <motion.p
              variants={revealVariants}
              className="text-xl text-[#64748B] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              We don't just wash fabric; we restore the feeling of brand-new. Merging artisanal care with intelligent systems to give your wardrobe a second life.
            </motion.p>

            <motion.div
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button onClick={() => scrollToSection('mission')} className="group px-10 py-5 bg-[#0F172A] text-white rounded-full font-bold shadow-2xl hover:bg-clothcare-primary transition-all duration-300 flex items-center gap-4">
                Explore the Craft
                <Wind size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Collage - Sensory Focus */}
          <div className="lg:w-1/2 w-full relative h-[600px] hidden lg:block">
            <motion.div
              initial={{ rotate: 10, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 3, scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 right-0 w-[400px] h-[450px] bg-white p-3 rounded-3xl shadow-2xl z-10 overflow-hidden"
            >
              <img src="/landingabout/about.png" alt="Clean Linen" className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
            </motion.div>

            <motion.div
              initial={{ rotate: -15, x: 50, opacity: 0 }}
              animate={{ rotate: -8, x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute bottom-10 left-0 w-[320px] h-[380px] bg-white p-3 rounded-3xl shadow-xl z-20 overflow-hidden"
            >
              <video
                src="/landingabout/preview.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Dynamic Badge */}
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-1/3 left-10 z-30 bg-white/80 backdrop-blur-xl border border-clothcare-primary/20 p-6 rounded-3xl shadow-clothcareSoft flex flex-col items-center gap-2"
            >
              <Droplets className="text-clothcare-primary" size={32} />
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-clothcare-primary tracking-widest">Hydration Balance</p>
                <p className="text-lg font-bold text-[#0F172A]">Ozone Infused</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 3: MISSION & VISION
   ========================================== */
const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* The Craft - Tech Focus */}
          <motion.div
            variants={revealVariants}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-[3rem] p-12 bg-[#F1F5F9] border border-clothcare-primary/5"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-clothcare-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-clothcareSoft">
                <Microscope size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold text-[#0F172A] mb-6">The Craft</h2>
              <p className="text-[#64748B] text-xl leading-relaxed">
                We treat garment care as a science. By integrating <span className="text-clothcare-primary font-bold italic">Ozone technology</span> and precision robotics, we eliminate human error while preserving the delicate structure of every fiber.
              </p>
            </div>
          </motion.div>

          {/* The Care - Human Focus */}
          <motion.div
            variants={revealVariants}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden rounded-[3rem] p-12 bg-[#0F172A] text-white"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-clothcare-primary mb-8 border border-white/20">
                <Heart size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">The Care</h2>
              <p className="text-white/70 text-xl leading-relaxed">
                Technology is our engine, but the human touch is our soul. Every fold is manual, every stain is inspected by eye, and every delivery is a promise of <span className="text-clothcare-primary font-bold">White-Glove reliability</span>.
              </p>
            </div>
            <div className="absolute top-[-10%] right-[-5%] opacity-10 blur-3xl w-64 h-64 bg-clothcare-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 4: WHAT MAKES US DIFFERENT (Bento)
   ========================================== */
const Difference = () => {
  return (
    <section id="difference" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-clothcare-primary font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            Sensory Engineering
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mt-4">The Standard of Clean.</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {/* Bento 1: Large Hygiene */}
          <motion.div
            variants={revealVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-[#E5E7EB] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-clothcare-primary/10 flex items-center justify-center text-clothcare-primary mb-8">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Zero Cross-Contamination</h3>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">We treat every customer’s laundry as a unique biological ecosystem. Your clothes never meet anyone else’s.</p>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {['Single-Load Only', 'Sanitized Cycles', 'Hospital Grade'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-[#e5e5e5] rounded-full text-[10px] font-bold text-clothcare-primary whitespace-nowrap">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Bento 2: Focus on Softness */}
          <motion.div
            variants={revealVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F172A] p-10 rounded-[3rem] text-white flex flex-col items-center text-center justify-center"
          >
            <div className="relative mb-6">
              <Wind size={64} className="text-clothcare-primary animate-pulse" />
              <div className="absolute inset-0 blur-2xl bg-clothcare-primary/30"></div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Air-Soft Finish</h3>
            <p className="text-white/60 text-sm">Steam-injected drying ensures fibers remain fluffy and breathable, never stiff or scratchy.</p>
          </motion.div>

          {/* Bento 3: Speed/Efficiency */}
          <motion.div
            variants={revealVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-clothcare-primary p-10 rounded-[3rem] text-white flex flex-col justify-between"
          >
            <h3 className="text-6xl font-display font-bold">24h</h3>
            <div>
              <p className="text-lg font-bold">Restored & Delivered</p>
              <p className="text-white/70 text-sm mt-2">Precision logistics powered by AI routing.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 5: PROCESS PHILOSOPHY
   ========================================== */
const ProcessFlow = () => {
  const steps = [
    {
      title: 'Digital DNA',
      desc: 'Every garment is tagged with a unique RFID identifier, enabling real-time lifestyle tracking.',
      image: '/landingservices/delivery.jpg',
      icon: ScanLine
    },
    {
      title: 'Spot Rescue',
      desc: 'Our fabric experts treat stains under specialized UV lighting before any washing happens.',
      image: '/landingservices/stain.jpg',
      icon: Sparkles
    },
    {
      title: 'Aquatic Care',
      desc: 'Computer-controlled cycles adjust water pH and enzyme levels based on fabric weight.',
      image: '/landingservices/dryCleaning.jpg',
      icon: Droplets
    },
    {
      title: 'Final Breath',
      desc: 'Steam finished and packaged in breathable, eco-friendly protection for your closet.',
      image: '/landingservices/pressIron.jpeg',
      icon: Shirt
    },
  ];

  return (
    <section id="process" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-display font-bold text-[#0F172A] mb-6">The Care Journey</h2>
            <p className="text-xl text-[#64748B]">Beyond washing, we provide restoration. Each step is designed to expand the lifespan of your favorite pieces.</p>
          </div>
          <div className="hidden lg:block text-clothcare-primary font-bold text-9xl opacity-5 select-none">JOURNEY</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[300px] mb-8 rounded-[2rem] overflow-hidden shadow-xl">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white">
                  <step.icon size={24} />
                </div>
                <div className="absolute bottom-6 left-6 text-white font-display font-bold text-3xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-clothcare-primary transition-colors">{step.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 6: TECHNOLOGY & OPERATIONS
   ========================================== */
const TechOps = () => {
  return (
    <section id="tech" className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
      {/* Background Tech Patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div variants={revealVariants} className="lg:w-1/2">
            <Badge className="bg-clothcare-primary text-white mb-6">Operations 2.0</Badge>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Precision meets <br />Automation.</h2>
            <p className="text-white/70 text-lg mb-10">
              We've built a custom backend that manages the lifecycle of your clothes. Mistakes are minimized through redundant barcode scanning and automated sorting conveyors.
            </p>

            <div className="space-y-6">
              <TechRow icon={ScanLine} title="RFID Tracking" desc="We know exactly where your shirt is in the plant, down to the specific machine." />
              <TechRow icon={Droplets} title="Water Reclamation" desc="Advanced filtration systems recycle 40% of water used, reducing environmental impact." />
              <TechRow icon={Layers} title="Automated Sorting" desc="Computer-vision aided sorting ensures your socks never end up in someone else's bag." />
            </div>
          </motion.div>

          <motion.div variants={revealVariants} className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=2070" alt="Tech Facility" className="w-full h-auto opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>

              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
                    <p className="text-2xl font-bold text-clothcare-primary">99.9%</p>
                    <p className="text-xs text-white/60">Accuracy Rate</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
                    <p className="text-2xl font-bold text-clothcare-primary">45 min</p>
                    <p className="text-xs text-white/60">Avg. Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

const TechRow = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-clothcare-primary shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);



/* ==========================================
   COMPONENT 7: TEAM & CULTURE
   ========================================== */
const TeamSection = () => {
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
      role: 'Chief Operations Officer',
      bio: 'A specialist pioneering logistics and fabric care systems with surgical precision.',
      image: '/landingabout/team_member_cto_1767511780392.png',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Anjali Desai',
      role: 'Marketing Director',
      bio: 'Brand strategist crafting compelling narratives for modern consumers and eco-conscious living.',
      image: '/landingabout/team_member_marketing_1767511813471.png',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-clothcare-primary font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            The Visionaries
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mt-4">Metilculous Minds.</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto mt-4">
            Combining 50+ years of textile expertise with a passion for sustainable innovation.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={teamGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={teamCard}
              whileHover={{ y: -12 }}
              className="group h-full"
            >
              <div className="relative bg-white rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E5E7EB] hover:border-clothcare-primary/40 h-full flex flex-col items-center">

                {/* Profile Image with Sensory Aura */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-clothcare-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-1 group-hover:text-clothcare-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-clothcare-primary mb-6 uppercase tracking-widest italic">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-8 flex-grow">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100 w-full">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-[#F1F5F9] hover:bg-[#0F172A] flex items-center justify-center text-[#64748B] hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-[#F1F5F9] hover:bg-[#0F172A] flex items-center justify-center text-[#64748B] hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={`${member.name} Twitter`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 8: QUALITY COMMITMENT
   ========================================== */
const QualityCommitment = () => {
  return (
    <section id="quality" className="py-20 bg-[#FAFAFA] border-t border-[#E5E7EB]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-4xl text-center"
      >
        <motion.div variants={scaleVariants} className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-clothcare-primary mx-auto mb-6 shadow-sm">
          <ShieldCheck size={32} />
        </motion.div>
        <motion.h2 variants={revealVariants} className="text-3xl font-display font-bold text-[#0F172A] mb-6">Our Quality Promise</motion.h2>
        <motion.p variants={revealVariants} className="text-[#64748B] text-lg mb-10">
          We are so confident in our process that we offer a 100% money-back guarantee. If you aren't thrilled with the crispness of your shirt or the fluffiness of your towel, we will re-clean it for free. No questions asked.
        </motion.p>

        <motion.div variants={revealVariants} className="flex flex-wrap justify-center gap-4">
          <Badge className="bg-white border border-[#E5E7EB] text-[#64748B] py-2 px-4">ISO 9001 Certified</Badge>
          <Badge className="bg-white border border-[#E5E7EB] text-[#64748B] py-2 px-4">Woolmark Approved</Badge>
          <Badge className="bg-white border border-[#E5E7EB] text-[#64748B] py-2 px-4">Hypoallergenic Certified</Badge>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ==========================================
   UTILITY COMPONENTS
   ========================================== */
const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${className}`}>
    {children}
  </span>
);

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
const WhoWeArePage = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen selection:bg-clothcare-primary/20 selection:text-[#0F172A]">
      <AboutHero />
      {/* Sticky Nav is positioned absolutely in Hero, or can be placed here relative */}
      <div className="relative">
        {/* <SectionNav /> */}
        <MissionVision />
        <Difference />
        <ProcessFlow />
        <TechOps />
        <TeamSection />
        <QualityCommitment />
      </div>
    </div>
  );
};

export default WhoWeArePage;