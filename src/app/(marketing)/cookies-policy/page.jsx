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
    <div className="min-h-screen bg-[#FAFAFA] text-clothcare-dark font-sans selection:bg-clothcare-primary selection:text-text-primary">

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#E46F33_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clothcare-primary/5 text-text-accent text-sm font-bold mb-8">
              <Cookie size={16} /> Digital Footprint
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-display font-black leading-[1.1] lg:leading-[1.05] tracking-tight mb-8">
              Cookies & <br className="hidden sm:block" />
              <span className="text-gray-400">Tracking.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              How we utilize digital signatures to remember your preferences and enhance your fabric care journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 lg:py-32">
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
