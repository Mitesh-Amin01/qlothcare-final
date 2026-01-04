'use client'

import React from 'react';
import { Star, Quote, ArrowRight, TrendingUp } from 'lucide-react';

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

const TestimonialsSection = () => {
   return (
      <section className="relative py-24 font-sans overflow-hidden bg-gray-50">
         {/* Subtle Gradient Background */}
         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-teal-50/60"></div>

         {/* Decorative Floating Elements - More Subtle */}
         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/10 to-cyan-200/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/10 to-emerald-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

         <div className="container mx-auto px-6 lg:px-12 relative z-10">


            {/* =========================
            PART 2: REVIEWS HEADER
        ========================= */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-2xl">
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                     Loved by thousands. <br />
                     <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-extrabold">
                        Recommended by 99%.
                     </span>
                  </h2>
               </div>

               {/* Summary Stats - Enhanced with Glassmorphism */}
               <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
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
                           <TrendingUp className="w-5 h-5 text-teal-600" />
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Active Users</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* =========================
            PART 3: REVIEW CARDS
        ========================= */}
            <div className="grid md:grid-cols-3 gap-8">
               {reviews.map((review, index) => (
                  <div
                     key={review.id}
                     style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                     }}
                     className="flex flex-col justify-between bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative overflow-hidden"
                  >
                     {/* Decorative Quote Icon */}
                     <div className="absolute top-6 right-6 opacity-5">
                        <Quote size={72} fill="currentColor" stroke="none" className="text-teal-600" />
                     </div>

                     <div className="relative z-10">
                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                           {[...Array(5)].map((_, i) => (
                              <Star
                                 key={i}
                                 className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                           ))}
                        </div>

                        {/* Quote */}
                        <p className="text-gray-700 text-base leading-relaxed font-medium mb-8">
                           <span className="text-teal-600 text-2xl font-serif leading-none">"</span>
                           {review.quote}
                           <span className="text-teal-600 text-2xl font-serif leading-none">"</span>
                        </p>
                     </div>

                     {/* User Info with Avatar */}
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

                     {/* Tag */}
                     <div className="absolute bottom-6 right-6">
                        <span className="text-xs font-bold text-clothcare-primary uppercase tracking-wider border border-clothcare-primary bg-white px-3 py-1.5 rounded-full">
                           {review.tag}
                        </span>
                     </div>
                  </div>
               ))}
            </div>

            {/* =========================
            PART 4: CALL TO ACTION STRIP
        ========================= */}
            <div className="mt-20 text-center">
               <a href="#" className="group inline-flex items-center gap-3 bg-gradient-to-r from-clothcare-navy to-clothcare-teal text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative z-10">Read all 2,400+ reviews on Trustpilot</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
               </a>
            </div>

         </div>

         {/* Keyframe Animations */}
         <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </section>
   );
};

export default TestimonialsSection;