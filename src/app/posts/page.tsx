'use client'
import { poppins } from '@/components/ui/fonts'
import { cn } from '@/lib/utils'
import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'

function PostCard(post: Post & { isLatest?: boolean }) {
    return (
        <div className={cn("mb-8 overflow-hidden border rounded-md group", { "col-span-full bg-sky-500": post.isLatest })}>
            <Link href={post.url} className="text-foreground hover:text-primary transition-colors">
                <div className="flex">
                    <div className={cn("rounded-l-lg transition-all duration-300 ", { "w-2 bg-gradient-to-b from-[#eea2a2] via-[#bbc1bf] to-[#7ac5d8] group-hover:w-3": !post.isLatest, "w-0": post.isLatest })}></div>
                    <div className={cn("flex-grow p-6 bg-secondary/10 transition-all group-hover:bg-secondary/20 duration-300", { "text-background": post.isLatest })}>
                        <div className="flex justify-between items-start">
                            <h2 className={cn("mb-2 text-xl font-extrabold", { "text-4xl": post.isLatest })}>
                                {post.title}
                            </h2>
                            {post.isLatest && (
                                <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full">
                                    Latest
                                </span>
                            )}
                        </div>
                        <time dateTime={post.date} className="mb-2 block text-sm">
                            {format(parseISO(post.date), 'LLLL d, yyyy')}
                        </time>
                        <div className={cn("text-sm", { "text-foreground/80": !post.isLatest, "text-background": post.isLatest })} dangerouslySetInnerHTML={{ __html: post.description.slice(0, 200) + '...' }} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function Posts() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    // Collect all tags and count their occurrences
    const tagCounts = posts.reduce((acc, post) => {
        post.tags?.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
    }, {} as Record<string, number>);

    // Sort tags by count (descending)
    const sortedTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a)
        .map(([tag]) => tag);

    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = selectedTag
        ? posts.filter(post => post.tags?.includes(selectedTag))
        : posts;

    return (
        <div className="mx-auto w-full py-8">
            <h1 className={cn("mb-8 text-center text-2xl font-bold", poppins.className)}>Posts</h1>
            <div className="mb-6 flex flex-wrap justify-center gap-2">
                <button
                    className={cn(
                        "px-3 py-1 rounded-full text-sm",
                        selectedTag === null ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    )}
                    onClick={() => setSelectedTag(null)}
                >
                    All
                </button>
                {sortedTags.map(tag => (
                    <button
                        key={tag}
                        className={cn(
                            "px-3 py-1 rounded-full text-sm",
                            selectedTag === tag ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                        )}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag} ({tagCounts[tag]})
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, idx) => (
                    <PostCard key={idx} {...post} isLatest={idx === 0} />
                ))}
            </div>
        </div>
    )
}