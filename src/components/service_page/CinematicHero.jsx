'use client';
import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

// Shared variants
const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const CinematicHero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-28 lg:pb-32 h-screen ">
          {/* Background Image */}
          <Image
            src="/services/service_hero.png"
            alt="Premium clothing"
            fill
            priority
            className="object-cover object-center h-full"
          />
    
      
          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-xl" // Slightly reduced container width
            >
              {/* Eyebrow */}
              <motion.div
                variants={fadeUpVariants}
                className="inline-flex items-center gap-3 text-[#e87722] text-xs font-bold uppercase tracking-widest mb-6"
              >
                <span className="block w-6 h-[1.5px] bg-[#e87722]" />
                Services
              </motion.div>
    
              {/* Headline - Size Reduced */}
              <motion.h1
                variants={fadeUpVariants}
                className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
               Premium care <br />
               
                <span className="text-[#e87722] not-italic font-bold">
                  for every fabric.
                </span>
              </motion.h1>
    
              {/* Description - Size Reduced */}
              <motion.p
                variants={fadeUpVariants}
                className="text-lg lg:text-xl text-white/50 max-w-lg leading-relaxed"
              >
                Choose the protocol that fits your lifestyle. From everyday
                essentials to premium preservation, we provide artisan quality with
                digital convenience.
              </motion.p>
            </motion.div>
          </div>
        </section>
        )
};

export default CinematicHero;