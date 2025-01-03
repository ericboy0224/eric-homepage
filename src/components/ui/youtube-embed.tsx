interface YouTubeEmbedProps {
    videoId: string;
}

export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
    return (
        <div className="relative w-full pb-[56.25%] my-8">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
        </div>
    );
} 