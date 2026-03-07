import React from 'react';
import { motion } from 'motion/react';
import { Bell, Plus } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-28 flex items-center justify-between px-10 relative z-10">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-black text-gray-900 tracking-tight"
                >
                    Good morning, Sarah.
                </motion.h1>
                <p className="text-gray-500 mt-1 font-light">Here is the status of your collection today.</p>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative hover:scale-105 transition-transform cursor-pointer">
                    <Bell size={24} className="text-gray-400" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#F8F9FC]"></div>
                </div>

                <button className="bg-gray-900 text-white px-6 py-3.5 rounded-full font-bold text-sm tracking-wide hidden sm:flex items-center gap-3 hover:bg-clothcare-primary hover:shadow-[0_10px_30px_rgba(28,31,173,0.3)] transition-all duration-300 group">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-clothcare-primary transition-colors">
                        <Plus size={14} />
                    </div>
                    Book New Service
                </button>
            </div>
        </header>
    );
};

export default Header;
