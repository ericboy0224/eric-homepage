"use client";
import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

const gradientVariants = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 15,
            ease: "linear",
            repeat: 0,
        },
    },
};

const BannerBackground = ({ children }: { children: ReactNode }) => {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            controls.start("animate");
        } else {
            controls.stop();
        }
    }, [controls, isInView]);

    return (
        <motion.div
            className="p-10 h-full w-full bg-gradient-to-r from-[#eea2a2] via-[#bbc1bf] to-[#7ac5d8]"
            style={{
                backgroundSize: '200% 200%',
            }}
            ref={ref}
            variants={gradientVariants}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default BannerBackground;