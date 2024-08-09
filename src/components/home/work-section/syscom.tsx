import SyscomAchievement from "@/components/achievements/syscom-achievement";

import { WorkItem } from "./work-item";

export default function SyscomSection() {
    return (
        <WorkItem
            company="Syscom"
            logoSrc="/images/syscom.png"
        >
            <SyscomAchievement />
        </WorkItem>
    );
}