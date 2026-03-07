import React from 'react';
import { motion } from 'motion/react';
import { Shirt, Truck, ArrowRight } from 'lucide-react';

const DashboardStats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-clothcare-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-clothcare-primary/10 transition-colors"></div>
                <div className="w-12 h-12 rounded-xl bg-clothcare-primary/10 text-clothcare-primary flex items-center justify-center mb-6">
                    <Shirt size={24} />
                </div>
                <p className="text-gray-500 text-sm font-medium mb-1">Items in Vault</p>
                <h3 className="text-4xl font-black text-gray-900">12</h3>
            </div>

            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-500/10 transition-colors"></div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                    <Truck size={24} />
                </div>
                <p className="text-gray-500 text-sm font-medium mb-1">Active Deliveries</p>
                <h3 className="text-4xl font-black text-gray-900">1</h3>
            </div>

            <div className="bg-gray-900 rounded-[2rem] p-8 shadow-xl relative overflow-hidden text-white flex flex-col justify-between group cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-clothcare-primary/40 to-transparent opacity-50"></div>
                <div className="relative z-10">
                    <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-widest">Premium Care</p>
                    <h3 className="text-3xl font-black leading-tight">Need urgent <br /> restoration?</h3>
                </div>
                <div className="relative z-10 flex items-center gap-3 mt-6 text-clothcare-primary font-bold">
                    Priority Booking <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

export default DashboardStats;
