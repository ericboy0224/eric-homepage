import { Button } from '@/components/ui/button';
import { poppins } from '@/components/ui/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface WorkExperience {
    company: string;
    logoSrc: string;
}

export function WorkItem({ company, children, logoSrc }: React.PropsWithChildren<WorkExperience>) {
    return (
        <div className={cn("flex flex-col md:flex-row max-h-[700px] border rounded-lg overflow-hidden", poppins.className)}>
            <div className='flex flex-col justify-center items-center p-4 md:w-1/5 bg-gray-100 dark:bg-gray-800'>
                <Image src={logoSrc} alt={company} width={100} height={100} loading="lazy" className='mb-4' />
                <Button size="sm">
                    <Link href={`/works/${company.toLowerCase()}`}>More</Link>
                </Button>
            </div>
            <div className='flex-1 p-6 overflow-y-auto'>
                {children}
            </div>
        </div>
    );
}