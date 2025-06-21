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
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section className="py-24 overflow-x-clip bg-gradient-to-b from-green-50 to-white">
            <div className="container relative ">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 200, x: -150 }}
                    className="absolute -left-32 top-72 hidden lg:block"
                    drag
                >
                    <Image
                        draggable={false}
                        src={designExample1}
                        alt="WhatsApp business example 1"
                        className="rounded-lg shadow-lg"
                        style={{ maxWidth: "50%", height: "auto" }}
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="Sarah" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    ref={rightDesignScope}
                    className="absolute -right-[40rem] top-[10rem] hidden lg:block"
                    drag
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
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute -top-4 right-80 hidden lg:block"
                >
                    <Pointer color="red" name="Mike" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full text-white font-semibold">
                        🚀 Trusted by 10,000+ businesses
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 text-gray-900">
                    WhatsApp Business, <span className="text-green-600">simplified</span>
                </h1>
                <p className="text-center text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
                    Streamline your WhatsApp business communications with powerful automation, analytics, and customer management tools.
                </p>
                <form className="mx-auto flex border border-gray-300 rounded-full p-2 mt-8 max-w-lg bg-white shadow-sm">
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