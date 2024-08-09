import ExperienceSection from '@/components/home/experience-section';
import MoreSection from '@/components/home/more-section';
import Banner from '@/components/home/text-banner';
import WorkSection from '@/components/home/work-section';
import Divider from '@/components/ui/divider';
import Heading from '@/components/ui/inview/text/heading';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function Home() {
  return (
    <div className='text-center'>
      <section className="mb-20 md:h-[calc(100vh-9.5rem)] h-[calc(100vh-5rem)]">
        <ResizablePanelGroup className='max-h-[800px]' direction="vertical">
          <ResizablePanel defaultSize={20}>
            <Heading>JIA-HAO, LIN</Heading>
          </ResizablePanel>
          <ResizablePanel defaultSize={80} className="border rounded-lg">
            <Banner />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
      <Divider />
      <section className="mb-5 h-[700px]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={10}>
            <Heading>Experience</Heading>
          </ResizablePanel>
          <ResizablePanel defaultSize={90}>
            <ExperienceSection />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
      <Divider />
      <section className="mb-20 h-[calc(100vh-9.5rem)]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={10}>
            <Heading>Works</Heading>
          </ResizablePanel>
          <ResizablePanel defaultSize={90}>
            <WorkSection />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
      <Divider />
      <section className="md:h-[250vh] h-[450vh]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={10}>
            <Heading>Try to make life easier</Heading>
          </ResizablePanel>
          <ResizablePanel defaultSize={90}>
            <MoreSection />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  );
}