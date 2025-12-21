import React from 'react';
import { Shirt, Sparkles, Footprints, Layers, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'laundry',
    title: "Premium Laundry",
    description: "Professional washing and drying with fabric-specific care for your everyday clothes.",
    icon: <Shirt className="w-6 h-6 text-white" />,
    features: ["Gentle fabric care", "Stain removal", "Soft & fresh results"],
    accent: "bg-clothcare-teal"
  },
  {
    id: 'dry-clean',
    title: "Dry Cleaning",
    description: "Specialized chemical cleaning for delicate fabrics that require extra attention.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    features: ["Delicate fabric care", "Odor removal", "Shape preservation"],
    accent: "bg-clothcare-navy"
  },
  {
    id: 'shoes',
    title: "Shoe Cleaning",
    description: "Expert cleaning and conditioning for all types of footwear to restore their original shine.",
    icon: <Footprints className="w-6 h-6 text-white" />,
    features: ["Leather conditioning", "Deodorizing", "Waterproofing"],
    accent: "bg-clothcare-teal"
  },
  {
    id: 'ironing',
    title: "Premium Ironing",
    description: "Professional pressing services for crisp, wrinkle-free clothes with perfect folding.",
    icon: <Layers className="w-6 h-6 text-white" />, // Layers represents folded clothes
    features: ["Professional pressing", "Crisp finishing", "Perfect folding"],
    accent: "bg-clothcare-navy"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-bg-light font-sans relative">
      
      {/* Background Pattern (Subtle grid for structure) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header: Left Aligned for Modern Feel */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6 border-b border-border-light pb-8">
          <div className="max-w-2xl">
            <span className="text-clothcare-teal font-display font-bold text-sm tracking-wider uppercase mb-2 block">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Comprehensive garment care <br />
              <span className="text-text-muted/60">tailored to your needs.</span>
            </h2>
          </div>
          <div className="hidden lg:block pb-2">
            <a href="/services" className="group flex items-center gap-2 font-display font-semibold text-clothcare-navy hover:text-clothcare-teal transition-colors">
              View Full Price List
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl p-8 border border-border-light hover:border-clothcare-teal/30 shadow-sm hover:shadow-clothcareSoft transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-xl ${service.accent} flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-clothcare-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-bg-soft mb-6 group-hover:bg-clothcare-teal/20 transition-colors"></div>

              {/* Feature List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-text-primary/80">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-clothcare-tealSoft flex items-center justify-center">
                      <Check className="w-3 h-3 text-clothcare-tealDark" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Mobile "View More" (Hidden on desktop as content is visible) */}
              <div className="lg:hidden mt-6 pt-4 border-t border-dashed border-border-light">
                 <span className="text-xs font-bold text-clothcare-teal uppercase tracking-wide flex items-center gap-1">
                    Book {service.title} <ArrowRight className="w-3 h-3" />
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar (High-End Touch) */}
        <div className="mt-16 bg-clothcare-navy rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-clothcare overflow-hidden relative">
          {/* Decorative Gradient Overlay */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-clothcare-navySoft to-transparent opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              Not sure what you need?
            </h3>
            <p className="text-clothcare-tealSoft/80 font-sans">
              Our experts inspect every item to determine the perfect care method.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
             <button className="bg-white text-clothcare-navy font-display font-bold py-3 px-6 rounded-xl hover:bg-clothcare-teal hover:text-white transition-colors shadow-lg">
                Get a Custom Quote
             </button>
             <button className="bg-transparent border border-white/20 text-white font-display font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                Contact Support
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;