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
          <Banner
            headers={['Fullstack Developer', 'Based in Taipei', '3 Years of Experience']}
            marqueeTexts={['Go', 'TypeScript', 'React.js', 'Next.js', 'Tailwind', 'SCSS', 'D3.js']}
          />
        </div>

      </ResizablePanel>
      {/* <ResizableHandle /> */}
      {/* <ResizablePanel defaultSize={50}>

      </ResizablePanel> */}
    </ResizablePanelGroup>
  );
}