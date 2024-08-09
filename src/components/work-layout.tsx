import BannerBackground from "@/components/home/text-banner/banner-background";
import Heading from "@/components/ui/inview/text/heading";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function WorkLayout({ children, company }: { children: React.ReactNode, company: string }) {
    return (
        <>
            <div className="h-[300px] mb-10">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={50} className="flex items-center justify-center">
                        <Heading>Work - {company}</Heading>
                    </ResizablePanel>
                    <ResizablePanel defaultSize={50}>
                        <BannerBackground></BannerBackground>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <article className="text-center">
                {children}
            </article>
        </>
    );
}