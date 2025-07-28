"use client";

import {
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `When I Started Building ArDacity, I wanted to name it 'MuchBetterIdea just to piss off Ankush who made BetterIDEa, Lmao   `;
const words = text.split(" ");

export default function WordScrollReveal() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40 bg-gray-50">
            <div className="container max-w-6xl mx-auto p-[1rem] sm:p-[0rem]">
                <div className="sticky top-28 md:top-32">
                    <div className="text-3xl md:text-6xl lg:text-7xl text-center font-medium mt-10 text-gray-900">
                        <span>Fun Fact About ArDacity&nbsp;</span>
                        <span className="text-gray-300">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-gray-300",
                                        wordIndex < currentWord && "text-gray-900"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-cyan-600 block">
                            btw don't bully Ankush, he is a good guy
                        </span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]"></div>
            </div>
        </section>
    );
}