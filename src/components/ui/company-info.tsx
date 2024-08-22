import Image from 'next/image';
import React from 'react';

interface CompanyInfoProps {
    imageSrc: string;
    imageAlt: string;
    description: string;
    note?: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ imageSrc, imageAlt, description, note }) => (
    <div className="p-5 lg:flex justify-center items-center">
        <div className='lg:block flex justify-center items-center'>
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
        </div>
        <p className="text-center text-sm p-5">
            {description}
            {note && (
                <>
                    <br />
                    {note}
                </>
            )}
        </p>
    </div>
);

export default CompanyInfo;