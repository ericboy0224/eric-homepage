import ExperienceSection from '@/components/ui/home/experience-section';
import MoreSection from '@/components/ui/home/more-section';
import Banner from '@/components/ui/home/text-banner';
import WorkSection from '@/components/ui/home/work-section';
import Divider from '@/components/ui/divider';
import Heading from '@/components/ui/inview/text/heading';
import Link from 'next/link';
import SocialMedia from '@/components/ui/social-media';

export default function Home() {
  return (
    <div className='text-center'>
      <section>
        <div className='max-h-[800px] flex flex-col'>
          <div className="flex-none">
            <Heading>JIA-HAO, LIN</Heading>
          </div>
          <div className="flex-grow border rounded-lg">
            <Banner />
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <div className="flex flex-col h-full">
          <div className="flex-none">
            <Heading>Experience</Heading>
          </div>
          <div className="flex-grow">
            <ExperienceSection />
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <div className="flex flex-col h-full">
          <div className="flex-none">
            <Heading>Works</Heading>
          </div>
          <div className="flex-grow">
            <WorkSection />
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <Heading>Try to make life easier</Heading>
        <div className="space-y-20">
          <MoreSection />
        </div>
      </section>
      <section className='flex justify-center'>
        <SocialMedia />
      </section>
    </div>
  );
}