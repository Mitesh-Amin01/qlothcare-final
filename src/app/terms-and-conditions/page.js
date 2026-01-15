'use client';

import LegalLayout from '@/components/common/LegalLayout';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="January 7, 2026">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-20 pb-20"
      >
        <motion.section variants={itemVariants} className="relative">
          <div className="absolute -left-4 lg:-left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-clothcare-primary to-transparent" />
          <h2 className="text-3xl font-display font-black text-clothcare-dark mb-6 tracking-tight uppercase">01. Acceptance</h2>
          <p className="text-text-muted text-xl leading-relaxed font-medium">
            By engaging with <span className="text-clothcare-primary font-bold">Qlothcare</span>, you are entering a legally binding agreement. Our services are predicated on mutual trust and operational excellence.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold text-clothcare-dark mb-8 flex items-center gap-4">
            <span className="w-10 h-10 bg-clothcare-primary/10 text-clothcare-primary rounded-full flex items-center justify-center text-sm font-black">02</span>
            Service Operational Protocols
          </h2>
          <div className="space-y-6 pl-14">
            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-clothcare-primary">
              <h4 className="font-bold text-clothcare-dark mb-2 italic underline decoration-clothcare-primary/30">User Responsibility</h4>
              <p className="text-text-muted leading-relaxed">Users must ensure accurate scheduling. We reserve the right to audit items for safety and fabric integrity before processing.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-clothcare-dark">
              <h4 className="font-bold text-clothcare-dark mb-2 italic underline decoration-clothcare-dark/30">Pricing Integrity</h4>
              <p className="text-text-muted leading-relaxed">Dynamic pricing may apply based on fabric complexity and turnaround speed. All fees are transparently disclosed at checkout.</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="bg-clothcare-dark/5 p-8 lg:p-12 rounded-[2.5rem] border border-clothcare-dark/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.28 14.1H3.72L12 5.45zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/></svg>
           </div>
           <h2 className="text-2xl font-display font-bold text-clothcare-dark mb-8 uppercase tracking-widest">03. Liability & Care</h2>
           <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <h4 className="text-clothcare-primary font-black text-sm uppercase">Limited Liability</h4>
                <p className="text-sm text-text-muted leading-relaxed">While we provide artisan-level care, we are not responsible for pre-existing manufacturer defects, button failures, or shrinkage inherent to the fabric type.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-clothcare-primary font-black text-sm uppercase">Insurance Coverage</h4>
                <p className="text-sm text-text-muted leading-relaxed">In the event of verified damage caused by our process, compensation is capped at 10x the service cost of the specific item.</p>
              </div>
           </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center pt-10">
           <div className="w-20 h-1 bg-gradient-to-r from-transparent via-clothcare-primary to-transparent mx-auto mb-8" />
           <h2 className="text-xl font-bold text-clothcare-dark mb-4">Governing Law</h2>
           <p className="text-text-muted italic underline decoration-clothcare-primary/20">These terms are governed by the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.</p>
        </motion.section>
      </motion.div>
    </LegalLayout>
  );
}
