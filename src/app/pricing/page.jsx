'use client'
import React, { useState, useMemo } from 'react';
import { 
  Check, Search, Sparkles, Crown, Zap, 
  ShieldCheck, Calculator, Clock, Truck, Star,
  Info, ChevronDown, Heart
} from 'lucide-react';

/* ==========================================
   DATA & CONFIGURATION
   ========================================== */
const PLAN_CONFIG = {
  GUEST: {
    name: "Guest",
    washFold: 2.50,
    delivery: 9.99,
  },
  MEMBER: {
    name: "Qlothcare+",
    washFold: 1.75, 
    delivery: 0,
  }
};

const RATE_CARD_DATA = [
  { category: 'dryclean', item: "Suit (2 Piece)", price: 14.50, popular: true },
  { category: 'dryclean', item: "Dress (Regular)", price: 12.00, popular: true },
  { category: 'dryclean', item: "Blouse / Shirt", price: 6.50, popular: true },
  { category: 'dryclean', item: "Trousers / Pants", price: 6.50, popular: true },
  { category: 'dryclean', item: "Winter Coat", price: 18.00, popular: false },
  
  { category: 'laundry', item: "Men's Dress Shirt", price: 3.50, popular: true },
  { category: 'laundry', item: "Polo Shirt", price: 4.00, popular: false },
  
  { category: 'household', item: "Comforter (Queen)", price: 35.00, popular: true },
  { category: 'household', item: "Sheet Set", price: 15.00, popular: false },
];

/* ==========================================
   SUB-COMPONENT: BADGES & UI ELEMENTS
   ========================================== */
