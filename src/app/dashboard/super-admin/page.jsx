'use client'
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Store,
  FileInput,
  Wallet,
  AlertTriangle,
  Settings,
  LogOut,
  CheckCircle,
  XCircle,
  Menu,
  Bell,
  WashingMachine,
  Truck,
  CalendarClock,
  BadgeCheck,
  Droplets,
  ClipboardList,
  ChevronRight
} from 'lucide-react';

// ==========================================
// 1. MOCK DATA FOR LAUNDRY OPS
// ==========================================

const kpiCards = [
  { label: 'Orders today', value: '145', trend: '+12% vs yesterday', icon: ClipboardList },
  { label: 'In wash', value: '38', trend: '11 machines running', icon: WashingMachine },
  { label: 'Ready for pickup', value: '57', trend: 'ETA avg 14m', icon: BadgeCheck },
  { label: 'Deliveries out', value: '22', trend: '5 routes active', icon: Truck },
  { label: 'Water usage', value: '1,980L', trend: 'Cost within limit', icon: Droplets },
  { label: 'Revenue today', value: '$12,430', trend: '+8% vs avg', icon: Wallet },
];

const machineStatus = [
  { name: 'Washer A3', load: 'Full Load', status: 'Running', progress: 68 },
  { name: 'Dryer B2', load: 'Mixed', status: 'Cooling', progress: 82 },
  { name: 'Washer C1', load: 'Express', status: 'Paused', progress: 45 },
  { name: 'Dryer A1', load: 'Hotel Linen', status: 'Running', progress: 23 },
];

const queueItems = [
  { id: '#9921', customer: 'Harper Hotels', service: 'Linen + Press', eta: '12:20 PM', status: 'In Wash' },
  { id: '#1044', customer: 'Local Pickup', service: 'Wash & Fold', eta: '12:45 PM', status: 'Drying' },
  { id: '#1058', customer: 'Airbnb Fleet', service: 'Express', eta: '01:10 PM', status: 'Sorting' },
  { id: '#1071', customer: 'Retail Partner', service: 'Press Only', eta: '01:30 PM', status: 'Ready' },
];

const pickupSchedule = [
  { route: 'North Loop', stops: 6, driver: 'A. Flores', window: '12:00 - 14:00' },
  { route: 'Downtown', stops: 4, driver: 'K. Singh', window: '13:00 - 15:00' },
  { route: 'Campus', stops: 3, driver: 'R. Lane', window: '14:00 - 16:00' },
];

const approvalRequests = [
  { name: 'CleanCity Franchise', type: 'New Franchise', date: '2 mins ago', priority: 'High' },
  { name: 'Downtown Branch', type: 'New Branch Setup', date: '1 hour ago', priority: 'Medium' },
  { name: 'John Doe', type: 'Manager Access', date: '3 hours ago', priority: 'Low' },
  { name: 'Refund Order #9921', type: 'Payment Issue', date: 'Yesterday', priority: 'High' },
];

const franchiseStats = [
  { label: 'Monthly revenue', value: '$82,410', delta: '+6.4% MoM' },
  { label: 'Orders this week', value: '1,248', delta: '+4.1% WoW' },
  { label: 'Avg. ticket', value: '$32.50', delta: '+$1.2 vs last week' },
  { label: 'Repeat rate', value: '58%', delta: '+3 pts' },
];

const franchiseOrders = [
  { id: '#F-1881', customer: 'CampusQuick', service: 'Wash & Fold', status: 'Ready', value: '$42', time: '11:40 AM' },
  { id: '#F-1878', customer: 'Harper Hotels', service: 'Linen + Press', status: 'In Wash', value: '$180', time: '11:25 AM' },
  { id: '#F-1875', customer: 'Retail Partner', service: 'Press Only', status: 'Drying', value: '$68', time: '11:05 AM' },
  { id: '#F-1871', customer: 'Downtown Pickup', service: 'Express', status: 'Dispatched', value: '$54', time: '10:45 AM' },
];

// ==========================================
// 2. SUB-PAGES
// ==========================================

const OverviewPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-gradient-to-r from-clothcare-dark to-clothcare-primary text-white rounded-2xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between shadow-lg">
      <div>
        <p className="text-sm uppercase tracking-wider text-white/70">Laundry Control Center</p>
        <h2 className="text-2xl font-bold mt-1">Super Admin Dashboard</h2>
        <p className="text-white/80 mt-1">Track plant load, routes, and revenue in real time.</p>
      </div>
      <div className="mt-4 lg:mt-0 flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
        <CalendarClock className="text-white" size={22} />
        <div>
          <p className="text-sm text-white/70">Next pickup window</p>
          <p className="text-lg font-semibold">12:00 - 14:00 • North Loop</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {kpiCards.map((card, i) => (
        <div key={card.label} className="bg-white p-5 rounded-xl border border-border-soft shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-clothcare-primary/10 flex items-center justify-center text-clothcare-primary">
            <card.icon size={22} />
          </div>
          <div className="flex-1">
            <p className="text-sm text-text-muted">{card.label}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-clothcare-dark">{card.value}</p>
              <span className="text-xs text-clothcare-primary font-semibold bg-clothcare-primary/10 px-2 py-1 rounded-full">{card.trend}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 space-y-4">
        <div className="bg-white rounded-2xl border border-border-soft shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-clothcare-dark">Live Machines</h3>
              <p className="text-sm text-text-muted">Track washer and dryer utilization.</p>
            </div>
            <span className="text-xs bg-clothcare-primary/10 text-clothcare-primary px-3 py-1 rounded-full">11 machines active</span>
          </div>
          <div className="space-y-4">
            {machineStatus.map((machine) => (
              <div key={machine.name} className="flex items-center gap-4 p-4 rounded-xl border border-border-soft">
                <div className="w-12 h-12 rounded-lg bg-bg-soft flex items-center justify-center text-clothcare-primary">
                  <WashingMachine size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-clothcare-dark">{machine.name}</p>
                      <p className="text-sm text-text-muted">{machine.load}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-status-info/10 text-status-info">{machine.status}</span>
                  </div>
                  <div className="mt-3 h-2 bg-bg-soft rounded-full overflow-hidden">
                    <div className="h-full bg-clothcare-primary rounded-full" style={{ width: `${machine.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border-soft shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-clothcare-dark">Processing Queue</h3>
              <p className="text-sm text-text-muted">Highest priority batches first.</p>
            </div>
            <BadgeCheck className="text-clothcare-primary" size={18} />
          </div>
          <div className="divide-y divide-border-soft">
            {queueItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
                <div>
                  <p className="font-semibold text-clothcare-dark">{item.id} • {item.customer}</p>
                  <p className="text-sm text-text-muted">{item.service}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-bg-soft px-3 py-1 rounded-full text-text-muted">{item.eta}</span>
                  <span className="text-xs bg-status-warning/10 text-status-warning px-3 py-1 rounded-full">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-border-soft shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-clothcare-dark">Pickup & Delivery</h3>
            <Truck className="text-clothcare-primary" size={20} />
          </div>
          <div className="space-y-3">
            {pickupSchedule.map((route) => (
              <div key={route.route} className="p-3 rounded-xl bg-bg-soft border border-border-soft">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-clothcare-dark">{route.route}</p>
                  <span className="text-xs text-clothcare-primary bg-clothcare-primary/10 px-2 py-1 rounded-full">{route.window}</span>
                </div>
                <p className="text-sm text-text-muted">Stops: {route.stops} • Driver: {route.driver}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border-soft shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-clothcare-dark">Quick Actions</h3>
            <Settings className="text-text-muted" size={18} />
          </div>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-clothcare-primary text-white shadow-sm hover:bg-clothcare-primary/90 transition">
              Create express order
              <ChevronRight />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border-soft text-clothcare-dark hover:border-clothcare-primary hover:text-clothcare-primary transition">
              Schedule pickup slot
              <CalendarClock size={16} />
            </button>
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-border-soft text-clothcare-dark hover:border-clothcare-primary hover:text-clothcare-primary transition">
              Add machine outage note
              <AlertTriangle size={16} className="text-status-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RequestsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-clothcare-dark">Pending Approvals</h2>
        <p className="text-sm text-text-muted">Franchise, access, and payment reviews.</p>
      </div>
      <div className="text-sm text-text-muted bg-bg-soft px-3 py-1 rounded-full border border-border-soft">4 new requests</div>
    </div>

    <div className="bg-white rounded-2xl border border-border-soft shadow-sm overflow-hidden">
      <div className="grid grid-cols-12 px-6 py-3 text-xs uppercase tracking-wide text-text-muted bg-bg-soft border-b border-border-soft">
        <div className="col-span-4">Request</div>
        <div className="col-span-3">Type</div>
        <div className="col-span-3">When</div>
        <div className="col-span-2 text-right">Action</div>
      </div>
      {approvalRequests.map((req, i) => (
        <div key={req.name} className="grid grid-cols-12 items-center px-6 py-4 border-b border-border-soft hover:bg-bg-soft transition">
          <div className="col-span-4">
            <p className="font-semibold text-clothcare-dark">{req.name}</p>
            <p className="text-sm text-text-muted">Priority: {req.priority}</p>
          </div>
          <div className="col-span-3 text-sm text-text-muted">{req.type}</div>
          <div className="col-span-3 text-sm text-text-muted">{req.date}</div>
          <div className="col-span-2 flex items-center justify-end gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-bg-light text-text-muted rounded-lg hover:bg-status-danger hover:text-white transition">
              <XCircle size={16} /> Reject
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-clothcare-primary text-white rounded-lg shadow-sm hover:bg-clothcare-primary/90 transition">
              <CheckCircle size={16} /> Approve
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RevenuePage = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-2xl font-bold text-clothcare-dark">Financial Overview</h2>
    <div className="p-12 border-2 border-dashed border-border-soft rounded-2xl flex flex-col items-center justify-center text-center bg-bg-soft">
      <Wallet className="w-16 h-16 text-clothcare-primary mb-3" />
      <h3 className="text-xl font-bold text-clothcare-dark">Revenue & Cost Charts</h3>
      <p className="text-text-muted">Embed line/area charts for ARPU, AOV, and utility costs.</p>
    </div>
  </div>
);

const FranchisePage = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-clothcare-dark">Franchise Network</h2>
      <button className="bg-clothcare-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-clothcare-primary/90 transition">Add Franchise</button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {franchiseStats.map((stat) => (
        <div key={stat.label} className="bg-white border border-border-soft rounded-xl p-4 shadow-sm">
          <p className="text-xs uppercase text-text-muted tracking-wide">{stat.label}</p>
          <p className="text-2xl font-bold text-clothcare-dark mt-1">{stat.value}</p>
          <p className="text-xs text-clothcare-primary mt-1 font-semibold">{stat.delta}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-white border border-border-soft rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-clothcare-dark">Revenue trend</h3>
            <p className="text-sm text-text-muted">Week-to-date performance placeholder.</p>
          </div>
          <span className="text-xs bg-clothcare-primary/10 text-clothcare-primary px-3 py-1 rounded-full">Demo data</span>
        </div>
        <div className="h-48 border-2 border-dashed border-border-soft rounded-xl flex items-center justify-center text-text-muted">
          Add area/line chart component here.
        </div>
      </div>

      <div className="bg-white border border-border-soft rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-clothcare-dark">Orders today</h3>
          <BadgeCheck className="text-clothcare-primary" size={18} />
        </div>
        <div className="divide-y divide-border-soft">
          {franchiseOrders.map((order) => (
            <div key={order.id} className="py-3 flex items-start justify-between">
              <div>
                <p className="font-semibold text-clothcare-dark">{order.id} • {order.customer}</p>
                <p className="text-sm text-text-muted">{order.service}</p>
                <p className="text-xs text-text-muted mt-1">{order.time}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-clothcare-dark">{order.value}</span>
                <div className="text-xs text-status-warning bg-status-warning/10 px-2 py-1 rounded-full mt-1">{order.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {['Sparkle Cleaners', 'FastWash Hub', 'FreshFold Central', 'CitySpin Laundry', 'Prime Linen', 'CampusQuick'].map((name, idx) => (
        <div key={name} className="bg-white p-4 rounded-xl border border-border-soft shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-clothcare-dark">{name}</h4>
            <span className="text-xs bg-status-success/10 text-status-success px-2 py-1 rounded-full">Active</span>
          </div>
          <p className="text-sm text-text-muted">Branches: {4 + idx} • Managers: {8 + idx}</p>
          <p className="text-xs text-text-muted mt-1">SLA: 96% on-time • NPS 4.{5 + (idx % 3)}</p>
        </div>
      ))}
    </div>
  </div>
);

// ==========================================
// 2. MAIN LAYOUT COMPONENT
// ==========================================

const SuperAdminLayout = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
      <aside className="w-64 bg-clothcare-darker flex flex-col shadow-lg">
        <div className="h-20 flex items-center px-8 border-b border-white/10">
          <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg mr-3" />
          <span className="text-white font-bold text-xl tracking-wide">CLOTHCARE</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === item.id
                ? 'bg-white text-clothcare-dark shadow-lg'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {item.count && (
                <span className="bg-status-warning text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
              {item.alert && <div className="w-2 h-2 bg-status-danger rounded-full" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">
            <LogOut size={20} />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-bg-white border-b border-border-soft flex items-center justify-between px-6 lg:px-8 shadow-sm">
          <div className="flex items-center gap-4 text-text-primary">
            <Menu className="lg:hidden text-text-muted" />
            <h1 className="text-xl font-bold capitalize text-clothcare-dark">
              {menuItems.find((i) => i.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell className="text-text-muted hover:text-clothcare-primary transition" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-status-danger rounded-full" />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-clothcare-dark">Super Admin</p>
                <p className="text-xs text-text-muted">Laundry Network</p>
              </div>
              <div className="w-10 h-10 bg-clothcare-primary/10 rounded-full border-2 border-white shadow-sm" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'overview' && <OverviewPage />}
            {activeTab === 'requests' && <RequestsPage />}
            {activeTab === 'franchises' && <FranchisePage />}
            {activeTab === 'revenue' && <RevenuePage />}
            {activeTab === 'alerts' && (
              <div className="bg-status-danger/10 p-6 rounded-2xl text-status-danger flex items-center gap-4 animate-fade-in">
                <AlertTriangle />
                <span className="font-bold">System Alert: Payment gateway latency detected.</span>
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