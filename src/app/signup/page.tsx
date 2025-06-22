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
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                                What should we call you?
                            </h2>
                            <p className="text-xl text-gray-600">Let's start with your name</p>
                        </div>
                        <div className="max-w-md mx-auto">
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => updateFormData("name", e.target.value)}
                                className="w-full px-6 py-4 text-xl border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                                placeholder="Enter your full name"
                                autoFocus
                            />
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                                What's your industry?
                            </h2>
                            <p className="text-xl text-gray-600">Help us customize your experience</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {industries.map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => updateFormData("industry", industry)}
                                    className={`p-6 text-left border-2 rounded-2xl transition-all duration-200 ${
                                        formData.industry === industry
                                            ? "border-cyan-500 bg-cyan-50 text-cyan-700 shadow-md"
                                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                                    }`}
                                >
                                    <span className="text-lg font-medium">{industry}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                                How many customers do you serve?
                            </h2>
                            <p className="text-xl text-gray-600">This helps us recommend the right plan</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            {clientSizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => updateFormData("clientSize", size)}
                                    className={`p-6 text-left border-2 rounded-2xl transition-all duration-200 ${
                                        formData.clientSize === size
                                            ? "border-cyan-500 bg-cyan-50 text-cyan-700 shadow-md"
                                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                                    }`}
                                >
                                    <span className="text-lg font-medium">{size}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                                What's your email?
                            </h2>
                            <p className="text-xl text-gray-600">We'll use this to create your account</p>
                        </div>
                        <div className="max-w-md mx-auto">
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                className="w-full px-6 py-4 text-xl border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                                placeholder="Enter your email address"
                                autoFocus
                            />
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                                Create a password
                            </h2>
                            <p className="text-xl text-gray-600">Choose a strong password for your account</p>
                        </div>
                        <div className="max-w-md mx-auto">
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => updateFormData("password", e.target.value)}
                                className="w-full px-6 py-4 text-xl border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                                placeholder="Enter a strong password"
                                autoFocus
                            />
                            <p className="text-sm text-gray-500 mt-3 text-center">
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
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur border-b border-gray-200">
                <div className="container max-w-6xl py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-3xl font-bold text-cyan-600">
                            AvenPing
                        </Link>
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map((step) => (
                                <div
                                    key={step}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        step <= currentStep ? "bg-cyan-500" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                            <span className="ml-4 text-sm text-gray-600">
                                Step {currentStep} of 5
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container max-w-6xl py-16">
                <div className="max-w-4xl mx-auto">
                    {renderStep()}

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-16 max-w-2xl mx-auto">
                        <Button
                            variant="secondary"
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className={`flex items-center gap-2 px-8 h-14 text-lg ${
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
                            className={`flex items-center gap-2 px-8 h-14 text-lg ${
                                !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {currentStep === 5 ? "Create Account" : "Continue"}
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center pb-8">
                <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-cyan-600 hover:text-cyan-700 font-medium">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}