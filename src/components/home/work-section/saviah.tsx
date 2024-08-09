import SaviahAchievement from "@/components/achievements/saviah-achievement";

import { WorkItem } from "./work-item";

export default function SaviahSection() {
    return (
        <WorkItem
            company="Saviah"
            logoSrc="/images/saviah.png"
        >
            <SaviahAchievement />
        </WorkItem>
    );
}