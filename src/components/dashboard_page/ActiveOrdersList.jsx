import React from 'react';
import { motion } from 'motion/react';
import { PackageSearch, Clock, ChevronRight } from 'lucide-react';

const ActiveOrdersList = () => {
    // Mock Data for the UI
    const activeOrders = [
        { id: 'QL-8492', items: 4, status: 'In Lab (Bio-Wash)', date: 'Today, 10:30 AM', color: 'text-blue-500', bg: 'bg-blue-50' },
        { id: 'QL-8491', items: 2, status: 'Out for Delivery', date: 'Yesterday, 2:15 PM', color: 'text-text-accent', bg: 'bg-clothcare-primary/10' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-text-dark">Current Processing</h2>
                <button className="text-text-accent font-bold text-sm hover:underline">View All</button>
            </div>

            {activeOrders.map((order, idx) => (
                <div key={idx} className="bg-white rounded-4xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl ${order.bg} ${order.color} flex items-center justify-center`}>
                            <PackageSearch size={24} />
                        </div>
                        <div>
                            <h4 className="text-text-dark font-bold text-lg">{order.id} <span className="text-gray-400 font-light text-sm ml-2">({order.items} items)</span></h4>
                            <p className="text-text-muted text-sm flex items-center gap-2 mt-1">
                                <Clock size={14} /> {order.date}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-right">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                            <p className={`font-bold ${order.color}`}>{order.status}</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-text-primary transition-colors group">
                            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default ActiveOrdersList;
