'use client';
import React from 'react';
import AboutHero from '@/components/about_page/AboutHero';
import Manifesto from '@/components/about_page/Manifesto';
import FoundersVision from '@/components/about_page/FoundersVision';
import CoreValues from '@/components/about_page/CoreValues';
import GlobalImpact from '@/components/about_page/GlobalImpact';
import TheCraftsmen from '@/components/about_page/TheCraftsmen';
import Timeline from '@/components/about_page/Timeline';
import JoinMovement from '@/components/about_page/JoinMovement';

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
export default function WhoWeArePage() {
  return (
    <div className="font-sans antialiased bg-[#050505] selection:bg-clothcare-primary/20 selection:text-text-primary">
      <AboutHero />
      <Manifesto />
      <FoundersVision />
      <CoreValues />
      <GlobalImpact />
      <TheCraftsmen />
      <Timeline />
      <JoinMovement />
    </div>
  );
}