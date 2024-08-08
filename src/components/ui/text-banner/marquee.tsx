'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

const marqueeVariants = {
    animate: {
        x: ["100%", "-100%"], // Move from right to left
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
            },
        },
    },
};

export default function Marquee({ children }: { children: ReactNode }) {
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