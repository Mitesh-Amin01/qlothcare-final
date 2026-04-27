'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone, Mail, MessageSquare, MapPin,
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
    <div className="min-h-screen bg-white text-clothcare-dark font-sans selection:bg-clothcare-primary selection:text-white">

      {/* ================= HERO SECTION (STUDIO STYLE) - COMMENTED FOR FUTURE USE =================
      <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden bg-[#FAFAFA]">

        {/* Giant Background Text * /}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full text-center pointer-events-none select-none overflow-hidden z-0">
          <h1 className="text-[18vw] font-display font-black text-black/2 whitespace-nowrap leading-none tracking-tighter">
            Qlothcare
          </h1>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">

          <div className="text-center mb-10 lg:mb-16">
            <motion.h2
              variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-clothcare-dark uppercase tracking-tight leading-[0.9]"
            >
              Connect with<br />Our Team
            </motion.h2>
          </div>

          {/* Stepped Image Gallery * /}
          <div className="flex items-end justify-center h-[300px] sm:h-[400px] lg:h-[550px] max-w-6xl mx-auto gap-2 md:gap-4 lg:gap-6">

            {/* 01 (Outermost Left - Hidden on Mobile) * /}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="hidden sm:flex w-[15%] flex-col items-center"
            >
              <span className="text-xs font-bold font-display mb-3 md:mb-5 text-clothcare-dark">04</span>
              <div className="w-full h-[140px] md:h-[180px] lg:h-[240px] bg-gray-200 overflow-hidden shadow-xl shadow-black/5 relative">
                <Image src="/about/alexander.png" fill className="object-cover grayscale opacity-80" alt="Team Member 04" />
              </div>
            </motion.div>

            {/* 02 (Middle Left) * /}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="w-[25%] sm:w-[20%] flex flex-col items-center"
            >
              <span className="text-xs font-bold font-display mb-3 md:mb-5 text-clothcare-dark">02</span>
              <div className="w-full h-[220px] md:h-[280px] lg:h-[380px] bg-gray-200 overflow-hidden shadow-xl shadow-black/5 relative">
                <Image src="/about/elena.png" fill className="object-cover grayscale opacity-80" alt="Team Member 02" />
              </div>
            </motion.div>

            {/* 03 (Center / Largest) * /}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="w-[50%] sm:w-[30%] flex flex-col items-center relative z-20 -mt-8"
            >
              <span className="text-xs font-bold font-display mb-3 md:mb-5 text-clothcare-dark">01</span>
              <div className="w-full h-[280px] sm:h-[380px] lg:h-[500px] bg-gray-200 overflow-hidden shadow-2xl shadow-black/10 relative group border-[6px] sm:border-10 lg:border-14 border-[#FAFAFA]">
                <div className="absolute inset-0 bg-clothcare-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <Image src="/landingabout/team_member_ceo_1767511764298.png" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" alt="CEO" priority />
              </div>
            </motion.div>

            {/* 04 (Middle Right) * /}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="w-[25%] sm:w-[20%] flex flex-col items-center"
            >
              <span className="text-xs font-bold font-display mb-3 md:mb-5 text-clothcare-dark">03</span>
              <div className="w-full h-[220px] md:h-[280px] lg:h-[380px] bg-gray-200 overflow-hidden shadow-xl shadow-black/5 relative">
                <Image src="/about/marcus.png" fill className="object-cover grayscale opacity-80" alt="Team Member 03" />
              </div>
            </motion.div>

            {/* 05 (Outermost Right - Hidden on Mobile) * /}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="hidden sm:flex w-[15%] flex-col items-center"
            >
              <span className="text-xs font-bold font-display mb-3 md:mb-5 text-clothcare-dark">05</span>
              <div className="w-full h-[140px] md:h-[180px] lg:h-[240px] bg-gray-200 overflow-hidden shadow-xl shadow-black/5 relative">
                <Image src="/landingabout/team_member_ops_1767511796826.png" fill className="object-cover grayscale opacity-80" alt="Team Member 05" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      */}

      {/* ================= PAGE TITLE ================= */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-clothcare-dark mb-6 tracking-tight">
              Get in <span className="text-clothcare-primary italic">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Have a question or need assistance? Our team is dedicated to providing you with the best garment care experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= QUICK INFO COLUMNS ================= */}
      <section className="relative z-20 bg-white">
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
      <section className="py-20 bg-white">
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
              <div className="bg-white rounded-4xl p-8 lg:p-12 shadow-[0_15px_40px_rgb(228,111,51,0.06)] border border-clothcare-graySoft/20">
                <h2 className="text-3xl font-display font-bold text-clothcare-dark mb-8">Send us a Message</h2>

                <AnimatePresence mode="wait">
                  {isSent ? (
                    <SuccessMessage onReset={() => setIsSent(false)} />
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name *</label>
                          <input
                            suppressHydrationWarning required
                            type="text"
                            className="w-full bg-gray-50 border border-clothcare-graySoft/30 rounded-xl px-4 py-3.5 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none"
                            value={formState.firstName} onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                          <input
                            suppressHydrationWarning
                            type="text"
                            className="w-full bg-gray-50 border border-clothcare-graySoft/30 rounded-xl px-4 py-3.5 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none"
                            value={formState.lastName} onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email *</label>
                        <input
                          suppressHydrationWarning required
                          type="email"
                          className="w-full bg-gray-50 border border-clothcare-graySoft/30 rounded-xl px-4 py-3.5 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none"
                          value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject *</label>
                        <input
                          suppressHydrationWarning required
                          type="text"
                          className="w-full bg-gray-50 border border-clothcare-graySoft/30 rounded-xl px-4 py-3.5 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none"
                          value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Comments *</label>
                        <span className="text-[10px] text-gray-400 -mt-1 block mb-2">Please tell us strictly your need. Are you a rider? A customer? A franchise?</span>
                        <textarea
                          suppressHydrationWarning required rows={5}
                          className="w-full bg-gray-50 border border-clothcare-graySoft/30 rounded-xl px-4 py-3.5 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none resize-none"
                          value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        suppressHydrationWarning disabled={isSubmitting}
                        className="bg-clothcare-accent-gradient hover:opacity-90 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] w-full sm:w-auto mt-4"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
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
                  <Clock className="text-clothcare-primary" size={24} strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-bold text-clothcare-dark">Business Hours</h3>
                </div>
                <div className="space-y-4 text-sm font-medium text-gray-500">
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
                  <MessageSquare className="text-clothcare-primary" size={24} strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-bold text-clothcare-dark">Need ERP Support?</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Check out the frequently asked questions regarding the online software, automated routing, and account tracking.
                </p>
                <a href="#info" className="text-clothcare-primary font-bold text-sm hover:underline inline-flex items-center gap-1 group">
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
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
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
            <p className="text-gray-500 text-lg font-medium">Find essential details regarding online booking routines, rider tracking, and offline store processes.</p>
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
    className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-clothcare-primary/2 transition-colors group"
  >
    <div className="w-14 h-14 bg-clothcare-primary/10 text-clothcare-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-clothcare-dark mb-3">{title}</h3>
    <p className="text-sm font-medium text-gray-500 mb-6 leading-relaxed grow max-w-[200px]">{desc}</p>
    <div className="mt-auto">
      <p className="text-sm font-bold text-clothcare-dark mb-1">{val1}</p>
      <p className="text-xs font-bold text-gray-500">{val2}</p>
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
    className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-clothcare-graySoft/30 text-sm font-bold text-gray-500 hover:border-clothcare-primary hover:text-clothcare-primary shadow-sm hover:shadow-md transition-all"
  >
    <span className="text-gray-400 group-hover:text-clothcare-primary transition-colors">
      {icon}
    </span>
    {text}
  </motion.button>
);

const AccordionItem = ({ icon, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="bg-white rounded-3xl shadow-[0_5px_20px_rgb(228,111,51,0.03)] border border-clothcare-graySoft/20 overflow-hidden transition-all duration-300">
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-bold text-lg lg:text-xl text-clothcare-dark flex items-center gap-4">
          <span className="flex items-center justify-center w-12 h-12 bg-clothcare-primary/10 text-clothcare-primary rounded-xl shrink-0">{icon}</span> {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="bg-gray-100 p-2 rounded-full text-gray-500">
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-8 pt-2 text-gray-500 leading-relaxed relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-clothcare-graySoft/20"></div>
              <p className="mt-6 text-base font-medium">{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SuccessMessage = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="min-h-[400px] flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl border border-clothcare-graySoft/20"
  >
    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-green-100 shadow-xl border border-green-100">
      <CheckCircle2 size={40} />
    </div>
    <h3 className="text-2xl font-display font-bold text-clothcare-dark mb-3">Message Sent Successfully!</h3>
    <p className="text-gray-500 max-w-xs mx-auto mb-8 font-medium">We've received your query and our team will get back to you shortly.</p>
    <button
      suppressHydrationWarning
      onClick={onReset}
      className="text-white bg-clothcare-primary hover:bg-clothcare-primaryDark px-6 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
    >
      Send another message
    </button>
  </motion.div>
);

export default ContactPage;