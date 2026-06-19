'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/btn/Button';

const JoinMovement = () => {
    return (
        <section className="py-24 lg:py-40 bg-clothcare-primary relative overflow-hidden">
            <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none rotate-180">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="relative block w-full h-[80px] lg:h-[120px]"
  >
    <path
      fill="#ffffff"
      d="M0,0L80,10.7C160,21,320,43,480,58.7C640,75,800,85,960,74.7C1120,64,1280,32,1360,16L1440,0L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
    />
  </svg>
</div>
            {/* Animated glowing mesh background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none"
            ></motion.div>

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-text-primary mb-8 tracking-tighter leading-[0.9]"
                >
                    Stop washing. <br />
                    <span className="text-text-primary/70 italic font-light">Start caring.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl lg:text-3xl text-text-primary/80 font-light mb-16 max-w-2xl mx-auto leading-relaxed"
                >
                    Join the thousands of individuals who have trusted Qlothcare to preserve their wardrobe's legacy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    className="flex justify-center"
                >
                    <Link href="/contact-us">
                 <Button
                variant="secondary"
                icon={ArrowRight}
                iconPosition='right'
                size="lg"
                className="rounded-full p-8"
              >
              Book Your First Collection
              </Button>
                   

{/*                    
                        <button className="group relative overflow-hidden inline-flex items-center gap-4 bg-bg-white text-text-accent px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300">
                            <span className="relative z-10 group-hover:text-text-primary transition-colors duration-500">Book Your First Collection</span>
                            <div className="relative z-10 w-8 h-8 rounded-full bg-clothcare-primary/10 flex items-center justify-center group-hover:bg-bg-white group-hover:text-text-accent transition-colors duration-500">
                                <motion.div
                                    variants={{
                                        initial: { x: 0 },
                                        hover: { x: 5 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <ArrowRight size={16} />
                                </motion.div>
                            </div>
                         
                            <div className="absolute inset-0 bg-clothcare-midnight translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                        </button> */}

                        
                    </Link>
                </motion.div>
            </div>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-solid.png")' }}></div>
        </section>
    );
};

export default JoinMovement;
