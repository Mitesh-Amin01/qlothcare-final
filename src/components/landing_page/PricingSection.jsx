"use client";

import React from "react";
import { Check, Sparkles, Zap, ShieldCheck, Crown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Button from "../ui/btn/Button";
import Link from "next/link";

const PricingSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // PERF FIX: rotateX forces 3D transforms / layer promotion on every
  // staggered child, and spring physics runs many more simulation frames
  // than a tween. Switched to a 2D-only tween — visually near-identical
  // easing curve, far cheaper to animate, especially with several of
  // these firing in a stagger at once.
  const fadeUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.9, y: 50, opacity: 0 },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Central source of truth for every plan. Each card builds its link to
  // /coming-soon from this object, so the locked plan card on that page
  // always receives the exact same numbers shown here.
  const PLANS = {
    starter: {
      id: "starter",
      name: "Starter Franchise",
      price: 1000000, // 10 Lakhs
      investment: "₹10L",
      label: "Franchise Investment",
    },

    growth: {
      id: "growth",
      name: "Growth Franchise",
      price: 1500000, // 15 Lakhs
      investment: "₹15L",
      label: "Franchise Investment",
    },

    premium: {
      id: "premium",
      name: "Premium Franchise",
      price: 2000000, // 20 Lakhs
      investment: "₹20L",
      label: "Franchise Investment",
    },

    master: {
      id: "master",
      name: "Master Franchise",
      price: 2500000, // 25 Lakhs
      investment: "₹25L",
      label: "Franchise Investment",
    },
  };
  const buildPlanHref = (plan) =>
    `/coming-soon?plan=${plan.id}&name=${encodeURIComponent(
      plan.name,
    )}&price=${plan.price}&discount=${plan.discount}&label=${encodeURIComponent(
      plan.label,
    )}`;

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-bg-white font-sans overflow-hidden"
    >
      {/* PERF FIX: repeating-linear-gradient grid + a large CSS blur sitting
          in the same stacking context is a heavy paint combo, and without
          layer isolation the browser may re-rasterize this on every scroll
          frame as content animates above it. `isolate` + `will-change`
          promote each to its own composited layer so they're painted once
          and then just composited, instead of repainted alongside the
          animating cards. transform: translateZ(0) reinforces layer
          promotion on browsers that need the hint. */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none isolate"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 28px)",
          color: "var(--text-dark, #1a1a1a)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-clothcare-primary/[0.06] blur-[100px] rounded-full pointer-events-none isolate"
        style={{ willChange: "transform", transform: "translate(-50%, 0) translateZ(0)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Area */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-clothcare-primary/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-text-accent" />
            <span className="text-xs font-black uppercase tracking-widest text-text-accent">
              Franchise Opportunities
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-[4rem] font-black text-text-dark leading-[1.1] tracking-tighter mb-8"
          >
            Four grades of partnership
            <span className="block text-text-accent italic font-serif font-light mt-1">
              one standard of craft.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg text-text-muted leading-relaxed font-medium"
          >
            Every tier carries the same training, branding, and operational
            backbone — what scales is your territory, your support, and your
            ceiling. Choose the grade that matches where your market is headed.
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
        >
          {/* Card 1: Starter */}
          <motion.div variants={scaleUpVariants} className="h-full">
            <PlanCard
              grade="No. 01"
              icon={<Zap className="w-5 h-5" />}
              iconWrap="bg-gray-50 text-text-muted"
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
              variant="standard"
            />
          </motion.div>

          {/* Card 2: Growth */}
          <motion.div variants={scaleUpVariants} className="h-full">
            <PlanCard
              grade="No. 02"
              icon={<ShieldCheck className="w-5 h-5" />}
              iconWrap="bg-clothcare-primary/5 text-text-accent"
              name="Growth Franchise"
              tagline="Ideal for growing urban markets"
              taglineAccent
              price="₹15L"
              features={[
                "Everything in Starter",
                "Advanced Team Training",
                "Launch Marketing Support",
                "Priority Operations Support",
              ]}
              href={buildPlanHref(PLANS.growth)}
              cta="Choose Plan"
              variant="standard"
            />
          </motion.div>

          {/* Card 3: Premium (Recommended / signature card) */}
          <motion.div
            variants={scaleUpVariants}
            className="h-full lg:scale-[1.06] z-20"
          >
            <SignatureCard
              icon={<Crown className="w-5 h-5" />}
              name="Premium Franchise"
              tagline="Built for high-demand commercial zones"
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

          {/* Card 4: Master (dark) */}
          <motion.div variants={scaleUpVariants} className="h-full">
            <DarkCard
              icon={<Crown className="w-5 h-5" />}
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

        {/* Footer Info Area */}
        <motion.div
          className="relative rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
          style={{
            background:
              "linear-gradient(135deg, var(--bg-soft, #f4f1ea) 0%, transparent 60%)",
          }}
        >
          {/* hairline border + corner stitch marks instead of a flat outline */}
          <div className="absolute inset-0 rounded-[3rem] border border-gray-200/70 pointer-events-none" />
          <Stitching />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <h3 className="text-2xl font-bold text-text-dark mb-4 tracking-tight">
              Need a custom plan for business?
            </h3>
            <p className="text-text-muted leading-relaxed font-medium">
              We offer bespoke solutions for hotels, spas, and clinics with
              volume-based pricing and specialized garment treatment protocols.
            </p>
          </div>
          <Link href="/contact-us" className="relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="p-5 rounded-xl uppercase tracking-[0.2em] shadow-lg"
                icon={ArrowUpRight}
                iconSize={15}
              >
                Contact
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------------- */
/* Decorative thread-stitch divider used on the footer panel and the
   signature card — a literal nod to garment-care without being a cliché
   numbered-marker or gradient-border treatment.

   PERF FIX: `width="calc(100% - 2px)"` / `height="calc(100% - 2px)"` were
   set as raw SVG geometry attributes, not CSS. Percentage calc() on raw
   SVG geometry attributes is unreliable across browsers and can trigger
   extra layout/geometry recalculation. Switched to a 100%-sized <rect>
   with `vector-effect: non-scaling-stroke` so the stroke renders
   identically without the inset math. */
const Stitching = () => (
  <svg
    className="absolute inset-3 rounded-[2.6rem] pointer-events-none opacity-[0.18]"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
  >
    <rect
      x="0.75"
      y="0.75"
      width="99.5%"
      height="99.5%"
      rx="38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="4 6"
      vectorEffect="non-scaling-stroke"
      className="text-text-dark"
    />
  </svg>
);

/* ----------------------------------------------------------------------- */
/* Standard card (Starter / Growth) */
const PlanCard = ({
  grade,
  icon,
  iconWrap,
  name,
  tagline,
  taglineAccent,
  price,
  features,
  href,
  cta,
}) => (
  <div className="h-full bg-bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 p-8 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 will-change-transform">
    <div className="flex items-start justify-between mb-8">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconWrap}`}>
        {icon}
      </div>
      <span className="text-[11px] font-mono font-bold text-text-muted/50 tracking-[0.15em] pt-1">
        {grade}
      </span>
    </div>

    <h3 className="text-2xl font-bold text-text-dark mb-2">{name}</h3>
    <p
      className={`text-sm font-medium mb-8 ${
        taglineAccent ? "text-text-accent font-bold" : "text-text-muted"
      }`}
    >
      {tagline}
    </p>

    <div className="mb-10 pb-8 border-b border-dashed border-gray-200">
      <span className="text-5xl font-black text-text-dark tracking-tight">
        {price}
      </span>
      <p className="text-xs text-text-muted mt-2 font-bold uppercase tracking-widest leading-relaxed">
        Franchise Investment
      </p>
    </div>

    <ul className="space-y-4 grow mb-10">
      {features.map((f) => (
        <ListItem key={f} text={f} />
      ))}
    </ul>

    <Link href={href} className="w-full">
      <Button variant="outline" size="lg" className="w-full rounded-xl p-7">
        {cta}
      </Button>
    </Link>
  </div>
);

/* ----------------------------------------------------------------------- */
/* Signature card — the one bold, memorable element. Styled as a wax-sealed
   garment tag rather than a generic gradient-bordered "popular" card: the
   ribbon sits at the top like a hang-tag, and a stitched border frames the
   whole card. */
const SignatureCard = ({ icon, name, tagline, price, features, href }) => (
  <div className="relative h-full">
    {/* soft ambient glow behind the card only — no spinning gradient border.
        PERF FIX: isolated to its own layer so the blur is rasterized once
        rather than recomputed as the parent card animates/scales in. */}
    <div
      className="absolute -inset-4 bg-clothcare-primary/[0.08] blur-2xl rounded-[3rem] pointer-events-none isolate"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    />

    <div className="relative h-full bg-bg-white rounded-[2.5rem] p-8 pt-12 flex flex-col shadow-2xl shadow-clothcare-primary/10 border border-clothcare-primary/15 overflow-hidden">
      <Stitching />

      {/* Hang-tag ribbon */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2">
        <div className="bg-clothcare-primary text-text-primary text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-b-xl shadow-lg shadow-clothcare-primary/30">
          Most Chosen
        </div>
      </div>

      <div className="mb-8 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-clothcare-primary to-orange-500 flex items-center justify-center mb-6 text-text-primary shadow-lg shadow-clothcare-primary/20">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-text-dark mb-2">{name}</h3>
        <p className="text-sm text-text-accent font-bold">{tagline}</p>
      </div>

      <div className="mb-10 pb-8 border-b border-dashed border-clothcare-primary/25 relative z-10">
        <span className="text-5xl font-black text-text-dark tracking-tight">
          {price}
        </span>
        <p className="text-xs text-text-muted mt-2 font-bold uppercase tracking-widest leading-relaxed">
          Franchise Investment
        </p>
      </div>

      <ul className="space-y-4 grow mb-10 relative z-10">
        {features.map((f) => (
          <ListItem key={f.text} text={f.text} textBold={f.bold} />
        ))}
      </ul>

      <Link href={href} className="w-full relative z-10">
        <Button
          variant="primary"
          className="w-full bg-linear-to-r from-blue-400 via-clothcare-primary to-orange-400 rounded-xl p-7"
          icon={Crown}
          iconSize={15}
          iconWrapperClassName="text-text-primary"
        >
          Reserve Territory
        </Button>
      </Link>
    </div>
  </div>
);

/* ----------------------------------------------------------------------- */
/* Dark card (Master) */
const DarkCard = ({ icon, name, tagline, price, features, href }) => (
  <div className="h-full bg-clothcare-black rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden group shadow-2xl transition-all duration-500 hover:-translate-y-1 will-change-transform">
    <div
      className="absolute -top-12 -right-12 w-32 h-32 bg-bg-white/5 rounded-full blur-3xl group-hover:bg-bg-white/10 transition-colors isolate"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    />
    <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-bg-white/10 to-transparent" />

    <div className="mb-8 relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-bg-white/10 flex items-center justify-center mb-6 text-text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-text-primary mb-2">{name}</h3>
      <p className="text-sm text-text-accent font-bold">{tagline}</p>
    </div>

    <div className="mb-10 pb-8 border-b border-dashed border-bg-white/15 relative z-10">
      <span className="text-5xl font-black text-text-primary tracking-tight">
        {price}
      </span>
      <p className="text-xs text-text-muted mt-2 font-bold uppercase tracking-widest leading-relaxed">
        Franchise Investment
      </p>
    </div>

    <ul className="space-y-4 grow mb-10 relative z-10">
      {features.map((f) => (
        <ListItem key={f} text={f} textWhite />
      ))}
    </ul>

    <Link href={href} className="w-full relative z-10">
      <Button variant="primary" className="w-full rounded-xl p-7">
        Become a Partner
      </Button>
    </Link>
  </div>
);

/* ----------------------------------------------------------------------- */
// List item
const ListItem = ({ text, textWhite, textBold }) => (
  <li className="flex items-start gap-4">
    <div
      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${textWhite ? "bg-bg-white/10 text-text-primary" : "bg-clothcare-primary/10 text-text-accent"}`}
    >
      <Check className="w-3 h-3" strokeWidth={4} />
    </div>
    <span
      className={`text-[14px] leading-tight ${textWhite ? "text-text-primary/60 font-medium" : "text-text-muted font-medium"} ${textBold ? "font-bold text-text-dark" : ""}`}
    >
      {text}
    </span>
  </li>
);

export default PricingSection;