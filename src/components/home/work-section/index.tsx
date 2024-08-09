import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

import SaviahSection from "./saviah";
import SyscomSection from "./syscom";

export default function WorkSection() {
    return <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={45}>
            <SaviahSection />
        </ResizablePanel>
        <ResizablePanel defaultSize={45}>
            <SyscomSection />
        </ResizablePanel>
    </ResizablePanelGroup>
}