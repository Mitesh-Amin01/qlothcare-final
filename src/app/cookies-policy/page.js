'use client';

import LegalLayout from '@/components/common/LegalLayout';
import { motion } from 'framer-motion';

export default function CookiesPolicy() {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <LegalLayout title="Cookies Policy" lastUpdated="January 7, 2026">
      <div className="space-y-16 pb-20">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xl text-text-muted leading-relaxed italic">
            "We use digital signatures to remember your preferences and enhance your fabric care journey."
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { tag: 'Essential', title: 'Core Experience', desc: 'Secure login, session persistence, and cart management. These cannot be disabled.', id: '01' },
            { tag: 'Analytical', title: 'Service Insight', desc: 'Analyzing interaction patterns to optimize our pickup routes and UI performance.', id: '02' },
            { tag: 'Preferences', title: 'Personalized Care', desc: 'Remembering your localized settings and specific garment handling instructions.', id: '03' },
            { tag: 'Marketing', title: 'Curated Offers', desc: 'Delivering relevant laundry promotions based on your platform behavior.', id: '04' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl shadow-gray-100/20 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-6xl font-black text-gray-50 group-hover:text-clothcare-primary/5 transition-colors">{item.id}</div>
              <span className="inline-block px-3 py-1 bg-clothcare-primary/10 text-clothcare-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-6 relative z-10">
                {item.tag}
              </span>
              <h3 className="text-2xl font-display font-bold text-clothcare-dark mb-4 relative z-10">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed relative z-10">{item.desc}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-50 group-hover:bg-clothcare-primary transition-colors mt-auto" />
            </motion.div>
          ))}
        </div>

        {/* Management Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 bg-clothcare-dark rounded-[3rem] text-white text-center relative overflow-hidden"
        >
           {/* Animated Background Pulse */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-clothcare-primary rounded-full blur-[100px]" 
           />
           
           <div className="relative z-10">
             <h2 className="text-4xl font-display font-black mb-6">Management</h2>
             <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">You maintain absolute sovereignty over your digital footprint. Adjust your browser protocols at any time to restrict cookie deployment.</p>
             <div className="flex flex-wrap justify-center gap-4">
                {['Chrome', 'Safari', 'Firefox', 'Edge'].map((browser) => (
                  <span key={browser} className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold hover:bg-white hover:text-clothcare-dark transition-all cursor-default">
                    {browser} Settings
                  </span>
                ))}
             </div>
           </div>
        </motion.section>

      </div>
    </LegalLayout>
  );
}
