'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { poppins } from '../../fonts';
import { useShowItem } from '../useShowItem';

const Heading = ({ children, pulse }: { children: ReactNode, pulse?: number }) => {

    return useShowItem(
        <motion.h1
            className={cn("scroll-m-20 text-6xl font-semibold tracking-tight antialiased mb-3", poppins.className)}
        >
            {children}
        </motion.h1>, pulse
    );
};

export default Heading;