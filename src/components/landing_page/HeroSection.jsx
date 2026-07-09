'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Button from '../ui/btn/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center">

  {/* Mobile Background */}
  <Image
    src="/hero/hero_mobile.png"
    alt="Premium clothing care"
    fill
    priority
    className="object-cover object-bottom-right md:hidden"
  />

  {/* Desktop Background */}
   {/* <Image
    src="/hero/hero-2.png"
    alt="Premium clothing care"
    fill
    priority
    className="hidden md:block object-cover object-center"
  /> 
  */}

  <video
  className="hidden md:block absolute inset-0 h-full w-full object-cover object-top"
  autoPlay
  muted
  playsInline
  preload="auto"
>
  <source src="/hero/bg4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

  {/* Content */}
  <div className="container mx-auto px-6 relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      {/* Brand & Heading Area */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col mb-8"
      >
        <div className="flex flex-col">
          {/* Cursive "Elevate" */}
          <span 
            className="text-[#e87722] text-7xl md:text-8xl lg:text-[7rem] leading-[1.1] select-none font-normal" 
            style={{ fontFamily: "'Playball', 'Dancing Script', cursive" }}
          >
            Elevate
          </span>
          {/* Serif "your wardrobe care." */}
          <span 
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-light tracking-tight text-[#2F343A] leading-[1.05]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            your wardrobe care.
          </span>
        </div>

        {/* Separator: Line + 3 Dots */}
        <div className="flex items-center gap-3 mt-5 mb-4">
          <div className="w-16 h-[2px] bg-[#e87722]" />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#778582]" />
            <span className="w-2 h-2 rounded-full bg-[#2F343A]" />
            <span className="w-2 h-2 rounded-full bg-[#e87722]" />
          </div>
        </div>

        {/* Tagline */}
        <div 
          className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#778582] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Cleaner. Safer. Better.
        </div>
      </motion.div>

      <motion.p
        variants={fadeUpVariants}
        className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed mb-10"
      >
        Experience the intersection of traditional fabric preservation and modern technology.
        Expert care, delivered to your doorstep.
      </motion.p>

      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col sm:flex-row gap-4 w-fit"
      >
        <Link href="/inquiry">
        <Button
          variant="special"
          icon={ArrowRight}
          iconWrapperClassName="bg-bg-white text-text-accent transition-all duration-300 group-hover:-rotate-45"
          className="bg-[#e87722] hover:bg-[#d46a1e] rounded-4xl px-6 py-6 text-lg"
        >
          Book a Pickup
        </Button></Link>

<Link href="/services">
        <Button
          variant="outline"
          className="bg-white/10 backdrop-blur-md text-text-accent rounded-4xl px-8 py-6 text-lg border border-[#e87722]/30 hover:bg-[#e87722]/10"
        >
          View Services
        </Button>
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>
    );
};

export default CinematicHero;