"use client";

import React from "react";
import { Sparkles, Zap, ShieldCheck, Crown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const PricingSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.9, y: 50, opacity: 0 },
    visible: {
      scale: 1, y: 0, opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const PLANS = {
    starter: {
      id: "starter",
      name: "Starter Franchise",
      price: 1000000,
      investment: "₹10L",
      label: "Franchise Investment",
    },
    growth: {
      id: "growth",
      name: "Growth Franchise",
      price: 1500000,
      investment: "₹15L",
      label: "Franchise Investment",
    },
    premium: {
      id: "premium",
      name: "Premium Franchise",
      price: 2000000,
      investment: "₹20L",
      label: "Franchise Investment",
    },
    master: {
      id: "master",
      name: "Master Franchise",
      price: 2500000,
      investment: "₹25L",
      label: "Franchise Investment",
    },
  };

  const buildPlanHref = (plan) =>
    `/coming-soon?plan=${plan.id}&name=${encodeURIComponent(plan.name)}&price=${plan.price}&discount=${plan.discount}&label=${encodeURIComponent(plan.label)}`;

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 font-sans overflow-hidden bg-clothcare-midnight"
    >
      {/* Ambient orange glow — top center */}
      <div
        className="absolute top-0 left-1/2 pointer-events-none"
        style={{
          transform: "translate(-50%, -40%)",
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(228,111,51,0.08) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-0 md:mb-23"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-clothcare-primary/20 bg-clothcare-primary/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-accent">
              Franchise Opportunities
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-[4rem] leading-[1.1] tracking-tighter mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#f0ebe3" }}
          >
            Four grades of partnership,
            <span
              className="block mt-1 italic text-text-accent"
              style={{ fontWeight: 300 }}
            >
              one standard of craft.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-base leading-relaxed text-text-muted mx-auto"
            style={{ maxWidth: "520px" }}
          >
            Every tier carries the same training, branding, and operational backbone — what scales is your territory, your support, and your ceiling.
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-0 md:mb-22 items-end scale-90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          {/* Starter */}
          <motion.div variants={scaleUpVariants} className="h-full">
            <PlanCard
              tier="Tier I"
              icon={<Zap className="w-4 h-4" />}
              name="Starter Franchise"
              tagline="Perfect for emerging markets"
              price="₹10L"
              features={[
                "Brand License Access",
                "Store Setup Guidance",
                "Staff Training Program",
                "Marketing Starter Kit",
              ]}
              href={buildPlanHref(PLANS.starter)}
              cta="Get Started"
            />
          </motion.div>

          {/* Growth */}
          <motion.div variants={scaleUpVariants} className="h-full">
            <PlanCard
              tier="Tier II"
              icon={<ShieldCheck className="w-4 h-4" />}
              name="Growth Franchise"
              tagline="Ideal for growing urban markets"
              price="₹15L"
              features={[
                "Everything in Starter",
                "Advanced Team Training",
                "Launch Marketing Support",
                "Priority Operations Support",
              ]}
              href={buildPlanHref(PLANS.growth)}
              cta="Choose Plan"
            />
          </motion.div>

          {/* Premium */}
          <motion.div variants={scaleUpVariants} className="h-full z-20">
            <SignatureCard
              icon={<Crown className="w-4 h-4" />}
              name="Premium Franchise"
              tagline="High-demand commercial zones"
              price="₹20L"
              features={[
                { text: "Exclusive Territory Rights", bold: true },
                { text: "Dedicated Launch Manager" },
                { text: "Premium Store Branding" },
                { text: "Business Growth Consultation" },
              ]}
              href={buildPlanHref(PLANS.premium)}
            />
          </motion.div>

          {/* Master */}
          <motion.div variants={scaleUpVariants} className="h-full">
            <DarkCard
              icon={<Crown className="w-4 h-4" />}
              name="Master Franchise"
              tagline="Multi-city expansion opportunity"
              price="₹25L"
              features={[
                "Multi-Location Rights",
                "Dedicated Business Consultant",
                "Regional Growth Strategy",
                "Franchise Recruitment Support",
              ]}
              href={buildPlanHref(PLANS.master)}
            />
          </motion.div>
        </motion.div>

        {/* ── Footer CTA ── */}
        <motion.div
          className="relative rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden bg-clothcare-dark/20 border border-clothcare-dark scale-90"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
        >
          {/* orange hairline top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(228,111,51,0.5), transparent)" }}
          />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <h3
              className="text-2xl mb-4 tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#f0ebe3" }}
            >
              Need a custom plan for your business?
            </h3>
            <p className="leading-relaxed text-sm text-text-muted">
              Bespoke solutions for hotels, spas, and clinics — volume pricing and specialized garment treatment protocols included.
            </p>
          </div>

          <Link href="/contact-us" className="relative z-10 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 rounded-full px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-accent border border-clothcare-primary/40 bg-transparent hover:bg-clothcare-primary/10 transition-colors"
            >
              Contact Us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

/* ─── Shared dashed divider ─────────────────────────────────────────────── */
const DashedDivider = ({ color }) => (
  <div
    className="w-full h-px mb-6"
    style={{
      background: `repeating-linear-gradient(90deg, ${color} 0, ${color} 4px, transparent 4px, transparent 10px)`,
    }}
  />
);

/* ─── Standard card (Starter / Growth) ─────────────────────────────────── */
// Light parchment card — uses clothcare-graySoft tones for warmth
const PlanCard = ({ tier, icon, name, tagline, price, features, href, cta }) => (
  <div
    className="h-full flex flex-col rounded-3xl p-7 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 will-change-transform"
    style={{ background: "#f4f1eb", border: "1px solid #e2dace" }}
  >
    {/* Tier label */}
    <div className="flex items-center gap-1.5 mb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-clothcare-gray">
      <span className="inline-block w-1 h-1 rounded-full bg-clothcare-gray" />
      {tier}
    </div>

    {/* Icon ring */}
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center mb-5 text-clothcare-gray"
      style={{ background: "#ece6d8", border: "1px solid #d8cebe" }}
    >
      {icon}
    </div>

    {/* Name */}
    <h3
      className="text-2xl mb-1.5 leading-tight text-text-dark"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
    >
      {name}
    </h3>
    <p className="text-[11px] mb-6 leading-snug text-clothcare-gray">{tagline}</p>

    <DashedDivider color="#c8bfaa" />

    {/* Price */}
    <div
      className="text-5xl mb-1 leading-none text-text-dark"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: "-1px" }}
    >
      {price}
    </div>
    <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-6 text-clothcare-gray">
      Franchise Investment
    </p>

    {/* Features */}
    <ul className="flex flex-col gap-2.5 flex-1 mb-7">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-[12px] leading-snug text-clothcare-dark">
          <span
            className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[8px] text-clothcare-gray"
            style={{ background: "#e8e0ce", border: "1px solid #cec4b0" }}
          >
            ✓
          </span>
          {f}
        </li>
      ))}
    </ul>

    {/* CTA */}
    <Link href={href} className="w-full">
      <button className="w-full flex items-center justify-between px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-80 bg-clothcare-darker text-text-primary">
        {cta}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </Link>
  </div>
);

