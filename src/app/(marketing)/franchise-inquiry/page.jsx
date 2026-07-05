'use client';

import React, { Suspense } from 'react';
import FranchiseHero from '@/components/franchise_page/FranchiseHero';
import FranchisePartners from '@/components/franchise_page/FranchisePartners';
import FranchiseMetrics from '@/components/franchise_page/FranchiseMetrics';
import FranchiseOpportunity from '@/components/franchise_page/FranchiseOpportunity';
import FranchiseModels from '@/components/franchise_page/FranchiseModels';
import FranchiseTech from '@/components/franchise_page/FranchiseTech';
import FranchiseSupport from '@/components/franchise_page/FranchiseSupport';
import FranchiseTestimonials from '@/components/franchise_page/FranchiseTestimonials';
import FranchiseFAQ from '@/components/franchise_page/FranchiseFAQ';
import FranchiseApplication from '@/components/franchise_page/FranchiseApplication';

export default function FranchisePage() {
  return (
    <div className="font-sans antialiased bg-[#050505] min-h-screen selection:bg-clothcare-primary selection:text-text-primary">
      <FranchiseHero />
      <Suspense fallback={null}>
        <FranchiseApplication />
      </Suspense>
      <FranchisePartners />
      <FranchiseMetrics />
      <FranchiseOpportunity />
      {/* <FranchiseModels /> */}
      <FranchiseTech />
      <FranchiseSupport />
      <FranchiseTestimonials />
      <FranchiseFAQ />
      
    </div>
  );
}