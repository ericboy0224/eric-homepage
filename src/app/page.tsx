import ExperienceSection from '@/components/home/experience-section';
import Banner from '@/components/home/text-banner';
import Divider from '@/components/ui/divider';
import Heading from '@/components/ui/inview/text/heading';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function Home() {
  return (
    <div className='text-center'>
      <section className="mb-20 h-[calc(100vh-9.5rem)]">
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
      <section className="mb-20 h-[calc(100vh-9.5rem)]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={10}>
            <Heading>Experience</Heading>
          </ResizablePanel>
          <ResizablePanel defaultSize={80}>
            <ExperienceSection />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  );
}