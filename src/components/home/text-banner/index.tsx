import Description from "../../ui/inview/text/description";
import Heading from "../../ui/inview/text/heading";
import { ResizablePanel, ResizablePanelGroup } from "../../ui/resizable";
import BannerBackground from "./banner-background";

export default function Banner() {

    return (
        <BannerBackground>
            <ResizablePanelGroup className="text-end" direction="vertical">
                <ResizablePanel className="text-start" defaultSize={60}>
                    <Heading pulse={0}>
                        Hi, I'm Eric
                    </Heading>
                    <Heading pulse={1}>
                        A Full-stack Developer Based in Taipei
                    </Heading>
                </ResizablePanel>
                <ResizablePanel defaultSize={15} >
                    <ResizablePanelGroup direction="horizontal">
                        <ResizablePanel>
                            <Description pulse={2}> + </Description>
                        </ResizablePanel>
                        <Heading pulse={2}>
                            3
                        </Heading>
                    </ResizablePanelGroup>
                </ResizablePanel>
                <ResizablePanel defaultSize={45}>
                    <Description pulse={3}>Years of Experience</Description>
                    <Description pulse={3}>Professional Developer</Description>
                </ResizablePanel>
            </ResizablePanelGroup>
        </BannerBackground>
    )
}