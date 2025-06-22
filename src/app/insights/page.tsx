"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { Play, BookOpen, Lightbulb, FileText } from "lucide-react";

const tutorials = [
    {
        title: "Getting Started with AvenPing",
        description: "Learn the basics of setting up your WhatsApp business account",
        duration: "5 min",
        videoId: "dQw4w9WgXcQ",
        category: "Beginner"
    },
    {
        title: "Setting Up Automated Responses",
        description: "Create intelligent auto-replies for common customer inquiries",
        duration: "8 min",
        videoId: "dQw4w9WgXcQ",
        category: "Automation"
    },
    {
        title: "Team Collaboration Features",
        description: "How to manage conversations with multiple team members",
        duration: "6 min",
        videoId: "dQw4w9WgXcQ",
        category: "Collaboration"
    },
    {
        title: "Analytics and Reporting",
        description: "Understanding your WhatsApp business metrics",
        duration: "7 min",
        videoId: "dQw4w9WgXcQ",
        category: "Analytics"
    }
];

const guides = [
    {
        title: "WhatsApp Business API Setup Guide",
        description: "Complete step-by-step guide to connect your WhatsApp Business account",
        readTime: "10 min read",
        category: "Setup",
        content: "Learn how to properly configure your WhatsApp Business API..."
    },
    {
        title: "Creating Effective Message Templates",
        description: "Best practices for designing message templates that convert",
        readTime: "8 min read",
        category: "Templates",
        content: "Discover the secrets to crafting compelling WhatsApp messages..."
    },
    {
        title: "Managing Customer Contacts",
        description: "Organize and segment your customer database effectively",
        readTime: "6 min read",
        category: "Management",
        content: "Master the art of contact organization and segmentation..."
    },
    {
        title: "Integration with E-commerce Platforms",
        description: "Connect AvenPing with Shopify, WooCommerce, and other platforms",
        readTime: "12 min read",
        category: "Integrations",
        content: "Step-by-step integration guides for popular e-commerce platforms..."
    }
];

const bestPractices = [
    {
        title: "WhatsApp Business Etiquette",
        description: "Professional communication standards for WhatsApp Business",
        tips: [
            "Always respond within 24 hours",
            "Use proper greeting and closing messages",
            "Keep messages concise and clear",
            "Respect customer privacy and preferences"
        ]
    },
    {
        title: "Automation Best Practices",
        description: "How to use automation without losing the personal touch",
        tips: [
            "Set clear expectations about automated responses",
            "Always provide an option to speak with a human",
            "Regularly review and update automated messages",
            "Test your automation flows regularly"
        ]
    },
    {
        title: "Customer Service Excellence",
        description: "Delivering exceptional customer service through WhatsApp",
        tips: [
            "Personalize your responses when possible",
            "Use customer names in conversations",
            "Follow up on resolved issues",
            "Collect feedback to improve service"
        ]
    },
    {
        title: "Security and Compliance",
        description: "Keeping your WhatsApp business communications secure",
        tips: [
            "Enable two-factor authentication",
            "Regularly audit team access permissions",
            "Follow data protection regulations",
            "Keep customer data secure and private"
        ]
    }
];

export default function InsightsPage() {
    const [activeTab, setActiveTab] = useState("tutorials");

    const renderTutorials = () => (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Video Tutorials
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Learn AvenPing with our comprehensive video tutorials
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tutorials.map((tutorial, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video bg-gray-100 relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play size={24} className="text-cyan-600 ml-1" />
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                                    {tutorial.duration}
                                </span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-cyan-500 text-white px-2 py-1 rounded text-sm">
                                    {tutorial.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {tutorial.title}
                            </h3>
                            <p className="text-gray-600">
                                {tutorial.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderGuides = () => (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Step-by-Step Guides
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Detailed written guides to help you master AvenPing
                </p>
            </div>
            
            <div className="space-y-6">
                {guides.map((guide, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {guide.category}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        {guide.readTime}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {guide.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {guide.description}
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    {guide.content}
                                </p>
                            </div>
                            <div className="ml-6">
                                <Button variant="secondary" className="flex items-center gap-2">
                                    <FileText size={16} />
                                    Read Guide
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderBestPractices = () => (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Best Practices
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Expert tips and best practices for WhatsApp Business success
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bestPractices.map((practice, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                                <Lightbulb size={20} className="text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                {practice.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {practice.description}
                        </p>
                        <ul className="space-y-3">
                            {practice.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-700">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );

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
                            <Link href="/pricing" className="text-gray-600 hover:text-cyan-600 font-medium">
                                Pricing
                            </Link>
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
                        Insights & Resources
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Everything you need to master WhatsApp Business with AvenPing. 
                        From tutorials to best practices, we've got you covered.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="container max-w-6xl py-8">
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveTab("tutorials")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                                    activeTab === "tutorials"
                                        ? "bg-cyan-500 text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                <Play size={20} />
                                Tutorials
                            </button>
                            <button
                                onClick={() => setActiveTab("guides")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                                    activeTab === "guides"
                                        ? "bg-cyan-500 text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                <BookOpen size={20} />
                                Guides
                            </button>
                            <button
                                onClick={() => setActiveTab("best-practices")}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                                    activeTab === "best-practices"
                                        ? "bg-cyan-500 text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                <Lightbulb size={20} />
                                Best Practices
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-[600px]">
                    {activeTab === "tutorials" && renderTutorials()}
                    {activeTab === "guides" && renderGuides()}
                    {activeTab === "best-practices" && renderBestPractices()}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-20">
                <div className="container max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to put these insights into action?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Start your free trial and see how AvenPing can transform your WhatsApp business
                    </p>
                    <Link href="/signup">
                        <Button variant="primary" className="px-8 h-12 text-lg">
                            Start Free Trial
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}