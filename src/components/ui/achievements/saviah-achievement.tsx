import React from "react";
import AchievementList from "../achievement-list";

export default function SaviahAchievement() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h3 className="text-lg font-medium tracking-tight text-foreground/90">Key Achievements</h3>
                <AchievementList
                    achievements={[
                        {
                            title: "Frontend Architecture Leadership",
                            description: "Led a team of 3 developers in redesigning and implementing the core CMS platform for 5G private networks"
                        },
                        {
                            title: "Performance Optimization",
                            description: "Achieved 5x faster build times through migration to Vite and implementation of modern build strategies"
                        },
                        {
                            title: "Code Quality & Testing",
                            description: "Increased test coverage by 45% through comprehensive unit and E2E testing implementation"
                        }
                    ]}
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium tracking-tight text-foreground/90">Media Recognition</h3>
                <AchievementList
                    achievements={[
                        {
                            title: "Tech News Coverage",
                            description: "Featured in major tech publications for innovative 5G private network solutions"
                        },
                        {
                            title: "Industry Impact",
                            description: "Solution deployed across multiple enterprise clients, serving thousands of users"
                        }
                    ]}
                    variant="minimal"
                />
            </div>
        </div>
    );
}