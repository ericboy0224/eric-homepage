'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { poppins } from '../../fonts';
import { useShowItem } from '../useShowItem';

const Description = ({ children, pulse }: { children: ReactNode, pulse?: number }) => {

    return useShowItem(
        <motion.span
            className={cn("scroll-m-20 md:text-xl text-lg font-semibold tracking-tight antialiased mb-3", poppins.className)}
        >
            {children}
        </motion.span>, pulse
    );
};

export default Description;