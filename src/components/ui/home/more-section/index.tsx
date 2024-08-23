import HeadingVideo, { HeadingVideoProps } from '@/components/ui/video/heading-video';

const videoData: HeadingVideoProps[] = [
    {
        heading: "Embrace Engineering",
        content: "Overcome fear of new beginnings. Take the first step and witness the transformation.",
        videoSrc: "/videos/becoming-engineer.mov",
        posterSrc: "/images/becoming-engineer-poster.jpg",
    },
    {
        heading: "Bridging Remote Teams",
        content: "Foster connection through proactive communication and positive attitudes.",
        videoSrc: "/videos/remote-work.mov",
        posterSrc: "/images/remote-work-poster.jpg",
        isReversed: true,
    },
    {
        heading: "Listen Before You Speak",
        content: "Cultivate understanding by prioritizing active listening in all interactions.",
        videoSrc: "/videos/listen-first.mov",
        posterSrc: "/images/listen-first-poster.jpg",
    },
];

export default function MoreSection() {
    return (
        <div className='flex flex-col'>
            {videoData.map((video, index) => (
                <div key={index} className='min-h-[800px]'>
                    <HeadingVideo key={index} {...video} />
                </div>
            ))}
        </div>
    )
}