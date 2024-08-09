'use client';
import { useInView, motion } from "framer-motion";
import { useResizeDetector } from "react-resize-detector";
import Heading from "../inview/text/heading";
import { useEffect, useRef } from "react";
import Description from "../inview/text/description";

export type HeadingVideoProps = {
    heading: string;
    content: string;
    videoSrc: string;
    isReversed?: boolean;
}

export default function HeadingVideo({ heading, content, videoSrc, isReversed = false }: HeadingVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref: containerRef, width } = useResizeDetector();
    // const isInView = useInView(videoRef, { once: true });

    const isNarrow = width ? width < 768 : false;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio === 1) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 1.0 }
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
                <p>{content}</p>
            </motion.div>
            <motion.div
                className={`w-full md:w-1/2  border rounded-lg ${isReversed && !isNarrow ? 'order-1' : 'order-2'}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <video
                    ref={videoRef}
                    className="w-full h-auto"
                    muted
                    playsInline
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </div>
    );
}