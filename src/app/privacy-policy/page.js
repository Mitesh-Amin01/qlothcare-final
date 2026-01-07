'use client';

import LegalLayout from '@/components/common/LegalLayout';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 7, 2026">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        <motion.section variants={sectionVariants} className="group">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-clothcare-primary font-black text-2xl group-hover:scale-110 transition-transform">01</span>
            <h2 className="text-3xl font-display font-bold text-clothcare-dark">Introduction</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-100 group-hover:border-clothcare-primary/30 transition-colors">
            <p className="text-text-muted text-lg leading-relaxed">
              At <span className="font-bold text-clothcare-dark">Qlothcare</span>, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our laundry and fabric care services, website, and mobile applications.
            </p>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} className="group">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-clothcare-primary font-black text-2xl group-hover:scale-110 transition-transform">02</span>
            <h2 className="text-3xl font-display font-bold text-clothcare-dark">Information Collection</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-100 group-hover:border-clothcare-primary/30 transition-colors">
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              We may collect several types of critical information to provide our premium service experience:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Personal Identifiers', desc: 'Name, email, phone number, and delivery protocols.' },
                { title: 'Transaction Data', desc: 'Service history, fabric preferences, and order details.' },
                { title: 'Device Info', desc: 'IP addresses and platform-specific identifiers.' },
                { title: 'Location Data', desc: 'Real-time logistics tracking for pickups/deliveries.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-gray-100">
                  <h4 className="font-bold text-clothcare-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} className="group">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-clothcare-primary font-black text-2xl group-hover:scale-110 transition-transform">03</span>
            <h2 className="text-3xl font-display font-bold text-clothcare-dark">Data Usage</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-100 group-hover:border-clothcare-primary/30 transition-colors">
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Your data is utilized to architect a seamless laundry experience:
            </p>
            <ul className="space-y-4">
              {['Optimizing logistics for 60-minute pickup windows.', 'Customizing chemical formulas based on your fabric history.', 'Securing payment processing through encrypted gateways.'].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-clothcare-primary" />
                  <span className="text-text-muted leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} className="group">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-clothcare-primary font-black text-2xl group-hover:scale-110 transition-transform">04</span>
            <h2 className="text-3xl font-display font-bold text-clothcare-dark">Data Security</h2>
          </div>
          <div className="pl-12 border-l-2 border-gray-100 group-hover:border-clothcare-primary/30 transition-colors">
            <div className="p-8 bg-clothcare-dark text-white rounded-[2rem] shadow-clothcare relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary/20 blur-3xl rounded-full" />
              <p className="relative z-10 text-lg opacity-80 leading-relaxed italic">
                "We implement institutional-grade security protocols. All financial transactions are processed through SOC2-compliant encrypted gateways, ensuring your sensitive data never touches our local servers."
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </LegalLayout>
  );
}
