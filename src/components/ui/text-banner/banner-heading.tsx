'use client'
import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { poppins } from '../fonts';


const BannerHeading = ({ text, pulse }: { text: string, pulse?: number }) => {
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
        <motion.h1
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 2 }}
            className={cn("scroll-m-20 text-6xl font-semibold tracking-tight antialiased mb-3", poppins.className)}
        >
            {text}
        </motion.h1>
    );
};

export default BannerHeading;