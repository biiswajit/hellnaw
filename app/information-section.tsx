import Highlights from "@/ui/highlights";
import Workflow from "@/ui/work-flow";

function InformationSection() {
    return (
        <div className="bg-primary px-mobile md:px-desktop min-h-screen flex flex-col justify-center gap-28">
            <Workflow />
            <Highlights />
        </div>
    );
}

export default InformationSection;
