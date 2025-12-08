import Marquee from "react-fast-marquee";
import Contact from "@/ui/contact";
import Copyright from "@/ui/icons/copyright";
import Hellnaw from "@/ui/icons/hellnaw";

function FooterSection() {
    return (
        <div className="bg-primary pt-[180px]">
            <Contact />
            <Marquee className="pt-[90px] lg:pt-[115px]" speed={80}>
                <Hellnaw />
            </Marquee>
            <div className="flex gap-1 items-center justify-center text-sm pb-2">
                <Copyright className="size-4 opacity-75" />
                <span className="opacity-75">All rights reserved</span>
            </div>
        </div>
    );
}

export default FooterSection;
