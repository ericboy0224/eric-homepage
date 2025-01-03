import StructuredData from '@/components/StructuredData';
import ExperienceSection from '@/components/ui/home/experience-section';
import WorkSection from '@/components/ui/home/work-section';
import Heading from '@/components/ui/inview/text/heading';
import SocialMedia from '@/components/ui/social-media';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

const sections = [
  {
    id: 'experience',
    title: 'Experience',
    component: ExperienceSection,
  },
  {
    id: 'works',
    title: 'Works',
    component: WorkSection,
  },
];

export default function Home() {
  const latestPost = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  [0];

  return (
    <>
      <StructuredData />
      <div className='max-w-5xl mx-auto px-4 space-y-32'>
        {/* Hero Section */}
        <section className='relative pt-16 md:pt-32 text-center'>
          <div className='absolute inset-0 -z-10'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 blur-3xl' />
          </div>
          <div className='relative space-y-8'>
            <div className='inline-block'>
              <h1 className='bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
                JIA-HAO, LIN
              </h1>
              <div className='h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-400/50 to-transparent' />
            </div>
            <p className='text-lg text-muted-foreground/90 max-w-2xl mx-auto'>
              Full-stack developer crafting modern web experiences with React and Go
            </p>
            <div className='pt-4'>
              <div className="flex justify-center">
                <SocialMedia />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Post */}
        {latestPost && (
          <section className='text-center space-y-8'>
            <Heading>Latest Post</Heading>
            <Link href={latestPost.url} className="block group">
              <div className="bg-secondary/50 rounded-lg p-6 transition-colors hover:bg-secondary">
                <h2 className="text-2xl font-bold mb-2">{latestPost.title}</h2>
                <p className="text-muted-foreground mb-4">{latestPost.description}</p>
                <span className="text-primary underline decoration-primary decoration-2 underline-offset-4">Read more →</span>
              </div>
            </Link>
          </section>
        )}

        {/* Content Sections */}
        {sections.map(({ id, title, component: Component }) => (
          <section key={id} id={id} className='scroll-mt-20 space-y-12'>
            <div className='text-center'>
              <Heading>{title}</Heading>
            </div>
            <Component />
          </section>
        ))}
      </div>
    </>
  );
}