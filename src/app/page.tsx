import ExperienceSection from '@/components/home/experience-section';
import MoreSection from '@/components/home/more-section';
import Banner from '@/components/home/text-banner';
import WorkSection from '@/components/home/work-section';
import Divider from '@/components/ui/divider';
import Heading from '@/components/ui/inview/text/heading';

export default function Home() {
  return (
    <div className='text-center'>
      <section className="mb-20 md:h-[calc(100vh-9.5rem)] h-[calc(100vh-5rem)]">
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
      <section className="mb-5 h-[700px]">
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
      <section className="mb-20 h-[calc(100vh-9.5rem)]">
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
      <section className="h-auto">
        <Heading>Try to make life easier</Heading>
        <div className="space-y-20">
          <MoreSection />
        </div>
      </section>
    </div>
  );
}