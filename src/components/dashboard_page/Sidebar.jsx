import React from 'react';
import {
    LayoutDashboard,
    PackageSearch,
    Clock,
    Settings,
    LogOut,
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <aside className="w-72 bg-white border-r border-gray-100 hidden lg:flex flex-col justify-between rounded-r-[3rem] shadow-[10px_0_50px_rgba(0,0,0,0.02)] z-20 my-4 ml-4">
            <div className="p-8">
                {/* Logo Area */}
                <div className="flex items-center gap-3 mb-16">
                    <div className="w-10 h-10 bg-clothcare-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_10px_20px_rgba(28,31,173,0.3)]">Q</div>
                    <span className="font-black text-2xl tracking-tight text-gray-900">Qlothcare<span className="text-clothcare-primary">.</span></span>
                </div>

                {/* Navigation */}
                <nav className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">Menu</p>

                    <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${activeTab === 'overview' ? 'bg-gray-900 text-white shadow-xl' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <div className="flex items-center gap-4">
                            <LayoutDashboard size={20} className={activeTab === 'overview' ? 'opacity-100' : 'opacity-50 group-hover:opacity-100 transition-opacity'} />
                            <span className="font-medium">Overview</span>
                        </div>
                    </button>

                    <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${activeTab === 'orders' ? 'bg-gray-900 text-white shadow-xl' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <div className="flex items-center gap-4">
                            <PackageSearch size={20} className={activeTab === 'orders' ? 'opacity-100' : 'opacity-50 group-hover:opacity-100 transition-opacity'} />
                            <span className="font-medium">My Vault</span>
                        </div>
                        <span className="w-6 h-6 rounded-full bg-clothcare-primary text-white text-[10px] flex items-center justify-center font-bold">2</span>
                    </button>

                    <button onClick={() => setActiveTab('history')} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${activeTab === 'history' ? 'bg-gray-900 text-white shadow-xl' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <div className="flex items-center gap-4">
                            <Clock size={20} className={activeTab === 'history' ? 'opacity-100' : 'opacity-50 group-hover:opacity-100 transition-opacity'} />
                            <span className="font-medium">History</span>
                        </div>
                    </button>

                    <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${activeTab === 'settings' ? 'bg-gray-900 text-white shadow-xl' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                        <div className="flex items-center gap-4">
                            <Settings size={20} className={activeTab === 'settings' ? 'opacity-100' : 'opacity-50 group-hover:opacity-100 transition-opacity'} />
                            <span className="font-medium">Settings</span>
                        </div>
                    </button>
                </nav>
            </div>

            {/* Profile Widget Bottom */}
            <div className="p-6 m-4 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="User" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md grayscale" />
                    <div>
                        <p className="text-gray-900 font-bold">Sarah Jenkins</p>
                        <p className="text-gray-400 text-xs font-medium">Archival Member</p>
                    </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <button onClick={() => setActiveTab('settings')} className={`transition-colors ${activeTab === 'settings' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'}`}><Settings size={18} /></button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors"><LogOut size={18} /></button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
