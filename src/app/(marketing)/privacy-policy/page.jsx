'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle2, FileText, Fingerprint, KeyRound,Database, } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro');

  // Simple scroll spy setup
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'collection', 'usage', 'security', 'rights'];
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
    <section className="relative overflow-hidden px-10 pt-28 pb-20 lg:pt-28 lg:pb-28 border-b border-gray-100">

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
      animate={{ rotate: 360, scale: [1, 1.03, 1] }}
      transition={{
        rotate: { duration: 50, repeat: Infinity, ease: "linear" },
        scale: { duration: 10, repeat: Infinity },
      }}
      className="absolute h-[470px] w-[470px] rounded-full border border-[#E46F33]/10"
    />

    {/* Shield */}
    <motion.div
      animate={{ y: [-8, 10, -8], rotate: [-2, 2, -2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gradient-to-br from-[#F8C59A] via-[#F0A46A] to-[#E46F33] shadow-[0_30px_70px_rgba(228,111,51,.18)]">
        <Shield size={130} strokeWidth={1.5} className="text-white" />
      </div>

      {/* Chips */}
      <span className="absolute top-8 left-12 h-5 w-5 rounded-full bg-[#744728]" />
      <span className="absolute top-20 right-14 h-4 w-4 rounded-full bg-[#885230]" />
      <span className="absolute bottom-14 left-14 h-6 w-6 rounded-full bg-[#744728]" />
      <span className="absolute bottom-18 right-16 h-4 w-4 rounded-full bg-[#744728]" />
      <span className="absolute top-1/2 left-8 h-4 w-4 rounded-full bg-[#744728]" />
    </motion.div>

    {/* Floating Cards */}
    <motion.div
      animate={{ x: [-5, 6, -5], y: [-12, 8, -12], rotate: [-6, 6, -6] }}
      transition={{ duration: 7, repeat: Infinity }}
      className="absolute left-24 top-16 flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-white/80 shadow-lg backdrop-blur-xl"
    >
      <Lock size={24} className="text-[#E46F33]" />
    </motion.div>

    <motion.div
      animate={{ y: [10, -8, 10], rotate: [0, 12, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute right-20 top-20 flex h-16 w-16 items-center justify-center rounded-3xl border border-white bg-white/75 shadow-xl backdrop-blur-xl"
    >
      <Fingerprint size={28} className="text-[#E46F33]" />
    </motion.div>

    <motion.div
      animate={{ x: [8, -6, 8], y: [-6, 10, -6] }}
      transition={{ duration: 9, repeat: Infinity }}
      className="absolute bottom-16 left-8 flex h-14 w-14 items-center justify-center rounded-xl border border-white bg-white/80 shadow-lg backdrop-blur-xl"
    >
      <KeyRound size={22} className="text-[#E46F33]" />
    </motion.div>

    <motion.div
      animate={{ y: [-10, 10, -10], rotate: [8, -8, 8] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute bottom-12 right-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white/80 shadow-xl backdrop-blur-xl"
    >
      <Database size={26} className="text-[#E46F33]" />
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
        <Shield size={14} />
        Data Protection
      </div>

      <h1 className="font-display text-4xl font-black leading-[1.02] tracking-[-0.03em] text-gray-900 lg:text-[4.3rem]">
        Privacy &
        <br />
        <span className="bg-gradient-to-r from-[#E46F33] to-[#C95521] bg-clip-text text-transparent">
          Security
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500 lg:text-xl">
        We treat your personal data with the same immaculate care and
        precision as we do your finest garments.
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
                <NavButton id="intro" title="01. Introduction" active={activeSection === 'intro'} onClick={() => document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="collection" title="02. Information Collection" active={activeSection === 'collection'} onClick={() => document.getElementById('collection').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="usage" title="03. Data Usage" active={activeSection === 'usage'} onClick={() => document.getElementById('usage').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="security" title="04. Enterprise Security" active={activeSection === 'security'} onClick={() => document.getElementById('security').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="rights" title="05. User Rights" active={activeSection === 'rights'} onClick={() => document.getElementById('rights').scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </div>

            {/* Content Sections */}
            <div className="flex-1 max-w-4xl space-y-32">

              {/* 01. Intro */}
              <motion.section id="intro" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="01" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Introduction</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    At <strong className="text-clothcare-dark">Qlothcare</strong>, transparency isn't just a buzzword; it's the foundation of our premium service. This policy meticulously outlines how our cloud infrastructure and on-the-ground agents collect, secure, and leverage your information to deliver an effortless fabric care experience.
                  </p>
                  <div className="p-6 bg-white border border-gray-100 rounded-2xl flex gap-4 mt-12 shadow-sm">
                    <FileText className="text-text-accent shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-clothcare-dark">Last Updated: January 7, 2026</h4>
                      <p className="text-text-muted text-sm mt-1">Updates to this policy will be communicated via your registered email 30 days prior to implementation.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 02. Collection */}
              <motion.section id="collection" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="02" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Information Collection</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-12">
                    To deliver our 60-minute pickup promise and bespoke garment handling, we securely ingest specific data points.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <DataCard icon={<Eye />} title="Identity Data" desc="Name, encrypted contacts, and your primary servicing addresses." />
                    <DataCard icon={<CheckCircle2 />} title="Garment Profiles" desc="Fabric preferences, allergy notes, and historical sizing requirements." />
                    <DataCard icon={<Lock />} title="Technical Headers" desc="Anonymized IP telemetry and device types for app optimization." />
                    <DataCard icon={<Shield />} title="Logistics Data" desc="Real-time geo-pings exclusively active during active delivery windows." />
                  </div>
                </div>
              </motion.section>

              {/* 03. Usage */}
              <motion.section id="usage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="03" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Data Usage</h2>
                  <div className="prose prose-lg prose-gray max-w-none text-text-muted leading-relaxed">
                    <p>
                      Your data acts as the blueprint for your garment's journey. By analyzing your preferences, our automated routing logic assigns the most suitable rider and alerts the facility to prep specific hypoallergenic cleaning solutions before your clothes even arrive.
                    </p>
                    <ul className="mt-8 space-y-4 list-none p-0">
                      {[
                        'Orchestrating AI-driven logistics for minimal transit times.',
                        'Customizing chemical wash formulas based on your fabric history.',
                        'Facilitating instant ERP tracking from your customer dashboard.',
                        'Processing seamless transactions through PCI-compliant gateways.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 mt-2.5 bg-clothcare-primary rounded-full shrink-0"></div>
                          <span className="text-lg text-clothcare-dark font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 04. Security */}
              <motion.section id="security" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="04" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Enterprise Security</h2>

                  <div className="bg-[#18181B] text-text-primary p-10 lg:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-clothcare-primary/20 blur-[100px] rounded-full"></div>

                    <Shield className="text-text-accent mb-8" size={48} strokeWidth={1} />
                    <h3 className="text-3xl font-display font-bold mb-6">Institutional Grade Protection.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      We do not compromise. All telemetry, transaction data, and garment profiles are encrypted via AES-256 protocols. Your financial data is tokenized through Stripe and never resides on our local facility servers.
                    </p>
                    <div className="flex gap-4">
                      <span className="px-4 py-2 border border-gray-700 rounded-full text-xs font-bold tracking-widest text-gray-300">SOC2 COMPLIANT</span>
                      <span className="px-4 py-2 border border-gray-700 rounded-full text-xs font-bold tracking-widest text-gray-300">PCI-DSS</span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 05. Rights */}
              <motion.section id="rights" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="05" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">User Rights</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    You maintain absolute sovereignty over your profile.
                  </p>
                  <div className="space-y-4">
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-clothcare-primary/20 transition-colors">
                      <h4 className="font-bold text-clothcare-dark mb-2 text-lg">Data Portability</h4>
                      <p className="text-text-muted">Request a complete JSON export of your garme history and preferences instantly.</p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-clothcare-primary/20 transition-colors">
                      <h4 className="font-bold text-clothcare-dark mb-2 text-lg">Right to Erasure</h4>
                      <p className="text-text-muted">Demand a permanent wipe of all your data from our ERP ecosystem, executed within 24 hours.</p>
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
      ? 'bg-white text-text-accent shadow-sm border border-gray-100'
      : 'text-gray-400 hover:text-clothcare-dark hover:bg-gray-50 border border-transparent'
      }`}
  >
    {title}
  </button>
);

const Watermark = ({ number }) => (
  <div className="absolute -top-16 -left-12 lg:-left-24 text-[10rem] lg:text-[14rem] font-display font-black text-gray-100 select-none pointer-events-none leading-none z-0">
    {number}
  </div>
);

const DataCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clothcare-primary/20 transition-all duration-500 group">
    <div className="w-12 h-12 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-clothcare-dark group-hover:bg-clothcare-primary/10 group-hover:text-text-accent transition-colors mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-clothcare-dark mb-3 tracking-tight">{title}</h4>
    <p className="text-text-muted leading-relaxed font-medium">{desc}</p>
  </div>
);
