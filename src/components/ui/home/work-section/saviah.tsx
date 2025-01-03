import { WorkItem } from "./work-item";

export default function SaviahSection() {
    return (
        <WorkItem
            title="Saviah5GC CMS"
            description="Featured in major tech media for developing private network solutions. Led the development of enterprise-scale applications and frontend architecture."
            image="/images/saviah.png"
            technologies={["React", "Next.js", "Go", "MongoDB"]}
            link="/works/saviah"
            featured={true}
        />
    );
}