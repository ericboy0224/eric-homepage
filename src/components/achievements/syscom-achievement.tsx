import AchievementList from "../achievement-list";

export default function SyscomAchievement() {
    return (
        <AchievementList
            achievements={[
                "Rebuilt 4-year-old web application in Angular and Rx.js with full user experience.",
                "Built a logic for a report previewer with virtual scroll and improved the loading speed by 90%.",
                "Built a logic for a report downloader (Node.js) and improved the download speed by 30%.",
                "Built data visualization components with d3.js."
            ]}
        />
    );
}