import Heading from "@/components/ui/inview/text/heading";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

import BannerBackground from "./home/text-banner/banner-background";

interface PostHeaderProps {
    title: string;
    description?: string;
    date?: string;
    readingTime?: number;
}

export default function PostHeader({ title, description, date, readingTime }: PostHeaderProps) {
    return (
        <header className="relative h-[300px] mb-10">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={50} className="flex items-center justify-center">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tight" itemProp="headline">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto" itemProp="description">
                                {description}
                            </p>
                        )}
                    </div>
                </ResizablePanel>
                <ResizablePanel defaultSize={50}>
                    <BannerBackground />
                </ResizablePanel>
            </ResizablePanelGroup>
        </header>
    );
}