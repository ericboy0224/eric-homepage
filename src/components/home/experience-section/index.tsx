import { poppins } from "@/components/ui/fonts";
import Description from "@/components/ui/inview/text/description";
import { cn } from "@/lib/utils";

import ExperienceItem from "./experience-item";

export default function ExperienceSection() {
    return (
        <Description>
            <ExperienceItem
                company="Saviah Technologies"
                position="Full-stack Engineer"
                technologies="React・Next.js・Vite・Go・MongoDB・CI/CD・Git・e2e Test・Unit Test"
                period="2022 - present"
            />
            <ExperienceItem
                company="Syscom"
                position="Front-end Engineer"
                technologies="Angular・D3.js・TypeScript・SCSS・Java"
                period="2021 - 2022"
            />
            <ExperienceItem
                company="National Taipei University of Technology"
                position="Student"
                technologies="Computer Science・Electrical Engineering"
                period="2017 - 2021"
            />
        </Description>
    )
}