'use client'

import { cn } from "@/lib/utils";
import { useAnimation, useInView, motion } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";
import { poppins } from "../fonts";

export const useShowItem = (children: ReactNode, pulse?: number) => {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                controls.start({ opacity: 1 })
            }, (pulse ?? 0) * 500)
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    );
}