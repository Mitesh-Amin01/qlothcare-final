import React from 'react';
import { CalendarDays, Shirt, Truck, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Schedule Your Pickup",
    description: "Select a convenient time slot via our app or website. We're available 7 days a week.",
    icon: <CalendarDays className="w-8 h-8 text-white" />,
    color: "from-clothcare-teal to-clothcare-tealDark",
    shadow: "shadow-clothcareSoft"
  },
  {
    id: 2,
    title: "Expert Care & Cleaning",
    description: "We inspect, treat stains, and wash your clothes using eco-friendly, premium detergents.",
    icon: <Shirt className="w-8 h-8 text-white" />,
    color: "from-clothcare-navy to-clothcare-navySoft",
    shadow: "shadow-clothcare"
  },
  {
    id: 3,
    title: "Fresh Delivery",
    description: "Your clothes are folded, packed crisp, and delivered back to your door within 24 hours.",
    icon: <Truck className="w-8 h-8 text-white" />,
    color: "from-clothcare-teal to-clothcare-tealDark",
    shadow: "shadow-clothcareSoft"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-bg-light overflow-hidden font-sans">
      
      {/* =========================
          BACKGROUND DECORATION
      ========================= */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-clothcare-border-soft to-transparent opacity-50 z-0 hidden lg:block" />
      
      {/* Soft Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-clothcare-tealSoft rounded-full blur-[100px] opacity-60 -z-10" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-clothcare-navy/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block bg-white border border-clothcare-teal/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
             <span className="text-clothcare-teal font-display font-semibold text-sm tracking-wide uppercase">Simple Process</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Laundry Day, <span className="text-transparent bg-clip-text bg-clothcare-primary-gradient">Done in 3 Steps.</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            We've streamlined the entire process so you can spend less time worrying about laundry and more time doing what you love.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              
              {/* Connector Arrow (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-6 xl:-right-10 z-0 text-clothcare-border-soft">
                  <ArrowRight className="w-8 h-8 opacity-40" />
                </div>
              )}

              {/* Glass Card */}
              <div className="h-full bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-clothcare relative z-10">
                
                {/* Floating "3D" Icon Bubble */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} ${step.shadow} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute top-8 right-8 text-6xl font-display font-bold text-clothcare-tealSoft opacity-50 select-none group-hover:text-clothcare-teal/10 transition-colors">
                  0{step.id}
                </div>

                <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                  {step.title}
                </h3>
                
                <p className="font-sans text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <p className="text-text-muted mb-6 font-medium">Ready to experience the difference?</p>
            <button className="bg-clothcare-navy text-white font-display font-semibold px-8 py-4 rounded-2xl shadow-xl hover:bg-clothcare-teal transition-all duration-300 hover:shadow-clothcareSoft">
              Start Your First Order
            </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;