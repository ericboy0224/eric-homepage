import Description from "@/components/ui/inview/text/description";
import ExperienceItem from "./experience-item";

const experiences = [
    {
        company: "Saviah Technologies",
        position: "Full-stack Engineer",
        technologies: ["React", "Next.js", "Go", "MongoDB"],
        period: "2022 - present",
        highlights: "Building scalable web applications and microservices"
    },
    {
        company: "Syscom",
        position: "Front-end Engineer",
        technologies: ["Angular", "TypeScript", "D3.js"],
        period: "2021 - 2022",
        highlights: "Data visualization and enterprise applications"
    },
    {
        company: "NTUT",
        position: "Bachelor",
        technologies: ["Computer Science", "Electrical Engineering"],
        period: "2017 - 2021",
        highlights: "Focus on software engineering and system design"
    }
];

export default function ExperienceSection() {
    return (
        <Description>
            <div className="grid gap-8">
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={exp.company}
                        company={exp.company}
                        position={exp.position}
                        technologies={exp.technologies.join(" · ")}
                        period={exp.period}
                    />
                ))}
            </div>
        </Description>
    );
}