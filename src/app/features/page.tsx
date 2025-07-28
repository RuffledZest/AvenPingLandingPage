"use client"

import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/landing/navbar"

interface Feature {
  id: string
  title: string
  description: string
  benefits: string[]
  image: string
}

const features: Feature[] = [
  {
    id: "feature1",
    title: "Smart Task Management & Calendar Integration",
    description:
      "Streamline your workflow with intelligent task prioritization and seamless calendar synchronization. Whether you're managing individual tasks, coordinating team schedules, or tracking project deadlines, our advanced system keeps you organized and productive.",
    benefits: [
      "AI-powered task prioritization",
      "Real-time team calendar sync",
      "Automated deadline reminders",
      "Smart meeting scheduling",
    ],
    image: "/features/tasks.png",
  },
  {
    id: "feature2",
    title: "Advanced Team Collaboration Hub",
    description:
      "Enhance team productivity with comprehensive collaboration tools designed for modern real estate teams. From role-based permissions to performance analytics, manage your entire team from one centralized platform.",
    benefits: [
      "Role-based access control",
      "Real-time performance metrics",
      "Automated workflow management",
      "Integrated communication tools",
    ],
    image: "/features/team-manager.png",
  },
  {
    id: "feature3",
    title: "Complete Client Relationship Management",
    description:
      "Build stronger client relationships with our comprehensive CRM system. Track every interaction, manage documents, and segment clients for personalized communication that drives results.",
    benefits: [
      "360-degree client profiles",
      "Complete interaction history",
      "Smart document management",
      "Advanced client segmentation",
    ],
    image: "/features/deals.png",
  },
  {
    id: "feature4",
    title: "Intelligent Property Management Suite",
    description:
      "Revolutionize your property management with automated systems that handle everything from listings to maintenance. Our comprehensive suite ensures nothing falls through the cracks.",
    benefits: [
      "Automated listing management",
      "Predictive maintenance tracking",
      "Smart document organization",
      "Real-time property analytics",
    ],
    image: "/features/property.png",
  },
  {
    id: "feature5",
    title: "AI-Powered Lead Management System",
    description:
      "Transform prospects into clients with intelligent lead scoring and automated nurturing workflows. Our system identifies high-value leads and guides them through your sales funnel automatically.",
    benefits: [
      "Smart lead scoring algorithms",
      "Automated nurturing sequences",
      "Visual pipeline management",
      "Conversion optimization tools",
    ],
    image: "/features/leads.png",
  },
  {
    id: "feature6",
    title: "Professional Marketing Content Builder",
    description:
      "Create stunning marketing materials that reflect your brand with our AI-assisted design tools. From brochures to social media content, produce professional materials in minutes, not hours.",
    benefits: [
      "AI-powered design suggestions",
      "Brand consistency management",
      "Multi-format content creation",
      "Performance tracking analytics",
    ],
    image: "/features/brochure-builder.png",
  },
  {
    id: "feature7",
    title: "Email Campaign System",
    description:
      "Powerful email marketing platform with advanced automation capabilities. Create, send, and track email campaigns that convert prospects into clients with intelligent targeting and personalization.",
    benefits: [
      "Drag-and-drop email builder",
      "Advanced automation workflows",
      "A/B testing capabilities",
      "Detailed analytics dashboard",
    ],
    image: "/features/email-campaigns.png",
  },
  {
    id: "feature8",
    title: "Professional Page Builder",
    description:
      "Create stunning property listings and landing pages with our intuitive drag-and-drop builder. No coding required - just professional results that convert visitors into leads.",
    benefits: [
      "Drag-and-drop interface",
      "Mobile-responsive templates",
      "SEO optimization tools",
      "Custom domain support",
    ],
    image: "/features/page-builder.png",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Features</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Maximize Efficiency with Smarter
              <br />
              <span className="text-blue-600">Real Estate Management</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              AvenCRM streamlines your workflow with speed, security, and seamless collaboration. Whether you're working
              remotely, scaling your team, or managing confidential files, our advanced tools keep you organized,
              enhance teamwork, and safeguard your data.
            </motion.p>
          </div>
        </section>

        {/* Features Sections */}
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 last:mb-0 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute -inset-8 bg-gradient-to-br from-blue-100/50 to-purple-100/30 rounded-3xl blur-2xl opacity-60" />

                    {/* Main image container */}
                    <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={feature.image || "/placeholder.svg?height=600&width=800"}
                          alt={feature.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-blue-50">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-16 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/30 opacity-50" />

              <div className="relative z-10">
                {/* Logo/Brand */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <span className="text-3xl font-bold text-gray-900">
                    <span className="text-blue-600">Aven</span>CRM
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Ready to Transform Your
                  <br />
                  Real Estate Business?
                </h2>

                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of real estate professionals who have already revolutionized their workflow with
                  AvenCRM. Start your free trial today and experience the difference.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-200 bg-white hover:-translate-y-0.5"
                  >
                    Schedule a Demo
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
