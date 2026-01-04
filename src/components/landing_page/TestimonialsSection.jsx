'use client'

import React, { useRef } from 'react';
import { Star, Quote, ArrowRight, TrendingUp } from 'lucide-react';
import {
   motion,
   useScroll,
   useSpring,
   useTransform,
   useMotionValue,
   useVelocity,
   useAnimationFrame
} from 'framer-motion';

const wrap = (min, max, v) => {
   const rangeSize = max - min;
   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


const reviews = [
   {
      id: 1,
      name: "Sarah Jenkins",
      role: "Marketing Director @ TechFlow",
      image: "SJ",
      stars: 5,
      quote: "I used to spend my Sunday afternoons ironing shirts. Qlothcare gave me my weekends back. The pickup is always on time, and the folding is better than I could ever do.",
      tag: "Weekly Subscriber",
      color: "from-blue-500 to-cyan-500"
   },
   {
      id: 2,
      name: "David Chen",
      role: "Architect",
      image: "DC",
      stars: 5,
      quote: "I was skeptical about sending my suits to an app-based service, but the quality is impeccable. They noticed a button was loose on my blazer and fixed it without me asking.",
      tag: "Dry Clean Pro",
      color: "from-purple-500 to-pink-500"
   },
   {
      id: 3,
      name: "Elena Rodriguez",
      role: "Freelance Designer",
      image: "ER",
      stars: 5,
      quote: "The app is incredibly intuitive. Being able to track the driver in real-time and pay via Apple Pay makes the whole experience seamless. It feels like magic.",
      tag: "App User",
      color: "from-emerald-500 to-teal-500"
   },
   {
      id: 4,
      name: "Marcus Johnson",
      role: "Lawyer",
      image: "MJ",
      stars: 5,
      quote: "The express turnaround is a lifesaver. I had an emergency meeting and needed my suit cleaned overnight. Qlothcare delivered early the next morning.",
      tag: "Express User",
      color: "from-orange-500 to-red-500"
   }
];

// Animation Variants
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2
      }
   }
};

const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.6,
         ease: "easeOut"
      }
   }
};

const bgOrbVariants = {
   animate: {
      scale: [1, 1.2, 1],
      opacity: [0.05, 0.08, 0.05],
      transition: {
         duration: 8,
         repeat: Infinity,
         ease: "easeInOut"
      }
   }
};

// --- Parallax Horizontal Scroll Component ---
function ParallaxText({ children, baseVelocity = 100 }) {
   const baseX = useMotionValue(0);
   const { scrollY } = useScroll();
   const scrollVelocity = useVelocity(scrollY);
   const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
   });
   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
   });

   /**
    * We have 4 identical children. To loop smoothly, we translate from 0% to -25%.
    * -25% of the total width = exactly the width of 1 child block.
    * This creates a seamless infinite loop.
    */
   const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

   const directionFactor = useRef(1);
   useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      /**
       * Change direction based on scroll velocity direction
       */
      if (velocityFactor.get() < 0) {
         directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
         directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
   });

   return (
      <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
         <motion.div className="flex flex-nowrap gap-8" style={{ x }}>
            {children}
            {children}
            {children}
            {children}
         </motion.div>
      </div>
   );
}

const TestimonialsSection = () => {
   return (
      <section className="relative py-24 font-sans overflow-hidden bg-gray-50">
         {/* Subtle Background Decor */}
         <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}
            variants={bgOrbVariants}
            animate="animate"
         />
         <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }}
            variants={bgOrbVariants}
            animate="animate"
            transition={{ delay: 2, duration: 10, repeat: Infinity, ease: "easeInOut" }}
         />

         <div className="container mx-auto px-6 lg:px-12 relative z-10">

            {/* Header */}
            <motion.div
               className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
            >
               <motion.div className="max-w-2xl" variants={itemVariants}>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                     Loved by thousands. <br />
                     <span className="bg-gradient-to-r from-[#E46F33] to-[#CC5F2B] bg-clip-text text-transparent font-extrabold">
                        Recommended by 99%.
                     </span>
                  </h2>
               </motion.div>

               <motion.div className="relative group" variants={itemVariants}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E46F33] to-[#CC5F2B] rounded-xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-6 bg-white backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-200 shadow-lg">
                     <div className="text-right">
                        <p className="font-bold text-gray-900 text-2xl leading-none flex items-center gap-1">
                           4.9/5
                           <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Average Rating</p>
                     </div>
                     <div className="h-10 w-px bg-gray-300"></div>
                     <div className="text-right">
                        <p className="font-bold text-gray-900 text-2xl leading-none flex items-center gap-1">
                           12k+
                           <TrendingUp className="w-5 h-5 text-[#E46F33]" />
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Active Users</p>
                     </div>
                  </div>
               </motion.div>
            </motion.div>

            {/* Testimonials Content */}

            {/* 1. Mobile/Tablet Layout (Grid) - Visible only on small screens */}
            <div className="lg:hidden grid md:grid-cols-2 gap-8">
               {reviews.slice(0, 3).map((review) => (
                  <TestimonialCard key={review.id} review={review} />
               ))}
            </div>

            {/* 2. Desktop Layout (Infinite Scroll) - Visible only on lg+ screens */}
            <div className="hidden lg:block -mx-12">
               <ParallaxText baseVelocity={-2}>
                  {reviews.map((review) => (
                     <div key={review.id} className="w-[450px] mx-4">
                        <TestimonialCard review={review} />
                     </div>
                  ))}
               </ParallaxText>
            </div>

         </div>
      </section>
   );
};

// Extracted Card Component for Reusability
const TestimonialCard = ({ review }) => (
   <div className="h-full flex flex-col justify-between bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:border-[#E46F33]/30 transition-colors duration-300">
      <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
         <Quote size={72} fill="currentColor" stroke="none" className="text-[#E46F33]" />
      </div>

      <div className="relative z-10">
         <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
               <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
               />
            ))}
         </div>

         <p className="text-gray-700 text-base leading-relaxed font-medium mb-8 whitespace-normal">
            <span className="text-[#E46F33] text-2xl font-serif leading-none">"</span>
            {review.quote}
            <span className="text-[#E46F33] text-2xl font-serif leading-none">"</span>
         </p>
      </div>

      <div className="flex items-center gap-4 mt-auto relative z-10">
         <div className="relative">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} text-white flex items-center justify-center font-display font-bold text-lg shadow-lg`}>
               {review.image}
            </div>
         </div>
         <div>
            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
            <p className="text-xs text-gray-600">{review.role}</p>
         </div>
      </div>

      <div className="absolute bottom-6 right-6">
         <span className="text-xs font-bold text-[#E46F33] uppercase tracking-wider border border-[#E46F33]/20 bg-white px-3 py-1.5 rounded-full">
            {review.tag}
         </span>
      </div>
   </div>
);

export default TestimonialsSection;
