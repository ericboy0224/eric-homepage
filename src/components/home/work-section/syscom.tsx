import { WorkItem } from "./work-item";

export default function SyscomSection() {
    return (
        <WorkItem
                company="Syscom"
                logoSrc="/images/syscom.png"
            >
                <ul className="mb-4 space-y-3">
                    <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Rebuilt 4-year-old web application in Angular and Rx.js with full user experience.</li>
                    <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Built a logic for a report previewer with virtual scroll and improved the loading speed by 90%.</li>
                    <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Built a logic for a report downloader (Node. js) and improved the download speed by 30%.</li>
                    <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Built data visualization components with d3.js.</li>
                </ul>
            </WorkItem>
    );
}