import { ResizablePanelGroup, ResizablePanel } from "../resizable";
import BannerBackground from "./banner-background";
import Heading from "../inview/text/heading";
import Description from "../inview/text/description";


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
                <ResizablePanel>
                    <Description pulse={3}>Years of Experience</Description>
                    <Description pulse={3}>Professional Developer</Description>
                </ResizablePanel>
            </ResizablePanelGroup>
        </BannerBackground>
    )
}