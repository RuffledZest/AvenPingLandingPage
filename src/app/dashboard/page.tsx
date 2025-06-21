"use client";

import { MessageCircle, Users, BarChart3, Settings } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-cyan-600">
                            AvenPing
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700">Welcome back!</span>
                            <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage your WhatsApp business communications</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <MessageCircle className="text-cyan-600" size={24} />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Messages</p>
                                <p className="text-2xl font-bold text-gray-900">1,234</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <Users className="text-blue-600" size={24} />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Active Contacts</p>
                                <p className="text-2xl font-bold text-gray-900">567</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <BarChart3 className="text-purple-600" size={24} />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Response Rate</p>
                                <p className="text-2xl font-bold text-gray-900">94%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center">
                            <Settings className="text-orange-600" size={24} />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Automations</p>
                                <p className="text-2xl font-bold text-gray-900">12</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Conversations</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                    <div className="ml-3 flex-1">
                                        <p className="text-sm font-medium text-gray-900">Customer {i}</p>
                                        <p className="text-sm text-gray-600">Last message preview...</p>
                                    </div>
                                    <div className="text-xs text-gray-500">2m ago</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                                <MessageCircle className="text-cyan-600 mb-2" size={24} />
                                <p className="font-medium text-gray-900">New Broadcast</p>
                            </button>
                            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                                <Users className="text-blue-600 mb-2" size={24} />
                                <p className="font-medium text-gray-900">Manage Contacts</p>
                            </button>
                            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                                <BarChart3 className="text-purple-600 mb-2" size={24} />
                                <p className="font-medium text-gray-900">View Analytics</p>
                            </button>
                            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                                <Settings className="text-orange-600 mb-2" size={24} />
                                <p className="font-medium text-gray-900">Settings</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}