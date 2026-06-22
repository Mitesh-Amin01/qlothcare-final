'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale,FileCheck, ShieldCheck,
  BadgeCheck,  CheckCircle2, ShieldAlert, AlertTriangle, FileText } from 'lucide-react';

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

  const quickFacts = [
    'Binding from your very first order',
    'Liability strictly capped at 10× service cost',
    'Governed by Ahmedabad, Gujarat jurisdiction',
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-clothcare-dark font-sans selection:bg-clothcare-primary selection:text-text-primary">

      {/* Hero Header */}
    <section className="relative overflow-hidden bg-white border-b border-gray-100 pt-28 pb-20 lg:pt-33 lg:pb-28">

  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(#E46F33_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.03]" />

  {/* Orange Glow */}
  <div className="absolute right-[-180px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[#E46F33]/10 blur-[120px]" />

  <div className="container relative z-10 mx-auto max-w-[1400px] px-6">

    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-16 items-center">

      {/* LEFT */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[#E46F33]/5 px-4 py-2 text-sm font-bold text-[#E46F33] mb-8">
          <Scale size={16} />
          Legal Agreement
        </div>

        <h1 className="mb-8 font-display text-[3.5rem] font-black leading-[1.05] tracking-tight lg:text-[5.5rem]">
          Terms &
          <br />
          <span className="text-text-accent/80">
            Conditions.
          </span>
        </h1>

        <p className="max-w-2xl text-xl font-medium leading-relaxed text-gray-500 lg:text-2xl">
          The operational baseline and binding protocols governing our premium
          garment care services.
        </p>
      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        className="relative hidden lg:flex justify-center items-center h-[320px]"
      >

        {/* Ring */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[520px] w-[520px] rounded-full border border-[#E46F33]/10"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[420px] w-[420px] rounded-full border border-[#E46F33]/10"
        />

        {/* Main Document */}

        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="relative"
        >

          <div className="w-[300px] rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,.08)]">

            {/* Header */}

            <div className="mb-8">

              <div className="h-3 w-28 rounded-full bg-[#E46F33]/20" />

              <div className="mt-5 h-2.5 w-full rounded-full bg-gray-200" />

              <div className="mt-3 h-2.5 w-5/6 rounded-full bg-gray-200" />

              <div className="mt-3 h-2.5 w-4/6 rounded-full bg-gray-200" />

            </div>

            {/* Seal */}

            <div className="my-10 flex justify-center">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#F8C9AF] to-[#E46F33] shadow-xl">

                <Scale
                  size={42}
                  className="text-white"
                  strokeWidth={1.8}
                />

              </div>

            </div>

            {/* Agreement */}

            <div className="space-y-4">

              {[
                "Service Agreement",
                "Payment Terms",
                "Customer Responsibilities",
                "Cancellation Policy",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={16}
                    className="text-[#E46F33]"
                  />

                  <div className="h-2.5 flex-1 rounded-full bg-gray-200" />

                </div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* Floating Cards */}

        {[
          {
            icon: <ShieldCheck size={22} />,
            title: "Protected",
            subtitle: "Customer Rights",
            position: "top-8 left-0",
          },
          {
            icon: <BadgeCheck size={22} />,
            title: "Verified",
            subtitle: "Service Terms",
            position: "top-12 right-2",
          },
          {
            icon: <Scale size={22} />,
            title: "Fair Usage",
            subtitle: "Legal Policy",
            position: "bottom-24 left-4",
          },
          {
            icon: <FileCheck size={22} />,
            title: "Agreement",
            subtitle: "Accepted",
            position: "bottom-10 right-0",
          },
        ].map((card, index) => (

          <motion.div
            key={index}
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
            whileHover={{
              y: -6,
              scale: 1.04,
            }}
            className={`absolute ${card.position}`}
          >

            <div className="rounded-2xl border border-white bg-white/70 backdrop-blur-xl px-5 py-4 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E46F33]/10 text-[#E46F33]">

                  {card.icon}

                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    {card.subtitle}
                  </p>

                  <p className="font-semibold text-gray-800">
                    {card.title}
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </div>

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