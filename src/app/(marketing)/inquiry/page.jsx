'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Input from '@/components/ui/input/Input';
import Button from '@/components/ui/btn/Button';
import { User, Phone, MapPin, Building2, Check, ArrowRight, Send } from 'lucide-react';

/* ==========================================
   BRANCH DATA
   ========================================== */
const BRANCHES = [
  { id: 'south-bopal', name: 'South Bopal', area: 'Ahmedabad' },
  { id: 'satellite', name: 'Satellite', area: 'Ahmedabad' },
  { id: 'vastrapur', name: 'Vastrapur', area: 'Ahmedabad' },
  { id: 'gandhinagar', name: 'Sector 21', area: 'Gandhinagar' },
  { id: 'maninagar', name: 'Maninagar', area: 'Ahmedabad' },
];

const EASE = [0.16, 1, 0.3, 1];

/* Parent-driven stagger — replaces the old per-field `whileInView`.
   Children just declare `variants` and inherit "hidden"/"visible"
   from this container's animate state. No IntersectionObserver
   involved, so there's nothing to race on remount. */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/* ==========================================
   VALIDATION
   ========================================== */
const NAME_REGEX = /^[A-Za-z][A-Za-z .'-]{1,49}$/; // letters/spaces/.'- , 2-50 chars
const PHONE_REGEX = /^[6-9]\d{9}$/; // Indian mobile: 10 digits, starts 6-9

const digitsOnly = (str) => str.replace(/\D/g, '');

// Strips a leading "91" (country code) or leading "0" (trunk prefix)
// so "+91 98765 43210" and "098765 43210" both validate correctly.
const normalizePhone = (str) => {
  let digits = digitsOnly(str);
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return digits;
};

const isValidName = (str) => NAME_REGEX.test(str.trim());
const isValidPhone = (str) => PHONE_REGEX.test(normalizePhone(str));

const Inquiry = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', city: '', branchId: '' });
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const selectedBranch = BRANCHES.find((b) => b.id === formState.branchId);

  const isValid =
    isValidName(formState.name) &&
    isValidPhone(formState.phone) &&
    isValidName(formState.city) &&
    !!formState.branchId;

  const nameError = touched && !isValidName(formState.name)
    ? (formState.name.trim() ? 'Enter a valid name (letters only)' : 'Required')
    : '';

  const phoneError = touched && !isValidPhone(formState.phone)
    ? (formState.phone.trim() ? 'Enter a valid 10-digit mobile number' : 'Required')
    : '';

  const cityError = touched && !isValidName(formState.city)
    ? (formState.city.trim() ? 'Enter a valid city name' : 'Please add your city.')
    : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    // Gather everything into one object before "sending" it.
    const payload = {
      name: formState.name.trim(),
      phone: normalizePhone(formState.phone),
      city: formState.city.trim(),
      branchId: selectedBranch?.id ?? null,
      branchName: selectedBranch?.name ?? null,
      branchArea: selectedBranch?.area ?? null,
      submittedAt: new Date().toISOString(),
    };
    console.log('Inquiry submitted:', payload);

    setIsSubmitting(true);
    // Simulated network call — swap for the real endpoint when ready.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1400);
  };

  const handleReset = () => {
    setFormState({ name: '', phone: '', city: '', branchId: '' });
    setTouched(false);
    setIsSent(false);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-bg-soft/20 overflow-hidden">
      {/* Faint woven texture, consistent with the brand's other sections —
          quiet enough to read as material, not decoration. */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 26px)',
          color: 'var(--text-dark, #1a1a1a)',
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-clothcare-primary/10 rounded-full mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-text-accent">
            Request a Callback
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-dark tracking-tight mb-4">
            Let's find your <span className="text-text-accent italic font-serif font-light">nearest branch.</span>
          </h2>
          <p className="text-text-muted font-medium leading-relaxed">
            Share a few details and our team will confirm pickup timing and
            pricing for the branch closest to you — usually within the hour.
          </p>
        </motion.div>

        <div className="relative max-w-xl mx-auto bg-bg-white rounded-[2.5rem] border border-clothcare-graySoft/20 shadow-[0_25px_60px_rgb(228,111,51,0.08)] overflow-hidden">
          {/* Stitched inner border — the brand's recurring garment-tag motif */}
          <svg
            className="absolute inset-3 rounded-[2.1rem] pointer-events-none opacity-[0.15] hidden sm:block"
            width="calc(100% - 1.5rem)"
            height="calc(100% - 1.5rem)"
            preserveAspectRatio="none"
          >
            <rect
              x="0.75"
              y="0.75"
              width="99.5%"
              height="99.5%"
              rx="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
              className="text-text-dark"
            />
          </svg>

          {/* initial={false} — skips AnimatePresence's own enter animation
              on first mount. The section already fades in via whileInView
              above; without this, the form fades in a second time right
              after, which compounds into a visible double-flicker. */}
          <AnimatePresence mode="wait" initial={false}>
            {isSent ? (
              <ConfirmationTicket
                key="confirmation"
                name={formState.name}
                branch={selectedBranch}
                onReset={handleReset}
              />
            ) : (
              <motion.form
                key="inquiry-form"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                onSubmit={handleSubmit}
                className="relative p-8 sm:p-10 lg:p-12"
              >
                {/* Name + Phone share a row on wider screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <motion.div variants={fieldVariants}>
                    <Input
                      label="Full Name"
                      icon={User}
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      error={nameError}
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <Input
                      label="Phone Number"
                      icon={Phone}
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      error={phoneError}
                    />
                  </motion.div>
                </div>

                <motion.div variants={fieldVariants} className="mb-8">
                  <Input
                    label="City"
                    icon={Building2}
                    required
                    placeholder="Ahmedabad"
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    error={cityError}
                    helperText="We'll call to confirm your pickup slot."
                  />
                </motion.div>

                <div className="h-px bg-clothcare-graySoft/15 mb-8" />

                {/* Branch picker — the signature element */}
                <motion.div variants={fieldVariants} className="mb-5">
                  <label className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                    <MapPin size={14} className="text-text-accent" />
                    Nearest Branch
                    <span className="text-status-danger">*</span>
                  </label>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-2">
                  {BRANCHES.map((branch) => {
                    const active = formState.branchId === branch.id;
                    return (
                      <motion.button
                        key={branch.id}
                        type="button"
                        variants={fieldVariants}
                        whileTap={{ scale: 0.97 }}
                        whileHover={{ y: -2 }}
                        onClick={() => setFormState({ ...formState, branchId: branch.id })}
                        aria-pressed={active}
                        className={`
                          group relative text-left rounded-2xl border px-3.5 py-3 transition-all duration-300
                          ${active
                            ? 'border-clothcare-primary bg-clothcare-primary/8 shadow-[0_8px_20px_rgb(228,111,51,0.12)]'
                            : 'border-clothcare-graySoft/30 bg-bg-soft/10 hover:border-clothcare-primary/40 hover:bg-clothcare-primary/4'}
                        `}
                      >
                        <div className="flex items-start justify-between gap-1.5">
                          <div className="min-w-0">
                            <p className={`text-sm font-bold truncate ${active ? 'text-text-accent' : 'text-text-dark'}`}>
                              {branch.name}
                            </p>
                            <p className="text-[11px] text-text-muted font-medium mt-0.5 truncate">{branch.area}</p>
                          </div>
                          <div
                            className={`
                              shrink-0 w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5
                              ${active
                                ? 'bg-clothcare-primary border-clothcare-primary'
                                : 'border-clothcare-graySoft/40 group-hover:border-clothcare-primary/50'}
                            `}
                          >
                            {active && <Check size={10} className="text-text-primary" strokeWidth={3} />}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
                {touched && !formState.branchId && (
                  <p className="text-sm text-status-danger mb-2">Select the branch nearest you.</p>
                )}

                <motion.div variants={fieldVariants} className="mt-9">
                  <Button
                    type="submit"
                    size="xl"
                    loading={isSubmitting}
                    icon={Send}
                    iconSize={16}
                    className="w-full rounded-xl py-3  shadow-lg"
                  >
                    Send Inquiry
                  </Button>
                  <p className="text-xs text-text-muted font-medium text-center mt-4">
                    No spam, no obligation — just a confirmation call from your local team.
                  </p>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   CONFIRMATION — unchanged design
   ========================================== */
const ConfirmationTicket = ({ name, branch, onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: EASE }}
    className="relative px-8 py-16 lg:py-20 flex flex-col items-center text-center"
  >
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: -8 }}
      transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 140, damping: 12 }}
      className="w-20 h-20 rounded-full border-2 border-clothcare-primary flex items-center justify-center text-text-accent mb-8 relative"
    >
      <Check size={32} strokeWidth={2.5} />
      <span className="absolute inset-0 rounded-full border border-dashed border-clothcare-primary/40 scale-125" />
    </motion.div>

    <h3 className="text-2xl lg:text-3xl font-black text-text-dark tracking-tight mb-3">
      Your inquiry is sent{name ? `, ${name.split(' ')[0]}` : ''}.
    </h3>
    <p className="text-text-muted font-medium max-w-sm leading-relaxed mb-2">
      We'll contact you soon to confirm pickup details
      {branch ? (
        <>
          {' '}for our <span className="text-text-dark font-bold">{branch.name}</span> branch.
        </>
      ) : (
        '.'
      )}
    </p>
    <p className="text-xs text-text-muted/70 font-bold uppercase tracking-widest mb-10">
      Typically within 60 minutes
    </p>

    <button
      onClick={onReset}
      className="inline-flex items-center gap-2 text-sm font-bold text-text-accent hover:underline group"
    >
      Send another inquiry
      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

export default Inquiry;