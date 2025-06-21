"use client";

import logoImage from "@/assets/images/logo.svg";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "Pricing", href: "#" },
    { label: "Features", href: "#pricing" },
    { label: "Insights", href: "#integrations" },
    // { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

       
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50
                
              ">
                <div className="container max-w-5xl">
                    <div className="border border-gray-200 rounded-[27px] lg:rounded-full bg-white/70 backdrop-blur shadow-sm">
                        <figure className="grid grid-cols-2 lg:grid-cols-3  py-2 lg:px-2 px-4  items-center ">
                            <div>
                                <div className="text-2xl font-bold text-cyan-600 px-5">
                                    AvenPing
                                </div>
                            </div>
                            <div className="hidden lg:flex justify-center items-center ">
                                <nav className="flex gap-6 font-medium text-gray-700">
                                    {navLinks.map((each) => (
                                        <a href={each.href} key={each.href} className="hover:text-cyan-600 transition-colors">
                                            {each.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden"
                                >
                                    {!isOpen ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            animate={{
                                                opacity: isOpen ? 0 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Menu
                                                className="text-gray-700"
                                                size={30}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: isOpen ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <X
                                                className="text-gray-700"
                                                size={30}
                                            />
                                        </motion.div>
                                    )}
                                </button>
                                <Link href="/login">
                                    <Button
                                        variant="secondary"
                                        className="hidden lg:inline-flex items-center"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button
                                        variant="primary"
                                        className="hidden lg:inline-flex items-center"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </figure>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.figure
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden lg:hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a key={link.href} href={link.href} className="text-gray-700 hover:text-cyan-600 transition-colors">
                                                {link.label}
                                            </a>
                                        ))}
                                        <Link href="/login" className="w-3/4">
                                            <Button
                                                className="w-full"
                                                variant="secondary"
                                            >
                                                Log In
                                            </Button>
                                        </Link>
                                        <Link href="/signup" className="w-3/4">
                                            <Button
                                                className="w-full"
                                                variant="primary"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.figure>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px]"></div>
        </>
    );
}