/* ─── Signature card (Premium) ──────────────────────────────────────────── */
const SignatureCard = ({ icon, name, tagline, price, features, href }) => (
  <div className="relative h-full">
    {/* Outer glow ring using primary orange */}
    <div
      className="absolute -inset-px pointer-events-none"
      style={{
        borderRadius: "24px",
        boxShadow:
          "0 0 0 1px rgba(228,111,51,0.4), 0 0 60px rgba(228,111,51,0.12), 0 32px 80px rgba(228,111,51,0.08)",
      }}
    />

    <div
      className="relative h-full flex flex-col rounded-3xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 will-change-transform border border-clothcare-primary/30"
      style={{
        background: "linear-gradient(160deg, #1a0e06 0%, #231408 50%, #120902 100%)",
        padding: "52px 28px 28px",
      }}
    >
      {/* Most Chosen badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap bg-clothcare-primary text-text-primary" style={{ borderRadius: "0 0 14px 14px" }}>
          <span>★</span> Most Chosen
        </div>
      </div>

      {/* Hairline below badge */}
      <div
        className="absolute left-6 right-6 h-px pointer-events-none"
        style={{ top: "38px", background: "linear-gradient(90deg, transparent, rgba(228,111,51,0.35), transparent)" }}
      />

      {/* Tier label */}
      <div className="flex items-center gap-1.5 mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-clothcare-primary">
        <span className="inline-block w-1 h-1 rounded-full bg-clothcare-primary" />
        Tier III
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center mb-5 text-clothcare-primary"
        style={{ background: "rgba(228,111,51,0.1)", border: "1px solid rgba(228,111,51,0.3)" }}
      >
        {icon}
      </div>

      <h3
        className="text-2xl mb-1.5 leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#f0ebe3" }}
      >
        {name}
      </h3>
      <p className="text-[11px] mb-5 font-medium leading-snug text-clothcare-primary">{tagline}</p>

      <DashedDivider color="rgba(228,111,51,0.3)" />

      {/* Price in brand orange */}
      <div
        className="text-5xl mb-1 leading-none text-clothcare-primary"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: "-1px" }}
      >
        {price}
      </div>
      <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-6" style={{ color: "#6b3a1f" }}>
        Franchise Investment
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1 mb-7">
        {features.map((f) => (
          <li
            key={f.text}
            className="flex items-start gap-2.5 text-[12px] leading-snug"
            style={{ color: f.bold ? "#f0ebe3" : "#9a7a60" }}
          >
            <span
              className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[8px] text-clothcare-primary"
              style={{ background: "rgba(228,111,51,0.12)", border: "1px solid rgba(228,111,51,0.3)" }}
            >
              ✓
            </span>
            {f.bold ? <strong style={{ fontWeight: 500 }}>{f.text}</strong> : f.text}
          </li>
        ))}
      </ul>

      <Link href={href} className="w-full">
        <button className="w-full flex items-center justify-between px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-85 bg-clothcare-primary text-text-primary">
          Reserve Territory
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </Link>
    </div>
  </div>
);

