"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$29",
        yearlyPrice: "$290",
        period: "per month",
        description: "Perfect for small businesses getting started",
        features: [
            { name: "Up to 1,000 messages/month", included: true },
            { name: "Basic automation", included: true },
            { name: "Contact management", included: true },
            { name: "Email support", included: true },
            { name: "WhatsApp integration", included: true },
            { name: "Advanced analytics", included: false },
            { name: "Team collaboration", included: false },
            { name: "API access", included: false },
            { name: "Custom integrations", included: false },
            { name: "Priority support", included: false }
        ],
        popular: false
    },
    {
        name: "Professional",
        price: "$79",
        yearlyPrice: "$790",
        period: "per month",
        description: "Ideal for growing businesses",
        features: [
            { name: "Up to 10,000 messages/month", included: true },
            { name: "Advanced automation", included: true },
            { name: "Contact management", included: true },
            { name: "Priority support", included: true },
            { name: "WhatsApp integration", included: true },
            { name: "Advanced analytics", included: true },
            { name: "Team collaboration", included: true },
            { name: "API access", included: true },
            { name: "Custom integrations", included: false },
            { name: "White-label options", included: false }
        ],
        popular: true
    },
    {
        name: "Enterprise",
        price: "$199",
        yearlyPrice: "$1990",
        period: "per month",
        description: "For large organizations with complex needs",
        features: [
            { name: "Unlimited messages", included: true },
            { name: "Advanced AI features", included: true },
            { name: "Multi-team management", included: true },
            { name: "Dedicated support", included: true },
            { name: "WhatsApp integration", included: true },
            { name: "Advanced analytics", included: true },
            { name: "Team collaboration", included: true },
            { name: "API access", included: true },
            { name: "Custom integrations", included: true },
            { name: "White-label options", included: true }
        ],
        popular: false
    }
];

const allFeatures = [
    "Up to 1,000 messages/month",
    "Up to 10,000 messages/month", 
    "Unlimited messages",
    "Basic automation",
    "Advanced automation",
    "Advanced AI features",
    "Contact management",
    "Multi-team management",
    "Email support",
    "Priority support",
    "Dedicated support",
    "WhatsApp integration",
    "Advanced analytics",
    "Team collaboration",
    "API access",
    "Custom integrations",
    "White-label options"
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container max-w-6xl py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-3xl font-bold text-cyan-600">
                            AvenPing
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="secondary">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button variant="primary">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-20">
                <div className="container max-w-6xl text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Choose Your Perfect Plan
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Simple, transparent pricing that grows with you. Start free and upgrade as your business expands.
                    </p>
                    
                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={`text-lg ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-14 h-8 rounded-full transition-colors ${
                                isYearly ? 'bg-cyan-500' : 'bg-gray-300'
                            }`}
                        >
                            <div
                                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                                    isYearly ? 'translate-x-7' : 'translate-x-1'
                                }`}
                            />
                        </button>
                        <span className={`text-lg ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                            Yearly
                        </span>
                        <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                            Save 20%
                        </span>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="container max-w-6xl py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-3xl p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                                plan.popular 
                                    ? "border-cyan-500 relative scale-105" 
                                    : "border-gray-200 hover:border-cyan-200"
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{plan.description}</p>
                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-gray-900">
                                        {isYearly ? plan.yearlyPrice : plan.price}
                                    </span>
                                    <span className="text-gray-600 ml-2">
                                        {isYearly ? 'per year' : plan.period}
                                    </span>
                                </div>
                                {isYearly && (
                                    <p className="text-sm text-cyan-600 font-medium">
                                        2 months free!
                                    </p>
                                )}
                            </div>

                            <Button
                                variant={plan.popular ? "primary" : "secondary"}
                                className="w-full h-12 text-lg mb-6"
                            >
                                Get Started
                            </Button>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                                {plan.features.slice(0, 5).map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start">
                                        <Check size={20} className="text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{feature.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Comparison Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8 border-b border-gray-200">
                        <h2 className="text-3xl font-semibold text-gray-900 text-center">
                            Compare All Features
                        </h2>
                        <p className="text-gray-600 text-center mt-2">
                            See exactly what's included in each plan
                        </p>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left p-6 font-semibold text-gray-900">Features</th>
                                    {plans.map((plan) => (
                                        <th key={plan.name} className="text-center p-6">
                                            <div className="font-semibold text-gray-900">{plan.name}</div>
                                            <div className="text-2xl font-bold text-gray-900 mt-2">
                                                {isYearly ? plan.yearlyPrice : plan.price}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {isYearly ? 'per year' : plan.period}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {allFeatures.map((feature, index) => (
                                    <tr key={feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="p-6 font-medium text-gray-900">{feature}</td>
                                        {plans.map((plan) => {
                                            const planFeature = plan.features.find(f => f.name === feature);
                                            return (
                                                <td key={plan.name} className="p-6 text-center">
                                                    {planFeature?.included ? (
                                                        <Check size={24} className="text-cyan-500 mx-auto" />
                                                    ) : (
                                                        <X size={24} className="text-gray-300 mx-auto" />
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                            <p className="text-gray-600">Yes, all plans come with a 14-day free trial. No credit card required.</p>
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                            <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
                        </div>
                        <div className="text-left">
                            <h3 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                            <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-xl mb-8 text-cyan-100">
                        Join thousands of businesses already using AvenPing
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup">
                            <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 h-12 text-lg">
                                Start Free Trial
                            </Button>
                        </Link>
                        <Button variant="secondary" className="border-white text-white hover:bg-white/10 px-8 h-12 text-lg">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}