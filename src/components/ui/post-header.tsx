import Heading from "@/components/ui/inview/text/heading";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import BannerBackground from "./home/text-banner/banner-background";

interface PostHeaderProps {
    title: string;
}

export default function PostHeader({ title }: PostHeaderProps) {
    return (
        <div className="h-[300px] mb-10">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={50} className="flex items-center justify-center">
                    <Heading>{title}</Heading>
                </ResizablePanel>
                <ResizablePanel defaultSize={50}>
                    <BannerBackground />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}