import React from 'react';

interface AchievementListProps {
    achievements: string[];
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => (
    <>
        <ul className="mb-5 space-y-2">
            {achievements.map((achievement, index) => (
                <li key={index} className="pl-4 border-l-4 border-primary md:text-md text-sm">
                    {achievement}
                </li>
            ))}
        </ul>
    </>
);

export default AchievementList;