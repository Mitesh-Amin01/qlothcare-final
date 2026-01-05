'use client'
import React, { useState, useEffect } from 'react';
import {
    Shirt, Sparkles, Wind, Droplets, Zap,
    ShieldCheck, Smartphone, Layers, Search,
    CheckCircle2, ArrowRight, Clock, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ==========================================
   GLOBAL MOTION VARIANTS
   ========================================== */
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

/* ==========================================
   HELPER: BUBBLE BACKGROUND COMPONENT
   ========================================== */
const BubbleBackground = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const newBubbles = [...Array(6)].map((_, i) => ({
            id: i,
            width: Math.random() * 300 + 200,
            height: Math.random() * 300 + 200,
            startX: Math.random() * 100,
            startY: Math.random() * 100,
            moveX: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
            moveY: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
            duration: Math.random() * 20 + 25,
        }));
        setBubbles(newBubbles);
    }, []);

    if (bubbles.length === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full bg-clothcare-primary/5 blur-3xl"
                    initial={{
                        width: bubble.width,
                        height: bubble.height,
                        x: bubble.startX + '%',
                        y: bubble.startY + '%',
                        opacity: 0.2
                    }}
                    animate={{
                        x: bubble.moveX,
                        y: bubble.moveY,
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

/* ==========================================
   COMPONENT 1: SERVICES HERO
   ========================================== */
const ServicesHero = () => {
    return (
        <section className="relative bg-[#F8FAFC] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            <BubbleBackground />
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center lg:text-left"
                >

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-2/3">
                            <motion.h1
                                variants={revealVariants}
                                className="text-5xl lg:text-7xl font-display font-bold text-[#0F172A] leading-[0.95] mb-8"
                            >
                                Artisanal care <br />
                                <span className="italic font-light text-clothcare-primary">for every</span> <br />
                                Fiber.
                            </motion.h1>

                            <motion.p
                                variants={revealVariants}
                                className="text-xl text-[#64748B] leading-relaxed mb-10 font-medium"
                            >
                                From your daily t-shirt to a couture wedding gown, we apply precision technology and expert hand-finishing to restore your wardrobe to its original glory.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={revealVariants}
                            className="lg:w-1/3 flex justify-center"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-clothcare-primary/20 blur-3xl rounded-full scale-150 group-hover:bg-clothcare-primary/30 transition-all"></div>
                                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                    <img src="/landingservices/dryCleaning.jpg" alt="Cleaning excellence" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

/* ==========================================
   COMPONENT 2: SERVICE GRID
   ========================================== */
const ServiceGrid = () => {
    const services = [
        {
            title: 'Wash & Fold',
            desc: 'The weekly ritual, simplified. We sort by color and fabric, wash with eco-detergents, and return everything retail-folded.',
            icon: <Layers className="w-8 h-8" />,
            image: '/landingservices/fold.jpg',
            label: 'Most Popular'
        },
        {
            title: 'Dry Cleaning',
            desc: 'Eco-friendly solvents that are tough on stains but gentle on fibers. Ideal for suits, silks, and formal wear.',
            icon: <Sparkles className="w-8 h-8" />,
            image: '/landingservices/drycleaning.jpg',
            label: 'Expert Care'
        },
        {
            title: 'Pressing Only',
            desc: 'Perfectly crisp collars and knife-edge creases. Our specialized equipment restores the silhouette of your garments.',
            icon: <Wind className="w-8 h-8" />,
            image: '/landingservices/pressiron.jpeg'
        },
        {
            title: 'Wedding & Couture',
            desc: 'Museum-grade preservation and cleaning for your most cherished memories. Acid-free storage included.',
            icon: <ShieldCheck className="w-8 h-8" />,
            image: '/landingservices/stain.jpg', // Using as placeholder for couture
            label: 'Premium'
        },
        {
            title: 'Household Items',
            desc: 'Comforters, curtains, and linens treated to remove allergens and restore loftiness without the bulk of home machines.',
            icon: <Droplets className="w-8 h-8" />,
            image: '/landingservices/delivery.jpg' // Using as placeholder
        },
        {
            title: 'Commercial Laundry',
            desc: 'Reliable high-volume solutions for hotels, gyms, and spas. Custom delivery schedules to keep you running.',
            icon: <Zap className="w-8 h-8" />,
            image: '/landingabout/about.png' // Van/Fleet image
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-clothcare-primary font-bold uppercase tracking-[0.3em] text-[10px]">What we do</span>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mt-4">The Standard of Perfection.</h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={revealVariants}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-[360px] w-full"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-between p-7">
                                <div className="flex justify-between items-start">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-12 h-12 bg-clothcare-primaryDark rounded-xl flex items-center justify-center text-white shadow-lg"
                                    >
                                        {/* Restore icon size */}
                                        {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                                    </motion.div>

                                    {service.label && (
                                        <span className="px-3 py-1 bg-clothcare-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                            {service.label}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>

                                    <div className="flex items-center text-clothcare-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 -translate-x-4 duration-300">
                                        <span className="text-sm font-bold mr-2 uppercase tracking-widest">Learn More</span>
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

/* ==========================================
   COMPONENT 3: TECHNOLOGY BAR (Sensory)
   ========================================== */
const TechBar = () => {
    return (
        <section className="py-20 bg-[#0F172A] text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #E46F33 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-wrap justify-between items-center gap-12">
                    <div className="flex items-center gap-4">
                        <Zap className="text-clothcare-primary" size={40} />
                        <div>
                            <p className="text-2xl font-bold">Ozone-Infused</p>
                            <p className="text-white/50 text-xs">Purified Water Cycle</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Smartphone className="text-clothcare-primary" size={40} />
                        <div>
                            <p className="text-2xl font-bold">RFID Tagging</p>
                            <p className="text-white/50 text-xs">Zero-Loss Guarantee</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Wind className="text-clothcare-primary" size={40} />
                        <div>
                            <p className="text-2xl font-bold">Bio-Enzymes</p>
                            <p className="text-white/50 text-xs">Non-Toxic Cleaning</p>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-clothcare-primary text-clothcare-primary" />)}
                        <span className="ml-2 font-bold">4.9/5 Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ==========================================
   COMPONENT 4: SERVICE AREA
   ========================================== */
const ServiceArea = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-[#E5E7EB] flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-display font-bold text-[#0F172A] mb-8">Ready to reclaim your time?</h2>
                        <p className="text-xl text-[#64748B] mb-12">Check if we serve your neighborhood. We currently provide free door-to-door pickup in 48 major metropolitan zones.</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-grow">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={20} />
                                <input
                                    type="text"
                                    placeholder="Enter Zip Code"
                                    className="w-full pl-14 pr-6 py-5 bg-[#F1F5F9] border-none rounded-2xl focus:ring-2 focus:ring-clothcare-primary outline-none font-bold placeholder:text-[#94A3B8]"
                                />
                            </div>
                            <button className="px-10 py-5 bg-[#0F172A] text-white rounded-2xl font-bold hover:bg-clothcare-primary transition-all">
                                Check Coverage
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <div className="flex items-center gap-2 text-sm font-bold text-[#64748B]">
                                <Clock size={16} className="text-clothcare-primary" />
                                Next Window: Today, 5:00 PM
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <div className="flex items-center gap-2 text-sm font-bold text-[#64748B]">
                                <Droplets size={16} className="text-clothcare-primary" />
                                Spots available
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img src="/landingabout/about.png" alt="Delivery van" className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#0F172A] to-transparent">
                                <p className="text-white text-lg font-bold">Complimentary Delivery</p>
                                <p className="text-white/60 text-sm">For all Member & Express orders over $30.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
export default function ServicesPage() {
    return (
        <div className="font-sans antialiased bg-white min-h-screen selection:bg-clothcare-primary/20 selection:text-[#0F172A]">
            <ServicesHero />
            <ServiceGrid />
            <TechBar />
            <ServiceArea />

            {/* Final CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-[#0F172A] rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clothcare-primary/10 rounded-full blur-[120px]"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Ready for a fresh start?</h2>
                            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">Join 10,000+ happy customers who have outsourced their laundry to experts.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <button className="px-12 py-6 bg-clothcare-primary text-white rounded-2xl font-bold text-lg hover:bg-clothcare-primaryDark transition-all shadow-xl shadow-clothcare-primary/20">
                                    Schedule My First Pickup
                                </button>
                                <button className="px-12 py-6 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                                    View Full Price List
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
