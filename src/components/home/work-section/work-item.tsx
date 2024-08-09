import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Image from 'next/image';
import Link from 'next/link';

interface WorkExperience {
    company: string;
    companyUrl: string;
    logoSrc: string;
}



export function WorkItem({ company, children, companyUrl, logoSrc }: React.PropsWithChildren<WorkExperience>) {
    return (
        <ResizablePanelGroup direction="vertical" className="max-h-[550px]">
            <ResizablePanel>
                {children}
            </ResizablePanel>
            <ResizablePanel className="flex justify-center items-center">
                <Link href={companyUrl} target="_blank">
                    <Image src={logoSrc} alt={company} width={200} height={100} loading="lazy" />
                </Link>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}