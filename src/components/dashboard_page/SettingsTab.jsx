import React from 'react';

const SettingsTab = () => {
    return (
        <div className="flex-1 overflow-y-auto px-10 pb-20">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Profile Settings</h2>

            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-text-dark mb-2">Personal Information</h3>
                    <p className="text-text-muted text-sm mb-6">Update your account details and preferences.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary outline-none transition-all" defaultValue="Sarah Jenkins" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary outline-none transition-all" defaultValue="sarah.j@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary outline-none transition-all" defaultValue="+1 (555) 123-4567" />
                        </div>
                    </div>
                </div>

                <hr className="border-gray-100" />

                <div>
                    <h3 className="text-lg font-bold text-text-dark mb-4">Notifications</h3>
                    <div className="space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded text-text-accent focus:ring-clothcare-primary border-gray-300" defaultChecked />
                            <span className="text-gray-700 font-medium">Email notifications for order updates</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded text-text-accent focus:ring-clothcare-primary border-gray-300" defaultChecked />
                            <span className="text-gray-700 font-medium">SMS alerts for deliveries</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 rounded text-text-accent focus:ring-clothcare-primary border-gray-300" />
                            <span className="text-gray-700 font-medium">Marketing and promotional emails</span>
                        </label>
                    </div>
                </div>

                <div className="pt-6">
                    <button className="bg-gray-900 text-text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-clothcare-primary transition-colors shadow-md">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsTab;
