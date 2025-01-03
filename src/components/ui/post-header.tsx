interface PostHeaderProps {
    title: string;
    description?: string;
    date?: string;
    readingTime?: number;
}

export default function PostHeader({ title, description, date, readingTime }: PostHeaderProps) {
    return (
        <header className="relative h-[300px] mb-10 flex items-center justify-center">
            <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight" itemProp="headline">
                    {title}
                </h1>
                {description && (
                    <p className="text-lg text-muted-foreground max-w-[600px] mx-auto" itemProp="description">
                        {description}
                    </p>
                )}
            </div>
        </header>
    );
}