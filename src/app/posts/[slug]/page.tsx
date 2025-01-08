import { poppins } from '@/components/ui/fonts'
import PostHeader from '@/components/ui/post-header'
import { YouTubeEmbed } from '@/components/ui/youtube-embed'
import { cn } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { Clock } from 'lucide-react'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import path from 'path'
import React from 'react'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Eric'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    }
  }
}

const mdxComponents: MDXComponents = {
  h1: (props) => <h1 {...props} className="text-4xl font-bold mb-6 mt-10" />,
  h2: (props) => <h2 {...props} className="text-3xl font-bold mb-4 mt-8" />,
  h3: (props) => <h3 {...props} className="text-2xl font-semibold mb-4 mt-6" />,
  h4: (props) => <h4 {...props} className="text-xl font-semibold mb-3 mt-5" />,
  p: (props) => {
    const children = React.Children.toArray(props.children);
    if (children.length === 1) {
      const child = children[0];
      // Handle direct YouTube URL text
      if (typeof child === 'string' && child.match(/^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)) {
        const videoId = child.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1];
        return videoId ? <YouTubeEmbed videoId={videoId} /> : <p {...props} className="mb-6 leading-7 text-lg" />;
      }
      // Handle YouTube link wrapped in an anchor tag
      if (React.isValidElement(child) && child.type === 'a') {
        const href = child.props.href || '';
        if (href.match(/^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)) {
          const videoId = href.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1];
          return videoId ? <YouTubeEmbed videoId={videoId} /> : child;
        }
      }
    }
    return <p {...props} className="mb-6 leading-7 text-lg" />;
  },
  a: (props) => {
    const href = props.href || '';
    return (
      <a
        {...props}
        className="text-primary underline decoration-primary decoration-2 underline-offset-4 hover:text-primary/80 transition-colors"
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      />
    );
  },
  ul: (props) => <ul {...props} className="list-disc list-inside mb-6 space-y-2" />,
  ol: (props) => <ol {...props} className="list-decimal list-inside mb-6 space-y-2" />,
  li: (props) => <li {...props} className="mb-1 text-lg" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-4 border-primary pl-4 italic my-6 text-lg text-muted-foreground"
    />
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    return isInline ? (
      <code {...props} className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-sm">
        {children}
      </code>
    ) : (
      <code {...props} className={cn("grid", className)}>
        {children}
      </code>
    );
  },
  pre: (props) => (
    <pre
      {...props}
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 dark:bg-zinc-900"
    />
  ),
  img: ({ src, alt, ...props }) => {
    const imageSrc = src?.startsWith('/') ? src : path.join('/images', src || '')
    return (
      <figure className="my-8">
        <Image
          src={imageSrc}
          alt={alt || ''}
          className="rounded-lg mx-auto"
          loading="lazy"
          width={800}
          height={500}
          quality={90}
        />
        {alt && <figcaption className="text-center text-sm text-muted-foreground mt-2">{alt}</figcaption>}
      </figure>
    )
  },
  table: (props) => (
    <div className="overflow-x-auto mb-6">
      <table {...props} className="w-full border-collapse text-left text-base min-w-full divide-y divide-gray-300 dark:divide-gray-700" />
    </div>
  ),
  th: (props) => (
    <th
      {...props}
      className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-gray-100"
    />
  ),
  td: (props) => (
    <td {...props} className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300" />
  ),
  hr: () => <hr className="my-8 border-muted" />,
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const MDXContent = useMDXComponent(post.body.code)
  const readingTime = Math.ceil(post.body.raw.split(/\s+/g).length / 200)

  return (
    <article className="mx-auto max-w-4xl px-6 py-8" itemScope itemType="http://schema.org/BlogPosting">
      <meta itemProp="author" content="Eric" />
      <meta itemProp="datePublished" content={post.date} />

      <PostHeader
        title={post.title}
        description={post.description}
      />

      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
        <time dateTime={post.date} className={cn(poppins.className)} itemProp="datePublished">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <span className="text-muted-foreground">•</span>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{readingTime} min read</span>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="mdx-content prose prose-zinc dark:prose-invert max-w-none" itemProp="articleBody">
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </article>
  )
}

export default PostLayout