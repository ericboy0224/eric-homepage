import { cn } from '@/lib/utils';
import React from 'react';

interface Achievement {
    title: string;
    description?: string;
}

interface AchievementListProps {
    achievements: Achievement[];
    className?: string;
    variant?: 'default' | 'minimal';
}

const AchievementList: React.FC<AchievementListProps> = ({
    achievements,
    className,
    variant = 'default'
}) => (
    <div className={cn(
        "grid gap-6",
        variant === 'minimal' && "gap-4",
        className
    )}>
        {achievements.map((achievement, index) => (
            <div
                key={index}
                className={cn(
                    "group relative",
                    variant === 'default' && "pl-4 border-l border-border/40 hover:border-border"
                )}
            >
                {variant === 'default' && (
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-border/60 bg-background group-hover:border-primary/80 group-hover:bg-primary/5 transition-colors" />
                )}
                <div className="space-y-1.5">
                    <h4 className={cn(
                        "font-medium leading-tight",
                        variant === 'default'
                            ? "text-base text-foreground/90 group-hover:text-primary transition-colors"
                            : "text-sm text-muted-foreground group-hover:text-foreground"
                    )}>
                        {achievement.title}
                    </h4>
                    {achievement.description && (
                        <p className={cn(
                            "text-muted-foreground/80",
                            variant === 'default' ? "text-sm" : "text-xs"
                        )}>
                            {achievement.description}
                        </p>
                    )}
                </div>
            </div>
        ))}
    </div>
);

export default AchievementList;