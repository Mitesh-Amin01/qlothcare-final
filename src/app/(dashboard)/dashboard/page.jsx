'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard_page/Sidebar';
import Header from '@/components/dashboard_page/Header';
import OverviewTab from '@/components/dashboard_page/OverviewTab';
import OrdersTab from '@/components/dashboard_page/OrdersTab';
import HistoryTab from '@/components/dashboard_page/HistoryTab';
import SettingsTab from '@/components/dashboard_page/SettingsTab';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab />;
            case 'orders':
                return <OrdersTab />;
            case 'history':
                return <HistoryTab />;
            case 'settings':
                return <SettingsTab />;
            default:
                return <OverviewTab />;
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F9FC] flex font-sans">
            {/* Sidebar (Next-Era Premium Design) */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Topbar */}
                <Header />

                {/* Dynamic Content Switching */}
                {renderContent()}
            </main>
        </div>
    );
};

export default DashboardPage;
