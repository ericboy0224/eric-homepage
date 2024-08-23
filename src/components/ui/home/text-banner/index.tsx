import Description from "../../inview/text/description";
import Heading from "../../inview/text/heading";
import BannerBackground from "./banner-background";

export default function Banner() {
    return (
        <BannerBackground>
            <div className="flex flex-col h-full">
                <div className="flex-grow text-start">
                    <Heading pulse={0}>
                        Hi, I'm Eric Lin
                    </Heading>
                    <Heading pulse={0}>
                        Full-stack Developer & Software Engineer
                    </Heading>
                    <Description pulse={1}>
                        Specializing in React, Next.js, Go, and MongoDB
                    </Description>
                </div>
                <div className="flex justify-end items-center">
                    <Description pulse={1}> + </Description>
                    <Heading pulse={1}>
                        3
                    </Heading>
                </div>
                <div className="text-end">
                    <Description pulse={2}>Years of Experience</Description>
                    <Description pulse={2}>Professional Full-stack Developer</Description>
                </div>
            </div>
        </BannerBackground>
    )
}