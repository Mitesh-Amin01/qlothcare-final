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
     <section className="relative overflow-hidden bg-white border-b border-gray-100 pt-32 pb-20 lg:pt-30 lg:pb-32">

  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(#E46F33_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.03]" />

  {/* Orange Glow */}
  <div className="absolute right-[-180px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[#E46F33]/10 blur-[120px]" />

  {/* Right Illustration */}
  <div className="absolute right-0 top-1/2 hidden w-[45%] -translate-y-1/2 items-center justify-center lg:flex pointer-events-none">

    {/* Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[520px] w-[520px] rounded-full border border-[#E46F33]/10"
    />

    {/* Ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[420px] w-[420px] rounded-full border border-[#E46F33]/10"
    />

    {/* Main Shield */}
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="relative"
    >
      <div className="flex h-[290px] w-[290px] items-center justify-center rounded-full bg-gradient-to-br from-[#F6D3BF] to-[#E46F33] shadow-[0_40px_120px_rgba(228,111,51,.18)]">

        <Shield
          size={155}
          strokeWidth={1.6}
          className="text-white"
        />

      </div>

      {/* Floating Dots */}
      <span className="absolute left-12 top-12 h-5 w-5 rounded-full bg-white shadow-lg" />
      <span className="absolute right-12 top-20 h-4 w-4 rounded-full bg-white shadow-lg" />
      <span className="absolute bottom-14 left-16 h-6 w-6 rounded-full bg-white shadow-lg" />
      <span className="absolute bottom-20 right-20 h-4 w-4 rounded-full bg-white shadow-lg" />
    </motion.div>

    {/* Floating Cards */}

    {[
      {
        icon: <Lock size={24} />,
        title: "Encrypted",
        position: "top-10 left-10",
      },
      {
        icon: <Fingerprint size={24} />,
        title: "Identity",
        position: "top-16 right-8",
      },
      {
        icon: <KeyRound size={24} />,
        title: "Access",
        position: "bottom-16 left-0",
      },
      {
        icon: <Database size={24} />,
        title: "Storage",
        position: "bottom-6 right-10",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
        }}
        className={`absolute ${item.position}`}
      >
        <div className="rounded-2xl border border-white bg-white/70 px-5 py-4 shadow-xl backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E46F33]/10 text-[#E46F33]">
              {item.icon}
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Security
              </p>

              <p className="font-semibold text-gray-800">
                {item.title}
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    ))}

  </div>

  {/* Content */}

  <div className="relative z-10 container mx-auto max-w-[1400px] px-6">

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="max-w-4xl"
    >

      <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#E46F33]/5 px-4 py-2 text-sm font-bold text-[#E46F33]">

        <Shield size={16} />

        Data Protection

      </div>

      <h1 className="mb-8 font-display text-[3.5rem] font-black leading-[1.05] tracking-tight lg:text-[5.5rem]">

        Privacy &

        <br />

        <span className="text-text-accent/80">
          Security Policy.
        </span>

      </h1>

      <p className="max-w-2xl text-xl font-medium leading-relaxed text-gray-500 lg:text-2xl">

        We treat your personal data with the same immaculate care and
        precision as we do your finest garments.

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