const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${className}`}>
    {children}
  </span>
);

/* ==========================================
   COMPONENT 1: HERO (LIGHT THEME - BRANDED)
   ========================================== */
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-light">
      {/* Background Decor - ClothCare Brand Colors */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-clothcare-teal/30 to-transparent"></div>
      
      {/* Soft Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-clothcare-tealSoft rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0FB9B1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.1 }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Badge className="bg-white border border-clothcare-teal/20 text-clothcare-teal shadow-clothcareSoft mb-8">
          <Sparkles size={12} className="mr-2 fill-current" />
          The Modern Standard for Laundry
        </Badge>
        
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-clothcare-navy mb-6 font-display">
          Premium care.<br />
          <span className="text-transparent bg-clip-text bg-clothcare-primary-gradient">
            Transparent pricing.
          </span>
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Reclaim 4+ hours every week. Whether you need a one-time refresh or a recurring subscription, we've designed a plan that fits your lifestyle.
        </p>

        {/* Hero Stats */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-12 text-sm font-semibold text-text-muted">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-clothcare-soft border-2 border-white flex items-center justify-center text-[10px] font-bold text-clothcare-navy">U{i}</div>
              ))}
            </div>
            <span>Trusted by 10,000+ Locals</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-border-light"></div>
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <span className="text-clothcare-navy">4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 2: INTERACTIVE SAVINGS CALCULATOR
   ========================================== */
const SavingsCalculator = () => {
  const [pounds, setPounds] = useState(25);
  const [shirts, setShirts] = useState(5);
  
  const guestCost = (pounds * PLAN_CONFIG.GUEST.washFold) + (shirts * 3.50) + PLAN_CONFIG.GUEST.delivery;
  const memberCost = (pounds * PLAN_CONFIG.MEMBER.washFold) + (shirts * (3.50 * 0.8)) + PLAN_CONFIG.MEMBER.delivery;
  const savings = guestCost - memberCost;

  return (
    <section className="py-12 -mt-10 relative z-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-bg-white rounded-3xl shadow-clothcare border border-border-light overflow-hidden flex flex-col md:flex-row">
          
          {/* Controls */}
          <div className="p-8 md:p-10 w-full md:w-1/2 bg-white">
            <div className="flex items-center gap-2 mb-6 text-clothcare-teal">
              <Calculator size={20} />
              <span className="font-bold text-sm uppercase tracking-wider">Price Estimator</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-clothcare-navy mb-2">Estimate your load</h3>
            <p className="text-text-muted mb-8 text-sm">Drag the sliders to simulate a typical order.</p>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-clothcare-navy">Wash & Fold</label>
                  <span className="font-mono text-clothcare-teal bg-clothcare-tealSoft px-2 py-1 rounded">{pounds} lbs</span>
                </div>
                <input 
                  type="range" min="0" max="60" step="5" value={pounds} onChange={(e) => setPounds(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-clothcare-teal"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-semibold text-clothcare-navy">Laundered Shirts</label>
                  <span className="font-mono text-clothcare-teal bg-clothcare-tealSoft px-2 py-1 rounded">{shirts} items</span>
                </div>
                <input 
                  type="range" min="0" max="20" step="1" value={shirts} onChange={(e) => setShirts(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-clothcare-teal"
                />
              </div>
            </div>
          </div>

          {/* Results (Dark Navy Brand Side) */}
          <div className="w-full md:w-1/2 bg-clothcare-navy p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-clothcare-teal rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10">
                <div className="flex justify-between items-end mb-6 pb-6 border-b border-white/10">
                  <div className="text-right">
                    <p className="text-white/60 text-sm mb-1">Guest Price</p>
                    <p className="text-2xl font-bold text-white/40 line-through decoration-status-danger decoration-2">${guestCost.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                     <p className="text-clothcare-teal text-sm mb-1 font-bold">Member Price</p>
                     <p className="text-4xl font-bold text-white">${memberCost.toFixed(2)}</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
                   <p className="text-clothcare-tealSoft text-xs uppercase tracking-widest font-bold mb-1">Estimated Savings</p>
                   <p className="text-3xl font-bold text-white">${savings.toFixed(2)} <span className="text-lg font-normal opacity-80">/ order</span></p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 3: PRICING CARDS
   ========================================== */
const PricingPlans = () => {
  return (
    <section className="py-24 bg-white" id="plans">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-clothcare-navy mb-4">Choose how you clean.</h2>
          <p className="text-text-muted">Pay as you go for flexibility, or join for maximum automation and savings.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          
          {/* Card 1: Guest */}
          <div className="group relative bg-white rounded-3xl p-8 border border-border-light hover:border-clothcare-teal/30 transition-all duration-300 hover:shadow-clothcareSoft">
            <h3 className="text-xl font-display font-bold text-clothcare-navy mb-2">Pay As You Go</h3>
            <p className="text-text-muted text-sm mb-6 h-10">Perfect for the occasional deep clean or backup plan.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-clothcare-navy">$2.50</span>
              <span className="text-text-muted">/lb</span>
            </div>

            <button className="w-full py-3 rounded-xl border-2 border-border-light font-bold text-clothcare-navy hover:border-clothcare-navy transition-all mb-8">
              Order One-Time
            </button>

            <ul className="space-y-4 text-sm text-text-muted">
               <FeatureItem text="48h Standard Turnaround" />
               <FeatureItem text="$9.99 Delivery Fee (under $30)" />
               <FeatureItem text="Premium Scented Detergents" />
            </ul>
          </div>

          {/* Card 2: Member (Brand Navy) */}
          <div className="relative bg-clothcare-navy rounded-3xl p-1 shadow-clothcare lg:-mt-6 lg:mb-0 mb-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-clothcare-teal to-clothcare-navySoft rounded-3xl opacity-100 z-0"></div>
            
            <div className="relative bg-clothcare-navy rounded-[22px] p-8 h-full z-10 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Crown size={120} className="text-white rotate-12" />
               </div>

               <div className="flex justify-between items-start mb-4 relative z-10">
                 <div>
                   <span className="text-clothcare-teal font-bold text-xs uppercase tracking-wider mb-1 block">Best Value</span>
                   <h3 className="text-2xl font-display font-bold text-white">Qlothcare+</h3>
                 </div>
               </div>
               
               <p className="text-white/70 text-sm mb-6 h-10 relative z-10">
                 Complete automation for individuals & busy families.
               </p>

               <div className="mb-6 pb-6 border-b border-white/10 relative z-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">$1.75</span>
                    <span className="text-white/60">/lb</span>
                  </div>
                  <p className="text-clothcare-teal text-xs font-bold mt-2 flex items-center gap-1">
                    <Zap size={12} fill="currentColor" />
                    Save 30% on every order
                  </p>
               </div>

               <button className="w-full py-4 rounded-xl bg-clothcare-primary-gradient hover:opacity-90 text-white font-bold transition-all mb-8 shadow-lg shadow-clothcare-teal/20 relative z-10">
                  Start Free 14-Day Trial
               </button>

               <ul className="space-y-4 text-sm text-white/90 relative z-10">
                  <FeatureItem text="Free Next-Day RUSH Delivery" highlight />
                  <FeatureItem text="Zero Service/Delivery Fees" highlight />
                  <FeatureItem text="20% Off Dry Cleaning Items" highlight />
                  <FeatureItem text="Dedicated Account Manager" highlight />
               </ul>
            </div>
          </div>

          {/* Card 3: Family */}
          <div className="group relative bg-white rounded-3xl p-8 border border-border-light hover:border-clothcare-teal/30 transition-all duration-300 hover:shadow-clothcareSoft">
            <h3 className="text-xl font-display font-bold text-clothcare-navy mb-2">Family Bag</h3>
            <p className="text-text-muted text-sm mb-6 h-10">A fixed-price solution for heavy weekly loads.</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-clothcare-navy">$55</span>
              <span className="text-text-muted">/bag</span>
            </div>

            <button className="w-full py-3 rounded-xl border-2 border-border-light font-bold text-clothcare-navy hover:border-clothcare-navy transition-all mb-8">
              Request Bag
            </button>

            <ul className="space-y-4 text-sm text-text-muted">
               <FeatureItem text="Stuff-it-all Bag Provided (~30lbs)" />
               <FeatureItem text="Sheets & Towels Included" />
               <FeatureItem text="Separated by Color" />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 4: BENTO GRID VALUE PROPS
   ========================================== */
const ValueProps = () => {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-clothcare-navy">Why upgrade to Member?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-6 h-auto lg:h-[500px]">
          
          {/* Box 1: Speed (Teal Light) */}
          <div className="col-span-1 md:col-span-2 row-span-2 bg-white rounded-3xl p-8 border border-border-light shadow-sm flex flex-col justify-between overflow-hidden relative group">
             <div>
                <div className="w-12 h-12 bg-clothcare-tealSoft rounded-2xl flex items-center justify-center text-clothcare-tealDark mb-6">
                  <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-display font-bold text-clothcare-navy mb-2">24h Express Turnaround</h3>
                <p className="text-text-muted text-lg">Members skip the line. Get your clothes back the very next day at no extra charge (usually a $10 fee).</p>
             </div>
             <div className="mt-8">
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                   <div className="bg-clothcare-teal h-2 rounded-full w-[30%]"></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-text-muted uppercase">
                  <span>Drop Off</span>
                  <span className="text-clothcare-teal">Ready</span>
                </div>
             </div>
          </div>

          {/* Box 2: Quality (Navy Dark) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-clothcare-navy rounded-3xl p-8 shadow-clothcare flex flex-col justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-clothcare-navy-gradient opacity-50"></div>
             <div className="relative z-10">
               <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                 <ShieldCheck className="text-clothcare-teal" /> Damage Protection
               </h3>
               <p className="text-white/70 text-sm">Every member order is insured up to $1,000. If we lose a button, we sew it back on. Free.</p>
             </div>
          </div>

          {/* Box 3: Delivery */}
          <div className="col-span-1 md:col-span-1 bg-white rounded-3xl p-8 border border-border-light shadow-sm flex flex-col justify-center">
             <Truck className="text-clothcare-navy mb-4" size={32} />
             <h3 className="text-lg font-display font-bold text-clothcare-navy">Zero Fees</h3>
             <p className="text-text-muted text-sm mt-2">Save $9.99 on every trip.</p>
          </div>

          {/* Box 4: Eco */}
          <div className="col-span-1 md:col-span-1 bg-clothcare-tealSoft rounded-3xl p-8 border border-border-soft shadow-sm flex flex-col justify-center">
             <Heart className="text-clothcare-tealDark mb-4" size={32} fill="currentColor" />
             <h3 className="text-lg font-display font-bold text-clothcare-navy">Eco-Friendly</h3>
             <p className="text-clothcare-tealDark/80 text-sm mt-2">Hypoallergenic included free.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 5: SEARCHABLE RATE CARD
   ========================================== */
const RateCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredItems = useMemo(() => {
    return RATE_CARD_DATA.filter(item => {
      const matchesSearch = item.item.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' || item.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <Badge className="bg-bg-light text-text-muted mb-4">Transparency First</Badge>
          <h2 className="text-3xl font-display font-bold text-clothcare-navy">Itemized Price List</h2>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
           <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search for an item..." 
                className="w-full pl-12 pr-4 py-3 bg-bg-light border border-border-light rounded-xl focus:ring-2 focus:ring-clothcare-teal focus:outline-none transition-all placeholder:text-text-muted"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           
           <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['all', 'dryclean', 'laundry', 'household'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-3 rounded-xl font-bold text-sm capitalize whitespace-nowrap transition-all ${filter === cat ? 'bg-clothcare-navy text-white' : 'bg-white border border-border-light text-text-muted hover:bg-bg-light'}`}
                >
                  {cat === 'all' ? 'View All' : cat}
                </button>
              ))}
           </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-border-light rounded-2xl overflow-hidden shadow-sm">
           <div className="grid grid-cols-12 bg-bg-light p-4 border-b border-border-light text-xs font-bold text-text-muted uppercase tracking-wider">
              <div className="col-span-6 md:col-span-7">Item Name</div>
              <div className="col-span-3 md:col-span-2 text-right">Standard</div>
              <div className="col-span-3 md:col-span-3 text-right text-clothcare-teal">Member</div>
           </div>
           
           <div className="divide-y divide-border-light max-h-[500px] overflow-y-auto">
              {filteredItems.length > 0 ? (
                filteredItems.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-4 items-center hover:bg-bg-soft/30 transition-colors group">
                     <div className="col-span-6 md:col-span-7 font-medium text-clothcare-navy flex items-center gap-2">
                       {row.item}
                       {row.popular && <span className="hidden md:inline-block px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] rounded font-bold uppercase">Hot</span>}
                     </div>
                     <div className="col-span-3 md:col-span-2 text-right text-text-muted font-mono text-sm">${row.price.toFixed(2)}</div>
                     <div className="col-span-3 md:col-span-3 text-right flex justify-end">
                       <span className="font-mono text-sm font-bold text-clothcare-teal bg-clothcare-tealSoft px-2 py-1 rounded">
                         ${(row.price * 0.8).toFixed(2)}
                       </span>
                     </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-text-muted">
                   <p>No items found.</p>
                </div>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT 6: FAQ ACCORDION
   ========================================== */
const FAQSection = () => {
  const faqs = [
    { q: "How does the Pickup & Delivery work?", a: "Simply schedule a pickup in the app. Place your clothes in any bag for the first order (we'll return them in our custom bags)." },
    { q: "Can I cancel my membership anytime?", a: "Yes. There are no long-term contracts. You can pause or cancel your Qlothcare+ membership directly from the app settings." },
    { q: "What happens if clothes are damaged?", a: "It's extremely rare, but we are fully insured. If we damage an item, we reimburse up to the full value." },
  ];

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-6 max-w-2xl">
         <h2 className="text-3xl font-display font-bold text-clothcare-navy text-center mb-12">Common Questions</h2>
         <div className="space-y-4">
            {faqs.map((faq, i) => (
               <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
         </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-border-light overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-clothcare-navy text-lg">{question}</span>
        <span className={`p-2 rounded-full bg-bg-light text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-clothcare-teal' : ''}`}>
           <ChevronDown size={20} />
        </span>
      </button>
      <div className={`px-6 text-text-muted leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
         {answer}
      </div>
    </div>
  )
}

/* ==========================================
   HELPER COMPONENTS
   ========================================== */
const FeatureItem = ({ text, highlight = false }) => (
  <li className="flex items-start gap-3 text-sm">
    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${highlight ? 'bg-clothcare-teal text-white' : 'bg-bg-light text-text-muted'}`}>
      <Check size={12} strokeWidth={3} />
    </div>
    <span className={highlight ? 'text-white' : 'text-text-muted'}>{text}</span>
  </li>
);

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 inset-x-0 bg-clothcare-navy border-t border-white/10 p-4 lg:hidden z-50 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
     <div>
       <p className="text-xs text-white/60 uppercase font-bold">Start today</p>
       <p className="text-white font-bold">$1.75/lb <span className="text-clothcare-teal font-normal">with Member</span></p>
     </div>
     <button className="bg-clothcare-teal text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-clothcare-teal/20">
       Schedule Pickup
     </button>
  </div>
);

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
const PricingPage = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen text-text-primary selection:bg-clothcare-tealSoft selection:text-clothcare-navy pb-20 lg:pb-0">
       <HeroSection />
       <SavingsCalculator />
       <PricingPlans />
       <ValueProps />
       <RateCard />
       <FAQSection />
       <StickyMobileCTA />
    </div>
  );
};

export default PricingPage;