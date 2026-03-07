'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[100vh] bg-clothcare-dark flex flex-col lg:flex-row items-center justify-center text-white px-6 py-12 lg:py-0 gap-12 lg:gap-20 overflow-hidden">
      
      {/* Left Side: Animated Illustration */}
      <div className="relative order-1 lg:order-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
        >
          {/* Machine Outer Body */}
          <div className="absolute inset-0 border-[12px] border-clothcare-graySoft rounded-[2.5rem] shadow-clothcare flex items-center justify-center">
             {/* Glass Door / Drum Container */}
            <div className="w-[85%] h-[85%] border-[10px] border-clothcare-gray bg-clothcare-darker rounded-full overflow-hidden flex items-center justify-center relative shadow-inner">
              {/* Spinning Drum Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative"
              >
                {/* Decorative Drum Dots */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-clothcare-primary rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-white rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-10 w-3 h-3 bg-clothcare-primaryDark rounded-full opacity-40"></div>
                
                {/* The "Lost" Items */}
                <motion.div 
                   animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 45, 0] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute top-1/3 left-1/3 text-5xl md:text-6xl"
                >
                  🧦
                </motion.div>
                <motion.div 
                   animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -30, 0] }}
                   transition={{ duration: 3.5, repeat: Infinity }}
                   className="absolute bottom-1/3 right-1/3 text-5xl md:text-6xl"
                >
                  👕
                </motion.div>
              </motion.div>
              
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Machine Controls Panels */}
          <div className="absolute top-8 right-12 flex space-x-2">
            <div className="w-2.5 h-2.5 bg-clothcare-primary rounded-full animate-pulse shadow-[0_0_10px_#E46F33]"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_#22C55E]"></div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-clothcare-graySoft/20 rounded-full"></div>
        </motion.div>

        {/* Floating 404 Bubbles */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-10 -right-4 bg-clothcare-primary text-white font-display font-black px-4 py-2 rounded-2xl shadow-clothcare rotate-12"
        >
          404
        </motion.div>
      </div>

      {/* Right Side: Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center lg:text-left max-w-xl order-2"
      >
        <h1 className="text-clothcare-primary font-display font-black text-2xl mb-2 tracking-widest uppercase">
          Error Encountered
        </h1>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Lost in the <br /><span className="text-clothcare-primary">Laundry?</span>
        </h2>
        <p className="text-text-muted text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
          Looks like the page you're searching for got stuck in the spin cycle or vanished like a missing sock. Don't worry, we'll help you find your way back.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <Link 
            href="/"
            className="px-10 py-4 bg-clothcare-accent-gradient rounded-full font-bold text-white shadow-clothcareSoft hover:scale-105 active:scale-95 transition-all duration-300 text-center"
          >
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-10 py-4 border-2 border-clothcare-graySoft/30 rounded-full font-bold text-white hover:bg-white/5 hover:border-clothcare-primary transition-all duration-300 text-center"
          >
            Go Back
          </button>
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-clothcare-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-clothcare-primaryDark/10 rounded-full blur-[150px]"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </div>
  );
}
