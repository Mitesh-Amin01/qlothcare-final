import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-white font-sans overflow-hidden">
      
      {/* DESIGN NOTE: 
         We use a massive background text 'QLOTH' opacity-5 to give 
         that 'magazine editorial' feel without clutter.
      */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h1 className="text-[20rem] font-bold text-clothcare-navy opacity-[0.02] leading-none -translate-x-10 translate-y-10 whitespace-nowrap">
          QLOTH
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* =========================
              LEFT: THE NARRATIVE (Cols 1-5)
              Clean, typographic, focused.
          ========================= */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            
            {/* Small Pre-Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-clothcare-teal"></div>
              <span className="text-clothcare-navy font-display font-bold text-sm tracking-widest uppercase">
                Our Story
              </span>
            </div>

            {/* Main Headline - High Contrast */}
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-8">
              The new standard for <br />
              <span className="text-clothcare-teal">fabric longevity.</span>
            </h2>

            {/* Body Text - Readable Width */}
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                Founded in 2023, Qlothcare began with a simple observation: 
                <strong> clothing care hasn't evolved in decades.</strong>
              </p>
              <p>
                We replaced the smell of harsh chemicals with biodegradable enzymes. 
                We replaced "window hours" with real-time tracking. We are building 
                the infrastructure for the modern wardrobe—extending the lifespan of 
                your favorite garments while reclaiming your most valuable asset: time.
              </p>
            </div>

            {/* "CEO Signature" Block - Adds Human Touch */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-clothcare-navy rounded-full flex items-center justify-center text-white font-bold font-display">
                  JD
                </div>
                <div>
                  <p className="text-text-primary font-bold font-display">James Doe</p>
                  <p className="text-sm text-text-muted">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT: THE VISUAL PROOF (Cols 6-12)
              Structured Grid of Images/Stats. No floating blobs.
          ========================= */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              
              {/* Image 1: Tall (The "Process" Shot) */}
              <div className="col-span-1 row-span-2 relative h-full min-h-[500px] rounded-2xl overflow-hidden group">
                 {/* Replace bg-gray-200 with your actual image */}
                 <div className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-105">
                    {/* Placeholder for <img> */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold bg-clothcare-soft/30">
                       [Process Image]
                    </div>
                 </div>
                 
                 {/* Overlay Text */}
                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-clothcare-navy/90 to-transparent">
                    <p className="text-white font-bold font-display text-lg">Eco-Tech Facility</p>
                    <p className="text-white/70 text-sm">State of the art filtration</p>
                 </div>
              </div>

              {/* Stat Card: Top Right */}
              <div className="bg-clothcare-navy p-8 rounded-2xl text-white flex flex-col justify-between h-[240px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   {/* Decorative Icon */}
                   <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                </div>
                <div>
                   <p className="text-clothcare-teal text-sm font-bold uppercase tracking-wider mb-2">Efficiency</p>
                   <p className="text-4xl font-display font-bold">24hr</p>
                </div>
                <p className="text-white/70 text-sm leading-snug">
                  Standard turnaround time for wash & fold orders.
                </p>
              </div>

              {/* Image 2: Bottom Right (The "Human" Shot) */}
              <div className="relative h-[240px] rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-clothcare-teal transition-transform duration-700 group-hover:scale-105">
                     {/* Placeholder for <img> */}
                     <div className="w-full h-full flex items-center justify-center text-white/50 font-bold bg-clothcare-tealDark">
                        [Team Image]
                     </div>
                  </div>
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                         <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1 group-hover:border-l-clothcare-teal"></div>
                      </button>
                   </div>
              </div>

            </div>

            {/* Bottom Strip: Certifications */}
            <div className="mt-8 flex items-center gap-8 border-t border-gray-100 pt-6">
               <span className="text-xs font-bold text-gray-400 uppercase">Certified by</span>
               <div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Placeholders for logos like 'Woolmark', 'EPA', etc. */}
                  <div className="h-8 w-20 bg-gray-200 rounded"></div>
                  <div className="h-8 w-20 bg-gray-200 rounded"></div>
                  <div className="h-8 w-20 bg-gray-200 rounded"></div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;