import HeadingVideo, { HeadingVideoProps } from '@/components/ui/video/heading-video';

const videoData: HeadingVideoProps[] = [
    {
        heading: "Encourage people to become engineers",
        content: "People are usually scared of starting something new. Just start and you will see the magic!",
        videoSrc: "/videos/becoming-engineer.mov",
        posterSrc: "/images/becoming-engineer-poster.jpg",
    },
    {
        heading: "How to get closer to your teammates in a remote team",
        content: "Distance is not a problem when you use a great attitude and a lot of communication.",
        videoSrc: "/videos/remote-work.mov",
        posterSrc: "/images/remote-work-poster.jpg",
        isReversed: true,
    },
    {
        heading: "Understand, then speak",
        content: "Misunderstandings are common in life. Listen first, then speak.",
        videoSrc: "/videos/listen-first.mov",
        posterSrc: "/images/listen-first-poster.jpg",
    },
];

export default function MoreSection() {
    return (
        <div className='flex flex-col'>
            {videoData.map((video, index) => (
                <div className='min-h-[800px]'>
                    <HeadingVideo key={index} {...video} />
                </div>
            ))}
        </div>
    )
}