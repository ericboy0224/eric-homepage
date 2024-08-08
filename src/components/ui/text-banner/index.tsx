import BannerBackground from "./banner-background";
import BannerHeading from "./banner-heading";

export default function Banner({ headers, marqueeTexts }: { headers: string[]; marqueeTexts: string[] }) {

    return (
        <BannerBackground>
            <div className="flex flex-col">
                {
                    headers.map((header, i) => (
                        <BannerHeading text={header} pulse={i} key={i} />
                    ))
                }
            </div>
        </BannerBackground>
    )
}