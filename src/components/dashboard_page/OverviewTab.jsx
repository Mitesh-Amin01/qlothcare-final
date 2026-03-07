import React from 'react';
import DashboardStats from './DashboardStats';
import ActiveOrdersList from './ActiveOrdersList';
import RecentHistoryList from './RecentHistoryList';

const OverviewTab = () => {
    return (
        <div className="flex-1 overflow-y-auto px-10 pb-20">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <ActiveOrdersList />
                <RecentHistoryList />
            </div>
        </div>
    );
};

export default OverviewTab;
