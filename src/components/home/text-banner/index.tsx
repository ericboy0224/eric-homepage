import Description from "../../ui/inview/text/description";
import Heading from "../../ui/inview/text/heading";
import BannerBackground from "./banner-background";

export default function Banner() {
    return (
        <BannerBackground>
            <div className="flex flex-col h-full">
                <div className="flex-grow text-start">
                    <Heading pulse={0}>
                        Hi, I'm Eric
                    </Heading>
                    <Heading pulse={1}>
                        A Full-stack Developer Based in Taipei
                    </Heading>
                </div>
                <div className="flex justify-end items-center">
                    <Description pulse={2}> + </Description>
                    <Heading pulse={2}>
                        3
                    </Heading>
                </div>
                <div className="text-end">
                    <Description pulse={3}>Years of Experience</Description>
                    <Description pulse={3}>Professional Developer</Description>
                </div>
            </div>
        </BannerBackground>
    )
}