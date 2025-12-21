'use client'
import React, { useEffect, useState } from 'react';
import {
    TrendingUp, Building2, Smartphone, Users,
    ArrowRight, CheckCircle2, Download, DollarSign,
    PieChart, MapPin, Briefcase, ChevronRight, Zap, Activity, MousePointer2
} from 'lucide-react';

/* ==========================================
   COMPONENT: HERO (The "Investment" Look)
   ========================================== */
const FranchiseHero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05111F] pt-20">

            {/* 1. BACKGROUND: DEEP SPACE MESH & GRID */}
            <div className="absolute inset-0 z-0">
                {/* Perspective Grid Floor */}
                <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[50vh] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] [transform:perspective(500px)_rotateX(60deg)] opacity-30"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-clothcare-teal/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

                {/* Spotlight Center */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05111F] via-transparent to-[#05111F]/50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* 2. LEFT SIDE: AUTHORITATIVE COPY */}
                <div className={`transition-all duration-1000 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                        Scale with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-clothcare-teal via-cyan-400 to-blue-500">
                            Intelligent Laundry.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-lg leading-relaxed mb-10 font-light border-l-2 border-clothcare-teal/30 pl-6">
                        Don't just buy a shop. Invest in a <strong>vertically integrated tech stack</strong>. We provide the robots, the customers, and the playbook.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="px-8 py-4 bg-clothcare-teal hover:bg-clothcare-tealDark text-white rounded-xl font-bold transition-all shadow-[0_0_40px_-10px_rgba(15,185,177,0.5)] hover:shadow-[0_0_60px_-10px_rgba(15,185,177,0.6)] flex items-center justify-center gap-3 group">
                            Start Application <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3">
                            <Download size={18} /> Financial Model
                        </button>
                    </div>

                    {/* Social Proof / Stats */}
                    <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                        <div>
                            <p className="text-3xl font-display font-bold text-white">45+</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider">Live Hubs</p>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div>
                            <p className="text-3xl font-display font-bold text-white">₹12Cr</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider">Network Rev</p>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05111F] bg-slate-700">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full rounded-full grayscale opacity-70" alt="Partner" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 ml-2">Join elite operators</p>
                        </div>
                    </div>
                </div>

                {/* 3. RIGHT SIDE: THE "TECH STACK" VISUALIZATION 
             This simulates a 3D view of the Franchise Dashboard 
        */}
                <div className={`relative h-[600px] w-full hidden lg:block transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Floating Element 1: The Main Dashboard (Tilted) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0A1A2F]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 z-10 [transform:perspective(1000px)_rotateY(-15deg)_rotateX(5deg)] transition-transform hover:[transform:perspective(1000px)_rotateY(-5deg)_rotateX(0deg)] duration-500 group">

                        {/* Fake UI Header */}
                        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-xs font-mono text-slate-500">franchise.qlothcare.com</div>
                        </div>

                        {/* Fake UI Content */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <p className="text-[10px] text-slate-400 uppercase mb-1">Total Revenue</p>
                                <p className="text-xl font-bold text-white">₹24.5L</p>
                                <div className="text-[10px] text-green-400 flex items-center gap-1 mt-1"><TrendingUp size={10} /> +12% this month</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <p className="text-[10px] text-slate-400 uppercase mb-1">Active Orders</p>
                                <p className="text-xl font-bold text-white">142</p>
                                <div className="text-[10px] text-clothcare-teal mt-1">Processing now</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                <p className="text-[10px] text-slate-400 uppercase mb-1">Cust. Rating</p>
                                <p className="text-xl font-bold text-white">4.9/5</p>
                                <div className="flex gap-0.5 mt-1 text-yellow-500"><Zap size={10} fill="currentColor" /></div>
                            </div>
                        </div>

                        {/* Chart Mockup */}
                        <div className="h-32 w-full bg-gradient-to-t from-clothcare-teal/20 to-transparent rounded-lg border border-clothcare-teal/10 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between px-2 pb-0">
                                {[40, 65, 45, 70, 50, 80, 60, 90, 75, 100].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-full mx-1 bg-clothcare-teal/50 rounded-t-sm hover:bg-clothcare-teal transition-colors"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 2: Location Map (Bottom Left) */}
                    <div className="absolute bottom-10 left-0 w-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite_1s] z-20">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-clothcare-teal flex items-center justify-center text-white">
                                <MapPin size={16} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white">Territory Lock</p>
                                <p className="text-[10px] text-slate-400">Patan, Gujarat</p>
                            </div>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-clothcare-teal"></div>
                        </div>
                        <p className="text-[10px] text-right text-slate-500 mt-1">High Demand</p>
                    </div>

                    {/* Floating Element 3: ROI Badge (Top Right) */}
                    <div className="absolute top-20 right-0 w-48 bg-gradient-to-br from-clothcare-teal to-blue-600 rounded-2xl p-4 shadow-[0_0_40px_rgba(15,185,177,0.3)] animate-[float_8s_ease-in-out_infinite] z-20 text-white">
                        <div className="flex justify-between items-start mb-2">
                            <Activity size={20} />
                            <span className="text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded">PRO</span>
                        </div>
                        <p className="text-3xl font-bold">14 Mo</p>
                        <p className="text-xs opacity-80">Avg. ROI Period</p>
                    </div>

                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest">Explore Model</span>
                <MousePointer2 size={16} />
            </div>

        </section>
    );
};

const StatItem = ({ label, value }) => (
    <div className="border-l border-white/10 pl-6">
        <p className="text-2xl lg:text-3xl font-display font-bold text-white mb-1">{value}</p>
        <p className="text-xs text-clothcare-teal uppercase tracking-wider font-bold">{label}</p>
    </div>
);

/* ==========================================
   COMPONENT: THE "WHY INVEST" BENTO GRID
   ========================================== */
const ValueProp = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-display font-bold text-clothcare-navy mb-4">A "Business-in-a-Box" Model</h2>
                        <p className="text-text-muted text-lg">We don't just sell you a brand name. We hand over a fully operational technology stack and supply chain.</p>
                    </div>
                    <div className="hidden md:block">
                        <button className="text-clothcare-navy font-bold flex items-center gap-2 hover:gap-4 transition-all">
                            View Success Stories <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Card 1: The App (Tall) */}
                    <div className="row-span-2 bg-clothcare-navy rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                        <img src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?q=80&w=2070&auto=format&fit=crop" alt="App Tech" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />

                        <div className="relative z-20 h-full flex flex-col justify-end">
                            <div className="w-12 h-12 bg-clothcare-teal rounded-xl flex items-center justify-center text-white mb-6">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Proprietary App Ecosystem</h3>
                            <p className="text-white/70">You get the driver app, customer app, and POS pre-configured. No tech headaches.</p>
                        </div>
                    </div>

                    {/* Card 2: Operations */}
                    <div className="bg-white rounded-3xl p-8 border border-border-light shadow-sm hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-bg-soft rounded-xl flex items-center justify-center text-clothcare-navy mb-6">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-clothcare-navy mb-2">Turnkey Operations</h3>
                        <p className="text-text-muted text-sm">We handle site selection, interior design, and machinery installation. You walk in on day one ready to earn.</p>
                    </div>

                    {/* Card 3: Marketing */}
                    <div className="bg-white rounded-3xl p-8 border border-border-light shadow-sm hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-bg-soft rounded-xl flex items-center justify-center text-clothcare-navy mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-clothcare-navy mb-2">Centralized Marketing</h3>
                        <p className="text-text-muted text-sm">We run national ads. You get local leads automatically assigned to your dashboard.</p>
                    </div>

                    {/* Card 4: Sustainability (Wide) */}
                    <div className="md:col-span-2 bg-clothcare-tealSoft rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-clothcare-teal/20">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-clothcare-navy mb-4">Future-Proof & Sustainable</h3>
                            <p className="text-clothcare-navy/70 mb-6">The government is cracking down on chemical solvents. Our water-based, eco-friendly tech is compliant for the next 20 years.</p>
                            <ul className="space-y-2">
                                {['Zero PERC Used', 'Solar Ready Setup', 'Water Recycling'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm font-bold text-clothcare-navy">
                                        <CheckCircle2 size={16} className="text-clothcare-teal" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm">
                            <PieChart size={64} className="text-clothcare-teal" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

/* ==========================================
   COMPONENT: INQUIRY FORM SECTION
   ========================================== */
const FranchiseForm = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        location: '', capital: '10-20L', timeline: 'immediate'
    });

    return (
        <section id="inquiry-form" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="bg-clothcare-navy rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                    {/* Left: Persuasion */}
                    <div className="lg:w-2/5 p-12 lg:p-16 relative bg-clothcare-navy flex flex-col justify-between">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-clothcare-teal/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">Let's build something great.</h2>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                We are selective about our partners. We are looking for operators who share our obsession with quality and technology.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-clothcare-teal font-bold">1</div>
                                    <div>
                                        <p className="font-bold">Submit Inquiry</p>
                                        <p className="text-xs text-white/50">Fill out this form</p>
                                    </div>
                                </div>
                                <div className="h-8 border-l border-white/10 ml-6"></div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 font-bold">2</div>
                                    <div>
                                        <p className="font-bold text-white/60">Discovery Call</p>
                                        <p className="text-xs text-white/40">30 min zoom with Founder</p>
                                    </div>
                                </div>
                                <div className="h-8 border-l border-white/10 ml-6"></div>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 font-bold">3</div>
                                    <div>
                                        <p className="font-bold text-white/60">Site Visit</p>
                                        <p className="text-xs text-white/40">Tour our flagship</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                            <p className="text-white/40 text-xs">Direct Franchise Line</p>
                            <p className="text-white font-display text-xl mt-1">+91 98765 00000</p>
                        </div>
                    </div>

                    {/* Right: The Form */}
                    <div className="lg:w-3/5 bg-white p-12 lg:p-16">
                        <h3 className="text-2xl font-bold text-clothcare-navy mb-8">Franchise Application</h3>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputGroup label="First Name" placeholder="Rahul" />
                                <InputGroup label="Last Name" placeholder="Sharma" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <InputGroup label="Email Address" type="email" placeholder="rahul@business.com" />
                                <InputGroup label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <InputGroup label="City / Location of Interest" placeholder="e.g. Ahmedabad, SG Highway" />
                                <div>
                                    <label className="block text-xs font-bold text-clothcare-navy uppercase tracking-wider mb-2">Liquid Capital Available</label>
                                    <div className="relative">
                                        <select className="w-full bg-bg-light border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clothcare-teal/50 transition-all text-clothcare-navy font-medium appearance-none">
                                            <option>₹10 Lakh - ₹20 Lakh</option>
                                            <option>₹20 Lakh - ₹50 Lakh</option>
                                            <option>₹50 Lakh+</option>
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-text-muted pointer-events-none" size={16} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-clothcare-navy uppercase tracking-wider mb-2">Tell us about your experience</label>
                                <textarea
                                    rows={3}
                                    placeholder="Do you have prior business experience? Why ClothCare?"
                                    className="w-full bg-bg-light border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clothcare-teal/50 transition-all text-clothcare-navy placeholder:text-text-muted/50 resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-clothcare-navy text-white font-bold py-4 rounded-xl shadow-clothcare hover:bg-clothcare-navySoft transition-all flex items-center justify-center gap-2 group">
                                Submit Application <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-center text-xs text-text-muted mt-4">
                                Protected by reCAPTCHA and our <a href="#" className="underline">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InputGroup = ({ label, type = "text", placeholder }) => (
    <div>
        <label className="block text-xs font-bold text-clothcare-navy uppercase tracking-wider mb-2">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-bg-light border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clothcare-teal/50 transition-all text-clothcare-navy placeholder:text-text-muted/50 font-medium"
        />
    </div>
);

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
const FranchisePage = () => {
    return (
        <div className="font-sans antialiased bg-white min-h-screen">
            <FranchiseHero />
            <ValueProp />
            <FranchiseForm />
        </div>
    );
};

export default FranchisePage;