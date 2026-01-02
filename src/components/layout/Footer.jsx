import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  ArrowRight, MapPinnedIcon, PhoneCall 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clothcare-dark text-white font-sans relative overflow-hidden">
      
      {/* =========================
          BACKGROUND ELEMENTS
      ========================= */}
      {/* Giant Watermark */}
      <div className="absolute bottom-[130px] left-0 w-full pointer-events-none select-none opacity-[0.03] ">
        <h1 className="text-[18vw] font-bold text-white leading-none tracking-tighter text-center translate-y-1/4">
          QLOTHCARE
        </h1>
      </div>
      
      {/* Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-clothcare-teal/10 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* =========================
            PART 1: THE "BIG" CTA
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
            {/* App Store Button */}
            <button className="flex items-center gap-3 bg-white text-clothcare-dark px-6 py-4 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 shadow-lg group">
              <span className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.773 22.773" width="24" height="24" fill="currentColor">
                  <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                  <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider opacity-60">Download on the</p>
                <p className="text-lg font-display font-bold leading-none">App Store</p>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <span className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-146 129 218 256" width="24" height="24" fill="#A6D864">
                  <g>
                    <path d="M-2.9,150.4l2.8-4.2l2.8-4.1l6.2-9.3c0.8-1.1,0.5-2.7-0.7-3.4c-1.1-0.8-2.7-0.5-3.4,0.7l-6.6,9.9l-2.8,4.2l-2.8,4.2 c-9-3.5-18.9-5.4-29.5-5.4c-10.5,0-20.5,1.9-29.5,5.4l-2.8-4.2L-72,140l-6.6-9.9c-0.8-1.1-2.3-1.4-3.4-0.7 c-1.1,0.8-1.4,2.3-0.7,3.4l6.2,9.3l2.8,4.1l2.8,4.2c-21,9.8-35.3,28.3-35.3,49.6H32.5C32.4,178.7,18.2,160.2-2.9,150.4z M-66.7,180.1c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4S-62.6,180.1-66.7,180.1z M-7.3,180.1 c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4C0.2,176.8-3.1,180.1-7.3,180.1z" />
                    <path d="M-105.3,209.8l-1.1,0.1v12.3v10.1v86.6c0,8.7,7,15.7,15.7,15.7h11.3c-0.4,1.3-0.6,2.7-0.6,4.1v0.8v5v25.6 c0,8.2,6.7,14.9,14.9,14.9s14.9-6.7,14.9-14.9v-25.6v-5v-0.8c0-1.4-0.2-2.8-0.6-4.1h27.6c-0.4,1.3-0.6,2.7-0.6,4.1v0.8v5v25.6 c0,8.2,6.7,14.9,14.9,14.9c8.2,0,14.9-6.7,14.9-14.9v-25.6v-5v-0.8c0-1.4-0.2-2.8-0.6-4.1h11.3c8.7,0,15.7-7,15.7-15.7v-86.6v-10.1 v-12.4h-1.1H-105.3z" />
                    <path d="M-131.1,209.9c-8.2,0-14.9,6.7-14.9,14.9v63.6c0,8.2,6.7,14.9,14.9,14.9c8.2,0,14.9-6.7,14.9-14.9v-63.6 C-116.3,216.5-122.9,209.9-131.1,209.9z" />
                    <path d="M57.2,209.9c-8.2,0-14.9,6.7-14.9,14.9v63.6c0,8.2,6.7,14.9,14.9,14.9s14.9-6.7,14.9-14.9v-63.6 C72,216.5,65.4,209.9,57.2,209.9z" />
                  </g>
                </svg>
              </span>
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
<div className="py-20 grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

  {/* Brand */}
  <div className="col-span-2 lg:col-span-4 space-y-8">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-clothcare-teal rounded-lg flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <span className="font-display text-2xl font-bold tracking-tight">
        Qlothcare<span className="text-clothcare-teal">.</span>
      </span>
    </div>

    <p className="text-clothcare-tealSoft/60 leading-relaxed max-w-sm">
      The world's most advanced fabric care infrastructure. We combine
      sustainable chemistry with logistics technology to extend the life of
      your wardrobe.
    </p>

    <div className="flex gap-4">
      <SocialLink icon={<Facebook size={20} />} />
      <SocialLink icon={<Twitter size={20} />} />
      <SocialLink icon={<Instagram size={20} />} />
      <SocialLink icon={<Linkedin size={20} />} />
    </div>
  </div>

  {/* Company */}
  <div className="col-span-1 lg:col-span-2">
    <h4 className="font-display font-bold text-lg mb-6">Company</h4>
    <ul className="space-y-4 text-clothcare-tealSoft/60">
      <FooterLink text="About Us" />
      <FooterLink text="Careers" badge="Hiring" />
      <FooterLink text="Sustainability" />
      <FooterLink text="Press & Media" />
      <FooterLink text="Partners" />
    </ul>
  </div>

  {/* Services */}
  <div className="col-span-1 lg:col-span-2">
    <h4 className="font-display font-bold text-lg mb-6">Services</h4>
    <ul className="space-y-4 text-clothcare-tealSoft/60">
      <FooterLink text="Wash & Fold" />
      <FooterLink text="Dry Cleaning" />
      <FooterLink text="Shoe Care" />
      <FooterLink text="Alterations" />
      <FooterLink text="Corporate" />
    </ul>
  </div>

  {/* Locations */}
  <div className="col-span-2 lg:col-span-2">
    <h4 className="font-display font-bold text-lg mb-6">Locations</h4>
    <ul className="space-y-4 text-clothcare-tealSoft/60">
      <FooterLink text="Ahmedabad" />
      <FooterLink text="Gandhinagar" />
    </ul>
  </div>

  {/* Contact */}
  <div className="col-span-2 lg:col-span-2">
    <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
    <ul className="space-y-6 text-clothcare-tealSoft/60">
      <li className="flex items-start gap-3">
        <MapPinnedIcon size={20} className="mt-1 shrink-0" />
        <span className="text-sm leading-relaxed">
          First Floor, 101 Ansh Arambh, Nr. Saligram Prime,
          <br />
          Sobo Center Road, South Bopal, Ahmedabad 380058
        </span>
      </li>

      <li className="flex items-start gap-3">
        <PhoneCall size={20} className="mt-1 shrink-0" />
        <div className="flex flex-col gap-1 text-sm">
          <a href="tel:+919601423424" className="hover:text-clothcare-teal">
            +91 96014 23424
          </a>
          <a href="tel:+919284546378" className="hover:text-clothcare-teal">
            +91 92845 46378
          </a>
        </div>
      </li>
    </ul>
  </div>

</div>



        {/* =========================
            PART 3: BOTTOM BAR
        ========================= */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-clothcare-tealSoft/40">
          <div>&copy; 2025 Qlothcare Inc. All rights reserved.</div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-clothcare-primaryDark transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-clothcare-primaryDark transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-clothcare-primaryDark transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clothcare-primary hover:text-white transition-all duration-300 text-white/60">
    {icon}
  </a>
);

const FooterLink = ({ text, badge }) => (
  <li className="group">
    <a href="#" className="flex items-center gap-2 hover:text-clothcare-primary transition-colors duration-300">
      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300">
         <ArrowRight size={12} />
      </span>
      {text}
      {badge && (
        <span className="text-[10px] font-bold uppercase bg-clothcare-primary text-white px-1.5 py-0.5 rounded ml-2">
          {badge}
        </span>
      )}
    </a>
  </li>
);

export default Footer;