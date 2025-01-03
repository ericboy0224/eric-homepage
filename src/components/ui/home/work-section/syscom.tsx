import { WorkItem } from "./work-item";

export default function SyscomSection() {
    return (
        <WorkItem
            title="Syscom Group"
            description="Recognized for developing innovative data visualization solutions for enterprise clients. Specialized in real-time analytics dashboards."
            image="/images/syscom.png"
            technologies={["Angular", "D3.js", "TypeScript"]}
            link="/works/syscom"
        />
    );
}