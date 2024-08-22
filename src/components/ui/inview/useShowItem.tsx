'use client'

import { useAnimation, useInView, motion } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

export const useShowItem = (children: ReactNode, pulse?: number) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }
        if (isInView) {
            setTimeout(() => {
                controls.start({ opacity: 1 })
                setInit(true);
            }, (pulse ?? 0) * 500)
        } else {
            controls.start({ opacity: 0 });
        }
    }, [controls, isInView, init, setInit, pulse]);

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