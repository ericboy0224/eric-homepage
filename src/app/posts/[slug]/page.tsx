import { poppins } from '@/components/ui/fonts'
import PostHeader from '@/components/ui/post-header'
import { cn } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import path from 'path'
import rehypeHighlight from 'rehype-highlight'
import rehypePrism from 'rehype-prism-plus'

import 'highlight.js/styles/github-dark.css'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const mdxComponents: MDXComponents = {
  h1: (props) => <h1 {...props} className="text-3xl font-bold" />,
  h2: (props) => <h2 {...props} className="text-2xl font-bold" />,
  a: (props) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />,
  h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-4">{children}</h3>,
  p: ({ children }) => <p className="mb-6">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-6">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-6">{children}</ol>,
  li: ({ children }) => <li className="mb-3">{children}</li>,
  code: ({ children }) => <code className="bg-secondary text-secondary-foreground px-1 py-0.5 rounded">{children}</code>,
  pre: ({ children }) => <pre className="bg-secondary text-secondary-foreground p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
  option: ({ children }) => <option className="bg-secondary text-secondary-foreground p-4 rounded-lg overflow-x-auto mb-6">{children}</option>,
  highlight: ({ children }) => <span className="text-red-500">{children}</span>,
  img: ({ src, alt, ...props }) => {
    const imageSrc = src?.startsWith('/') ? src : path.join('/images', src || '')
    return (
      <Image 
        src={imageSrc} 
        alt={alt || ''} 
        className="mb-6 mx-auto" // Added mx-auto for centering
        width={500}
        height={500} 
        {...props} 
      />
    )
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const MDXContent = useMDXComponent(post.body.code, {
    rehypePlugins: [
      [rehypeHighlight, { detect: true, ignoreMissing: true }],
      [rehypePrism, { showLineNumbers: true }]
    ]
  });

  return (
    <article className="mx-auto w-full py-8">
      <div className="mb-8 text-center">
        <PostHeader title={post.title} />
        <time dateTime={post.date} className={cn("mb-1 text-xs text-gray-600", poppins.className)}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="mdx-content">
        <MDXContent components={mdxComponents}/>
      </div>
    </article>
  )
}

export default PostLayout