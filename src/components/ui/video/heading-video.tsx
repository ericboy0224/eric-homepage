'use client';
import { motion } from "framer-motion";
import { useResizeDetector } from "react-resize-detector";
import Heading from "../inview/text/heading";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type HeadingVideoProps = {
    heading: string;
    content: string;
    videoSrc: string;
    posterSrc: string;
    isReversed?: boolean;
}

export default function HeadingVideo({ heading, content, videoSrc, posterSrc, isReversed = false }: HeadingVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref: containerRef, width } = useResizeDetector();
    const [isLoading, setIsLoading] = useState(true);
    const isNarrow = width ? width < 768 : false;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play();
                        setIsLoading(false);
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
            observer.unobserve(video);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col md:flex-row w-full">
            <motion.div
                className={`w-full md:w-1/2 p-4 flex flex-col justify-center items-center ${isReversed && !isNarrow ? 'order-2' : 'order-1'}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading>{heading}</Heading>
                <p className="text-center">{content}</p>
            </motion.div>
            <motion.div
                className={`w-full md:w-1/2 flex items-center justify-center ${isReversed && !isNarrow ? 'order-1' : 'order-2'}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative w-full h-full max-w-[240px] max-h-[135px] md:max-w-[960px] md:max-h-[540px]">
                    {isLoading && (
                        <Image
                            src={posterSrc}
                            alt="Video poster"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    )}
                    <video
                        ref={videoRef}
                        className="w-full h-full object-contain"
                        muted
                        playsInline
                        preload="metadata"
                        poster={posterSrc}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </motion.div>
        </div>
    );
}