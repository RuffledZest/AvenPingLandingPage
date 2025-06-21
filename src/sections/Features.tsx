"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { MessageCircle, BarChart3, Users, Zap, Bot, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    "Auto Replies",
    "Bulk Messaging",
    "Contact Management",
    "Analytics Dashboard",
    "Message Templates",
    "Team Collaboration",
    "API Integration",
];

const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl m-auto text-gray-900">
                    Everything you need for{" "}
                    <span className="text-cyan-600">WhatsApp Business</span>
                </h2>
                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Team Collaboration"
                                description="Work together seamlessly with your team on WhatsApp conversations"
                                className="md:col-span-2 lg:col-span-1"
                            >
                                <div className="aspect-video flex items-center justify-center">
                                    <Avatar className="z-40 border-cyan-500">
                                        <Image
                                            src={avatar1}
                                            alt="Avatar 1"
                                            className="rounded-full"
                                        />
                                    </Avatar>
                                    <Avatar className="-ml-6 border-blue-500 z-30">
                                        <Image
                                            src={avatar2}
                                            alt="Avatar 2"
                                            className="rounded-full"
                                        />
                                    </Avatar>
                                    <Avatar className="-ml-6 border-purple-500 z-20">
                                        <Image
                                            src={avatar3}
                                            alt="Avatar 3"
                                            className="rounded-full"
                                        />
                                    </Avatar>
                                    <Avatar className="-ml-6 border-transparent z-10">
                                        <div className="rounded-full flex justify-center items-center size-full bg-gray-200">
                                            <Users size={30} className="text-gray-600" />
                                        </div>
                                    </Avatar>
                                </div>
                            </FeatureCard>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Smart Analytics"
                                description="Track message performance and customer engagement with detailed insights"
                                className="md:col-span-2 lg:col-span-1 group transition duration-500"
                            >
                                <div className="aspect-video flex items-center justify-center">
                                    <div className="text-center">
                                        <BarChart3 size={60} className="text-cyan-500 mx-auto mb-4" />
                                        <p className="text-2xl font-bold text-gray-900">
                                            <span className="text-cyan-600">94%</span> Response Rate
                                        </p>
                                    </div>
                                </div>
                            </FeatureCard>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Automated Responses"
                                description="Set up intelligent auto-replies to handle customer inquiries 24/7"
                                className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                            >
                                <div className="aspect-video flex justify-center items-center">
                                    <div className="text-center">
                                        <Bot size={60} className="text-cyan-500 mx-auto mb-4 group-hover:animate-pulse" />
                                        <p className="text-lg font-medium text-gray-700">
                                            Always Available
                                        </p>
                                    </div>
                                </div>
                            </FeatureCard>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="my-8 flex items-center justify-center flex-wrap gap-2 max-w-3xl m-auto">
                    {features.map((feature) => (
                        <div
                            className="bg-white border border-gray-200 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group shadow-sm"
                            key={feature}
                        >
                            <span className="bg-cyan-500 text-white size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg text-gray-700">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}