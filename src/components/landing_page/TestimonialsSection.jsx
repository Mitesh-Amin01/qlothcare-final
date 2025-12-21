import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Director @ TechFlow",
    image: "SJ", // Placeholder for avatar
    stars: 5,
    quote: "I used to spend my Sunday afternoons ironing shirts. Qlothcare gave me my weekends back. The pickup is always on time, and the folding is better than I could ever do.",
    tag: "Weekly Subscriber"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Architect",
    image: "DC",
    stars: 5,
    quote: "I was skeptical about sending my suits to an app-based service, but the quality is impeccable. They noticed a button was loose on my blazer and fixed it without me asking.",
    tag: "Dry Clean Pro"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Freelance Designer",
    image: "ER",
    stars: 5,
    quote: "The app is incredibly intuitive. Being able to track the driver in real-time and pay via Apple Pay makes the whole experience seamless. It feels like magic.",
    tag: "App User"
  }
];

const logos = ["Vogue", "Forbes", "TechCrunch", "GQ", "Wired"];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white font-sans border-t border-border-light">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* =========================
            PART 1: TRUST STRIP
        ========================= */}
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-8">
            Trusted by professionals from companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos - In real usage, replace with SVGs */}
             {logos.map((logo, index) => (
                <span key={index} className="text-2xl font-display font-bold text-clothcare-navy hover:text-clothcare-teal transition-colors cursor-default">
                   {logo}
                </span>
             ))}
          </div>
        </div>

        {/* =========================
            PART 2: REVIEWS HEADER
        ========================= */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div className="max-w-2xl">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Loved by thousands. <br />
                <span className="text-clothcare-teal">Recommended by 99%.</span>
              </h2>
           </div>
           
           {/* Summary Stats */}
           <div className="flex items-center gap-6 bg-bg-light px-6 py-3 rounded-xl border border-border-light">
              <div className="text-right">
                 <p className="font-bold text-clothcare-navy text-xl leading-none">4.9/5</p>
                 <p className="text-xs text-text-muted">Average Rating</p>
              </div>
              <div className="h-8 w-px bg-border-light"></div>
              <div className="text-right">
                 <p className="font-bold text-clothcare-navy text-xl leading-none">12k+</p>
                 <p className="text-xs text-text-muted">Active Users</p>
              </div>
           </div>
        </div>

        {/* =========================
            PART 3: REVIEW CARDS
        ========================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="group flex flex-col justify-between bg-white border border-border-light p-8 rounded-2xl hover:border-clothcare-teal/30 hover:shadow-clothcareSoft transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-clothcare-tealSoft group-hover:text-clothcare-teal/10 transition-colors">
                 <Quote size={64} fill="currentColor" stroke="none" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-status-warning text-status-warning" />
                   ))}
                </div>

                {/* Quote */}
                <p className="text-text-primary text-lg leading-relaxed font-medium mb-8 relative z-10">
                  "{review.quote}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                 <div className="w-12 h-12 rounded-full bg-clothcare-navy text-white flex items-center justify-center font-display font-bold text-lg">
                    {review.image}
                 </div>
                 <div>
                    <p className="font-bold text-text-primary text-sm">{review.name}</p>
                    <p className="text-xs text-text-muted">{review.role}</p>
                 </div>
              </div>
              
              {/* Tag (Visible on Hover) */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <span className="text-xs font-bold text-clothcare-teal uppercase tracking-wider border border-clothcare-teal/20 px-2 py-1 rounded">
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
           <a href="#" className="inline-flex items-center gap-2 text-clothcare-navy font-bold hover:text-clothcare-teal transition-colors border-b-2 border-transparent hover:border-clothcare-teal pb-1">
              Read all 2,400+ reviews on Trustpilot
              <ArrowRight className="w-4 h-4" />
           </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;