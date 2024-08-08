import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Banner from '@/components/ui/text-banner';

export default function Home() {
  return (
    // TODO: add resizable

    // <div>
    //   <IntroPic />
    // </div>
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full rounded-lg border overflow-scroll"
    >
      <ResizablePanel defaultSize={100}>
        <div className='h-[500px]'>
          <Banner />
        </div>

      </ResizablePanel>
    </ResizablePanelGroup>
  );
}