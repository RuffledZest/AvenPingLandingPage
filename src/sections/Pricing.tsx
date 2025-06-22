import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$29",
        period: "per month",
        description: "Perfect for small businesses getting started",
        features: [
            "Up to 1,000 messages/month",
            "Basic automation",
            "Contact management",
            "Email support",
            "WhatsApp integration"
        ],
        popular: false
    },
    {
        name: "Professional",
        price: "$79",
        period: "per month",
        description: "Ideal for growing businesses",
        features: [
            "Up to 10,000 messages/month",
            "Advanced automation",
            "Team collaboration",
            "Analytics dashboard",
            "Priority support",
            "Custom templates",
            "API access"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        price: "$199",
        period: "per month",
        description: "For large organizations with complex needs",
        features: [
            "Unlimited messages",
            "Advanced AI features",
            "Multi-team management",
            "Custom integrations",
            "Dedicated support",
            "White-label options",
            "Advanced security",
            "Custom reporting"
        ],
        popular: false
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Pricing</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto text-gray-900">
                    Choose the perfect{" "}
                    <span className="text-cyan-600">plan</span> for your business
                </h2>
                <p className="text-center text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                    Simple, transparent pricing that grows with you. Start free and upgrade as your business expands.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-3xl p-8 shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                                plan.popular 
                                    ? "border-cyan-500 relative" 
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
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600 ml-2">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <Check size={20} className="text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-3">
                                <Button
                                    variant={plan.popular ? "primary" : "secondary"}
                                    className="w-full h-12 text-lg"
                                >
                                    Get Started
                                </Button>
                                <Link href="/pricing" className="block">
                                    <button className="w-full text-cyan-600 hover:text-cyan-700 font-medium py-2">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Need a custom solution? We're here to help.
                    </p>
                    <Button variant="secondary" className="px-8">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    );
}