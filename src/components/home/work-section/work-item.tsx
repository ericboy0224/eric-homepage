import { Button } from '@/components/ui/button';
import { poppins } from '@/components/ui/fonts';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface WorkExperience {
    company: string;
    logoSrc: string;
}

export function WorkItem({ company, children, logoSrc }: React.PropsWithChildren<WorkExperience>) {
    return (
        <ResizablePanelGroup direction="horizontal" className={cn("max-h-[700px]", poppins.className)}>
            <ResizablePanel className='flex flex-col justify-center items-center' defaultSize={20}>
                <Image src={logoSrc} alt={company} width={100} height={100} loading="lazy" className='mb-2' />
                <Button size="sm">
                    <Link href={`/works/${company.toLowerCase()}`} legacyBehavior passHref>More</Link>
                </Button>
            </ResizablePanel>
            <ResizablePanel className='flex justify-center items-center' defaultSize={80}>
                {children}
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}