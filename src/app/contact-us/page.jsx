'use client'
import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, 
  Send, ArrowRight, CheckCircle2, HelpCircle, 
  ChevronDown, Linkedin, Twitter, Instagram, Facebook,
  Sparkles, Zap, Globe
} from 'lucide-react';

/* ==========================================
   COMPONENT: HERO (MODERN / LIGHT / DYNAMIC)
   "The Glass & Grid Mesh Design"
   ========================================== */
const ContactHero = () => {
  // Simple parallax/float effect state
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setOffset({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden bg-white">
      
      {/* 1. BACKGROUND: Grid & Mesh Gradients */}
      <div className="absolute inset-0 z-0">
         {/* Subtle Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
         
         {/* Moving Gradient Blobs (Light Theme) */}
         <div className="absolute top-[-10%] right-[-10%] w-200 h-200 bg-clothcare-tealSoft/50 rounded-full blur-[100px] animate-pulse"></div>
         <div className="absolute top-[20%] left-[-10%] w-150 h-150 bg-blue-100/40 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          
          {/* 3. MAIN TYPOGRAPHY */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clothcare-teal/10 border border-clothcare-teal/20 text-clothcare-tealDark text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={12} className="animate-spin-slow" />
            We are here for you
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-display font-bold text-clothcare-navy leading-none mb-8 tracking-tight">
            Let’s start a <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-clothcare-teal to-blue-500">
              conversation.
              {/* Underline Doodle */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-clothcare-teal opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
            Have a question about your order or our eco-friendly process? 
            Our team is ready to help.
          </p>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT: MAIN CONTACT CARD (Form + Info)
   (KEPT EXACTLY AS REQUESTED)
   ========================================== */
const ContactMain = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'support', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <section className="relative -mt-32 pb-24 px-4 z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-3xl shadow-clothcare overflow-hidden flex flex-col lg:flex-row min-h-175">
          
          {/* LEFT SIDE: Contact Information */}
          <div className="lg:w-2/5 bg-bg-light border-r border-border-light p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
             
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-teal/10 rounded-bl-full pointer-events-none"></div>

             <div>
                <h3 className="text-2xl font-display font-bold text-clothcare-navy mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                   <InfoBlock 
                      icon={Mail} 
                      title="Email Us" 
                      content="support@qlothcare.com" 
                      sub="We typically reply within 2 hours." 
                      action="mailto:support@qlothcare.com"
                   />
                   <InfoBlock 
                      icon={Phone} 
                      title="Call Us" 
                      content="+91 98765 43210" 
                      sub="Mon-Sat from 8am to 8pm." 
                      action="tel:+919876543210"
                   />
                   <InfoBlock 
                      icon={MapPin} 
                      title="Headquarters" 
                      content="102, Silva Business Hub," 
                      sub="Patan, Gujarat, India - 384265" 
                   />
                </div>
             </div>

             {/* Bottom: Socials & Map */}
             <div className="mt-12">
                <p className="text-sm font-bold text-clothcare-navy mb-4">Follow us</p>
                <div className="flex gap-4 mb-8">
                   <SocialIcon icon={Instagram} />
                   <SocialIcon icon={Twitter} />
                   <SocialIcon icon={Facebook} />
                   <SocialIcon icon={Linkedin} />
                </div>

                <div className="w-full h-40 rounded-xl overflow-hidden relative group cursor-pointer border border-border-light">
                   <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                      alt="Map Preview" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                   />
                   <div className="absolute inset-0 bg-clothcare-navy/20 group-hover:bg-clothcare-navy/10 transition-colors"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-xs font-bold text-clothcare-navy shadow-lg flex items-center gap-2">
                         <MapPin size={14} className="text-clothcare-teal" /> View on Google Maps
                      </span>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="lg:w-3/5 p-8 lg:p-12 bg-white">
             {isSent ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fadeIn">
                   <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                      <CheckCircle2 size={40} />
                   </div>
                   <h3 className="text-3xl font-display font-bold text-clothcare-navy mb-2">Message Sent!</h3>
                   <p className="text-text-muted mb-8 max-w-sm">Thank you for reaching out. Our support team has received your message and will get back to you shortly.</p>
                   <button 
                      onClick={() => setIsSent(false)}
                      className="text-clothcare-teal font-bold hover:underline"
                   >
                      Send another message
                   </button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                   <h3 className="text-2xl font-display font-bold text-clothcare-navy mb-2">Send a Message</h3>
                   <p className="text-text-muted mb-8">Fill out the form below and we'll route it to the right expert.</p>

                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <InputGroup 
                        label="First Name" 
                        placeholder="e.g. Rahul" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                      <InputGroup 
                        label="Email Address" 
                        placeholder="rahul@example.com" 
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                   </div>

                   <div className="mb-6">
                      <label className="block text-xs font-bold text-clothcare-navy uppercase tracking-wider mb-2">Topic</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                         {['Support', 'Sales', 'Partnership', 'Other'].map((topic) => (
                            <button
                               key={topic}
                               type="button"
                               onClick={() => setFormState({...formState, subject: topic.toLowerCase()})}
                               className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${
                                  formState.subject === topic.toLowerCase()
                                  ? 'bg-clothcare-navy text-white border-clothcare-navy'
                                  : 'bg-white text-text-muted border-border-light hover:border-clothcare-teal'
                               }`}
                            >
                               {topic}
                            </button>
                         ))}
                      </div>
                   </div>

                   <div className="mb-8 grow">
                      <label className="block text-xs font-bold text-clothcare-navy uppercase tracking-wider mb-2">Message</label>
                      <textarea 
                         rows={5}
                         placeholder="How can we help you today?"
                         className="w-full bg-bg-light border border-border-light rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-clothcare-teal/50 focus:border-clothcare-teal transition-all resize-none text-clothcare-navy placeholder:text-text-muted/50"
                         required
                         value={formState.message}
                         onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                   </div>

                   <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-clothcare-primary-gradient text-white font-bold py-4 rounded-xl shadow-lg shadow-clothcare-teal/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                      {isSubmitting ? (
                         <span className="animate-pulse">Sending...</span>
                      ) : (
                         <>Send Message <Send size={18} /></>
                      )}
                   </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   COMPONENT: FAQ TEASER
   (KEPT EXACTLY AS REQUESTED)
   ========================================== */
const FAQTeaser = () => {
   return (
      <section className="pb-24 bg-white">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-display font-bold text-clothcare-navy mb-4">Before you write...</h2>
               <p className="text-text-muted">Check our most frequent questions. The answer might be right here.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <FAQCard title="Where is my order?" link="Track Order" />
               <FAQCard title="How do I change my pickup time?" link="Manage Booking" />
               <FAQCard title="What is the pricing for dry cleaning?" link="View Rate Card" />
               <FAQCard title="Do you service my area?" link="Check Zip Code" />
            </div>
         </div>
      </section>
   )
}

/* ==========================================
   HELPER COMPONENTS
   ========================================== */
const InfoBlock = ({ icon: Icon, title, content, sub, action }) => (
   <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-border-light flex items-center justify-center text-clothcare-teal shrink-0">
         <Icon size={20} />
      </div>
      <div>
         <h4 className="font-bold text-clothcare-navy text-sm">{title}</h4>
         {action ? (
            <a href={action} className="text-base text-text-primary hover:text-clothcare-teal font-medium transition-colors block mt-0.5">
               {content}
            </a>
         ) : (
            <p className="text-base text-text-primary font-medium mt-0.5">{content}</p>
         )}
         <p className="text-xs text-text-muted mt-1">{sub}</p>
      </div>
   </div>
);

const InputGroup = ({ label, type = "text", placeholder, value, onChange }) => (
   <div>
      <label className="block text-xs font-bold text-clothcare-navy uppercase tracking-wider mb-2">{label}</label>
      <input 
         type={type} 
         placeholder={placeholder}
         className="w-full bg-bg-light border border-border-light rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clothcare-teal/50 focus:border-clothcare-teal transition-all text-clothcare-navy placeholder:text-text-muted/50 font-medium"
         required
         value={value}
         onChange={onChange}
      />
   </div>
);

const SocialIcon = ({ icon: Icon }) => (
   <a href="#" className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-text-muted hover:bg-clothcare-teal hover:text-white hover:border-clothcare-teal transition-all duration-300">
      <Icon size={18} />
   </a>
);

const FAQCard = ({ title, link }) => (
   <div className="group bg-bg-light border border-border-light p-6 rounded-2xl flex items-center justify-between cursor-pointer hover:border-clothcare-teal/50 hover:bg-bg-soft transition-all">
      <span className="font-bold text-clothcare-navy">{title}</span>
      <span className="flex items-center gap-1 text-sm font-bold text-clothcare-teal group-hover:translate-x-1 transition-transform">
         {link} <ArrowRight size={14} />
      </span>
   </div>
)

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
const ContactPage = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen">
      <ContactHero />
      <ContactMain />
      <FAQTeaser />
    </div>
  );
};

export default ContactPage;