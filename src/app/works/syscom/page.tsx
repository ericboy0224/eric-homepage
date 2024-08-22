import React from 'react';

import SyscomAchievement from '../../../components/ui/achievements/syscom-achievement';
import CompanyInfo from '../../../components/ui/company-info';
import WorkLayout from '../../../components/ui/work-layout';

const SyscomContent: React.FC = () => {
 
    return (
        <WorkLayout company="Syscom">
            <SyscomAchievement/>
            <CompanyInfo
                imageSrc="/images/netcenter.png"
                imageAlt="Netcenter"
                description="Netcenter is a solution for enterprise to maintain and manage their network infrastructures."
                note="You can see me from the left side of the picture :)"
            />
        </WorkLayout>
    );
};

export default SyscomContent