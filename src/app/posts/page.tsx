import { poppins } from '@/components/ui/fonts'
import { cn } from '@/lib/utils'
import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

import Link from 'next/link'

function PostCard(post: Post) {
    return (
        <div className="mb-8 flex overflow-hidden">
            <div className="w-2 rounded-l-lg bg-gradient-to-b from-[#eea2a2] via-[#bbc1bf] to-[#7ac5d8]"></div>
            <div className="flex-grow p-6 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300">
                <h2 className="mb-2 text-xl font-semibold">
                    <Link href={post.url} className="text-foreground hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </h2>
                <time dateTime={post.date} className="mb-2 block text-sm text-muted-foreground">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <div className="text-sm text-foreground/80" dangerouslySetInnerHTML={{ __html: post.body.html }} />
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <div className="mx-auto max-w-xl py-8">
            <h1 className={cn("mb-8 text-center text-2xl font-bold", poppins.className)}>Posts</h1>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}