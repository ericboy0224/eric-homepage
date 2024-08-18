import React from 'react';

interface AchievementListProps {
    achievements: string[];
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => (
    <>
        <ul className="mb-5 space-y-2">
            {achievements.map((achievement, index) => (
                <li key={index} className="md:text-md text-sm">
                    {achievement}
                </li>
            ))}
        </ul>
    </>
);

export default AchievementList;