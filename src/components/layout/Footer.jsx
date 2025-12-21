import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight, Smartphone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clothcare-navy text-white font-sans relative overflow-hidden">
      
      {/* =========================
          BACKGROUND ELEMENTS
      ========================= */}
      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[15vw] font-bold text-white leading-none tracking-tighter text-center translate-y-1/4">
          QLOTHCARE
        </h1>
      </div>
      
      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-clothcare-teal/10 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* =========================
            PART 1: THE "BIG" CTA
            This sits at the top of the footer, acting as the final push.
        ========================= */}
        <div className="py-24 lg:py-32 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              Don't do laundry. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clothcare-teal to-white">
                Do life.
              </span>
            </h2>
            <p className="text-xl text-clothcare-tealSoft/60 max-w-xl leading-relaxed">
              Join 12,000+ professionals reclaiming their weekends. 
              Download the app today and get $20 off your first order.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* App Store Button Mockup */}
            <button className="flex items-center gap-3 bg-white text-clothcare-navy px-6 py-4 rounded-xl hover:bg-clothcare-teal hover:text-white transition-all duration-300 shadow-lg group">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider opacity-60">Download on the</p>
                <p className="text-lg font-display font-bold leading-none">App Store</p>
              </div>
            </button>

            {/* Google Play Button Mockup */}
            <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider opacity-60">Get it on</p>
                <p className="text-lg font-display font-bold leading-none">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* =========================
            PART 2: LINKS & INFO
        ========================= */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-clothcare-teal rounded-lg flex items-center justify-center">
                 {/* Simple Icon */}
                 <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Qlothcare<span className="text-clothcare-teal">.</span>
              </span>
            </div>
            
            <p className="text-clothcare-tealSoft/60 leading-relaxed max-w-sm">
              The world's most advanced fabric care infrastructure. We combine sustainable chemistry with logistics technology to extend the life of your wardrobe.
            </p>

            <div className="flex gap-4">
               <SocialLink icon={<Facebook size={20} />} />
               <SocialLink icon={<Twitter size={20} />} />
               <SocialLink icon={<Instagram size={20} />} />
               <SocialLink icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-clothcare-tealSoft/60">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" badge="Hiring" />
              <FooterLink text="Sustainability" />
              <FooterLink text="Press & Media" />
              <FooterLink text="Partners" />
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-clothcare-tealSoft/60">
              <FooterLink text="Wash & Fold" />
              <FooterLink text="Dry Cleaning" />
              <FooterLink text="Shoe Care" />
              <FooterLink text="Alterations" />
              <FooterLink text="Corporate" />
            </ul>
          </div>

          {/* Newsletter Column (Cols 9-12) */}
          <div className="lg:col-span-4 bg-white/5 p-8 rounded-2xl border border-white/5">
             <h4 className="font-display font-bold text-lg mb-2">Stay Fresh</h4>
             <p className="text-sm text-clothcare-tealSoft/60 mb-6">
               Get laundry hacks and exclusive offers. No spam, we promise.
             </p>
             
             <div className="flex gap-2 mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border border-white/10 text-white text-sm rounded-lg px-4 py-3 w-full focus:outline-none focus:border-clothcare-teal transition-colors placeholder-white/30"
                />
                <button className="bg-clothcare-teal text-white p-3 rounded-lg hover:bg-clothcare-tealDark transition-colors">
                  <Send size={18} />
                </button>
             </div>
             
             <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-clothcare-tealSoft/60">
                   <MapPin size={16} className="text-clothcare-teal" />
                   <span>123 Fabric Lane, Innovation City</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-clothcare-tealSoft/60">
                   <Mail size={16} className="text-clothcare-teal" />
                   <span>hello@qlothcare.com</span>
                </div>
             </div>
          </div>

        </div>

        {/* =========================
            PART 3: BOTTOM BAR
        ========================= */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-clothcare-tealSoft/40">
          <div>
            &copy; 2025 Qlothcare Inc. All rights reserved.
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-green-500 text-xs font-bold uppercase">Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clothcare-teal hover:text-white transition-all duration-300 text-white/60">
    {icon}
  </a>
);

const FooterLink = ({ text, badge }) => (
  <li className="group">
    <a href="#" className="flex items-center gap-2 hover:text-clothcare-teal transition-colors duration-300">
      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
         <ArrowRight size={12} />
      </span>
      {text}
      {badge && (
        <span className="text-[10px] font-bold uppercase bg-clothcare-teal text-white px-1.5 py-0.5 rounded ml-2">
          {badge}
        </span>
      )}
    </a>
  </li>
);

export default Footer;