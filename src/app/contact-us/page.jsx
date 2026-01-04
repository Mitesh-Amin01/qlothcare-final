'use client'
import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2, 
  MoveRight, Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ==========================================
   ANIMATION VARIANTS (Professional & Fast)
   ========================================== */
const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

/* ==========================================
   MAIN COMPONENT
   ========================================== */
const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'support', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-clothcare-dark font-sans selection:bg-clothcare-primary selection:text-white relative overflow-hidden">
      
      {/* STATIC BACKGROUND (Zero Lag) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-120 h-120 bg-orange-100/60 rounded-full blur-[80px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-96 h-96 bg-blue-50/80 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
        
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12 lg:mb-16 max-w-3xl"
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight text-clothcare-dark">
            We are here to <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-clothcare-primary to-orange-400">
              help you shine.
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INFO CARDS */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-8"
          >
            <motion.p variants={fadeUp} className="text-gray-500 text-lg font-medium leading-relaxed">
              Whether it's a stubborn stain or a scheduling conflict, our team is ready to sort it out instantly.
            </motion.p>

            {/* PROFESSIONAL CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              
              <ContactCard 
                icon={<Mail size={22} />}
                colorClass="bg-orange-50 text-clothcare-primary group-hover:bg-clothcare-primary group-hover:text-white"
                title="Email Us"
                sub="General queries & orders"
                value="support@qlothcare.com"
                href="mailto:support@qlothcare.com"
              />

              <ContactCard 
                icon={<Phone size={22} />}
                colorClass="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                title="Call Support"
                sub="Mon-Sat, 8am to 8pm"
                value="+91 98765 43210"
                href="tel:+919876543210"
              />

              <LocationCard />

            </div>
          </motion.div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-bl from-orange-50 to-transparent rounded-bl-full pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {isSent ? (
                   <SuccessMessage onReset={() => setIsSent(false)} email={formState.email} />
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="relative z-10"
                  >
                    <h2 className="text-3xl font-display font-bold text-clothcare-dark mb-2">Send a Message</h2>
                    <p className="text-gray-500 mb-10">We usually respond within 2 hours.</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-clothcare-dark uppercase tracking-wider pl-1">Your Name</label>
                        <input 
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-clothcare-dark uppercase tracking-wider pl-1">Email Address</label>
                        <input 
                          type="email"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="text-xs font-bold text-clothcare-dark uppercase tracking-wider block mb-3 pl-1">Topic</label>
                      <div className="flex flex-wrap gap-3">
                        {['Support', 'Orders', 'Pricing', 'Partner'].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormState({...formState, subject: item.toLowerCase()})}
                            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${
                              formState.subject === item.toLowerCase() 
                              ? 'bg-clothcare-dark text-white border-clothcare-dark shadow-lg shadow-clothcare-dark/20' 
                              : 'bg-white text-gray-500 border-gray-200 hover:border-clothcare-primary hover:text-clothcare-primary'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8 space-y-2">
                      <label className="text-xs font-bold text-clothcare-dark uppercase tracking-wider pl-1">Message</label>
                      <textarea 
                        rows={5}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-clothcare-dark font-medium focus:bg-white focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all outline-none resize-none"
                        placeholder="Tell us what you need help with..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-clothcare-accent-gradient text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM FAQ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border-t border-gray-200 pt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
                <h4 className="text-xl font-bold text-clothcare-dark flex items-center gap-2">
                   <Sparkles size={18} className="text-clothcare-primary"/> Common Questions
                </h4>
                <p className="text-gray-500 text-sm mt-1">Quick answers to save your time</p>
             </div>
             <div className="flex gap-3 overflow-x-auto pb-2 max-w-full no-scrollbar">
                {["Where is my order?", "Pricing List", "Service Areas", "Pickup Times"].map((text) => (
                   <FAQPill key={text} text={text} />
                ))}
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

/* ==========================================
   HELPER COMPONENTS (Professional & Stable)
   ========================================== */

const ContactCard = ({ icon, colorClass, title, sub, value, href }) => (
  <a 
    href={href}
    className="group relative bg-white border border-gray-100 p-8 rounded-2xl transition-all duration-300 ease-out hover:border-clothcare-primary/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] block"
  >
    <div className="flex justify-between items-start mb-6">
      {/* Icon with hover color transition */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${colorClass}`}>
        {icon}
      </div>
      
      {/* Arrow moves slightly on hover */}
      <ArrowRight 
        size={20} 
        className="text-gray-300 transition-transform duration-300 group-hover:text-clothcare-primary group-hover:translate-x-1" 
      />
    </div>

    <div>
      <h3 className="text-clothcare-dark font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-400 text-sm font-medium mb-3">{sub}</p>
      <p className="text-clothcare-dark font-mono text-base font-semibold tracking-tight">
        {value}
      </p>
    </div>
  </a>
);

const LocationCard = () => (
  <div className="sm:col-span-2 lg:col-span-1 h-full">
    <div className="group h-full bg-clothcare-dark text-white p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Subtle Gradient Overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
            <MapPin size={22} />
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-1">Main Office</h3>
          <p className="text-gray-400 text-sm mb-4">Visit us for in-person support</p>
          <div className="flex items-start gap-3 pt-4 border-t border-white/10">
            <p className="font-medium text-gray-200 leading-relaxed max-w-50">
              102, Silva Hub,<br/> Patan, Gujarat
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SuccessMessage = ({ onReset, email }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="min-h-125 flex flex-col items-center justify-center text-center"
  >
    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-green-100 shadow-xl">
       <CheckCircle2 size={48} />
    </div>
    <h3 className="text-3xl font-display font-bold text-clothcare-dark mb-3">Received!</h3>
    <p className="text-gray-500 max-w-xs mx-auto mb-8">We've got your message. A confirmation email has been sent to <span className="font-bold text-clothcare-dark">{email}</span>.</p>
    <button 
       onClick={onReset}
       className="text-clothcare-primary font-bold hover:underline flex items-center gap-2"
    >
       Send another message <ArrowRight size={16}/>
    </button>
  </motion.div>
);

const FAQPill = ({ text }) => (
  <button 
    className="whitespace-nowrap px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 font-bold text-sm transition-all flex items-center gap-2 group shadow-sm hover:shadow-md hover:text-clothcare-primary active:scale-95"
  >
    {text} <MoveRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-clothcare-primary -ml-2 group-hover:ml-0" />
  </button>
);

export default ContactPage;