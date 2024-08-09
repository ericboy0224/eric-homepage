import HeadingVideo from '@/components/ui/video/heading-video';

export default function MoreSection() {
    return (
        <>
            <HeadingVideo heading="Encourage people to become engineers" content="People are usually scared of starting something new. Just start and you will see the magic!" videoSrc="/videos/becoming-engineer.mov" />
            <HeadingVideo isReversed heading="How to get closer to your teammates in a remote team" content="Distance is not a problem when you use a great attitude and a lot of communication." videoSrc="/videos/remote-work.mov" />
            <HeadingVideo heading="Understand, then speak" content="Misunderstandings are common in life. Listen first, then speak." videoSrc="/videos/listen-first.mov" />
        </>
    )
}