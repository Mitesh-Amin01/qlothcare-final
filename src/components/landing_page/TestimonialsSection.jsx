"use client";

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample data to populate the floating bento cards
const floatingCards = [
   // Top Row (Left to Right conceptually)
   { type: 'image', src: '/landingabout/about.png', className: 'w-24 h-32 md:w-32 md:h-40 rounded-2xl md:rounded-[2rem] object-cover shadow-lg align-self-end mt-10 md:mt-20' },
   { type: 'text', name: 'S. Jenkins', role: 'Weekly Acc', quote: '"Qlothcare gave me my weekends back."', className: 'bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 w-48 md:w-56 self-start' },
   { type: 'image', src: '/landingabout/about.png', className: 'w-20 h-20 md:w-28 md:h-28 rounded-full md:rounded-[2rem] object-cover shadow-lg self-center mb-10' },
   { type: 'empty', className: 'w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-gray-50 border border-gray-100 self-top mt-5' },
   { type: 'image', src: '/landingabout/about.png', className: 'w-32 h-40 md:w-44 md:h-52 rounded-2xl md:rounded-[2rem] object-cover shadow-xl self-end mt-16 md:mt-32 -rotate-2' },

   // Middle Row Focus / Break
   { type: 'text', name: 'D. Chen', role: 'Architect', quote: '"Impeccable quality. Highly recommended."', className: 'bg-clothcare-primary text-white p-5 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl w-48 md:w-56 translate-y-10 md:translate-y-20 z-10 rotate-1' },
   { type: 'image', src: '/landingabout/about.png', className: 'w-24 h-24 md:w-36 md:h-36 rounded-2xl md:rounded-[2rem] object-cover shadow-lg self-center' },
   { type: 'empty', className: 'hidden md:block w-32 h-20 rounded-[2rem] bg-gray-50 border border-gray-100 self-end mb-10' },

   // Right Side Cluster
   { type: 'image', src: '/landingabout/about.png', className: 'w-28 h-40 md:w-40 md:h-56 rounded-2xl md:rounded-[2rem] object-cover shadow-xl self-start mt-10 rotate-2' },
   { type: 'text', name: 'E. Rodriguez', role: 'App User', quote: '"Incredibly intuitive experience. Magic."', className: 'bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 w-48 md:w-52 mt-8 md:mt-16 z-10' },
   { type: 'image', src: '/landingabout/about.png', className: 'w-24 h-32 md:w-32 md:h-40 rounded-2xl md:rounded-[2rem] object-cover shadow-lg self-end -translate-y-10 md:-translate-y-20' },
];

const containerFade = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
   },
};

const floatUp = {
   hidden: { opacity: 0, y: 40, scale: 0.95 },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
   },
};

const TestimonialsSection = () => {
   return (
      <section className="relative py-24 md:py-32 bg-white overflow-hidden font-sans">

         {/* Dynamic Background */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-linear-to-b from-gray-50 to-transparent -z-10 rounded-full blur-[80px]"></div>

         <div className="max-w-400 mx-auto px-4 sm:px-6 relative">

            {/* Floating Cards Masonry Grid (Visual Representation) */}
            <motion.div
               className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-24 min-h-[300px] md:min-h-[450px]"
               variants={containerFade}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
            >
               {floatingCards.map((card, index) => (
                  <motion.div
                     key={index}
                     variants={floatUp}
                     className={`${card.className} transition-transform hover:scale-105 hover:z-20 duration-500 will-change-transform`}
                  >
                     {/* Render based on card type */}
                     {card.type === 'image' && (
                        <img src={card.src} alt="Testimonial User" className="w-full h-full object-cover rounded-inherit" style={{ borderRadius: 'inherit' }} />
                     )}

                     {card.type === 'text' && (
                        <div className="flex flex-col h-full justify-between">
                           <div className="flex gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                 <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 fill-current ${card.className.includes('bg-clothcare') ? 'text-white' : 'text-yellow-400'}`} />
                              ))}
                           </div>
                           <p className={`text-sm md:text-base font-medium mb-4 leading-snug ${card.className.includes('bg-clothcare') ? 'text-white' : 'text-gray-800'}`}>
                              {card.quote}
                           </p>
                           <div className="mt-auto">
                              <p className={`font-bold text-xs md:text-sm ${card.className.includes('bg-clothcare') ? 'text-white' : 'text-gray-900'}`}>{card.name}</p>
                              <p className={`text-[10px] md:text-xs opacity-70 ${card.className.includes('bg-clothcare') ? 'text-white/80' : 'text-gray-500'}`}>{card.role}</p>
                           </div>
                        </div>
                     )}
                  </motion.div>
               ))}
            </motion.div>

            {/* Center Typography & Text */}
            <div className="text-center max-w-4xl mx-auto mt-[-40px] md:mt-[-80px] relative z-30">

               <div className="inline-block bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-1.5 rounded-full mb-8 shadow-sm">
                  <span className="text-sm font-bold tracking-wide text-gray-800">Testimonials</span>
               </div>

               <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.05]">
                  Trusted by leaders <br />
                  <span className="text-gray-400 font-medium">from various industries</span>
               </h2>

               <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                  Learn why professionals trust our meticulous cleaning solutions to manage their wardrobes and save their weekends.
               </p>

               <button className="bg-black text-white hover:bg-gray-800 transition-colors px-8 py-4 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 mx-auto group shadow-lg hover:shadow-xl">
                  Read Success Stories
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>

            </div>

            {/* Faded vertical decorative lines (Optional background detail) */}
            <div className="absolute inset-x-0 h-full top-0 flex justify-evenly pointer-events-none -z-20 opacity-20">
               <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
               <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
               <div className="w-px h-full bg-linear-to-b from-transparent via-clothcare-primary/50 to-transparent"></div>
               <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
               <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
            </div>

         </div>
      </section>
   );
};

export default TestimonialsSection;