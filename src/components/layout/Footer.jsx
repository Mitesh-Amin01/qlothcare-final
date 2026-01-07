'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Facebook, Twitter, Instagram, Linkedin,
  ArrowRight, MapPinnedIcon, PhoneCall
} from 'lucide-react';

/**
 * ANIMATION VARIANTS
 * Using variants ensures the engine doesn't re-calculate styles on every frame, 
 * keeping it "lag-free".
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const Footer = () => {
  return (
    <footer className="bg-clothcare-dark text-white font-sans relative overflow-hidden">

      {/* =========================
          BACKGROUND ELEMENTS
      ========================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="absolute bottom-32.5 left-0 w-full pointer-events-none select-none"
      >
        <h1 className="text-[18vw] font-bold text-white leading-none tracking-tighter text-center translate-y-1/4">
          QLOTHCARE
        </h1>
      </motion.div>

      {/* Mesh Gradients - Static for performance */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-clothcare-teal/10 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* =========================
            PART 1: THE "BIG" CTA
        ========================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-24 lg:py-32 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Don't do laundry. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-clothcare-teal to-white">
                Do life.
              </span>
            </h2>
            <p className="text-xl text-clothcare-tealSoft/60 max-w-xl leading-relaxed">
              Join 12,000+ professionals reclaiming their weekends.
              Download the app today and get $20 off your first order.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <AppButton
              platform="Apple"
              title="Download on the"
              subtitle="App Store"
              primary
            />
            <AppButton
              platform="Google"
              title="Get it on"
              subtitle="Google Play"
            />
          </motion.div>
        </motion.div>

        {/* =========================
            PART 2: LINKS & INFO
        ========================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >

          {/* Brand */}
          <motion.div variants={fadeInUp} className="col-span-2 lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-8 h-8 bg-clothcare-teal rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Qlothcare<span className="text-clothcare-teal">.</span>
              </span>
            </div>

            <p className="text-clothcare-tealSoft/60 leading-relaxed max-w-sm">
              The world's most advanced fabric care infrastructure. We combine
              sustainable chemistry with logistics technology to extend the life of
              your wardrobe.
            </p>

            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={20} />} />
              <SocialLink icon={<Twitter size={20} />} />
              <SocialLink icon={<Instagram size={20} />} />
              <SocialLink icon={<Linkedin size={20} />} />
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-clothcare-tealSoft/60">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" badge="Hiring" />
              <FooterLink text="Sustainability" />
              <FooterLink text="Press & Media" />
              <FooterLink text="Partners" />
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-clothcare-tealSoft/60">
              <FooterLink text="Wash & Fold" />
              <FooterLink text="Dry Cleaning" />
              <FooterLink text="Shoe Care" />
              <FooterLink text="Alterations" />
              <FooterLink text="Corporate" />
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={fadeInUp} className="col-span-2 lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Locations</h4>
            <ul className="space-y-4 text-clothcare-tealSoft/60">
              <FooterLink text="Ahmedabad" />
              <FooterLink text="Gandhinagar" />
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="col-span-2 lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-6 text-clothcare-tealSoft/60">
              <li className="flex items-start gap-3 group">
                <MapPinnedIcon size={25} className="mt-1 shrink-0 group-hover:text-clothcare-teal transition-colors" />
                <span className="text-sm leading-relaxed">
                  First Floor, 101 Ansh Arambh, Nr. Saligram Prime,
                  <br />
                  Sobo Center Road, South Bopal, Ahmedabad 380058
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <PhoneCall size={25} className="mt-1 shrink-0 group-hover:text-clothcare-teal transition-colors" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+919601423424" className="hover:text-clothcare-teal transition-colors">
                    +91 96014 23424
                  </a>
                  <a href="tel:+919284546378" className="hover:text-clothcare-teal transition-colors">
                    +91 92845 46378
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* =========================
            PART 3: BOTTOM BAR
        ========================= */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-clothcare-tealSoft/40">
          <div>&copy; {new Date().getFullYear()} Qlothcare Inc. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="hover:text-clothcare-primaryDark transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-clothcare-primaryDark transition-colors">Terms of Service</a>
            <a href="/cookies-policy" className="hover:text-clothcare-primaryDark transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- HELPER COMPONENTS ---

const SocialLink = ({ icon }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    href="#"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clothcare-primary hover:text-white transition-all duration-300 text-white/60"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ text, badge }) => (
  <li className="group">
    <a href="#" className="flex items-center gap-2 hover:text-clothcare-primary transition-colors duration-300">
      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
        <ArrowRight size={12} />
      </span>
      {text}
      {badge && (
        <span className="text-[10px] font-bold uppercase bg-clothcare-primary text-white px-1.5 py-0.5 rounded ml-2">
          {badge}
        </span>
      )}
    </a>
  </li>
);

const AppButton = ({ platform, title, subtitle, primary }) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg group cursor-pointer ${primary
        ? "bg-white text-clothcare-dark hover:bg-white/90"
        : "bg-transparent border border-white/20 text-white hover:bg-white/10"
      }`}
  >
    <span className="text-2xl">
      {platform === "Apple" ? (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.07.04-2.32.74-3.08 1.63-.68.8-.27 2.13.26 2.15 1.12.02 1.99-.65 2.52-1.63z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#A6D864">
          <path d="M3 20.5V3.5L19 12L3 20.5Z" fill="currentColor" />
        </svg>
      )}
    </span>
    <div className="text-left">
      <p className="text-xs font-bold uppercase tracking-wider opacity-60">{title}</p>
      <p className="text-lg font-display font-bold leading-none">{subtitle}</p>
    </div>
  </motion.button>
);

export default Footer;