import React from 'react';
import {
   Smartphone, MapPin, Search, QrCode,
   CheckCircle2, Package, Truck, CreditCard,
   ArrowRight, ShieldCheck, Clock, Zap
} from 'lucide-react';

/* ==========================================
   COMPONENT: UI MOCKUPS (The "Visuals")
   These simulate your actual App Interface to look premium.
   ========================================== */
const AppMockupBooking = () => (
   <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-sm mx-auto transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
      <div className="flex justify-between items-center mb-6">
         <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
         </div>
         <span className="text-xs font-bold text-gray-400 uppercase">Booking Flow</span>
      </div>
      <div className="space-y-4">
         <div className="bg-clothcare-primary/10 p-4 rounded-xl flex items-center gap-4 border border-clothcare-primary">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-clothcare-primary font-bold">1</div>
            <div>
               <p className="font-bold text-[#0F172A] text-sm">Select Service</p>
               <p className="text-xs text-text-muted">Wash & Fold (12lbs)</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-clothcare-primary ml-auto" />
         </div>
         <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 font-bold">2</div>
            <div>
               <p className="font-bold text-gray-600 text-sm">Pickup Slot</p>
               <p className="text-xs text-gray-400">Tomorrow, 9:00 AM</p>
            </div>
         </div>
         <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-clothcare-primary"></div>
         </div>
      </div>
   </div>
);

const AppMockupProcessing = () => (
   <div className="bg-[#0F172A] p-6 rounded-3xl shadow-2xl border border-white/10 max-w-sm mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary rounded-full blur-[50px] opacity-20"></div>
      <div className="relative z-10">
         <div className="flex items-center gap-3 mb-6">
            <QrCode className="text-white w-6 h-6" />
            <span className="text-white font-bold tracking-wide">Item #892-A</span>
         </div>
         <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-400 border-b border-white/10 pb-2">
               <span>Stain Detect</span>
               <span className="text-green-400 font-bold">Pass</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400 border-b border-white/10 pb-2">
               <span>Fabric ID</span>
               <span className="text-white font-bold">Silk/Wool</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400 pb-2">
               <span>Detergent</span>
               <span className="text-clothcare-primary font-bold">Eco-Solv™</span>
            </div>
         </div>
         <div className="mt-6 bg-white/10 p-3 rounded-lg text-center">
            <p className="text-xs text-white/50 uppercase tracking-wider">Current Stage</p>
            <p className="text-lg font-bold text-white animate-pulse">Hydro-Cleaning</p>
         </div>
      </div>
   </div>
);

/* ==========================================
   PART 1: THE "USEFUL" HERO
   Split screen: Emotional Headline vs Functional Widget.
   ========================================== */
