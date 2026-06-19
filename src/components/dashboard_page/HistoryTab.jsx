import React from 'react';

const HistoryTab = () => {
    return (
        <div className="flex-1 overflow-y-auto px-10 pb-20">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Service History</h2>
            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm">
                <p className="text-text-muted">Your past services and archives will appear here.</p>
                {/* Add more custom content here as needed */}
            </div>
        </div>
    );
};

export default HistoryTab;
