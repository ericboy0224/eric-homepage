"use client";

import { motion } from "framer-motion";

export default function IntroPic() {
    return (
        <motion.div
            className="w-[200px] h-[200px] bg-red-200"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
            }}
        />
    );
}