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
const EASE = [0.16, 1, 0.3, 1]; // premium custom cubic-bezier, used everywhere

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
      ease: EASE
    }
  }
};

/* ==========================================
   VALIDATION CONFIG
   ========================================== */
const NAME_REGEX = /^[A-Za-z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  firstName: (value) => {
    const v = (value || '').trim();
    if (!v) return 'First name is required.';
    if (v.length < 2) return 'First name must be at least 2 characters.';
    if (!NAME_REGEX.test(v)) return 'First name can only contain letters.';
    return '';
  },
  lastName: (value) => {
    const v = (value || '').trim();
    if (v && !NAME_REGEX.test(v)) return 'Last name can only contain letters.';
    return '';
  },
  email: (value) => {
    const v = (value || '').trim();
    if (!v) return 'Email is required.';
    if (!EMAIL_REGEX.test(v)) return 'Please enter a valid email address.';
    return '';
  },
  subject: (value) => {
    const v = (value || '').trim();
    if (!v) return 'Subject is required.';
    if (v.length < 3) return 'Subject must be at least 3 characters.';
    return '';
  },
  message: (value) => {
    const v = (value || '').trim();
    if (!v) return 'Please enter your message.';
    if (v.length < 10) return 'Message must be at least 10 characters.';
    return '';
  },
};

const validateField = (field, value) => {
  const validator = validators[field];
  return validator ? validator(value) : '';
};

/* ==========================================
   MAIN COMPONENT
   ========================================== */
