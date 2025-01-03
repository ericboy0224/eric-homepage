import React from "react";
import AchievementList from "../achievement-list";

export default function SyscomAchievement() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h3 className="text-lg font-medium tracking-tight text-foreground/90">Technical Innovations</h3>
                <AchievementList
                    achievements={[
                        {
                            title: "Enterprise Application Modernization",
                            description: "Successfully modernized a legacy enterprise application, improving user satisfaction by 85%"
                        },
                        {
                            title: "Performance Engineering",
                            description: "Achieved 90% faster report loading through implementation of virtual scrolling and data optimization"
                        }
                    ]}
                />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium tracking-tight text-foreground/90">Core Contributions</h3>
                <AchievementList
                    achievements={[
                        {
                            title: "Data Visualization Platform",
                            description: "Developed interactive data visualization components using D3.js, processing millions of data points"
                        },
                        {
                            title: "System Architecture",
                            description: "Designed and implemented a high-performance report generation system, improving efficiency by 30%"
                        }
                    ]}
                    variant="minimal"
                />
            </div>
        </div>
    );
}