"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const gradientVariants = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 15,
            ease: "linear",
            repeat: Infinity,
        },
    },
};

const BannerBackground = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            className="p-10 h-full w-full bg-gradient-to-r from-[#eea2a2] via-[#bbc1bf] to-[#7ac5d8]"
            style={{
                backgroundSize: '200% 200%',
            }}
            variants={gradientVariants}
            animate="animate"
        >
            {children}
        </motion.div>
    );
};

export default BannerBackground;