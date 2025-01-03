import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface CompanyInfoProps {
    imageSrc: string;
    imageAlt: string;
    description: string;
    note?: string;
    className?: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
    imageSrc,
    imageAlt,
    description,
    note,
    className
}) => (
    <div className={cn(
        "relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-background to-muted/30",
        "lg:grid lg:grid-cols-2 lg:gap-8",
        className
    )}>
        <div className="relative aspect-[4/3] lg:aspect-square">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent lg:hidden" />
        </div>

        <div className="relative p-6 lg:p-8 flex flex-col justify-center">
            <div className="space-y-4">
                <p className="text-base/relaxed">
                    {description}
                </p>
                {note && (
                    <p className="text-sm text-muted-foreground italic">
                        {note}
                    </p>
                )}
            </div>
        </div>
    </div>
);

export default CompanyInfo;