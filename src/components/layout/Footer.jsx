'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'motion/react';
import {
  Facebook, Twitter, Instagram, Linkedin,
  ArrowRight, MapPinnedIcon, PhoneCall, Mail
} from 'lucide-react';

/**
 * ANIMATION VARIANTS
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = mounted ? new Date().getFullYear() : "2026";

  return (
    <footer className="bg-clothcare-darker text-text-primary font-sans relative overflow-hidden">

      {/* =========================
          BACKGROUND ELEMENTS
      ========================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="absolute bottom-32 left-0 w-full pointer-events-none select-none hidden lg:block"
      >
        <h1 className="text-[18vw] font-bold text-text-primary leading-none tracking-tighter text-center translate-y-1/4">
          QLOTHCARE
        </h1>
      </motion.div>

      {/* Smooth Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clothcare-primary/5 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-clothcare-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* =========================
            PART 1: THE "BIG" CTA
        ========================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-20 lg:py-32 border-b border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Don't do laundry. <br />
              <span className="text-transparent bg-clip-text bg-clothcare-accent-gradient">
                Do life.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-clothcare-graySoft opacity-70 max-w-xl leading-relaxed">
              Join thousands of professionals reclaiming their weekends.
              Premium fabric care delivered to your doorstep.
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
          className="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >

          {/* Brand */}
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer w-fit">
              <div className="w-13 h-13 bg-bg-soft/15 rounded-xl flex items-center justify-center p-1">
                <Image src="/logo/company_logo.png" alt="Qlothcare Logo" width={40} height={40} className="rounded-xl object-contain" priority />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Qlothcare<span className="text-text-accent">.</span>
              </span>
            </Link>

            <p className="text-clothcare-graySoft/80 leading-relaxed max-w-sm">
              India's most advanced fabric care infrastructure. We combine
              sustainable cleaning with smart logistics to extend the life of
              your cherished wardrobe.
            </p>

            <div className="flex gap-4">
              <SocialLink icon={<Facebook size={18} />} />
              <SocialLink icon={<Twitter size={18} />} />
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Linkedin size={18} />} />
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6 text-text-primary">Company</h4>
            <ul className="space-y-4 text-clothcare-graySoft/70">
              <FooterLink text="About Us" href="/about-us" />
              <FooterLink text="Services" href="/services" />
              <FooterLink text="Pricing" href="/pricing" />
              <FooterLink text="Franchise" href="/franchise-inquiry" />
              <FooterLink text="Contact Us" href="/contact-us" />
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6 text-text-primary">Resources</h4>
            <ul className="space-y-4 text-clothcare-graySoft/70">
              <FooterLink text="Send Inquiry" href="/inquiry" />
              <FooterLink text="Request Demo" href="/demo" badge="NEW" />
              <FooterLink text="Support" href="/contact-us" />
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-4">
            <h4 className="font-display font-bold text-lg mb-6 text-text-primary">Contact</h4>
            <ul className="space-y-6 text-clothcare-graySoft/70">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-clothcare-primary/10 transition-colors">
                  <MapPinnedIcon size={20} className="text-text-accent" />
                </div>
                <span className="text-sm leading-relaxed max-w-[240px]">
                  First Floor, 101 Ansh Arambh, Nr. Saligram Prime,
                  South Bopal, Ahmedabad 380058
                </span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-clothcare-primary/10 transition-colors">
                  <PhoneCall size={20} className="text-text-accent" />
                </div>
                <div className="flex flex-col text-sm">
                  <a href="tel:+919601423424" className="hover:text-text-primary transition-colors">
                    +91 96014 23424
                  </a>
                  <a href="tel:+919284546378" className="hover:text-text-primary transition-colors">
                    +91 92845 46378
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-clothcare-primary/10 transition-colors">
                  <Mail size={20} className="text-text-accent" />
                </div>
                <a href="mailto:Care@qlothcare.com" className="text-sm hover:text-text-primary transition-colors">
                  Care@qlothcare.com
                </a>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* =========================
            PART 3: BOTTOM BAR
        ========================= */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-clothcare-graySoft/40">
          <div className="font-medium">&copy; {currentYear} Qlothcare. Powered by advanced fabric care tech.</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-text-accent transition-colors">Terms of Service</Link>
            <Link href="/cookies-policy" className="hover:text-text-accent transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- HELPER COMPONENTS ---

const SocialLink = ({ icon }) => (
  <motion.a
    whileHover={{ y: -4, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="#"
    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-clothcare-primary hover:text-text-primary transition-all duration-300 text-clothcare-graySoft/60 border border-white/5"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ text, href = "#", badge }) => (
  <li className="group">
    <Link href={href} className="flex items-center gap-2 hover:text-text-primary transition-all duration-300 w-fit">
      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-text-accent">
        <ArrowRight size={12} strokeWidth={3} />
      </span>
      {text}
      {badge && (
        <span className="text-[10px] font-black uppercase bg-clothcare-primary text-text-primary px-1.5 py-0.5 rounded ml-2">
          {badge}
        </span>
      )}
    </Link>
  </li>
);

const AppButton = ({ platform, title, subtitle, primary }) => (
  <motion.button
    whileHover={{ y: -3, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    suppressHydrationWarning
    className={`flex items-center gap-4 px-7 py-4 rounded-2xl transition-all duration-300 shadow-xl group cursor-pointer border ${primary
      ? "bg-white text-clothcare-dark darker border-transparent hover:shadow-white/5"
      : "bg-transparent border-white/10 text-text-primary hover:bg-white/5"
      }`}
  >
    <span className="text-3xl">
      {platform === "Apple" ? (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.07.04-2.32.74-3.08 1.63-.68.8-.27 2.13.26 2.15 1.12.02 1.99-.65 2.52-1.63z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#E46F33">
          <path d="M3 20.5V3.5L19 12L3 20.5Z" fill="currentColor" />
        </svg>
      )}
    </span>
    <div className="text-left">
      <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{title}</p>
      <p className="text-lg font-display font-bold leading-none">{subtitle}</p>
    </div>
  </motion.button>
);

export default Footer;