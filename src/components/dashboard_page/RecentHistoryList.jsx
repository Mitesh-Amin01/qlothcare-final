import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const RecentHistoryList = () => {
    const recentServices = [
        { name: 'Bespoke Suit Restoration', date: 'Mar 02, 2026', price: '$85.00' },
        { name: 'Silk Blouse Bio-Cleanse', date: 'Feb 28, 2026', price: '$42.00' },
        { name: 'Wool Overcoat Archiving', date: 'Feb 15, 2026', price: '$120.00' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm"
        >
            <h2 className="text-xl font-bold text-gray-900 mb-8">Recent Archives</h2>

            <div className="space-y-6">
                {recentServices.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-50 group-hover:text-green-500 transition-colors shrink-0">
                            <CheckCircle2 size={18} />
                        </div>
                        <div className="flex-1 border-b border-gray-100 pb-6 group-hover:border-gray-200 transition-colors">
                            <h4 className="text-gray-900 font-bold text-sm leading-tight mb-1 group-hover:text-clothcare-primary transition-colors">{service.name}</h4>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{service.date}</span>
                                <span className="font-bold text-gray-900">{service.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full py-4 mt-6 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold rounded-2xl transition-colors text-sm">
                Download Receipts
            </button>
        </motion.div>
    );
};

export default RecentHistoryList;
