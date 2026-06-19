'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, CheckCircle2, ShieldAlert, AlertTriangle, FileText } from 'lucide-react';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState('acceptance');

  // Simple scroll spy setup
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['acceptance', 'protocols', 'liability', 'law'];
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#E46F33_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.03]"></div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clothcare-primary/5 text-text-accent text-sm font-bold mb-8">
              <Scale size={16} /> Legal Agreement
            </div>
            <h1 className="text-[3.5rem] lg:text-[5.5rem] font-display font-black leading-[1.05] tracking-tight mb-8">
              Terms & <br />
              <span className="text-gray-400">Conditions.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              The operational baseline and binding protocols governing our premium garment care services.
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
                <NavButton id="acceptance" title="01. Acceptance" active={activeSection === 'acceptance'} onClick={() => document.getElementById('acceptance').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="protocols" title="02. Service Protocols" active={activeSection === 'protocols'} onClick={() => document.getElementById('protocols').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="liability" title="03. Liability & Care" active={activeSection === 'liability'} onClick={() => document.getElementById('liability').scrollIntoView({ behavior: 'smooth' })} />
                <NavButton id="law" title="04. Governing Law" active={activeSection === 'law'} onClick={() => document.getElementById('law').scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </div>

            {/* Content Sections */}
            <div className="flex-1 max-w-4xl space-y-32">

              {/* 01. Acceptance */}
              <motion.section id="acceptance" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="01" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Acceptance</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    By engaging with <strong className="text-clothcare-dark">Qlothcare</strong>, you are entering a legally binding agreement. Our services are predicated on mutual trust and operational excellence. By placing an order, scheduling a pickup, or utilizing our applications, you agree to these terms unreservedly.
                  </p>
                  <div className="p-6 bg-white border border-gray-100 rounded-2xl flex gap-4 mt-12 shadow-sm">
                    <FileText className="text-text-accent shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-clothcare-dark">Last Updated: January 7, 2026</h4>
                      <p className="text-text-muted text-sm mt-1">We reserve the right to amend these terms dynamically. Continued use implies acceptance of the updated protocols.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 02. Protocols */}
              <motion.section id="protocols" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="02" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Service Protocols</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-12">
                    Our commitment to artisan-level fabric care requires adherence to specific operational baselines.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clothcare-primary/20 transition-all duration-500 group flex gap-6">
                      <div className="w-12 h-12 shrink-0 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-clothcare-dark group-hover:bg-clothcare-primary/10 group-hover:text-text-accent transition-colors">
                        <CheckCircle2 />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-clothcare-dark mb-3 tracking-tight">User Responsibility</h4>
                        <p className="text-text-muted leading-relaxed font-medium">Users must ensure accurate scheduling. We request clients to verify pockets are empty prior to handover. We reserve the right to audit items for safety and fabric integrity before processing.</p>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-clothcare-dark/20 transition-all duration-500 group flex gap-6">
                      <div className="w-12 h-12 shrink-0 bg-[#FAFAFA] rounded-2xl flex items-center justify-center text-clothcare-dark group-hover:bg-clothcare-dark/5 transition-colors">
                        <Scale />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-clothcare-dark mb-3 tracking-tight">Pricing Integrity</h4>
                        <p className="text-text-muted leading-relaxed font-medium">Dynamic pricing may apply based on extreme fabric complexity, bio-hazard removal, and expedited turnaround speeds. All final fees will be transparently disclosed before processing begins.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 03. Liability */}
              <motion.section id="liability" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="03" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Liability & Care</h2>

                  <div className="bg-[#18181B] text-text-primary p-10 lg:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-clothcare-primary/20 blur-[100px] rounded-full"></div>
                    <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
                      <AlertTriangle size={300} strokeWidth={1} />
                    </div>

                    <ShieldAlert className="text-text-accent mb-8" size={48} strokeWidth={1} />
                    <h3 className="text-3xl font-display font-bold mb-8">Risk & Reimbursement.</h3>

                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                      <div className="space-y-4">
                        <h4 className="text-text-accent font-black text-sm uppercase tracking-widest">Limited Liability</h4>
                        <p className="text-gray-400 leading-relaxed">
                          While we provide artisan-level care, we are not responsible for pre-existing manufacturer defects, inherent button failures, or shrinkage/fading inherent to the fabric type.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-text-accent font-black text-sm uppercase tracking-widest">Insurance Coverage</h4>
                        <p className="text-gray-400 leading-relaxed">
                          In the highly unlikely event of verified damage or loss directly caused by our specific facility process, compensation is strictly capped at 10x the service cost of the specific item.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 04. Governing Law */}
              <motion.section id="law" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
                <Watermark number="04" />
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">Governing Law</h2>
                  <p className="text-xl text-text-muted leading-relaxed mb-8">
                    Jurisdictional oversight protocol.
                  </p>
                  <div className="p-8 bg-white border-2 border-clothcare-dark rounded-3xl">
                    <div className="flex gap-6 items-center">
                      <Scale className="text-clothcare-dark shrink-0" size={32} />
                      <p className="text-lg text-clothcare-dark font-medium leading-relaxed">
                        These operational terms and all ensuing agreements are strictly governed by and construed in accordance with the exclusive jurisdiction of the state courts operating within <strong className="text-text-accent font-bold decoration-2 underline-offset-4 underline">Ahmedabad, Gujarat, India.</strong>
                      </p>
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
