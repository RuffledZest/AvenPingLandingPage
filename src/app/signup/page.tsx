"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const industries = [
    "E-commerce",
    "Healthcare",
    "Education",
    "Real Estate",
    "Restaurant",
    "Retail",
    "Professional Services",
    "Technology",
    "Other"
];

const clientSizes = [
    "1-50 customers",
    "51-200 customers", 
    "201-1000 customers",
    "1000+ customers"
];

export default function Signup() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        industry: "",
        clientSize: "",
        email: "",
        password: ""
    });
    const router = useRouter();

    const handleNext = () => {
        if (currentStep < 5) {
            setCurrentStep(currentStep + 1);
        } else {
            router.push("/signup/whatsapp");
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1: return formData.name.trim() !== "";
            case 2: return formData.industry !== "";
            case 3: return formData.clientSize !== "";
            case 4: return formData.email.trim() !== "";
            case 5: return formData.password.trim() !== "";
            default: return false;
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                What should we call you?
                            </h2>
                            <p className="text-gray-600">Let's start with your name</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => updateFormData("name", e.target.value)}
                                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                placeholder="Enter your full name"
                                autoFocus
                            />
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                What's your industry?
                            </h2>
                            <p className="text-gray-600">Help us customize your experience</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {industries.map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => updateFormData("industry", industry)}
                                    className={`p-4 text-left border rounded-lg transition-colors ${
                                        formData.industry === industry
                                            ? "border-green-500 bg-green-50 text-green-700"
                                            : "border-gray-300 hover:border-gray-400"
                                    }`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                How many customers do you serve?
                            </h2>
                            <p className="text-gray-600">This helps us recommend the right plan</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            {clientSizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => updateFormData("clientSize", size)}
                                    className={`p-4 text-left border rounded-lg transition-colors ${
                                        formData.clientSize === size
                                            ? "border-green-500 bg-green-50 text-green-700"
                                            : "border-gray-300 hover:border-gray-400"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                What's your email?
                            </h2>
                            <p className="text-gray-600">We'll use this to create your account</p>
                        </div>
                        <div>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                placeholder="Enter your email address"
                                autoFocus
                            />
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                Create a password
                            </h2>
                            <p className="text-gray-600">Choose a strong password for your account</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => updateFormData("password", e.target.value)}
                                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                placeholder="Enter a strong password"
                                autoFocus
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                Password should be at least 8 characters long
                            </p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                    <Link href="/" className="text-3xl font-bold text-green-600">
                        AvenPing
                    </Link>
                    <div className="flex justify-center mt-4">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((step) => (
                                <div
                                    key={step}
                                    className={`w-3 h-3 rounded-full ${
                                        step <= currentStep ? "bg-green-500" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    {renderStep()}

                    <div className="flex justify-between mt-8">
                        <Button
                            variant="secondary"
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 ${
                                currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            <ArrowLeft size={20} />
                            Back
                        </Button>

                        <Button
                            variant="primary"
                            onClick={handleNext}
                            disabled={!isStepValid()}
                            className={`flex items-center gap-2 ${
                                !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {currentStep === 5 ? "Create Account" : "Continue"}
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}