const NewHero = () => {
   return (
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FAFAFA] overflow-hidden">

         {/* Dynamic Background */}
         <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-gray-100 to-transparent z-0"></div>
         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-clothcare-primary/50 to-transparent"></div>

         <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">

               {/* Left: Text */}
               <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm">
                     <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
                     <span className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">System Operational</span>
                  </div>

                  <h1 className="font-display text-5xl lg:text-7xl font-bold text-[#0F172A] mb-6 leading-[1.1]">
                     The Lifecycle of <br />
                     <span className="text-clothcare-primary">Perfectly Clean.</span>
                  </h1>

                  <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-lg">
                     We've turned a chore into a science. Explore the 8-step logistics chain that processes 10,000+ items daily with zero errors.
                  </p>

                  <div className="flex flex-wrap gap-4">
                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <ShieldCheck className="text-clothcare-primary w-5 h-5" />
                        <span className="text-sm font-bold text-[#0F172A]">Insured</span>
                     </div>
                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <Clock className="text-clothcare-primary w-5 h-5" />
                        <span className="text-sm font-bold text-[#0F172A]">24h Turnaround</span>
                     </div>
                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                        <Zap className="text-clothcare-primary w-5 h-5" />
                        <span className="text-sm font-bold text-[#0F172A]">Eco-Powered</span>
                     </div>
                  </div>
               </div>

               {/* Right: Functional Widget (Order Tracker Simulator) */}
               <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-3xl shadow-clothcare p-8 border border-gray-100 max-w-md mx-auto relative">
                     {/* Decorative Blur */}
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-clothcare-primary/20 rounded-full blur-3xl -z-10"></div>

                     <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-2">Track an Order</h3>
                     <p className="text-sm text-text-muted mb-6">See the process in real-time. Try entering <span className="font-mono bg-gray-100 px-1 rounded">DEMO-123</span></p>

                     <div className="space-y-4">
                        <div className="relative">
                           <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                           <input
                              type="text"
                              placeholder="Order ID / Phone Number"
                              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-clothcare-primary focus:ring-2 focus:ring-clothcare-primary/20 transition-all font-mono text-sm"
                           />
                        </div>
                        <button className="w-full bg-[#0F172A] text-white font-bold py-4 rounded-xl hover:bg-clothcare-primary transition-all shadow-lg flex items-center justify-center gap-2">
                           Start Tracking
                        </button>
                     </div>

                     <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                        <span>Recent: #ORD-9921 (Delivered)</span>
                        <a href="#" className="text-clothcare-primary font-bold hover:underline">View History</a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

/* ==========================================
   PART 2: THE 4-PHASE GRID (The "Meat")
   grouping steps into logical, high-design cards.
   ========================================== */
const ProcessGrid = () => {
   return (
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 lg:px-12">

            {/* PHASE 1: INITIATION */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
               <div className="order-2 lg:order-1">
                  <span className="text-clothcare-primary font-bold uppercase tracking-widest text-sm mb-2 block">Phase 01</span>
                  <h2 className="font-display text-4xl font-bold text-[#0F172A] mb-6">Digital Initiation</h2>

                  <div className="space-y-8 relative">
                     {/* Connecting Line */}
                     <div className="absolute left-6 top-8 bottom-0 w-px bg-gray-200"></div>

                     {/* Step 1 */}
                     <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-clothcare-primary rounded-full flex items-center justify-center font-bold text-clothcare-primary z-10 shadow-sm">1</div>
                        <h3 className="text-xl font-bold text-[#0F172A] mb-2">Service Booking</h3>
                        <p className="text-text-muted leading-relaxed">
                           User selects service type (Wash/Dry Clean) and specific garment preferences via the App.
                        </p>
                     </div>

                     {/* Step 2 */}
                     <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500 z-10">2</div>
                        <h3 className="text-xl font-bold text-[#0F172A] mb-2">Smart Scheduling</h3>
                        <p className="text-text-muted leading-relaxed">
                           Our algorithm matches your pickup window with the nearest available driver to minimize carbon footprint.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="order-1 lg:order-2">
                  <AppMockupBooking />
               </div>
            </div>

            {/* PHASE 2: PROCESSING (Dark Mode Card for contrast) */}
            <div className="bg-[#0F172A] rounded-[3rem] p-8 lg:p-16 mb-32 relative overflow-hidden">
               {/* Abstract Lines */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10"
                  style={{ backgroundImage: 'linear-gradient(45deg, #E46F33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

               <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                  <div>
                     <AppMockupProcessing />
                  </div>
                  <div className="text-white">
                     <span className="text-clothcare-primary font-bold uppercase tracking-widest text-sm mb-2 block">Phase 02</span>
                     <h2 className="font-display text-4xl font-bold text-white mb-6">The Lab</h2>

                     <div className="grid gap-6">
                        {/* Step 3 */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                           <div className="flex items-center gap-3 mb-3">
                              <Search className="text-clothcare-primary" />
                              <h3 className="text-xl font-bold">Order Verification</h3>
                           </div>
                           <p className="text-white/60 text-sm">
                              Every item is photographed, tagged with a QR code, and inspected for pre-existing damage.
                           </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                           <div className="flex items-center gap-3 mb-3">
                              <Zap className="text-clothcare-primary" />
                              <h3 className="text-xl font-bold">Precision Washing</h3>
                           </div>
                           <p className="text-white/60 text-sm">
                              Fabrics are treated with custom pH-balanced solvents in computer-controlled cycles.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* PHASE 3: THE REFINEMENT */}
            <div className="mb-32">
               <div className="text-center mb-16">
                  <span className="text-clothcare-primary font-bold uppercase tracking-widest text-sm mb-2 block">Phase 03</span>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0F172A]">Artisanal Finishing</h2>
                  <p className="text-text-muted mt-4 max-w-2xl mx-auto">
                     Beyond cleaning, we restore. Our finishing process ensures every garment returns in a condition that exceeds "like-new".
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {/* Step 5: Quality Audit */}
                  <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                     <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={32} />
                     </div>
                     <div className="flex items-center gap-3 mb-4">
                        <span className="text-clothcare-primary font-bold font-mono">05</span>
                        <h3 className="text-2xl font-bold text-[#0F172A]">Quality Audit</h3>
                     </div>
                     <p className="text-text-muted leading-relaxed text-sm">
                        A dual-layer inspection. First, high-resolution cameras detect microscopic residues; second, a senior fabric specialist performs a final manual touch-test.
                     </p>
                  </div>

                  {/* Step 6: Sensory Infusion */}
                  <div className="group bg-[#0F172A] p-8 rounded-[2.5rem] shadow-clothcare text-white hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary/10 rounded-full blur-3xl"></div>
                     <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-clothcare-primary mb-8 group-hover:rotate-12 transition-transform">
                        <Zap size={32} />
                     </div>
                     <div className="flex items-center gap-3 mb-4 relative z-10">
                        <span className="text-clothcare-primary font-bold font-mono text-xl">06</span>
                        <h3 className="text-2xl font-bold">Steam & Scent</h3>
                     </div>
                     <p className="text-white/60 leading-relaxed text-sm relative z-10">
                        Clothes undergo an Ozone infusion treatment that neutralizes bacteria and odors, followed by a bespoke steam session to relax fibers and restore drape.
                     </p>
                  </div>

                  {/* Step 7: Vault Packaging */}
                  <div className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                     <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform">
                        <Package size={32} />
                     </div>
                     <div className="flex items-center gap-3 mb-4">
                        <span className="text-clothcare-primary font-bold font-mono">07</span>
                        <h3 className="text-2xl font-bold text-[#0F172A]">Bespoke Pack</h3>
                     </div>
                     <p className="text-text-muted leading-relaxed text-sm">
                        Items are meticulously folded with acid-free tissue or hung on contoured hangers. Vacuum sealing is available for seasonal storage protection.
                     </p>

                     {/* Mini Label Visual */}
                     <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-clothcare-primary text-white rounded-lg flex items-center justify-center text-[10px] font-bold">RFID</div>
                        <div>
                           <p className="text-[10px] font-bold text-[#0F172A] uppercase tracking-tighter">Ready for Dispatch</p>
                           <p className="text-[9px] text-text-muted">ID: #VAULT-Q92</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* PHASE 4: THE RETURN */}
            <div className="text-center mb-12">
               <span className="text-clothcare-primary font-bold uppercase tracking-widest text-sm mb-2 block">Phase 04</span>
               <h2 className="font-display text-3xl font-bold text-[#0F172A]">Delivery & Success</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {/* Step 08 */}
               <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-3xl group hover:border-clothcare-primary/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Truck size={24} />
                     </div>
                     <span className="text-clothcare-primary font-bold font-mono text-xl">08</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">Delivery Process</h3>
                  <p className="text-text-muted mb-6">
                     Real-time GPS tracking allows you to see exactly when our valet will arrive. Contactless drop-off available.
                  </p>
                  <div className="h-32 bg-gray-200 rounded-xl w-full relative overflow-hidden">
                     {/* Fake Map */}
                     <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F172A] text-white p-2 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2">
                        <MapPin size={12} /> Driver (2 min away)
                     </div>
                  </div>
               </div>

               {/* Step 09 */}
               <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-3xl group hover:border-clothcare-primary/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CreditCard size={24} />
                     </div>
                     <span className="text-clothcare-primary font-bold font-mono text-xl">09</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">Billing & Wallet</h3>
                  <p className="text-text-muted mb-6">
                     Payment is processed automatically via your secure wallet only after you confirm delivery satisfaction.
                  </p>
                  <div className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-clothcare-primary/10 flex items-center justify-center text-clothcare-primaryDark font-bold">$</div>
                        <div>
                           <p className="font-bold text-sm text-[#0F172A]">Invoice Paid</p>
                           <p className="text-xs text-text-muted">Via Apple Pay</p>
                        </div>
                     </div>
                     <CheckCircle2 className="text-status-success w-5 h-5" />
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

/* ==========================================
   PART 3: THE CALL TO ACTION (CTA)
   Professional, wide, and clear.
   ========================================== */
const ProfessionalCTA = () => {
   return (
      <section className="bg-[#0F172A] py-20 border-t border-white/10">
         <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-white font-display text-4xl lg:text-5xl font-bold mb-8">
               Experience the new standard.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="bg-clothcare-primary hover:bg-clothcare-primaryDark text-white font-display font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-clothcare-primary/20 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                  Schedule First Pickup <ArrowRight size={20} />
               </button>
               <button className="text-white hover:text-clothcare-primary transition-colors font-bold underline underline-offset-4">
                  View Pricing Plans
               </button>
            </div>
            <p className="text-white/40 text-sm mt-8">
               No commitment required. 100% Money-back guarantee.
            </p>
         </div>
      </section>
   );
};

/* ==========================================
   MAIN PAGE COMPONENT
   ========================================== */
const HowItWorksPage = () => {
   return (
      <div className="font-sans antialiased bg-white">
         <NewHero />
         <ProcessGrid />
         <ProfessionalCTA />
      </div>
   );
};

export default HowItWorksPage;