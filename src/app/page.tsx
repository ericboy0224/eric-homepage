import { poppins } from '@/components/ui/fonts';
import IntroPic from '@/components/ui/intro-pic';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Banner from '@/components/ui/text-banner';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="h-[600px]">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>
          <h1 className={cn("text-6xl font-bold text-center", poppins.className)}>JIA-HAO, LIN</h1>
        </ResizablePanel>
        <ResizablePanel defaultSize={80} className=" border rounded-lg">
          <Banner />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}