'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, ShieldCheck, PieChart, Tag, Settings, FileText } from 'lucide-react';

export default function CookiesPolicy() {
  const [activeSection, setActiveSection] = useState('overview');

  // Simple scroll spy setup
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'essential', 'analytics', 'marketing', 'management'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen  bg-[#FAFAFA] text-clothcare-dark font-sans selection:bg-clothcare-primary selection:text-text-primary">

      {/* Hero Header */}
   <section className="relative overflow-hidden px-10  pt-28 pb-20 lg:pt-28 lg:pb-28 border-b border-gray-100">

  {/* Dot Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(#E46F33_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025]" />

  {/* Grain Overlay */}
  <div
    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
    style={{
      backgroundImage:
        "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.45%22/%3E%3C/svg%3E')",
    }}
  />

  {/* Gradient Blobs */}
  <div className="absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-[#E46F33]/8 blur-[110px]" />
  <div className="absolute right-[18%] bottom-0 h-[260px] w-[260px] rounded-full bg-amber-200/30 blur-[90px]" />

  {/* Graphic */}
  <div className="absolute right-0 top-1/2 hidden lg:flex w-[50%] -translate-y-1/2 items-center justify-center pointer-events-none">

    {/* Single Ring */}
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.03, 1],
      }}
      transition={{
        rotate: {
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 10,
          repeat: Infinity,
        },
      }}
      className="absolute h-[470px] w-[470px] rounded-full border border-[#E46F33]/10"
    />

    {/* Cookie */}
    <motion.div
      animate={{
        y: [-8, 10, -8],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gradient-to-br from-[#F8C59A] via-[#F0A46A] to-[#E46F33] shadow-[0_30px_70px_rgba(228,111,51,.18)]">

        <Cookie
          size={130}
          strokeWidth={1.5}
          className="text-white"
        />

      </div>

      {/* Chips */}
      <span className="absolute top-8 left-12 h-5 w-5 rounded-full bg-[#744728]" />
      <span className="absolute top-20 right-14 h-4 w-4 rounded-full bg-[#885230]" />
      <span className="absolute bottom-14 left-14 h-6 w-6 rounded-full bg-[#744728]" />
      <span className="absolute bottom-18 right-16 h-4 w-4 rounded-full bg-[#744728]" />
      <span className="absolute top-1/2 left-8 h-4 w-4 rounded-full bg-[#744728]" />
    </motion.div>

    {/* Floating Cookies */}

    <motion.div
      animate={{
        x: [-5, 6, -5],
        y: [-12, 8, -12],
        rotate: [-6, 6, -6],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
      }}
      className="absolute left-24 top-16 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white/80 shadow-lg backdrop-blur-xl"
    >
      <Cookie size={24} className="text-[#E46F33]" />
    </motion.div>

    <motion.div
      animate={{
        y: [10, -8, 10],
        rotate: [0, 12, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className="absolute right-20 top-20 flex h-16 w-16 items-center justify-center rounded-3xl border border-white bg-white/75 shadow-xl backdrop-blur-xl"
    >
      <Cookie size={28} className="text-[#E46F33]" />
    </motion.div>

    <motion.div
      animate={{
        x: [8, -6, 8],
        y: [-6, 10, -6],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
      }}
      className="absolute bottom-16 left-8 flex h-14 w-14 items-center justify-center rounded-xl border border-white bg-white/80 shadow-lg backdrop-blur-xl"
    >
      <Cookie size={22} className="text-[#E46F33]" />
    </motion.div>

    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [8, -8, 8],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
      }}
      className="absolute bottom-12 right-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/80 shadow-xl backdrop-blur-xl"
    >
      <Cookie size={26} className="text-[#E46F33]" />
    </motion.div>

  </div>

  {/* Content */}

  <div className="relative z-10 container mx-auto max-w-[1400px] px-6">

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="max-w-2xl"
    >

      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E46F33]/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E46F33]">
        <Cookie size={14} />
        Digital Footprint
      </div>

      <h1 className="font-display text-4xl font-black leading-[1.02] tracking-[-0.03em] text-gray-900 lg:text-[4.3rem]">

        Cookies &
        <br />

        <span className="bg-gradient-to-r from-[#E46F33] to-[#C95521] bg-clip-text text-transparent">
          Tracking
        </span>

      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500 lg:text-xl">
        Learn how we use cookies and similar technologies to personalize your
        experience, remember preferences, and improve the overall performance of
        our website.
      </p>

    </motion.div>

  </div>

</section>

      {/* Main Content Layout */}
      <section className="py-20 px-0 sm:px-10 lg:py-32">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

            {/* Sticky Sidebar Navigation */}
            <div className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-40 space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">Contents</p>
                <NavButton id="overview" title="01. Overview" active={activeSection === 'overview'} onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="essential" title="02. Essential & Core" active={activeSection === 'essential'} onClick={() => document.getElementById('essential').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="analytics" title="03. Analytics Insight" active={activeSection === 'analytics'} onClick={() => document.getElementById('analytics').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="marketing" title="04. Tailored Marketing" active={activeSection === 'marketing'} onClick={() => document.getElementById('marketing').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="management" title="05. Cookie Management" active={activeSection === 'management'} onClick={() => document.getElementById('management').scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </div>

            {/* Content Sections */}
            <div className="flex-1 max-w-4xl space-y-32">

              {/* 01. Overview */}
              <motion.section id="overview" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative overflow-hidden lg:overflow-visible">
                <Watermark number="01" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Overview</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    To deliver a seamless, personalized experience, <strong className="text-clothcare-dark">Qlothcare</strong> employs cookies and similar tracking technologies. These tiny data files allow our platform to recognize your device, remember your login state, and customize your dashboard based on past orders and fabric preferences.
                  </p>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    We believe in total transparency. Below is a meticulous breakdown of the exact trackers we deploy, categorized by their distinct operational purpose within our ecosystem.
                  </p>
                  <div className="p-6 bg-bg-white border border-gray-100 rounded-2xl flex gap-4 mt-12 shadow-sm">
                    <FileText className="text-text-accent shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-clothcare-dark">Last Updated: January 7, 2026</h4>
                      <p className="text-text-muted text-sm mt-1">This policy runs parallel to our broader Privacy & Security protocols.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 02. Essential */}
              <motion.section id="essential" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative overflow-hidden lg:overflow-visible">
                <Watermark number="02" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Essential & Core</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-12">
                    The structural foundation of our platform. These cannot be disabled.
                  </p>

                  <div className="bg-bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clothcare-primary/20 transition-all duration-500 group flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-clothcare-dark group-hover:bg-clothcare-primary/10 group-hover:text-text-accent transition-colors">
                      <ShieldCheck />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-clothcare-dark mb-3 tracking-tight">System Critical Tokens</h4>
                      <p className="text-text-muted leading-relaxed font-medium">These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as secure login authentication, session bridging, load balancing across our servers, and securing your checkout cart state during payment processing.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 03. Analytics */}
              <motion.section id="analytics" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative overflow-hidden lg:overflow-visible">
                <Watermark number="03" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Analytics Insight</h2>

                  <div className="bg-bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clothcare-dark/20 transition-all duration-500 group flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-clothcare-dark group-hover:bg-clothcare-dark/5 transition-colors">
                      <PieChart />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-clothcare-dark mb-3 tracking-tight">Telemetry & Performance</h4>
                      <p className="text-text-muted leading-relaxed font-medium">We utilize aggregated, anonymized data to understand how users navigate our interface. This insight drives continuous UI/UX improvements, helps us identify geographic bottlenecks in our delivery grid, and ensures our application scales flawlessly during peak laundry hours.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 04. Marketing */}
              <motion.section id="marketing" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative overflow-hidden lg:overflow-visible">
                <Watermark number="04" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Tailored Marketing</h2>

                  <div className="bg-bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clothcare-primary/20 transition-all duration-500 group flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-clothcare-dark group-hover:bg-clothcare-primary/10 group-hover:text-text-accent transition-colors">
                      <Tag />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-clothcare-dark mb-3 tracking-tight">Curated Promotions</h4>
                      <p className="text-text-muted leading-relaxed font-medium">Working with trusted third-party affiliates, these trackers ensure that the advertisements you see off-site are highly relevant to your lifestyle. They prevent the repetitive display of the same ad and allow us to measure the efficacy of our referral campaigns.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 05. Management */}
              <motion.section id="management" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative overflow-hidden lg:overflow-visible">
                <Watermark number="05" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Cookie Management</h2>

                  <div className="bg-[#18181B] text-text-primary p-8 lg:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-clothcare-primary/20 blur-[80px] lg:blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

                    <Settings className="text-text-accent mb-8" size={48} strokeWidth={1} />
                    <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">Absolute Sovereignty.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">
                      You retain full control over your digital footprint. While essential cookies cannot be disabled, you can instruct your browser to refuse all non-essential trackers or to indicate when a cookie is being deployed.
                    </p>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4">
                      {['Chrome', 'Safari', 'Firefox', 'Edge'].map((browser) => (
                        <span key={browser} className="px-4 lg:px-5 py-2.5 bg-bg-white/5 border border-white/10 rounded-xl md:rounded-full text-[10px] lg:text-xs font-bold tracking-widest text-center text-gray-300 hover:bg-bg-white hover:text-clothcare-dark transition-all cursor-pointer">
                          {browser.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ==========================================
   HELPER COMPONENTS
   ========================================== */

const NavButton = ({ title, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-5 py-3.5 rounded-xl font-bold transition-all duration-300 ${active
        ? 'bg-bg-white text-text-accent shadow-sm border border-gray-100'
        : 'text-gray-400 hover:text-clothcare-dark hover:bg-bg-soft/10 border border-transparent'
      }`}
  >
    {title}
  </button>
);

const Watermark = ({ number }) => (
  <div className="absolute -top-12 -left-8 lg:-top-16 lg:-left-24 text-[8rem] lg:text-[14rem] font-display font-black text-gray-100 select-none pointer-events-none leading-none z-0 opacity-50 lg:opacity-100">
    {number}
  </div>
);
