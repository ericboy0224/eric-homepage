'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Marquee({ children, reverse }: { children: ReactNode, reverse?: boolean }) {
    const marqueeVariants = {
        animate: {
            x: ["100%", "-100%"], // Move from right to left
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                    reverse: reverse,
                },
            },
        },
    };

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <motion.div
                className="inline-block"
                variants={marqueeVariants}
                animate="animate"
            >
                {children}
            </motion.div>
        </div>
    )
}