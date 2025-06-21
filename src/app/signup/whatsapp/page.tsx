"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { MessageCircle, Upload, X } from "lucide-react";
import Image from "next/image";

export default function WhatsAppSetup() {
    const [step, setStep] = useState(1); // 1: Connect, 2: Profile Setup
    const [profileData, setProfileData] = useState({
        displayName: "",
        description: "",
        profilePic: null as File | null,
        headerPic: null as File | null
    });
    const router = useRouter();

    const handleSkip = () => {
        router.push("/dashboard");
    };

    const handleConnect = () => {
        setStep(2);
    };

    const handleFileUpload = (type: 'profilePic' | 'headerPic', file: File) => {
        setProfileData(prev => ({ ...prev, [type]: file }));
    };

    const handleComplete = () => {
        router.push("/dashboard");
    };

    if (step === 1) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="text-3xl font-bold text-green-600 mb-4">
                            AvenPing
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                            Connect your WhatsApp
                        </h1>
                        <p className="text-gray-600">
                            Connect your WhatsApp Business account to start managing conversations
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle size={40} className="text-green-600" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                WhatsApp Business API
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Securely connect your WhatsApp Business account to manage all conversations in one place
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                variant="primary"
                                onClick={handleConnect}
                                className="w-full h-12 text-lg flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={20} />
                                Connect WhatsApp
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={handleSkip}
                                className="w-full h-12 text-lg"
                            >
                                Skip for now
                            </Button>
                        </div>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>You can connect your WhatsApp account later from settings</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <div className="text-3xl font-bold text-green-600 mb-4">
                        AvenPing
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        Set up your WhatsApp profile
                    </h1>
                    <p className="text-gray-600">
                        Customize how your business appears to customers
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Display Name
                            </label>
                            <input
                                type="text"
                                value={profileData.displayName}
                                onChange={(e) => setProfileData(prev => ({ ...prev, displayName: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                placeholder="Your business name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={profileData.description}
                                onChange={(e) => setProfileData(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                placeholder="Brief description of your business"
                                rows={3}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Profile Picture
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                                <Upload size={40} className="mx-auto text-gray-400 mb-2" />
                                <p className="text-sm text-gray-600">
                                    Click to upload or drag and drop
                                </p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => e.target.files?.[0] && handleFileUpload('profilePic', e.target.files[0])}
                                    className="hidden"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Header Picture
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                                <Upload size={40} className="mx-auto text-gray-400 mb-2" />
                                <p className="text-sm text-gray-600">
                                    Click to upload or drag and drop
                                </p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => e.target.files?.[0] && handleFileUpload('headerPic', e.target.files[0])}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <Button
                            variant="secondary"
                            onClick={handleSkip}
                            className="flex-1 h-12"
                        >
                            Skip
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleComplete}
                            className="flex-1 h-12"
                        >
                            Complete Setup
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}