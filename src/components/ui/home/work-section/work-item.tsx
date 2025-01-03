import { poppins } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface WorkProject {
    title: string;
    description: string;
    image: string;
    technologies?: string[];
    link: string;
    featured?: boolean;
}

export function WorkItem({
    title,
    description,
    image,
    technologies = [],
    link,
    featured = false
}: WorkProject) {
    return (
        <Link
            href={link}
            className={cn(
                "group flex items-center gap-6 p-4 rounded-lg transition-all",
                "hover:bg-muted/50",
                "border border-border/50",
                poppins.className
            )}
        >
            <div className="relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="96px"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30 group-hover:opacity-0 transition-opacity" />
            </div>

            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-medium truncate">
                        {title}
                    </h3>
                    {featured && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                            Featured
                        </span>
                    )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {description}
                </p>
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-1.5 py-0.5 text-xs rounded-md bg-background text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}