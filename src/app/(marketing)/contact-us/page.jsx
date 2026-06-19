'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/btn/Button';
import {
   User,
  Mail,
  FileText,
   Phone, MessageSquare, MapPin,
  Send, ChevronDown, CheckCircle2, ArrowRight, Clock,
  Truck, Sparkles, Store, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ==========================================
   ANIMATION CONFIG (Professional & Smooth)
   ========================================== */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for more premium feel
    }
  }
};

/* ==========================================
   MAIN COMPONENT
   ========================================== */
const ContactPage = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg-white text-clothcare-dark font-sans selection:bg-clothcare-primary selection:text-text-primary">

      {/* ================= PAGE TITLE ================= */}
      <section className="pt-32 bg-bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-clothcare-dark mb-6 tracking-tight">
              Get in <span className="text-text-accent italic">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Have a question or need assistance? Our team is dedicated to providing you with the best garment care experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK INFO COLUMNS ================= */}
      <section className="relative z-20 bg-bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 lg:py-20 border-b border-clothcare-graySoft/20"
          >

            <InfoColumn
              title="Phone"
              icon={<Phone strokeWidth={1.5} />}
              desc="Call us for immediate assistance or to book a rider."
              val1="+91 96014 23424"
              val2="Mon-Fri: 8AM - 8PM"
            />

            <InfoColumn
              title="Email"
              icon={<Mail strokeWidth={1.5} />}
              desc="Send us a message and we'll respond within 2 hours."
              val1="support@qlothcare.com"
              val2="booking@qlothcare.com"
            />

            <InfoColumn
              title="Offline Store"
              icon={<MessageSquare strokeWidth={1.5} />}
              desc="Submit your clothes directly without a rider at our hub."
              val1="Available Mon-Sat"
              val2="9AM - 8PM AEST"
            />

            <InfoColumn
              title="Location"
              icon={<MapPin strokeWidth={1.5} />}
              desc="Visit us in the heart of the tech district."
              val1="First Floor, 101 Ansh Arambh"
              val2="South Bopal, Ahmedabad"
            />

          </motion.div>
        </div>
      </section>

      {/* ================= FORM & SIDEBAR SECTION ================= */}
      <section className="py-10 bg-bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >

            {/* Left Box: Form Container */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <div className="bg-bg-white rounded-4xl p-8 lg:p-12 shadow-[0_15px_40px_rgb(228,111,51,0.06)] border border-clothcare-graySoft/20">
                <h2 className="text-3xl font-display font-bold text-clothcare-dark mb-8">Send us a Message</h2>

                <AnimatePresence mode="wait">
                  {isSent ? (
                    <SuccessMessage onReset={() => setIsSent(false)} />
                  ) : (
                <motion.form
  key="contact-form"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onSubmit={handleSubmit}
  className="space-y-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Input
      label="First Name"
      required
      icon={User}
      value={formState.firstName}
      onChange={(e) =>
        setFormState({
          ...formState,
          firstName: e.target.value,
        })
      }
    
    />

    <Input
      label="Last Name"
      icon={User}
      value={formState.lastName}
      onChange={(e) =>
        setFormState({
          ...formState,
          lastName: e.target.value,
        })
      }
    
    />
  </div>

  <Input
    label="Email"
    type="email"
    required
    icon={Mail}
    value={formState.email}
    onChange={(e) =>
      setFormState({
        ...formState,
        email: e.target.value,
      })
    }
    
  />

  <Input
    label="Subject"
    required
    icon={FileText}
    value={formState.subject}
    onChange={(e) =>
      setFormState({
        ...formState,
        subject: e.target.value,
      })
    }
  />

  <Input
    label="Comments"
    required
    textarea
    rows={5}
  
    helperText="Please tell us strictly your need. Are you a rider? A customer? A franchise?"
    value={formState.message}
    onChange={(e) =>
      setFormState({
        ...formState,
        message: e.target.value,
      })
    }

  />

 <Button
  type="submit"
  size='lg'
  loading={isSubmitting}
  className="
  py-7
  px-10
    bg-clothcare-accent-gradient
    hover:opacity-90
    font-bold
    w-full
    rounded-xl
    sm:w-auto
    mt-4
    shadow-lg
  "
>
  Submit
</Button>

 
</motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Box: Info Sidebar */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-12 lg:pt-8">

              {/* Business Hours */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-text-accent" size={24} strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-bold text-clothcare-dark">Business Hours</h3>
                </div>
                <div className="space-y-4 text-sm font-medium text-text-muted">
                  <HourRow day="Monday" time="8:00 AM - 8:00 PM" />
                  <HourRow day="Tuesday" time="8:00 AM - 8:00 PM" />
                  <HourRow day="Wednesday" time="8:00 AM - 8:00 PM" />
                  <HourRow day="Thursday" time="8:00 AM - 8:00 PM" />
                  <HourRow day="Friday" time="8:00 AM - 8:00 PM" />
                  <HourRow day="Saturday" time="9:00 AM - 6:00 PM" />
                  <HourRow day="Sunday" time="Closed" />
                </div>
              </div>

              {/* ERP Links / FAQs */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="text-text-accent" size={24} strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-bold text-clothcare-dark">Need ERP Support?</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  Check out the frequently asked questions regarding the online software, automated routing, and account tracking.
                </p>
                <a href="#info" className="text-text-accent font-bold text-sm hover:underline inline-flex items-center gap-1 group">
                  View FAQ's <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Follow Us */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full border border-clothcare-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-clothcare-primary"></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-clothcare-dark">Follow Us</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Stay connected for garment care tips and special offers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <SocialPill text="Facebook" icon={<Facebook size={16} />} />
                  <SocialPill text="Twitter" icon={<Twitter size={16} />} />
                  <SocialPill text="Instagram" icon={<Instagram size={16} />} />
                  <SocialPill text="LinkedIn" icon={<Linkedin size={16} />} />
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ACCORDION SECTION (ERP/SERVICES) ================= */}
      <section id="info" className="py-24 bg-clothcare-primary/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-clothcare-dark mb-4">Other Important Information</h2>
            <p className="text-text-muted text-lg font-medium">Find essential details regarding online booking routines, rider tracking, and offline store processes.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <AccordionItem
              icon={<Truck size={24} strokeWidth={1.5} />}
              title="Online Booking & Rider Pickup"
              content="Our online booking system forms the core of our ERP. By scheduling a pickup through your account, our smart logistics automatically assign the nearest rider to your location. Riders are equipped with portable scales and tagged QR bags so your wash is securely registered into our cloud system from your doorstep. Real-time GPS tracking ensures you always know when your rider will arrive."
            />
            <AccordionItem
              icon={<Sparkles size={24} strokeWidth={1.5} />}
              title="Washing, Dry Cleaning & Delivery Lifecycle"
              content="Once your garments hit our facility, they are scanned through specialized checkpoints. Our ERP triggers precise washing protocols tailored to each fabric type. Post-cleaning and quality inspection, items are packaged and assigned a 'Completed' status. Automated routing then dispatches a rider to ensure your pristine clothes are back in your closet within the 24-48 hour window."
            />
            <AccordionItem
              icon={<Store size={24} strokeWidth={1.5} />}
              title="Without Driver / Offline Store Direct Submit"
              content="Prefer to handle things yourself? We support a 'Direct Submit' process for customers dropping off clothes manually at our flagship hub. Using minimal touchpoints, our store staff directly ingest your items into the system. It connects instantly to your ERP profile, granting you the same tracking transparency as online bookings, but without the rider fees."
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

/* ==========================================
   HELPER COMPONENTS
   ========================================== */

const InfoColumn = ({ icon, title, desc, val1, val2 }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center text-center p-6 rounded-3xl
    bg-clothcare-primary/3 hover:bg-clothcare-primary/5 transition-colors group"
  >
    <div className="w-14 h-14 bg-clothcare-primary/10 text-text-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-clothcare-dark mb-3">{title}</h3>
    <p className="text-sm font-medium text-text-muted mb-6 leading-relaxed grow max-w-[200px]">{desc}</p>
    <div className="mt-auto">
      <p className="text-sm font-bold text-clothcare-dark mb-1">{val1}</p>
      <p className="text-xs font-bold text-text-muted">{val2}</p>
    </div>
  </motion.div>
);

const HourRow = ({ day, time }) => (
  <div className="flex justify-between items-center border-b border-clothcare-graySoft/20 pb-3 last:border-0 last:pb-0">
    <span className="text-clothcare-dark font-bold">{day}</span>
    <span>{time}</span>
  </div>
);

const SocialPill = ({ text, icon }) => (
  <motion.button
    suppressHydrationWarning
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-white border border-clothcare-graySoft/30 text-sm font-bold text-text-muted hover:border-clothcare-primary hover:text-text-accent shadow-sm hover:shadow-md "
  >
    <span className="text-text-muted group-hover:text-text-accent transition-colors">
      {icon}
    </span>
    {text}
  </motion.button>
);

/* ------------------------------------------------------------------------
   AccordionItem — FIXED to remove the flicker.

   What was causing the flicker:
   1. Animating to the literal string height: "auto" forces Framer Motion to
      re-measure on every frame in some browsers, which can cause a visible
      jump/snap right at the start or end of the animation instead of a
      smooth interpolation.
   2. There was no explicit `transition` on the height/opacity animation, so
      it fell back to a spring with default (somewhat bouncy) physics that
      doesn't pair well with a height collapse — springs can overshoot and
      cause the content to visibly "pop" before settling.
   3. The inner content had a `mt-6` margin-top *inside* the animated
      element. Margins inside a height:0 -> height:auto animation can cause
      the browser to recompute layout mid-transition (margin collapsing),
      which compounds the jump.

   The fix: measure the real pixel height of the content with a ref +
   ResizeObserver-free approach (just reading scrollHeight on open), animate
   to that literal pixel value instead of "auto", use a single smooth
   tween (no spring) for height, and move all spacing to padding on a
   non-animated wrapper so nothing shifts mid-animation.
------------------------------------------------------------------------- */
const AccordionItem = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-bg-white rounded-3xl shadow-[0_5px_20px_rgb(228,111,51,0.03)] border border-clothcare-graySoft/20 overflow-hidden"
    >
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-bg-soft/10 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-lg lg:text-xl text-clothcare-dark flex items-center gap-4">
          <span className="flex items-center justify-center w-12 h-12 bg-clothcare-primary/10 text-text-accent rounded-xl shrink-0">{icon}</span> {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-bg-soft/10 p-2 rounded-full text-text-muted shrink-0 ml-4"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Animate to a measured pixel height instead of "auto" — this is
          the core fix for the flicker. */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? (contentRef.current?.scrollHeight ?? 0) : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="px-6 lg:px-8 pb-8 pt-6 text-text-muted leading-relaxed relative">
          <div className="absolute top-0 left-8 right-8 h-px bg-clothcare-graySoft/20"></div>
          <p className="text-base font-medium">{content}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SuccessMessage = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="min-h-[400px] flex flex-col items-center justify-center text-center bg-bg-soft/10 rounded-2xl border border-clothcare-graySoft/20"
  >
    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-green-100 shadow-xl border border-green-100">
      <CheckCircle2 size={40} />
    </div>
    <h3 className="text-2xl font-display font-bold text-clothcare-dark mb-3">Message Sent Successfully!</h3>
    <p className="text-text-muted max-w-xs mx-auto mb-8 font-medium">We've received your query and our team will get back to you shortly.</p>
    <button
      suppressHydrationWarning
      onClick={onReset}
      className="text-text-primary bg-clothcare-primary hover:bg-clothcare-primaryDark px-6 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
    >
      Send another message
    </button>
  </motion.div>
);

export default ContactPage;