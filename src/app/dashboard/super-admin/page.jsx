'use client'
import React, { useState } from 'react';
import {
  LayoutDashboard, // For Overview
  Store,           // For Franchises
  FileInput,       // For Requests
  Wallet,          // For Revenue
  AlertTriangle,   // For Alerts
  Settings,        // For Settings
  LogOut,
  CheckCircle,
  XCircle,
  Menu,
  Bell
} from 'lucide-react';

// ==========================================
// 1. SUB-COMPONENTS ( The Pages )
// ==========================================

// 📌 PAGE: OVERVIEW (Account & System Status)
const OverviewPage = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-2xl font-bold text-clothcare-dark">Account & System Overview</h2>

    {/* Account Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { label: "Total Franchises", val: "12", color: "bg-white" },
        { label: "Total Branches", val: "48", color: "bg-white" },
        { label: "Total Managers", val: "65", color: "bg-white" },
        { label: "Total Staff", val: "320", color: "bg-white" },
      ].map((item, i) => (
        <div key={i} className={`${item.color} p-6 rounded-2xl border border-border-soft shadow-clothcareSoft`}>
          <p className="text-text-muted text-sm uppercase font-semibold">{item.label}</p>
          <h3 className="text-3xl font-bold text-clothcare-dark mt-2">{item.val}</h3>
        </div>
      ))}
    </div>

    {/* Big Business Summary */}
    <div className="bg-gradient-to-r from-clothcare-darker to-clothcare-dark p-8 rounded-2xl text-white shadow-clothcare">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Today's Business Summary</h3>
        <span className="bg-clothcare-primary/20 text-clothcare-primary px-3 py-1 rounded-full text-sm border border-clothcare-primary">Live Data</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-gray-400 text-sm mb-1">Orders Today</p>
          <p className="text-4xl font-bold">145</p>
        </div>
        <div className="border-l border-white/10">
          <p className="text-gray-400 text-sm mb-1">Revenue Today</p>
          <p className="text-4xl font-bold text-clothcare-primary">$4,250</p>
        </div>
        <div className="border-l border-white/10">
          <p className="text-gray-400 text-sm mb-1">Pending Actions</p>
          <p className="text-4xl font-bold text-status-warning">12</p>
        </div>
      </div>
    </div>
  </div>
);

// 📌 PAGE: REQUESTS (Approvals)
const RequestsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-clothcare-dark">Pending Approvals</h2>
      <div className="text-sm text-text-muted">4 New Requests</div>
    </div>

    <div className="bg-bg-white rounded-2xl border border-border-soft shadow-sm overflow-hidden">
      {[
        { name: "CleanCity Franchise", type: "New Franchise", date: "2 mins ago" },
        { name: "Downtown Branch", type: "New Branch Setup", date: "1 hour ago" },
        { name: "John Doe", type: "Manager Access", date: "3 hours ago" },
        { name: "Refund Order #9921", type: "Payment Issue", date: "Yesterday" },
      ].map((req, i) => (
        <div key={i} className="flex items-center justify-between p-6 border-b border-border-soft last:border-0 hover:bg-bg-soft transition">
          <div>
            <h4 className="font-bold text-clothcare-dark text-lg">{req.name}</h4>
            <p className="text-sm text-text-muted mt-1">{req.type} • <span className="text-clothcare-primary">{req.date}</span></p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-bg-light text-text-muted rounded-xl hover:bg-status-danger hover:text-white transition">
              <XCircle size={18} /> Reject
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-clothcare-primary text-white rounded-xl shadow-clothcareSoft hover:bg-clothcare-primaryDark transition">
              <CheckCircle size={18} /> Approve
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 📌 PAGE: REVENUE (Money)
const RevenuePage = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-2xl font-bold text-clothcare-dark">Financial Overview</h2>
    <div className="p-12 border-2 border-dashed border-border-soft rounded-2xl flex flex-col items-center justify-center text-center bg-bg-soft">
      <Wallet className="w-16 h-16 text-clothcare-primary mb-4" />
      <h3 className="text-xl font-bold text-clothcare-dark">Revenue Charts Component</h3>
      <p className="text-text-muted">Detailed financial graphs will load here.</p>
    </div>
  </div>
);

// 📌 PAGE: FRANCHISES (Management)
const FranchisePage = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-clothcare-dark">Franchise Management</h2>
      <button className="bg-clothcare-dark text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-clothcare-primary transition-all">+ Add New</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Simple list placeholders */}
      <div className="bg-white p-4 rounded-xl border border-border-soft shadow-sm">
        <h4 className="font-bold">Sparkle Cleaners</h4>
        <p className="text-sm text-text-muted">4 Branches • Active</p>
      </div>
      <div className="bg-white p-4 rounded-xl border border-border-soft shadow-sm">
        <h4 className="font-bold">FastWash Hub</h4>
        <p className="text-sm text-text-muted">2 Branches • Active</p>
      </div>
    </div>
  </div>
);

// ==========================================
// 2. MAIN LAYOUT COMPONENT
// ==========================================

const SuperAdminLayout = () => {
  // 🧠 State: Tracks which page is currently open
  const [activeTab, setActiveTab] = useState('overview');

  // Menu Configuration
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'requests', label: 'Requests', icon: FileInput, count: 4 },
    { id: 'franchises', label: 'Franchises', icon: Store },
    { id: 'revenue', label: 'Revenue', icon: Wallet },
    { id: 'alerts', label: 'System Alerts', icon: AlertTriangle, alert: true },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-bg-soft font-sans overflow-hidden">

      {/* 🔹 SIDEBAR (Fixed Left) */}
      <aside className="w-64 bg-clothcare-darker flex flex-col shadow-2xl z-20">

        {/* Brand Logo Area */}
        <div className="h-20 flex items-center px-8 border-b border-white/10">
          <div className="w-8 h-8 bg-clothcare-primary rounded-lg mr-3"></div>
          <span className="text-white font-bold text-xl tracking-wide">CLOTHCARE</span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === item.id
                ? 'bg-clothcare-primary text-white shadow-clothcareSoft'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>

              {/* Badges (Notification counts) */}
              {item.count && (
                <span className="bg-status-warning text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
              {item.alert && (
                <div className="w-2 h-2 bg-status-danger rounded-full"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition">
            <LogOut size={20} />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* 🔹 MAIN CONTENT AREA (Dynamic Right) */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Top Navbar */}
        <header className="h-20 bg-bg-white border-b border-border-soft flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4 text-text-primary">
            <Menu className="lg:hidden text-text-muted" /> {/* Mobile trigger placeholder */}
            <h1 className="text-xl font-bold capitalize text-clothcare-dark">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell className="text-text-muted hover:text-clothcare-primary transition" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-status-danger rounded-full"></span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-clothcare-dark">Super Admin</p>
                <p className="text-xs text-text-muted">Master Control</p>
              </div>
              <div className="w-10 h-10 bg-clothcare-primary/10 rounded-full border-2 border-white shadow-sm"></div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Renderer */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && <OverviewPage />}
            {activeTab === 'requests' && <RequestsPage />}
            {activeTab === 'franchises' && <FranchisePage />}
            {activeTab === 'revenue' && <RevenuePage />}
            {activeTab === 'alerts' && (
              <div className="bg-status-danger/10 p-6 rounded-2xl text-status-danger flex items-center gap-4">
                <AlertTriangle />
                <span className="font-bold">System Alert: Payment Gateway API is slow.</span>
              </div>
            )}
            {activeTab === 'settings' && <div className="text-text-muted">System Settings Panel</div>}
          </div>
        </div>

      </main>
    </div>
  );
};

export default SuperAdminLayout;