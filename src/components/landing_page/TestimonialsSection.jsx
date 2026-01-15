'use client'

import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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
   }
];

// Animation variants for the static cards entering the view
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.15
      }
   }
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
   }
};

const TestimonialsSection = () => {
   return (
      <section className="relative py-24 font-sans overflow-hidden bg-gray-50">

         <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10" style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }} />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-10" style={{ background: 'radial-gradient(circle, #E46F33 0%, transparent 70%)' }} />

         <div className="container mx-auto px-6 lg:px-12 relative z-10">
            

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div className="max-w-2xl">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                     Loved by thousands. <br />
                     <span className="bg-gradient-to-r from-[#E46F33] to-[#CC5F2B] bg-clip-text text-transparent">
                        Recommended by 99%.
                     </span>
                  </h2>
               </div>

               <div className="flex items-center gap-6 bg-white px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-right">
                     <p className="font-bold text-gray-900 text-2xl flex items-center gap-1">
                        4.9/5 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                     </p>
                     <p className="text-xs text-gray-600">Average Rating</p>
                  </div>
                  <div className="h-10 w-px bg-gray-200"></div>
                  <div className="text-right">
                     <p className="font-bold text-gray-900 text-2xl flex items-center gap-1">
                        12k+ <TrendingUp className="w-5 h-5 text-[#E46F33]" />
                     </p>
                     <p className="text-xs text-gray-600">Active Users</p>
                  </div>
               </div>
            </div>


            <motion.div 
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
            >
               {reviews.map((review) => (
                  <motion.div key={review.id} variants={itemVariants}>
                     <TestimonialCard review={review} />
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

const TestimonialCard = ({ review }) => (
   <div className="h-full flex flex-col justify-between bg-white border border-gray-200 p-8 rounded-2xl shadow-sm  hover:border-[#E46F33]/20 transition-all duration-300 relative group">
      <div className="absolute top-6 right-6 opacity-5">
         <Quote size={60} fill="currentColor" stroke="none" className="text-[#E46F33]" />
      </div>

      <div className="relative z-10">
         <div className="flex gap-0.5 mb-6">
            {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
         </div>

         <p className="text-gray-700 text-base leading-relaxed mb-8">
            <span className="text-[#E46F33] font-serif text-xl">"</span>
            {review.quote}
            <span className="text-[#E46F33] font-serif text-xl">"</span>
         </p>
      </div>

      <div className="flex items-center gap-4 mt-auto">
         <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
            {review.image}
         </div>
         <div>
            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
            <p className="text-xs text-gray-500">{review.role}</p>
         </div>
         <div className="ml-auto">
            <span className="text-[10px] font-bold text-[#E46F33] uppercase tracking-widest border border-[#E46F33]/20 px-2.5 py-1 rounded-full">
               {review.tag}
            </span>
         </div>
      </div>
   </div>
);

export default TestimonialsSection;