'use client'
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Play, Users, ShieldCheck, 
  Sparkles, Leaf, Microscope, Heart,
  ChevronRight, ArrowDown, Target, Eye,
  Smartphone, Layers, Zap, Clock, CheckCircle2,
  Thermometer, Droplets, ScanLine
} from 'lucide-react';

/* ==========================================
   HELPER: SMOOTH SCROLL FUNCTION
   ========================================== */
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================
   COMPONENT 1: STICKY NAV PILLS
   ========================================== */
const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('mission');

  // Simple scroll spy to update active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mission', 'difference', 'process', 'tech', 'team', 'quality'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'difference', label: 'Why Us' },
    { id: 'process', label: 'Our Process' },
    { id: 'tech', label: 'Tech' },
    { id: 'team', label: 'Culture' },
    { id: 'quality', label: 'Quality' },
  ];

  return (
    <div className="sticky top-30 z-50 flex justify-center px-4 pointer-events-none mb-8 lg:mb-0">
      <div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/50 shadow-clothcareSoft rounded-full p-1.5 flex overflow-x-auto max-w-full scrollbar-hide">
        <div className="flex space-x-1 min-w-max">
          {sections.map((section) => (
            <button 
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-clothcare-navy text-white shadow-md' 
                  : 'text-text-muted hover:bg-bg-soft hover:text-clothcare-navy'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==========================================
   COMPONENT 2: HERO SECTION
   ========================================== */
const AboutHero = () => {
  return (
    <section className="relative bg-bg-light pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-clothcare-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-clothcare-navy/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-clothcare-teal/20 shadow-sm text-clothcare-tealDark text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-clothcare-teal animate-pulse"></span>
              Redefining Garment Care
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-clothcare-navy leading-[1.1] mb-6">
              More than just <br />
              <span className="text-transparent bg-clip-text bg-clothcare-primary-gradient">
                clean clothes.
              </span>
            </h1>

            <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              We are merging artisanal fabric care with next-gen robotics. Driven by a mission to give you back your time, while extending the life of your wardrobe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button onClick={() => scrollToSection('mission')} className="px-8 py-4 bg-clothcare-navy text-white rounded-xl font-bold shadow-clothcare hover:shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-3">
                Our Story
                <ArrowDown size={18} />
              </button>
            </div>
          </div>

          {/* Visual Collage */}
          <div className="lg:w-1/2 w-full relative h-[500px] hidden lg:block">
             {/* Image 1: Technology */}
             <div className="absolute top-0 right-0 w-[350px] h-[400px] bg-white p-2 rounded-[2rem] shadow-2xl rotate-3 z-10 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1545173168-9f1947eebb8f?auto=format&fit=crop&q=80&w=2071" alt="Tech" className="w-full h-full object-cover rounded-[1.5rem]" />
             </div>
             {/* Image 2: Human */}
             <div className="absolute bottom-10 left-10 w-[300px] h-[350px] bg-white p-2 rounded-[2rem] shadow-clothcare -rotate-6 z-20 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2070" alt="Team" className="w-full h-full object-cover rounded-[1.5rem]" />
             </div>
             {/* Floater */}
             <div className="absolute top-1/2 left-0 -translate-y-1/2 z-30 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow-xl flex items-center gap-3">
                <div className="bg-clothcare-teal/10 p-2 rounded-lg text-clothcare-teal"><Sparkles size={20} /></div>
                <div>
                   <p className="text-[10px] uppercase font-bold text-text-muted">Established</p>
                   <p className="text-sm font-bold text-clothcare-navy">2025 in Gujarat</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 3: MISSION & VISION
   ========================================== */
const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card (Teal Theme) */}
          <div className="relative group overflow-hidden rounded-3xl p-10 bg-bg-soft border border-clothcare-teal/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-clothcare-teal rounded-full blur-[80px] opacity-20 -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-clothcare-teal mb-6 shadow-sm">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold text-clothcare-navy mb-4">Our Mission</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                To revolutionize the laundry industry by combining <span className="text-clothcare-teal font-bold">eco-friendly technology</span> with white-glove service, giving families back their most precious resource: time.
              </p>
            </div>
          </div>

          {/* Vision Card (Navy Theme) */}
          <div className="relative group overflow-hidden rounded-3xl p-10 bg-clothcare-navy text-white">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-clothcare-teal rounded-full blur-[80px] opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-clothcare-teal mb-6 backdrop-blur-sm">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To become India's most trusted household name for garment care, setting the global standard for sustainability, hygiene, and automated convenience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 4: WHAT MAKES US DIFFERENT (Bento)
   ========================================== */
const Difference = () => {
  return (
    <section id="difference" className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-clothcare-teal font-bold uppercase tracking-widest text-xs">The ClothCare Advantage</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-clothcare-navy mt-2">Not just another laundry.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Card 1: Large (Hygiene) */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-border-light flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-clothcare-navy mb-4">Medical-Grade Hygiene</h3>
              <p className="text-text-muted mb-6">We don't mix loads. Your clothes are washed separately in sanitized machines using disinfectants approved for hospital use.</p>
              <ul className="space-y-2">
                {['Individual Wash Loads', 'Antibacterial Treatment', 'Machine Sanitation Cycle'].map(item => (
                   <li key={item} className="flex items-center gap-2 text-sm font-medium text-clothcare-navy">
                      <CheckCircle2 size={16} className="text-clothcare-teal" /> {item}
                   </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-bg-soft rounded-2xl flex items-center justify-center text-clothcare-teal">
               <ShieldCheck size={80} strokeWidth={1} />
            </div>
          </div>

          {/* Card 2: Speed */}
          <div className="bg-clothcare-teal text-white p-8 rounded-3xl shadow-clothcareSoft flex flex-col justify-between">
            <Clock size={40} className="mb-4 text-white/80" />
            <div>
              <h3 className="text-xl font-bold mb-2">24h Turnaround</h3>
              <p className="text-white/80 text-sm">Standard delivery is fast. Member delivery is instant. No extra express fees.</p>
            </div>
          </div>

          {/* Card 3: Eco */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-light flex flex-col justify-between">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4">
               <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-clothcare-navy mb-2">Zero Toxic Chems</h3>
              <p className="text-text-muted text-sm">We use biodegradable detergents and ozone technology instead of harsh PERC solvents.</p>
            </div>
          </div>

          {/* Card 4: Tech */}
          <div className="md:col-span-2 bg-clothcare-navy p-8 rounded-3xl shadow-clothcare flex flex-col md:flex-row items-center gap-8 text-white">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Real-Time Tracking</h3>
              <p className="text-white/60 mb-6">From pickup to fold, track your garments journey step-by-step in our app. See photos of your scale weight and stain treatments.</p>
            </div>
            <div className="w-full md:w-1/3 h-32 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center">
               <Smartphone size={48} className="text-clothcare-teal" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 5: PROCESS PHILOSOPHY
   ========================================== */
const ProcessFlow = () => {
  const steps = [
    { num: '01', title: 'Inspection & Tagging', desc: 'Every item is photographed, inspected for stains, and barcoded.' },
    { num: '02', title: 'Stain Treatment', desc: 'Expert spotters treat stains manually before the wash cycle begins.' },
    { num: '03', title: 'Custom Wash', desc: 'Sorted by color and fabric. Washed with pH-balanced eco-detergents.' },
    { num: '04', title: 'Steam Finish', desc: 'Garments are steam pressed, quality checked, and packaged for protection.' },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
           <h2 className="text-3xl font-display font-bold text-clothcare-navy mb-4">Our Process Philosophy</h2>
           <p className="text-text-muted">We treat every garment as if it were our own. No shortcuts, just meticulous care powered by detailed SOPs.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border-light z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white group">
                {/* Step Number Bubble */}
                <div className="w-24 h-24 bg-white border border-border-light rounded-full flex items-center justify-center text-3xl font-display font-bold text-clothcare-teal shadow-sm mb-8 group-hover:border-clothcare-teal group-hover:scale-110 transition-all duration-300 mx-auto lg:mx-0">
                  {step.num}
                </div>
                
                <h3 className="text-xl font-bold text-clothcare-navy mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed text-center lg:text-left">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 6: TECHNOLOGY & OPERATIONS
   ========================================== */
const TechOps = () => {
  return (
    <section id="tech" className="py-24 bg-clothcare-navy text-white overflow-hidden relative">
      {/* Background Tech Patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <Badge className="bg-clothcare-teal text-white mb-6">Operations 2.0</Badge>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Precision meets <br/>Automation.</h2>
            <p className="text-white/70 text-lg mb-10">
              We've built a custom backend that manages the lifecycle of your clothes. Mistakes are minimized through redundant barcode scanning and automated sorting conveyors.
            </p>

            <div className="space-y-6">
               <TechRow icon={ScanLine} title="RFID Tracking" desc="We know exactly where your shirt is in the plant, down to the specific machine." />
               <TechRow icon={Droplets} title="Water Reclamation" desc="Advanced filtration systems recycle 40% of water used, reducing environmental impact." />
               <TechRow icon={Layers} title="Automated Sorting" desc="Computer-vision aided sorting ensures your socks never end up in someone else's bag." />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=2070" alt="Tech Facility" className="w-full h-auto opacity-60" />
               <div className="absolute inset-0 bg-gradient-to-t from-clothcare-navy via-transparent to-transparent"></div>
               
               {/* Overlay Stats */}
               <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
                        <p className="text-2xl font-bold text-clothcare-teal">99.9%</p>
                        <p className="text-xs text-white/60">Accuracy Rate</p>
                     </div>
                     <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20">
                        <p className="text-2xl font-bold text-clothcare-teal">45 min</p>
                        <p className="text-xs text-white/60">Avg. Processing</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TechRow = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-clothcare-teal shrink-0">
       <Icon size={20} />
    </div>
    <div>
       <h4 className="font-bold text-lg mb-1">{title}</h4>
       <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

/* ==========================================
   COMPONENT 7: TEAM & CULTURE
   ========================================== */
const TeamCulture = () => {
  return (
    <section id="team" className="py-24 bg-white">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-display font-bold text-clothcare-navy mb-4">Our People First Culture</h2>
             <p className="text-text-muted max-w-2xl mx-auto">
                Machines do the heavy lifting, but our experts provide the care. We hire the best, pay above market rates, and provide full benefits.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Culture Item 1 */}
             <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1932" alt="Team meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                   <h3 className="text-white font-bold text-xl">Continuous Training</h3>
                </div>
             </div>
             
             {/* Culture Item 2 */}
             <div className="bg-bg-soft rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                <Heart className="text-clothcare-teal mb-4" size={32} fill="currentColor" />
                <h4 className="font-bold text-clothcare-navy">Fair Wages</h4>
                <p className="text-xs text-text-muted mt-2">Ethical employment is core to our brand.</p>
             </div>

             {/* Culture Item 3 */}
             <div className="relative rounded-3xl overflow-hidden group h-48 md:h-auto">
                <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=2070" alt="Ironing" className="w-full h-full object-cover" />
             </div>

             {/* Culture Item 4 */}
             <div className="bg-clothcare-navy rounded-3xl p-6 flex flex-col justify-center items-center text-center text-white">
                <Users className="text-clothcare-teal mb-4" size={32} />
                <h4 className="font-bold">Expert Leadership</h4>
                <p className="text-xs text-white/60 mt-2">Combined 50+ years in textile care.</p>
             </div>

             {/* Culture Item 5 */}
             <div className="relative rounded-3xl overflow-hidden group h-48 md:h-auto">
                 <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2084" alt="Happy Staff" className="w-full h-full object-cover" />
             </div>
          </div>
       </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 8: QUALITY COMMITMENT
   ========================================== */
const QualityCommitment = () => {
  return (
    <section id="quality" className="py-20 bg-bg-light border-t border-border-light">
       <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-clothcare-teal mx-auto mb-6 shadow-sm">
             <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl font-display font-bold text-clothcare-navy mb-6">Our Quality Promise</h2>
          <p className="text-text-muted text-lg mb-10">
             We are so confident in our process that we offer a 100% money-back guarantee. If you aren't thrilled with the crispness of your shirt or the fluffiness of your towel, we will re-clean it for free. No questions asked.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Badge className="bg-white border border-border-light text-text-muted py-2 px-4">ISO 9001 Certified</Badge>
             <Badge className="bg-white border border-border-light text-text-muted py-2 px-4">Woolmark Approved</Badge>
             <Badge className="bg-white border border-border-light text-text-muted py-2 px-4">Hypoallergenic Certified</Badge>
          </div>
       </div>
    </section>
  );
};

/* ==========================================
   UTILITY COMPONENTS
   ========================================== */
const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${className}`}>
    {children}
  </span>
);

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
const WhoWeArePage = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen text-text-primary selection:bg-clothcare-tealSoft selection:text-clothcare-navy">
       <AboutHero />
       {/* Sticky Nav is positioned absolutely in Hero, or can be placed here relative */}
       <div className="relative">
          <SectionNav />
          <MissionVision />
          <Difference />
          <ProcessFlow />
          <TechOps />
          <TeamCulture />
          <QualityCommitment />
       </div>
    </div>
  );
};

export default WhoWeArePage;