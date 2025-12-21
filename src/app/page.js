import AboutSection from "@/components/landing_page/AboutSection";
import HeroSection from "@/components/landing_page/HeroSection";
import HowItWorks from "@/components/landing_page/HowItWorks";
import PricingSection from "@/components/landing_page/PricingSection";
import ServicesSection from "@/components/landing_page/ServicesSection";
import TestimonialsSection from "@/components/landing_page/TestimonialsSection";
import WhyChooseUs from "@/components/landing_page/WhyChooseUs";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <HowItWorks/>
    <ServicesSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <PricingSection/>
    <TestimonialsSection/>
    </>
  );
}
