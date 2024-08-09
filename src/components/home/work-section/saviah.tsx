import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import Image from "next/image";
import Link from "next/link";

import { WorkItem } from "./work-item";

export default function SaviahSection() {
    return (
        <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
                <WorkItem
                    company="Saviah"
                    companyUrl="https://www.saviah.com/"
                    logoSrc="/images/saviah.png"
                >
                    <p className="mb-10">I'm currently working as a Full-Stack Engineer at Saviah.</p>
                    <ul className="mb-4 space-y-3">
                        <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Lead a frontend team of 2+ people.</li>
                        <li className="pl-4 border-l-4 border-primary md:text-md text-sm">5x speed up the frontend build time by migrating from Webpack to Vite.</li>
                        <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Reduce 30% code by implementing third party library.</li>
                        <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Improve 25% test coverage by implementing unit test.</li>
                        <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Improve 20% test coverage by implementing end-to-end test.</li>
                    </ul>
                </WorkItem>
                <p className="mb-4">
                    You can see me standing from the left hand side :)
                </p>
                <div className="flex justify-center items-center">
                    <Link href="https://money.udn.com/money/story/5635/7312773">
                        <Image src="/images/funding-news.png" alt="Funding Circle" className="rounded-lg" width={300} height={300} />
                    </Link>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}

