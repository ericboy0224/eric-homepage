"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const gradientVariants = {
    animate: {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["50%", "50%", "0%", "0%", "50%"],
    },
}; 

export default function Divider() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const control = useAnimation();

    useEffect(() => {
        if (isInView) {
            control.start('animate');
        } else {
            control.stop();
        }
    }, [isInView, control]);
    return (
        <div className="flex justify-center items-center mb-20">
            <motion.div
                ref={ref}
                className="w-[50px] h-[50px] bg-custom-gradient"
                animate={control}
                variants={gradientVariants}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: 0,
                }}
            />
        </div>
    );
}