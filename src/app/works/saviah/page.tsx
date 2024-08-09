import SaviahAchievement from '@/components/achievements/saviah-achievement';
import CompanyInfo from '@/components/company-info';
import WorkLayout from '@/components/work-layout';
import React from 'react';

const SaviahContent: React.FC = () => {
    return (
        <WorkLayout company="Saviah">
            <SaviahAchievement />
            <CompanyInfo
                imageSrc="/images/funding-news.png"
                imageAlt="Saviah"
                description="Saviah is a competitive company that provides 5G private network solutions for enterprises."
                note="You can see me from the left side of the picture :)"
            />
        </WorkLayout>
    );
};

export default SaviahContent;