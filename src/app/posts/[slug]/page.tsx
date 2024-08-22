// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostHeader from '@/components/ui/post-header'
import { cn } from '@/lib/utils'
import { poppins } from '@/components/ui/fonts'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto w-full py-8">
      <div className="mb-8 text-center">
        <PostHeader title={post.title} />
        <time dateTime={post.date} className={cn("mb-1 text-xs text-gray-600", poppins.className)}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}

export default PostLayout