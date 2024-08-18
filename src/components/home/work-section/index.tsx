import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

import SaviahSection from "./saviah";
import SyscomSection from "./syscom";

export default function WorkSection() {
    return <ResizablePanelGroup direction="vertical" className="space-y-2">
        <ResizablePanel defaultSize={50}>
            <SaviahSection />
        </ResizablePanel>
        <ResizablePanel defaultSize={50}>
            <SyscomSection />
        </ResizablePanel>
    </ResizablePanelGroup>
}