const ContactPage = () => {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const getError = (field) => (touched[field] ? errors[field] : '');

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formState[field]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate every field
    const newErrors = {};
    Object.keys(validators).forEach((field) => {
      const error = validateField(field, formState[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ firstName: true, lastName: true, email: true, subject: true, message: true });

    // Stop submission if any field is invalid
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Log all filled details after successful validation
    console.log('Contact form submitted:', {
      firstName: formState.firstName.trim(),
      lastName: formState.lastName.trim(),
      email: formState.email.trim(),
      subject: formState.subject.trim(),
      message: formState.message.trim(),
      submittedAt: new Date().toISOString(),
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSent(false);
    setFormState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
  };

  const headlineWords = ['Get', 'in'];

  return (
    <div className="min-h-screen bg-bg-white text-text-dark font-sans selection:bg-clothcare-primary selection:text-text-primary">

      {/* ================= PAGE TITLE ================= */}
      <section className="relative pt-32 bg-bg-white overflow-hidden">
        {/* Subtle dot-grid texture, faded out toward the edges — a quiet premium detail */}
        <div
          className="absolute inset-0 -z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,13,16,0.07) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse 55% 45% at 50% 0%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 55% 45% at 50% 0%, black, transparent 75%)',
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 text-text-muted font-bold uppercase tracking-[0.2em] text-xs border border-border-soft px-4 py-1.5 rounded-full mb-6"
            >
          
              Contact
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-dark mb-6 tracking-tight flex flex-wrap items-center justify-center gap-x-3">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.08 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.26 }}
                className="inline-block text-text-accent italic"
              >
                Touch
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Have a question or need assistance? Our team is dedicated to providing you with the best garment care experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= QUICK INFO — "Garment Tag" tickets ================= */}
      <section className="relative z-20 bg-bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16 lg:py-20 border-b border-border-soft"
          >

            <InfoTicket
              index="01"
              title="Phone"
              icon={<Phone strokeWidth={1.5} size={22} />}
              desc="Call us for immediate assistance or to book a rider."
              val1="+91 96014 23424"
              val2="Mon–Fri, 8AM–8PM"
            />

            <InfoTicket
              index="02"
              title="Email"
              icon={<Mail strokeWidth={1.5} size={22} />}
              desc="Send us a message and we'll respond within 2 hours."
              val1="support@qlothcare.com"
              val2="booking@qlothcare.com"
            />

            <InfoTicket
              index="03"
              title="Offline Store"
              icon={<MessageSquare strokeWidth={1.5} size={22} />}
              desc="Submit your clothes directly without a rider at our hub."
              val1="Mon–Sat"
              val2="9AM–8PM AEST"
            />

            <InfoTicket
              index="04"
              title="Location"
              icon={<MapPin strokeWidth={1.5} size={22} />}
              desc="Visit us in the heart of the tech district."
              val1="101 Ansh Arambh, 1st Floor"
              val2="South Bopal, Ahmedabad"
            />

          </motion.div>
        </div>
      </section>

      {/* ================= FORM & SIDEBAR SECTION ================= */}
      <section className="py-10 bg-bg-white">
        <div className="container mx-auto px-2 sm:px-6 max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >

            {/* Left Box: Form Container */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <div className="bg-bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_30px_80px_-25px_rgba(11,13,16,0.08)] border border-border-soft relative overflow-hidden">

                {/* Signature seal line — draws itself in on scroll instead of sitting static */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute top-0 left-12 right-12 h-[3px] bg-clothcare-accent-gradient rounded-full"
                />

                <h2 className="text-3xl font-display font-bold text-text-dark mb-8">Send us a Message</h2>

                <AnimatePresence mode="wait">
                  {isSent ? (
                    <SuccessMessage onReset={handleReset} />
                  ) : (
                    <motion.form
                      key="contact-form"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, transition: { duration: 0.25 } }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-6"
                    >
                      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="First Name"
                          required
                          icon={User}
                          value={formState.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          onBlur={() => handleBlur('firstName')}
                          error={getError('firstName')}
                        />

                        <Input
                          label="Last Name"
                          icon={User}
                          value={formState.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          onBlur={() => handleBlur('lastName')}
                          error={getError('lastName')}
                        />
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <Input
                          label="Email"
                          type="email"
                          required
                          icon={Mail}
                          value={formState.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          error={getError('email')}
                        />
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <Input
                          label="Subject"
                          required
                          icon={FileText}
                          value={formState.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          onBlur={() => handleBlur('subject')}
                          error={getError('subject')}
                        />
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <Input
                          label="Comments"
                          required
                          textarea
                          rows={5}
                          helperText="Please tell us strictly your need. Are you a rider? A customer? A franchise?"
                          value={formState.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          onBlur={() => handleBlur('message')}
                          error={getError('message')}
                        />
                      </motion.div>

                      <motion.div variants={fadeUp}>
                        <Button
                          type="submit"
                          size='lg'
                          loading={isSubmitting}
                          className="
                            group
                            py-7
                            px-10
                            bg-clothcare-accent-gradient
                            hover:opacity-90
                            font-bold
                            w-full
                            rounded-2xl
                            sm:w-auto
                            mt-4
                            shadow-lg
                            transition-all
                            duration-300
                            hover:shadow-clothcareSoft
                            active:scale-[0.98]
                          "
                        >
                          <span className="flex items-center justify-center gap-2">
                            Submit
                            <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </span>
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Box: Info Sidebar */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-12 lg:pt-8">

              {/* Business Hours */}
              <div className='p-3'>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-xl bg-clothcare-darker text-text-primary flex items-center justify-center shrink-0 transition-all duration-500 hover:bg-clothcare-accent-gradient hover:rotate-6">
                    <Clock size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-2xl font-display font-bold text-text-dark">Business Hours</h3>
                </div>
                <div className="text-sm font-medium text-text-muted">
                  <HourRow day="Monday" time="8:00 AM – 8:00 PM" />
                  <HourRow day="Tuesday" time="8:00 AM – 8:00 PM" />
                  <HourRow day="Wednesday" time="8:00 AM – 8:00 PM" />
                  <HourRow day="Thursday" time="8:00 AM – 8:00 PM" />
                  <HourRow day="Friday" time="8:00 AM – 8:00 PM" />
                  <HourRow day="Saturday" time="9:00 AM – 6:00 PM" />
                  <HourRow day="Sunday" time="Closed" last />
                </div>
              </div>

              {/* ERP Links / FAQs */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-clothcare-darker text-text-primary flex items-center justify-center shrink-0 transition-all duration-500 hover:bg-clothcare-accent-gradient hover:rotate-6">
                    <MessageSquare size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-2xl font-display font-bold text-text-dark">Need ERP Support?</h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  Check out the frequently asked questions regarding the online software, automated routing, and account tracking.
                </p>
                <a href="#info" className="text-text-accent font-bold text-sm hover:underline inline-flex items-center gap-1 group">
                  View FAQ's <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Follow Us */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full border border-clothcare-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-clothcare-primary"></div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-dark">Follow Us</h3>
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

      {/* ================= ACCORDION SECTION (ERP/SERVICES) — unchanged ================= */}
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

/* "Garment tag" ticket — replaces the generic icon-circle card.
   Left block: index, icon, title, description.
   Dashed divider with punch-hole dots, like a perforated claim ticket.
   Right block: the value, set apart like a stub. */
const InfoTicket = ({ index, icon, title, desc, val1, val2 }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -5 }}
    transition={{ type: 'tween', duration: 0.35, ease: EASE }}
    className="relative flex flex-col p-6 rounded-3xl bg-bg-white border border-border-soft
    shadow-[0_15px_40px_-22px_rgba(11,13,16,0.08)] hover:shadow-[0_25px_50px_-22px_rgba(11,13,16,0.12)]
    hover:border-clothcare-primary/25 transition-colors duration-500 group overflow-hidden"
  >
    {/* Index tag — small ticket-stub corner detail instead of a side rail */}
    <span className="absolute top-5 right-6 font-mono text-[11px] text-clothcare-primary/60 tracking-[0.15em]">
      {index}
    </span>

    <div className="w-12 h-12 rounded-xl bg-clothcare-darker text-text-primary flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-clothcare-accent-gradient group-hover:rotate-6 group-hover:shadow-clothcareSoft">
      {icon}
    </div>

    <h3 className="text-lg font-display font-bold text-text-dark mb-2">{title}</h3>
    <p className="text-sm font-medium text-text-muted leading-relaxed mb-5">{desc}</p>

    {/* Perforation divider — horizontal now, with punch-hole notches cut into the card edges */}
    <div className="relative mt-auto pt-5 border-t-1 border-dashed border-border-soft group-hover:border-clothcare-primary/40 transition-colors duration-500">
     

      <p className="text-sm font-bold text-text-dark leading-snug">{val1}</p>
      <p className="text-xs font-bold text-text-muted leading-snug mt-1">{val2}</p>
    </div>
  </motion.div>
);

const HourRow = ({ day, time, last }) => (
  <div className={`flex justify-between items-center px-2 -mx-2 py-3 rounded-lg hover:bg-bg-soft/15 transition-colors duration-300 ${last ? '' : 'border-b border-border-soft'}`}>
    <span className="text-text-dark font-bold">{day}</span>
    <span className="font-mono text-xs tracking-wide tabular-nums">{time}</span>
  </div>
);

const SocialPill = ({ text, icon }) => (
  <motion.button
    suppressHydrationWarning
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.25, ease: EASE }}
    className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-bg-white border border-border-soft text-sm font-bold text-text-muted hover:border-clothcare-primary hover:text-text-accent shadow-sm hover:shadow-md transition-colors duration-300"
  >
    <span className="text-text-muted group-hover:text-text-accent group-hover:-translate-y-0.5 inline-block transition-all duration-300">
      {icon}
    </span>
    {text}
  </motion.button>
);

/* ------------------------------------------------------------------------
   AccordionItem — unchanged, per request.
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
        className="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left hover:bg-bg-soft/10 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-sm lg:text-xl text-clothcare-dark flex items-center gap-4">
          <span className="flex items-center justify-center w-12 h-12 bg-clothcare-primary/10 text-text-accent rounded-xl shrink-0">{icon}</span> {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="bg-bg-soft/10 p-2 rounded-full text-text-muted shrink-0 ml-4"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? (contentRef.current?.scrollHeight ?? 0) : 0,
        }}
        transition={{ duration: 0.35, ease: EASE }}
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
    transition={{ duration: 0.5, ease: EASE }}
    className="min-h-[400px] flex flex-col items-center justify-center text-center bg-bg-soft/10 rounded-2xl border border-border-soft"
  >
    <div className="relative w-20 h-20 mb-6">
      <motion.span
        className="absolute inset-0 rounded-full bg-status-success/15"
        animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        initial={{ scale: 0, rotate: -40 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
        className="relative w-20 h-20 bg-status-success/10 rounded-full flex items-center justify-center text-status-success border border-status-success/20"
      >
        <CheckCircle2 size={40} />
      </motion.div>
    </div>
    <h3 className="text-2xl font-display font-bold text-text-dark mb-3">Message Sent Successfully!</h3>
    <p className="text-text-muted max-w-xs mx-auto mb-8 font-medium">We've received your query and our team will get back to you shortly.</p>
    <button
      suppressHydrationWarning
      onClick={onReset}
      className="text-text-primary bg-clothcare-primary hover:bg-clothcare-primaryDark px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg active:scale-95"
    >
      Send another message
    </button>
  </motion.div>
);

export default ContactPage;