/* ─── Dark card (Master) ────────────────────────────────────────────────── */
const DarkCard = ({ icon, name, tagline, price, features, href }) => (
  <div
    className="h-full flex flex-col rounded-3xl p-7 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 will-change-transform bg-clothcare-dark/20 s"
    style={{ border: "1px solid #4a5058" }}
  >
    {/* Tier label */}
    <div className="flex items-center gap-1.5 mb-6 text-[9px] font-bold uppercase tracking-[0.2em] text-clothcare-gray">
      <span className="inline-block w-1 h-1 rounded-full bg-clothcare-gray" />
      Tier IV
    </div>

    {/* Icon */}
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center mb-5 text-clothcare-gray"
      style={{ background: "#4a5058", border: "1px solid #5a6068" }}
    >
      {icon}
    </div>

    <h3
      className="text-2xl mb-1.5 leading-tight text-text-primary"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
    >
      {name}
    </h3>
    <p className="text-[11px] mb-6 leading-snug text-clothcare-gray">{tagline}</p>

    <DashedDivider color="#4a5058" />

    <div
      className="text-5xl mb-1 leading-none text-text-primary"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: "-1px" }}
    >
      {price}
    </div>
    <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-6 text-clothcare-gray">
      Franchise Investment
    </p>

    <ul className="flex flex-col gap-2.5 flex-1 mb-7">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-[12px] leading-snug text-clothcare-gray">
          <span
            className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[8px] text-clothcare-gray"
            style={{ background: "#3c4249", border: "1px solid #4a5058" }}
          >
            ✓
          </span>
          {f}
        </li>
      ))}
    </ul>

    <Link href={href} className="w-full">
      <button
        className="w-full flex items-center justify-between px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-colors text-clothcare-gray hover:text-text-primary"
        style={{ background: "transparent", border: "1px solid #4a5058" }}
      >
        Become a Partner
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </Link>
  </div>
);

export default PricingSection;