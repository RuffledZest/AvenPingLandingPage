"use client";

import Button from "@/components/Button";
import designExample1 from "@/assets/images/img1.png";
import designExample2 from "@/assets/images/img2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 200, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [200, 220, 200], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section className="py-20 md:py-24 overflow-x-clip bg-gradient-to-b from-cyan-100 via-purple-100 to-white 
        w-full relative lg:h-[calc(100vh)] 
        ">
            <div className="container relative ">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 400, x: 0 }}
                    className="absolute inset-0 top-[30rem] hidden lg:block pointer-events-none backdrop-blur-lg"
                    style={{ zIndex: 1 }}
                >
                    <Image
                        draggable={false}
                        src={designExample1}
                        alt="WhatsApp business example 1"
                        className="rounded-lg shadow-lg pointer-events-none"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            border: "4px solid transparent",
                            borderRadius: "0.5rem",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                            backgroundImage:
                                "linear-gradient(to bottom right, rgba(236,254,255,0.7), rgba(224,242,254,0.6) 60%, rgba(237,233,254,0.6) 100%), linear-gradient(120deg, rgba(34,211,238,0.3), rgba(139,92,246,0.3), rgba(168,85,247,0.3))",
                        }}
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute top-[32rem] left-56 hidden lg:block"
                    style={{ zIndex: 2 }}
                >
                    <Pointer name="Karan" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    ref={rightDesignScope}
                    className="absolute -right-[35rem] top-[10rem] hidden lg:block"
                    drag
                    style={{ zIndex: 1 }}
                >
                    <Image
                        draggable={false}
                        src={designExample2}
                        alt="WhatsApp business example 2"
                        className="rounded-lg shadow-lg"
                        style={{ maxWidth: "50%", height: "auto" }}
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 200 }}
                    className="absolute -top-4 right-80 hidden lg:block"
                    style={{ zIndex: 2 }}
                >
                    <Pointer color="blue" name="Vib" />
                </motion.div>

                <div className="flex justify-center" style={{ zIndex: 10, position: "relative" }}>
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full text-white font-semibold">
                        🚀 Trusted by 10,000+ businesses
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-gray-900" style={{ zIndex: 10, position: "relative" }}>
                    WhatsApp Business, <span className="text-cyan-600">simplified</span>
                </h1>
                <p className="text-center text-xl text-gray-600 mt-8 max-w-2xl mx-auto" style={{ zIndex: 10, position: "relative" }}>
                    Streamline your WhatsApp business communications with powerful automation, analytics, and customer management tools.
                </p>
                <form className="mx-auto flex border border-gray-300 rounded-full p-2 mt-8 max-w-lg bg-white shadow-sm" style={{ zIndex: 10, position: "relative" }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-1 w-full text-gray-900 placeholder-gray-500"
                    />
                    <Link href="/signup">
                        <Button
                            size="sm"
                            className="whitespace-nowrap"
                            type="button"
                            variant="primary"
                        >
                            Get Started
                        </Button>
                    </Link>
                </form>
            </div>
        </section>
    );
}