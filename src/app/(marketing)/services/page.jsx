'use client';
import React from 'react';
import CinematicHero from '@/components/service_page/CinematicHero';
import CoreProtocols from '@/components/service_page/CoreProtocols';
import TechnologyStack from '@/components/service_page/TechnologyStack';
import ArchiveVault from '@/components/service_page/ArchiveVault';
import ServiceDeepDive from '@/components/service_page/ServiceDeepDive';
import QualityProcess from '@/components/service_page/QualityProcess';
import LogisticsMap from '@/components/service_page/LogisticsMap';

/* ==========================================
   MAIN PAGE LAYOUT
   ========================================== */
export default function ServicesPage() {
    return (
        <div className="font-sans antialiased text-text-dark bg-white selection:bg-clothcare-primary/20 selection:text-black">
            <CinematicHero />
            <CoreProtocols />
            <TechnologyStack />
            <QualityProcess />
            <ArchiveVault />
            <ServiceDeepDive />
            <LogisticsMap />
        </div>
    );
}
