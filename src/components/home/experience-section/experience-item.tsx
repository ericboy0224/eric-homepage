import { poppins } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
    company: string;
    position: string;
    technologies: string;
    period: string;
}

export default function ExperienceItem({ company, position, technologies, period }: ExperienceItemProps) {
    return (
        <div className="mb-5">
            <h2 className={cn("text-3xl font-semibold mb-2", poppins.className)}>"{company}"・"{position}"</h2>
            <p className={cn("text-sm font-light", poppins.className)}>{technologies}</p>
            <p className={cn("text-md font-light", poppins.className)}>{period}</p>
        </div>
    );
}   