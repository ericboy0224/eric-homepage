import SaviahSection from "./saviah";
import SyscomSection from "./syscom";

export default function WorkSection() {
    return (
        <div className="space-y-8">
            <SaviahSection />
            <SyscomSection />
        </div>
    );
}