"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { MessageCircle, Upload, X } from "lucide-react";
import Link from "next/link";

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
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-50">
                {/* Header */}
                <div className="bg-white/80 backdrop-blur border-b border-gray-200">
                    <div className="container max-w-6xl py-6">
                        <Link href="/" className="text-3xl font-bold text-cyan-600">
                            AvenPing
                        </Link>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container max-w-6xl py-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
                            Connect your WhatsApp
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Connect your WhatsApp Business account to start managing conversations
                        </p>

                        <div className="bg-white rounded-3xl shadow-lg p-12 border border-gray-200">
                            <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <MessageCircle size={48} className="text-cyan-600" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                WhatsApp Business API
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                Securely connect your WhatsApp Business account to manage all conversations in one place
                            </p>

                            <div className="space-y-4 max-w-sm mx-auto">
                                <Button
                                    variant="primary"
                                    onClick={handleConnect}
                                    className="w-full h-14 text-lg flex items-center justify-center gap-3"
                                >
                                    <MessageCircle size={24} />
                                    Connect WhatsApp
                                </Button>

                                <Button
                                    variant="secondary"
                                    onClick={handleSkip}
                                    className="w-full h-14 text-lg"
                                >
                                    Skip for now
                                </Button>
                            </div>

                            <p className="text-gray-500 mt-8 text-sm">
                                You can connect your WhatsApp account later from settings
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur border-b border-gray-200">
                <div className="container max-w-6xl py-6">
                    <Link href="/" className="text-3xl font-bold text-cyan-600">
                        AvenPing
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-6xl py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
                            Set up your WhatsApp profile
                        </h1>
                        <p className="text-xl text-gray-600">
                            Customize how your business appears to customers
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-12 border border-gray-200">
                        <div className="space-y-8">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-3">
                                    Display Name
                                </label>
                                <input
                                    type="text"
                                    value={profileData.displayName}
                                    onChange={(e) => setProfileData(prev => ({ ...prev, displayName: e.target.value }))}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                                    placeholder="Your business name"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-3">
                                    Description
                                </label>
                                <textarea
                                    value={profileData.description}
                                    onChange={(e) => setProfileData(prev => ({ ...prev, description: e.target.value }))}
                                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                                    placeholder="Brief description of your business"
                                    rows={4}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-3">
                                        Profile Picture
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-cyan-400 transition-colors cursor-pointer">
                                        <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-600 mb-2">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            PNG, JPG up to 10MB
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
                                    <label className="block text-lg font-medium text-gray-700 mb-3">
                                        Header Picture
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-cyan-400 transition-colors cursor-pointer">
                                        <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                                        <p className="text-gray-600 mb-2">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            PNG, JPG up to 10MB
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
                        </div>

                        <div className="flex gap-6 mt-12 max-w-md mx-auto">
                            <Button
                                variant="secondary"
                                onClick={handleSkip}
                                className="flex-1 h-14 text-lg"
                            >
                                Skip
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleComplete}
                                className="flex-1 h-14 text-lg"
                            >
                                Complete Setup
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}