import { WorkItem } from "./work-item";

export default function SaviahSection() {
    return (
        <WorkItem
            company="Saviah"
            logoSrc="/images/saviah.png"
        >
            <ul className="mb-4 space-y-3">
                <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Lead a frontend team of 2+ people.</li>
                <li className="pl-4 border-l-4 border-primary md:text-md text-sm">5x speed up the frontend build time by migrating from Webpack to Vite.</li>
                <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Reduce 30% code by implementing third party library.</li>
                <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Improve 25% test coverage by implementing unit test.</li>
                <li className="pl-4 border-l-4 border-primary md:text-md text-sm">Improve 20% test coverage by implementing end-to-end test.</li>
            </ul>
        </WorkItem>
    );
}

