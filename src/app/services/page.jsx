'use client'
import React, { useState } from 'react';
import { 
  Shirt, Sparkles, Briefcase, Home, Clock, MapPin, 
  ShieldCheck, Check, ArrowRight, Search, Zap, 
  Droplets, Thermometer, Box, ChevronRight, 
  CheckCircle2,
  Star
} from 'lucide-react';

/* ==========================================
   SECTION 1: HERO (The Anchor)
   Minimalist, bold typography to set the stage.
   ========================================== */
const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white overflow-hidden font-sans">
      
      {/* =========================
          BACKGROUND TEXTURE
          (Subtle dot grid for structure, not random blobs)
      ========================= */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* =========================
              LEFT: EDITORIAL CONTENT (Cols 1-7)
              Clean, high-contrast, structural.
          ========================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Breadcrumb / Status Line */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="h-px w-8 bg-clothcare-navy"></span>
              <span className="text-clothcare-navy font-display font-bold text-sm tracking-widest uppercase">
                Service Catalog 2.0
              </span>
              <div className="bg-clothcare-tealSoft px-2 py-0.5 rounded text-[10px] font-bold text-clothcare-tealDark uppercase">
                Updated
              </div>
            </div>

            {/* Main Headline - Massive & Tight */}
            <h1 className="font-display text-6xl lg:text-7xl/none font-bold text-clothcare-navy mb-8 tracking-tight">
              Wardrobe care, <br />
              <span className="relative inline-block">
                <span className="relative z-10">reimagined.</span>
                {/* Text Highlighter Effect */}
                <span className="absolute bottom-2 left-0 w-full h-4 bg-clothcare-tealSoft -z-0 -rotate-1"></span>
              </span>
            </h1>

            {/* Subtext with "Technical" feel */}
            <p className="text-xl text-text-muted max-w-xl leading-relaxed mb-10 border-l-2 border-gray-100 pl-6">
              From daily wash & fold to couture preservation. We utilize 
              <span className="text-clothcare-navy font-semibold"> 7 distinct cleaning technologies</span> to extend the lifespan of your garments by up to 3x.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-clothcare-navy text-white font-display font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-clothcare-teal hover:shadow-clothcareSoft hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                Explore Categories
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="group flex items-center justify-center gap-3 bg-white border border-gray-200 text-clothcare-navy font-display font-bold px-8 py-4 rounded-xl hover:border-clothcare-navy transition-all duration-300">
                <Search className="w-5 h-5 text-gray-400 group-hover:text-clothcare-navy transition-colors" />
                Find a Service
              </button>
            </div>

            {/* Social Proof Strip - Minimalist */}
            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
               <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-clothcare-navy text-clothcare-navy" />
                    <Star className="w-4 h-4 fill-clothcare-navy text-clothcare-navy" />
                    <Star className="w-4 h-4 fill-clothcare-navy text-clothcare-navy" />
                    <Star className="w-4 h-4 fill-clothcare-navy text-clothcare-navy" />
                    <Star className="w-4 h-4 fill-clothcare-navy text-clothcare-navy" />
                  </div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Rated 5.0/5</p>
               </div>
               <div className="h-8 w-px bg-gray-200"></div>
               <div>
                  <p className="font-display font-bold text-clothcare-navy text-lg leading-none">1.5M+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Garments Treated</p>
               </div>
            </div>
          </div>


          {/* =========================
              RIGHT: VISUAL COMPOSITION (Cols 8-12)
              Layered, Floating UI Cards. 
              Looks like a "System" rather than just a picture.
          ========================= */}
          <div className="lg:col-span-5 relative h-full min-h-[500px] flex items-center">
            
            {/* 1. Base Layer: The "Photo" (Gray placeholder for now) */}
            <div className="absolute right-0 top-0 w-[90%] h-[90%] bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-inner">
               {/* Decorative Gradient inside placeholder */}
               <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 opacity-50"></div>
               {/* Grid lines inside image */}
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               
               {/* Actual Photo Placeholder Text */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-gray-300 text-2xl">[ High-End Apparel Image ]</span>
               </div>
            </div>

            {/* 2. Floating Card: "Service Menu" */}
            <div className="absolute top-12 left-0 bg-white p-6 rounded-2xl shadow-clothcare border border-gray-100 w-64 animate-fade-in-up">
               <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                  <span className="font-bold text-clothcare-navy text-sm">Active Services</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               </div>
               <div className="space-y-3">
                  <div className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-8 h-8 rounded-lg bg-clothcare-tealSoft flex items-center justify-center text-clothcare-tealDark group-hover:bg-clothcare-teal group-hover:text-white transition-colors">
                        <Shirt size={16} />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-gray-700">Dry Cleaning</p>
                        <p className="text-[10px] text-gray-400">Suits, Dresses</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-clothcare-navy group-hover:text-white transition-colors">
                        <Sparkles size={16} />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-gray-700">Restoration</p>
                        <p className="text-[10px] text-gray-400">Leather, Suede</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* 3. Floating Badge: "Quality Assurance" */}
            <div className="absolute bottom-20 -right-4 bg-clothcare-navy text-white p-5 rounded-xl shadow-2xl flex items-center gap-4 max-w-[220px] transform hover:scale-105 transition-transform duration-300">
               <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-clothcare-teal border border-white/20">
                  <CheckCircle2 size={20} />
               </div>
               <div>
                  <p className="text-2xl font-display font-bold leading-none">99.8%</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider font-semibold mt-1">Quality Score</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SECTION 2: SERVICE CATEGORIES (Bento Grid)
   High-level overview of the 4 main pillars.
   ========================================== */
const ServiceCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Everyday Wash & Fold",
      desc: "The core of our service. Sorted by color, washed at optimal temperatures, and folded to retail standards.",
      icon: <Shirt className="w-6 h-6" />,
      tags: ["Casual Wear", "Gym Gear", "Kids Clothes"],
      colSpan: "lg:col-span-2"
    },
    {
      id: 2,
      title: "Couture Dry Cleaning",
      desc: "Solvent-free cleaning for your most delicate assets. Hand-finished pressing.",
      icon: <Sparkles className="w-6 h-6" />,
      tags: ["Suits", "Dresses", "Silk"],
      colSpan: "lg:col-span-1"
    },
    {
      id: 3,
      title: "Household & Linens",
      desc: "Deep cleaning for bulky items that don't fit in home machines.",
      icon: <Home className="w-6 h-6" />,
      tags: ["Comforters", "Curtains", "Rugs"],
      colSpan: "lg:col-span-1"
    },
    {
      id: 4,
      title: "Corporate & Uniforms",
      desc: "Commercial-grade solutions for businesses, gyms, and hotels with high volume needs.",
      icon: <Briefcase className="w-6 h-6" />,
      tags: ["Bulk Pricing", "Scheduled Routes"],
      colSpan: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className={`${cat.colSpan} group bg-white rounded-3xl p-8 border border-gray-200 hover:border-clothcare-teal/50 hover:shadow-clothcareSoft transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                {/* Large Background Icon Clone */}
                {React.cloneElement(cat.icon, { className: "w-32 h-32" })}
              </div>
              
              <div className="w-12 h-12 bg-clothcare-tealSoft rounded-xl flex items-center justify-center text-clothcare-tealDark mb-6 group-hover:bg-clothcare-teal group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              
              <h3 className="font-display text-2xl font-bold text-text-primary mb-3">{cat.title}</h3>
              <p className="text-text-muted mb-8 leading-relaxed max-w-sm">{cat.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-bold uppercase tracking-wider bg-gray-50 text-gray-500 px-3 py-1 rounded border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SECTION 3: SERVICE DETAILS (Interactive Tabs)
   Deep dive into specific processes without clutter.
   ========================================== */
const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState('inspection');

  const details = {
    inspection: {
      title: "7-Point Inspection",
      content: "Every garment is photographed and inspected for stains, loose buttons, and tears before cleaning begins. We flag issues directly in your app.",
      points: ["Digital Item Tracking", "Stain Pre-treatment", "Pocket Checks"],
      imageColor: "bg-blue-100"
    },
    cleaning: {
      title: "The Cleaning Science",
      content: "We use GreenEarth® liquid silicone tech. It weighs the same as water but has a surface tension low enough to penetrate fibers without swelling them.",
      points: ["Color-Safe Bleaches", "Biodegradable Detergents", "Custom Cycles"],
      imageColor: "bg-teal-100"
    },
    finishing: {
      title: "Steam & Press",
      content: "Our Italian finishing equipment provides tensioning that restores the garment's original fit, followed by hand-touchups.",
      points: ["Form-finishing mannequins", "Crisp Collars", "Lint Removal"],
      imageColor: "bg-indigo-100"
    }
  };

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Left: Menu */}
        <div className="lg:w-1/3">
          <span className="text-clothcare-teal font-bold uppercase tracking-widest text-sm mb-4 block">The Process</span>
          <h2 className="font-display text-4xl font-bold text-text-primary mb-8">Precision in every step.</h2>
          
          <div className="space-y-2">
            {Object.keys(details).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                  activeTab === key 
                    ? 'bg-clothcare-navy text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-text-muted'
                }`}
              >
                <span className="font-display font-semibold text-lg capitalize">{key}</span>
                <ChevronRight className={`w-5 h-5 ${activeTab === key ? 'text-clothcare-teal' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Content Panel */}
        <div className="lg:w-2/3">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 h-full flex flex-col md:flex-row gap-8 items-center animate-fade-in">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-display font-bold text-clothcare-navy">{details[activeTab].title}</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                {details[activeTab].content}
              </p>
              <ul className="space-y-3 pt-4">
                {details[activeTab].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-text-primary">
                    <div className="w-6 h-6 rounded-full bg-clothcare-tealSoft flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-clothcare-tealDark" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Placeholder for Process Image */}
            <div className={`w-full md:w-64 h-64 rounded-2xl ${details[activeTab].imageColor} flex items-center justify-center shadow-inner`}>
              <span className="font-display font-bold text-black/20 uppercase tracking-widest">
                [ {activeTab} Visual ]
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ==========================================
   SECTION 4: FABRIC & GARMENT CARE (Cards)
   Demonstrating expertise in materials.
   ========================================== */
const FabricCare = () => {
  const fabrics = [
    { name: "Silk & Rayon", rule: "Low Temp / No Tumble", icon: <Sparkles size={20} /> },
    { name: "Wool & Cashmere", rule: "Lanolin Treatment", icon: <Box size={20} /> },
    { name: "Activewear", rule: "Enzyme Deodorization", icon: <Zap size={20} /> },
    { name: "Cotton / Linen", rule: "Starch Options", icon: <Shirt size={20} /> },
  ];

  return (
    <section className="py-24 bg-clothcare-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-clothcare-teal/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div>
             <h2 className="font-display text-4xl font-bold mb-4">Material Science</h2>
             <p className="text-white/60 max-w-xl">
               Different fibers require different pH levels and mechanical action. We don't guess; we test.
             </p>
           </div>
           <button className="text-clothcare-teal font-bold hover:text-white transition-colors flex items-center gap-2">
             View Full Fabric Guide <ArrowRight size={16} />
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fabrics.map((fabric, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Type 0{idx + 1}</span>
                <div className="text-clothcare-teal opacity-50 group-hover:opacity-100 transition-opacity">
                  {fabric.icon}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{fabric.name}</h3>
              <p className="text-sm text-white/60">{fabric.rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SECTION 5: QUALITY & HYGIENE (Split Feature)
   Focus on safety and "Hospital Grade".
   ========================================== */
const QualityHygiene = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-clothcare-tealSoft/30 rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-clothcare-tealDark font-bold text-xs uppercase tracking-wider">
              <ShieldCheck size={16} />
              Hospital Grade Hygiene
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Clean enough for a surgeon. <br />
              <span className="text-clothcare-teal">Safe enough for baby.</span>
            </h2>
            
            <p className="text-text-muted text-lg leading-relaxed">
              We never mix your clothes with others. Every load is washed in its own sanitized machine. We use ATP monitoring (the same tech used in hospitals) to verify surface cleanliness.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50">
                  <Droplets className="text-clothcare-teal mb-3 w-8 h-8" />
                  <h4 className="font-bold text-text-primary">Purified Water</h4>
                  <p className="text-xs text-text-muted mt-1">Filtered & Softened</p>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50">
                  <Thermometer className="text-clothcare-teal mb-3 w-8 h-8" />
                  <h4 className="font-bold text-text-primary">Heat Sanitation</h4>
                  <p className="text-xs text-text-muted mt-1">Temp Controlled</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            {/* Abstract visual representation of hygiene */}
            <div className="relative aspect-square rounded-[2rem] bg-white border border-clothcare-teal/20 overflow-hidden shadow-xl">
               <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-clothcare-tealSoft opacity-50"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border border-clothcare-teal/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="w-48 h-48 border border-clothcare-teal/50 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute bg-white px-6 py-3 rounded-xl shadow-lg font-bold text-clothcare-navy flex items-center gap-2">
                     <CheckCircle2 className="text-status-success" /> 100% Bacteria Free
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SECTION 6: TURNAROUND TIME (Timeline)
   Visualizing speed options.
   ========================================== */
const TurnaroundTime = () => {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-text-primary mb-4">Speed vs. Value</h2>
          <p className="text-text-muted">Choose the timeline that fits your schedule.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Option 1: Standard */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-gray-400 transition-colors"></div>
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary">Standard</h3>
                  <p className="text-sm text-text-muted">Best for weekly planning</p>
               </div>
               <Clock className="text-gray-300 w-8 h-8" />
            </div>
            <div className="text-4xl font-bold text-clothcare-navy mb-2">48h</div>
            <p className="text-sm text-text-muted">Pickup Monday → Delivery Wednesday</p>
          </div>

          {/* Option 2: Express */}
          <div className="bg-clothcare-navy p-8 rounded-2xl border border-clothcare-navy relative shadow-xl transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-clothcare-teal text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase">Fastest</div>
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h3 className="font-display text-2xl font-bold text-white">Express</h3>
                  <p className="text-sm text-clothcare-tealSoft/60">When you need it now</p>
               </div>
               <Zap className="text-clothcare-teal w-8 h-8" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">24h</div>
            <p className="text-sm text-clothcare-tealSoft/60">Pickup 9AM → Delivery Next Day 9AM</p>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SECTION 7: SERVICE COVERAGE (Functional)
   Zip code checker style.
   ========================================== */
const ServiceCoverage = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        
        <div className="w-16 h-16 bg-bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-clothcare-navy">
          <MapPin size={32} />
        </div>

        <h2 className="font-display text-4xl font-bold text-text-primary mb-6">
          We are in your neighborhood.
        </h2>
        <p className="text-text-muted text-lg mb-10">
          Currently serving the greater metropolitan area. Enter your zip code to see if you are in our free pickup zone.
        </p>

        {/* Fake Search Bar */}
        <div className="flex bg-white shadow-xl shadow-clothcareSoft/30 rounded-full p-2 border border-gray-100 max-w-md mx-auto mb-12">
           <input 
             type="text" 
             placeholder="Enter Zip Code (e.g. 10001)" 
             className="flex-grow px-6 py-3 rounded-l-full outline-none text-text-primary placeholder-gray-400"
           />
           <button className="bg-clothcare-navy text-white px-8 py-3 rounded-full font-bold hover:bg-clothcare-teal transition-colors flex items-center gap-2">
             Check <ArrowRight size={16} />
           </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold text-gray-400 uppercase tracking-wide">
           <span>Downtown</span>
           <span className="text-clothcare-teal">•</span>
           <span>Uptown</span>
           <span className="text-clothcare-teal">•</span>
           <span>West Side</span>
           <span className="text-clothcare-teal">•</span>
           <span>Brooklyn Heights</span>
           <span className="text-clothcare-teal">•</span>
           <span>Queens</span>
        </div>

      </div>
    </section>
  );
};

// Helper Icon for Quality Section
import { CheckCircle2 as CheckIcon } from 'lucide-react'; // Renaming for usage inside component if needed

/* ==========================================
   MAIN PAGE COMPONENT
   ========================================== */
const ServicesPage = () => {
  return (
    <div className="font-sans antialiased text-text-primary bg-white">
      <ServicesHero />
      <ServiceCategories />
      <ServiceDetails />
      <FabricCare />
      <QualityHygiene />
      <TurnaroundTime />
      <ServiceCoverage />
    </div>
  );
};

export default ServicesPage;