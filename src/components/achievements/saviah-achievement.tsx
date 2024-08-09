import React from "react";

import AchievementList from "../achievement-list";

export default function SaviahAchievement() {
    return (
        <AchievementList
            achievements={[
                "Lead a frontend team of 2+ people.",
                "5x speed up the frontend build time by migrating from Webpack to Vite.",
                "Reduce 30% code by implementing third party libraries.",
                "Improve 25% test coverage by implementing unit test.",
                "Improve 20% test coverage by implementing end-to-end test."
            ]}
        />
    );
}